export interface Doctrine {
  id: string
  title: string
  summary: string
  content: string
  scriptures: string[]
}

export const beliefs: Doctrine[] = [
  {
    id: "god",
    title: "God (Trinity)",
    summary: "One God eternally existing in three persons.",
    content:
      "We believe in one God, eternally existing in three persons: Father, Son, and Holy Spirit. These three are co-eternal and co-equal in power, nature, and glory. God is the Creator, Sustainer, and Sovereign over all creation.",
    scriptures: ["Deuteronomy 6:4", "Matthew 28:19", "2 Corinthians 13:14", "Isaiah 44:6"],
  },
  {
    id: "bible",
    title: "The Bible",
    summary: "The 66 books of Scripture are inspired, inerrant, and preserved.",
    content:
      "We believe the Bible, consisting of the 66 books of the Old and New Testaments, is the verbally inspired Word of God. It is inerrant in the original manuscripts, infallible, and God-breathed. Scripture is the final authority for faith and practice, and God has preserved His Word throughout the ages.",
    scriptures: ["2 Timothy 3:16-17", "2 Peter 1:20-21", "Psalm 12:6-7", "Matthew 5:18"],
  },
  {
    id: "salvation",
    title: "Salvation",
    summary: "By grace through faith in the gospel of Jesus Christ.",
    content:
      "We believe salvation is by grace alone through faith alone in Jesus Christ alone. The gospel is the death, burial, and resurrection of Jesus Christ for our sins. When a person believes, they are born again, justified, and kept by God's power. Salvation cannot be earned by works and cannot be lost.",
    scriptures: ["Ephesians 2:8-9", "1 Corinthians 15:1-4", "John 3:16", "1 Peter 1:5", "Romans 8:38-39"],
  },
  {
    id: "jesus",
    title: "Jesus Christ",
    summary: "Fully God and fully man, our Savior and Lord.",
    content:
      "We believe Jesus Christ is the eternal Son of God, fully divine and fully human. He was born of a virgin, lived a sinless life, died on the cross as a substitutionary sacrifice for sin, rose bodily from the grave, ascended to heaven, and will return again.",
    scriptures: ["John 1:1,14", "Colossians 2:9", "Hebrews 4:15", "1 Corinthians 15:3-4", "Acts 1:11"],
  },
  {
    id: "holy-spirit",
    title: "The Holy Spirit",
    summary: "The third person of the Trinity who indwells believers.",
    content:
      "We believe the Holy Spirit is a divine person, equal with the Father and the Son. He convicts the world of sin, regenerates believers, indwells them permanently from the moment of salvation, seals them unto the day of redemption, and empowers them for godly living and service.",
    scriptures: ["John 16:8-11", "Titus 3:5", "1 Corinthians 6:19", "Ephesians 1:13-14", "Galatians 5:16"],
  },
  {
    id: "creation",
    title: "Creation",
    summary: "God created all things in six literal days.",
    content:
      "We believe God created the heavens and the earth and all that is in them in six literal, 24-hour days. God created man in His own image, distinct from all other creatures. We reject all forms of evolution as an explanation for the origin of life.",
    scriptures: ["Genesis 1:1", "Genesis 1:31", "Exodus 20:11", "Genesis 1:26-27"],
  },
  {
    id: "man",
    title: "Man",
    summary: "Created in God's image, yet fallen through sin.",
    content:
      "We believe man was created in the image of God but fell through sin. As a result, all people are sinners by nature and by choice, spiritually dead, and in need of salvation. Man is utterly incapable of saving himself.",
    scriptures: ["Genesis 1:27", "Romans 3:23", "Romans 5:12", "Ephesians 2:1-3", "Romans 3:10-12"],
  },
  {
    id: "body-of-christ",
    title: "The Body of Christ",
    summary: "All believers united in Christ; Israel remains distinct.",
    content:
      "We believe the Body of Christ, the Church, consists of all born-again believers from Pentecost to the Rapture, united in Christ regardless of denomination. We reject replacement theology and believe that God's promises to Israel remain valid and will be fulfilled.",
    scriptures: ["1 Corinthians 12:13", "Ephesians 1:22-23", "Romans 11:1-2", "Romans 11:25-29"],
  },
  {
    id: "local-church",
    title: "The Local Church",
    summary: "Autonomous assemblies with specific offices and ordinances.",
    content:
      "We believe the local church is an autonomous assembly of baptized believers who gather for worship, teaching, fellowship, and mission. The offices of the church are pastor/elder and deacon. The ordinances are believer's baptism by immersion and the Lord's Supper, both of which are symbolic and not salvific.",
    scriptures: ["Acts 2:41-42", "1 Timothy 3:1-13", "Matthew 28:19-20", "1 Corinthians 11:23-26"],
  },
  {
    id: "believers-walk",
    title: "The Believer's Walk",
    summary: "Living by grace, growing in holiness, separate from worldliness.",
    content:
      "We believe the Christian life is lived by grace through the power of the Holy Spirit. Believers are called to grow in sanctification, pursuing holiness and Christlikeness. We are to separate from worldliness, humanism, and apostasy while engaging the world with the gospel.",
    scriptures: ["Galatians 5:16", "2 Corinthians 6:14-17", "Romans 12:1-2", "1 John 2:15-17"],
  },
  {
    id: "devil",
    title: "The Devil",
    summary: "A real, personal being who opposes God and His people.",
    content:
      "We believe Satan is a real, personal being—a fallen angel who leads a host of demons. He is the enemy of God and His people, the deceiver of the world, and the accuser of believers. His ultimate doom in the Lake of Fire is certain.",
    scriptures: ["Isaiah 14:12-15", "Ezekiel 28:12-17", "1 Peter 5:8", "Revelation 20:10"],
  },
  {
    id: "coming-of-christ",
    title: "The Coming of Christ",
    summary: "Pre-tribulation rapture; distinct from the Second Coming.",
    content:
      "We believe in the imminent, pre-tribulation catching up (rapture) of the Church to meet the Lord in the air. This event is distinct from the Second Coming, when Christ returns to earth to establish His millennial kingdom. God will fulfill all His promises to Israel, and believers will reign with Christ.",
    scriptures: [
      "1 Thessalonians 4:16-17",
      "1 Corinthians 15:51-52",
      "Revelation 19:11-16",
      "Zechariah 14:4",
      "Romans 11:26",
    ],
  },
]
