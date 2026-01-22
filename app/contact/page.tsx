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
    <>
      {/* Page Title */}
      <section className="py-16 md:py-20 bg-white border-b border-slate-200/60">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#1E3D42] mb-4">CONTACT</h1>
            <p className="text-base text-muted-foreground leading-7">
              We'd love to hear from you. Whether you have a question, need prayer, or just want to say hello, we're here for you.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 max-w-5xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-xl font-semibold text-[#1E3D42] mb-6">Send Us a Message</h2>
              <div className="p-6 border border-slate-200 rounded-lg bg-white">
                <ContactForm />
              </div>
            </div>

            {/* Contact Info & Prayer Request */}
            <div className="space-y-8">
              {/* Quick Contact */}
              <div>
                <h3 className="font-serif text-lg font-semibold text-[#1E3D42] mb-5">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-[#378AA4] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-[#1E3D42] text-sm">Phone</p>
                      <a
                        href="tel:4192807495"
                        className="text-sm text-muted-foreground hover:text-[#378AA4] transition-colors"
                      >
                        {siteConfig.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-[#378AA4] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-[#1E3D42] text-sm">Email</p>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="text-sm text-muted-foreground hover:text-[#378AA4] transition-colors"
                      >
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-[#378AA4] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-[#1E3D42] text-sm">Address</p>
                      <address className="text-sm text-muted-foreground not-italic">
                        {siteConfig.address.street}
                        <br />
                        {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                      </address>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Times */}
              <div>
                <h3 className="font-serif text-lg font-semibold text-[#1E3D42] mb-5 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-[#378AA4]" />
                  Service Times
                </h3>
                <div className="space-y-2">
                  {siteConfig.serviceTimes.map((service) => (
                    <div key={service.name}>
                      <p className="font-medium text-[#1E3D42] text-sm">{service.day}</p>
                      <p className="text-sm text-muted-foreground">{service.name} - {service.time}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Prayer Request */}
              <div className="p-6 border border-slate-200 rounded-lg bg-white">
                <h3 className="font-serif text-lg font-semibold text-[#1E3D42] mb-3">Prayer Request</h3>
                <p className="text-sm text-muted-foreground mb-4">Our prayer team would be honored to pray for you.</p>
                <PrayerRequestForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
