import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const steps = [
  {
    id: 1,
    title: "Cleanse",
    description: "Start with our gentle cleansers to remove impurities and prepare your skin",
    image: "/morning-skincare-routine.jpg",
    products: ["Gentle Cleansing Foam", "Rose Water Toner"],
  },
  {
    id: 2,
    title: "Treat",
    description: "Apply targeted serums and treatments for your specific skin concerns",
    image: "/skincare-application-hands.jpg",
    products: ["Vitamin C Serum", "Niacinamide Serum", "Peptide Serum"],
  },
  {
    id: 3,
    title: "Moisturize",
    description: "Lock in hydration with our nourishing moisturizers and creams",
    image: "/evening-skincare-ritual.jpg",
    products: ["Hyaluronic Acid Moisturizer", "Night Cream"],
  },
]

export function HowItWorks() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="mb-4" variant="secondary">
            How It Works
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Your Perfect Skincare Routine
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Follow our simple 3-step process for healthier, more radiant skin every day
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={step.id} className="group hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                      {step.id}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{step.description}</p>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-foreground">Recommended products:</p>
                    <div className="flex flex-wrap gap-2">
                      {step.products.map((product) => (
                        <Badge key={product} variant="outline" className="text-xs">
                          {product}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Need personalized recommendations? Our skincare experts are here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            >
              Get Free Consultation
            </a>
            <a
              href="/products"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
            >
              Shop All Products
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}