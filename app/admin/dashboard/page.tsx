"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { LogOut, Package, Users, TrendingUp, BarChart3, Plus, X } from "lucide-react"

export default function AdminDashboard() {
  const [isLoading, setIsLoading] = useState(true)
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [formData, setFormData] = useState({
    originCity: "",
    originCountry: "",
    destinationCity: "",
    destinationCountry: "",
    weight: "",
    value: "",
    serviceType: "Air Freight",
    estimatedDelivery: "",
    description: "",
  })
  const [submitLoading, setSubmitLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [createdTrackingNumber, setCreatedTrackingNumber] = useState("")
  const router = useRouter()

  useEffect(() => {
    // Simulate checking admin session
    setTimeout(() => setIsLoading(false), 1000)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleCreateShipment = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitLoading(true)
    setMessage("")
    setCreatedTrackingNumber("")

    try {
      const response = await fetch("/api/shipments/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        setMessage(`Error: ${data.error}`)
        return
      }

      setMessage(`Success! Tracking Number: ${data.trackingNumber}`)
      setCreatedTrackingNumber(data.trackingNumber)
      setFormData({
        originCity: "",
        originCountry: "",
        destinationCity: "",
        destinationCountry: "",
        weight: "",
        value: "",
        serviceType: "Air Freight",
        estimatedDelivery: "",
        description: "",
      })

      // Hide form after 3 seconds
      setTimeout(() => {
        setShowCreateForm(false)
      }, 3000)
    } catch (error) {
      setMessage("Failed to create shipment")
    } finally {
      setSubmitLoading(false)
    }
  }

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" })
    router.push("/admin/login")
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="/logo.svg" alt="CargoCore" className="w-8 h-8" />
            <h1 className="text-2xl font-bold text-accent">CargoCore Admin</h1>
          </div>
          <Button onClick={handleLogout} variant="outline" className="flex items-center gap-2 bg-transparent">
            <LogOut size={20} />
            Logout
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Dashboard</h2>
          <Button
            onClick={() => setShowCreateForm(true)}
            className="flex items-center gap-2 bg-accent hover:bg-accent/90"
          >
            <Plus size={20} />
            Create Shipment
          </Button>
        </div>

        {showCreateForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-card rounded-lg border border-border max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-card border-b border-border flex justify-between items-center p-6">
                <h3 className="text-2xl font-bold">Create New Shipment</h3>
                <button
                  onClick={() => setShowCreateForm(false)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <X size={24} />
                </button>
              </div>

              <form onSubmit={handleCreateShipment} className="p-6 space-y-6">
                {message && (
                  <div
                    className={`p-4 rounded-lg ${
                      message.includes("Error")
                        ? "bg-red-500/20 text-red-600 border border-red-500/30"
                        : "bg-green-500/20 text-green-600 border border-green-500/30"
                    }`}
                  >
                    {message}
                    {createdTrackingNumber && (
                      <p className="font-semibold text-lg mt-2">Tracking: {createdTrackingNumber}</p>
                    )}
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Origin City</label>
                    <input
                      type="text"
                      name="originCity"
                      value={formData.originCity}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-accent"
                      placeholder="e.g., Shanghai"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Origin Country</label>
                    <input
                      type="text"
                      name="originCountry"
                      value={formData.originCountry}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-accent"
                      placeholder="e.g., China"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Destination City</label>
                    <input
                      type="text"
                      name="destinationCity"
                      value={formData.destinationCity}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-accent"
                      placeholder="e.g., New York"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Destination Country</label>
                    <input
                      type="text"
                      name="destinationCountry"
                      value={formData.destinationCountry}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-accent"
                      placeholder="e.g., USA"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Weight</label>
                    <input
                      type="text"
                      name="weight"
                      value={formData.weight}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-accent"
                      placeholder="e.g., 250 kg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Value</label>
                    <input
                      type="text"
                      name="value"
                      value={formData.value}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-accent"
                      placeholder="e.g., $5,000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Service Type</label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-accent"
                    >
                      <option>Air Freight</option>
                      <option>Ocean Freight</option>
                      <option>Road Transport</option>
                      <option>Warehousing</option>
                      <option>Last-Mile Delivery</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Estimated Delivery Date</label>
                  <input
                    type="date"
                    name="estimatedDelivery"
                    value={formData.estimatedDelivery}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-accent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Description (Optional)</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-accent"
                    placeholder="Add any additional details about the shipment"
                    rows={3}
                  />
                </div>

                <div className="flex gap-4 pt-4">
                  <Button
                    type="submit"
                    disabled={submitLoading}
                    className="flex-1 bg-accent hover:bg-accent/90 disabled:opacity-50"
                  >
                    {submitLoading ? "Creating..." : "Create Shipment"}
                  </Button>
                  <Button type="button" onClick={() => setShowCreateForm(false)} variant="outline" className="flex-1">
                    Cancel
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm mb-1">Active Shipments</p>
                <p className="text-3xl font-bold">1,247</p>
                <p className="text-xs text-green-600 mt-2">↑ 12% from last week</p>
              </div>
              <Package className="text-accent w-12 h-12 opacity-50" />
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm mb-1">Total Revenue</p>
                <p className="text-3xl font-bold">$543K</p>
                <p className="text-xs text-green-600 mt-2">↑ 8% from last month</p>
              </div>
              <TrendingUp className="text-accent w-12 h-12 opacity-50" />
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm mb-1">Registered Users</p>
                <p className="text-3xl font-bold">892</p>
                <p className="text-xs text-green-600 mt-2">↑ 23 new this week</p>
              </div>
              <Users className="text-accent w-12 h-12 opacity-50" />
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm mb-1">Delivery Success Rate</p>
                <p className="text-3xl font-bold">98.4%</p>
                <p className="text-xs text-green-600 mt-2">↑ 0.2% from last month</p>
              </div>
              <BarChart3 className="text-accent w-12 h-12 opacity-50" />
            </div>
          </div>
        </div>

        {/* Recent Shipments */}
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-xl font-bold mb-6">Recent Shipments</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold">Tracking ID</th>
                  <th className="text-left py-3 px-4 font-semibold">Origin</th>
                  <th className="text-left py-3 px-4 font-semibold">Destination</th>
                  <th className="text-left py-3 px-4 font-semibold">Status</th>
                  <th className="text-left py-3 px-4 font-semibold">Value</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { id: "CC-2025-12345", origin: "Shanghai", dest: "New York", status: "In Transit", value: "$5,000" },
                  { id: "CC-2025-54321", origin: "Rotterdam", dest: "Hamburg", status: "Delivered", value: "$25,000" },
                  { id: "CC-2025-67890", origin: "Dubai", dest: "London", status: "In Transit", value: "$12,500" },
                  {
                    id: "CC-2025-11111",
                    origin: "Singapore",
                    dest: "Los Angeles",
                    status: "Processing",
                    value: "$8,750",
                  },
                ].map((shipment) => (
                  <tr key={shipment.id} className="border-b border-border hover:bg-muted/50 transition">
                    <td className="py-3 px-4 font-semibold text-accent">{shipment.id}</td>
                    <td className="py-3 px-4">{shipment.origin}</td>
                    <td className="py-3 px-4">{shipment.dest}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          shipment.status === "Delivered"
                            ? "bg-green-500/20 text-green-600"
                            : shipment.status === "In Transit"
                              ? "bg-red-500/20 text-red-600"
                              : "bg-yellow-500/20 text-yellow-600"
                        }`}
                      >
                        {shipment.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">{shipment.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}
