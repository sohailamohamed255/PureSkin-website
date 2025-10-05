import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCatalog } from "@/components/product-catalog"

export default function ProductsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Banner */}
        <section className="py-16 bg-gradient-to-br from-muted/50 to-background relative">
          <div className="absolute inset-0 bg-[url('/serene-spa-setting-with-natural-skincare-products-.jpg')] bg-cover bg-center opacity-15"></div>
          <div className="absolute inset-0 bg-[url('/luxury-night-cream-jar-with-gold-accents.jpg')] bg-cover bg-center opacity-5"></div>
          
          {/* Floating product images */}
          <div className="absolute top-20 left-20 w-24 h-24 rounded-full overflow-hidden opacity-20 animate-pulse">
            <img src="/vitamin-c-serum-bottle-with-dropper-on-white-backg.jpg" alt="Vitamin C Serum" className="w-full h-full object-cover" />
          </div>
          <div className="absolute bottom-20 right-20 w-20 h-20 rounded-full overflow-hidden opacity-15 animate-pulse delay-1000">
            <img src="/premium-eye-cream-tube-with-elegant-packaging.jpg" alt="Eye Cream" className="w-full h-full object-cover" />
          </div>
          <div className="absolute top-1/2 right-10 w-16 h-16 rounded-full overflow-hidden opacity-10 animate-pulse delay-500">
            <img src="/gentle-face-cleanser-pump-bottle-with-natural-ingr.jpg" alt="Face Cleanser" className="w-full h-full object-cover" />
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Our Complete <span className="text-primary">Product Collection</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Discover our complete collection of premium natural skincare products, carefully crafted with the finest ingredients
                to reveal your skin's natural radiance.
              </p>
            </div>
          </div>
        </section>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <ProductCatalog />
        </div>
      </main>
      <Footer />
    </div>
  )
}
