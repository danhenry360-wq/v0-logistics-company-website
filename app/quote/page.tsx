"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function QuotePage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    serviceType: "",
    origin: "",
    destination: "",
    weight: "",
    dimensions: "",
    cargoType: "",
    urgency: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Quote request:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        serviceType: "",
        origin: "",
        destination: "",
        weight: "",
        dimensions: "",
        cargoType: "",
        urgency: "",
        message: "",
      })
    }, 5000)
  }

  return (
    <main className="min-h-screen bg-background pt-16">
      <Navbar />

      {/* Header */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Request a Quote</h1>
          <p className="text-xl opacity-90">
            Get a competitive shipping quote in minutes. Our team will respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 bg-background">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-12 text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-2 text-green-900">Quote Request Received!</h2>
              <p className="text-green-700 mb-4">
                Thank you for submitting your quote request. Our logistics team will review your shipment details and
                send you a competitive quote within 24 hours.
              </p>
              <p className="text-green-700 text-sm">
                You'll receive the quote at <span className="font-semibold">{formData.email}</span>
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-8 shadow-lg space-y-6">
              <h2 className="text-2xl font-bold mb-8">Shipment Information</h2>

              {/* Personal Information */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-muted-foreground">Your Information</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">First Name</label>
                    <Input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Last Name</label>
                    <Input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Email</label>
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
                    <label className="block text-sm font-semibold mb-2">Phone</label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Shipment Details */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-muted-foreground">Shipment Details</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Service Type</label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => handleSelectChange("serviceType", e.target.value)}
                      className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="air">Air Freight</option>
                      <option value="ocean">Ocean Freight</option>
                      <option value="road">Road Transport</option>
                      <option value="warehouse">Warehousing</option>
                      <option value="lastmile">Last-Mile Delivery</option>
                    </select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Origin City</label>
                      <Input
                        type="text"
                        name="origin"
                        value={formData.origin}
                        onChange={handleChange}
                        placeholder="e.g., Shanghai"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Destination City</label>
                      <Input
                        type="text"
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                        placeholder="e.g., New York"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Weight (kg)</label>
                      <Input
                        type="number"
                        name="weight"
                        value={formData.weight}
                        onChange={handleChange}
                        placeholder="e.g., 500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Dimensions (L×W×H cm)</label>
                      <Input
                        type="text"
                        name="dimensions"
                        value={formData.dimensions}
                        onChange={handleChange}
                        placeholder="e.g., 100×80×60"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Cargo Type</label>
                      <select
                        value={formData.cargoType}
                        onChange={(e) => handleSelectChange("cargoType", e.target.value)}
                        className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                        required
                      >
                        <option value="">Select cargo type</option>
                        <option value="general">General Cargo</option>
                        <option value="electronics">Electronics</option>
                        <option value="pharma">Pharmaceuticals</option>
                        <option value="perishable">Perishable Goods</option>
                        <option value="hazmat">Hazardous Materials</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Urgency</label>
                      <select
                        value={formData.urgency}
                        onChange={(e) => handleSelectChange("urgency", e.target.value)}
                        className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                        required
                      >
                        <option value="">Select urgency</option>
                        <option value="standard">Standard (7-10 days)</option>
                        <option value="express">Express (3-5 days)</option>
                        <option value="urgent">Urgent (1-2 days)</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <label className="block text-sm font-semibold mb-2">Additional Information</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Any special handling requirements or additional details..."
                  className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent min-h-24"
                  rows={4}
                />
              </div>

              {/* Submit */}
              <div className="flex gap-4">
                <Button type="submit" size="lg" className="flex-1 bg-accent hover:bg-accent/90">
                  Get Quote
                </Button>
                <Button type="button" variant="outline" size="lg" className="flex-1 bg-transparent" asChild>
                  <Link href="/">Cancel</Link>
                </Button>
              </div>

              <p className="text-sm text-muted-foreground text-center">
                We respect your privacy. Your information is secure and only used to provide quotes.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-muted/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Quote Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 text-primary font-bold text-lg">
                1
              </div>
              <h3 className="font-semibold mb-2">Submit Details</h3>
              <p className="text-muted-foreground text-sm">Fill out your shipment information</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 text-primary font-bold text-lg">
                2
              </div>
              <h3 className="font-semibold mb-2">Review</h3>
              <p className="text-muted-foreground text-sm">Our team reviews your request</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 text-primary font-bold text-lg">
                3
              </div>
              <h3 className="font-semibold mb-2">Receive Quote</h3>
              <p className="text-muted-foreground text-sm">Get competitive pricing within 24h</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 text-primary font-bold text-lg">
                4
              </div>
              <h3 className="font-semibold mb-2">Book & Ship</h3>
              <p className="text-muted-foreground text-sm">Accept quote and ship immediately</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
