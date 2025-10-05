export function AboutGallery() {
  const galleryImages = [
    {
      src: "/skincare-lab-research.jpg",
      alt: "Research and development laboratory",
      title: "Scientific Excellence",
      description: "Our state-of-the-art lab where innovation meets nature",
    },
    {
      src: "/natural-ingredients-herbs.jpg",
      alt: "Natural organic ingredients",
      title: "Pure Ingredients",
      description: "Sourced from sustainable organic farms worldwide",
    },
    {
      src: "/spa-wellness-scene.jpg",
      alt: "Wellness and spa environment",
      title: "Holistic Wellness",
      description: "Creating moments of self-care and relaxation",
    },
    {
      src: "/product-ingredients-natural.jpg",
      alt: "Product formulation with natural ingredients",
      title: "Natural Formulations",
      description: "Expertly crafted blends for optimal results",
    },
    {
      src: "/organic-botanical-ingredients.jpg",
      alt: "Botanical ingredients collection",
      title: "Botanical Beauty",
      description: "Harnessing the power of plants for your skin",
    },
    {
      src: "/eco-friendly-packaging-detail.jpg",
      alt: "Sustainable eco-friendly packaging",
      title: "Sustainable Practices",
      description: "Beautiful products in earth-friendly packaging",
    },
  ]

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Behind the Scenes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Take a closer look at our commitment to quality, sustainability, and natural beauty
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-muted hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-5 bg-background">
                <h3 className="font-semibold text-foreground mb-2">{image.title}</h3>
                <p className="text-sm text-muted-foreground">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
