export interface NavItem {
  label: string
  href: string
}

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Beliefs", href: "/beliefs" },
  { label: "Ministries", href: "/ministries" },
  { label: "Give", href: "/give" },
  { label: "Location", href: "/location" },
  { label: "Contact", href: "/contact" },
]
