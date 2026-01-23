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
          className="text-[#378AA4] hover:text-[#1E3D42] underline transition-colors"
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
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {beliefs.map((belief, index) => (
              <div
                key={belief.id}
                className={`p-6 rounded-lg border border-slate-200/60 hover:shadow-md transition-shadow ${
                  index % 2 === 0 ? "bg-white" : "bg-slate-50/50"
                }`}
              >
                <h3 className="font-serif text-3xl md:text-4xl font-bold text-[#1E3D42] mb-3">
                  {belief.title}
                </h3>
                <div className="h-1 w-16 bg-[#F1802C] mb-4"></div>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                  {belief.content}
                </p>
                <div className="pt-3 border-t border-slate-200/60">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <span className="font-medium text-[#1E3D42]">Scripture References: </span>
                    {formatScriptureLinks(belief.scriptures)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
