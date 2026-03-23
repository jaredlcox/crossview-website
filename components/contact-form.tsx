"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2, AlertCircle } from "lucide-react"

const FORMSUBMIT_URL = "https://formsubmit.co/ajax/info@crossviewchurch.church"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [errors, setErrors] = useState<Record<string, string>>({})

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)

    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const message = formData.get("message") as string

    const newErrors: Record<string, string> = {}
    if (!name.trim()) newErrors.name = "Name is required"
    if (!email.trim()) newErrors.email = "Email is required"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Please enter a valid email"
    if (!message.trim()) newErrors.message = "Message is required"

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setErrors({})
    setSubmitError(null)
    setIsSubmitting(true)

    try {
      const body = new FormData()
      body.append("name", name)
      body.append("email", email)
      body.append("message", message)
      body.append("_subject", "New Contact Form Submission — Crossview Church")
      body.append("_template", "table")
      body.append("_honeypot", formData.get("_honeypot") as string ?? "")

      const res = await fetch(FORMSUBMIT_URL, {
        method: "POST",
        headers: { Accept: "application/json" },
        body,
      })

      if (!res.ok) throw new Error("Submission failed")

      setIsSuccess(true)
      form.reset()
    } catch {
      setSubmitError("Something went wrong. Please try again or email us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-4">
          <CheckCircle2 className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="font-serif text-xl md:text-2xl font-bold text-[#1E3D42]">Message Sent!</h3>
        <p className="mt-2 text-base md:text-lg text-muted-foreground leading-relaxed">
          Thank you for reaching out. We'll get back to you soon.
        </p>
        <Button
          className="mt-6 h-11 px-5 rounded-xl font-medium bg-[#378AA4] hover:opacity-90 text-white"
          onClick={() => setIsSuccess(false)}
        >
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot field — hidden from real users, catches bots */}
      <input type="text" name="_honeypot" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" placeholder="Your name" className={errors.name ? "border-destructive" : ""} />
        {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="your@email.com"
          className={errors.email ? "border-destructive" : ""}
        />
        {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="How can we help you?"
          rows={5}
          className={errors.message ? "border-destructive" : ""}
        />
        {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
      </div>

      {submitError && (
        <div className="flex items-center gap-2 text-sm text-destructive">
          <AlertCircle className="h-4 w-4 shrink-0" />
          <p>{submitError}</p>
        </div>
      )}

      <Button
        type="submit"
        className="w-full h-11 px-5 rounded-xl font-medium bg-[#F1802C] hover:opacity-90 text-white"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}
