import type { Metadata } from "next"
import { notFound } from "next/navigation"
import BlogPost from "@/components/blog-post"
import RelatedPosts from "@/components/related-posts"
import BlogComments from "@/components/blog-comments"

// Mock function - in real app this would fetch from Supabase
async function getBlogPost(slug: string) {
  const mockPosts = [
    {
      id: "1",
      slug: "ultimate-guide-sigiriya-rock-fortress",
      title: "The Ultimate Guide to Sigiriya Rock Fortress: Ancient Wonder of Sri Lanka",
      excerpt:
        "Discover the secrets of Sigiriya, the 8th wonder of the world. Complete guide with climbing tips, history, and photography spots.",
      content: `
        <h2>Introduction to Sigiriya</h2>
        <p>Sigiriya, also known as Lion Rock, stands majestically in the heart of Sri Lanka as one of the country's most iconic landmarks. This ancient rock fortress, rising 200 meters above the surrounding plains, is a testament to the ingenuity and artistic vision of ancient Sri Lankan civilization.</p>
        
        <h2>Historical Significance</h2>
        <p>Built in the 5th century AD by King Kashyapa, Sigiriya served as both a royal palace and fortress. The king chose this location for its strategic advantage and natural beauty, creating what many consider to be the world's first planned city.</p>
        
        <h2>What to Expect During Your Visit</h2>
        <p>Your journey to the summit takes you through several distinct sections:</p>
        <ul>
          <li><strong>The Water Gardens:</strong> Sophisticated hydraulic systems that still function today</li>
          <li><strong>The Boulder Gardens:</strong> Natural rock formations integrated into the palace design</li>
          <li><strong>The Frescoes:</strong> Ancient paintings of celestial maidens, known as the Sigiriya Damsels</li>
          <li><strong>The Mirror Wall:</strong> Polished wall with ancient graffiti dating back over 1,000 years</li>
          <li><strong>The Lion's Gate:</strong> Massive lion paws that once supported a full lion figure</li>
          <li><strong>The Summit:</strong> Ruins of the royal palace with panoramic views</li>
        </ul>
        
        <h2>Best Time to Visit</h2>
        <p>The ideal time to climb Sigiriya is early morning (6:00-8:00 AM) or late afternoon (4:00-6:00 PM) to avoid the midday heat. The climb takes approximately 2-3 hours round trip.</p>
        
        <h2>Photography Tips</h2>
        <p>Capture the best shots by bringing a wide-angle lens for the summit views and a telephoto lens for the frescoes. The golden hour provides the most dramatic lighting for the rock face.</p>
        
        <h2>Practical Information</h2>
        <p>Entry fees for foreigners are $30 USD. Wear comfortable hiking shoes and bring plenty of water. The climb involves steep stairs and can be challenging for those with mobility issues.</p>
      `,
      author: "Samantha Perera",
      authorImage: "/author-samantha.png",
      publishedAt: "2024-01-15",
      updatedAt: "2024-01-20",
      readTime: "8 min read",
      category: "Destinations",
      tags: ["Sigiriya", "Ancient Sites", "UNESCO", "Cultural Heritage", "Photography"],
      featuredImage: "/sigiriya-blog-featured.png",
      seoTitle: "Ultimate Guide to Sigiriya Rock Fortress | Sri Lanka Travel Tips",
      seoDescription:
        "Complete guide to visiting Sigiriya Rock Fortress in Sri Lanka. Includes climbing tips, historical insights, best photography spots, and practical information.",
      views: 2847,
      likes: 156,
      comments: 23,
    },
  ]

  return mockPosts.find((post) => post.slug === slug)
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getBlogPost(params.slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,
    keywords: post.tags.join(", "),
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
      tags: post.tags,
      images: [
        {
          url: post.featuredImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.featuredImage],
    },
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  // JSON-LD structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.featuredImage,
    author: {
      "@type": "Person",
      name: post.author,
      image: post.authorImage,
    },
    publisher: {
      "@type": "Organization",
      name: "Sri Lanka Tourism",
      logo: {
        "@type": "ImageObject",
        url: "/logo.png",
      },
    },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `/blog/${post.slug}`,
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-white">
        <BlogPost post={post} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <RelatedPosts currentPostId={post.id} category={post.category} />
          <BlogComments postId={post.id} />
        </div>
      </div>
    </>
  )
}
