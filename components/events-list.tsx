import Link from "next/link"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { type Event, getFeaturedEvent, getUpcomingEvents } from "@/lib/events"

export function FeaturedEventCard() {
  const event = getFeaturedEvent()
  if (!event) return null

  return (
    <div className="relative h-full rounded-lg overflow-hidden bg-gradient-to-br from-[#378AA4] via-[#2a6b7f] to-[#1E3D42] p-6 shadow-lg">
      <div className="relative z-10 h-full flex flex-col">
        <div className="mb-3">
          <p className="text-xs font-medium text-[#F1802C] uppercase tracking-wide mb-2">Featured Event</p>
          <h3 className="font-serif text-xl md:text-2xl font-bold text-white mb-3">{event.title}</h3>
        </div>
        
        <div className="flex flex-wrap gap-3 mb-3 text-xs md:text-sm text-white/90">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5 text-[#F1802C]" />
            {event.date}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-[#F1802C]" />
            {event.time}
          </span>
        </div>
        
        <p className="text-sm md:text-base text-white/90 leading-relaxed mb-4 flex-1 line-clamp-4">{event.description}</p>
        
        {event.cta && (
          <div>
            <Button asChild className="h-10 px-5 text-sm font-medium bg-white text-[#1E3D42] hover:bg-white/90">
              <Link href={event.cta.href}>
                {event.cta.label}
                <ArrowRight className="ml-2 h-3.5 w-3.5" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

export function UpcomingEventsList({ limit = 3 }: { limit?: number }) {
  const events = getUpcomingEvents(limit)

  return (
    <div className="space-y-2">
      {events.map((event) => (
        <EventListItem key={event.id} event={event} />
      ))}
    </div>
  )
}

function EventListItem({ event }: { event: Event }) {
  return (
    <div className="group relative p-3 rounded-lg border border-slate-200/60 bg-white hover:shadow-md hover:border-[#378AA4]/40 transition-all duration-300">
      <div className="flex gap-2.5">
        <div className="flex flex-col items-center justify-start min-w-[40px] pt-0.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#378AA4]/10 group-hover:bg-[#378AA4]/20 transition-colors">
            <Calendar className="h-3.5 w-3.5 text-[#378AA4]" />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-serif text-sm font-semibold text-[#1E3D42] mb-1 group-hover:text-[#378AA4] transition-colors">
            {event.title}
          </h4>
          <p className="text-xs text-muted-foreground mb-1.5 line-clamp-2 leading-relaxed">{event.description}</p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="h-2.5 w-2.5 text-[#378AA4]" />
              {event.date.split(",")[0] || event.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-2.5 w-2.5 text-[#378AA4]" />
              {event.time}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
