import { Suspense } from "react"
import Navigation from "@/components/navigation"
import ServiceCategories from "@/components/service-categories"
import ServiceGrid from "@/components/service-grid"
import ServiceFilters from "@/components/service-filters"
import { Skeleton } from "@/components/ui/skeleton"

export const metadata = {
  title: "Tours & Services - Explore Sri Lanka | Ceylon Travels",
  description:
    "Discover amazing tour packages, cultural trips, and adventure experiences across Sri Lanka. Book guided tours with local experts.",
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-tourism-navy text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/sri-lanka-cultural-heritage.png"
            alt="Sri Lankan cultural heritage"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">Tours & Experiences</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Immerse yourself in Sri Lanka's rich culture, stunning landscapes, and unforgettable adventures with our
            expertly crafted tour packages
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Suspense fallback={<CategoriesSkeleton />}>
            <ServiceCategories />
          </Suspense>
        </div>
      </section>

      {/* Filters and Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-1/4">
              <Suspense fallback={<FiltersSkeleton />}>
                <ServiceFilters />
              </Suspense>
            </div>

            {/* Service Grid */}
            <div className="lg:w-3/4">
              <Suspense fallback={<GridSkeleton />}>
                <ServiceGrid />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function CategoriesSkeleton() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <Skeleton key={i} className="h-32 rounded-lg" />
      ))}
    </div>
  )
}

function FiltersSkeleton() {
  return (
    <div className="space-y-6">
      <Skeleton className="h-8 w-32" />
      <div className="space-y-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} className="h-10 w-full" />
        ))}
      </div>
    </div>
  )
}

function GridSkeleton() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <Skeleton key={i} className="h-96 rounded-lg" />
      ))}
    </div>
  )
}
