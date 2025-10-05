"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Star, ThumbsUp, ThumbsDown } from "lucide-react"

interface Review {
  id: number
  author: string
  rating: number
  date: string
  title: string
  content: string
  verified: boolean
  helpful: number
  notHelpful: number
  skinType?: string
}

const mockReviews: Review[] = [
  {
    id: 1,
    author: "Sarah M.",
    rating: 5,
    date: "2024-01-15",
    title: "Amazing results!",
    content:
      "I've been using this serum for 3 months and the difference is incredible. My dark spots have faded significantly and my skin looks so much brighter. Definitely worth the investment!",
    verified: true,
    helpful: 12,
    notHelpful: 1,
    skinType: "Combination",
  },
  {
    id: 2,
    author: "Jessica L.",
    rating: 4,
    date: "2024-01-10",
    title: "Great product, slight irritation at first",
    content:
      "This serum works well but I had to start slowly. Used it every other day for the first week to let my skin adjust. Now I use it daily and love the glow it gives me.",
    verified: true,
    helpful: 8,
    notHelpful: 0,
    skinType: "Sensitive",
  },
  {
    id: 3,
    author: "Maria R.",
    rating: 5,
    date: "2024-01-05",
    title: "Holy grail product!",
    content:
      "This is my third bottle! Nothing else compares. My skin tone is so much more even and I get compliments all the time. The texture is perfect - not sticky at all.",
    verified: true,
    helpful: 15,
    notHelpful: 0,
    skinType: "Oily",
  },
]

interface ProductReviewsProps {
  productId: number
  rating: number
  reviewCount: number
}

export function ProductReviews({ productId, rating, reviewCount }: ProductReviewsProps) {
  const [showReviewForm, setShowReviewForm] = useState(false)
  const [newReview, setNewReview] = useState({
    rating: 5,
    title: "",
    content: "",
    name: "",
    email: "",
  })

  const ratingDistribution = [
    { stars: 5, count: 78, percentage: 63 },
    { stars: 4, count: 32, percentage: 26 },
    { stars: 3, count: 10, percentage: 8 },
    { stars: 2, count: 3, percentage: 2 },
    { stars: 1, count: 1, percentage: 1 },
  ]

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would submit to an API
    console.log("Submitting review:", newReview)
    setShowReviewForm(false)
    setNewReview({ rating: 5, title: "", content: "", name: "", email: "" })
  }

  return (
    <div className="space-y-8">
      {/* Rating Summary */}
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-foreground mb-2">{rating}</div>
              <div className="flex items-center justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < Math.floor(rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <div className="text-sm text-muted-foreground">{reviewCount} reviews</div>
            </div>
            <div className="flex-1 space-y-2">
              {ratingDistribution.map((item) => (
                <div key={item.stars} className="flex items-center gap-3">
                  <span className="text-sm text-muted-foreground w-8">{item.stars}★</span>
                  <Progress value={item.percentage} className="flex-1" />
                  <span className="text-sm text-muted-foreground w-8">{item.count}</span>
                </div>
              ))}
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Write Review Button */}
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold text-foreground">Customer Reviews</h3>
        <Button onClick={() => setShowReviewForm(!showReviewForm)}>
          {showReviewForm ? "Cancel" : "Write a Review"}
        </Button>
      </div>

      {/* Review Form */}
      {showReviewForm && (
        <Card>
          <CardContent className="p-6">
            <form onSubmit={handleSubmitReview} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={newReview.name}
                    onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={newReview.email}
                    onChange={(e) => setNewReview({ ...newReview, email: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div>
                <Label>Rating</Label>
                <div className="flex items-center gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setNewReview({ ...newReview, rating: i + 1 })}
                      className="p-1"
                    >
                      <Star
                        className={`h-6 w-6 ${i < newReview.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                      />
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <Label htmlFor="title">Review Title</Label>
                <Input
                  id="title"
                  value={newReview.title}
                  onChange={(e) => setNewReview({ ...newReview, title: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="content">Review</Label>
                <Textarea
                  id="content"
                  rows={4}
                  value={newReview.content}
                  onChange={(e) => setNewReview({ ...newReview, content: e.target.value })}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Submit Review
              </Button>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Reviews List */}
      <div className="space-y-6">
        {mockReviews.map((review) => (
          <Card key={review.id}>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-foreground">{review.author}</span>
                    {review.verified && (
                      <span className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded">
                        Verified Purchase
                      </span>
                    )}
                    {review.skinType && (
                      <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">
                        {review.skinType} Skin
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">{review.date}</span>
                  </div>
                </div>
              </div>
              <h4 className="font-medium text-foreground mb-2">{review.title}</h4>
              <p className="text-muted-foreground mb-4 leading-relaxed">{review.content}</p>
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">Was this helpful?</span>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm" className="h-8 px-2">
                    <ThumbsUp className="h-4 w-4 mr-1" />
                    {review.helpful}
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 px-2">
                    <ThumbsDown className="h-4 w-4 mr-1" />
                    {review.notHelpful}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
