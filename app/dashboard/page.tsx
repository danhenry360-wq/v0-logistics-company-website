"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { LogOut, Package, Ship, TrendingUp, Clock, AlertCircle } from "lucide-react"

interface User {
  id: string
  email: string
  name: string
}

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    // Check for authentication
    const token = localStorage.getItem("authToken")
    const userData = localStorage.getItem("user")

    if (!token || !userData) {
      window.location.href = "/login"
      return
    }

    try {
      const parsedUser = JSON.parse(userData)
      setUser(parsedUser)
    } catch (err) {
      setError("Failed to load user data")
      console.error("[CargoCore] Error:", err)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("authToken")
    localStorage.removeItem("user")
    window.location.href = "/login"
  }

  if (isLoading) {
    return (
      <main className="min-h-screen bg-background pt-16">
        <Navbar />
        <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
          <p className="text-muted-foreground">Loading...</p>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background pt-16">
      <Navbar />

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold">Welcome, {user?.name}!</h1>
              <p className="text-muted-foreground mt-2">{user?.email}</p>
            </div>
            <Button variant="outline" onClick={handleLogout} className="gap-2 bg-transparent">
              <LogOut size={18} />
              Logout
            </Button>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex gap-3">
              <AlertCircle className="text-red-600 flex-shrink-0" size={20} />
              <p className="text-red-600">{error}</p>
            </div>
          )}

          {/* Quick Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                <Package className="text-accent" size={24} />
              </div>
              <p className="text-muted-foreground text-sm">Active Shipments</p>
              <p className="text-3xl font-bold mt-2">12</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="text-accent" size={24} />
              </div>
              <p className="text-muted-foreground text-sm">This Month</p>
              <p className="text-3xl font-bold mt-2">$8,430</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                <Clock className="text-accent" size={24} />
              </div>
              <p className="text-muted-foreground text-sm">Avg Delivery</p>
              <p className="text-3xl font-bold mt-2">3.2 days</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                <Ship className="text-accent" size={24} />
              </div>
              <p className="text-muted-foreground text-sm">Total Shipments</p>
              <p className="text-3xl font-bold mt-2">487</p>
            </div>
          </div>

          {/* Recent Shipments */}
          <div className="bg-card border border-border rounded-lg p-6 mb-12">
            <h2 className="text-2xl font-bold mb-6">Recent Shipments</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold">Tracking ID</th>
                    <th className="text-left py-3 px-4 font-semibold">Destination</th>
                    <th className="text-left py-3 px-4 font-semibold">Status</th>
                    <th className="text-left py-3 px-4 font-semibold">Delivery Date</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { id: "CC-2024-001", dest: "New York, NY", status: "In Transit", date: "Dec 15" },
                    { id: "CC-2024-002", dest: "Los Angeles, CA", status: "Out for Delivery", date: "Dec 14" },
                    { id: "CC-2024-003", dest: "Chicago, IL", status: "Delivered", date: "Dec 13" },
                  ].map((shipment) => (
                    <tr key={shipment.id} className="border-b border-border hover:bg-muted/40 transition">
                      <td className="py-3 px-4 font-semibold text-accent">{shipment.id}</td>
                      <td className="py-3 px-4">{shipment.dest}</td>
                      <td className="py-3 px-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            shipment.status === "Delivered"
                              ? "bg-green-500/20 text-green-600"
                              : shipment.status === "Out for Delivery"
                                ? "bg-blue-500/20 text-blue-600"
                                : "bg-orange-500/20 text-orange-600"
                          }`}
                        >
                          {shipment.status}
                        </span>
                      </td>
                      <td className="py-3 px-4">{shipment.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-primary to-primary/80 rounded-lg p-8 text-primary-foreground">
              <h3 className="text-2xl font-bold mb-4">Request New Shipment</h3>
              <p className="opacity-90 mb-6">Start a new shipment with our quick quote tool</p>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link href="/quote">Create Quote</Link>
              </Button>
            </div>

            <div className="bg-gradient-to-br from-accent to-accent/80 rounded-lg p-8 text-accent-foreground">
              <h3 className="text-2xl font-bold mb-4">Track Shipment</h3>
              <p className="opacity-90 mb-6">Monitor your shipments in real-time</p>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-accent-foreground text-accent-foreground hover:bg-accent-foreground/10"
                asChild
              >
                <Link href="/track">Track Now</Link>
              </Button>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Support</h3>
              <p className="text-muted-foreground mb-6">Get help from our support team</p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 w-full" asChild>
                <Link href="/contact">Contact Support</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
