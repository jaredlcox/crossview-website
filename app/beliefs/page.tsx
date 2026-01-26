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

// Helper function to parse content and convert Bible verse references to links
function formatContentWithVerseLinks(content: string) {
  // Pattern to match Bible verse references like "1 Timothy 3:1–13" or "Acts 6:3-4"
  const versePattern = /(\d?\s?[A-Z][a-z]+\s\d+:\d+[–-]?\d*)/g
  
  const parts = content.split(versePattern)
  
  return parts.map((part, index) => {
    if (versePattern.test(part)) {
      // Reset the regex lastIndex since we're using it again
      versePattern.lastIndex = 0
      const verseUrl = `https://www.biblegateway.com/passage/?search=${encodeURIComponent(part)}&version=KJV`
      return (
        <Link
          key={index}
          href={verseUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#378AA4] hover:text-[#1E3D42] underline transition-colors"
        >
          {part}
        </Link>
      )
    }
    return part
  })
}

export default function BeliefsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-12 md:pt-16 pb-4 md:pb-6 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#1E3D42] mb-3">What We Believe</h1>
            <div className="h-1 w-16 bg-[#F1802C] mx-auto mb-4"></div>
            <p className="text-base text-muted-foreground leading-7">
              Explore the core beliefs and doctrines of Crossview Church. Learn what we believe about Scripture, God, Jesus, salvation, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Beliefs Content */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            {beliefs.map((belief, index) => (
              <div key={belief.id}>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1E3D42] mb-3">
                  {belief.title}
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed mb-4">
                  {formatContentWithVerseLinks(belief.content)}
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
      </section>
    </>
  )
}
