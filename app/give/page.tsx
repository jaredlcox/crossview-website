import type { Metadata } from "next"
import { Monitor, Building2, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const GIVE_URL = "https://crossview.churchtrac.com/give"

export const metadata: Metadata = {
  title: "Give",
  description:
    "Support the ministry of Crossview Church through your generous giving. Give online securely or learn about other ways to give.",
}

export default function GivePage() {
  return (
    <>
      {/* Page header — matches About, Contact, etc. */}
      <section className="pt-12 md:pt-16 pb-4 md:pb-6 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#1E3D42] mb-3">
              Give
            </h1>
            <div className="h-1 w-16 bg-[#F1802C] mx-auto mb-4" />
            <p className="text-base text-muted-foreground leading-7">
              Here are some easy ways to support our church.
            </p>
          </div>
        </div>
      </section>

      {/* Giving options — card style matches Contact page */}
      <section className="pb-12 md:pb-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              {/* Give Online */}
              <div className="flex flex-col items-center text-center p-6 md:p-8 rounded-lg border border-slate-200 bg-white shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#378AA4]/10 text-[#378AA4] mb-4">
                  <Monitor className="h-6 w-6" aria-hidden />
                </div>
                <h2 className="font-serif text-xl md:text-2xl font-bold text-[#1E3D42] mb-2">
                  Give Online
                </h2>
                <p className="text-sm text-muted-foreground mb-6">
                  Safe and secure giving through our ChurchTrac giving page.
                </p>
                <Button
                  asChild
                  className="h-11 px-6 font-medium bg-[#F1802C] hover:bg-[#F1802C]/90 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                >
                  <a
                    href={GIVE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2"
                  >
                    Give online
                    <ExternalLink className="h-4 w-4 shrink-0" aria-hidden />
                  </a>
                </Button>
              </div>

              {/* In Person */}
              <div className="flex flex-col items-center text-center p-6 md:p-8 rounded-lg border border-slate-200 bg-white shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#378AA4]/10 text-[#378AA4] mb-4">
                  <Building2 className="h-6 w-6" aria-hidden />
                </div>
                <h2 className="font-serif text-xl md:text-2xl font-bold text-[#1E3D42] mb-2">
                  In Person
                </h2>
                <p className="text-sm text-muted-foreground">
                  During every service, you'll have an opportunity to give.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
