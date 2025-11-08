"use client"

import type React from "react"

import Link from "next/link"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from "lucide-react"
import { useState } from "react"

export function Footer() {
  const [email, setEmail] = useState("")

  const handleNewsletterSignup = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    alert(`Newsletter signup for: ${email}`)
    setEmail("")
  }

  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold">LogisticsHub</h3>
            <p className="text-sm opacity-90">Delivering your world, one shipment at a time.</p>
            <div className="flex gap-4 mt-2">
              <Link href="#" className="hover:opacity-80 transition">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="hover:opacity-80 transition">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="hover:opacity-80 transition">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="hover:opacity-80 transition">
                <Instagram size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <h4 className="font-bold">Quick Links</h4>
            <Link href="/" className="text-sm hover:opacity-80 transition">
              Home
            </Link>
            <Link href="/services" className="text-sm hover:opacity-80 transition">
              Services
            </Link>
            <Link href="/track" className="text-sm hover:opacity-80 transition">
              Track Shipment
            </Link>
            <Link href="/about" className="text-sm hover:opacity-80 transition">
              About Us
            </Link>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-3">
            <h4 className="font-bold">Services</h4>
            <Link href="#" className="text-sm hover:opacity-80 transition">
              Air Freight
            </Link>
            <Link href="#" className="text-sm hover:opacity-80 transition">
              Ocean Freight
            </Link>
            <Link href="#" className="text-sm hover:opacity-80 transition">
              Road Transport
            </Link>
            <Link href="#" className="text-sm hover:opacity-80 transition">
              Warehousing
            </Link>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-3">
            <h4 className="font-bold">Stay Updated</h4>
            <p className="text-sm">Get the latest logistics updates delivered to your inbox.</p>
            <form onSubmit={handleNewsletterSignup} className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-primary-foreground text-primary placeholder:text-primary/50"
                required
              />
              <Button type="submit" className="bg-accent hover:bg-accent/90 text-white px-3 whitespace-nowrap">
                Join
              </Button>
            </form>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-primary-foreground/20 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3">
              <Phone size={20} />
              <div>
                <p className="text-sm opacity-80">Phone</p>
                <p className="font-semibold">+1 (800) LOGISTICS</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={20} />
              <div>
                <p className="text-sm opacity-80">Email</p>
                <p className="font-semibold">info@logisticshub.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={20} />
              <div>
                <p className="text-sm opacity-80">Headquarters</p>
                <p className="font-semibold">123 Logistics Ave, NY</p>
              </div>
            </div>
          </div>
        </div>

        {/* Live Chat Widget Placeholder */}
        <div className="mb-8 p-4 bg-primary-foreground/10 rounded-lg border border-primary-foreground/20">
          <p className="text-sm">💬 Live Chat: Our support team is available 24/7 to assist you.</p>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-80">&copy; 2025 LogisticsHub. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="hover:opacity-80 transition">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:opacity-80 transition">
              Terms of Service
            </Link>
            <Link href="#" className="hover:opacity-80 transition">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
