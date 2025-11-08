import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { trackingNumber } = await request.json()

    if (!trackingNumber) {
      return NextResponse.json({ error: "Tracking number is required" }, { status: 400 })
    }

    // Mock database - replace with real database query
    const mockShipments: Record<string, any> = {
      "CC-2025-12345": {
        trackingNumber: "CC-2025-12345",
        status: "In Transit",
        origin: { city: "Shanghai", country: "China", date: "2025-01-15" },
        destination: { city: "New York", country: "USA", date: "2025-01-28" },
        current: { city: "Los Angeles", country: "USA", date: "2025-01-22" },
        weight: "250 kg",
        value: "$5,000",
        carrier: "CargoCore Air Freight",
        events: [
          { status: "Shipped", location: "Shanghai", date: "2025-01-15", time: "08:30 AM" },
          { status: "In Transit", location: "Hong Kong Hub", date: "2025-01-17", time: "14:15 PM" },
          { status: "Cleared Customs", location: "Los Angeles", date: "2025-01-22", time: "10:45 AM" },
          { status: "Out for Delivery", location: "New York Distribution", date: "2025-01-28", time: "Today" },
        ],
      },
      "CC-2025-54321": {
        trackingNumber: "CC-2025-54321",
        status: "Delivered",
        origin: { city: "Rotterdam", country: "Netherlands", date: "2025-01-10" },
        destination: { city: "Hamburg", country: "Germany", date: "2025-01-20" },
        current: { city: "Hamburg", country: "Germany", date: "2025-01-20" },
        weight: "5000 kg",
        value: "$25,000",
        carrier: "CargoCore Ocean Freight",
        events: [
          { status: "Shipped", location: "Rotterdam Port", date: "2025-01-10", time: "10:00 AM" },
          { status: "In Transit", location: "North Sea", date: "2025-01-15", time: "12:00 PM" },
          { status: "Port Arrival", location: "Hamburg Port", date: "2025-01-20", time: "08:00 AM" },
          { status: "Delivered", location: "Hamburg", date: "2025-01-20", time: "16:30 PM" },
        ],
      },
    }

    const shipment = mockShipments[trackingNumber]

    if (!shipment) {
      return NextResponse.json({ error: "Shipment not found" }, { status: 404 })
    }

    return NextResponse.json(shipment, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
