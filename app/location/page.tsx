import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LocationMap } from "@/components/location-map"
import { getFullAddress, siteConfig } from "@/lib/site"
import { Phone, Clock, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Location & Visit",
  description:
    "Find Crossview Church and plan your visit. Get directions, service times, and know what to expect when you arrive.",
}

const visitInfo = [
  "Friendly greeters will welcome you at the door",
  "We offer verse-by-verse Bible teaching",
  "A warm, welcoming environment for all ages",
  "Children's ministry available during service",
]

export default function LocationPage() {
  return (
    <>
      {/* Page Title */}
      <section className="py-16 md:py-20 bg-white border-b border-slate-200/60">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#1E3D42] mb-4">LOCATION</h1>
            <p className="text-base text-muted-foreground leading-7">
              We'd love to meet you! Here's everything you need to know to plan your first visit.
            </p>
          </div>
        </div>
      </section>

      {/* Address & Times */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-6">
            <div>
              <h2 className="font-serif text-2xl font-bold text-[#1E3D42] mb-3">Address</h2>
              <address className="text-base text-muted-foreground not-italic leading-relaxed">
                {siteConfig.address.street}
                <br />
                {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
              </address>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-[#1E3D42] mb-3">Service Times</h2>
              <div className="space-y-2">
                {siteConfig.serviceTimes.map((service) => (
                  <div key={service.name}>
                    <p className="text-base text-[#1E3D42] font-medium">{service.day}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{service.name} - {service.time}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-[#1E3D42] mb-3">Phone</h2>
              <a
                href="tel:4192807495"
                className="text-base text-muted-foreground hover:text-[#378AA4] transition-colors leading-relaxed"
              >
                {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map & Directions */}
      <section id="map" className="py-16 md:py-20 bg-white border-t border-slate-200/60 scroll-mt-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <LocationMap />
          </div>
        </div>
      </section>

      {/* Plan Your Visit */}
      <section className="py-16 md:py-20 bg-white border-t border-slate-200/60">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl font-bold text-[#1E3D42] mb-6">Plan Your Visit</h2>
            <div className="space-y-3">
              {visitInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#F1802C] shrink-0 mt-0.5" />
                  <span className="text-base text-muted-foreground leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
