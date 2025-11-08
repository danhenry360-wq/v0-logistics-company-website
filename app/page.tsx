"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Truck, Ship, Plane, Package, Clock, Shield, ArrowRight, MapPin, Users, Award } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-background pt-16">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary/80">
        <div className="absolute inset-0">
          <img
            src="/cargo-truck-highway-sunset.jpg"
            alt="Logistics background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-primary-foreground">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Delivering Your World, One Shipment at a Time
              </h1>
              <p className="text-lg md:text-xl mb-8 opacity-90">
                Global logistics solutions for air, sea, and road freight. Track shipments in real-time, get instant
                quotes, and trust the professionals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8" asChild>
                  <Link href="/track">
                    Track Shipment <ArrowRight className="ml-2" size={20} />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 px-8 bg-transparent"
                  asChild
                >
                  <Link href="/quote">Request Quote</Link>
                </Button>
              </div>
              <div className="flex gap-8 text-sm">
                <div>
                  <p className="text-2xl font-bold">150+</p>
                  <p className="opacity-80">Countries</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">50K+</p>
                  <p className="opacity-80">Shipments/Month</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">24/7</p>
                  <p className="opacity-80">Support</p>
                </div>
              </div>
            </div>

            <div className="hidden md:block">
              <img
                src="/cargo-container-logistics-network.jpg"
                alt="Logistics illustration"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive logistics solutions tailored to your shipping needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Plane,
                title: "Air Freight",
                description: "Fast and reliable air cargo services for time-sensitive shipments worldwide.",
                image: "/cargo-airplane-loading.jpg",
              },
              {
                icon: Ship,
                title: "Ocean Freight",
                description: "Cost-effective ocean shipping for large volume shipments across continents.",
                image: "/cargo-ship-containers.jpg",
              },
              {
                icon: Truck,
                title: "Road Transport",
                description: "Flexible ground transportation with full tracking and insurance coverage.",
                image: "/logistics-truck-delivery.jpg",
              },
              {
                icon: Package,
                title: "Warehousing",
                description: "Secure storage facilities with inventory management and fulfillment services.",
                image: "/warehouse-storage-facility.jpg",
              },
              {
                icon: MapPin,
                title: "Last-Mile Delivery",
                description: "Final mile solutions ensuring your packages reach the exact destination.",
                image: "/delivery-van-neighborhood.jpg",
              },
              {
                icon: Clock,
                title: "Real-Time Tracking",
                description: "Live GPS tracking and instant notifications for complete visibility.",
                image: "/real-time-gps-tracking-map.jpg",
              },
            ].map((service, idx) => {
              const Icon = service.icon
              return (
                <div
                  key={idx}
                  className="group border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all"
                >
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-6">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/30 transition">
                      <Icon className="text-accent" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <Link
                      href="/services"
                      className="text-accent hover:text-accent/80 font-semibold inline-flex items-center gap-2"
                    >
                      Learn More <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose LogisticsHub?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're committed to delivering excellence in every shipment
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Secure & Insured", desc: "Full coverage and protection for your valuable cargo" },
              { icon: Clock, title: "On-Time Delivery", desc: "99.2% on-time delivery rate across all routes" },
              { icon: Award, title: "Industry Leading", desc: "ISO certified and recognized for excellence" },
              { icon: Users, title: "Expert Team", desc: "500+ logistics professionals ready to help" },
              { icon: MapPin, title: "Global Network", desc: "Partnerships in 150+ countries worldwide" },
              { icon: Package, title: "Transparent Pricing", desc: "No hidden fees, competitive rates guaranteed" },
            ].map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="text-center">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-accent" size={32} />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Ship?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Get started with LogisticsHub today. Request a quote or track your shipment in seconds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white" asChild>
              <Link href="/quote">Get a Quote</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              asChild
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
