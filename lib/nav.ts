export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Our Vision", href: "/about#vision" },
      { label: "Leadership", href: "/about#leadership" },
    ],
  },
  { label: "Beliefs", href: "/beliefs" },
  { label: "Ministries", href: "/ministries" },
  { label: "Give", href: "/give" },
  { label: "Location", href: "/location" },
  { label: "Contact", href: "/contact" },
]
