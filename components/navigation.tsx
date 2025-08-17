"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, MapPin, Phone, MessageCircle } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const handleWhatsAppContact = () => {
    const message = "Hi! I'm interested in your tourism services. Can you help me plan my Sri Lanka trip?"
    const whatsappUrl = `https://wa.me/+94771234567?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <MapPin className="h-8 w-8 text-tourism-teal" />
            <span className="font-serif text-2xl font-bold text-tourism-navy">Ceylon Travels</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-tourism-teal transition-colors">
              Home
            </Link>
            <Link href="/rentals" className="text-gray-700 hover:text-tourism-teal transition-colors">
              Rentals
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-tourism-teal transition-colors">
              Services
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-tourism-teal transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-tourism-teal transition-colors">
              Contact
            </Link>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                className="border-tourism-teal text-tourism-teal hover:bg-tourism-teal hover:text-white bg-transparent"
                onClick={() => window.open("tel:+94771234567", "_self")}
              >
                <Phone className="h-4 w-4" />
              </Button>
              <Button className="bg-tourism-coral hover:bg-tourism-coral/90 text-white" onClick={handleWhatsAppContact}>
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-tourism-teal transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/rentals"
                className="text-gray-700 hover:text-tourism-teal transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Rentals
              </Link>
              <Link
                href="/services"
                className="text-gray-700 hover:text-tourism-teal transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/blog"
                className="text-gray-700 hover:text-tourism-teal transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-tourism-teal transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <div className="flex space-x-2 pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-tourism-teal text-tourism-teal hover:bg-tourism-teal hover:text-white bg-transparent"
                  onClick={() => {
                    window.open("tel:+94771234567", "_self")
                    setIsOpen(false)
                  }}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call
                </Button>
                <Button
                  className="bg-tourism-coral hover:bg-tourism-coral/90 text-white"
                  onClick={() => {
                    handleWhatsAppContact()
                    setIsOpen(false)
                  }}
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
