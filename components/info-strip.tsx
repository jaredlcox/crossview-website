import { Clock, MapPin, Phone } from "lucide-react"
import { siteConfig, getFullAddress } from "@/lib/site"

export function InfoStrip() {
  return (
    <section className="bg-[#1E3D42] text-white py-5" aria-label="Service times and contact information">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.serviceTimes.map((service) => (
            <div key={service.name} className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-[#F1802C] shrink-0" aria-hidden="true" />
              <div>
                <p className="font-medium text-sm">{service.name}</p>
                <p className="text-sm text-white/70">
                  {service.day} at {service.time}
                </p>
              </div>
            </div>
          ))}

          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-[#378AA4] shrink-0" aria-hidden="true" />
            <address className="text-sm text-white/70 not-italic">{getFullAddress()}</address>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-[#378AA4] shrink-0" aria-hidden="true" />
            <a
              href={`tel:${siteConfig.phone.replace(/[^0-9]/g, "")}`}
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
