import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, MapPin, Users, Car, Hotel, Bike } from "lucide-react"
import Link from "next/link"

const featuredRentals = [
  {
    id: 1,
    title: "Ocean View Resort",
    category: "Hotels",
    price: 150,
    location: "Colombo Beach",
    rating: 4.9,
    reviews: 124,
    image: "/luxury-beachfront-resort-sri-lanka.png",
    features: ["Ocean View", "Swimming Pool", "Restaurant", "Spa"],
    icon: Hotel,
    maxCapacity: 4,
  },
  {
    id: 2,
    title: "Toyota Prius Hybrid",
    category: "Cars",
    price: 45,
    location: "Colombo Airport",
    rating: 4.8,
    reviews: 89,
    image: "/toyota-prius-rental.png",
    features: ["Automatic", "Air Conditioning", "GPS", "Bluetooth"],
    icon: Car,
    maxCapacity: 5,
  },
  {
    id: 3,
    title: "Honda CB 150R",
    category: "Bikes",
    price: 25,
    location: "Kandy City",
    rating: 4.7,
    reviews: 56,
    image: "/honda-rental-sri-lanka.png",
    features: ["150cc Engine", "Digital Display", "LED Lights"],
    icon: Bike,
    maxCapacity: 2,
  },
]

export default function FeaturedRentals() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-tourism-navy mb-4">Featured Rentals</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our premium selection of accommodations and vehicles for your perfect Sri Lankan adventure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredRentals.map((rental) => {
            const IconComponent = rental.icon
            return (
              <Card key={rental.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={rental.image || "/placeholder.svg"}
                    alt={rental.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-tourism-coral text-white px-3 py-1 rounded-full text-sm font-medium">
                      {rental.category}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center">
                      <IconComponent className="h-4 w-4 text-tourism-teal mr-1" />
                      <span className="text-sm font-medium">${rental.price}/day</span>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-serif text-xl font-bold text-tourism-navy">{rental.title}</h3>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-tourism-gold fill-current" />
                      <span className="text-sm font-medium ml-1">{rental.rating}</span>
                      <span className="text-sm text-gray-500 ml-1">({rental.reviews})</span>
                    </div>
                  </div>

                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{rental.location}</span>
                    <Users className="h-4 w-4 ml-4 mr-1" />
                    <span className="text-sm">Up to {rental.maxCapacity} people</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {rental.features.slice(0, 3).map((feature, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {feature}
                      </span>
                    ))}
                    {rental.features.length > 3 && (
                      <span className="text-tourism-teal text-xs font-medium">+{rental.features.length - 3} more</span>
                    )}
                  </div>

                  <Button className="w-full bg-tourism-teal hover:bg-tourism-teal/90 text-white">Book Now</Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Link href="/rentals">
            <Button
              variant="outline"
              size="lg"
              className="border-tourism-teal text-tourism-teal hover:bg-tourism-teal hover:text-white bg-transparent"
            >
              View All Rentals
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
