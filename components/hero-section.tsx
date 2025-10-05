import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-muted/50 to-background">
      <div className="absolute inset-0 bg-[url('/hero-skincare-collection.jpg')] bg-cover bg-center opacity-30"></div>
      <div className="absolute inset-0 bg-[url('/serene-spa-setting-with-natural-skincare-products-.jpg')] bg-cover bg-center opacity-20"></div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Nurture Your Skin, <span className="text-primary">Naturally</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Discover our premium collection of natural skincare products, carefully crafted with the finest ingredients
            to reveal your skin's natural radiance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-3">
              <Link href="/products">Shop Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-3 bg-transparent">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
