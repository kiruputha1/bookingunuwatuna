import { MessageCircle, Phone, Mail, MapPin } from "lucide-react"

export default function ContactHero() {
  return (
    <div className="relative bg-gradient-to-br from-tourism-navy to-tourism-teal py-20">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">Get in Touch</h1>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Ready to explore Sri Lanka? Our travel experts are here to help you plan the perfect adventure. Contact us
          today for personalized assistance.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <Phone className="h-8 w-8 text-white mx-auto mb-3" />
            <h3 className="font-semibold text-white mb-1">Call Us</h3>
            <p className="text-white/80 text-sm">+94 77 123 4567</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <MessageCircle className="h-8 w-8 text-white mx-auto mb-3" />
            <h3 className="font-semibold text-white mb-1">WhatsApp</h3>
            <p className="text-white/80 text-sm">+94 77 123 4567</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <Mail className="h-8 w-8 text-white mx-auto mb-3" />
            <h3 className="font-semibold text-white mb-1">Email</h3>
            <p className="text-white/80 text-sm">info@srilanka.com</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <MapPin className="h-8 w-8 text-white mx-auto mb-3" />
            <h3 className="font-semibold text-white mb-1">Location</h3>
            <p className="text-white/80 text-sm">Colombo, Sri Lanka</p>
          </div>
        </div>
      </div>
    </div>
  )
}
