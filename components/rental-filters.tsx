"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { MapPin, DollarSign, Users, Star, Filter } from "lucide-react"

export default function RentalFilters() {
  const [priceRange, setPriceRange] = useState([0, 500])
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([])
  const [selectedLocations, setSelectedLocations] = useState<string[]>([])

  const features = [
    "Air Conditioning",
    "WiFi",
    "Swimming Pool",
    "Restaurant",
    "Spa",
    "Gym",
    "Parking",
    "Pet Friendly",
    "Ocean View",
    "Mountain View",
    "GPS",
    "Bluetooth",
    "Automatic",
    "Manual",
  ]

  const locations = [
    "Colombo",
    "Kandy",
    "Galle",
    "Negombo",
    "Ella",
    "Nuwara Eliya",
    "Sigiriya",
    "Anuradhapura",
    "Trincomalee",
    "Bentota",
  ]

  const handleFeatureChange = (feature: string, checked: boolean) => {
    if (checked) {
      setSelectedFeatures([...selectedFeatures, feature])
    } else {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== feature))
    }
  }

  const handleLocationChange = (location: string, checked: boolean) => {
    if (checked) {
      setSelectedLocations([...selectedLocations, location])
    } else {
      setSelectedLocations(selectedLocations.filter((l) => l !== location))
    }
  }

  const clearFilters = () => {
    setPriceRange([0, 500])
    setSelectedFeatures([])
    setSelectedLocations([])
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-serif text-xl font-bold text-tourism-navy flex items-center">
          <Filter className="h-5 w-5 mr-2" />
          Filters
        </h2>
        <Button variant="ghost" size="sm" onClick={clearFilters} className="text-tourism-teal">
          Clear All
        </Button>
      </div>

      {/* Price Range */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center">
            <DollarSign className="h-4 w-4 mr-2 text-tourism-teal" />
            Price Range (per day)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Slider value={priceRange} onValueChange={setPriceRange} max={500} min={0} step={10} className="w-full" />
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </CardContent>
      </Card>

      {/* Location */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center">
            <MapPin className="h-4 w-4 mr-2 text-tourism-teal" />
            Location
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 max-h-48 overflow-y-auto">
            {locations.map((location) => (
              <div key={location} className="flex items-center space-x-2">
                <Checkbox
                  id={`location-${location}`}
                  checked={selectedLocations.includes(location)}
                  onCheckedChange={(checked) => handleLocationChange(location, checked as boolean)}
                />
                <Label htmlFor={`location-${location}`} className="text-sm cursor-pointer">
                  {location}
                </Label>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Features */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center">
            <Star className="h-4 w-4 mr-2 text-tourism-teal" />
            Features
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 max-h-48 overflow-y-auto">
            {features.map((feature) => (
              <div key={feature} className="flex items-center space-x-2">
                <Checkbox
                  id={`feature-${feature}`}
                  checked={selectedFeatures.includes(feature)}
                  onCheckedChange={(checked) => handleFeatureChange(feature, checked as boolean)}
                />
                <Label htmlFor={`feature-${feature}`} className="text-sm cursor-pointer">
                  {feature}
                </Label>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Capacity */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center">
            <Users className="h-4 w-4 mr-2 text-tourism-teal" />
            Capacity
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox id="capacity-1-2" />
              <Label htmlFor="capacity-1-2" className="text-sm cursor-pointer">
                1-2 people
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="capacity-3-4" />
              <Label htmlFor="capacity-3-4" className="text-sm cursor-pointer">
                3-4 people
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="capacity-5-8" />
              <Label htmlFor="capacity-5-8" className="text-sm cursor-pointer">
                5-8 people
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="capacity-9+" />
              <Label htmlFor="capacity-9+" className="text-sm cursor-pointer">
                9+ people
              </Label>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
