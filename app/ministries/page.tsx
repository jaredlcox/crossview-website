import type { Metadata } from "next"
import { ContactBlock } from "@/components/contact-block"
import { ministries } from "@/lib/ministries"
import { Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Ministries",
  description:
    "Discover the ministries at Crossview Church. Find your place to serve and grow in Crossview Kids, GriefShare, Men's Bible Study, and Ladies Brunch & Bible.",
}

// Filter to only the 4 ministries specified in requirements
const featuredMinistries = ministries.filter(
  (m) =>
    m.id === "crossview-kids" ||
    m.id === "griefshare" ||
    m.id === "mens-bible-study" ||
    m.id === "ladies-brunch"
)

export default function MinistriesPage() {
  return (
    <>
      {/* Page Title */}
      <section className="py-16 md:py-20 bg-white border-b border-slate-200/60">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#1E3D42] mb-4">MINISTRIES</h1>
            <p className="text-base text-muted-foreground leading-7">
              God has uniquely gifted each of us for service. Whether you're looking for a place to grow, connect, or serve, there's a ministry for you.
            </p>
          </div>
        </div>
      </section>

      {/* Ministry Sections - Stacked */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-16">
            {featuredMinistries.map((ministry) => (
              <div key={ministry.id} id={ministry.id} className="scroll-mt-20 border-t border-slate-200/60 pt-12 first:border-t-0 first:pt-0">
                <h2 className="font-serif text-2xl font-bold text-[#1E3D42] mb-4">{ministry.title}</h2>
                <p className="text-base text-muted-foreground leading-7 mb-4">{ministry.details}</p>
                {ministry.schedule && (
                  <p className="text-sm text-[#378AA4] font-medium mb-4">{ministry.schedule}</p>
                )}
                {(ministry.contact || ministry.id === "crossview-kids" || ministry.id === "griefshare") && (
                  <div className="mt-6 p-4 border border-slate-200 rounded-lg bg-slate-50/50">
                    <p className="text-sm font-medium text-[#1E3D42] mb-2">Contact Pastor Matt</p>
                    <a
                      href="tel:4192807495"
                      className="inline-flex items-center gap-2 text-sm text-[#378AA4] hover:text-[#1E3D42] transition-colors"
                    >
                      <Phone className="h-4 w-4" />
                      (419) 280-7495
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Block */}
      <ContactBlock />
    </>
  )
}
