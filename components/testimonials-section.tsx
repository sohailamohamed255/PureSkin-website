"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Emma Rodriguez",
    image: "/customer-testimonial-1.jpg",
    rating: 5,
    text: "PureSkin's products have completely transformed my skin! The Vitamin C Serum is now a staple in my daily routine.",
    product: "Vitamin C Brightening Serum",
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    image: "/customer-testimonial-2.jpg",
    rating: 5,
    text: "I've struggled with sensitive skin for years, but PureSkin's gentle formulas work perfectly. My skin has never looked better!",
    product: "Gentle Cleansing Foam",
  },
  {
    id: 3,
    name: "Jessica Chen",
    image: "/customer-testimonial-3.jpg",
    rating: 5,
    text: "The Night Cream is absolutely luxurious. I wake up with softer, more hydrated skin every morning. Worth every penny!",
    product: "Hydrating Night Cream",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Loved by Thousands
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our customers are saying about their PureSkin experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                    <div className="flex items-center mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-3 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <p className="text-sm text-primary font-medium">{testimonial.product}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
