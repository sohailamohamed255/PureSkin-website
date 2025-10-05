import { Button } from "@/components/ui/button"
import Link from "next/link"

export function PromotionalBanner() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* First Banner */}
          <div className="relative overflow-hidden rounded-2xl shadow-xl group">
            <div className="absolute inset-0">
              <img
                src="/skincare-before-after.jpg"
                alt="Skincare transformation"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
            </div>
            <div className="relative p-8 md:p-12 min-h-[300px] flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-white mb-4">
                See Visible Results in 30 Days
              </h3>
              <p className="text-white/90 mb-6 max-w-md">
                Join thousands of satisfied customers who have transformed their skin with our natural formulas.
              </p>
              <div>
                <Button asChild size="lg" className="bg-white text-foreground hover:bg-white/90">
                  <Link href="/products">Shop Best Sellers</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Second Banner */}
          <div className="relative overflow-hidden rounded-2xl shadow-xl group">
            <div className="absolute inset-0">
              <img
                src="/spa-wellness-scene.jpg"
                alt="Spa wellness"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40"></div>
            </div>
            <div className="relative p-8 md:p-12 min-h-[300px] flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-white mb-4">
                Free Skincare Consultation
              </h3>
              <p className="text-white/90 mb-6 max-w-md">
                Get personalized skincare advice from our expert dermatologists. Book your free consultation today.
              </p>
              <div>
                <Button asChild size="lg" variant="secondary">
                  <Link href="/contact">Book Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
