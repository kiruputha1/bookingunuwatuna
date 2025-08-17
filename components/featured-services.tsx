import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Users, Star, MapPin } from "lucide-react"
import Link from "next/link"

const featuredServices = [
  {
    id: 1,
    title: "Sigiriya & Dambulla Day Tour",
    description: "Explore the ancient rock fortress of Sigiriya and the golden temple of Dambulla in one amazing day.",
    price: 85,
    duration: "Full Day (8 hours)",
    location: "Sigiriya & Dambulla",
    rating: 4.9,
    reviews: 156,
    maxParticipants: 15,
    image: "/sigiriya-fortress-temple.png",
    includes: ["Transportation", "English Speaking Guide", "Entrance Tickets", "Lunch"],
  },
  {
    id: 2,
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
  },
]

export default function FeaturedServices() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-tourism-navy mb-4">Popular Tours & Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover Sri Lanka's rich heritage and natural beauty with our expertly crafted tour packages
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {featuredServices.map((service) => (
            <Card key={service.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2">
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-serif text-xl font-bold text-tourism-navy">{service.title}</h3>
                      <div className="bg-tourism-gold text-tourism-navy px-3 py-1 rounded-full text-sm font-bold">
                        ${service.price}
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.description}</p>

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
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-tourism-gold fill-current mr-1" />
                        <span className="font-medium">{service.rating}</span>
                        <span className="text-gray-500 ml-1">({service.reviews} reviews)</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-700 mb-2">Includes:</p>
                      <div className="flex flex-wrap gap-1">
                        {service.includes.map((item, index) => (
                          <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-auto">
                      <Button className="w-full bg-tourism-coral hover:bg-tourism-coral/90 text-white">
                        Book This Tour
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/services">
            <Button
              variant="outline"
              size="lg"
              className="border-tourism-coral text-tourism-coral hover:bg-tourism-coral hover:text-white bg-transparent"
            >
              View All Tours & Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
