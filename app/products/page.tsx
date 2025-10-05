import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCatalog } from "@/components/product-catalog"

export default function ProductsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Products Hero Banner */}
        <section className="relative py-16 bg-gradient-to-br from-muted/50 to-background">
          <div className="absolute inset-0 bg-[url('/hero-skincare-collection.jpg')] bg-cover bg-center opacity-20"></div>
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">All Products</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our complete collection of premium natural skincare products, carefully formulated 
              to address every skin concern and type
            </p>
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
