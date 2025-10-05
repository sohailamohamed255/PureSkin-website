import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-muted/50 to-background">
      {/* Multiple background images for visual depth */}
      <div className="absolute inset-0 bg-[url('/serene-spa-setting-with-natural-skincare-products-.jpg')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-[url('/luxury-night-cream-jar-with-gold-accents.jpg')] bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-[url('/vitamin-c-serum-bottle-with-dropper-on-white-backg.jpg')] bg-cover bg-center opacity-5"></div>
      
      {/* Floating product images */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full overflow-hidden opacity-30 animate-pulse">
        <img src="/premium-eye-cream-tube-with-elegant-packaging.jpg" alt="Eye cream" className="w-full h-full object-cover" />
      </div>
      <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full overflow-hidden opacity-25 animate-pulse delay-1000">
        <img src="/gentle-face-cleanser-pump-bottle-with-natural-ingr.jpg" alt="Face cleanser" className="w-full h-full object-cover" />
      </div>
      
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
