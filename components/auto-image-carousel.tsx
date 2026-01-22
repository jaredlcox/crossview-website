"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface AutoImageCarouselProps {
  images: string[]
  alt?: string
  interval?: number
  className?: string
}

export function AutoImageCarousel({ images, alt = "Church images", interval = 4000, className }: AutoImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }, [images.length])

  useEffect(() => {
    if (isPaused) return

    const timer = setInterval(goToNext, interval)
    return () => clearInterval(timer)
  }, [goToNext, interval, isPaused])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  if (!images || images.length === 0) return null

  return (
    <div
      className={cn("relative overflow-hidden rounded-lg shadow-lg", className)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Church images carousel"
    >
      <div className="relative aspect-[4/3] w-full bg-slate-100">
        {images.map((image, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 transition-opacity duration-700 ease-in-out",
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0",
            )}
            role="group"
            aria-roledescription="slide"
            aria-label={`Image ${index + 1} of ${images.length}`}
            aria-hidden={index !== currentIndex}
          >
            <Image
              src={image}
              alt={`${alt} ${index + 1}`}
              fill
              className="object-contain"
              priority={index === 0}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        ))}
      </div>

      {/* Dot Indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20" role="tablist">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                index === currentIndex
                  ? "bg-white w-8"
                  : "bg-white/60 hover:bg-white/80 w-2",
              )}
              role="tab"
              aria-selected={index === currentIndex}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
