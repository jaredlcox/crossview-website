"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import {
  COOKIE_NAME,
  COOKIE_VALUE,
  COOKIE_PATH,
  COOKIE_MAX_AGE_SECONDS,
} from "./cookie"

const ACCESS_CODE = process.env.STATEMENT_OF_FAITH_CODE ?? "1234"

export type VerifyCodeState = {
  ok: boolean
  error?: string
}

export async function verifyCode(
  _prev: VerifyCodeState | undefined,
  formData: FormData,
): Promise<VerifyCodeState> {
  const input = formData.get("code")?.toString().trim() ?? ""

  if (!input) {
    return { ok: false, error: "Please enter the access code." }
  }

  if (input !== ACCESS_CODE) {
    return { ok: false, error: "Incorrect code. Please try again." }
  }

  const store = await cookies()
  store.set(COOKIE_NAME, COOKIE_VALUE, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: COOKIE_MAX_AGE_SECONDS,
    path: COOKIE_PATH,
  })

  redirect("/internal/statement-of-faith")
}
