export interface Event {
  id: string
  title: string
  date: string
  time: string
  description: string
  cta?: {
    label: string
    href: string
  }
  featured?: boolean
}

export const events: Event[] = [
  {
    id: "1",
    title: "Serve at Our Dinner",
    date: "Coming Soon",
    time: "TBA",
    description:
      "Every year we see lives changed as people experience the hope and love of Jesus—but it wouldn't be possible without an incredible team. This is your opportunity to be a part of serving and connecting with community. Sign up to serve at our next dinner event.",
    cta: {
      label: "Sign Up to Serve",
      href: "/contact",
    },
    featured: true,
  },
  {
    id: "2",
    title: "Men's Bible Study",
    date: "Every Wednesday",
    time: "6:30–7:30 a.m.",
    description: "Join us at Panera on Central Avenue for fellowship and Bible study. Call Pastor Matt for details.",
    cta: {
      label: "Get Details",
      href: "/contact",
    },
  },
  {
    id: "3",
    title: "Ladies Brunch & Bible",
    date: "Once a Month",
    time: "11:00 a.m.–12:30 p.m.",
    description:
      "A monthly gathering for women to connect over brunch and study Scripture. Nursery and child care provided.",
  },
  {
    id: "4",
    title: "GriefShare",
    date: "Coming Soon",
    time: "13-week program",
    description:
      "A program to help people move through grief and find encouragement and hope. Details will be posted soon.",
    cta: {
      label: "Learn More",
      href: "/contact",
    },
  },
]

export function getFeaturedEvent() {
  return events.find((event) => event.featured) || events[0]
}

export function getUpcomingEvents(limit?: number) {
  const upcoming = events.filter((event) => !event.featured)
  return limit ? upcoming.slice(0, limit) : upcoming
}
