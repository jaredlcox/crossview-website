import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FeaturedEventCard, UpcomingEventsList } from "@/components/events-list"
import { ServiceTimesGrid } from "@/components/service-times-grid"
import { ContactBlock } from "@/components/contact-block"
import { getFullAddress } from "@/lib/site"
import { MapPin } from "lucide-react"

export default function HomePage() {
  return (
    <>
      {/* Hero Section - BridgePoint Style */}
      <section className="relative py-20 md:py-32 min-h-[500px] md:min-h-[600px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/church-entrance.jpg"
            alt="Crossview Church entrance"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-white/85"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="text-sm font-medium text-[#F1802C] uppercase tracking-wide">Welcome to</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#1E3D42] tracking-tight">
              Crossview Church
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Christ… Connection… Community
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Button asChild className="h-12 px-8 font-medium bg-[#F1802C] hover:opacity-90 text-white">
                <Link href="/location">Plan Your Visit</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Ministries Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1E3D42]">Ministries</h2>
            <p className="text-base text-muted-foreground leading-7 max-w-2xl mx-auto">
              God has uniquely gifted each of us for service. Whether you're looking for a place to grow, connect, or serve, there's a ministry for you.
            </p>
            <Button
              asChild
              variant="outline"
              className="border-[#378AA4] text-[#378AA4] hover:bg-[#378AA4] hover:text-white"
            >
              <Link href="/ministries">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stay Connected Section */}
      <section className="py-16 md:py-20 bg-slate-50/50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="p-8 border border-slate-200 rounded-lg bg-white">
              <h2 className="font-serif text-xl font-semibold text-[#1E3D42] mb-3">Stay Connected</h2>
              <p className="text-base text-muted-foreground leading-7 mb-6">
                Keep up with announcements, events, and ways to get involved in our church community.
              </p>
              <Button
                asChild
                variant="outline"
                className="border-[#378AA4] text-[#378AA4] hover:bg-[#378AA4] hover:text-white"
              >
                <Link href="/contact">Contact Us</Link>
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
