export interface Ministry {
  id: string
  title: string
  description: string
  image: string
  details: string
  schedule?: string
  contact?: string
}

export const ministries: Ministry[] = [
  {
    id: "worship",
    title: "Worship & Music",
    description: "Leading our congregation in praise through music and song.",
    image: "/church-worship-band-music.jpg",
    details:
      "Our worship ministry creates an atmosphere for authentic encounter with God. We welcome musicians, vocalists, and technical volunteers who want to use their gifts to serve.",
    contact: "worship@crossviewchurch.org",
  },
  {
    id: "crossview-kids",
    title: "Crossview Kids",
    description: "Partnering with parents to help kids grow closer to God.",
    image: "/children-church-sunday-school.jpg",
    details:
      "Our goal is to partner with parents to move kids from where they are to where God wants them to be. We provide dedicated, safe, age-appropriate environments for preschool through third grade. Nursery care is provided for our Sunday morning service at 10:30 a.m.",
  },
  {
    id: "youth",
    title: "Youth Ministry",
    description: "Equipping teens to live out their faith in today's world.",
    image: "/teen-youth-group-church.jpg",
    details:
      "Our middle and high school ministry helps students build a foundation of faith through relevant teaching, community, and service opportunities.",
    contact: "youth@crossviewchurch.org",
  },
  {
    id: "small-groups",
    title: "Small Groups",
    description: "Building community through life-on-life discipleship.",
    image: "/small-group-bible-study-home.jpg",
    details:
      "Small groups meet throughout the week in homes across our community. It's where we grow deeper in faith and build authentic relationships.",
  },
  {
    id: "griefshare",
    title: "GriefShare: Navigating Through Loss & Grief",
    description: "Finding hope and encouragement through life's most difficult seasons.",
    image: "/people-praying-together-support.jpg",
    details:
      "A 13-week program to help people move through grief and find encouragement and hope. Details will be posted soon. For more information, call Pastor Matt at (419) 280-7495.",
    contact: "(419) 280-7495",
  },
  {
    id: "mens-bible-study",
    title: "Men's Bible Study",
    description: "Fellowship and Scripture study for men.",
    image: "/small-group-bible-study-home.jpg",
    details:
      "Join us Wednesday mornings from 6:30–7:30 a.m. at Panera on Central Avenue for fellowship and Bible study.",
    schedule: "Wednesdays, 6:30–7:30 a.m.",
    contact: "(419) 280-7495",
  },
  {
    id: "ladies-brunch",
    title: "Ladies Brunch & Bible",
    description: "Monthly gathering for women to connect over brunch and Scripture.",
    image: "/church-community-fellowship-gathering.jpg",
    details:
      "Once a month, women gather from 11:00 a.m.–12:30 p.m. for brunch, fellowship, and Bible study. Nursery and child care provided.",
    schedule: "Monthly, 11:00 a.m.–12:30 p.m.",
  },
  {
    id: "outreach",
    title: "Outreach & Missions",
    description: "Serving our local community and sharing hope globally.",
    image: "/community-service-volunteering-church.jpg",
    details:
      "From local food pantries to international partnerships, we believe the church exists to serve. Join us in making a difference.",
    contact: "outreach@crossviewchurch.org",
  },
  {
    id: "care",
    title: "Care Ministry",
    description: "Walking alongside those in need with compassion and support.",
    image: "/people-praying-together-support.jpg",
    details:
      "Our care team provides prayer support, hospital visits, meals for families in crisis, and connections to community resources.",
    contact: "care@crossviewchurch.org",
  },
]
