import Link from "next/link"
import { Footer } from "@/components/footer" // Ensure this is the correct, unified component

const Page = () => {
  return (
    <div className="w-full">
      {/* Hero Section with Image */}
      <section className="relative w-full h-[500px] overflow-hidden">
        <img
          src="/cargo-truck-highway-international-logistics-shippi.jpg"
          alt="Hero banner showing cargo truck on highway at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white text-balance">
              Delivering Your World, One Shipment at a Time
            </h1>
            <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto text-balance">
              CargoCore Logistics provides professional global shipping, freight forwarding, and supply chain solutions
              trusted by businesses worldwide.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="/quote"
                className="px-8 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition font-semibold"
              >
                Get Quote
              </Link>
              <Link
                href="/track"
                className="px-8 py-3 border border-white text-white rounded-lg hover:bg-white/10 transition font-semibold"
              >
                Track Shipment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose CargoCore - Refined */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Why Choose CargoCore?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-center mb-12">
            We're committed to delivering excellence in every shipment with reliability, speed, and transparency.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background p-6 rounded-lg border border-border overflow-hidden">
              <h3 className="text-xl font-bold mb-2 text-accent">Reliability</h3>
              <p className="text-muted-foreground">
                We commit to on-time delivery and transparent communication, ensuring your supply chain remains uninterrupted. Our global network is designed for resilience and consistency.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg border border-border overflow-hidden">
              <h3 className="text-xl font-bold mb-2 text-accent">Innovation</h3>
              <p className="text-muted-foreground">
                We leverage cutting-edge logistics technology, including real-time GPS tracking and advanced inventory management systems, to provide smart, efficient, and cost-effective solutions.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg border border-border overflow-hidden">
              <h3 className="text-xl font-bold mb-2 text-accent">Customer-Centricity</h3>
              <p className="text-muted-foreground">
                Your business is our priority. Our dedicated team of logistics experts provides personalized support and tailor-made solutions to meet your unique shipping challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Feature Section */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">Integrated Supply Chain Solutions</h2>
            <p className="text-lg text-muted-foreground">
              From the first mile to the last, CargoCore offers a fully integrated suite of services. Our end-to-end management reduces complexity and ensures seamless coordination across all modes of transport.
            </p>
            <ul className="space-y-3 text-lg">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Global Network in 150+ Countries</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Real-Time Tracking and Visibility</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Dedicated 24/7 Customer Support</span>
              </li>
            </ul>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-8 py-3 border border-accent text-accent rounded-lg hover:bg-accent/10 transition font-semibold"
            >
              Learn More About Us
            </Link>
          </div>
          <img
            src="/integrated-supply-chain-logistics-network.jpg"
            alt="Integrated supply chain logistics network"
            className="rounded-lg shadow-xl w-full h-96 object-cover"
          />
        </div>
      </section>

      {/* The CargoCore Promise: Built on Trust and Technology - Removed to simplify layout and avoid redundancy */}



      {/* Services Preview with Images */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Air Freight",
                desc: "Fast international air cargo",
                image: "/logistics-air-ocean-road.png",
              },
              {
                name: "Ocean Freight",
                desc: "Cost-effective sea shipping",
                image: "/logistics-freight-forwarding.jpg",
              },
              {
                name: "Road Transport",
                desc: "Reliable ground logistics",
                image: "/logistics-digital-tracking.jpg",
              },
              {
                name: "Warehousing",
                desc: "Secure storage solutions",
                image: "/logistics-warehouse-scm.png",
              },
              {
                name: "Last-Mile Delivery",
                desc: "Final destination delivery",
                image: "/logistics-supply-chain-process.jpg",
              },
              {
                name: "Customs Clearance",
                desc: "Complete documentation handling",
                image: "/logistics-scm-flow.jpg",
              },
            ].map((service) => (
              <div
                key={service.name}
                className="bg-card rounded-lg border border-border hover:border-accent transition overflow-hidden"
              >
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                  <p className="text-muted-foreground">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/services"
              className="px-8 py-3 border border-accent text-accent rounded-lg hover:bg-accent/10 transition font-semibold inline-block"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-accent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-accent-foreground">Ready to Ship?</h2>
          <p className="text-lg text-accent-foreground/90 mb-8">
            Get an instant quote or track your existing shipment with CargoCore Logistics.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/quote"
              className="px-8 py-3 bg-accent-foreground text-accent rounded-lg hover:bg-accent-foreground/90 transition font-semibold"
            >
              Get Quote Now
            </Link>
            <Link
              href="/track"
              className="px-8 py-3 border border-accent-foreground text-accent-foreground rounded-lg hover:bg-accent-foreground/10 transition font-semibold"
            >
              Track Shipment
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Page
