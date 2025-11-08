import { type NextRequest, NextResponse } from "next/server"

interface SignupRequest {
  email: string
  password: string
  confirmPassword: string
  companyName: string
  fullName: string
}

interface SignupResponse {
  success: boolean
  message: string
  user?: {
    id: string
    email: string
    name: string
  }
}

export async function POST(request: NextRequest): Promise<NextResponse<SignupResponse>> {
  try {
    const body: SignupRequest = await request.json()
    const { email, password, confirmPassword, companyName, fullName } = body

    if (!email || !password || !confirmPassword || !fullName) {
      return NextResponse.json({ success: false, message: "All fields are required" }, { status: 400 })
    }

    if (password !== confirmPassword) {
      return NextResponse.json({ success: false, message: "Passwords do not match" }, { status: 400 })
    }

    if (password.length < 6) {
      return NextResponse.json({ success: false, message: "Password must be at least 6 characters" }, { status: 400 })
    }

    const existingUsers = ["demo@cargocore.com", "admin@cargocore.com"]
    if (existingUsers.includes(email)) {
      return NextResponse.json({ success: false, message: "Email already registered" }, { status: 409 })
    }

    const newUser = {
      id: email.split("@")[0],
      email,
      name: fullName,
      company: companyName,
      createdAt: new Date().toISOString(),
    }

    return NextResponse.json(
      {
        success: true,
        message: "Account created successfully. Please log in.",
        user: {
          id: newUser.id,
          email: newUser.email,
          name: newUser.name,
        },
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("[CargoCore API] Signup error:", error)
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 })
  }
}
