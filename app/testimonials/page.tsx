"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Star, Quote } from "lucide-react"

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      company: "TechCorp Industries",
      role: "Supply Chain Director",
      image: "/placeholder.svg?key=cust1",
      text: "LogisticsHub has been instrumental in streamlining our global supply chain. Their real-time tracking and reliable delivery have reduced our logistics costs by 20% while improving customer satisfaction.",
      rating: 5,
    },
    {
      name: "David Chen",
      company: "Global Manufacturing Co.",
      role: "Operations Manager",
      image: "/placeholder.svg?key=cust2",
      text: "Outstanding service from day one. The team is responsive, professional, and genuinely cares about getting shipments delivered on time. They handle both routine and complex shipments with equal expertise.",
      rating: 5,
    },
    {
      name: "Emma Rodriguez",
      company: "Fashion & Style LLC",
      role: "CEO",
      image: "/placeholder.svg?key=cust3",
      text: "As an e-commerce company, reliable shipping is critical. LogisticsHub ensures our customers receive their orders quickly and safely. Their last-mile delivery service is second to none.",
      rating: 5,
    },
    {
      name: "James Thompson",
      company: "Pharma Solutions Inc.",
      role: "Regulatory Affairs Manager",
      image: "/placeholder.svg?key=cust4",
      text: "For sensitive pharmaceutical shipments, we need absolute reliability and compliance. LogisticsHub exceeds our expectations with their temperature-controlled options and meticulous documentation.",
      rating: 5,
    },
    {
      name: "Lisa Wong",
      company: "Pacific Trade Exports",
      role: "Export Manager",
      image: "/placeholder.svg?key=cust5",
      text: "We ship hundreds of containers annually to diverse destinations. LogisticsHub simplifies the entire process with their intuitive platform and expert guidance through complex customs requirements.",
      rating: 5,
    },
    {
      name: "Michael O'Brien",
      company: "Fresh Foods International",
      role: "Logistics Coordinator",
      image: "/placeholder.svg?key=cust6",
      text: "Perishable goods demand precision and care. LogisticsHub's commitment to quality handling and their advanced cooling solutions have made them our preferred logistics partner.",
      rating: 5,
    },
  ]

  const partners = [
    { name: "Global Airlines", logo: "/placeholder.svg?key=partner1", category: "Air Carrier" },
    { name: "Ocean Shipping Ltd", logo: "/placeholder.svg?key=partner2", category: "Ocean Carrier" },
    { name: "Express Motors", logo: "/placeholder.svg?key=partner3", category: "Ground Transport" },
    { name: "WarehousePro", logo: "/placeholder.svg?key=partner4", category: "Storage Solutions" },
    { name: "ClearanceExpress", logo: "/placeholder.svg?key=partner5", category: "Customs Broker" },
    { name: "TrackSys", logo: "/placeholder.svg?key=partner6", category: "Technology Partner" },
    { name: "Insurance Global", logo: "/placeholder.svg?key=partner7", category: "Insurance" },
    { name: "Security Plus", logo: "/placeholder.svg?key=partner8", category: "Security Services" },
  ]

  return (
    <main className="min-h-screen bg-background pt-16">
      <Navbar />

      {/* Header */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Customer Testimonials & Partners</h1>
          <p className="text-xl opacity-90">Trusted by leading companies worldwide</p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of satisfied customers who've transformed their logistics with LogisticsHub
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <Quote className="text-accent opacity-30" size={28} />
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="text-yellow-400" size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">"{testimonial.text}"</p>

                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold mb-2">10K+</p>
              <p className="opacity-90">Happy Customers</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">4.9/5</p>
              <p className="opacity-90">Average Rating</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">98%</p>
              <p className="opacity-90">Satisfaction Rate</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">4M+</p>
              <p className="opacity-90">Shipments Delivered</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Strategic Partners</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We partner with industry leaders to provide comprehensive logistics solutions
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {partners.map((partner, idx) => (
              <div
                key={idx}
                className="bg-card border border-border rounded-lg p-8 flex flex-col items-center justify-center hover:shadow-lg transition-shadow"
              >
                <img
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  className="w-24 h-24 object-contain mb-4"
                />
                <h3 className="font-semibold text-center mb-2">{partner.name}</h3>
                <p className="text-sm text-muted-foreground text-center">{partner.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-muted/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Industries We Serve</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Technology & Electronics",
              "Pharmaceuticals & Healthcare",
              "E-commerce & Retail",
              "Food & Beverages",
              "Fashion & Apparel",
              "Manufacturing",
              "Automotive",
              "Energy & Oil & Gas",
            ].map((industry, idx) => (
              <div key={idx} className="bg-card border border-border rounded-lg p-6 text-center">
                <p className="font-semibold">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-accent/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Growing Network</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Become part of the LogisticsHub family and experience the difference reliable logistics can make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <Link href="/quote">Get Started Today</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
