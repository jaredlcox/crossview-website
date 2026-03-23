"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Heart, AlertCircle } from "lucide-react"

const FORMSUBMIT_URL = "https://formsubmit.co/ajax/info@crossviewchurch.church"

export function PrayerRequestForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [isAnonymous, setIsAnonymous] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitError(null)
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    const prayer = formData.get("prayer") as string

    try {
      const body = new FormData()
      body.append("prayer_request", prayer)
      body.append("anonymous", isAnonymous ? "Yes" : "No")
      body.append("_subject", "New Prayer Request — Crossview Church")
      body.append("_template", "table")
      body.append("_honeypot", formData.get("_honeypot") as string ?? "")

      const res = await fetch(FORMSUBMIT_URL, {
        method: "POST",
        headers: { Accept: "application/json" },
        body,
      })

      if (!res.ok) throw new Error("Submission failed")

      setIsSuccess(true)
      setIsAnonymous(false)
      form.reset()
    } catch {
      setSubmitError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center py-6 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#378AA4]/10 mb-3">
          <Heart className="h-6 w-6 text-[#378AA4]" />
        </div>
        <h4 className="font-semibold text-[#1E3D42]">Request Received</h4>
        <p className="mt-1 text-sm leading-normal text-muted-foreground">Our prayer team will lift you up.</p>
        <Button variant="link" className="mt-2 text-[#378AA4]" onClick={() => setIsSuccess(false)}>
          Submit Another Request
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input type="text" name="_honeypot" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="space-y-2">
        <Label htmlFor="prayer">Your Prayer Request</Label>
        <Textarea id="prayer" name="prayer" placeholder="Share your prayer request..." rows={4} required />
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="anonymous"
          checked={isAnonymous}
          onCheckedChange={(checked) => setIsAnonymous(checked === true)}
        />
        <Label htmlFor="anonymous" className="text-sm text-muted-foreground">
          Keep my request anonymous
        </Label>
      </div>

      {submitError && (
        <div className="flex items-center gap-2 text-sm text-destructive">
          <AlertCircle className="h-4 w-4 shrink-0" />
          <p>{submitError}</p>
        </div>
      )}

      <Button
        type="submit"
        variant="outline"
        className="w-full h-11 px-5 rounded-xl font-medium border-[#378AA4] text-[#378AA4] hover:bg-[rgba(55,138,164,0.08)] bg-transparent"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Submit Prayer Request"}
      </Button>
    </form>
  )
}
