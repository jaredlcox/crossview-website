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
  {
    label: "Ministries",
    href: "/ministries",
    children: [
      { label: "Crossview Kids", href: "/ministries#crossview-kids" },
      { label: "GriefShare", href: "/ministries#griefshare" },
      { label: "Men's Bible Study", href: "/ministries#mens-bible-study" },
      { label: "Ladies Brunch & Bible", href: "/ministries#ladies-brunch" },
    ],
  },
  { label: "Give", href: "/give" },
  { label: "Location", href: "/location" },
  { label: "Contact", href: "/contact" },
]
