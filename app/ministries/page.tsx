import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { PageHero } from "@/components/page-hero"
import { SectionHeading } from "@/components/section-heading"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ministries } from "@/lib/ministries"
import { Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Ministries",
  description:
    "Discover the ministries at Crossview Church. Find your place to serve and grow in Crossview Kids, GriefShare, Men's Bible Study, and Ladies Brunch & Bible.",
}

export default function MinistriesPage() {
  return (
    <>
      <PageHero
        title="Our Ministries"
        intro="God has uniquely gifted each of us for service. Whether you're looking for a place to grow, connect, or serve, there's a ministry for you."
      />

      {/* Ministry Cards Grid */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <SectionHeading
            title="Find Your Place"
            subtitle="Explore our ministry areas and discover where you can plug in"
            centered
          />
          <div className="grid gap-8 sm:grid-cols-2">
            {ministries.map((ministry) => (
              <Card key={ministry.id} className="group overflow-hidden border-slate-200/60 shadow-sm">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={ministry.image || "/placeholder.svg"}
                    alt={ministry.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardHeader className="p-6 pb-0">
                  <CardTitle className="font-serif text-lg text-[#1E3D42]">{ministry.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-3">
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{ministry.description}</p>
                  <a
                    href={`#${ministry.id}`}
                    className="text-sm font-medium text-[#378AA4] hover:text-[#1E3D42] transition-colors"
                  >
                    Learn more →
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Ministry Sections */}
      <section className="py-20 md:py-28 bg-slate-50/50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <SectionHeading title="Ministry Details" subtitle="Learn more about each ministry area" centered />
          <div className="space-y-20 max-w-4xl mx-auto">
            {ministries.map((ministry, index) => (
              <div
                key={ministry.id}
                id={ministry.id}
                className="scroll-mt-24 grid gap-10 md:grid-cols-2 md:gap-12 items-center"
                style={{ direction: index % 2 === 1 ? "rtl" : "ltr" }}
              >
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden" style={{ direction: "ltr" }}>
                  <Image
                    src={ministry.image || "/placeholder.svg"}
                    alt={ministry.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div style={{ direction: "ltr" }}>
                  <h3 className="font-serif text-xl font-bold text-[#1E3D42] mb-4">{ministry.title}</h3>
                  <p className="text-base text-muted-foreground leading-7 mb-4 max-w-prose">{ministry.details}</p>
                  {ministry.schedule && <p className="text-sm text-[#378AA4] font-medium mb-2">{ministry.schedule}</p>}
                  {ministry.contact && (
                    <a
                      href={`tel:${ministry.contact.replace(/[^0-9]/g, "")}`}
                      className="inline-flex items-center gap-2 text-sm font-medium text-[#378AA4] hover:text-[#1E3D42] transition-colors"
                    >
                      <Phone className="h-4 w-4" />
                      {ministry.contact}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center max-w-2xl">
          <SectionHeading title="Ready to Get Involved?" subtitle="We'd love to help you find your place" centered />
          <p className="text-base md:text-lg text-muted-foreground leading-7 mb-8">
            Not sure where to start? Contact us and we'll help connect you with a ministry that fits your gifts.
          </p>
          <Button asChild className="h-11 px-6 rounded-xl font-medium bg-[#F1802C] hover:opacity-90 text-white">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
