import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, Heart, Award, Users, Shield, Sparkles } from "lucide-react"

const values = [
  {
    icon: Leaf,
    title: "Natural Ingredients",
    description: "We source only the finest natural and organic ingredients from sustainable farms worldwide.",
  },
  {
    icon: Heart,
    title: "Skin Health First",
    description: "Every product is formulated with your skin's health and wellbeing as our top priority.",
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "Rigorous testing and quality control ensure every product meets our high standards.",
  },
  {
    icon: Users,
    title: "Community Focused",
    description: "We believe in building a community of skincare enthusiasts who support each other.",
  },
  {
    icon: Shield,
    title: "Cruelty-Free",
    description: "All our products are cruelty-free and never tested on animals.",
  },
  {
    icon: Sparkles,
    title: "Proven Results",
    description: "Our formulations are backed by science and proven to deliver visible results.",
  },
]

const team = [
  {
    name: "Dr. Sarah Chen",
    role: "Founder & Chief Formulator",
    image: "/placeholder-user.jpg",
    bio: "With over 15 years in dermatological research, Dr. Chen founded PureSkin to make premium skincare accessible to everyone.",
  },
  {
    name: "Maria Rodriguez",
    role: "Head of Product Development",
    image: "/placeholder-user.jpg",
    bio: "Maria brings 12 years of cosmetic chemistry expertise, ensuring every product meets our strict quality standards.",
  },
  {
    name: "James Thompson",
    role: "Sustainability Director",
    image: "/placeholder-user.jpg",
    bio: "James leads our commitment to sustainable practices and ethical sourcing of ingredients worldwide.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-muted/50 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4" variant="secondary">
                Our Story
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Nurturing Skin, <span className="text-primary">Naturally</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded in 2018, PureSkin was born from a simple belief: everyone deserves access to premium, natural
                skincare that actually works. We combine the wisdom of traditional ingredients with modern scientific
                research to create products that nurture your skin's natural beauty.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  We're on a mission to revolutionize skincare by creating products that are not only effective but also
                  safe, sustainable, and accessible. Every formula is carefully crafted with natural ingredients that
                  work in harmony with your skin's natural processes.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  From our sustainable packaging to our cruelty-free testing methods, every decision we make reflects
                  our commitment to both your skin's health and our planet's wellbeing.
                </p>
              </div>
              <div className="relative">
                <img
                  src="/serene-spa-setting-with-natural-skincare-products-.jpg"
                  alt="Natural skincare ingredients"
                  className="rounded-lg shadow-lg w-full h-96 object-cover"
                />
                {/* Overlay product images */}
                <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full overflow-hidden shadow-lg">
                  <img src="/vitamin-c-serum-bottle-with-dropper-on-white-backg.jpg" alt="Vitamin C Serum" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full overflow-hidden shadow-lg">
                  <img src="/premium-eye-cream-tube-with-elegant-packaging.jpg" alt="Eye Cream" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These core values guide everything we do, from product development to customer service
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Meet Our Team</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The passionate experts behind PureSkin's innovative formulations
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">50K+</div>
                <div className="text-primary-foreground/80">Happy Customers</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-primary-foreground/80">Natural Ingredients</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">6</div>
                <div className="text-primary-foreground/80">Years of Excellence</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">25+</div>
                <div className="text-primary-foreground/80">Award-Winning Products</div>
              </div>
            </div>
          </div>
        </section>

        {/* Sustainability Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img
                  src="/luxury-night-cream-jar-with-gold-accents.jpg"
                  alt="Sustainable packaging"
                  className="rounded-lg shadow-lg w-full h-96 object-cover"
                />
                {/* Additional product images for visual appeal */}
                <div className="absolute top-4 right-4 w-16 h-16 rounded-full overflow-hidden shadow-lg border-2 border-white">
                  <img src="/gentle-face-cleanser-pump-bottle-with-natural-ingr.jpg" alt="Natural cleanser" className="w-full h-full object-cover" />
                </div>
                <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full overflow-hidden shadow-lg border-2 border-white">
                  <img src="/vitamin-c-serum-bottle-with-dropper-on-white-backg.jpg" alt="Vitamin C" className="w-full h-full object-cover" />
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Committed to Sustainability</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  We believe that beautiful skin shouldn't come at the cost of our planet. That's why we've implemented
                  sustainable practices throughout our entire supply chain, from ingredient sourcing to packaging
                  design.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <Leaf className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span>100% recyclable and biodegradable packaging materials</span>
                  </li>
                  <li className="flex items-start">
                    <Leaf className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span>Ethically sourced ingredients from certified organic farms</span>
                  </li>
                  <li className="flex items-start">
                    <Leaf className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span>Carbon-neutral shipping and manufacturing processes</span>
                  </li>
                  <li className="flex items-start">
                    <Leaf className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span>Supporting reforestation projects with every purchase</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
