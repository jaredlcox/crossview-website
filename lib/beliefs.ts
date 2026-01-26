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
    title: "God",
    summary: "One true and living God, existing as three persons.",
    content:
      "We believe in one true and living God, who exists as three persons—Father, Son, and Holy Spirit. Each person of the Trinity is fully God, equal in every divine quality, yet each has a unique role in the work of saving and redeeming man.",
    scriptures: [
      "Matthew 28:19",
      "2 Corinthians 13:14",
      "John 1:1",
      "Acts 5:3-4",
      "John 3:16-17",
      "Titus 3:5",
      "Deuteronomy 6:4",
      "Ephesians 4:4-6",
      "Colossians 2:9",
      "1 John 5:7",
    ],
  },
  {
    id: "bible",
    title: "The Bible",
    summary: "Sixty-six books, verbally inspired, inerrant, and preserved.",
    content:
      "We believe the Bible is a collection of sixty-six books from Genesis to Revelation. These books were written by men as God supernaturally inspired them. By inspiration we mean that the men were moved by the Holy Spirit in such a way that their writings were verbally inspired (every word was from God), inerrant (free from error), as no other writings have ever been or ever will be. We believe the Bible is the only complete and final revelation of the will of God to man, the true center of Christian union and the supreme standard by which all human conduct, creeds, and opinions should be tried. We believe that all scripture is given by inspiration of God and that God has promised to preserve His pure words.",
    scriptures: ["2 Timothy 3:16-17", "2 Peter 1:20-21", "Psalm 119:160", "Isaiah 40:8", "Psalms 12:6-7"],
  },
  {
    id: "salvation",
    title: "Salvation",
    summary: "Entirely by God's grace through faith in the gospel.",
    content:
      "We believe that salvation is entirely by God's grace through faith in the gospel—the death, burial, and resurrection of Jesus Christ. Jesus willingly took our place, dying for the sins of the guilty and bearing our sins on the cross. Through His death, He fully paid the penalty for our sins, and through His resurrection and ascension, He is now exalted at God's right hand in heaven. To be saved from hell, a person must be born again—a spiritual transformation of the soul and spirit that makes them a new creation in Christ. Those who are saved are kept by God's power and will receive eternal life.",
    scriptures: [
      "Ephesians 2:8-9",
      "Ephesians 1:13",
      "Ephesians 4:30",
      "Romans 5:8",
      "1 Corinthians 15:3-4",
      "John 3:3-8",
      "2 Corinthians 5:17",
      "John 10:28-29",
      "Acts 4:12",
      "Romans 1:16",
    ],
  },
  {
    id: "jesus",
    title: "Jesus Christ",
    summary: "Member of the triune Godhead, born of a virgin, died and rose again.",
    content:
      "We believe that Jesus Christ is a member of the triune Godhead. He was born of a virgin and was God manifest in the flesh. He lived a sinless life, laid down His life and shed His precious blood on the cross for our sins, and arose bodily the third day and is alive for evermore. He ascended back to Heaven and sits glorified at the right hand of the Father. He is the Head of the Church.",
    scriptures: [
      "John 1:1-3",
      "Colossians 2:9",
      "Isaiah 7:14",
      "Luke 1:26-38",
      "1 Timothy 3:16",
      "Hebrews 4:15",
      "Romans 5:8-9",
      "1 Corinthians 15:4",
      "Revelation 1:18",
      "Acts 1:9",
      "Colossians 1:18",
    ],
  },
  {
    id: "holy-spirit",
    title: "The Holy Spirit",
    summary: "A divine Person, equal with God the Father and God the Son.",
    content:
      "We believe that the Holy Spirit is a divine Person; equal with God the Father and God the Son. He seals, baptizes, endues, guides, convicts, comforts, teaches, witnesses, sanctifies, and helps the believer.",
    scriptures: [
      "John 14:16-17, 26",
      "John 16:7-14",
      "Acts 1:8",
      "1 Corinthians 12:13",
      "Romans 8:26-27",
      "Ephesians 1:13-14",
      "2 Thessalonians 2:13",
    ],
  },
  {
    id: "creation",
    title: "Creation",
    summary: "Literal account of creation in six days.",
    content:
      "We believe in the literal account of creation as given in Genesis. God created the world in six days and rested on the seventh. Humanity was made directly by God in His own image, not through evolution or gradual development. All of creation reflects God's design, glory, purpose, and power.",
    scriptures: ["Genesis 1-2", "John 1:1-14", "Colossians 1:15-18", "Revelation 4:11"],
  },
  {
    id: "man",
    title: "Man",
    summary: "Created in innocence, fell by choice, now sinners by nature.",
    content:
      "We believe that God created man in innocence, perfectly made and living in peace with God. However, by his own choice, man sinned and fell from this perfect state. As a result, all people are sinners by nature and by choice, and stand under God's judgment without excuse.",
    scriptures: ["Genesis 1:26-27", "Genesis 3:1-19", "Romans 3:10-12, 23", "Psalm 51:5", "Romans 5:12"],
  },
  {
    id: "body-of-christ",
    title: "Body of Christ",
    summary: "All believers baptized into one Body by the Holy Spirit.",
    content:
      "We believe that in this present age, the Holy Spirit baptizes every believer into the Body of Christ upon salvation. We believe that the church which is the Body of Christ was a great mystery that was hid from past ages until revealed by Christ through the apostle Paul. There is only one Body of which Christ is the Head. In the Body of Christ, there is neither Jew nor Gentile. We, therefore, reject the false teaching that the Body of Christ has replaced the nation of Israel in the purposes of God.",
    scriptures: ["1 Corinthians 12:13", "Galatians 3:26-28", "Ephesians 1:22-23", "Ephesians 3:1-12", "Ephesians 4:4", "Romans 11"],
  },
  {
    id: "local-church",
    title: "Local Church",
    summary: "Independent, autonomous assemblies with divine structure.",
    content:
      "We believe that Christians are to assemble locally in order to hear the word of God preached and taught and to serve the Lord together. The local church has a divine structure laid out especially in the Pastoral Epistles of the apostle Paul. We believe in the independence and autonomy of the local church: that each church is free to govern itself without ecclesiastical interference. The two offices of Pastor and Deacon are reserved for those who meet the biblical qualifications outlined in 1 Timothy 3:1–13, Titus 1:5–9, and Acts 6:3–4. Baptism and the Lord's Supper are administered as symbols of the gospel and can in no way impart salvation nor are needed for salvation",
    scriptures: [
      "Philippians 1:1",
      "Titus 1:5",
      "1 Corinthians 4:16-17",
      "1 Corinthians 11:1",
      "1 Timothy 3",
      "1 Corinthians 1:17",
      "1 Corinthians 11:23-25",
      "Ephesians 2:8-9",
    ],
  },
  {
    id: "believers-walk",
    title: "Believer's Walk",
    summary: "Living by grace, not law, with practical sanctification.",
    content:
      "We believe that the Body of Christ is not under the Law but Grace. This means that the core operating principle in the believer's relationship with God and others is grace. By reason of Christ's victory over sin and by His indwelling Spirit, all saved people should experience deliverance from the power of sin in their daily lives. All believers still possess the old man (the flesh) and therefore the ability to sin. We do not believe that the sin nature is eradicated in this life. We believe in the practical sanctification of all members of the Body of Christ and that all believers should glorify God in all of their thoughts, words, and deeds.",
    scriptures: [
      "Romans 6:14",
      "Galatians 5:15-26",
      "1 Corinthians 10:31",
      "2 Corinthians 6:14-18",
      "2 Timothy 2:15-26",
      "Titus 2:11-15",
    ],
  },
  {
    id: "devil",
    title: "The Devil",
    summary: "A fallen angel, enemy of God, with certain defeat.",
    content:
      "We believe that the Devil (Satan) was once a holy, and enjoyed honor in heaven, but he became proud and tried to be like God. Because of his rebellion, he fell and led many angels with him. Today, he is the enemy of God and humanity, the great tempter, the accuser of believers, and the source of all false religions. However, his defeat is certain—Jesus Christ will triumph over him, and he and his angels will face eternal judgment in a lake of fire.",
    scriptures: [
      "Isaiah 14:12-15",
      "Ezekiel 28:14-17",
      "1 Peter 5:8",
      "Revelation 20:1-3, 10",
      "2 Corinthians 4:3-4",
      "2 Corinthians 11:3-4, 13-15",
      "Ephesians 2:2",
      "Ephesians 6:11-12",
    ],
  },
  {
    id: "coming-of-christ",
    title: "Coming of Christ",
    summary: "Secret rapture before tribulation, distinct from Second Coming.",
    content:
      "We believe that Christ is coming secretly before the tribulation period for the members of His Body. The dead in Christ will rise first and those that are alive and remain will be caught up to meet the Lord in the air. We believe that the blessed hope of the Body of Christ was a mystery revealed through Paul and is a distinct and separate event from the prophesied Second Coming of Christ back to the earth in judgment at the end of the prophesied seventieth week of Daniel in order to save Israel and set up His righteous kingdom in the earth. We believe that God will literally fulfill His promises to Israel.",
    scriptures: [
      "1 Thessalonians 4:13-18",
      "Titus 2:13",
      "1 Corinthians 15:51",
      "Daniel 9:24-27",
      "Revelation 19:11-20:6",
      "Romans 11:25-29",
    ],
  },
]
