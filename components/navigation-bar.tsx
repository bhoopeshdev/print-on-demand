"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, ShoppingCart, User, Menu, X, Heart, Home, Compass, Phone, Info } from "lucide-react"
import { cn } from "@/lib/utils"

export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const categories = ["Luggage", "Travel Accessories", "Clothing", "Footwear", "Electronics", "Outdoor Gear"]

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      {/* Main Navigation */}
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-primary">
          TravelGear
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="text-gray-700 transition-colors hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link href="/shop" className="text-gray-700 transition-colors hover:text-primary">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-700 transition-colors hover:text-primary">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-700 transition-colors hover:text-primary">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="text-gray-700 transition-colors hover:text-primary"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>
          <Link href="/wishlist" className="text-gray-700 transition-colors hover:text-primary" aria-label="Wishlist">
            <Heart className="h-5 w-5" />
          </Link>
          <Link href="/account" className="text-gray-700 transition-colors hover:text-primary" aria-label="Account">
            <User className="h-5 w-5" />
          </Link>
          <Link href="/cart" className="relative text-gray-700 transition-colors hover:text-primary" aria-label="Cart">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-white">
              3
            </span>
          </Link>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="ml-4 md:hidden" aria-label="Menu">
            {isMenuOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
          </button>
        </div>
      </div>

      {/* Search Bar - Conditional Rendering */}
      <div
        className={cn(
          "container mx-auto overflow-hidden transition-all duration-300 ease-in-out",
          isSearchOpen ? "max-h-20 py-4" : "max-h-0",
        )}
      >
        <div className="flex items-center px-4">
          <Input type="text" placeholder="Search for products..." className="flex-grow" />
          <Button className="ml-2">Search</Button>
        </div>
      </div>

      {/* Category Menu */}
      <div className="hidden border-t border-gray-200 bg-gray-50 py-2 md:block">
        <div className="container mx-auto px-4">
          <ul className="flex flex-wrap justify-center space-x-8">
            {categories.map((category) => (
              <li key={category}>
                <Link
                  href={`/category/${category.toLowerCase()}`}
                  className="text-sm text-gray-600 transition-colors hover:text-primary"
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-white transition-transform duration-300 ease-in-out md:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8 flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-primary">
              TravelGear
            </Link>
            <button onClick={() => setIsMenuOpen(false)} className="text-gray-700" aria-label="Close menu">
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="mb-8">
            <ul className="space-y-6">
              <li>
                <Link href="/" className="flex items-center text-lg text-gray-700" onClick={() => setIsMenuOpen(false)}>
                  <Home className="mr-3 h-5 w-5" />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="flex items-center text-lg text-gray-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Compass className="mr-3 h-5 w-5" />
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="flex items-center text-lg text-gray-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Info className="mr-3 h-5 w-5" />
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="flex items-center text-lg text-gray-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Phone className="mr-3 h-5 w-5" />
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div className="mb-8">
            <h3 className="mb-4 text-lg font-semibold">Categories</h3>
            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category}>
                  <Link
                    href={`/category/${category.toLowerCase()}`}
                    className="text-gray-600 transition-colors hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}