"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2 font-bold text-2xl text-accent">
            <img src="/logo.svg" alt="CargoCore" className="w-8 h-8" />
            CargoCore
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <Link href="/" className="text-foreground hover:text-primary transition">
              Home
            </Link>
            <Link href="/services" className="text-foreground hover:text-primary transition">
              Services
            </Link>
            <Link href="/track" className="text-foreground hover:text-primary transition">
              Track
            </Link>
            <Link href="/quote" className="text-foreground hover:text-primary transition">
              Quote
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition">
              About
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border">
            <div className="flex flex-col gap-3 pt-4">
              <Link href="/" className="text-foreground hover:text-primary transition">
                Home
              </Link>
              <Link href="/services" className="text-foreground hover:text-primary transition">
                Services
              </Link>
              <Link href="/track" className="text-foreground hover:text-primary transition">
                Track
              </Link>
              <Link href="/quote" className="text-foreground hover:text-primary transition">
                Quote
              </Link>
              <Link href="/about" className="text-foreground hover:text-primary transition">
                About
              </Link>
              <Link href="/contact" className="text-foreground hover:text-primary transition">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
