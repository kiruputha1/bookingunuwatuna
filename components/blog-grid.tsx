"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Eye, Heart } from "lucide-react"

// Mock data - in real app this would come from Supabase or blog API
const mockPosts = [
  {
    id: "1",
    slug: "ultimate-guide-sigiriya-rock-fortress",
    title: "The Ultimate Guide to Sigiriya Rock Fortress: Ancient Wonder of Sri Lanka",
    excerpt:
      "Discover the secrets of Sigiriya, the 8th wonder of the world. Complete guide with climbing tips, history, and photography spots.",
    author: "Samantha Perera",
    authorImage: "/author-samantha.png",
    publishedAt: "2024-01-15",
    readTime: "8 min read",
    category: "Destinations",
    tags: ["Sigiriya", "Ancient Sites", "UNESCO"],
    featuredImage: "/sigiriya-blog-featured.png",
    views: 2847,
    likes: 156,
    featured: true,
  },
  {
    id: "2",
    slug: "sri-lankan-cuisine-food-guide",
    title: "A Foodie's Guide to Sri Lankan Cuisine: Must-Try Dishes and Where to Find Them",
    excerpt:
      "Explore the rich flavors of Sri Lankan cuisine from spicy curries to sweet treats. Your complete guide to local food experiences.",
    author: "Rohan Silva",
    authorImage: "/author-rohan.png",
    publishedAt: "2024-01-12",
    readTime: "6 min read",
    category: "Food & Culture",
    tags: ["Food", "Culture", "Local Cuisine"],
    featuredImage: "/sri-lankan-food-blog.png",
    views: 1923,
    likes: 89,
    featured: false,
  },
  {
    id: "3",
    slug: "best-beaches-southern-coast",
    title: "Hidden Gems: The Best Beaches Along Sri Lanka's Southern Coast",
    excerpt:
      "Discover pristine beaches away from the crowds. From Mirissa to Tangalle, explore the most beautiful coastal spots in southern Sri Lanka.",
    author: "Maya Fernando",
    authorImage: "/author-maya.png",
    publishedAt: "2024-01-10",
    readTime: "5 min read",
    category: "Beaches",
    tags: ["Beaches", "Southern Coast", "Hidden Gems"],
    featuredImage: "/southern-beaches-blog.png",
    views: 1654,
    likes: 112,
    featured: false,
  },
  {
    id: "4",
    slug: "tea-plantation-experience-nuwara-eliya",
    title: "Journey Through Ceylon Tea Country: A Complete Guide to Nuwara Eliya",
    excerpt:
      "Experience the cool climate and lush tea plantations of Nuwara Eliya. Learn about tea production and enjoy scenic train rides.",
    author: "Samantha Perera",
    authorImage: "/author-samantha.png",
    publishedAt: "2024-01-08",
    readTime: "7 min read",
    category: "Destinations",
    tags: ["Tea Country", "Nuwara Eliya", "Plantations"],
    featuredImage: "/tea-plantation-blog.png",
    views: 2156,
    likes: 134,
    featured: false,
  },
  {
    id: "5",
    slug: "wildlife-safari-yala-national-park",
    title: "Safari Adventures: Spotting Leopards in Yala National Park",
    excerpt:
      "Your guide to wildlife photography and animal spotting in Sri Lanka's most famous national park. Tips for the perfect safari experience.",
    author: "David Wickramasinghe",
    authorImage: "/author-david.png",
    publishedAt: "2024-01-05",
    readTime: "9 min read",
    category: "Wildlife",
    tags: ["Safari", "Wildlife", "Photography"],
    featuredImage: "/yala-safari-blog.png",
    views: 1789,
    likes: 98,
    featured: false,
  },
  {
    id: "6",
    slug: "cultural-festivals-sri-lanka",
    title: "Celebrating Sri Lankan Culture: A Guide to Traditional Festivals",
    excerpt:
      "Immerse yourself in Sri Lankan culture through its vibrant festivals. From Vesak to Kandy Esala Perahera, experience the island's traditions.",
    author: "Priya Jayawardena",
    authorImage: "/author-priya.png",
    publishedAt: "2024-01-03",
    readTime: "6 min read",
    category: "Culture",
    tags: ["Festivals", "Culture", "Traditions"],
    featuredImage: "/cultural-festivals-blog.png",
    views: 1432,
    likes: 76,
    featured: false,
  },
]

export default function BlogGrid() {
  const [posts, setPosts] = useState(mockPosts)
  const [favorites, setFavorites] = useState<string[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 6

  const featuredPost = posts.find((post) => post.featured)
  const regularPosts = posts.filter((post) => !post.featured)

  const toggleFavorite = (postId: string) => {
    setFavorites((prev) => (prev.includes(postId) ? prev.filter((id) => id !== postId) : [...prev, postId]))
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="space-y-8">
      {/* Featured Post */}
      {featuredPost && (
        <div className="mb-12">
          <div className="flex items-center mb-4">
            <Badge className="bg-tourism-coral text-white mr-2">Featured</Badge>
            <h2 className="font-serif text-2xl font-bold text-tourism-navy">Editor's Pick</h2>
          </div>

          <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
            <div className="md:flex">
              <div className="md:w-1/2 relative">
                <img
                  src={featuredPost.featuredImage || "/placeholder.svg"}
                  alt={featuredPost.title}
                  className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="bg-white/90 hover:bg-white"
                    onClick={() => toggleFavorite(featuredPost.id)}
                  >
                    <Heart
                      className={`h-4 w-4 ${favorites.includes(featuredPost.id) ? "fill-red-500 text-red-500" : "text-gray-600"}`}
                    />
                  </Button>
                </div>
              </div>

              <div className="md:w-1/2">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="flex items-center space-x-2 mb-3">
                    <Badge variant="secondary">{featuredPost.category}</Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {formatDate(featuredPost.publishedAt)}
                    </div>
                  </div>

                  <Link href={`/blog/${featuredPost.slug}`}>
                    <h3 className="font-serif text-2xl font-bold text-tourism-navy mb-3 hover:text-tourism-teal transition-colors line-clamp-2">
                      {featuredPost.title}
                    </h3>
                  </Link>

                  <p className="text-gray-600 mb-4 line-clamp-3">{featuredPost.excerpt}</p>

                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center space-x-3">
                      <img
                        src={featuredPost.authorImage || "/placeholder.svg"}
                        alt={featuredPost.author}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-sm font-medium text-gray-900">{featuredPost.author}</p>
                        <div className="flex items-center space-x-3 text-xs text-gray-500">
                          <span className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {featuredPost.readTime}
                          </span>
                          <span className="flex items-center">
                            <Eye className="h-3 w-3 mr-1" />
                            {featuredPost.views.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>

                    <Link href={`/blog/${featuredPost.slug}`}>
                      <Button className="bg-tourism-teal hover:bg-tourism-teal/90 text-white">Read More</Button>
                    </Link>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Regular Posts Grid */}
      <div>
        <h2 className="font-serif text-2xl font-bold text-tourism-navy mb-6">Latest Articles</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {regularPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative">
                <img
                  src={post.featuredImage || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="bg-white/90 hover:bg-white"
                    onClick={() => toggleFavorite(post.id)}
                  >
                    <Heart
                      className={`h-4 w-4 ${favorites.includes(post.id) ? "fill-red-500 text-red-500" : "text-gray-600"}`}
                    />
                  </Button>
                </div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-tourism-navy text-white">{post.category}</Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-3 text-sm text-gray-500">
                  <Calendar className="h-4 w-4" />
                  <span>{formatDate(post.publishedAt)}</span>
                  <span>•</span>
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>

                <Link href={`/blog/${post.slug}`}>
                  <h3 className="font-serif text-xl font-bold text-tourism-navy mb-3 hover:text-tourism-teal transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                </Link>

                <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <img
                      src={post.authorImage || "/placeholder.svg"}
                      alt={post.author}
                      className="w-6 h-6 rounded-full object-cover"
                    />
                    <span className="text-sm text-gray-700">{post.author}</span>
                  </div>

                  <div className="flex items-center space-x-3 text-xs text-gray-500">
                    <span className="flex items-center">
                      <Eye className="h-3 w-3 mr-1" />
                      {post.views.toLocaleString()}
                    </span>
                    <span className="flex items-center">
                      <Heart className="h-3 w-3 mr-1" />
                      {post.likes}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            <Button variant="outline" disabled={currentPage === 1}>
              Previous
            </Button>
            <Button variant="outline" className="bg-tourism-teal text-white">
              1
            </Button>
            <Button variant="outline">2</Button>
            <Button variant="outline">3</Button>
            <Button variant="outline">Next</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
