import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ImageCarousel } from "@/components/image-carousel"
import { InfoStrip } from "@/components/info-strip"
import { SectionHeading } from "@/components/section-heading"
import { FeaturedEventCard, UpcomingEventsList } from "@/components/events-list"
import { MediaTeaser } from "@/components/media-teaser"

const heroSlides = [
  {
    id: "1",
    title: "Worship & Teaching",
    description: "Experience biblical teaching and heartfelt worship every Sunday.",
    image: "/church-congregation-worship.png",
  },
  {
    id: "2",
    title: "Community & Connection",
    description: "Find your place in a caring church family.",
    image: "/church-community-fellowship-gathering.jpg",
  },
  {
    id: "3",
    title: "Kids & Nursery",
    description: "Safe, age-appropriate programs for children of all ages.",
    image: "/church-children-ministry-kids.jpg",
  },
  {
    id: "4",
    title: "Serving & Hospitality",
    description: "Discover the joy of using your gifts to serve others.",
    image: "/church-volunteers-serving-community.jpg",
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-background">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-6">
              <h1 className="font-serif text-3xl md:text-5xl font-bold text-[#1E3D42] tracking-tight text-balance leading-tight">
                Christ… Connection… Community
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-7 text-pretty max-w-prose">
                We invite you to experience God's love, grace, and truth in a caring church family. Crossview is an
                independent, Bible-based church where God's Word is taught clearly and Jesus Christ is at the center of
                all we do. If you're seeking to grow closer to God and understand the Bible, we would love to help.
              </p>
              <div className="flex flex-wrap items-center gap-6 pt-2">
                <Button asChild className="h-11 px-6 rounded-xl font-medium bg-[#F1802C] hover:opacity-90 text-white">
                  <Link href="/location">Plan Your Visit</Link>
                </Button>
                <Link
                  href="#sermons"
                  className="text-sm font-medium text-[#378AA4] hover:text-[#1E3D42] transition-colors"
                >
                  Watch a Message
                </Link>
              </div>
            </div>
            <ImageCarousel slides={heroSlides} />
          </div>
        </div>
      </section>

      <InfoStrip />

      {/* What's Happening Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <SectionHeading title="What's Happening" subtitle="Stay connected with the life of our church" />
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <FeaturedEventCard />
            <div>
              <h3 className="font-semibold text-xl text-[#1E3D42] mb-6">Upcoming Events</h3>
              <UpcomingEventsList limit={3} />
            </div>
          </div>
        </div>
      </section>

      {/* Message Teaser Section */}
      <section id="sermons" className="py-20 md:py-28 bg-slate-50/50 scroll-mt-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <SectionHeading title="Featured Message" subtitle="A short excerpt from recent preaching." />
              <p className="text-base md:text-lg text-muted-foreground leading-7 mb-6 max-w-prose">
                Our sermons are designed to help you grow in your faith and apply biblical truth to everyday life.
              </p>
              <Link
                href="/contact"
                className="text-sm font-medium text-[#378AA4] hover:text-[#1E3D42] transition-colors"
              >
                View Sermons →
              </Link>
            </div>
            <MediaTeaser
              title="Watch Our Latest Message"
              description="Catch up on recent sermons and teachings."
              href="/contact"
            />
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center max-w-2xl">
          <SectionHeading
            title="New Here?"
            subtitle="We'd love to meet you and help you find your place at Crossview."
            centered
          />
          <p className="text-base md:text-lg text-muted-foreground leading-7 mb-8">
            Whether you're exploring faith for the first time or looking for a new church home, you're welcome here.
          </p>
          <Button asChild className="h-11 px-6 rounded-xl font-medium bg-[#F1802C] hover:opacity-90 text-white">
            <Link href="/location">Plan Your Visit</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
