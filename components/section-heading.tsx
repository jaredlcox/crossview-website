import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export function SectionHeading({ title, subtitle, centered = false, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-10 md:mb-14", centered && "text-center", className)}>
      <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1E3D42]">{title}</h2>
      {subtitle && (
        <p className="mt-3 text-base md:text-lg text-muted-foreground leading-7 max-w-prose mx-auto">{subtitle}</p>
      )}
    </div>
  )
}
