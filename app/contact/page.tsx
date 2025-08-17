import type { Metadata } from "next"
import ContactHero from "@/components/contact-hero"
import ContactForm from "@/components/contact-form"
import ContactInfo from "@/components/contact-info"
import ContactMap from "@/components/contact-map"

export const metadata: Metadata = {
  title: "Contact Us | Sri Lanka Tourism Services",
  description:
    "Get in touch with our tourism experts. We're here to help plan your perfect Sri Lankan adventure with personalized service and local expertise.",
  keywords: "contact, Sri Lanka tourism, travel assistance, booking help, customer service",
  openGraph: {
    title: "Contact Us | Sri Lanka Tourism Services",
    description: "Get in touch with our tourism experts for personalized travel assistance.",
    type: "website",
    url: "/contact",
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <ContactHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <ContactForm />
          </div>
          <div className="space-y-8">
            <ContactInfo />
            <ContactMap />
          </div>
        </div>
      </div>
    </div>
  )
}
