import { type NextRequest, NextResponse } from "next/server"

// Mock database to store created shipments
const shipments: Record<string, any> = {
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

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const {
      senderName,
      receiverName,
      senderEmail,
      receiverEmail,
      trackingStatus,
      originCity,
      originCountry,
      destinationCity,
      destinationCountry,
      weight,
      value,
      serviceType,
      estimatedDelivery,
      description,
    } = body

    // Validation
    if (
      !senderName ||
      !receiverName ||
      !senderEmail ||
      !receiverEmail ||
      !trackingStatus ||
      !originCity ||
      !originCountry ||
      !destinationCity ||
      !destinationCountry ||
      !weight ||
      !value ||
      !serviceType
    ) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Generate tracking number
    const trackingNumber = `CC-${new Date().getFullYear()}-${Math.random().toString().substring(2, 7)}`

    // Create new shipment
    const newShipment = {
      trackingNumber,
      senderName,
      receiverName,
      senderEmail,
      receiverEmail,
      status: trackingStatus,
      origin: { city: originCity, country: originCountry, date: new Date().toISOString().split("T")[0] },
      destination: { city: destinationCity, country: destinationCountry, date: estimatedDelivery },
      current: { city: originCity, country: originCountry, date: new Date().toISOString().split("T")[0] },
      weight,
      value,
      carrier: `CargoCore ${serviceType}`,
      description,
      events: [
        {
          status: trackingStatus,
          location: `${originCity}, ${originCountry}`,
          date: new Date().toISOString().split("T")[0],
          time: new Date().toLocaleTimeString(),
        },
      ],
    }

    // Store in mock database
    shipments[trackingNumber] = newShipment

    return NextResponse.json(
      {
        success: true,
        trackingNumber,
        message: "Shipment created successfully",
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Error creating shipment:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
