"use client"

import { useState, useMemo } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Star, Filter, Grid, List } from "lucide-react"
import Link from "next/link"
import { useCart } from "@/contexts/cart-context"

const allProducts = [
  {
    id: 1,
    name: "Vitamin C Brightening Serum",
    price: 45.99,
    originalPrice: 59.99,
    image: "https://picsum.photos/seed/pureskin-serum-catalog/800/600",
    rating: 4.8,
    reviews: 124,
    category: "serums",
    skinType: ["all", "oily", "combination"],
    badge: "Best Seller",
    description: "Powerful antioxidant serum that brightens and evens skin tone",
  },
  {
    id: 2,
    name: "Hydrating Night Cream",
    price: 38.99,
    image: "https://picsum.photos/seed/pureskin-cream-catalog/800/600",
    rating: 4.9,
    reviews: 89,
    category: "moisturizers",
    skinType: ["dry", "mature"],
    badge: "New",
    description: "Rich, nourishing cream for overnight skin repair and hydration",
  },
  {
    id: 3,
    name: "Gentle Cleansing Foam",
    price: 24.99,
    image: "https://picsum.photos/seed/pureskin-cleanser-catalog/800/600",
    rating: 4.7,
    reviews: 156,
    category: "cleansers",
    skinType: ["all", "sensitive"],
    badge: null,
    description: "Mild, pH-balanced cleanser that removes impurities without stripping",
  },
  {
    id: 4,
    name: "Anti-Aging Eye Cream",
    price: 52.99,
    image: "https://picsum.photos/seed/pureskin-eye-catalog/800/600",
    rating: 4.6,
    reviews: 73,
    category: "eye-care",
    skinType: ["mature", "all"],
    badge: "Premium",
    description: "Advanced formula targeting fine lines and dark circles",
  },
  {
    id: 5,
    name: "Niacinamide Pore Refining Serum",
    price: 32.99,
    image: "https://picsum.photos/seed/pureskin-niacinamide-catalog/800/600",
    rating: 4.5,
    reviews: 98,
    category: "serums",
    skinType: ["oily", "combination"],
    badge: null,
    description: "Minimizes pores and controls oil production",
  },
  {
    id: 6,
    name: "Hyaluronic Acid Moisturizer",
    price: 29.99,
    image: "https://picsum.photos/seed/pureskin-hyaluronic-catalog/800/600",
    rating: 4.8,
    reviews: 142,
    category: "moisturizers",
    skinType: ["all", "dry"],
    badge: null,
    description: "Lightweight moisturizer with intense hydration",
  },
  {
    id: 7,
    name: "Exfoliating AHA Toner",
    price: 27.99,
    image: "https://picsum.photos/seed/pureskin-toner-catalog/800/600",
    rating: 4.4,
    reviews: 67,
    category: "toners",
    skinType: ["oily", "combination"],
    badge: null,
    description: "Gentle chemical exfoliant for smoother, brighter skin",
  },
  {
    id: 8,
    name: "Soothing Aloe Gel",
    price: 19.99,
    image: "https://picsum.photos/seed/pureskin-aloe-catalog/800/600",
    rating: 4.6,
    reviews: 89,
    category: "treatments",
    skinType: ["sensitive", "all"],
    badge: null,
    description: "Calming gel for irritated and inflamed skin",
  },
]

const categories = [
  { id: "all", label: "All Products" },
  { id: "cleansers", label: "Cleansers" },
  { id: "serums", label: "Serums" },
  { id: "moisturizers", label: "Moisturizers" },
  { id: "toners", label: "Toners" },
  { id: "eye-care", label: "Eye Care" },
  { id: "treatments", label: "Treatments" },
]

const skinTypes = [
  { id: "all", label: "All Skin Types" },
  { id: "dry", label: "Dry" },
  { id: "oily", label: "Oily" },
  { id: "combination", label: "Combination" },
  { id: "sensitive", label: "Sensitive" },
  { id: "mature", label: "Mature" },
]

export function ProductCatalog() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedSkinTypes, setSelectedSkinTypes] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState([0, 100])
  const [sortBy, setSortBy] = useState("featured")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [showFilters, setShowFilters] = useState(false)

  const { addItem } = useCart()

  const filteredAndSortedProducts = useMemo(() => {
    const filtered = allProducts.filter((product) => {
      // Category filter
      if (selectedCategory !== "all" && product.category !== selectedCategory) {
        return false
      }

      // Skin type filter
      if (selectedSkinTypes.length > 0) {
        const hasMatchingSkinType = selectedSkinTypes.some((skinType) => product.skinType.includes(skinType))
        if (!hasMatchingSkinType) return false
      }

      // Price filter
      if (product.price < priceRange[0] || product.price > priceRange[1]) {
        return false
      }

      return true
    })

    // Sort products
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        filtered.sort((a, b) => b.price - a.price)
        break
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case "name":
        filtered.sort((a, b) => a.name.localeCompare(b.name))
        break
      default:
        // Keep original order for "featured"
        break
    }

    return filtered
  }, [selectedCategory, selectedSkinTypes, priceRange, sortBy])

  const handleSkinTypeChange = (skinType: string, checked: boolean) => {
    if (checked) {
      setSelectedSkinTypes([...selectedSkinTypes, skinType])
    } else {
      setSelectedSkinTypes(selectedSkinTypes.filter((type) => type !== skinType))
    }
  }

  const handleAddToCart = (product: (typeof allProducts)[0]) => {
    addItem({
      id: product.id.toString(),
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    })
  }

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Filters Sidebar */}
      <div className={`lg:w-64 ${showFilters ? "block" : "hidden lg:block"}`}>
        <div className="bg-card rounded-lg p-6 sticky top-24">
          <h3 className="font-semibold text-foreground mb-4">Filters</h3>

          {/* Category Filter */}
          <div className="mb-6">
            <h4 className="font-medium text-foreground mb-3">Category</h4>
            <div className="space-y-2">
              {categories.map((category) => (
                <label key={category.id} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="category"
                    value={category.id}
                    checked={selectedCategory === category.id}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="text-primary"
                  />
                  <span className="text-sm text-foreground">{category.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Skin Type Filter */}
          <div className="mb-6">
            <h4 className="font-medium text-foreground mb-3">Skin Type</h4>
            <div className="space-y-2">
              {skinTypes.slice(1).map((skinType) => (
                <div key={skinType.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={skinType.id}
                    checked={selectedSkinTypes.includes(skinType.id)}
                    onCheckedChange={(checked) => handleSkinTypeChange(skinType.id, checked as boolean)}
                  />
                  <label htmlFor={skinType.id} className="text-sm text-foreground cursor-pointer">
                    {skinType.label}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Price Range Filter */}
          <div className="mb-6">
            <h4 className="font-medium text-foreground mb-3">Price Range</h4>
            <div className="px-2">
              <Slider value={priceRange} onValueChange={setPriceRange} max={100} min={0} step={5} className="mb-2" />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
          </div>

          <Button
            variant="outline"
            onClick={() => {
              setSelectedCategory("all")
              setSelectedSkinTypes([])
              setPriceRange([0, 100])
            }}
            className="w-full"
          >
            Clear Filters
          </Button>
        </div>
      </div>

      {/* Products Grid */}
      <div className="flex-1">
        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" onClick={() => setShowFilters(!showFilters)} className="lg:hidden">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
            <p className="text-sm text-muted-foreground">
              Showing {filteredAndSortedProducts.length} of {allProducts.length} products
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="name">Name A-Z</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex border rounded-md">
              <Button variant={viewMode === "grid" ? "default" : "ghost"} size="sm" onClick={() => setViewMode("grid")}>
                <Grid className="h-4 w-4" />
              </Button>
              <Button variant={viewMode === "list" ? "default" : "ghost"} size="sm" onClick={() => setViewMode("list")}>
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Products */}
        {filteredAndSortedProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground mb-4">No products found matching your criteria</p>
            <Button
              variant="outline"
              onClick={() => {
                setSelectedCategory("all")
                setSelectedSkinTypes([])
                setPriceRange([0, 100])
              }}
            >
              Clear All Filters
            </Button>
          </div>
        ) : (
          <div className={viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
            {filteredAndSortedProducts.map((product) => (
              <Card
                key={product.id}
                className={`group hover:shadow-lg transition-shadow duration-300 ${
                  viewMode === "list" ? "flex flex-row" : ""
                }`}
              >
                <CardContent className={`p-0 ${viewMode === "list" ? "flex flex-row w-full" : ""}`}>
                  <div
                    className={`relative overflow-hidden ${viewMode === "list" ? "w-48 flex-shrink-0" : "rounded-t-lg"}`}
                  >
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className={`object-cover group-hover:scale-105 transition-transform duration-300 ${
                        viewMode === "list" ? "w-full h-full" : "w-full h-64"
                      }`}
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
                  <div className={`p-4 ${viewMode === "list" ? "flex-1 flex flex-col justify-between" : ""}`}>
                    <div>
                      <Link href={`/products/${product.id}`}>
                        <h3 className="font-semibold text-foreground mb-2 hover:text-primary transition-colors text-balance">
                          {product.name}
                        </h3>
                      </Link>
                      {viewMode === "list" && (
                        <p className="text-sm text-muted-foreground mb-3">{product.description}</p>
                      )}
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
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-foreground">${product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className={`p-4 pt-0 ${viewMode === "list" ? "flex items-end" : ""}`}>
                  <Button className="w-full" onClick={() => handleAddToCart(product)}>
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
