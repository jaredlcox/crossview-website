"use client"

import { useState, useEffect, useCallback } from "react"
import { cn } from "@/lib/utils"
import type { Ministry } from "@/lib/ministries"
import { MinistryImage } from "@/components/ministry-image"

interface MinistryCardsCarouselProps {
  ministries: Ministry[]
  interval?: number
  className?: string
}

export function MinistryCardsCarousel({ ministries, interval = 5000, className }: MinistryCardsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const fillImageIds = new Set(["griefshare", "mens-bible-study", "ladies-brunch"])

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % ministries.length)
  }, [ministries.length])

  useEffect(() => {
    if (isPaused) return

    const timer = setInterval(goToNext, interval)
    return () => clearInterval(timer)
  }, [goToNext, interval, isPaused])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  if (!ministries || ministries.length === 0) return null

  return (
    <div
      className={cn("relative overflow-hidden rounded-lg shadow-lg bg-slate-100", className)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Ministry cards carousel"
    >
      {/* <div className="relative aspect-3/2 w-full"> */}
      <div className="relative aspect-square xs:aspect-13/9 sm:aspect-15/9 md:aspect-17/9 lg:aspect-4/3 w-full">
        {ministries.map((ministry, index) => (
          <div
            key={ministry.id}
            className={cn(
              "absolute inset-0 transition-opacity duration-700 ease-in-out",
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0",
            )}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${ministries.length}: ${ministry.title}`}
            aria-hidden={index !== currentIndex}
          >
            <div className="h-full">
              <div className="absolute inset-0">
                <MinistryImage
                  ministry={ministry}
                  alt={ministry.title}
                  className={cn(
                    "absolute inset-0 h-full w-full",
                    fillImageIds.has(ministry.id) ? "object-fill" : "object-cover",
                  )}
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#1E3D42]/92 via-[#1E3D42]/55 to-transparent" />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6 pb-12 md:pb-12">
                <h3 className="font-serif text-xl md:text-2xl font-bold text-white mb-2">
                  {ministry.title}
                </h3>
                <p className="text-sm md:text-base text-white/90 leading-relaxed line-clamp-3">
                  {ministry.description}
                </p>
                {ministry.schedule && (
                  <p className="text-xs md:text-sm text-[#F1802C] font-medium mt-2">
                    {ministry.schedule}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dot Indicators */}
      {ministries.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20" role="tablist">
          {ministries.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                index === currentIndex
                  ? "bg-[#F1802C] w-8"
                  : "bg-slate-300 hover:bg-slate-400 w-2",
              )}
              role="tab"
              aria-selected={index === currentIndex}
              aria-label={`Go to ${ministries[index].title}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
