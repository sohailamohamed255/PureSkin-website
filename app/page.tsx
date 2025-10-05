import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturedProducts } from "@/components/featured-products"
import { Testimonials } from "@/components/testimonials"
import { BlogPreview } from "@/components/blog-preview"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturedProducts />
        <Testimonials />
        <BlogPreview />
      </main>
      <Footer />
    </div>
  )
}
