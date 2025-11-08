import { type NextRequest, NextResponse } from "next/server"

interface LogoutResponse {
  success: boolean
  message: string
}

export async function POST(request: NextRequest): Promise<NextResponse<LogoutResponse>> {
  try {
    return NextResponse.json(
      {
        success: true,
        message: "Logged out successfully",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("[CargoCore API] Logout error:", error)
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 })
  }
}
