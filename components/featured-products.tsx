"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Eye, ShoppingCart, Filter, X } from "lucide-react"

// Mock product data
const products = [
  {
    id: 1,
    name: "Travel Backpack Pro",
    price: 129.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Luggage",
  },
  {
    id: 2,
    name: "Comfort Neck Pillow",
    price: 29.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Travel Accessories",
  },
  {
    id: 3,
    name: "Adventure Hiking Boots",
    price: 149.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Footwear",
  },
  {
    id: 4,
    name: "Compact Travel Adapter",
    price: 24.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Electronics",
  },
  {
    id: 5,
    name: "Lightweight Rain Jacket",
    price: 89.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Clothing",
  },
  {
    id: 6,
    name: "Portable Water Filter",
    price: 39.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Outdoor Gear",
  },
  {
    id: 7,
    name: "Compact Camera",
    price: 299.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Electronics",
  },
  {
    id: 8,
    name: "Travel Toiletry Kit",
    price: 34.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Travel Accessories",
  },
]

// Filter options
const categories = ["All", "Luggage", "Travel Accessories", "Clothing", "Footwear", "Electronics", "Outdoor Gear"]

const colors = ["Black", "Blue", "Green", "Red", "White"]

export default function FeaturedProducts() {
  const [priceRange, setPriceRange] = useState([0, 300])
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  // Filter products based on selected filters
  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
    return matchesCategory && matchesPrice
  })

  return (
    <section id="featured-products" className="container mx-auto px-4 py-16">
      <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">Featured Products</h2>

      <div className="flex flex-col lg:flex-row">
        {/* Mobile Filter Button */}
        <div className="mb-4 flex justify-end lg:hidden">
          <Button variant="outline" onClick={() => setIsFilterOpen(true)} className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Filters
          </Button>
        </div>

        {/* Sidebar Filter - Desktop */}
        <div className="hidden w-64 shrink-0 pr-8 lg:block">
          <div className="rounded-lg border border-gray-200 p-4 shadow-sm">
            <h3 className="mb-4 text-lg font-semibold">Filters</h3>

            {/* Category Filter */}
            <div className="mb-6">
              <h4 className="mb-2 font-medium">Category</h4>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category}>
                    <button
                      onClick={() => setSelectedCategory(category)}
                      className={`text-sm ${
                        selectedCategory === category ? "font-medium text-primary" : "text-gray-600"
                      }`}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price Range Filter */}
            <div className="mb-6">
              <h4 className="mb-2 font-medium">Price Range</h4>
              <div className="mb-4">
                <Slider
                  defaultValue={[0, 300]}
                  max={300}
                  step={1}
                  value={priceRange}
                  onValueChange={setPriceRange}
                  className="py-4"
                />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">${priceRange[0]}</span>
                <span className="text-sm text-gray-600">${priceRange[1]}</span>
              </div>
            </div>

            {/* Color Filter */}
            <div>
              <h4 className="mb-2 font-medium">Color</h4>
              <div className="space-y-2">
                {colors.map((color) => (
                  <div key={color} className="flex items-center space-x-2">
                    <Checkbox id={`color-${color}`} />
                    <Label htmlFor={`color-${color}`} className="text-sm text-gray-600">
                      {color}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Filter Sidebar */}
        <div
          className={`fixed inset-0 z-50 transform bg-white p-6 transition-transform duration-300 ease-in-out lg:hidden ${
            isFilterOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-xl font-semibold">Filters</h3>
            <button onClick={() => setIsFilterOpen(false)} className="text-gray-500">
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Category Filter */}
          <div className="mb-6">
            <h4 className="mb-2 font-medium">Category</h4>
            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category}>
                  <button
                    onClick={() => {
                      setSelectedCategory(category)
                      setIsFilterOpen(false)
                    }}
                    className={`text-sm ${
                      selectedCategory === category ? "font-medium text-primary" : "text-gray-600"
                    }`}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Price Range Filter */}
          <div className="mb-6">
            <h4 className="mb-2 font-medium">Price Range</h4>
            <div className="mb-4">
              <Slider
                defaultValue={[0, 300]}
                max={300}
                step={1}
                value={priceRange}
                onValueChange={setPriceRange}
                className="py-4"
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">${priceRange[0]}</span>
              <span className="text-sm text-gray-600">${priceRange[1]}</span>
            </div>
          </div>

          {/* Color Filter */}
          <div className="mb-6">
            <h4 className="mb-2 font-medium">Color</h4>
            <div className="space-y-2">
              {colors.map((color) => (
                <div key={color} className="flex items-center space-x-2">
                  <Checkbox id={`mobile-color-${color}`} />
                  <Label htmlFor={`mobile-color-${color}`} className="text-sm text-gray-600">
                    {color}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <Button onClick={() => setIsFilterOpen(false)} className="mt-4 w-full">
            Apply Filters
          </Button>
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="group overflow-hidden">
                <CardHeader className="p-0">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <Button variant="secondary" size="sm" className="mr-2" aria-label="Quick view">
                        <Eye className="mr-1 h-4 w-4" />
                        Quick View
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="mb-1 text-sm text-gray-500">{product.category}</div>
                  <h3 className="mb-2 font-semibold">{product.name}</h3>
                  <p className="text-lg font-bold text-primary">${product.price.toFixed(2)}</p>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button className="w-full">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}