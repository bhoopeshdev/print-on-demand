import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Travel background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <h1 className="mb-4 text-5xl font-bold md:text-6xl lg:text-7xl">Travel in Style</h1>
        <p className="mb-8 max-w-2xl text-xl md:text-2xl">Unique Travel-Inspired Products for Your Adventures</p>
        <Button size="lg" className="bg-primary hover:bg-primary/90">
          <Link href="#featured-products">Explore Collection</Link>
        </Button>
      </div>
    </section>
  )
}