"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Clock, DollarSign, Users, Star, Filter, MapPin } from "lucide-react"

export default function ServiceFilters() {
  const [priceRange, setPriceRange] = useState([0, 300])
  const [selectedDurations, setSelectedDurations] = useState<string[]>([])
  const [selectedLocations, setSelectedLocations] = useState<string[]>([])
  const [selectedIncludes, setSelectedIncludes] = useState<string[]>([])

  const durations = ["Half Day", "Full Day", "2 Days", "3-5 Days", "1 Week+"]

  const locations = [
    "Colombo",
    "Kandy",
    "Sigiriya",
    "Galle",
    "Ella",
    "Nuwara Eliya",
    "Yala National Park",
    "Anuradhapura",
    "Polonnaruwa",
    "Bentota",
  ]

  const includes = [
    "Transportation",
    "English Guide",
    "Meals Included",
    "Entrance Tickets",
    "Accommodation",
    "Water Bottles",
    "Photography",
    "Insurance",
  ]

  const handleDurationChange = (duration: string, checked: boolean) => {
    if (checked) {
      setSelectedDurations([...selectedDurations, duration])
    } else {
      setSelectedDurations(selectedDurations.filter((d) => d !== duration))
    }
  }

  const handleLocationChange = (location: string, checked: boolean) => {
    if (checked) {
      setSelectedLocations([...selectedLocations, location])
    } else {
      setSelectedLocations(selectedLocations.filter((l) => l !== location))
    }
  }

  const handleIncludesChange = (include: string, checked: boolean) => {
    if (checked) {
      setSelectedIncludes([...selectedIncludes, include])
    } else {
      setSelectedIncludes(selectedIncludes.filter((i) => i !== include))
    }
  }

  const clearFilters = () => {
    setPriceRange([0, 300])
    setSelectedDurations([])
    setSelectedLocations([])
    setSelectedIncludes([])
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
            Price Range
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Slider value={priceRange} onValueChange={setPriceRange} max={300} min={0} step={5} className="w-full" />
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </CardContent>
      </Card>

      {/* Duration */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center">
            <Clock className="h-4 w-4 mr-2 text-tourism-teal" />
            Duration
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {durations.map((duration) => (
              <div key={duration} className="flex items-center space-x-2">
                <Checkbox
                  id={`duration-${duration}`}
                  checked={selectedDurations.includes(duration)}
                  onCheckedChange={(checked) => handleDurationChange(duration, checked as boolean)}
                />
                <Label htmlFor={`duration-${duration}`} className="text-sm cursor-pointer">
                  {duration}
                </Label>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Location */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center">
            <MapPin className="h-4 w-4 mr-2 text-tourism-teal" />
            Destinations
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

      {/* What's Included */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center">
            <Star className="h-4 w-4 mr-2 text-tourism-teal" />
            What's Included
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 max-h-48 overflow-y-auto">
            {includes.map((include) => (
              <div key={include} className="flex items-center space-x-2">
                <Checkbox
                  id={`include-${include}`}
                  checked={selectedIncludes.includes(include)}
                  onCheckedChange={(checked) => handleIncludesChange(include, checked as boolean)}
                />
                <Label htmlFor={`include-${include}`} className="text-sm cursor-pointer">
                  {include}
                </Label>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Group Size */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center">
            <Users className="h-4 w-4 mr-2 text-tourism-teal" />
            Group Size
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox id="group-small" />
              <Label htmlFor="group-small" className="text-sm cursor-pointer">
                Small Group (1-8 people)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="group-medium" />
              <Label htmlFor="group-medium" className="text-sm cursor-pointer">
                Medium Group (9-15 people)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="group-large" />
              <Label htmlFor="group-large" className="text-sm cursor-pointer">
                Large Group (16+ people)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="group-private" />
              <Label htmlFor="group-private" className="text-sm cursor-pointer">
                Private Tours
              </Label>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
