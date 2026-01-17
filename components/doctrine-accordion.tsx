"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import type { Doctrine } from "@/lib/beliefs"

interface DoctrineAccordionProps {
  doctrines: Doctrine[]
}

export function DoctrineAccordion({ doctrines }: DoctrineAccordionProps) {
  return (
    <Accordion type="single" collapsible className="space-y-3">
      {doctrines.map((doctrine) => (
        <AccordionItem
          key={doctrine.id}
          value={doctrine.id}
          id={doctrine.id}
          className="border border-slate-200/60 rounded-lg px-5 scroll-mt-24"
        >
          <AccordionTrigger className="hover:no-underline py-5">
            <div className="text-left">
              <h3 className="font-serif text-lg font-semibold text-[#1E3D42]">{doctrine.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{doctrine.summary}</p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pb-5">
            <div className="space-y-4">
              <p className="text-base text-muted-foreground leading-7">{doctrine.content}</p>
              <div className="flex flex-wrap gap-2">
                {doctrine.scriptures.map((scripture) => (
                  <span
                    key={scripture}
                    className="inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-full bg-[#F1802C]/10 text-[#F1802C]"
                  >
                    {scripture}
                  </span>
                ))}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
