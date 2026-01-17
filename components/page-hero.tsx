import type React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface PageHeroProps {
  title: string
  intro?: string
  primaryCta?: {
    label: string
    href: string
  }
  secondaryCta?: {
    label: string
    href: string
  }
  className?: string
  children?: React.ReactNode
}

export function PageHero({ title, intro, primaryCta, secondaryCta, className, children }: PageHeroProps) {
  return (
    <section className={cn("relative bg-background py-16 md:py-24", className)}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-[#1E3D42] tracking-tight text-balance leading-tight">
            {title}
          </h1>
          {intro && (
            <p className="mt-6 text-base md:text-lg text-muted-foreground leading-7 text-pretty max-w-prose">{intro}</p>
          )}
          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-wrap items-center gap-6">
              {primaryCta && (
                <Button asChild className="h-11 px-6 rounded-xl font-medium bg-[#F1802C] hover:opacity-90 text-white">
                  <Link href={primaryCta.href}>{primaryCta.label}</Link>
                </Button>
              )}
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="text-sm font-medium text-[#378AA4] hover:text-[#1E3D42] transition-colors"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}
          {children}
        </div>
      </div>
    </section>
  )
}
