import type { Metadata } from "next"
import { beliefs } from "@/lib/beliefs"
import Link from "next/link"

export const metadata: Metadata = {
  title: "What We Believe",
  description:
    "Explore the core beliefs and doctrines of Crossview Church. Learn what we believe about Scripture, God, Jesus, salvation, and more.",
}

// Helper function to create Bible verse links
function formatScriptureLinks(scriptures: string[]) {
  return scriptures.map((verse, index) => {
    const verseUrl = `https://www.biblegateway.com/passage/?search=${encodeURIComponent(verse)}&version=KJV`
    return (
      <span key={verse}>
        <Link
          href={verseUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          {verse}
        </Link>
        {index < scriptures.length - 1 && ", "}
      </span>
    )
  })
}

export default function BeliefsPage() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1E3D42] mb-4">Our Beliefs</h2>
          <div className="h-px bg-slate-200 mb-8"></div>

          <div className="space-y-8">
            {beliefs.map((belief) => (
              <div key={belief.id} className="space-y-3">
                <h3 className="font-serif text-lg md:text-xl font-semibold text-[#1E3D42]">
                  {belief.title}
                </h3>
                <p className="text-base text-muted-foreground leading-7">{belief.content}</p>
                <p className="text-sm text-muted-foreground">
                  {formatScriptureLinks(belief.scriptures)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
