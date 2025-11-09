"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
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

          {/* Desktop Menu */}
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

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border">
            <div className="flex flex-col gap-3 pt-4">
              <Link href="/" className="text-foreground hover:text-accent transition" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <Link
                href="/services"
                className="text-foreground hover:text-accent transition"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/track"
                className="text-foreground hover:text-accent transition"
                onClick={() => setIsOpen(false)}
              >
                Track
              </Link>
              <Link
                href="/quote"
                className="text-foreground hover:text-accent transition"
                onClick={() => setIsOpen(false)}
              >
                Quote
              </Link>
              <Link
                href="/about"
                className="text-foreground hover:text-accent transition"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-foreground hover:text-accent transition"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export { Navbar }
export default Navbar
