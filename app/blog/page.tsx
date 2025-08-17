import type { Metadata } from "next"
import BlogHero from "@/components/blog-hero"
import BlogGrid from "@/components/blog-grid"
import BlogCategories from "@/components/blog-categories"
import BlogNewsletter from "@/components/blog-newsletter"

export const metadata: Metadata = {
  title: "Travel Blog | Sri Lanka Tourism Insights & Guides",
  description:
    "Discover the best of Sri Lanka through our travel blog. Get insider tips, destination guides, and cultural insights for your perfect Sri Lankan adventure.",
  keywords:
    "Sri Lanka travel blog, tourism guides, travel tips, destination guides, cultural insights, travel experiences",
  openGraph: {
    title: "Travel Blog | Sri Lanka Tourism Insights & Guides",
    description:
      "Discover the best of Sri Lanka through our travel blog. Get insider tips, destination guides, and cultural insights for your perfect Sri Lankan adventure.",
    type: "website",
    url: "/blog",
    images: [
      {
        url: "/sri-lanka-blog-hero.png",
        width: 1200,
        height: 630,
        alt: "Sri Lanka Travel Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Travel Blog | Sri Lanka Tourism Insights & Guides",
    description: "Discover the best of Sri Lanka through our travel blog.",
    images: ["/sri-lanka-blog-hero.png"],
  },
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <BlogHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <BlogGrid />
          </div>
          <div className="lg:col-span-1">
            <BlogCategories />
            <BlogNewsletter />
          </div>
        </div>
      </div>
    </div>
  )
}
