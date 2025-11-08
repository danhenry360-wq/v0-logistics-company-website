"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Award, Globe, TrendingUp, Heart, Shield } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background pt-16">
      <Navbar />

      {/* Header */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">About LogisticsHub</h1>
          <p className="text-xl opacity-90">Delivering your world, one shipment at a time since 2008</p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Founded in 2008, LogisticsHub began as a small freight forwarding company with a big vision: to
                revolutionize global logistics. What started with a single office and a handful of dedicated
                professionals has grown into a trusted partner for businesses worldwide.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Our journey has been defined by continuous innovation, unwavering commitment to customer service, and a
                deep understanding of the complexities of global supply chains. We've invested heavily in technology,
                infrastructure, and talent to ensure that every shipment is handled with the utmost care and efficiency.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, LogisticsHub operates in 150+ countries, handles over 50,000 shipments monthly, and partners with
                industry leaders across all sectors. We remain committed to our founding principles: reliability,
                transparency, and excellence.
              </p>
            </div>
            <img src="/placeholder.svg?key=about1" alt="Company history" className="rounded-lg shadow-lg" />
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Globe className="text-accent" size={28} />
                Our Mission
              </h3>
              <p className="text-muted-foreground">
                To provide world-class logistics solutions that connect businesses globally, streamline supply chains,
                and deliver value at every touchpoint. We're committed to being our clients' most trusted logistics
                partner.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <TrendingUp className="text-accent" size={28} />
                Our Vision
              </h3>
              <p className="text-muted-foreground">
                To be the world's most innovative and customer-centric logistics company, setting industry standards for
                efficiency, sustainability, and service excellence while enabling businesses to thrive in a connected
                global economy.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-accent" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Customer First</h3>
                <p className="text-muted-foreground">
                  Your success is our success. We go above and beyond to exceed expectations.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-accent" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Integrity</h3>
                <p className="text-muted-foreground">
                  We conduct business with honesty, transparency, and unwavering ethical principles.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-accent" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                <p className="text-muted-foreground">
                  We strive for the highest standards in everything we do, every single day.
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="bg-primary text-primary-foreground rounded-lg p-12">
            <h2 className="text-3xl font-bold mb-12 text-center">By The Numbers</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <p className="text-4xl font-bold mb-2">17+</p>
                <p className="opacity-90">Years in Business</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold mb-2">150+</p>
                <p className="opacity-90">Countries Served</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold mb-2">50K+</p>
                <p className="opacity-90">Shipments Monthly</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold mb-2">99.2%</p>
                <p className="opacity-90">On-Time Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-muted/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Team</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            We have 500+ logistics professionals across our global network, each dedicated to delivering excellence.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: "Sarah Chen", role: "CEO & Founder", image: "/placeholder.svg?key=team1" },
              { name: "Marcus Rodriguez", role: "COO", image: "/placeholder.svg?key=team2" },
              { name: "Elena Petrova", role: "VP Operations", image: "/placeholder.svg?key=team3" },
              { name: "James Thompson", role: "VP Technology", image: "/placeholder.svg?key=team4" },
            ].map((member, idx) => (
              <div
                key={idx}
                className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img src={member.image || "/placeholder.svg"} alt={member.name} className="w-full h-64 object-cover" />
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-muted-foreground text-sm">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Awards & Recognition</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { award: "Industry Excellence Award", year: "2024", org: "Global Logistics Council" },
              { award: "Best Customer Service", year: "2023", org: "International Freight Association" },
              { award: "Innovation in Supply Chain", year: "2023", org: "Tech + Logistics Forum" },
              { award: "Sustainable Logistics Leader", year: "2022", org: "Green Supply Alliance" },
              { award: "Best Employer", year: "2022", org: "Logistics Industry Awards" },
              { award: "ISO 9001 Certified", year: "Ongoing", org: "Quality Management" },
            ].map((item, idx) => (
              <div key={idx} className="bg-card border border-border rounded-lg p-6 text-center">
                <Award className="mx-auto text-accent mb-4" size={32} />
                <h3 className="font-semibold text-lg mb-2">{item.award}</h3>
                <p className="text-muted-foreground text-sm mb-2">{item.org}</p>
                <p className="font-semibold text-accent">{item.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-accent/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of businesses that trust LogisticsHub for their shipping needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <Link href="/quote">Get a Quote</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
