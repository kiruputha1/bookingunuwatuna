"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react"

export default function ContactInfo() {
  const handleWhatsAppClick = () => {
    const message = "Hi! I'm interested in your tourism services. Can you help me plan my Sri Lanka trip?"
    const whatsappUrl = `https://wa.me/+94771234567?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="font-serif text-xl text-tourism-navy">Contact Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-tourism-teal/10 rounded-lg">
              <Phone className="h-5 w-5 text-tourism-teal" />
            </div>
            <div>
              <p className="font-medium text-gray-900">Phone</p>
              <p className="text-gray-600">+94 77 123 4567</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="p-2 bg-tourism-coral/10 rounded-lg">
              <MessageCircle className="h-5 w-5 text-tourism-coral" />
            </div>
            <div>
              <p className="font-medium text-gray-900">WhatsApp</p>
              <p className="text-gray-600">+94 77 123 4567</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="p-2 bg-tourism-gold/10 rounded-lg">
              <Mail className="h-5 w-5 text-tourism-gold" />
            </div>
            <div>
              <p className="font-medium text-gray-900">Email</p>
              <p className="text-gray-600">info@srilankadiscovery.com</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="p-2 bg-tourism-navy/10 rounded-lg">
              <MapPin className="h-5 w-5 text-tourism-navy" />
            </div>
            <div>
              <p className="font-medium text-gray-900">Address</p>
              <p className="text-gray-600">123 Galle Road, Colombo 03, Sri Lanka</p>
            </div>
          </div>

          <div className="pt-4 space-y-2">
            <Button onClick={handleWhatsAppClick} className="w-full bg-green-600 hover:bg-green-700 text-white">
              <MessageCircle className="mr-2 h-4 w-4" />
              Chat on WhatsApp
            </Button>
            <Button
              variant="outline"
              className="w-full border-tourism-teal text-tourism-teal hover:bg-tourism-teal hover:text-white bg-transparent"
              onClick={() => window.open("tel:+94771234567", "_self")}
            >
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-serif text-xl text-tourism-navy">Business Hours</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center space-x-3">
            <Clock className="h-5 w-5 text-tourism-teal" />
            <div>
              <p className="font-medium text-gray-900">Office Hours</p>
              <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p className="text-gray-600">Saturday: 9:00 AM - 4:00 PM</p>
              <p className="text-gray-600">Sunday: Closed</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 pt-2">
            <MessageCircle className="h-5 w-5 text-green-600" />
            <div>
              <p className="font-medium text-gray-900">WhatsApp Support</p>
              <p className="text-gray-600">Available 24/7 for urgent inquiries</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-serif text-xl text-tourism-navy">Why Choose Us?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-tourism-teal rounded-full mt-2"></div>
            <p className="text-gray-600">Local expertise with 10+ years experience</p>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-tourism-coral rounded-full mt-2"></div>
            <p className="text-gray-600">24/7 customer support via WhatsApp</p>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-tourism-gold rounded-full mt-2"></div>
            <p className="text-gray-600">Customized travel packages</p>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-tourism-navy rounded-full mt-2"></div>
            <p className="text-gray-600">Best price guarantee</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
