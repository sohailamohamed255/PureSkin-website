export function LifestyleGallery() {
  const images = [
    {
      src: "/beauty-skincare-lifestyle-1.jpg",
      alt: "Natural skincare routine",
      title: "Daily Glow",
    },
    {
      src: "/beauty-skincare-lifestyle-2.jpg",
      alt: "Skincare application",
      title: "Pure Beauty",
    },
    {
      src: "/beauty-skincare-lifestyle-3.jpg",
      alt: "Wellness and self-care",
      title: "Self Care",
    },
    {
      src: "/skincare-routine-lifestyle.jpg",
      alt: "Morning skincare routine",
      title: "Morning Ritual",
    },
  ]

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            The PureSkin Lifestyle
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the beauty of natural skincare in your daily routine
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg aspect-square hover:shadow-xl transition-all duration-300"
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
