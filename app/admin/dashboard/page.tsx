"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { LogOut, Package, Users, TrendingUp, BarChart3 } from "lucide-react"

export default function AdminDashboard() {
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Simulate checking admin session
    setTimeout(() => setIsLoading(false), 1000)
  }, [])

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
        <h2 className="text-3xl font-bold mb-8">Dashboard</h2>

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
                              ? "bg-blue-500/20 text-blue-600"
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
