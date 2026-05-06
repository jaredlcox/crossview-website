"use client"

import { useActionState } from "react"
import { Lock, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { verifyCode, type VerifyCodeState } from "./actions"

const initialState: VerifyCodeState = { ok: false }

export function UnlockForm() {
  const [state, formAction, isPending] = useActionState(verifyCode, initialState)

  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-white py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          <div className="rounded-2xl border border-slate-200/70 bg-white shadow-sm p-6 md:p-8">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1E3D42]/10 mb-4">
                <Lock className="h-6 w-6 text-[#1E3D42]" aria-hidden="true" />
              </div>
              <h1 className="font-serif text-2xl md:text-3xl font-bold text-[#1E3D42]">
                Restricted Page
              </h1>
              <div className="h-1 w-12 bg-[#F1802C] mx-auto my-3"></div>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                This page is reserved for internal church use. Please enter the access code provided
                to you to continue.
              </p>
            </div>

            <form action={formAction} className="mt-6 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="code">Access Code</Label>
                <Input
                  id="code"
                  name="code"
                  type="password"
                  inputMode="numeric"
                  autoComplete="one-time-code"
                  maxLength={32}
                  placeholder="Enter code"
                  aria-describedby={state.error ? "code-error" : undefined}
                  aria-invalid={state.error ? true : undefined}
                  className={state.error ? "border-destructive" : ""}
                  required
                />
              </div>

              {state.error && (
                <div
                  id="code-error"
                  role="alert"
                  className="flex items-center gap-2 text-sm text-destructive"
                >
                  <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <p>{state.error}</p>
                </div>
              )}

              <Button
                type="submit"
                className="w-full h-11 px-5 rounded-xl font-medium bg-[#F1802C] hover:opacity-90 text-white"
                disabled={isPending}
              >
                {isPending ? "Verifying..." : "Unlock"}
              </Button>
            </form>

            <p className="mt-6 text-xs text-muted-foreground text-center">
              If you believe you should have access, please contact the church office.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
