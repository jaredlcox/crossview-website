import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/page-hero"
import { SectionHeading } from "@/components/section-heading"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Building, Mail, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Give",
  description:
    "Support the ministry of Crossview Church through your generous giving. Give online securely or learn about other ways to give.",
}

const givingImpact = [
  {
    title: "Local Outreach",
    description: "Supporting families in need, food pantries, and community programs in our neighborhood.",
  },
  {
    title: "Children & Youth",
    description: "Providing safe, engaging programs that help young people grow in faith.",
  },
  {
    title: "Facility Care",
    description: "Maintaining our church home as a welcoming space for worship and community.",
  },
]

const faqs = [
  {
    id: "secure",
    question: "Is online giving secure?",
    answer:
      "Yes! We use bank-level encryption and partner with trusted payment processors to ensure your financial information is always protected.",
  },
  {
    id: "receipts",
    question: "Will I receive a giving receipt?",
    answer:
      "Absolutely. You'll receive an email confirmation after each gift. We also provide annual giving statements for tax purposes.",
  },
  {
    id: "funds",
    question: "Where does my money go?",
    answer:
      "Your generosity supports our church's mission: worship services, children and youth programs, community outreach, missions partnerships, and facility maintenance.",
  },
]

export default function GivePage() {
  return (
    <>
      <PageHero
        title="Generous Giving"
        intro="Your generosity makes a difference. Every gift supports our mission to share the love of Christ in our community and beyond."
      />

      {/* Trust Statement */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1E3D42] mb-6">Why We Give</h2>
            <p className="text-base md:text-lg text-muted-foreground leading-7 mb-8">
              We believe that giving is an act of worship — a response to God's incredible generosity toward us. When we
              give, we participate in God's work and experience the joy of making an eternal impact.
            </p>
            <Button asChild className="h-11 px-6 rounded-xl font-medium bg-[#F1802C] hover:opacity-90 text-white">
              <Link href="#">Give Online</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Giving Impact */}
      <section className="py-20 md:py-28 bg-slate-50/50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <SectionHeading title="Your Impact" subtitle="See how your generosity makes a difference" centered />
          <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
            {givingImpact.map((item) => (
              <div key={item.title} className="text-center">
                <h3 className="font-serif text-lg font-semibold text-[#1E3D42] mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Ways to Give */}
      <section className="py-20 md:py-28 bg-slate-50/50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <SectionHeading title="Other Ways to Give" subtitle="Choose the method that works best for you" centered />
          <div className="grid gap-6 md:grid-cols-2 max-w-2xl mx-auto">
            <Card className="border-slate-200/60 shadow-sm">
              <CardHeader className="p-6 pb-0">
                <div className="flex items-center gap-3">
                  <Building className="h-5 w-5 text-[#378AA4]" />
                  <CardTitle className="font-serif text-lg text-[#1E3D42]">In Person</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6 pt-3">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Give during our Sunday services using the offering baskets.
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-200/60 shadow-sm">
              <CardHeader className="p-6 pb-0">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-[#378AA4]" />
                  <CardTitle className="font-serif text-lg text-[#1E3D42]">By Mail</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6 pt-3">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Send a check to: Crossview Church, 5834 Monroe Street, Sylvania, OH 43560
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <SectionHeading title="Frequently Asked Questions" subtitle="Common questions about giving" centered />
          <div className="max-w-2xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="border border-slate-200/60 rounded-lg px-5 bg-white"
                >
                  <AccordionTrigger className="hover:no-underline py-4">
                    <span className="text-left font-medium text-[#1E3D42]">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-base text-muted-foreground leading-7">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="p-6 md:p-8 rounded-xl bg-slate-50/70">
              <h3 className="font-serif text-xl font-semibold text-[#1E3D42] mb-4">Our Commitment to You</h3>
              <div className="space-y-3">
                {[
                  "100% of your gift goes to ministry and mission",
                  "Annual financial reports available to all members",
                  "Accountable leadership and transparent practices",
                  "Secure handling of all financial information",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#378AA4] shrink-0" />
                    <span className="text-base text-muted-foreground leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
