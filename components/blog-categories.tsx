import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const categories = [
  { name: "Destinations", count: 24, color: "bg-tourism-teal" },
  { name: "Food & Culture", count: 18, color: "bg-tourism-coral" },
  { name: "Wildlife", count: 12, color: "bg-tourism-gold" },
  { name: "Beaches", count: 15, color: "bg-tourism-navy" },
  { name: "Adventure", count: 9, color: "bg-green-600" },
  { name: "Photography", count: 7, color: "bg-purple-600" },
  { name: "Travel Tips", count: 21, color: "bg-orange-600" },
  { name: "Festivals", count: 6, color: "bg-pink-600" },
]

const popularTags = [
  "Sigiriya",
  "Kandy",
  "Galle",
  "Tea Country",
  "Safari",
  "Beaches",
  "Cultural Sites",
  "Food",
  "Photography",
  "Adventure",
  "UNESCO",
  "Temples",
]

export default function BlogCategories() {
  return (
    <div className="space-y-6">
      {/* Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="font-serif text-lg text-tourism-navy">Categories</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {categories.map((category) => (
            <div
              key={category.name}
              className="flex items-center justify-between py-2 hover:bg-gray-50 px-2 rounded cursor-pointer"
            >
              <span className="text-sm text-gray-700">{category.name}</span>
              <Badge className={`${category.color} text-white text-xs`}>{category.count}</Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Popular Tags */}
      <Card>
        <CardHeader>
          <CardTitle className="font-serif text-lg text-tourism-navy">Popular Tags</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {popularTags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="cursor-pointer hover:bg-tourism-teal hover:text-white transition-colors"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Posts */}
      <Card>
        <CardHeader>
          <CardTitle className="font-serif text-lg text-tourism-navy">Recent Posts</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded">
              <img
                src={`/blog-post-concept.png?height=60&width=60&query=blog post ${i}`}
                alt="Recent post"
                className="w-15 h-15 object-cover rounded"
              />
              <div className="flex-1">
                <h4 className="text-sm font-medium text-gray-900 line-clamp-2 mb-1">Sample Blog Post Title {i}</h4>
                <p className="text-xs text-gray-500">Jan {15 - i}, 2024</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
