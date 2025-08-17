import { Suspense } from "react"
import Navigation from "@/components/navigation"
import RentalCategories from "@/components/rental-categories"
import RentalGrid from "@/components/rental-grid"
import RentalFilters from "@/components/rental-filters"
import { Skeleton } from "@/components/ui/skeleton"

export const metadata = {
  title: "Rentals - Hotels, Vehicles & Accommodations | Ceylon Travels",
  description:
    "Browse our premium selection of hotels, rooms, cars, bikes, and vans for rent in Sri Lanka. Book your perfect accommodation and transportation.",
}

export default function RentalsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-tourism-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">Premium Rentals</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Choose from our carefully curated selection of accommodations and vehicles for your Sri Lankan adventure
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Suspense fallback={<CategoriesSkeleton />}>
            <RentalCategories />
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
                <RentalFilters />
              </Suspense>
            </div>

            {/* Rental Grid */}
            <div className="lg:w-3/4">
              <Suspense fallback={<GridSkeleton />}>
                <RentalGrid />
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
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {Array.from({ length: 6 }).map((_, i) => (
        <Skeleton key={i} className="h-24 rounded-lg" />
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
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {Array.from({ length: 9 }).map((_, i) => (
        <Skeleton key={i} className="h-96 rounded-lg" />
      ))}
    </div>
  )
}
