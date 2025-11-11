"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Truck, Ship, Plane, Package, MapPin, CheckCircle } from "lucide-react"

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background pt-16">
      <Navbar />

      {/* Header */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Comprehensive logistics solutions designed to meet your shipping needs, no matter the size or complexity.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {/* Air Freight */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <img src="/airplane-loading-cargo-at-airport-terminal.jpg" alt="Air Freight" className="rounded-lg shadow-lg" />
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                    <Plane className="text-accent" size={28} />
                  </div>
                  <h2 className="text-4xl font-bold">Air Freight</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  Fast and reliable air cargo services for time-sensitive shipments. Perfect for electronics,
                  pharmaceuticals, and urgent deliveries worldwide.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-accent" size={20} />
                    <span>Door-to-door pickup and delivery</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-accent" size={20} />
                    <span>Temperature-controlled options</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-accent" size={20} />
                    <span>Express and economy rates</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-accent" size={20} />
                    <span>Full insurance coverage</span>
                  </li>
                </ul>
                <Button className="bg-accent hover:bg-accent/90" asChild>
                  <Link href="/quote">Request Air Freight Quote</Link>
                </Button>
              </div>
            </div>

            {/* Ocean Freight */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                    <Ship className="text-accent" size={28} />
                  </div>
                  <h2 className="text-4xl font-bold">Ocean Freight</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  Cost-effective ocean shipping for large volume shipments across continents. Ideal for bulk cargo and
                  regular scheduled routes.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-accent" size={20} />
                    <span>FCL and LCL services</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-accent" size={20} />
                    <span>Competitive rates for heavy cargo</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-accent" size={20} />
                    <span>Regular port schedules</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-accent" size={20} />
                    <span>Customs clearance assistance</span>
                  </li>
                </ul>
                <Button className="bg-accent hover:bg-accent/90" asChild>
                  <Link href="/quote">Request Ocean Freight Quote</Link>
                </Button>
              </div>
              <img
                src="/cargo-ship-with-containers-at-port-loading.jpg"
                alt="Ocean Freight"
                className="rounded-lg shadow-lg order-1 md:order-2"
              />
            </div>

            {/* Road Transport */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <img src="/logistics-truck-on-highway-road-transport.jpg" alt="Road Transport" className="rounded-lg shadow-lg" />
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                    <Truck className="text-accent" size={28} />
                  </div>
                  <h2 className="text-4xl font-bold">Road Transport</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  Flexible ground transportation with full tracking and insurance coverage. Available for domestic and
                  cross-border shipments.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-accent" size={20} />
                    <span>Real-time GPS tracking</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-accent" size={20} />
                    <span>Multiple vehicle sizes available</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-accent" size={20} />
                    <span>White-glove delivery options</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-accent" size={20} />
                    <span>Refrigerated and hazmat transport</span>
                  </li>
                </ul>
                <Button className="bg-accent hover:bg-accent/90" asChild>
                  <Link href="/quote">Request Road Transport Quote</Link>
                </Button>
              </div>
            </div>

            {/* Warehousing */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                    <Package className="text-accent" size={28} />
                  </div>
                  <h2 className="text-4xl font-bold">Warehousing</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  Secure storage facilities with inventory management and fulfillment services. Strategic locations for
                  optimal distribution.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-accent" size={20} />
                    <span>Climate-controlled storage</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-accent" size={20} />
                    <span>Inventory management system</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-accent" size={20} />
                    <span>Order fulfillment services</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-accent" size={20} />
                    <span>24/7 security monitoring</span>
                  </li>
                </ul>
                <Button className="bg-accent hover:bg-accent/90" asChild>
                  <Link href="/quote">Get Warehousing Info</Link>
                </Button>
              </div>
              <img
                src="/large-warehouse-storage-facility-interior-shelves.jpg"
                alt="Warehousing"
                className="rounded-lg shadow-lg order-1 md:order-2"
              />
            </div>

            {/* Last-Mile Delivery */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <img src="/delivery-van-in-residential-neighborhood-street.jpg" alt="Last-Mile Delivery" className="rounded-lg shadow-lg" />
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                    <MapPin className="text-accent" size={28} />
                  </div>
                  <h2 className="text-4xl font-bold">Last-Mile Delivery</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  Final mile solutions ensuring your packages reach the exact destination. Perfect for B2C and
                  e-commerce operations.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-accent" size={20} />
                    <span>Same-day and scheduled delivery</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-accent" size={20} />
                    <span>Signature confirmation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-accent" size={20} />
                    <span>Damage-free delivery guarantee</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-accent" size={20} />
                    <span>Return logistics support</span>
                  </li>
                </ul>
                <Button className="bg-accent hover:bg-accent/90" asChild>
                  <Link href="/quote">Request Delivery Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-accent/10 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our team can design a tailored logistics strategy for your unique needs.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
            <Link href="/contact">Contact Our Team</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
