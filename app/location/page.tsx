import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/page-hero"
import { SectionHeading } from "@/components/section-heading"
import { Button } from "@/components/ui/button"
import { getFullAddress } from "@/lib/site"
import { MapPin, Phone, Clock, Car, Baby, Coffee, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Location & Visit",
  description:
    "Find Crossview Church and plan your visit. Get directions, service times, and know what to expect when you arrive.",
}

const whatToExpect = [
  {
    icon: Clock,
    title: "Service Length",
    description: "Our services typically last about 60-75 minutes.",
  },
  {
    icon: Coffee,
    title: "Casual Atmosphere",
    description: "Come as you are! You'll find people in everything from jeans to dress clothes.",
  },
  {
    icon: Baby,
    title: "Kids Programs",
    description: "Safe, engaging programs for children from nursery through third grade.",
  },
]

const visitInfo = [
  "Friendly greeters will welcome you at the door",
  "We offer verse-by-verse Bible teaching",
  "A warm, welcoming environment for all ages",
  "Children's ministry available during service",
]

export default function LocationPage() {
  return (
    <>
      <PageHero
        title="Visit Crossview"
        intro="We'd love to meet you! Here's everything you need to know to plan your first visit."
        primaryCta={{ label: "Get Directions", href: "#map" }}
        secondaryCta={{ label: "Contact Us", href: "/contact" }}
      />

      {/* Contact Info Grid */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-3 max-w-3xl mx-auto text-center">
            <div>
              <MapPin className="h-6 w-6 text-[#F1802C] mx-auto mb-3" />
              <h3 className="font-serif text-lg font-semibold text-[#1E3D42] mb-2">Address</h3>
              <address className="text-base text-muted-foreground not-italic">
                5834 Monroe Street
                <br />
                Sylvania, OH 43560
              </address>
            </div>

            <div>
              <Phone className="h-6 w-6 text-[#378AA4] mx-auto mb-3" />
              <h3 className="font-serif text-lg font-semibold text-[#1E3D42] mb-2">Phone</h3>
              <a
                href="tel:4192807495"
                className="text-base text-muted-foreground hover:text-[#378AA4] transition-colors"
              >
                (419) 280-7495
              </a>
            </div>

            <div>
              <Clock className="h-6 w-6 text-[#1E3D42] mx-auto mb-3" />
              <h3 className="font-serif text-lg font-semibold text-[#1E3D42] mb-2">Service Times</h3>
              <p className="text-sm text-muted-foreground">Sunday: 10:30 a.m.</p>
              <p className="text-sm text-muted-foreground">Thursday Bible Study: 7:00 p.m.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section id="map" className="py-20 md:py-28 bg-slate-50/50 scroll-mt-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <SectionHeading title="Find Us" subtitle="We're located in Sylvania, Ohio" centered />
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-slate-100">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <MapPin className="h-10 w-10 text-[#378AA4] mb-4" />
                <p className="text-base text-muted-foreground mb-6">{getFullAddress()}</p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(getFullAddress())}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-[#378AA4] hover:text-[#1E3D42] transition-colors"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plan Your Visit */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 items-start">
            {/* What to Expect */}
            <div>
              <SectionHeading title="What to Expect" subtitle="Your first visit will feel like home" />
              <div className="space-y-6">
                {whatToExpect.map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <item.icon className="h-5 w-5 text-[#378AA4] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-[#1E3D42] mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* When You Arrive */}
            <div>
              <SectionHeading title="When You Arrive" subtitle="Here's what you can expect" />
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
        </div>
      </section>

      {/* Parking & Kids Check-in */}
      <section className="py-20 md:py-28 bg-slate-50/50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2 max-w-4xl mx-auto">
            <div className="text-center">
              <Car className="h-8 w-8 text-[#378AA4] mx-auto mb-4" />
              <h3 className="font-serif text-xl font-semibold text-[#1E3D42] mb-3">Parking</h3>
              <p className="text-base text-muted-foreground leading-7">
                Parking is available in our lot adjacent to the building. Guest parking is located near the main
                entrance.
              </p>
            </div>
            <div className="text-center">
              <Baby className="h-8 w-8 text-[#F1802C] mx-auto mb-4" />
              <h3 className="font-serif text-xl font-semibold text-[#1E3D42] mb-3">Kids Check-in</h3>
              <p className="text-base text-muted-foreground leading-7">
                Our friendly volunteers will greet you and help check in your children. We provide a safe, fun
                environment for kids of all ages.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button asChild className="h-11 px-6 rounded-xl font-medium bg-[#F1802C] hover:opacity-90 text-white">
              <Link href="/contact">Have Questions?</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
