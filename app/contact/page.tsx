"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact form:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
    }, 5000)
  }

  return (
    <main className="min-h-screen bg-background pt-16">
      <Navbar />

      {/* Header */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl opacity-90">Have questions? Our customer support team is here to help 24/7</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Phone</h3>
                    <p className="text-muted-foreground mb-2">For urgent inquiries:</p>
                    <p className="font-semibold">+1 (800) LOGISTICS</p>
                    <p className="text-sm text-muted-foreground mt-1">Available 24/7</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Email</h3>
                    <p className="text-muted-foreground mb-2">For general inquiries:</p>
                    <p className="font-semibold">info@logisticshub.com</p>
                    <p className="text-muted-foreground mb-2">For support:</p>
                    <p className="font-semibold">support@logisticshub.com</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">WhatsApp</h3>
                    <p className="text-muted-foreground mb-2">Quick messaging:</p>
                    <Link href="https://wa.me/18005644897" className="font-semibold text-accent hover:text-accent/80">
                      Message us on WhatsApp
                    </Link>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Headquarters</h3>
                    <p className="text-muted-foreground">
                      LogisticsHub Global
                      <br />
                      123 Logistics Avenue
                      <br />
                      New York, NY 10001
                      <br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Business Hours</h3>
                    <p className="text-muted-foreground mb-2">
                      Monday - Friday: 6:00 AM - 8:00 PM EST
                      <br />
                      Saturday: 8:00 AM - 6:00 PM EST
                      <br />
                      Sunday: Emergency support only
                    </p>
                    <p className="text-sm text-accent font-semibold">24/7 Live chat available</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 rounded-lg overflow-hidden shadow-lg border border-border">
                <img src="/office-location-map-for-cargocore-logistics-headqu.jpg" alt="Office location map" className="w-full h-64 object-cover" />
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>

              {submitted ? (
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-8 text-center h-96 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-green-900">Message Sent!</h3>
                  <p className="text-green-700">
                    Thank you for reaching out. Our team will respond to your message shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Full Name</label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Email Address</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Phone Number</label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Subject</label>
                    <Input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help?"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your inquiry..."
                      className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent min-h-32"
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90">
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="bg-card border border-border rounded-lg p-6 group">
              <summary className="font-semibold cursor-pointer flex justify-between items-center">
                What are your shipping rates?
                <span className="ml-2 text-muted-foreground group-open:hidden">+</span>
                <span className="ml-2 text-muted-foreground hidden group-open:inline">−</span>
              </summary>
              <p className="text-muted-foreground mt-4">
                Our rates vary based on service type, origin, destination, weight, and urgency. Please request a quote
                for accurate pricing.
              </p>
            </details>

            <details className="bg-card border border-border rounded-lg p-6 group">
              <summary className="font-semibold cursor-pointer flex justify-between items-center">
                Do you offer insurance for shipments?
                <span className="ml-2 text-muted-foreground group-open:hidden">+</span>
                <span className="ml-2 text-muted-foreground hidden group-open:inline">−</span>
              </summary>
              <p className="text-muted-foreground mt-4">
                Yes, all shipments include basic coverage. Additional insurance options are available for high-value
                cargo.
              </p>
            </details>

            <details className="bg-card border border-border rounded-lg p-6 group">
              <summary className="font-semibold cursor-pointer flex justify-between items-center">
                How do I track my shipment?
                <span className="ml-2 text-muted-foreground group-open:hidden">+</span>
                <span className="ml-2 text-muted-foreground hidden group-open:inline">−</span>
              </summary>
              <p className="text-muted-foreground mt-4">
                Use your tracking number on our Track page for real-time updates. You can also contact our support team
                anytime.
              </p>
            </details>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
