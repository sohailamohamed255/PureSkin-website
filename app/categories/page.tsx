import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const categories = [
  {
    id: "cleansers",
    name: "Cleansers",
    description: "Gentle cleansing products for all skin types",
    image: "/gentle-face-cleanser-pump-bottle-with-natural-ingr.jpg",
    productCount: 12,
  },
  {
    id: "serums",
    name: "Serums",
    description: "Concentrated treatments for targeted skin concerns",
    image: "/vitamin-c-serum-bottle-with-dropper-on-white-backg.jpg",
    productCount: 18,
  },
  {
    id: "moisturizers",
    name: "Moisturizers",
    description: "Hydrating creams and lotions for healthy skin",
    image: "/luxury-night-cream-jar-with-gold-accents.jpg",
    productCount: 15,
  },
  {
    id: "toners",
    name: "Toners",
    description: "Balancing and refreshing skin toners",
    image: "/gentle-face-cleanser-pump-bottle-with-natural-ingr.jpg",
    productCount: 8,
  },
  {
    id: "eye-care",
    name: "Eye Care",
    description: "Specialized treatments for the delicate eye area",
    image: "/premium-eye-cream-tube-with-elegant-packaging.jpg",
    productCount: 6,
  },
  {
    id: "treatments",
    name: "Treatments",
    description: "Intensive treatments for specific skin needs",
    image: "/serene-spa-setting-with-natural-skincare-products-.jpg",
    productCount: 10,
  },
]

export default function CategoriesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-muted/50 to-background relative">
          <div className="absolute inset-0 bg-[url('/serene-spa-setting-with-natural-skincare-products-.jpg')] bg-cover bg-center opacity-15"></div>
          <div className="absolute inset-0 bg-[url('/luxury-night-cream-jar-with-gold-accents.jpg')] bg-cover bg-center opacity-5"></div>
          
          {/* Floating product images */}
          <div className="absolute top-20 left-20 w-20 h-20 rounded-full overflow-hidden opacity-20 animate-pulse">
            <img src="/vitamin-c-serum-bottle-with-dropper-on-white-backg.jpg" alt="Vitamin C Serum" className="w-full h-full object-cover" />
          </div>
          <div className="absolute bottom-20 right-20 w-16 h-16 rounded-full overflow-hidden opacity-15 animate-pulse delay-1000">
            <img src="/premium-eye-cream-tube-with-elegant-packaging.jpg" alt="Eye Cream" className="w-full h-full object-cover" />
          </div>
          <div className="absolute top-1/2 right-10 w-12 h-12 rounded-full overflow-hidden opacity-10 animate-pulse delay-500">
            <img src="/gentle-face-cleanser-pump-bottle-with-natural-ingr.jpg" alt="Face Cleanser" className="w-full h-full object-cover" />
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Shop by <span className="text-primary">Category</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Find the perfect products for your skincare routine. Browse our carefully curated categories
                to discover products tailored to your specific skin needs.
              </p>
            </div>
          </div>
        </section>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">

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
