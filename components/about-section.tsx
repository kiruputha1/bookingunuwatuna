import { Card, CardContent } from "@/components/ui/card"
import { Shield, Award, Users, Heart } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Trusted & Safe",
    description: "Licensed and insured services with 24/7 customer support for your peace of mind.",
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Recognized as Sri Lanka's leading tourism service provider with multiple industry awards.",
  },
  {
    icon: Users,
    title: "Expert Guides",
    description: "Local experts who know every hidden gem and story that makes Sri Lanka special.",
  },
  {
    icon: Heart,
    title: "Authentic Experiences",
    description: "Genuine cultural immersion and connections with local communities and traditions.",
  },
]

export default function AboutSection() {
  return (
    <section className="py-20 bg-tourism-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Your Gateway to
              <span className="text-tourism-gold block">Authentic Sri Lanka</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              For over a decade, Ceylon Travels has been crafting unforgettable journeys across the pearl of the Indian
              Ocean. We combine local expertise with international standards to deliver experiences that go beyond
              ordinary tourism.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              From the ancient kingdoms of Anuradhapura to the pristine beaches of the south coast, from the misty
              mountains of Ella to the wildlife sanctuaries of Yala, we help you discover the true essence of Sri Lankan
              hospitality and natural beauty.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-tourism-gold mb-2">10+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-tourism-gold mb-2">10K+</div>
                <div className="text-gray-300">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-tourism-gold mb-2">50+</div>
                <div className="text-gray-300">Destinations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-tourism-gold mb-2">4.9</div>
                <div className="text-gray-300">Average Rating</div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card
                  key={index}
                  className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-colors"
                >
                  <CardContent className="p-6 text-center">
                    <div className="bg-tourism-gold/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-tourism-gold" />
                    </div>
                    <h3 className="font-serif text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
