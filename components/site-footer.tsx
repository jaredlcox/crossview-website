import Link from "next/link"
import Image from "next/image"
import { Phone, MapPin, Clock, Mail, Facebook } from "lucide-react"
import { siteConfig, getFullAddress } from "@/lib/site"
import { navigation } from "@/lib/nav"

export function SiteFooter() {
  // Split navigation into chunks of 4 for column layout
  const chunkSize = 4
  const linkColumns = []
  for (let i = 0; i < navigation.length; i += chunkSize) {
    linkColumns.push(navigation.slice(i, i + chunkSize))
  }

  return (
    <footer className="bg-[#1E3D42] text-white" role="contentinfo">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo & About */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2" aria-label="Crossview Church Home">
              <Image
                src="/FINAL_LOGO.jpeg"
                alt="Crossview Church"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
              <span className="font-serif text-xl font-bold">Crossview</span>
            </Link>
            <p className="text-white/80 text-sm leading-relaxed">{siteConfig.tagline}</p>
          </div>

          {/* Service Times */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold text-[#F1802C]">Service Times</h3>
            <ul className="space-y-3">
              {siteConfig.serviceTimes.map((service) => (
                <li key={service.name} className="flex items-start gap-2 text-sm text-white/80">
                  <Clock className="h-4 w-4 mt-0.5 text-[#378AA4] shrink-0" aria-hidden="true" />
                  <div>
                    <span className="font-medium text-white">{service.day}</span>
                    <br />
                    {service.name} - {service.time}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold text-[#F1802C]">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/[^0-9]/g, "")}`}
                  className="flex items-center gap-2 text-sm text-white/80 hover:text-[#378AA4] transition-colors"
                >
                  <Phone className="h-4 w-4 text-[#378AA4] shrink-0" aria-hidden="true" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 text-sm text-white/80 hover:text-[#378AA4] transition-colors"
                >
                  <Mail className="h-4 w-4 text-[#378AA4] shrink-0" aria-hidden="true" />
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/80">
                <MapPin className="h-4 w-4 mt-0.5 text-[#378AA4] shrink-0" aria-hidden="true" />
                <address className="not-italic">{getFullAddress()}</address>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/groups/1231739738417968"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/80 hover:text-[#378AA4] transition-colors"
                  aria-label="Visit our Facebook group"
                >
                  <Facebook className="h-4 w-4 text-[#378AA4] shrink-0" aria-hidden="true" />
                  Facebook
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold text-[#F1802C]">Quick Links</h3>
            <div className="flex gap-6">
              {linkColumns.map((column, columnIndex) => (
                <ul key={columnIndex} className="space-y-2 flex-1">
                  {column.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="text-sm text-white/80 hover:text-[#378AA4] transition-colors">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
