import HeroSection from "@/components/hero-section"
import FeaturedProducts from "@/components/featured-products"
import ProductCategories from "@/components/product-categories"
import ContactSection from "@/components/contact-section"
import ShoppingCartOverlay from "@/components/shopping-cart-overlay"


export default function Home() {
  return (
    <main className="min-h-screen">
      <ShoppingCartOverlay />
      <HeroSection />
      <FeaturedProducts />
      <ProductCategories />
      <ContactSection />
    </main>
  )
}