import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Give",
  description:
    "Support the ministry of Crossview Church through your generous giving. Give online securely or learn about other ways to give.",
}

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
      {/* Page Title */}
      <section className="py-16 md:py-20 bg-white border-b border-slate-200/60">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#1E3D42] mb-4">GIVE</h1>
            <p className="text-base text-muted-foreground leading-7 mb-8">
              Your generosity makes a difference. Every gift supports our mission to share the love of Christ in our community and beyond. We believe that giving is an act of worship — a response to God's incredible generosity toward us.
            </p>
            <Button asChild className="h-12 px-8 font-medium bg-[#F1802C] hover:opacity-90 text-white">
              <Link href="#">Give Online</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl font-bold text-[#1E3D42] mb-8">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="border border-slate-200 rounded-lg px-5 bg-white"
                >
                  <AccordionTrigger className="hover:no-underline py-4">
                    <span className="text-left font-medium text-[#1E3D42]">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-sm text-muted-foreground leading-7">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  )
}
