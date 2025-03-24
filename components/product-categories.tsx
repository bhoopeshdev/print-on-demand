"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Mock category data
const categories = [
  {
    id: 1,
    name: "Luggage",
    icon: "/placeholder.svg?height=100&width=100",
    count: 24,
    slug: "luggage",
  },
  {
    id: 2,
    name: "Travel Accessories",
    icon: "/placeholder.svg?height=100&width=100",
    count: 36,
    slug: "travel-accessories",
  },
  {
    id: 3,
    name: "Clothing",
    icon: "/placeholder.svg?height=100&width=100",
    count: 42,
    slug: "clothing",
  },
  {
    id: 4,
    name: "Footwear",
    icon: "/placeholder.svg?height=100&width=100",
    count: 18,
    slug: "footwear",
  },
  {
    id: 5,
    name: "Electronics",
    icon: "/placeholder.svg?height=100&width=100",
    count: 29,
    slug: "electronics",
  },
  {
    id: 6,
    name: "Outdoor Gear",
    icon: "/placeholder.svg?height=100&width=100",
    count: 31,
    slug: "outdoor-gear",
  },
]

export default function ProductCategories() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef
      const scrollAmount = 300
      if (direction === "left") {
        current.scrollBy({ left: -scrollAmount, behavior: "smooth" })
      } else {
        current.scrollBy({ left: scrollAmount, behavior: "smooth" })
      }
    }
  }

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-3xl font-bold md:text-4xl">Product Categories</h2>
        <div className="flex space-x-2">
          <Button variant="outline" size="icon" onClick={() => scroll("left")} aria-label="Scroll left">
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon" onClick={() => scroll("right")} aria-label="Scroll right">
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="flex space-x-6 overflow-x-auto pb-6 scrollbar-hide" ref={scrollContainerRef}>
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/category/${category.slug}`}
            className="flex min-w-[220px] flex-col items-center rounded-lg border border-gray-200 p-6 text-center transition-all hover:border-primary hover:shadow-md"
          >
            <div className="relative mb-4 h-16 w-16">
              <Image src={category.icon || "/placeholder.svg"} alt={category.name} fill className="object-contain" />
            </div>
            <h3 className="mb-1 font-semibold">{category.name}</h3>
            <p className="text-sm text-gray-500">{category.count} Products</p>
          </Link>
        ))}
      </div>

      {/* Quick Navigation Links */}
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/category/${category.slug}`}
            className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-primary hover:text-white"
          >
            {category.name}
          </Link>
        ))}
      </div>
    </section>
  )
}