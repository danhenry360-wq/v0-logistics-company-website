import { type NextRequest, NextResponse } from "next/server"

// Mock admin credentials - replace with real database and proper security
const ADMIN_CREDENTIALS = {
  email: "admin@cargocore.com",
  password: "Admin@123!", // Use hashed passwords in production
}

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 })
    }

    // Validate credentials
    if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
      // In production, use JWT tokens or secure sessions
      const response = NextResponse.json(
        {
          success: true,
          user: {
            email: email,
            role: "admin",
            name: "CargoCore Admin",
          },
        },
        { status: 200 },
      )

      // Set secure HTTP-only cookie for session
      response.cookies.set("admin_token", "mock_jwt_token_" + Date.now(), {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 24 * 60 * 60, // 24 hours
      })

      return response
    }

    return NextResponse.json({ error: "Invalid email or password" }, { status: 401 })
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
