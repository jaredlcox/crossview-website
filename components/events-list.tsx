import Link from "next/link"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { type Event, getFeaturedEvent, getUpcomingEvents } from "@/lib/events"

export function FeaturedEventCard() {
  const event = getFeaturedEvent()
  if (!event) return null

  return (
    <Card className="border border-slate-200 rounded-lg bg-white">
      <CardHeader className="p-6 pb-0">
        <p className="text-xs font-medium text-[#F1802C] uppercase tracking-wide mb-3">Featured Event</p>
        <CardTitle className="font-serif text-xl text-[#1E3D42]">{event.title}</CardTitle>
      </CardHeader>
      <CardContent className="p-6 pt-4 space-y-4">
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4 text-[#378AA4]" />
            {event.date}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4 text-[#378AA4]" />
            {event.time}
          </span>
        </div>
        <p className="text-base text-muted-foreground leading-7">{event.description}</p>
      </CardContent>
      {event.cta && (
        <CardFooter className="p-6 pt-0">
          <Button asChild className="h-11 px-6 font-medium bg-[#F1802C] hover:opacity-90 text-white">
            <Link href={event.cta.href}>
              {event.cta.label}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      )}
    </Card>
  )
}

export function UpcomingEventsList({ limit = 3 }: { limit?: number }) {
  const events = getUpcomingEvents(limit)

  return (
    <div className="space-y-4">
      {events.map((event) => (
        <EventListItem key={event.id} event={event} />
      ))}
    </div>
  )
}

function EventListItem({ event }: { event: Event }) {
  return (
    <div className="flex gap-4 p-5 rounded-lg border border-slate-200 bg-white">
      <div className="flex flex-col items-center justify-center min-w-[50px] text-center">
        <Calendar className="h-5 w-5 text-[#378AA4] mb-1" />
        <span className="text-xs text-muted-foreground">{event.date.split(",")[0] || event.date}</span>
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-[#1E3D42]">{event.title}</h4>
        <p className="text-sm text-muted-foreground mt-1 line-clamp-2 leading-relaxed">{event.description}</p>
        <p className="text-xs text-muted-foreground mt-2">{event.time}</p>
      </div>
    </div>
  )
}
