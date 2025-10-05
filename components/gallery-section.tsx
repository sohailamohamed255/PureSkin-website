"use client"

import Link from "next/link"

export function GallerySection() {
  const images = [
    "https://picsum.photos/seed/pureskin-gal-1/900/700",
    "https://picsum.photos/seed/pureskin-gal-2/900/700",
    "https://picsum.photos/seed/pureskin-gal-3/900/700",
    "https://picsum.photos/seed/pureskin-gal-4/900/700",
    "https://picsum.photos/seed/pureskin-gal-5/900/700",
    "https://picsum.photos/seed/pureskin-gal-6/900/700",
  ]

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Inspiration Gallery</h2>
            <p className="text-muted-foreground">A glimpse into our world of natural skincare</p>
          </div>
          <Link href="/products" className="text-primary hover:underline text-sm">Shop collection</Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, idx) => (
            <div key={idx} className={`relative overflow-hidden rounded-md ${idx % 5 === 0 ? "md:col-span-2" : ""}`}>
              <img src={src} alt={`PureSkin gallery ${idx + 1}`} className="w-full h-40 md:h-56 object-cover hover:scale-105 transition-transform duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
