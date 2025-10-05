"use client"

import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"
import { useCart } from "@/contexts/cart-context"

const featuredProducts = [
  {
    id: 1,
    name: "Vitamin C Brightening Serum",
    price: 45.99,
    originalPrice: 59.99,
    image: "/vitamin-c-serum-bottle-with-dropper-on-white-backg.jpg",
    rating: 4.8,
    reviews: 124,
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Hydrating Night Cream",
    price: 38.99,
    image: "/luxury-night-cream-jar-with-gold-accents.jpg",
    rating: 4.9,
    reviews: 89,
    badge: "New",
  },
  {
    id: 3,
    name: "Gentle Cleansing Foam",
    price: 24.99,
    image: "/gentle-face-cleanser-pump-bottle-with-natural-ingr.jpg",
    rating: 4.7,
    reviews: 156,
    badge: null,
  },
  {
    id: 4,
    name: "Anti-Aging Eye Cream",
    price: 52.99,
    image: "/premium-eye-cream-tube-with-elegant-packaging.jpg",
    rating: 4.6,
    reviews: 73,
    badge: "Premium",
  },
  {
    id: 5,
    name: "Retinol Night Serum",
    price: 49.99,
    image: "/retinol-night-serum-bottle.jpg",
    rating: 4.7,
    reviews: 98,
    badge: "New",
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
  {
    id: 7,
    name: "Niacinamide Pore Refining Serum",
    price: 32.99,
    image: "/niacinamide-serum-bottle.jpg",
    rating: 4.5,
    reviews: 98,
    badge: null,
  },
  {
    id: 8,
    name: "Soothing Aloe Gel",
    price: 19.99,
    image: "/aloe-vera-gel-tube.jpg",
    rating: 4.6,
    reviews: 89,
    badge: "Natural",
  },
]

export function FeaturedProducts() {
  const { addItem } = useCart()

  const handleAddToCart = (product: (typeof featuredProducts)[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    })
  }

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Products</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our most loved skincare essentials, trusted by thousands of customers worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
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
                  <h3 className="font-semibold text-foreground mb-2 text-balance">{product.name}</h3>
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
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
                    )}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button className="w-full" onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link href="/products">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
