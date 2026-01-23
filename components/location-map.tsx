import { siteConfig } from "@/lib/site"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface LocationMapProps {
  className?: string
}

export function LocationMap({ className }: LocationMapProps) {
  // Google Maps Embed URL (no API key needed - uses search-based embed)
  // Using the specific street address to ensure proper centering
  const mapAddress = `${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.zip}`
  const mapSearchUrl = `https://www.google.com/maps?q=${encodeURIComponent(mapAddress)}&output=embed&zoom=15`

  return (
    <div className={className}>
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Column - Location Info */}
        <div className="space-y-6">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E3D42] mb-4">
              Our Location
            </h2>
            <div className="h-1 w-16 bg-[#F1802C] mb-6"></div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              We're located at <strong className="text-[#1E3D42]">{siteConfig.address.street}</strong> in{" "}
              <strong className="text-[#1E3D42]">{siteConfig.address.city}, {siteConfig.address.state}</strong>.{" "}
              If you are a part of our community or just visiting the area, please stop by. We love meeting new people and we would love to meet you!
            </p>
          </div>
          <div className="pt-2">
            <Button
              asChild
              variant="outline"
              className="border-2 border-[#378AA4] text-[#378AA4] hover:bg-[#378AA4] hover:text-white transition-all duration-200 h-11 px-6 font-medium"
            >
              <Link
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapAddress)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions
              </Link>
            </Button>
          </div>
        </div>

        {/* Right Column - Embedded Map */}
        <div>
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg border border-slate-200">
            <iframe
              src={mapSearchUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
              title="Crossview Church Location"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
