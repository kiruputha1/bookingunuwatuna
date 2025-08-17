import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function BlogHero() {
  return (
    <div className="relative bg-gradient-to-br from-tourism-teal to-tourism-navy py-20">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">Discover Sri Lanka</h1>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Your ultimate guide to exploring the pearl of the Indian Ocean. Get insider tips, cultural insights, and
          travel inspiration for your Sri Lankan adventure.
        </p>

        <div className="max-w-md mx-auto flex space-x-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search articles..."
              className="pl-10 bg-white/95 border-0 focus:ring-2 focus:ring-tourism-coral"
            />
          </div>
          <Button className="bg-tourism-coral hover:bg-tourism-coral/90 text-white">Search</Button>
        </div>
      </div>
    </div>
  )
}
