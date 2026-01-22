import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FeaturedEventCard, UpcomingEventsList } from "@/components/events-list"
import { ServiceTimesGrid } from "@/components/service-times-grid"
import { ContactBlock } from "@/components/contact-block"
import { getFullAddress } from "@/lib/site"
import { MapPin, Church } from "lucide-react"

export default function HomePage() {
  return (
    <>
      {/* Hero Section - BridgePoint Style */}
      <section className="relative py-20 md:py-32 min-h-[500px] md:min-h-[600px] flex items-center bg-gradient-to-br from-[#378AA4] via-[#2a6b7f] to-[#1E3D42]">
        {/* Subtle cross pattern overlay */}
        <div className="absolute inset-0 opacity-[0.08]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='1.5' stroke-opacity='0.4'%3E%3Cpath d='M40 20 L40 60 M20 40 L60 40'/%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
        
        {/* Content */}
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="text-sm font-medium text-[#F1802C] uppercase tracking-wide">Welcome to</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              Crossview Church
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Christ… Connection… Community
            </p>
          </div>
        </div>
      </section>

      {/* Ministries Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E3D42] mb-4">
                  Ministries
                </h2>
                <div className="h-1 w-16 bg-[#F1802C] mb-6"></div>
              </div>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
                God has uniquely gifted each of us for service. Whether you're looking for a place to grow, connect, or serve, there's a ministry for you.
              </p>
              <div className="pt-2">
                <Button
                  asChild
                  variant="outline"
                  className="border-2 border-[#378AA4] text-[#378AA4] hover:bg-[#378AA4] hover:text-white transition-all duration-200 h-11 px-6 font-medium"
                >
                  <Link href="/ministries">Learn More</Link>
                </Button>
              </div>
            </div>

            {/* Right Column - Image Card */}
            <div className="relative group">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/church-gathering.jpg"
                  alt="Church community gathering"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Subtle gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#F1802C]/10 rounded-full blur-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Invitation Section */}
      <section className="py-16 md:py-20 bg-[#1E3D42]">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Top Horizontal Line */}
            <div className="h-px bg-black/20 mb-8"></div>
            
            {/* Church Icon */}
            <div className="flex justify-center mb-8">
              <Church className="h-12 w-12 md:h-16 md:w-16 text-white stroke-2" />
            </div>

            {/* Main Text */}
            <div className="mb-8">
              <p className="font-serif text-xl md:text-2xl lg:text-3xl font-bold text-white leading-relaxed text-center max-w-3xl mx-auto">
                We invite you to experience God's love, grace, and truth in a caring church family. Crossview is an independent,
                Bible-based church where God's Word is taught clearly and Jesus Christ is at the center of all we do. If you're
                seeking to grow closer to God and understand the Bible, we would love to help.
              </p>
            </div>

            {/* Bottom Horizontal Line */}
            <div className="h-px bg-black/20 mb-8"></div>

            {/* Call to Action Button */}
            <div className="flex justify-center">
              <Button
                asChild
                className="h-12 px-8 font-medium bg-[#378AA4] hover:bg-[#378AA4]/90 text-white"
              >
                <Link href="/about">Our Values & More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us - Service Times */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1E3D42] mb-8 text-center">Join Us!</h2>
            <ServiceTimesGrid />
          </div>
        </div>
      </section>

      {/* What's Happening */}
      <section className="py-16 md:py-20 bg-slate-50/50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1E3D42] mb-8 text-center">What's Happening</h2>
            <div className="grid gap-8 lg:grid-cols-2">
              <FeaturedEventCard />
              <div>
                <h3 className="font-serif text-lg font-semibold text-[#1E3D42] mb-6">Upcoming Events</h3>
                <UpcomingEventsList limit={3} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Block */}
      <section className="py-16 md:py-20 bg-slate-50/50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1E3D42] mb-6 text-center">Location</h2>
            <p className="text-base text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
              We're located in Sylvania, Ohio. Join us for worship and Bible study.
            </p>
            <div className="relative aspect-video rounded-lg overflow-hidden bg-slate-100 border border-slate-200 mb-6">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <MapPin className="h-10 w-10 text-[#378AA4] mb-4" />
                <p className="text-base text-muted-foreground mb-4">{getFullAddress()}</p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(getFullAddress())}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-[#378AA4] hover:text-[#1E3D42] transition-colors"
                >
                  View map →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Block */}
      <ContactBlock />
    </>
  )
}
