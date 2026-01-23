"use client"

import { ContactBlock } from "@/components/contact-block"
import { ministries } from "@/lib/ministries"
import Image from "next/image"
import { Phone } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

// Filter to only the 4 ministries specified in requirements
const featuredMinistries = ministries.filter(
  (m) =>
    m.id === "crossview-kids" ||
    m.id === "griefshare" ||
    m.id === "mens-bible-study" ||
    m.id === "ladies-brunch"
)

export default function MinistriesPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const handleCardInteraction = (ministryId: string) => {
    setExpandedId(expandedId === ministryId ? null : ministryId)
  }

  return (
    <>
      {/* Page Title - Reduced spacing */}
      <section className="pt-12 md:pt-16 pb-4 md:pb-6 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#1E3D42] mb-3">Ministries</h1>
            <div className="h-1 w-16 bg-[#F1802C] mx-auto mb-4"></div>
            <p className="text-base text-muted-foreground leading-7">
              God has uniquely gifted each of us for service. Whether you're looking for a place to grow, connect, or serve, there's a ministry for you.
            </p>
          </div>
        </div>
      </section>

      {/* Ministry Grid - Reduced spacing, better mobile */}
      <section className="pt-4 md:pt-6 pb-8 md:pb-12 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-4 md:gap-6 md:grid-cols-2">
              {featuredMinistries.map((ministry) => {
                const isExpanded = expandedId === ministry.id
                return (
                  <div
                    key={ministry.id}
                    className="group relative aspect-3/2 md:aspect-4/3 rounded-lg overflow-hidden bg-slate-100 border border-slate-200 cursor-pointer touch-manipulation"
                    onMouseEnter={() => setExpandedId(ministry.id)}
                    onMouseLeave={() => setExpandedId(null)}
                    onClick={() => handleCardInteraction(ministry.id)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault()
                        handleCardInteraction(ministry.id)
                      }
                    }}
                    aria-expanded={isExpanded}
                    aria-label={`${ministry.title} - ${isExpanded ? "Hide" : "Show"} details`}
                  >
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <Image
                        src={ministry.image}
                        alt={ministry.title}
                        fill
                        className={cn(
                          "transition-all duration-300 group-hover:scale-105",
                          isExpanded ? "blur-md md:blur-lg" : "blur-0"
                        )}
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      {/* Dark Overlay - Stronger on mobile for readability */}
                      <div className="absolute inset-0 bg-linear-to-t from-[#1E3D42]/95 via-[#1E3D42]/70 md:from-[#1E3D42]/90 md:via-[#1E3D42]/60 to-transparent" />
                    </div>

                    {/* Content Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6">
                      {/* Title - Always Visible */}
                      <h2 className="font-serif text-xl md:text-2xl font-bold text-white mb-2 transition-all duration-300">
                        {ministry.title}
                      </h2>

                      {/* Expanded Content */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          isExpanded
                            ? "max-h-[500px] opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="pt-3 md:pt-4 space-y-2 md:space-y-3">
                          <p className="text-xs md:text-sm text-white/90 leading-5 md:leading-6">
                            {ministry.details}
                          </p>

                          {ministry.schedule && (
                            <p className="text-xs md:text-sm text-[#F1802C] font-medium">
                              {ministry.schedule}
                            </p>
                          )}

                          {(ministry.id === "griefshare" || ministry.id === "mens-bible-study") && (
                            <div className="pt-2 border-t border-white/20">
                              <p className="text-xs text-white/80 mb-1">Contact Pastor Matt</p>
                              <a
                                href="tel:4192807495"
                                className="inline-flex items-center gap-2 text-xs md:text-sm text-white hover:text-[#F1802C] transition-colors touch-manipulation"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <Phone className="h-3 w-3 md:h-4 md:w-4" />
                                (419) 280-7495
                              </a>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Interaction Indicator */}
                      <p
                        className={`text-xs text-white/80 mt-2 transition-opacity duration-300 ${
                          isExpanded ? "opacity-0" : "opacity-100"
                        }`}
                      >
                        <span className="hidden md:inline">Hover</span>
                        <span className="md:hidden">Tap</span> for more info &gt;&gt;
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
