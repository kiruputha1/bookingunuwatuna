"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Mountain, Waves, Building2, TreePine } from "lucide-react"

const categories = [
  {
    id: "cultural",
    name: "Cultural Tours",
    slug: "cultural",
    icon: Building2,
    count: 12,
    color: "bg-tourism-coral",
    description: "Ancient temples, historic sites, and cultural experiences",
  },
  {
    id: "adventure",
    name: "Adventure",
    slug: "adventure",
    icon: Mountain,
    count: 8,
    color: "bg-tourism-teal",
    description: "Hiking, climbing, and thrilling outdoor activities",
  },
  {
    id: "wildlife",
    name: "Wildlife Safari",
    slug: "wildlife",
    icon: TreePine,
    count: 6,
    color: "bg-tourism-gold",
    description: "National parks, wildlife watching, and nature tours",
  },
  {
    id: "beach",
    name: "Beach & Coast",
    slug: "beach",
    icon: Waves,
    count: 10,
    color: "bg-tourism-navy",
    description: "Coastal tours, water sports, and beach experiences",
  },
]

interface ServiceCategoriesProps {
  onCategoryChange?: (category: string) => void
}

export default function ServiceCategories({ onCategoryChange }: ServiceCategoriesProps) {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const handleCategoryClick = (categorySlug: string) => {
    setSelectedCategory(categorySlug)
    onCategoryChange?.(categorySlug)
  }

  return (
    <div>
      <h2 className="font-serif text-2xl font-bold text-tourism-navy mb-6">Explore by Experience</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => {
          const IconComponent = category.icon
          const isSelected = selectedCategory === category.slug

          return (
            <Card
              key={category.id}
              className={`cursor-pointer transition-all duration-200 hover:shadow-lg hover:-translate-y-1 ${
                isSelected ? "ring-2 ring-tourism-teal shadow-lg" : ""
              }`}
              onClick={() => handleCategoryClick(category.slug)}
            >
              <CardContent className="p-6 text-center">
                <div
                  className={`${category.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-serif text-lg font-bold text-tourism-navy mb-2">{category.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{category.description}</p>
                <div className="text-tourism-teal font-medium text-sm">{category.count} tours available</div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
