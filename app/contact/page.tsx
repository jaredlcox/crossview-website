import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionHeading } from "@/components/section-heading"
import { Card, CardContent } from "@/components/ui/card"
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
      <PageHero
        title="Contact Us"
        intro="We'd love to hear from you. Whether you have a question, need prayer, or just want to say hello, we're here for you."
      />

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <SectionHeading title="Send Us a Message" subtitle="Fill out the form below and we'll get back to you" />
              <Card className="border-slate-200/60 shadow-sm">
                <CardContent className="p-6 md:p-8">
                  <ContactForm />
                </CardContent>
              </Card>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-8">
              {/* Quick Contact */}
              <div>
                <h3 className="font-serif text-lg font-semibold text-[#1E3D42] mb-5">Quick Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-[#F1802C] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-[#1E3D42] text-sm">Phone</p>
                      <a
                        href="tel:4192807495"
                        className="text-sm text-muted-foreground hover:text-[#378AA4] transition-colors"
                      >
                        (419) 280-7495
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
                    <MapPin className="h-5 w-5 text-[#1E3D42] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-[#1E3D42] text-sm">Address</p>
                      <address className="text-sm text-muted-foreground not-italic">
                        5834 Monroe Street
                        <br />
                        Sylvania, OH 43560
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
                  <div>
                    <p className="font-medium text-[#1E3D42] text-sm">Sunday</p>
                    <p className="text-sm text-muted-foreground">Sunday Morning Service - 10:30 a.m.</p>
                  </div>
                  <div>
                    <p className="font-medium text-[#1E3D42] text-sm">Thursday</p>
                    <p className="text-sm text-muted-foreground">Evening Bible Study - 7:00 p.m.</p>
                  </div>
                </div>
              </div>

              {/* Prayer Request */}
              <div className="p-6 rounded-xl bg-slate-50/70">
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
