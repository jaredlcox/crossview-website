import type { Metadata } from "next"
import { Heart, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Give",
  description:
    "Support the ministry of Crossview Church through your generous giving. Give online securely or learn about other ways to give.",
}

export default function GivePage() {
  return (
    <>
      {/* Online Giving Coming Soon */}
      <section className="pt-16 md:pt-20 pb-12 md:pb-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center p-8 md:p-12 rounded-lg border-2 border-dashed border-slate-300 bg-slate-50/50">
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <Heart className="h-12 w-12 md:h-16 md:w-16 text-[#F1802C]" />
                  <Clock className="h-6 w-6 md:h-8 md:w-8 text-[#378AA4] absolute -bottom-1 -right-1 bg-white rounded-full p-1" />
                </div>
              </div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1E3D42] mb-3">
                Online Giving Coming Soon
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                We're working on bringing you a secure and convenient way to give online.
              </p>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
