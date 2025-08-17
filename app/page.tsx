import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import FeaturedRentals from "@/components/featured-rentals"
import FeaturedServices from "@/components/featured-services"
import AboutSection from "@/components/about-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturedRentals />
      <FeaturedServices />
      <AboutSection />
    </main>
  )
}
