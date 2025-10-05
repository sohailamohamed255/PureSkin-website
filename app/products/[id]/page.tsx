import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductDetail } from "@/components/product-detail"
import { RelatedProducts } from "@/components/related-products"
import { notFound } from "next/navigation"

// Mock product data - in a real app, this would come from an API
const products = [
  {
    id: 1,
    name: "Vitamin C Brightening Serum",
    price: 45.99,
    originalPrice: 59.99,
    images: [
      "/vitamin-c-serum-bottle-with-dropper-on-white-backg.jpg",
      "/vitamin-c-serum-bottle-with-dropper-on-white-backg.jpg",
      "/vitamin-c-serum-bottle-with-dropper-on-white-backg.jpg",
      "/vitamin-c-serum-bottle-with-dropper-on-white-backg.jpg",
    ],
    rating: 4.8,
    reviews: 124,
    category: "serums",
    skinType: ["all", "oily", "combination"],
    badge: "Best Seller",
    description:
      "Transform your skin with our powerful Vitamin C Brightening Serum. This advanced formula combines 20% L-Ascorbic Acid with Vitamin E and Ferulic Acid to deliver maximum antioxidant protection and brightening benefits.",
    keyIngredients: [
      "20% L-Ascorbic Acid - Powerful antioxidant that brightens skin",
      "Vitamin E - Protects against environmental damage",
      "Ferulic Acid - Stabilizes and enhances vitamin C effectiveness",
      "Hyaluronic Acid - Provides deep hydration",
    ],
    benefits: [
      "Brightens and evens skin tone",
      "Reduces appearance of dark spots",
      "Provides antioxidant protection",
      "Stimulates collagen production",
      "Improves skin texture and radiance",
    ],
    howToUse:
      "Apply 2-3 drops to clean, dry skin in the morning. Follow with moisturizer and SPF. Start with every other day and gradually increase to daily use.",
    ingredients:
      "Water, L-Ascorbic Acid, Propylene Glycol, Vitamin E, Ferulic Acid, Hyaluronic Acid, Glycerin, Phenoxyethanol, Ethylhexylglycerin",
    size: "30ml / 1 fl oz",
    inStock: true,
    stockCount: 15,
  },
  {
    id: 2,
    name: "Hydrating Night Cream",
    price: 38.99,
    images: [
      "/luxury-night-cream-jar-with-gold-accents.jpg", 
      "/luxury-night-cream-jar.jpg", 
      "/luxury-night-cream-jar-with-gold-accents.jpg"
    ],
    rating: 4.9,
    reviews: 89,
    category: "moisturizers",
    skinType: ["dry", "mature"],
    badge: "New",
    description:
      "Indulge your skin overnight with our rich, nourishing night cream. Formulated with peptides, ceramides, and botanical oils to repair and rejuvenate while you sleep.",
    keyIngredients: [
      "Peptide Complex - Stimulates collagen production",
      "Ceramides - Restore skin barrier function",
      "Squalane - Lightweight, non-comedogenic hydration",
      "Bakuchiol - Natural retinol alternative",
    ],
    benefits: [
      "Deeply moisturizes and nourishes",
      "Reduces fine lines and wrinkles",
      "Improves skin elasticity",
      "Restores skin barrier",
      "Promotes overnight skin repair",
    ],
    howToUse:
      "Apply generously to clean face and neck before bedtime. Gently massage until absorbed. Use nightly for best results.",
    ingredients:
      "Water, Glycerin, Squalane, Ceramide NP, Peptide Complex, Bakuchiol, Shea Butter, Jojoba Oil, Phenoxyethanol",
    size: "50ml / 1.7 fl oz",
    inStock: true,
    stockCount: 8,
  },
]

interface ProductPageProps {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.id === Number.parseInt(params.id))

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <ProductDetail product={product} />
        <RelatedProducts currentProductId={product.id} category={product.category} />
      </main>
      <Footer />
    </div>
  )
}
