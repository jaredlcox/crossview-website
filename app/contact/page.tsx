import type { Metadata } from "next"
import { ContactForm } from "@/components/contact-form"
import { PrayerRequestForm } from "@/components/prayer-request-form"
import { siteConfig } from "@/lib/site"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Crossview Church. Send us a message, submit a prayer request, or find our contact information.",
}

export default function ContactPage() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 max-w-6xl mx-auto">
          {/* Left Column - Contact Form */}
          <div className="space-y-8">
            <div>
              <h1 className="font-serif text-2xl md:text-3xl font-bold text-[#1E3D42] mb-2">Send Us a Message</h1>
              <p className="text-sm text-muted-foreground mb-6">We'd love to hear from you.</p>
              <div className="p-6 border border-slate-200 rounded-lg bg-white shadow-sm">
                <ContactForm />
              </div>
            </div>

            {/* Prayer Request Form */}
            <div>
              <h2 className="font-serif text-xl md:text-2xl font-bold text-[#1E3D42] mb-2">Prayer Request</h2>
              <p className="text-sm text-muted-foreground mb-4">Our prayer team would be honored to pray for you.</p>
              <div className="p-6 border border-slate-200 rounded-lg bg-white shadow-sm">
                <PrayerRequestForm />
              </div>
            </div>
          </div>

          {/* Right Column - Contact Information */}
          <div className="space-y-6">
            <div>
              <h2 className="font-serif text-xl md:text-2xl font-bold text-[#1E3D42] mb-6">Contact Information</h2>
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#378AA4]/10 shrink-0">
                    <Phone className="h-5 w-5 text-[#378AA4]" />
                  </div>
                  <div>
                    <p className="font-medium text-[#1E3D42] text-sm mb-1">Phone</p>
                    <a
                      href="tel:4192807495"
                      className="text-sm text-muted-foreground hover:text-[#378AA4] transition-colors"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#378AA4]/10 shrink-0">
                    <Mail className="h-5 w-5 text-[#378AA4]" />
                  </div>
                  <div>
                    <p className="font-medium text-[#1E3D42] text-sm mb-1">Email</p>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-sm text-muted-foreground hover:text-[#378AA4] transition-colors break-all"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#378AA4]/10 shrink-0">
                    <MapPin className="h-5 w-5 text-[#378AA4]" />
                  </div>
                  <div>
                    <p className="font-medium text-[#1E3D42] text-sm mb-1">Address</p>
                    <address className="text-sm text-muted-foreground not-italic leading-relaxed">
                      {siteConfig.address.street}
                      <br />
                      {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                    </address>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Times */}
            <div className="pt-4 border-t border-slate-200">
              <h3 className="font-serif text-lg font-semibold text-[#1E3D42] mb-4 flex items-center gap-2">
                <Clock className="h-5 w-5 text-[#378AA4]" />
                Service Times
              </h3>
              <div className="space-y-3">
                {siteConfig.serviceTimes.map((service) => (
                  <div key={service.name} className="flex items-start gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F1802C]/10 shrink-0 mt-0.5">
                      <Clock className="h-4 w-4 text-[#F1802C]" />
                    </div>
                    <div>
                      <p className="font-medium text-[#1E3D42] text-sm">{service.day}</p>
                      <p className="text-sm text-muted-foreground">{service.name} - {service.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
