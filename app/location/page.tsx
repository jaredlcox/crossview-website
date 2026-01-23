import type { Metadata } from "next"
import { LocationMap } from "@/components/location-map"
import { ContactBlock } from "@/components/contact-block"

export const metadata: Metadata = {
  title: "Location & Visit",
  description:
    "Find Crossview Church and plan your visit. Get directions, service times, and contact information.",
}

export default function LocationPage() {
  return (
    <>
      {/* Map & Location Section */}
      <section id="map" className="py-12 md:py-16 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <LocationMap />
          </div>
        </div>
      </section>
    </>
  )
}
