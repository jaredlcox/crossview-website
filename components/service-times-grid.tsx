import Link from "next/link"
import { Button } from "@/components/ui/button"
import { siteConfig, getFullAddress } from "@/lib/site"
import { MapPin, Phone } from "lucide-react"

export function ServiceTimesGrid() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        {siteConfig.serviceTimes.map((service) => (
          <div
            key={service.name}
            className="p-6 border border-slate-200 rounded-lg bg-white"
          >
            <h3 className="font-serif text-lg font-semibold text-[#1E3D42] mb-1">
              {service.day}
            </h3>
            <p className="text-base text-[#1E3D42] mb-1">{service.name}</p>
            <p className="text-sm text-muted-foreground">{service.time}</p>
          </div>
        ))}
      </div>
      
      <div className="pt-4 space-y-3">
        <div className="flex items-start gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 mt-0.5 text-[#378AA4] shrink-0" />
          <address className="not-italic">{getFullAddress()}</address>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Phone className="h-4 w-4 text-[#378AA4] shrink-0" />
          <a
            href={`tel:${siteConfig.phone.replace(/[^0-9]/g, "")}`}
            className="hover:text-[#378AA4] transition-colors"
          >
            {siteConfig.phone}
          </a>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 pt-2">
        <Button
          asChild
          variant="outline"
          className="border-[#378AA4] text-[#378AA4] hover:bg-[#378AA4] hover:text-white"
        >
          <Link href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(getFullAddress())}`} target="_blank" rel="noopener noreferrer">
            Get Directions
          </Link>
        </Button>
        <Button
          asChild
          variant="outline"
          className="border-[#378AA4] text-[#378AA4] hover:bg-[#378AA4] hover:text-white"
        >
          <Link href="/contact">Contact</Link>
        </Button>
      </div>
    </div>
  )
}
