import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Users, MapPin } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/sri-lanka-beach.png"
          alt="Beautiful Sri Lankan landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Discover the
            <span className="text-tourism-gold block">Pearl of the Indian Ocean</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
            Experience authentic Sri Lankan hospitality with our premium tourism services. From luxury accommodations to
            guided adventures, we make your journey unforgettable.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-tourism-coral hover:bg-tourism-coral/90 text-white px-8 py-4 text-lg">
              Explore Tours
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-tourism-navy px-8 py-4 text-lg bg-transparent"
            >
              View Rentals
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="flex items-center mb-2">
                <Star className="h-6 w-6 text-tourism-gold mr-2" />
                <span className="text-2xl font-bold">4.9</span>
              </div>
              <p className="text-gray-300">Customer Rating</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center mb-2">
                <Users className="h-6 w-6 text-tourism-gold mr-2" />
                <span className="text-2xl font-bold">10K+</span>
              </div>
              <p className="text-gray-300">Happy Travelers</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center mb-2">
                <MapPin className="h-6 w-6 text-tourism-gold mr-2" />
                <span className="text-2xl font-bold">50+</span>
              </div>
              <p className="text-gray-300">Destinations</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
