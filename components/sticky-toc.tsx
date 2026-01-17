"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface TocItem {
  id: string
  title: string
}

interface StickyTocProps {
  items: TocItem[]
  className?: string
}

export function StickyToc({ items, className }: StickyTocProps) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id || "")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "-100px 0px -60% 0px" },
    )

    items.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [items])

  const activeItem = items.find((item) => item.id === activeId)

  return (
    <>
      {/* Desktop TOC */}
      <nav className={cn("hidden lg:block sticky top-20", className)} aria-label="Table of contents">
        <h3 className="font-serif text-base font-semibold text-[#1E3D42] mb-4">On This Page</h3>
        <ul className="space-y-1">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={cn(
                  "block px-3 py-2 text-sm transition-colors",
                  "hover:text-[#F1802C]",
                  activeId === item.id ? "text-[#378AA4] border-l-2 border-[#378AA4] -ml-px" : "text-muted-foreground",
                )}
                aria-current={activeId === item.id ? "location" : undefined}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile TOC Dropdown */}
      <div className="lg:hidden sticky top-14 z-40 bg-background py-3 -mx-4 px-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="w-full h-10 rounded-lg justify-between border-slate-200/60 text-[#1E3D42] bg-white"
            >
              <span className="truncate text-sm">{activeItem?.title || "Jump to section"}</span>
              <ChevronDown className="h-4 w-4 ml-2 shrink-0 text-muted-foreground" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[calc(100vw-2rem)]" align="start">
            {items.map((item) => (
              <DropdownMenuItem key={item.id} asChild>
                <a
                  href={`#${item.id}`}
                  className={cn("w-full", activeId === item.id ? "text-[#378AA4]" : "text-[#1E3D42]")}
                >
                  {item.title}
                </a>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  )
}
