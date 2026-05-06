import { cookies } from "next/headers"
import type { Metadata } from "next"
import { COOKIE_NAME, COOKIE_VALUE } from "./cookie"
import { UnlockForm } from "./unlock-form"
import { ProtectedContent } from "./protected-content"

export const metadata: Metadata = {
  title: "Statement of Faith",
  description: "Crossview Church — internal document.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
}

export default async function StatementOfFaithPage() {
  const store = await cookies()
  const unlocked = store.get(COOKIE_NAME)?.value === COOKIE_VALUE

  return unlocked ? <ProtectedContent /> : <UnlockForm />
}
