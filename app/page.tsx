import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturedProducts } from "@/components/featured-products"
import { PromotionalBanner } from "@/components/promotional-banner"
import { TestimonialsSection } from "@/components/testimonials-section"
import { LifestyleGallery } from "@/components/lifestyle-gallery"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturedProducts />
        <PromotionalBanner />
        <TestimonialsSection />
        <LifestyleGallery />
      </main>
      <Footer />
    </div>
  )
}
