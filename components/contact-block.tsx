import { ContactForm } from "@/components/contact-form"
import { siteConfig, getFullAddress } from "@/lib/site"
import { Phone, Mail, MapPin, Facebook } from "lucide-react"

export function ContactBlock() {
  return (
    <section className="py-16 md:py-20 bg-slate-50/50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1E3D42] mb-4 text-center">
            Connect With Us
          </h2>
          <p className="text-base text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
            We'd love to hear from you. Send us a message or reach out directly.
          </p>
          
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <ContactForm />
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-lg font-semibold text-[#1E3D42] mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-[#378AA4] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-[#1E3D42] text-sm">Phone</p>
                      <a
                        href={`tel:${siteConfig.phone.replace(/[^0-9]/g, "")}`}
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

                  <div className="flex items-start gap-3">
                    <Facebook className="h-5 w-5 text-[#378AA4] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-[#1E3D42] text-sm">Facebook</p>
                      <a
                        href="https://www.facebook.com/groups/1231739738417968"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-[#378AA4] transition-colors"
                      >
                        Join Our Group
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
