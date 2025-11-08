import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Link from "next/link"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CargoCore Logistics | Professional Global Shipping & Freight Solutions",
  description:
    "CargoCore Logistics provides professional global shipping, freight forwarding, and logistics services. Track shipments in real-time, get instant quotes, and access reliable air, ocean, and road freight solutions across 150+ countries.",
  keywords: [
    "logistics",
    "cargo",
    "shipping",
    "freight forwarding",
    "international shipping",
    "air freight",
    "ocean freight",
    "supply chain",
    "cargo tracking",
  ],
  authors: [{ name: "CargoCore Logistics" }],
  generator: "v0.app",
  metadataBase: new URL("https://cargocore-logistics.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cargocore-logistics.com",
    title: "CargoCore Logistics | Global Shipping Solutions",
    description: "Professional freight forwarding and logistics services worldwide",
    siteName: "CargoCore Logistics",
  },
  twitter: {
    card: "summary_large_image",
    title: "CargoCore Logistics",
    description: "Professional global shipping and logistics solutions",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/logo.svg",
        type: "image/svg+xml",
      },
      {
        url: "/icon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "CargoCore Logistics",
              url: "https://cargocore-logistics.com",
              logo: "https://cargocore-logistics.com/logo.svg",
              description: "Professional global shipping and logistics solutions",
              foundingDate: "2008",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Service",
                telephone: "+1-800-LOGISTICS",
              },
              sameAs: ["https://linkedin.com/company/cargocore", "https://twitter.com/cargocore"],
            }),
          }}
        />
      </head>
      <body className={`${_geist.className} font-sans antialiased`}>
        <div className="flex flex-col min-h-screen">
          {/* Navbar wrapper */}
          <nav className="fixed w-full top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <Link href="/" className="flex items-center gap-2 font-bold text-2xl text-accent">
                  <svg className="w-8 h-8" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <rect x="15" y="30" width="25" height="30" fill="currentColor" rx="2" />
                    <rect x="60" y="20" width="25" height="50" fill="currentColor" rx="2" />
                    <circle cx="50" cy="15" r="8" fill="currentColor" />
                  </svg>
                  CargoCore
                </Link>

                <div className="hidden md:flex gap-8">
                  <Link href="/" className="text-foreground hover:text-accent transition">
                    Home
                  </Link>
                  <Link href="/services" className="text-foreground hover:text-accent transition">
                    Services
                  </Link>
                  <Link href="/track" className="text-foreground hover:text-accent transition">
                    Track
                  </Link>
                  <Link href="/quote" className="text-foreground hover:text-accent transition">
                    Quote
                  </Link>
                  <Link href="/about" className="text-foreground hover:text-accent transition">
                    About
                  </Link>
                  <Link href="/contact" className="text-foreground hover:text-accent transition">
                    Contact
                  </Link>
                </div>

              </div>
            </div>
          </nav>

          {/* Main content */}
          <main className="flex-1 pt-16">{children}</main>
        </div>
        <Analytics />
      </body>
    </html>
  )
}
