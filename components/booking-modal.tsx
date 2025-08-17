"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CalendarIcon, MessageCircle, Phone, Mail, CheckCircle } from "lucide-react"
import { format } from "date-fns"
import { createClient } from "@/lib/supabase/client"

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
  rental: any
  bookingType: "rental" | "service"
}

export default function BookingModal({ isOpen, onClose, rental, bookingType }: BookingModalProps) {
  const [startDate, setStartDate] = useState<Date>()
  const [endDate, setEndDate] = useState<Date>()
  const [formData, setFormData] = useState({
    customerName: "",
    customerEmail: "",
    customerPhone: "",
    customerWhatsapp: "",
    participants: 1,
    specialRequests: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const supabase = createClient()

  const handleInputChange = (field: string, value: string | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const calculateTotal = () => {
    if (!startDate || !endDate || !rental) return 0
    const days = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))
    return days * rental.price * formData.participants
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const { error } = await supabase.from("bookings").insert([
        {
          customer_name: formData.customerName,
          customer_email: formData.customerEmail,
          customer_phone: formData.customerPhone,
          customer_whatsapp: formData.customerWhatsapp,
          item_id: rental.id,
          item_type: bookingType,
          item_title: rental.title,
          start_date: startDate?.toISOString(),
          end_date: endDate?.toISOString(),
          participants: formData.participants,
          total_amount: calculateTotal(),
          special_requests: formData.specialRequests,
          status: "pending",
        },
      ])

      if (error) {
        throw error
      }

      // Create WhatsApp message
      const message = `
🏨 *Booking Request*

*${bookingType === "rental" ? "Rental" : "Service"}:* ${rental?.title}
*Customer:* ${formData.customerName}
*Email:* ${formData.customerEmail}
*Phone:* ${formData.customerPhone}
*WhatsApp:* ${formData.customerWhatsapp}
*Start Date:* ${startDate ? format(startDate, "PPP") : "Not selected"}
*End Date:* ${endDate ? format(endDate, "PPP") : "Not selected"}
*Participants:* ${formData.participants}
*Total Amount:* $${calculateTotal()}
*Special Requests:* ${formData.specialRequests || "None"}

Please confirm availability and provide booking details.
      `.trim()

      const whatsappUrl = `https://wa.me/${rental?.contactInfo?.whatsapp?.replace("+", "")}?text=${encodeURIComponent(message)}`
      window.open(whatsappUrl, "_blank")

      setSubmitStatus("success")

      // Reset form after successful submission
      setTimeout(() => {
        onClose()
        setSubmitStatus("idle")
        setFormData({
          customerName: "",
          customerEmail: "",
          customerPhone: "",
          customerWhatsapp: "",
          participants: 1,
          specialRequests: "",
        })
        setStartDate(undefined)
        setEndDate(undefined)
      }, 2000)
    } catch (error: any) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!rental) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl text-tourism-navy">Book {rental.title}</DialogTitle>
        </DialogHeader>

        {submitStatus === "success" && (
          <Alert className="border-green-200 bg-green-50">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-800">
              Booking request submitted successfully! You'll be redirected to WhatsApp to complete your booking.
            </AlertDescription>
          </Alert>
        )}

        {submitStatus === "error" && (
          <Alert className="border-red-200 bg-red-50">
            <AlertDescription className="text-red-800">
              Failed to submit booking. Please try again or contact us directly.
            </AlertDescription>
          </Alert>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Rental Info */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center space-x-4">
              <img
                src={rental.image || "/placeholder.svg"}
                alt={rental.title}
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div>
                <h3 className="font-serif text-lg font-bold">{rental.title}</h3>
                <p className="text-gray-600">{rental.location}</p>
                <p className="text-tourism-teal font-bold">${rental.price}/day</p>
              </div>
            </div>
          </div>

          {/* Customer Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="customerName">Full Name *</Label>
              <Input
                id="customerName"
                value={formData.customerName}
                onChange={(e) => handleInputChange("customerName", e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="customerEmail">Email *</Label>
              <Input
                id="customerEmail"
                type="email"
                value={formData.customerEmail}
                onChange={(e) => handleInputChange("customerEmail", e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="customerPhone">Phone Number *</Label>
              <Input
                id="customerPhone"
                value={formData.customerPhone}
                onChange={(e) => handleInputChange("customerPhone", e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="customerWhatsapp">WhatsApp Number</Label>
              <Input
                id="customerWhatsapp"
                value={formData.customerWhatsapp}
                onChange={(e) => handleInputChange("customerWhatsapp", e.target.value)}
                placeholder="For booking confirmations"
              />
            </div>
          </div>

          {/* Booking Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label>Start Date *</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start text-left font-normal bg-transparent">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {startDate ? format(startDate, "PPP") : "Pick a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={startDate} onSelect={setStartDate} initialFocus />
                </PopoverContent>
              </Popover>
            </div>
            <div>
              <Label>End Date *</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start text-left font-normal bg-transparent">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {endDate ? format(endDate, "PPP") : "Pick a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={endDate} onSelect={setEndDate} initialFocus />
                </PopoverContent>
              </Popover>
            </div>
            <div>
              <Label htmlFor="participants">Participants</Label>
              <Input
                id="participants"
                type="number"
                min="1"
                max={rental.maxCapacity}
                value={formData.participants}
                onChange={(e) => handleInputChange("participants", Number.parseInt(e.target.value))}
              />
            </div>
          </div>

          {/* Special Requests */}
          <div>
            <Label htmlFor="specialRequests">Special Requests</Label>
            <Textarea
              id="specialRequests"
              value={formData.specialRequests}
              onChange={(e) => handleInputChange("specialRequests", e.target.value)}
              placeholder="Any special requirements or requests..."
              rows={3}
            />
          </div>

          {/* Total */}
          {startDate && endDate && (
            <div className="bg-tourism-teal/10 p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="font-medium">Total Amount:</span>
                <span className="text-2xl font-bold text-tourism-teal">${calculateTotal()}</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">
                {Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))} days × ${rental.price} ×{" "}
                {formData.participants} participant(s)
              </p>
            </div>
          )}

          {/* Contact Options */}
          <div className="flex space-x-3">
            <Button
              type="submit"
              className="flex-1 bg-tourism-coral hover:bg-tourism-coral/90 text-white"
              disabled={isSubmitting}
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              {isSubmitting ? "Processing..." : "Book via WhatsApp"}
            </Button>
            <Button
              type="button"
              variant="outline"
              className="border-tourism-teal text-tourism-teal hover:bg-tourism-teal hover:text-white bg-transparent"
              onClick={() => window.open(`tel:${rental.contactInfo?.phone}`, "_self")}
            >
              <Phone className="h-4 w-4" />
            </Button>
            {rental.contactInfo?.email && (
              <Button
                type="button"
                variant="outline"
                className="border-gray-300 text-gray-600 hover:bg-gray-50 bg-transparent"
                onClick={() => window.open(`mailto:${rental.contactInfo.email}`, "_self")}
              >
                <Mail className="h-4 w-4" />
              </Button>
            )}
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
