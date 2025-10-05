import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "The Complete Guide to Natural Skincare Ingredients",
    excerpt: "Discover the power of natural ingredients and how they can transform your skincare routine for healthier, more radiant skin.",
    image: "/natural-skincare-ingredients-botanical.jpg",
    category: "Skincare Tips",
    readTime: "5 min read",
    publishDate: "2024-01-15",
    author: "Dr. Sarah Chen",
  },
  {
    id: 2,
    title: "Understanding Your Skin Type: A Beginner's Guide",
    excerpt: "Learn how to identify your skin type and choose the right products for your unique skincare needs and concerns.",
    image: "/spa-treatment-room-background.jpg",
    category: "Education",
    readTime: "7 min read",
    publishDate: "2024-01-10",
    author: "Maria Rodriguez",
  },
  {
    id: 3,
    title: "Sustainable Beauty: Our Commitment to the Planet",
    excerpt: "Explore how we're making skincare more sustainable through eco-friendly packaging and ethical ingredient sourcing.",
    image: "/sustainable-packaging-eco-friendly.jpg",
    category: "Sustainability",
    readTime: "4 min read",
    publishDate: "2024-01-05",
    author: "James Thompson",
  },
]

export function BlogPreview() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Latest from Our Blog</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert tips, skincare guides, and the latest in natural beauty
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="group hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 left-3" variant="secondary">
                    {post.category}
                  </Badge>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3 text-balance">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="mr-4">{post.publishDate}</span>
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{post.readTime}</span>
                  </div>
                  <p className="text-sm text-primary font-medium">By {post.author}</p>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Read More
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link href="/blog">View All Articles</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}