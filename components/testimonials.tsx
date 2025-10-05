import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "New York, NY",
    image: "/team-member-1.jpg",
    rating: 5,
    text: "PureSkin has completely transformed my skincare routine. The Vitamin C serum has brightened my complexion and the night cream is incredibly hydrating. I've never had such healthy, glowing skin!",
  },
  {
    id: 2,
    name: "Maria Rodriguez",
    location: "Los Angeles, CA",
    image: "/team-member-2.jpg",
    rating: 5,
    text: "As someone with sensitive skin, I was hesitant to try new products. But PureSkin's gentle formulations work perfectly for me. The aloe gel is especially soothing after long days.",
  },
  {
    id: 3,
    name: "Emily Chen",
    location: "San Francisco, CA",
    image: "/team-member-3.jpg",
    rating: 5,
    text: "The quality of these products is outstanding. I love that they use natural ingredients and the results speak for themselves. My skin looks and feels amazing every day.",
  },
  {
    id: 4,
    name: "Jessica Williams",
    location: "Chicago, IL",
    image: "/placeholder-user.jpg",
    rating: 5,
    text: "I've tried many skincare brands, but PureSkin stands out. The products are effective, the packaging is beautiful, and the customer service is exceptional. Highly recommended!",
  },
  {
    id: 5,
    name: "Amanda Davis",
    location: "Miami, FL",
    image: "/placeholder-user.jpg",
    rating: 5,
    text: "The retinol serum has made such a difference in my fine lines. I can see the improvement every morning. PureSkin products are worth every penny!",
  },
  {
    id: 6,
    name: "Lisa Thompson",
    location: "Seattle, WA",
    image: "/placeholder-user.jpg",
    rating: 5,
    text: "I love the sustainable packaging and the fact that these products actually work. My skin has never looked better, and I feel good about supporting an eco-friendly brand.",
  },
]

export function Testimonials() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">What Our Customers Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied customers who have transformed their skin with PureSkin
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < testimonial.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover mr-3"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}