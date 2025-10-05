"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    inquiryType: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would submit to an API
    console.log("Contact form submitted:", formData)
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      inquiryType: "",
    })
    alert("Thank you for your message! We'll get back to you within 24 hours.")
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-muted/50 to-background relative">
          {/* Background images */}
          <div className="absolute inset-0 bg-[url('/serene-spa-setting-with-natural-skincare-products-.jpg')] bg-cover bg-center opacity-10"></div>
          <div className="absolute inset-0 bg-[url('/luxury-night-cream-jar-with-gold-accents.jpg')] bg-cover bg-center opacity-5"></div>
          
          {/* Floating product images */}
          <div className="absolute top-10 left-20 w-20 h-20 rounded-full overflow-hidden opacity-20 animate-pulse">
            <img src="/vitamin-c-serum-bottle-with-dropper-on-white-backg.jpg" alt="Vitamin C Serum" className="w-full h-full object-cover" />
          </div>
          <div className="absolute bottom-10 right-20 w-16 h-16 rounded-full overflow-hidden opacity-15 animate-pulse delay-500">
            <img src="/premium-eye-cream-tube-with-elegant-packaging.jpg" alt="Eye Cream" className="w-full h-full object-cover" />
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4" variant="secondary">
                Get in Touch
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                We'd Love to <span className="text-primary">Hear From You</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Have questions about our products? Need skincare advice? Our expert team is here to help you on your
                journey to healthier, more radiant skin.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Visit Us</h3>
                  <p className="text-sm text-muted-foreground">
                    123 Beauty Boulevard
                    <br />
                    Los Angeles, CA 90210
                    <br />
                    United States
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Call Us</h3>
                  <p className="text-sm text-muted-foreground">
                    +1 (555) 123-4567
                    <br />
                    Mon-Fri: 9AM-6PM PST
                    <br />
                    Sat: 10AM-4PM PST
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Email Us</h3>
                  <p className="text-sm text-muted-foreground">
                    hello@pureskin.com
                    <br />
                    support@pureskin.com
                    <br />
                    press@pureskin.com
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                    <MessageCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Live Chat</h3>
                  <p className="text-sm text-muted-foreground">
                    Available 24/7
                    <br />
                    Instant responses
                    <br />
                    Expert skincare advice
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form and FAQ */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Send className="h-5 w-5 text-primary" />
                    Send us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          required
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="inquiryType">Inquiry Type</Label>
                      <Select
                        value={formData.inquiryType}
                        onValueChange={(value) => handleInputChange("inquiryType", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="product-question">Product Question</SelectItem>
                          <SelectItem value="skincare-advice">Skincare Advice</SelectItem>
                          <SelectItem value="order-support">Order Support</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                          <SelectItem value="press">Press Inquiry</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                        required
                        placeholder="Brief subject line"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        rows={6}
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        required
                        placeholder="Tell us how we can help you..."
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* FAQ Section */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
                  <p className="text-muted-foreground mb-6">
                    Quick answers to common questions. Can't find what you're looking for? Send us a message!
                  </p>
                </div>

                <div className="space-y-4">
                  <Card>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-foreground mb-2">How long does shipping take?</h3>
                      <p className="text-sm text-muted-foreground">
                        Standard shipping takes 3-5 business days. Express shipping (1-2 days) is available for an
                        additional fee.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-foreground mb-2">What's your return policy?</h3>
                      <p className="text-sm text-muted-foreground">
                        We offer a 30-day money-back guarantee. If you're not satisfied, return the product for a full
                        refund.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-foreground mb-2">
                        Are your products suitable for sensitive skin?
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Many of our products are formulated for sensitive skin. Check individual product pages for skin
                        type recommendations.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-foreground mb-2">Do you offer skincare consultations?</h3>
                      <p className="text-sm text-muted-foreground">
                        Yes! Our skincare experts offer free consultations via chat, email, or phone to help you build
                        the perfect routine.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-foreground mb-2">Are your products cruelty-free?</h3>
                      <p className="text-sm text-muted-foreground">
                        All PureSkin products are cruelty-free and never tested on animals. We're certified by Leaping
                        Bunny.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Business Hours */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <Clock className="h-8 w-8 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-foreground mb-4">Business Hours</h2>
                <p className="text-muted-foreground">
                  Our customer service team is available during these hours to assist you
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-4">Customer Service</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Monday - Friday</span>
                        <span className="font-medium">9:00 AM - 6:00 PM PST</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Saturday</span>
                        <span className="font-medium">10:00 AM - 4:00 PM PST</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Sunday</span>
                        <span className="font-medium">Closed</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-4">Live Chat Support</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Available</span>
                        <span className="font-medium text-accent">24/7</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Response Time</span>
                        <span className="font-medium">Under 5 minutes</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Languages</span>
                        <span className="font-medium">English, Spanish</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
