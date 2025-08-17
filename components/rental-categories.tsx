"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Hotel, Bed, Car, Bike, Truck, Building } from "lucide-react"

const categories = [
  {
    id: "all",
    name: "All Rentals",
    slug: "all",
    icon: Building,
    count: 45,
    color: "bg-tourism-teal",
  },
  {
    id: "hotels",
    name: "Hotels",
    slug: "hotels",
    icon: Hotel,
    count: 12,
    color: "bg-tourism-coral",
  },
  {
    id: "rooms",
    name: "Rooms",
    slug: "rooms",
    icon: Bed,
    count: 8,
    color: "bg-tourism-gold",
  },
  {
    id: "cars",
    name: "Cars",
    slug: "cars",
    icon: Car,
    count: 15,
    color: "bg-tourism-navy",
  },
  {
    id: "bikes",
    name: "Bikes",
    slug: "bikes",
    icon: Bike,
    count: 6,
    color: "bg-tourism-teal",
  },
  {
    id: "vans",
    name: "Vans",
    slug: "vans",
    icon: Truck,
    count: 4,
    color: "bg-tourism-coral",
  },
]

interface RentalCategoriesProps {
  onCategoryChange?: (category: string) => void
}

export default function RentalCategories({ onCategoryChange }: RentalCategoriesProps) {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const handleCategoryClick = (categorySlug: string) => {
    setSelectedCategory(categorySlug)
    onCategoryChange?.(categorySlug)
  }

  return (
    <div>
      <h2 className="font-serif text-2xl font-bold text-tourism-navy mb-6">Browse by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category) => {
          const IconComponent = category.icon
          const isSelected = selectedCategory === category.slug

          return (
            <Card
              key={category.id}
              className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                isSelected ? "ring-2 ring-tourism-teal shadow-lg" : ""
              }`}
              onClick={() => handleCategoryClick(category.slug)}
            >
              <CardContent className="p-4 text-center">
                <div
                  className={`${category.color} w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3`}
                >
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-medium text-gray-900 mb-1">{category.name}</h3>
                <p className="text-sm text-gray-500">{category.count} available</p>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
