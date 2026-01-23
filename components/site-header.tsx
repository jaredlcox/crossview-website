"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { navigation } from "@/lib/nav"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [mobileOpenItems, setMobileOpenItems] = useState<Record<string, boolean>>({})

  const toggleMobileItem = (href: string) => {
    setMobileOpenItems((prev) => ({ ...prev, [href]: !prev[href] }))
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-200/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" aria-label="Crossview Church Home">
          <Image
            src="/crossview-logo.png"
            alt="Crossview Church"
            width={56}
            height={56}
            className="h-14 w-14 object-contain"
            priority
          />
          <span className="font-serif text-lg font-bold text-[#1E3D42]">Crossview</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {navigation.map((item) => {
            const isActive = pathname === item.href || (item.children && item.children.some((child) => pathname === child.href))
            
            if (item.children && item.children.length > 0) {
              return (
                <DropdownMenu key={item.href}>
                  <DropdownMenuTrigger
                    className={cn(
                      "px-3 py-2 text-sm font-medium transition-colors flex items-center gap-1",
                      "hover:text-[#F1802C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#378AA4] focus-visible:ring-offset-2 rounded",
                      isActive ? "text-[#F1802C]" : "text-[#1E3D42]/70",
                    )}
                  >
                    {item.label}
                    <ChevronDown className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="min-w-[180px]">
                    <DropdownMenuItem asChild>
                      <Link href={item.href} className="cursor-pointer">
                        Overview
                      </Link>
                    </DropdownMenuItem>
                    {item.children.map((child) => (
                      <DropdownMenuItem key={child.href} asChild>
                        <Link href={child.href} className="cursor-pointer">
                          {child.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              )
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 py-2 text-sm font-medium transition-colors",
                  "hover:text-[#F1802C]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#378AA4] focus-visible:ring-offset-2 rounded",
                  isActive ? "text-[#F1802C]" : "text-[#1E3D42]/70",
                )}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent 
            side="right" 
            className="w-[280px] sm:w-[320px] flex flex-col h-full overflow-hidden p-0"
          >
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            {/* Fixed Header */}
            <div className="flex items-center gap-2 px-6 pt-6 pb-4 border-b border-slate-200/60 shrink-0">
              <Image
                src="/crossview-logo.png"
                alt="Crossview Church"
                width={48}
                height={48}
                className="h-12 w-12 object-contain"
              />
              <span className="font-serif text-lg font-bold text-[#1E3D42]">Crossview</span>
            </div>
            {/* Scrollable Navigation */}
            <nav 
              className="flex flex-col gap-1 px-4 py-4 pb-6 overflow-y-auto flex-1 min-h-0" 
              aria-label="Mobile navigation"
            >
              {navigation.map((item) => {
                const isActive = pathname === item.href || (item.children && item.children.some((child) => pathname === child.href))
                const isMobileOpen = mobileOpenItems[item.href] || false

                if (item.children && item.children.length > 0) {
                  return (
                    <Collapsible key={item.href} open={isMobileOpen} onOpenChange={() => toggleMobileItem(item.href)}>
                      <CollapsibleTrigger
                        className={cn(
                          "w-full px-4 py-3.5 text-base font-medium rounded-lg transition-all flex items-center justify-between",
                          "hover:bg-slate-50 hover:text-[#F1802C] active:bg-slate-100",
                          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#378AA4] focus-visible:ring-offset-2",
                          isActive ? "text-[#F1802C] bg-slate-50" : "text-[#1E3D42]/80",
                        )}
                      >
                        {item.label}
                        <ChevronDown className={cn("h-4 w-4 transition-transform duration-200 shrink-0", isMobileOpen && "rotate-180")} />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="overflow-hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-top-2 data-[state=open]:slide-in-from-top-2">
                        <div className="pl-4 pt-1 pb-2 space-y-0.5">
                          <Link
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className={cn(
                              "block px-4 py-2.5 text-sm rounded-lg transition-colors",
                              "hover:bg-slate-50 active:bg-slate-100",
                              pathname === item.href 
                                ? "text-[#F1802C] font-medium bg-slate-50" 
                                : "text-[#1E3D42]/70 hover:text-[#F1802C]",
                            )}
                          >
                            Overview
                          </Link>
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setOpen(false)}
                              className={cn(
                                "block px-4 py-2.5 text-sm rounded-lg transition-colors",
                                "hover:bg-slate-50 active:bg-slate-100",
                                pathname === child.href 
                                  ? "text-[#F1802C] font-medium bg-slate-50" 
                                  : "text-[#1E3D42]/70 hover:text-[#F1802C]",
                              )}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  )
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "px-4 py-3.5 text-base font-medium rounded-lg transition-all",
                      "hover:bg-slate-50 hover:text-[#F1802C] active:bg-slate-100",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#378AA4] focus-visible:ring-offset-2",
                      isActive ? "text-[#F1802C] bg-slate-50" : "text-[#1E3D42]/80",
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
