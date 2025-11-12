"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Search, Truck, MapPin, Package, CheckCircle, AlertCircle } from "lucide-react"

export default function TrackPage() {
  const [trackingNumber, setTrackingNumber] = useState("")
  const [trackingResult, setTrackingResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault()
    if (!trackingNumber) {
      setError("Please enter a tracking number.")
      setTrackingResult(null)
      return
    }

    setLoading(true)
    setError(null)
    setTrackingResult(null)

    // Simulate API call for tracking
    setTimeout(() => {
      setLoading(false)
      if (trackingNumber.startsWith("CC-")) {
        setTrackingResult({
          number: trackingNumber,
          status: "In Transit",
          currentLocation: "Shanghai International Hub",
          expectedDelivery: "2025-11-20",
          history: [
            { date: "2025-11-10", time: "14:30", location: "New York, NY", status: "Shipment created" },
            { date: "2025-11-11", time: "09:00", location: "JFK Airport, NY", status: "Departed from origin" },
            { date: "2025-11-12", time: "03:45", location: "Shanghai International Hub", status: "Arrived at destination country" },
            { date: "2025-11-12", time: "11:00", location: "Shanghai International Hub", status: "In Transit" },
          ],
        })
      } else {
        setError("Tracking number not found. Please check the number and try again.")
      }
    }, 1500)
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Shipment created":
        return <Package className="text-primary" size={20} />
      case "Departed from origin":
        return <Truck className="text-primary" size={20} />
      case "Arrived at destination country":
        return <MapPin className="text-primary" size={20} />
      case "In Transit":
        return <Truck className="text-primary" size={20} />
      case "Delivered":
        return <CheckCircle className="text-green-500" size={20} />
      default:
        return <AlertCircle className="text-muted-foreground" size={20} />
    }
  }

  return (
    <main className="min-h-screen bg-background pt-16">
      <Navbar />

      {/* Header */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Track Your Shipment</h1>
          <p className="text-xl opacity-90">
            Enter your tracking number below to get real-time updates on your cargo's location and status.
          </p>
        </div>
      </section>

      {/* Tracking Form */}
      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleTrack} className="flex gap-4 mb-12">
            <Input
              type="text"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              placeholder="Enter your tracking number (e.g., CC-2025-XXXXX)"
              className="flex-1 h-12 text-lg"
            />
            <Button type="submit" size="lg" disabled={loading} className="bg-accent hover:bg-accent/90">
              {loading ? "Tracking..." : <Search className="mr-2 h-5 w-5" />}
              {loading ? "Tracking..." : "Track"}
            </Button>
          </form>

          {error && (
            <div className="bg-red-500/10 border border-red-500/30 text-red-700 p-4 rounded-lg flex items-center gap-3 mb-8">
              <AlertCircle className="h-5 w-5" />
              <p className="font-medium">{error}</p>
            </div>
          )}

          {trackingResult && (
            <div className="bg-card border border-border rounded-lg p-8 shadow-lg">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                Tracking Details
                <span className="text-sm font-normal text-muted-foreground">#{trackingResult.number}</span>
              </h2>

              <div className="grid md:grid-cols-3 gap-6 mb-8 text-center">
                <div className="p-4 bg-muted/40 rounded-lg">
                  <p className="text-sm text-muted-foreground">Status</p>
                  <p className="text-xl font-semibold text-primary">{trackingResult.status}</p>
                </div>
                <div className="p-4 bg-muted/40 rounded-lg">
                  <p className="text-sm text-muted-foreground">Current Location</p>
                  <p className="text-xl font-semibold">{trackingResult.currentLocation}</p>
                </div>
                <div className="p-4 bg-muted/40 rounded-lg">
                  <p className="text-sm text-muted-foreground">Expected Delivery</p>
                  <p className="text-xl font-semibold">{trackingResult.expectedDelivery}</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4">Shipment History</h3>
              <div className="space-y-4">
                {trackingResult.history.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center bg-muted/40">
                        {getStatusIcon(item.status)}
                      </div>
                      {index < trackingResult.history.length - 1 && (
                        <div className="w-px h-10 bg-border" />
                      )}
                    </div>
                    <div>
                      <p className="font-semibold">{item.status}</p>
                      <p className="text-sm text-muted-foreground">
                        {item.date} at {item.time} - {item.location}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {!trackingResult && !loading && !error && (
            <div className="text-center text-muted-foreground py-12">
              <Truck className="mx-auto h-12 w-12 mb-4" />
              <p className="text-lg">Enter a tracking number to see your shipment details.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA for Shipment Creation */}
      <section className="py-16 bg-muted/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need to Create a New Shipment?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            If you are a partner or internal user, use our dedicated form to create a new shipment and generate a tracking number.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
            <Link href="/shipment-form">Go to Shipment Creation Form</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
