import Link from "next/link"
import { Footer } from "@/components/footer"

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

      {/* Why Choose CargoCore */}
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

          <h2 className="text-4xl font-bold mb-4 text-center mt-20">The CargoCore Promise: Built on Trust and Technology</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-center mb-12">
            At CargoCore Logistics, we don't just move freight; we build partnerships. Our operations are grounded in a set of core values that ensure every client receives the highest standard of service, from first mile to last mile.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background p-6 rounded-lg border border-border overflow-hidden">
              <img
                src="/global-supply-chain-network-world-map-distribution.jpg"
                alt="Global supply chain network"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Global Reach</h3>
              <p className="text-muted-foreground">
                150+ countries covered with reliable international logistics network
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg border border-border overflow-hidden">
              <img
                src="/express-delivery-fast-shipping-drone-package-racin.jpg"
                alt="Express delivery service"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
              <p className="text-muted-foreground">Express shipping options with real-time tracking and updates</p>
            </div>
            <div className="bg-background p-6 rounded-lg border border-border overflow-hidden">
              <img
                src="/professional-logistics-workers-team-warehouse-mana.jpg"
                alt="Professional logistics team"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Professional Team</h3>
              <p className="text-muted-foreground">Experienced logistics experts ready to handle any shipment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Network & Reach */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Connecting Continents: Our Global Footprint</h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
            With a presence in over 150 countries and strategic hubs in major global trade centers, CargoCore Logistics offers seamless international shipping capabilities. Whether you need to move a single pallet or manage a complex, multi-modal supply chain, our integrated network ensures your cargo reaches its destination safely and efficiently, anywhere in the world. We handle all aspects of cross-border logistics, including customs clearance and regulatory compliance, so you can focus on your core business.
          </p>
          <img
            src="/global-map-network.jpg"
            alt="Global logistics network map"
            className="w-full max-w-5xl mx-auto rounded-lg shadow-xl"
          />
        </div>
      </section>

      {/* Services Preview with Images */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Air Freight",
                desc: "Fast international air cargo",
                image: "/air-freight-cargo-loading-operations.jpg",
              },
              {
                name: "Ocean Freight",
                desc: "Cost-effective sea shipping",
                image: "/ocean-freight-container-terminal.jpg",
              },
              {
                name: "Road Transport",
                desc: "Reliable ground logistics",
                image: "/road-transport-fleet-professional.jpg",
              },
              {
                name: "Warehousing",
                desc: "Secure storage solutions",
                image: "/warehouse-management-system-professional.jpg",
              },
              {
                name: "Last-Mile Delivery",
                desc: "Final destination delivery",
                image: "/last-mile-delivery-professional.jpg",
              },
              {
                name: "Customs Clearance",
                desc: "Complete documentation handling",
                image: "/customs-clearance-professional.jpg",
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
