/**
 * Constants describing the access cookie for /internal/statement-of-faith.
 * Kept in a non-"use server" module so they can be safely imported from both
 * the server action and the page route.
 */
export const COOKIE_NAME = "sof_unlocked"
export const COOKIE_VALUE = "v1"
export const COOKIE_PATH = "/internal"
export const COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 30
