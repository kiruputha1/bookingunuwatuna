"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Users, Phone, MessageCircle, Heart, Eye } from "lucide-react"
import BookingModal from "@/components/booking-modal"

// Mock data - in real app this would come from Supabase
const mockRentals = [
  {
    id: "1",
    title: "Ocean View Resort",
    category: "Hotels",
    price: 150,
    location: "Colombo Beach",
    rating: 4.9,
    reviews: 124,
    image: "/luxury-beachfront-resort-sri-lanka.png",
    features: ["Ocean View", "Swimming Pool", "Restaurant", "Spa", "WiFi", "Air Conditioning"],
    maxCapacity: 4,
    availability: true,
    description: "Luxury beachfront resort with stunning ocean views and world-class amenities.",
    contactInfo: {
      phone: "+94771234567",
      whatsapp: "+94771234567",
      email: "info@oceanviewresort.lk",
    },
  },
  {
    id: "2",
    title: "Toyota Prius Hybrid",
    category: "Cars",
    price: 45,
    location: "Colombo Airport",
    rating: 4.8,
    reviews: 89,
    image: "/toyota-prius-rental.png",
    features: ["Automatic", "Air Conditioning", "GPS", "Bluetooth", "Fuel Efficient"],
    maxCapacity: 5,
    availability: true,
    description: "Fuel-efficient hybrid car perfect for city and highway driving.",
    contactInfo: {
      phone: "+94771234568",
      whatsapp: "+94771234568",
    },
  },
  {
    id: "3",
    title: "Honda CB 150R",
    category: "Bikes",
    price: 25,
    location: "Kandy City",
    rating: 4.7,
    reviews: 56,
    image: "/honda-rental-sri-lanka.png",
    features: ["150cc Engine", "Digital Display", "LED Lights", "Disc Brakes"],
    maxCapacity: 2,
    availability: true,
    description: "Sporty motorcycle ideal for exploring the island.",
    contactInfo: {
      phone: "+94771234569",
      whatsapp: "+94771234569",
    },
  },
  {
    id: "4",
    title: "Hilltop Villa",
    category: "Hotels",
    price: 120,
    location: "Kandy Hills",
    rating: 4.6,
    reviews: 78,
    image: "/hilltop-villa-kandy.png",
    features: ["Mountain View", "Garden", "WiFi", "Breakfast Included"],
    maxCapacity: 6,
    availability: true,
    description: "Peaceful villa with panoramic mountain views.",
    contactInfo: {
      phone: "+94771234570",
      whatsapp: "+94771234570",
    },
  },
  {
    id: "5",
    title: "Cozy Guest Room",
    category: "Rooms",
    price: 35,
    location: "Galle Fort",
    rating: 4.5,
    reviews: 42,
    image: "/galle-fort-guest-room.png",
    features: ["Historic Location", "WiFi", "Shared Kitchen", "Air Conditioning"],
    maxCapacity: 2,
    availability: true,
    description: "Charming room in the heart of historic Galle Fort.",
    contactInfo: {
      phone: "+94771234571",
      whatsapp: "+94771234571",
    },
  },
  {
    id: "6",
    title: "Mercedes Sprinter Van",
    category: "Vans",
    price: 85,
    location: "Colombo",
    rating: 4.8,
    reviews: 34,
    image: "/mercedes-sprinter-van-rental-sri-lanka.png",
    features: ["15 Seater", "Air Conditioning", "Professional Driver", "Luggage Space"],
    maxCapacity: 15,
    availability: true,
    description: "Spacious van perfect for group travel and tours.",
    contactInfo: {
      phone: "+94771234572",
      whatsapp: "+94771234572",
    },
  },
]

export default function RentalGrid() {
  const [rentals, setRentals] = useState(mockRentals)
  const [favorites, setFavorites] = useState<string[]>([])
  const [selectedRental, setSelectedRental] = useState<any>(null)
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)

  const toggleFavorite = (rentalId: string) => {
    setFavorites((prev) => (prev.includes(rentalId) ? prev.filter((id) => id !== rentalId) : [...prev, rentalId]))
  }

  const handleBookNow = (rental: any) => {
    setSelectedRental(rental)
    setIsBookingModalOpen(true)
  }

  const handleWhatsAppContact = (rental: any) => {
    const message = `Hi! I'm interested in booking ${rental.title} (${rental.category}) for $${rental.price}/day. Can you provide more details?`
    const whatsappUrl = `https://wa.me/${rental.contactInfo.whatsapp?.replace("+", "")}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="font-serif text-2xl font-bold text-tourism-navy">Available Rentals ({rentals.length})</h2>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span>Sort by:</span>
            <select className="border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-tourism-teal">
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Rating</option>
              <option>Most Popular</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {rentals.map((rental) => (
            <Card key={rental.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative">
                <img
                  src={rental.image || "/placeholder.svg"}
                  alt={rental.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Overlay buttons */}
                <div className="absolute top-4 right-4 flex space-x-2">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="bg-white/90 hover:bg-white"
                    onClick={() => toggleFavorite(rental.id)}
                  >
                    <Heart
                      className={`h-4 w-4 ${favorites.includes(rental.id) ? "fill-red-500 text-red-500" : "text-gray-600"}`}
                    />
                  </Button>
                  <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                    <Eye className="h-4 w-4 text-gray-600" />
                  </Button>
                </div>

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <Badge className="bg-tourism-coral text-white">{rental.category}</Badge>
                </div>

                {/* Price badge */}
                <div className="absolute bottom-4 right-4">
                  <div className="bg-white/95 backdrop-blur-sm px-3 py-2 rounded-lg">
                    <span className="font-bold text-tourism-navy">${rental.price}</span>
                    <span className="text-sm text-gray-600">/day</span>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-serif text-xl font-bold text-tourism-navy line-clamp-1">{rental.title}</h3>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-tourism-gold fill-current" />
                    <span className="text-sm font-medium ml-1">{rental.rating}</span>
                    <span className="text-sm text-gray-500 ml-1">({rental.reviews})</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{rental.description}</p>

                <div className="flex items-center text-gray-600 mb-4 text-sm">
                  <MapPin className="h-4 w-4 mr-1 text-tourism-teal" />
                  <span className="mr-4">{rental.location}</span>
                  <Users className="h-4 w-4 mr-1 text-tourism-teal" />
                  <span>Up to {rental.maxCapacity} people</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {rental.features.slice(0, 3).map((feature, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                  {rental.features.length > 3 && (
                    <Badge variant="outline" className="text-xs text-tourism-teal">
                      +{rental.features.length - 3} more
                    </Badge>
                  )}
                </div>

                <div className="flex space-x-2">
                  <Button
                    className="flex-1 bg-tourism-teal hover:bg-tourism-teal/90 text-white"
                    onClick={() => handleBookNow(rental)}
                  >
                    Book Now
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-tourism-coral text-tourism-coral hover:bg-tourism-coral hover:text-white bg-transparent"
                    onClick={() => handleWhatsAppContact(rental)}
                  >
                    <MessageCircle className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-300 text-gray-600 hover:bg-gray-50 bg-transparent"
                  >
                    <Phone className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        rental={selectedRental}
        bookingType="rental"
      />
    </>
  )
}
