"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Package, MapPin, Truck, AlertCircle } from "lucide-react"

export default function TrackPage() {
  const [trackingNumber, setTrackingNumber] = useState("")
  const [shipment, setShipment] = useState<any>(null)
  const [searched, setSearched] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault()
    setSearched(true)
    setIsLoading(true)
    setError("")

    if (trackingNumber.trim()) {
      try {
        const response = await fetch("/api/tracking/search", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ trackingNumber }),
        })

        if (response.ok) {
          const data = await response.json()
          setShipment(data)
        } else {
          setError("Shipment not found. Please check your tracking number.")
          setShipment(null)
        }
      } catch (err) {
        setError("Error searching for shipment. Please try again.")
        setShipment(null)
      }
    } else {
      setShipment(null)
    }
    setIsLoading(false)
  }

  return (
    <main className="min-h-screen bg-background pt-16">
      <Navbar />

      {/* Header */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Track Your Shipment</h1>
          <p className="text-xl opacity-90">Enter your tracking number to get real-time updates on your shipment</p>
        </div>
      </section>

      {/* Tracking Form */}
      <section className="py-16 bg-background">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleTrack} className="bg-card border border-border rounded-lg p-8 shadow-lg">
            <label className="block text-sm font-semibold mb-3">Tracking Number</label>
            <div className="flex gap-3 mb-2">
              <Input
                type="text"
                placeholder="Enter your tracking number (e.g., LH-2025-12345)"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                className="flex-1"
                disabled={isLoading}
              />
              <Button
                type="submit"
                className="bg-accent hover:bg-accent/90 px-8 whitespace-nowrap"
                disabled={isLoading}
              >
                {isLoading ? "Searching..." : "Track"}
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              You can find your tracking number in your shipment confirmation email
            </p>
          </form>

          {/* Tracking Results */}
          {searched && (
            <div className="mt-12">
              {error && (
                <div className="bg-red-500/20 border border-red-500 rounded-lg p-6 mb-6">
                  <p className="text-red-600 font-semibold flex items-center gap-2">
                    <AlertCircle size={20} />
                    {error}
                  </p>
                </div>
              )}

              {shipment ? (
                <div className="space-y-8">
                  {/* Quick Info */}
                  <div className="bg-card border border-border rounded-lg p-6">
                    <h2 className="text-2xl font-bold mb-6">Shipment Details</h2>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Tracking Number</p>
                        <p className="font-semibold text-lg">{shipment.trackingNumber}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Status</p>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <p className="font-semibold text-lg">{shipment.status}</p>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Weight</p>
                        <p className="font-semibold">{shipment.weight}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Declared Value</p>
                        <p className="font-semibold">{shipment.value}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Carrier</p>
                      <p className="font-semibold">{shipment.carrier}</p>
                    </div>
                  </div>

                  {/* Route Info */}
                  <div className="bg-card border border-border rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-6">Route Information</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                          <MapPin className="text-green-600" size={28} />
                        </div>
                        <p className="text-sm text-muted-foreground mb-1">Origin</p>
                        <p className="font-semibold">{shipment.origin.city}</p>
                        <p className="text-sm text-muted-foreground">{shipment.origin.country}</p>
                        <p className="text-xs text-muted-foreground mt-2">{shipment.origin.date}</p>
                      </div>
                      <div className="flex items-center justify-center">
                        <div className="text-center w-full">
                          <Truck className="mx-auto mb-3 text-accent" size={32} />
                          <p className="text-sm font-semibold text-accent">In Transit</p>
                          <p className="text-xs text-muted-foreground mt-2">~6 days remaining</p>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Package className="text-blue-600" size={28} />
                        </div>
                        <p className="text-sm text-muted-foreground mb-1">Destination</p>
                        <p className="font-semibold">{shipment.destination.city}</p>
                        <p className="text-sm text-muted-foreground">{shipment.destination.country}</p>
                        <p className="text-xs text-muted-foreground mt-2">Est. {shipment.destination.date}</p>
                      </div>
                    </div>
                  </div>

                  {/* Timeline */}
                  <div className="bg-card border border-border rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-6">Tracking Timeline</h3>
                    <div className="space-y-4">
                      {shipment.events.map((event: any, idx: number) => (
                        <div key={idx} className="flex gap-4">
                          <div className="flex flex-col items-center">
                            <div
                              className={`w-4 h-4 rounded-full border-2 ${
                                idx === 0 || idx === 1 || idx === 2
                                  ? "bg-green-500 border-green-500"
                                  : "border-muted-foreground"
                              }`}
                            ></div>
                            {idx !== shipment.events.length - 1 && (
                              <div
                                className={`w-0.5 h-12 ${
                                  idx === 0 || idx === 1 || idx === 2 ? "bg-green-500" : "bg-muted-foreground/30"
                                }`}
                              ></div>
                            )}
                          </div>
                          <div className="pb-4">
                            <p className="font-semibold">{event.status}</p>
                            <p className="text-sm text-muted-foreground">{event.location}</p>
                            <p className="text-xs text-muted-foreground">
                              {event.date} at {event.time}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="flex-1 bg-primary hover:bg-primary/90" asChild>
                      <Link href="/contact">Contact Support</Link>
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 bg-transparent"
                      onClick={() => {
                        setTrackingNumber("")
                        setShipment(null)
                        setSearched(false)
                      }}
                    >
                      Track Another
                    </Button>
                  </div>
                </div>
              ) : (
                !isLoading &&
                searched && (
                  <div className="bg-card border border-border rounded-lg p-12 text-center">
                    <AlertCircle className="mx-auto text-muted-foreground mb-4" size={48} />
                    <p className="text-lg font-semibold mb-2">No Shipment Found</p>
                    <p className="text-muted-foreground mb-4">
                      Please check your tracking number and try again. If you need help, contact our support team.
                    </p>
                    <Button variant="outline" asChild>
                      <Link href="/contact">Get Help</Link>
                    </Button>
                  </div>
                )
              )}
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-muted/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">Where can I find my tracking number?</h3>
              <p className="text-muted-foreground">
                Your tracking number is included in your shipment confirmation email. It usually starts with "CC-"
                followed by the year and a numeric code.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">How often is tracking information updated?</h3>
              <p className="text-muted-foreground">
                Tracking information is updated in real-time. For air freight, updates occur every 4-6 hours. Ocean
                shipments are updated daily at major ports.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">What do the different statuses mean?</h3>
              <p className="text-muted-foreground">
                Shipped = Package picked up. In Transit = On the way to destination. Customs Cleared = Passed through
                customs. Out for Delivery = With local courier for final delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
