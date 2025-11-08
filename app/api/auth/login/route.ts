import { type NextRequest, NextResponse } from "next/server"

interface LoginRequest {
  email: string
  password: string
}

interface LoginResponse {
  success: boolean
  message: string
  user?: {
    id: string
    email: string
    name: string
  }
  token?: string
}

export async function POST(request: NextRequest): Promise<NextResponse<LoginResponse>> {
  try {
    const body: LoginRequest = await request.json()
    const { email, password } = body

    if (!email || !password) {
      return NextResponse.json({ success: false, message: "Email and password are required" }, { status: 400 })
    }

    const mockUsers: Record<string, { password: string; name: string }> = {
      "demo@cargocore.com": { password: "demo123", name: "Demo User" },
      "admin@cargocore.com": { password: "admin123", name: "Admin" },
    }

    const user = mockUsers[email]
    if (!user || user.password !== password) {
      return NextResponse.json({ success: false, message: "Invalid email or password" }, { status: 401 })
    }

    const token = Buffer.from(`${email}:${Date.now()}`).toString("base64")

    return NextResponse.json(
      {
        success: true,
        message: "Login successful",
        user: {
          id: email.split("@")[0],
          email,
          name: user.name,
        },
        token,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("[CargoCore API] Login error:", error)
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 })
  }
}
