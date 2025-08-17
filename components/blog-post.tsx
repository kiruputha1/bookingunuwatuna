import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, Eye, Heart, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface BlogPostProps {
  post: {
    id: string
    slug: string
    title: string
    excerpt: string
    content: string
    author: string
    authorImage: string
    publishedAt: string
    updatedAt: string
    readTime: string
    category: string
    tags: string[]
    featuredImage: string
    views: number
    likes: number
    comments: number
  }
}

export default function BlogPost({ post }: BlogPostProps) {
  return (
    <article className="max-w-4xl mx-auto">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[400px] overflow-hidden rounded-lg">
        <Image src={post.featuredImage || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4 bg-teal-600 text-white">
              {post.category}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4 leading-tight">{post.title}</h1>
            <p className="text-xl text-gray-200 mb-6 max-w-3xl">{post.excerpt}</p>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Image
                  src={post.authorImage || "/placeholder.svg"}
                  alt={post.author}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4" />
                <span>{post.views.toLocaleString()} views</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Social Actions */}
          <div className="flex items-center justify-between mb-8 pb-6 border-b">
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                <Heart className="w-4 h-4" />
                {post.likes}
              </Button>
              <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                <Share2 className="w-4 h-4" />
                Share
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Article Content */}
          <div
            className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-teal-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-ul:text-gray-700 prose-li:text-gray-700"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Author Bio */}
          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <div className="flex items-start gap-4">
              <Image
                src={post.authorImage || "/placeholder.svg"}
                alt={post.author}
                width={64}
                height={64}
                className="rounded-full"
              />
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">{post.author}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Travel writer and Sri Lanka expert with over 10 years of experience exploring the island's hidden
                  gems. Passionate about sustainable tourism and cultural preservation.
                </p>
                <div className="flex gap-3 mt-3">
                  <Link href="#" className="text-teal-600 hover:text-teal-700 text-sm">
                    More articles
                  </Link>
                  <Link href="#" className="text-teal-600 hover:text-teal-700 text-sm">
                    Follow
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
