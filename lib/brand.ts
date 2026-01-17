export const brand = {
  orange: "#F1802C",
  teal: "#378AA4",
  dark: "#1E3D42",
} as const

export type BrandColor = keyof typeof brand
