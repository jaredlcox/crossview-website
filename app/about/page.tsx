import type { Metadata } from "next"
import Image from "next/image"
import { PageHero } from "@/components/page-hero"
import { SectionHeading } from "@/components/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Heart, Users, HandHeart } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Crossview Church - our vision, values, and leadership. Discover what makes our community special.",
}

const coreValues = [
  {
    icon: BookOpen,
    title: "God's Word",
    description: "We are founded on Christ and Scriptures for life and growth.",
  },
  {
    icon: Heart,
    title: "Love and Service",
    description: "We build one another up through Christlike love and service.",
  },
  {
    icon: Users,
    title: "Discipleship",
    description: "We follow Jesus, grow to become like Jesus, and help others follow Jesus.",
  },
  {
    icon: HandHeart,
    title: "Spiritual Care",
    description: "We come alongside the hurting with compassion, truth, and biblical counseling.",
  },
]

const goals = [
  {
    title: "Saved",
    description: "By grace through faith in Jesus Christ.",
  },
  {
    title: "Sanctified",
    description: "Growing in Christlikeness through God's Word and discipleship.",
  },
  {
    title: "Serving",
    description: "Using our gifts to build up the Body of Christ and reach our community.",
  },
  {
    title: "Singing",
    description: "Lifting our voices together in sincere praise and worship to God.",
  },
  {
    title: "Sacrificing",
    description: "Living generously in love toward God and others.",
  },
  {
    title: "Sharing the Gospel",
    description: "Proclaiming Christ wherever God gives opportunity.",
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Crossview Church"
        intro="We're a community of Christ-followers seeking to know God, grow in faith, and make a difference in our world."
      />

      {/* Our Vision */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <SectionHeading title="Our Vision" subtitle="Keeping Christ at the center" />
              <p className="text-base md:text-lg text-muted-foreground leading-7 max-w-prose">
                Our name reflects our vision, which is to keep the cross of Christ at the center of our lives, our
                church, and our mission to the world.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/church-vision-community.jpg"
                alt="Crossview Church community gathered in worship"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Goal - The 6 S's */}
      <section className="py-20 md:py-28 bg-slate-50/50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <SectionHeading title="Our Goal" subtitle="What we're working toward" centered />
          <div className="max-w-3xl mx-auto">
            <div className="grid gap-6 sm:grid-cols-2">
              {goals.map((goal) => (
                <div key={goal.title} className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F1802C] text-white text-sm font-bold">
                    {goal.title.charAt(0)}
                  </span>
                  <div>
                    <h3 className="font-semibold text-[#1E3D42]">{goal.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-1">{goal.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <SectionHeading title="Our Core Values" subtitle="The principles that guide everything we do" centered />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value) => (
              <div key={value.title} className="text-center">
                <div className="flex h-12 w-12 mx-auto items-center justify-center rounded-xl bg-[#378AA4]/10 mb-4">
                  <value.icon className="h-6 w-6 text-[#378AA4]" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-[#1E3D42] mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 md:py-28 bg-slate-50/50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <SectionHeading title="Our Leadership" subtitle="Meet the team serving our church family" centered />
          <div className="max-w-3xl mx-auto">
            <Card className="overflow-hidden border-slate-200/60 shadow-sm">
              <div className="grid md:grid-cols-2">
                <div className="relative aspect-square md:aspect-auto">
                  <Image
                    src="/pastor-david-mitchell-church-leader.jpg"
                    alt="Matt and Vickie Bernsdorf"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6 md:p-8 flex flex-col justify-center">
                  <h3 className="font-serif text-xl font-semibold text-[#1E3D42]">Matt and Vickie Bernsdorf</h3>
                  <p className="text-sm text-[#378AA4] font-medium mt-1">Pastoral Leadership</p>
                  <div className="text-sm text-muted-foreground leading-7 mt-4 space-y-3">
                    <p>
                      In 2023, Matt and Vickie opened their home for a small Bible study that grew into what is now
                      Crossview Church. In 2025, the church moved into its current storefront location in Sylvania.
                    </p>
                    <p>
                      <strong>Pastor Matt</strong> brings 25 years of full-time ministry experience, specializing in
                      verse-by-verse teaching and biblical counseling. He holds advanced degrees and is a Licensed
                      Clinical Pastoral Counselor and Board Certified Mental Health Coach.
                    </p>
                    <p>
                      <strong>Vickie</strong> is a registered nurse with over 20 years of pediatric experience.
                    </p>
                    <p>
                      Together, they have four married adult children and seven grandchildren. Matt and Vickie came to
                      know the Lord in 1997 and share a deep love for people and a desire to see lives transformed by
                      the gospel.
                    </p>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}
