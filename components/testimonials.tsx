import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    image: "/customer-testimonial-1.jpg",
    rating: 5,
    text: "PureSkin's Vitamin C serum completely transformed my skin! I've been using it for 3 months and my complexion has never looked brighter and more even.",
    product: "Vitamin C Brightening Serum",
  },
  {
    id: 2,
    name: "Emma L.",
    image: "/customer-testimonial-2.jpg",
    rating: 5,
    text: "The Hydrating Night Cream is absolutely amazing. I wake up with soft, plump skin every morning. Worth every penny!",
    product: "Hydrating Night Cream",
  },
  {
    id: 3,
    name: "Jessica R.",
    image: "/customer-testimonial-3.jpg",
    rating: 5,
    text: "As someone with sensitive skin, finding the right cleanser was challenging. The Gentle Cleansing Foam is perfect - it removes makeup without irritation.",
    product: "Gentle Cleansing Foam",
  },
]

export function Testimonials() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Our Customers Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results from real customers who love their PureSkin experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <div className="flex items-center mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">"{testimonial.text}"</p>
                <p className="text-sm text-primary font-medium">Verified purchase: {testimonial.product}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}