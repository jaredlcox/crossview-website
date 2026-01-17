import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { StickyToc } from "@/components/sticky-toc"
import { DoctrineAccordion } from "@/components/doctrine-accordion"
import { beliefs } from "@/lib/beliefs"

export const metadata: Metadata = {
  title: "What We Believe",
  description:
    "Explore the core beliefs and doctrines of Crossview Church. Learn what we believe about Scripture, God, Jesus, salvation, and more.",
}

export default function BeliefsPage() {
  const tocItems = beliefs.map((belief) => ({
    id: belief.id,
    title: belief.title,
  }))

  return (
    <>
      <PageHero
        title="What We Believe"
        intro="Our beliefs are rooted in the historic Christian faith and the authority of Scripture. Here we outline the core doctrines that guide our church."
      />

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex gap-12 lg:gap-16">
            {/* Sticky Table of Contents */}
            <div className="w-56 shrink-0 hidden lg:block">
              <StickyToc items={tocItems} />
            </div>

            {/* Main Content */}
            <div className="flex-1 min-w-0">
              {/* Mobile TOC */}
              <div className="lg:hidden mb-8">
                <StickyToc items={tocItems} />
              </div>

              <DoctrineAccordion doctrines={beliefs} />

              {/* Closing Statement */}
              <div className="mt-14 p-6 md:p-8 rounded-xl bg-slate-50/70">
                <h3 className="font-serif text-xl font-semibold text-[#1E3D42] mb-3">Questions About Our Beliefs?</h3>
                <p className="text-base text-muted-foreground leading-7 max-w-prose">
                  We welcome thoughtful questions and conversations about faith. If you'd like to learn more about what
                  we believe or discuss any of these doctrines, please reach out to our pastoral team or join one of our
                  Bible study groups.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
