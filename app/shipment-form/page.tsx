"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Package, MapPin, Truck, AlertCircle } from "lucide-react"

export default function ShipmentFormPage() {
  const [formData, setFormData] = useState({
    trackingNumber: "",
    senderName: "",
    senderEmail: "",
    receiverName: "",
    receiverEmail: "",
    senderLocation: "",
    packageLocation: "",
    expectedDelivery: "",
    // Add more fields as needed
    shipmentStatus: "Pending",
    shipmentWeight: "",
    shipmentDimensions: "",
    shipmentValue: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, this would send data to a backend API
    console.log("Shipment Form Data:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        trackingNumber: "",
        senderName: "",
        senderEmail: "",
        receiverName: "",
        receiverEmail: "",
        senderLocation: "",
        packageLocation: "",
        expectedDelivery: "",
        shipmentStatus: "Pending",
        shipmentWeight: "",
        shipmentDimensions: "",
        shipmentValue: "",
      })
    }, 5000)
  }

  return (
    <main className="min-h-screen bg-background pt-16">
      <Navbar />

      {/* Header */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Create New Shipment</h1>
          <p className="text-xl opacity-90">
            Fill out the form below to create a new shipment and generate a tracking number.
          </p>
        </div>
      </section>

      {/* Shipment Form */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <div className="bg-accent/10 border border-accent/30 rounded-lg p-12 text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 text-accent">
                <Package size={32} />
              </div>
              <h2 className="text-2xl font-bold mb-2 text-foreground">Shipment Created Successfully!</h2>
              <p className="text-muted-foreground mb-4">
                Your shipment has been created. A tracking number will be generated and sent to the sender's email.
              </p>
              <Button asChild>
                <Link href="/track">Track Shipment</Link>
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-8 shadow-lg space-y-8">
              <h2 className="text-2xl font-bold mb-8">Shipment Details</h2>

              {/* Sender Information */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-muted-foreground">Sender Information</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Sender's Name</label>
                    <Input
                      type="text"
                      name="senderName"
                      value={formData.senderName}
                      onChange={handleChange}
                      placeholder="Sender's Full Name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Sender's Email (for notifications)</label>
                    <Input
                      type="email"
                      name="senderEmail"
                      value={formData.senderEmail}
                      onChange={handleChange}
                      placeholder="sender@example.com"
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold mb-2">Sender's Location (Full Address)</label>
                    <Input
                      type="text"
                      name="senderLocation"
                      value={formData.senderLocation}
                      onChange={handleChange}
                      placeholder="Street Address, City, State/Province, Country"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Receiver Information */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-muted-foreground">Receiver Information</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Receiver's Name</label>
                    <Input
                      type="text"
                      name="receiverName"
                      value={formData.receiverName}
                      onChange={handleChange}
                      placeholder="Receiver's Full Name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Receiver's Email</label>
                    <Input
                      type="email"
                      name="receiverEmail"
                      value={formData.receiverEmail}
                      onChange={handleChange}
                      placeholder="receiver@example.com"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Package Details */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-muted-foreground">Package Details</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Current Package Location</label>
                    <Input
                      type="text"
                      name="packageLocation"
                      value={formData.packageLocation}
                      onChange={handleChange}
                      placeholder="e.g., Warehouse A, Shanghai"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Expected Delivery Date</label>
                    <Input
                      type="date"
                      name="expectedDelivery"
                      value={formData.expectedDelivery}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Tracking Number (if pre-assigned)</label>
                    <Input
                      type="text"
                      name="trackingNumber"
                      value={formData.trackingNumber}
                      onChange={handleChange}
                      placeholder="Optional: CC-2025-XXXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Weight (kg)</label>
                    <Input
                      type="number"
                      name="shipmentWeight"
                      value={formData.shipmentWeight}
                      onChange={handleChange}
                      placeholder="e.g., 500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Dimensions (L×W×H cm)</label>
                    <Input
                      type="text"
                      name="shipmentDimensions"
                      value={formData.shipmentDimensions}
                      onChange={handleChange}
                      placeholder="e.g., 100×80×60"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Declared Value ($)</label>
                    <Input
                      type="number"
                      name="shipmentValue"
                      value={formData.shipmentValue}
                      onChange={handleChange}
                      placeholder="e.g., 1500"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Submit */}
              <div className="flex justify-center">
                <Button type="submit" size="lg" className="w-full max-w-xs bg-primary hover:bg-primary/90">
                  Create Shipment & Get Tracking Number
                </Button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-muted/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Shipment Creation Process</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 text-primary font-bold text-lg">
                1
              </div>
              <h3 className="font-semibold mb-2">Fill Details</h3>
              <p className="text-muted-foreground text-sm">Provide sender, receiver, and package information.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 text-primary font-bold text-lg">
                2
              </div>
              <h3 className="font-semibold mb-2">Generate Tracking</h3>
              <p className="text-muted-foreground text-sm">A unique tracking number is instantly generated.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 text-primary font-bold text-lg">
                3
              </div>
              <h3 className="font-semibold mb-2">Ship & Track</h3>
              <p className="text-muted-foreground text-sm">Begin your shipment and monitor its progress.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
