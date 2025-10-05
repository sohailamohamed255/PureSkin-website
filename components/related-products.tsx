import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"
import Link from "next/link"

// Mock related products data
const relatedProducts = [
  {
    id: 3,
    name: "Gentle Cleansing Foam",
    price: 24.99,
    image: "/gentle-face-cleanser-pump-bottle.jpg",
    rating: 4.7,
    reviews: 156,
    badge: null,
  },
  {
    id: 4,
    name: "Anti-Aging Eye Cream",
    price: 52.99,
    image: "/premium-eye-cream-tube.jpg",
    rating: 4.6,
    reviews: 73,
    badge: "Premium",
  },
  {
    id: 5,
    name: "Niacinamide Pore Refining Serum",
    price: 32.99,
    image: "/niacinamide-serum-bottle.jpg",
    rating: 4.5,
    reviews: 98,
    badge: null,
  },
  {
    id: 6,
    name: "Hyaluronic Acid Moisturizer",
    price: 29.99,
    image: "/hyaluronic-acid-moisturizer-jar.jpg",
    rating: 4.8,
    reviews: 142,
    badge: null,
  },
]

interface RelatedProductsProps {
  currentProductId: number
  category: string
}

export function RelatedProducts({ currentProductId, category }: RelatedProductsProps) {
  // Filter out current product and limit to 4 items
  const filteredProducts = relatedProducts.filter((product) => product.id !== currentProductId).slice(0, 4)

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">You Might Also Like</h2>
          <p className="text-lg text-muted-foreground">
            Complete your skincare routine with these complementary products
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Link href={`/products/${product.id}`}>
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </Link>
                  {product.badge && (
                    <Badge
                      className="absolute top-3 left-3"
                      variant={product.badge === "New" ? "default" : "secondary"}
                    >
                      {product.badge}
                    </Badge>
                  )}
                </div>
                <div className="p-4">
                  <Link href={`/products/${product.id}`}>
                    <h3 className="font-semibold text-foreground mb-2 hover:text-primary transition-colors text-balance">
                      {product.name}
                    </h3>
                  </Link>
                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground ml-2">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-foreground">${product.price}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button className="w-full">Add to Cart</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
