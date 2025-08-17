"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Users, Clock, MessageCircle, Phone, Heart, Eye, CheckCircle } from "lucide-react"
import BookingModal from "@/components/booking-modal"

// Mock data - in real app this would come from Supabase
const mockServices = [
  {
    id: "1",
    title: "Sigiriya & Dambulla Day Tour",
    description: "Explore the ancient rock fortress of Sigiriya and the golden temple of Dambulla in one amazing day.",
    price: 85,
    duration: "Full Day (8 hours)",
    location: "Sigiriya & Dambulla",
    rating: 4.9,
    reviews: 156,
    maxParticipants: 15,
    image: "/sigiriya-fortress-temple.png",
    includes: ["Transportation", "English Speaking Guide", "Entrance Tickets", "Lunch", "Water Bottles"],
    excludes: ["Personal Expenses", "Tips", "Camera Tickets"],
    itinerary: {
      day1: {
        morning: "Pick up from hotel, drive to Sigiriya",
        afternoon: "Climb Sigiriya Rock Fortress",
        evening: "Visit Dambulla Cave Temple, return to hotel",
      },
    },
    category: "Cultural",
    availability: true,
    contactInfo: {
      phone: "+94771234570",
      whatsapp: "+94771234570",
      email: "tours@srilankadiscovery.com",
    },
  },
  {
    id: "2",
    title: "Kandy Cultural Triangle",
    description:
      "Immerse yourself in Sri Lankan culture with visits to the Temple of the Tooth and traditional dance performances.",
    price: 65,
    duration: "Half Day (4 hours)",
    location: "Kandy",
    rating: 4.8,
    reviews: 98,
    maxParticipants: 20,
    image: "/kandy-cultural-dance.png",
    includes: ["Transportation", "Guide", "Temple Entrance", "Cultural Show Tickets"],
    excludes: ["Meals", "Personal Expenses"],
    itinerary: {
      day1: {
        morning: "Temple of the Tooth visit",
        afternoon: "Royal Botanical Gardens, Cultural dance show",
      },
    },
    category: "Cultural",
    availability: true,
    contactInfo: {
      phone: "+94771234571",
      whatsapp: "+94771234571",
    },
  },
  {
    id: "3",
    title: "Yala Safari Adventure",
    description:
      "Experience Sri Lanka's wildlife in Yala National Park with chances to spot leopards, elephants, and exotic birds.",
    price: 120,
    duration: "Full Day (10 hours)",
    location: "Yala National Park",
    rating: 4.7,
    reviews: 203,
    maxParticipants: 8,
    image: "/yala-safari-leopard.png",
    includes: ["4WD Safari Vehicle", "Professional Guide", "Park Entrance", "Breakfast", "Lunch", "Water"],
    excludes: ["Accommodation", "Personal Expenses", "Tips"],
    itinerary: {
      day1: {
        morning: "Early morning pickup, drive to Yala",
        afternoon: "Full day safari with lunch break",
        evening: "Return journey with sunset viewing",
      },
    },
    category: "Wildlife",
    availability: true,
    contactInfo: {
      phone: "+94771234572",
      whatsapp: "+94771234572",
    },
  },
  {
    id: "4",
    title: "Ella Hiking & Train Experience",
    description: "Hike to Little Adam's Peak and Nine Arch Bridge, plus scenic train journey through tea plantations.",
    price: 95,
    duration: "Full Day (9 hours)",
    location: "Ella & Nuwara Eliya",
    rating: 4.9,
    reviews: 134,
    maxParticipants: 12,
    image: "/ella-nine-arch-bridge.png",
    includes: ["Transportation", "Train Tickets", "Guide", "Lunch", "Tea Factory Visit"],
    excludes: ["Accommodation", "Personal Expenses"],
    itinerary: {
      day1: {
        morning: "Little Adam's Peak hike",
        afternoon: "Nine Arch Bridge, scenic train ride",
        evening: "Tea factory visit and return",
      },
    },
    category: "Adventure",
    availability: true,
    contactInfo: {
      phone: "+94771234573",
      whatsapp: "+94771234573",
    },
  },
  {
    id: "5",
    title: "Galle Fort & Southern Coast",
    description: "Explore the historic Galle Fort, enjoy beach time, and experience traditional stilt fishing.",
    price: 75,
    duration: "Full Day (8 hours)",
    location: "Galle & Southern Coast",
    rating: 4.6,
    reviews: 89,
    maxParticipants: 16,
    image: "/galle-fort-lighthouse.png",
    includes: ["Transportation", "Guide", "Fort Entrance", "Lunch", "Beach Activities"],
    excludes: ["Water Sports", "Personal Expenses"],
    itinerary: {
      day1: {
        morning: "Galle Fort exploration",
        afternoon: "Beach time and stilt fishing demonstration",
        evening: "Sunset at lighthouse, return journey",
      },
    },
    category: "Beach",
    availability: true,
    contactInfo: {
      phone: "+94771234574",
      whatsapp: "+94771234574",
    },
  },
  {
    id: "6",
    title: "Adam's Peak Pilgrimage",
    description: "Spiritual journey to the sacred Adam's Peak with sunrise viewing from the summit.",
    price: 110,
    duration: "2 Days 1 Night",
    location: "Adam's Peak",
    rating: 4.8,
    reviews: 167,
    maxParticipants: 10,
    image: "/adams-peak-sunrise.png",
    includes: ["Transportation", "Guide", "Accommodation", "All Meals", "Climbing Equipment"],
    excludes: ["Personal Expenses", "Tips"],
    itinerary: {
      day1: {
        afternoon: "Travel to base camp, rest and prepare",
        evening: "Early dinner and briefing",
      },
      day2: {
        morning: "Pre-dawn climb, sunrise at summit",
        afternoon: "Descent and return journey",
      },
    },
    category: "Adventure",
    availability: true,
    contactInfo: {
      phone: "+94771234575",
      whatsapp: "+94771234575",
    },
  },
]

export default function ServiceGrid() {
  const [services, setServices] = useState(mockServices)
  const [favorites, setFavorites] = useState<string[]>([])
  const [selectedService, setSelectedService] = useState<any>(null)
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)

  const toggleFavorite = (serviceId: string) => {
    setFavorites((prev) => (prev.includes(serviceId) ? prev.filter((id) => id !== serviceId) : [...prev, serviceId]))
  }

  const handleBookNow = (service: any) => {
    setSelectedService(service)
    setIsBookingModalOpen(true)
  }

  const handleWhatsAppContact = (service: any) => {
    const message = `Hi! I'm interested in booking "${service.title}" tour for $${service.price} per person. Can you provide more details about availability and booking?`
    const whatsappUrl = `https://wa.me/${service.contactInfo.whatsapp?.replace("+", "")}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="font-serif text-2xl font-bold text-tourism-navy">Available Tours ({services.length})</h2>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span>Sort by:</span>
            <select className="border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-tourism-teal">
              <option>Most Popular</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Duration</option>
              <option>Rating</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {services.map((service) => (
            <Card key={service.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="lg:flex">
                <div className="lg:w-2/5 relative">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Overlay buttons */}
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-white/90 hover:bg-white"
                      onClick={() => toggleFavorite(service.id)}
                    >
                      <Heart
                        className={`h-4 w-4 ${favorites.includes(service.id) ? "fill-red-500 text-red-500" : "text-gray-600"}`}
                      />
                    </Button>
                    <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                      <Eye className="h-4 w-4 text-gray-600" />
                    </Button>
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-tourism-coral text-white">{service.category}</Badge>
                  </div>

                  {/* Price badge */}
                  <div className="absolute bottom-4 right-4">
                    <div className="bg-white/95 backdrop-blur-sm px-3 py-2 rounded-lg">
                      <span className="font-bold text-tourism-navy">${service.price}</span>
                      <span className="text-sm text-gray-600">/person</span>
                    </div>
                  </div>
                </div>

                <div className="lg:w-3/5">
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-serif text-xl font-bold text-tourism-navy line-clamp-2">{service.title}</h3>
                      <div className="flex items-center ml-4">
                        <Star className="h-4 w-4 text-tourism-gold fill-current" />
                        <span className="text-sm font-medium ml-1">{service.rating}</span>
                        <span className="text-sm text-gray-500 ml-1">({service.reviews})</span>
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{service.description}</p>

                    <div className="space-y-2 mb-4 text-sm">
                      <div className="flex items-center text-gray-600">
                        <Clock className="h-4 w-4 mr-2 text-tourism-teal" />
                        <span>{service.duration}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 mr-2 text-tourism-teal" />
                        <span>{service.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users className="h-4 w-4 mr-2 text-tourism-teal" />
                        <span>Up to {service.maxParticipants} participants</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-700 mb-2">Includes:</p>
                      <div className="flex flex-wrap gap-1">
                        {service.includes.slice(0, 4).map((item, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            {item}
                          </Badge>
                        ))}
                        {service.includes.length > 4 && (
                          <Badge variant="outline" className="text-xs text-tourism-teal">
                            +{service.includes.length - 4} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="mt-auto flex space-x-2">
                      <Button
                        className="flex-1 bg-tourism-coral hover:bg-tourism-coral/90 text-white"
                        onClick={() => handleBookNow(service)}
                      >
                        Book Tour
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-tourism-teal text-tourism-teal hover:bg-tourism-teal hover:text-white bg-transparent"
                        onClick={() => handleWhatsAppContact(service)}
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
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        rental={selectedService}
        bookingType="service"
      />
    </>
  )
}
