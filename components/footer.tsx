import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  CreditCard,
  ShoppingCartIcon as Paypal,
  AppleIcon,
  ChromeIcon as GoogleIcon,
} from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Information */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">TravelGear</h3>
            <p className="mb-4 text-sm">
              Your one-stop shop for all travel essentials. Quality products for adventurers, backpackers, and business
              travelers.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 transition-colors hover:text-white" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 transition-colors hover:text-white" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 transition-colors hover:text-white" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 transition-colors hover:text-white" aria-label="YouTube">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="transition-colors hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className="transition-colors hover:text-white">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition-colors hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="transition-colors hover:text-white">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/faq" className="transition-colors hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="transition-colors hover:text-white">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/warranty" className="transition-colors hover:text-white">
                  Warranty
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="transition-colors hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="transition-colors hover:text-white">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Stay Updated</h3>
            <p className="mb-4 text-sm">Subscribe to our newsletter for the latest products and deals.</p>
            <div className="flex">
              <Input type="email" placeholder="Your email" className="flex-1 bg-gray-800 text-white" />
              <Button className="ml-2">Sign Up</Button>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-wrap items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h4 className="mb-2 text-sm font-semibold text-white">We Accept</h4>
              <div className="flex space-x-4">
                <CreditCard className="h-6 w-6" />
                <Paypal className="h-6 w-6" />
                <AppleIcon className="h-6 w-6" />
                <GoogleIcon className="h-6 w-6" />
              </div>
            </div>
            <div className="text-sm">
              <p>&copy; {new Date().getFullYear()} TravelGear. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

