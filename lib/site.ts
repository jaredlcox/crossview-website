export const siteConfig = {
  name: "Crossview Church",
  tagline: "Christ… Connection… Community",
  address: {
    street: "5834 Monroe Street",
    city: "Sylvania",
    state: "OH",
    zip: "43560",
  },
  phone: "(419) 280-7495",
  email: "info@crossviewchurch.org",
  serviceTimes: [
    {
      day: "Sunday",
      time: "10:30 a.m.",
      name: "Sunday Morning Service",
    },
    {
      day: "Thursday",
      time: "7:00 p.m.",
      name: "Evening Bible Study",
    },
  ],
} as const

export function getFullAddress() {
  const { street, city, state, zip } = siteConfig.address
  return `${street}, ${city}, ${state} ${zip}`
}
