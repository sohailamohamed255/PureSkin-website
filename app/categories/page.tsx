import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const categories = [
  {
    id: "cleansers",
    name: "Cleansers",
    description: "Gentle cleansing products for all skin types",
    image: "https://picsum.photos/seed/pureskin-cat-cleansers/1000/700",
    productCount: 12,
  },
  {
    id: "serums",
    name: "Serums",
    description: "Concentrated treatments for targeted skin concerns",
    image: "https://picsum.photos/seed/pureskin-cat-serums/1000/700",
    productCount: 18,
  },
  {
    id: "moisturizers",
    name: "Moisturizers",
    description: "Hydrating creams and lotions for healthy skin",
    image: "https://picsum.photos/seed/pureskin-cat-moisturizers/1000/700",
    productCount: 15,
  },
  {
    id: "toners",
    name: "Toners",
    description: "Balancing and refreshing skin toners",
    image: "https://picsum.photos/seed/pureskin-cat-toners/1000/700",
    productCount: 8,
  },
  {
    id: "eye-care",
    name: "Eye Care",
    description: "Specialized treatments for the delicate eye area",
    image: "https://picsum.photos/seed/pureskin-cat-eye/1000/700",
    productCount: 6,
  },
  {
    id: "treatments",
    name: "Treatments",
    description: "Intensive treatments for specific skin needs",
    image: "https://picsum.photos/seed/pureskin-cat-treatments/1000/700",
    productCount: 10,
  },
]

export default function CategoriesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Shop by Category</h1>
            <p className="text-lg text-muted-foreground">Find the perfect products for your skincare routine</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link key={category.id} href={`/products?category=${category.id}`}>
                <Card className="group hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={category.image || "/placeholder.svg"}
                        alt={category.name}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-2">{category.name}</h3>
                      <p className="text-muted-foreground mb-3">{category.description}</p>
                      <p className="text-sm text-primary font-medium">{category.productCount} products</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
