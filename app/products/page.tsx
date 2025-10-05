import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCatalog } from "@/components/product-catalog"

export default function ProductsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">All Products</h1>
            <p className="text-lg text-muted-foreground">
              Discover our complete collection of premium natural skincare products
            </p>
          </div>
          <ProductCatalog />
        </div>
      </main>
      <Footer />
    </div>
  )
}
