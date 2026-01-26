import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Crossview Church - our vision, values, and pastor.",
}

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

const coreValues = [
  {
    title: "God's Word",
    description: "We are founded on Christ and Scriptures for life and growth.",
  },
  {
    title: "Love and Service",
    description: "We build one another up through Christlike love and service.",
  },
  {
    title: "Discipleship",
    description: "We follow Jesus, grow to become like Jesus, and help others follow Jesus.",
  },
  {
    title: "Spiritual Care",
    description: "We come alongside the hurting with compassion, truth, and biblical counseling.",
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-12 md:pt-16 pb-4 md:pb-6 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#1E3D42] mb-3">About Us</h1>
            <div className="h-1 w-16 bg-[#F1802C] mx-auto mb-4"></div>
            <p className="text-base text-muted-foreground leading-7">
              Learn about Crossview Church - our vision, values, and pastor.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are & Vision Combined */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1E3D42] mb-3">Who We Are</h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Crossview is an independent, Bible-based church rooted in the truth of God's Word and centered on
                Jesus Christ. We are a fellowship of believers committed to worship, spiritual growth, and living out
                our faith in everyday life. Through clear teaching of the Bible and genuine relationships, we seek to
                know God more deeply and reflect His love, grace, and truth to one another and to our community.
              </p>
            </div>
            <div id="vision">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1E3D42] mb-3">Our Vision</h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Our name reflects our vision—to keep the cross of Christ in view everywhere we go and in
                everything we say and do. By remaining centered on Christ's sacrifice, grace, and truth, we seek to
                glorify God, grow as disciples, and faithfully share the hope of the gospel with our community and
                beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Goal */}
      <section className="py-12 md:py-16 bg-slate-50/50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1E3D42] mb-4">Our Goal Is For All To Be</h2>
            <ul className="grid sm:grid-cols-2 gap-4 md:gap-6">
              {goals.map((goal) => (
                <li key={goal.title} className="p-4 rounded-lg bg-white border border-slate-200/60 hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-[#1E3D42] mb-1">{goal.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{goal.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1E3D42] mb-4">Our Core Values</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {coreValues.map((value) => (
                <div key={value.title} className="p-5 rounded-lg bg-slate-50/50 border border-slate-200/60 hover:shadow-md transition-shadow">
                  <h3 className="font-serif text-lg font-semibold text-[#1E3D42] mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="py-12 md:py-16 bg-slate-50/50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1E3D42] mb-4">Pastor Matt Bernsdorff</h2>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-slate-100 shadow-lg">
                <Image
                  src="/matt-and-vickie.png"
                  alt="Matt and Vickie Bernsdorff"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-semibold text-[#1E3D42] mb-4">Matt and Vickie Bernsdorff</h3>
                <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                  <p>
                    In 2023, Matt and Vickie opened their home for a small Bible study that grew into what is now
                    Crossview Church. In 2025, the church moved into its current storefront location in Sylvania.
                  </p>
                  <p>
                    <strong className="text-[#1E3D42]">Pastor Matt</strong> brings 25 years of full-time ministry experience, specializing in
                    verse-by-verse teaching and biblical counseling. He holds advanced degrees and is a Licensed
                    Clinical Pastoral Counselor and Board Certified Mental Health Coach.
                  </p>
                  <p>
                    <strong className="text-[#1E3D42]">Vickie</strong> is a registered nurse with over 20 years of pediatric experience.
                  </p>
                  <p>
                    Together, they have four married adult children and seven grandchildren. Matt and Vickie came to
                    know the Lord in 1997 and share a deep love for people and a desire to see lives transformed by
                    the gospel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
