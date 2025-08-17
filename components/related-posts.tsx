import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface RelatedPostsProps {
  currentPostId: string
  category: string
}

export default function RelatedPosts({ currentPostId, category }: RelatedPostsProps) {
  // Mock related posts - in real app this would fetch from Supabase
  const relatedPosts = [
    {
      id: "2",
      slug: "best-beaches-sri-lanka",
      title: "Top 10 Pristine Beaches in Sri Lanka You Must Visit",
      excerpt: "From golden sands to crystal clear waters, discover Sri Lanka's most beautiful beaches.",
      featuredImage: "/sri-lanka-beach.png",
      author: "Rajesh Fernando",
      publishedAt: "2024-01-10",
      readTime: "6 min read",
      category: "Destinations",
    },
    {
      id: "3",
      slug: "sri-lankan-cuisine-guide",
      title: "A Foodie's Guide to Authentic Sri Lankan Cuisine",
      excerpt: "Explore the rich flavors and spices that make Sri Lankan food unique.",
      featuredImage: "/sri-lankan-food-blog.png",
      author: "Priya Wickramasinghe",
      publishedAt: "2024-01-08",
      readTime: "7 min read",
      category: "Culture",
    },
    {
      id: "4",
      slug: "wildlife-safari-yala",
      title: "Wildlife Safari in Yala National Park: Complete Guide",
      excerpt: "Everything you need to know for an unforgettable safari experience in Yala.",
      featuredImage: "/yala-elephants-safari.png",
      author: "Michael Silva",
      publishedAt: "2024-01-05",
      readTime: "9 min read",
      category: "Wildlife",
    },
  ].filter((post) => post.id !== currentPostId)

  if (relatedPosts.length === 0) {
    return null
  }

  return (
    <section className="py-12 border-t">
      <div className="mb-8">
        <h2 className="text-3xl font-bold font-serif text-gray-900 mb-2">Related Articles</h2>
        <p className="text-gray-600">Discover more amazing destinations and travel tips</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {relatedPosts.map((post) => (
          <article key={post.id} className="group">
            <Link href={`/blog/${post.slug}`}>
              <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                <Image
                  src={post.featuredImage || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <Badge variant="secondary" className="bg-white/90 text-gray-900">
                    {post.category}
                  </Badge>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-lg text-gray-900 group-hover:text-teal-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-600 text-sm line-clamp-2">{post.excerpt}</p>

                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{post.author}</span>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>

      <div className="text-center mt-8">
        <Link
          href="/blog"
          className="inline-flex items-center px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
        >
          View All Articles
        </Link>
      </div>
    </section>
  )
}
