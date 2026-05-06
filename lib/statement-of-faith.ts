export interface SofItem {
  label?: string
  text: string
  scriptures?: string[]
  children?: SofItem[]
}

export interface SofSection {
  id: string
  number: string
  title: string
  paragraphs?: string[]
  items?: SofItem[]
}

export interface SofArticle {
  id: string
  number: string
  title: string
  intro?: string
  sections: SofSection[]
}

export const statementOfFaith: SofArticle[] = [
  {
    id: "article-1",
    number: "Article 1",
    title: "Purpose",
    intro:
      "This congregation of believers shall be known as Crossview Church. It is incorporated as a non-profit corporation under the laws of the state of Ohio.",
    sections: [
      {
        id: "1.01",
        number: "Section 1.01",
        title: "Purpose",
        paragraphs: [
          "This congregation is organized as a church exclusively for charitable, religious, and educational purposes within the meaning of Section 501(c)(3) of the Internal Revenue Code of 1986 (or the corresponding provision of any future United States Revenue Law), for such purposes including, but not limited to, the proclaiming of the Gospel of the Lord Jesus Christ; the establishing and maintaining of religious worship; the educating of believers in a manner consistent with the requirements of Holy Scripture; and the maintaining of missionary activities in the United States and any foreign country.",
          "These policies and procedures are intended not to hinder the work of the ministry, but to preserve the unity, purity, accountability, and mission of the church, ensuring that all things are done decently and in order in a manner that honors the Lord Jesus Christ.",
        ],
      },
    ],
  },
  {
    id: "article-2",
    number: "Article 2",
    title: "Statement of Faith and Agreement",
    sections: [
      {
        id: "2.01",
        number: "Section 2.01",
        title: "Statement of Faith",
        items: [
          {
            label: "(A)",
            text: "The Holy Scriptures. We believe the Old and New Testament Scriptures are the inspired Word of God. The Scriptures are inerrant, infallible and God-breathed and are, therefore, the final authority for faith and life. The sixty-six books of the Old and New Testaments are the complete and divine revelation of God to Man. The Scriptures shall be interpreted according to their normal grammatical-historical meaning and in proper context, allowing Scripture to be interpreted by Scripture.",
          },
          {
            label: "(B)",
            text: "Dispensationalism. We believe that the Scriptures interpreted in their natural, literal sense reveal divinely determined dispensations or rules of life that define man's responsibilities in successive ages. These dispensations are divinely ordered stewardships by which God directs man according to His purpose. Three of these dispensations—the law, the church, and the future earthly kingdom—are the subjects of detailed revelation in Scripture.",
            scriptures: [
              "Gen. 1:28",
              "1 Cor. 9:17",
              "2 Cor. 3:9-18",
              "Gal. 3:13-25",
              "Eph. 1:10",
              "Eph. 3:2-10",
              "Col. 1:24-25, 27",
              "Rev. 20:2-6",
            ],
          },
          {
            label: "(C)",
            text: "The Godhead. We believe in one triune God, eternally existing in three persons—Father, Son, and Holy Spirit—each co-eternal in being, co-identical in nature, co-equal in power and glory, and having the same attributes and perfections.",
            scriptures: ["Deut. 6:4", "Matt. 28:19", "John 14:10, 26", "2 Cor. 13:14"],
          },
          {
            label: "(D)",
            text: "The Person and Work of Christ.",
            children: [
              {
                label: "(1)",
                text: "We believe that the Lord Jesus Christ, the eternal Son of God, became man, without ceasing to be God, having been conceived by the Holy Spirit and born of the virgin Mary, in order that He might reveal God and redeem sinful men.",
                scriptures: [
                  "Isa. 7:14",
                  "Isa. 9:6",
                  "Luke 1:35",
                  "John 1:1-2, 14",
                  "2 Cor. 5:19-21",
                  "Gal. 4:4-5",
                  "Phil. 2:5-8",
                ],
              },
              {
                label: "(2)",
                text: "We believe that the Lord Jesus Christ accomplished our redemption through His death on the cross as a representative, vicarious, substitutionary sacrifice, and that our justification is made sure by His literal, physical resurrection from the dead.",
                scriptures: [
                  "Acts 2:18-36",
                  "Rom. 3:24-25",
                  "Eph. 1:7",
                  "1 Pet. 2:24",
                  "1 Peter 1:3-5",
                ],
              },
              {
                label: "(3)",
                text: "We believe that the Lord Jesus Christ ascended to Heaven and is now exalted at the right hand of God where, as our High Priest, He fulfills the ministry of Representative, Intercessor, and Advocate.",
                scriptures: [
                  "Acts 1:9-10",
                  "Rom. 8:34",
                  "Heb. 9:24",
                  "Heb. 7:25",
                  "1 John 2:1-2",
                ],
              },
            ],
          },
          {
            label: "(E)",
            text: "The Person and Work of the Holy Spirit.",
            children: [
              {
                label: "(1)",
                text: "We believe that the Holy Spirit is a person who convicts the world of sin, of righteousness, and of judgment; and, that He is the Supernatural Agent in regeneration, baptizing all believers into the body of Christ, indwelling and sealing them unto the day of redemption.",
                scriptures: [
                  "John 16:8-11",
                  "Rom. 8:9",
                  "1 Cor. 12:12-14",
                  "2 Cor. 3:6",
                  "Eph. 1:13-14",
                ],
              },
              {
                label: "(2)",
                text: "We believe that He is the divine Teacher who assists believers to understand and appropriate the Scriptures and that it is the privilege and duty of all the saved to be filled with the Spirit.",
                scriptures: ["Eph. 1:17-18", "Eph. 5:18", "1 John 2:20, 27"],
              },
              {
                label: "(3)",
                text: "We believe that God is sovereign in the bestowal of spiritual gifts to every believer. God uniquely uses evangelists, pastors, and teachers to equip believers in the church to do the work of the ministry.",
                scriptures: ["Rom. 12:3-8", "1 Cor. 12:4-11, 28", "Eph. 4:7-12"],
              },
            ],
          },
          {
            label: "(F)",
            text: "The Total Depravity of Man. We believe that man was created in the image and likeness of God; but that in Adam's sin the human race fell, inherited a sinful nature, and became alienated from God. Man is totally depraved and, of himself, utterly unable to remedy his lost condition.",
            scriptures: [
              "Gen. 1:26-27",
              "Rom. 3:22-23",
              "Rom. 5:12",
              "Rom. 6:23",
              "Eph. 2:1-3",
              "Eph. 4:17-19",
            ],
          },
          {
            label: "(G)",
            text: "Salvation. We believe that salvation is the gift of God brought to man by grace and received by personal faith in the Lord Jesus Christ, Whose precious blood was shed on Calvary for the forgiveness of our sins. We believe that all sins, except blasphemy of the Holy Spirit, are forgivable.",
            scriptures: [
              "John 1:12",
              "Eph. 1:7",
              "Eph. 2:8-10",
              "1 Pet. 1:18-19",
              "1 John 1:9",
            ],
          },
          {
            label: "(H)",
            text: "The Eternal Security and Assurance of Believers.",
            children: [
              {
                label: "(1)",
                text: "We believe that once a person is saved, he is kept by God's power and remains secure in Christ forever.",
                scriptures: [
                  "John 6:37-40",
                  "John 10:27-30",
                  "Rom. 8:1, 38-39",
                  "1 Cor. 1:4-8",
                  "1 Pet. 1:4-5",
                ],
              },
              {
                label: "(2)",
                text: "We believe that it is the privilege of believers to rejoice in the assurance of their salvation through the testimony of God's Word, which, however, clearly forbids the use of Christian liberty as an occasion to the flesh.",
                scriptures: ["Rom. 13:13-14", "Gal. 5:13", "Titus 2:11-15"],
              },
            ],
          },
          {
            label: "(I)",
            text: "The Church",
            children: [
              {
                label: "(1)",
                text: "We believe that the church, which is His spiritual body, is solely made up of born-again believers.",
                scriptures: ["1 Cor. 12:12-14", "2 Cor. 11:2", "Eph. 1:22-23", "Eph. 5:25-27"],
              },
              {
                label: "(2)",
                text: "We believe that the establishment and continuance of local churches is clearly taught and defined in the New Testament.",
                scriptures: ["Acts 14:27", "Acts 20:17, 28-32", "1 Tim. 3:1-13", "Titus 1:5-11"],
              },
              {
                label: "(3)",
                text: "We believe in the autonomy of the local church free of any external authority or controls, and any affiliations, societies, organizations, associations, or agencies this church affiliates with to further the objectives stated in the Purpose Statement are not authoritative in matters of church practice or belief.",
                scriptures: [
                  "Acts 13:1-4",
                  "Acts 15:19-31",
                  "Acts 20:28",
                  "Rom. 16:1, 4",
                  "1 Cor. 3:9, 16",
                  "1 Cor. 5:4-7, 13",
                  "1 Pet. 5:1-4",
                ],
              },
              {
                label: "(4)",
                text: "We recognize water baptism by immersion and the Lord's Supper as symbolic in nature and not necessary for salvation.",
                scriptures: ["Matt. 28:19-20", "Acts 8:36-38", "1 Cor. 11:23-26"],
              },
            ],
          },
          {
            label: "(J)",
            text: "Separation. We believe that believers should maintain a godly testimony and live in such a way that their lives do not bring reproach upon their Savior. We seek to live in holiness and to guard against sin and false doctrine that would undermine the truth of Biblical Christianity.",
            scriptures: ["Rom. 12:1-2", "1 John 2:15-17", "2 John 9-11"],
          },
          {
            label: "(K)",
            text: "The Second Coming of Christ. We believe in that blessed hope, the personal, imminent return of Christ, Who will rapture His church prior to the seven-year tribulation period. At the end of the Tribulation, Christ will personally and visibly return with His saints, to establish His earthly Messianic Kingdom, which was promised to the nation of Israel.",
            scriptures: [
              "Ps. 89:3-4",
              "Dan. 2:31-45",
              "Zech. 14:4-11",
              "1 Thess. 1:10",
              "1 Thess. 4:13-18",
              "Titus 2:13",
              "Rev. 3:10",
              "Rev. 19:11-16",
              "Rev. 20:1-6",
            ],
          },
          {
            label: "(L)",
            text: "The Eternal State.",
            children: [
              {
                label: "(1)",
                text: "We believe in the bodily resurrection of all men, the saved to eternal life, and the unsaved to judgment and everlasting punishment.",
                scriptures: ["Matt. 25:46", "John 5:28-29", "John 11:25-26", "Rev. 20:5-6, 12-13"],
              },
              {
                label: "(2)",
                text: "We believe that the souls of the redeemed are, at death, absent from the body and present with the Lord, where in conscious bliss they await the first resurrection, when spirit, soul, and body are reunited to be glorified forever with the Lord.",
                scriptures: ["2 Cor. 5:8", "Phil. 1:23", "Phil. 3:21", "1 Thess. 4:16-17"],
              },
              {
                label: "(3)",
                text: "We believe that the souls of unbelievers remain, after death, in conscious punishment and torment until the second resurrection, when with soul and body reunited, they shall appear at the Great White Throne Judgment, and shall be cast into the Lake of Fire, not to be annihilated, but to suffer everlasting conscious punishment and torment.",
                scriptures: [
                  "Matt. 25:41-46",
                  "Mark 9:43-48",
                  "Luke 16:19-26",
                  "2 Thess. 1:7-9",
                  "Jude 6-7",
                  "Rev. 20:11-15",
                ],
              },
            ],
          },
          {
            label: "(M)",
            text: "The Personality of Satan. We believe that Satan is a person, the author of sin and the cause of the Fall of Man; that he is the open and declared enemy of God and man; and that he shall be eternally punished in the Lake of Fire.",
            scriptures: ["Job 1:6-7", "Isa. 14:12-17", "Matt. 4:2-11", "Matt. 25:41", "Rev. 20:10"],
          },
          {
            label: "(N)",
            text: "Creation. We believe that the Genesis account of creation is neither allegory nor myth, but a literal, historical account of God's creation of the universe in six literal, 24-hour periods. We reject evolution, the Day-Age Theory, and Theistic Evolution as unscriptural theories of origin.",
            scriptures: ["Gen. 1-2", "Ex. 20:11"],
          },
          {
            label: "(O)",
            text: "Civil Government. We believe that God has ordained and created all authority consisting of three basic institutions: 1) the home, 2) the church, and 3) the state. Every person is subject to these authorities, but all (including the authorities themselves) are answerable to God and governed by His Word. God has given each institution specific Biblical responsibilities and balanced those responsibilities with the understanding that no institution has the right to infringe upon the other. The home, the church, and the state are equal and sovereign in their respective Biblically assigned spheres of responsibility under God. We believe that we must obey the state unless it requires us to act contrary to our faith at which time we must obey God rather than the state.",
            scriptures: [
              "Matt. 22:15-22",
              "Acts 5:29",
              "Rom. 13:1-7",
              "Eph. 5:22-24",
              "Titus 3:1-2",
              "Heb. 13:17",
              "1 Pet. 2:13-14",
            ],
          },
          {
            label: "(P)",
            text: "Human Sexuality.",
            children: [
              {
                label: "(1)",
                text: "We believe that God has commanded that no intimate sexual activity be engaged in outside of a marriage between one naturally-born man and one naturally-born woman. We believe that any form of homosexuality, lesbianism, bisexuality, bestiality, incest, fornication, adultery, and pornography are sinful perversions of God's gift of sex. We believe that God has created each person as male or female and that this design is not to be altered, but received with gratitude in accordance with His created order.",
                scriptures: [
                  "Gen. 2:24",
                  "Gen. 19:5, 13",
                  "Gen. 26:8-9",
                  "Lev. 18:1-30",
                  "Rom. 1:26-29",
                  "1 Cor. 5:1",
                  "1 Cor. 6:9",
                  "1 Thess. 4:1-8",
                  "Heb. 13:4",
                ],
              },
              {
                label: "(2)",
                text: "We believe that the only Scriptural marriage is the joining of one naturally-born man and one naturally-born woman.",
                scriptures: ["Gen. 2:24", "Rom. 7:2"],
              },
            ],
          },
          {
            label: "(Q)",
            text: "Family Relationships",
            children: [
              {
                label: "(1)",
                text: "We believe that men and women are spiritually equal in position before God but that God has ordained distinct and separate spiritual functions for men and women in the home and the church. The husband is the head of his wife, and men are to be the pastors and deacons of the church. Accordingly, only men are eligible for licensure and ordination by the church.",
                scriptures: ["Gal. 3:28", "Col. 3:18", "1 Tim. 2:8-15", "1 Tim. 3:4-5, 12"],
              },
              {
                label: "(2)",
                text: "We believe that God has ordained the family as the foundational institution of human society. A husband and wife are to love each other. Children are an heritage from the Lord and should be cherished and nourished. Parents are responsible for teaching their children spiritual and moral values through consistent lifestyle example.",
                scriptures: ["Gen. 1:26-28", "Ex. 20:12", "Eph. 5:21-33", "Eph. 6:1-4"],
              },
            ],
          },
          {
            label: "(R)",
            text: "Divorce and Remarriage. We believe that God's design for marriage is a lifelong covenant between a husband and wife, and that divorce, while addressed in Scripture under certain circumstances, is never God's ideal.",
            scriptures: ["Matt. 19:3-12", "Rom. 7:1-3", "1 Cor. 7:15"],
          },
          {
            label: "(S)",
            text: "Abortion. We believe that human life begins at conception and that the unborn child is a living human being. Abortion constitutes the unjustified, unexcused taking of unborn human life. We reject any teaching that abortions due to rape, incest, birth defects, gender selection, birth or population control, or the mental well-being of the mother are acceptable.",
            scriptures: [
              "Job 3:16",
              "Ps. 51:5",
              "Ps. 139:14-16",
              "Isa. 44:24",
              "Isa. 49:1, 5",
              "Jer. 1:5",
              "Jer. 20:15-18",
              "Luke 1:44",
            ],
          },
          {
            label: "(T)",
            text: "Love. We believe that we should demonstrate love for others, not only toward fellow believers, but also toward those who are not believers, those who oppose us, and those who engage in sinful actions. We are to deal with those who oppose us graciously, gently, patiently, and humbly. God forbids the stirring up of strife, the taking of revenge, or the threat or use of violence as a means of resolving personal conflict or obtaining personal justice. Although God commands us to abhor sinful actions, we are to love and pray for any person who engages in such sinful actions.",
            scriptures: [
              "Lev. 19:18",
              "Matt. 5:44-48",
              "Luke 6:31",
              "John 13:34-35",
              "Rom. 12:9-10, 17-21",
              "Rom. 13:8-10",
              "Phil. 2:2-4",
              "2 Tim. 2:24-26",
              "Titus 3:2",
              "1 John 3:17-18",
            ],
          },
          {
            label: "(U)",
            text: "Lawsuits Between Believers. We believe that Christians should not bring civil lawsuits against other Christians or the church to resolve personal disputes. We believe the church possesses all the resources necessary to resolve personal disputes between members. We do believe, however, that a Christian may seek compensation for injuries from another Christian's insurance company as long as the claim is pursued without malice or slander.",
            scriptures: ["1 Cor. 6:1-8", "Eph. 4:31-32", "Matt. 18:15-17"],
          },
          {
            label: "(V)",
            text: "Missions. We believe that God has given the church a great commission to proclaim the Gospel to all nations so that there might be a great multitude from every nation, tribe, ethnic group, and language group who believe on the Lord Jesus Christ. As ambassadors of Christ, we should reach the foreign nations.",
            scriptures: [
              "Matt. 28:19-20",
              "Mark 16:15",
              "Luke 24:46-48",
              "John 20:21",
              "Acts 1:8",
              "2 Cor. 5:20",
            ],
          },
          {
            label: "(W)",
            text: "Giving. We believe that all giving is an act of worship and is given freely unto the Lord. While contributions may be designated, all gifts are ultimately received and administered under the oversight of church leadership for the furtherance of the church's mission and ministry.",
            scriptures: [
              "Gen. 14:20",
              "Prov. 3:9-10",
              "Acts 4:34-37",
              "1 Cor. 16:2",
              "2 Cor. 9:6-7",
              "Gal. 6:6",
              "Eph. 4:28",
              "1 Tim. 5:17-18",
              "1 John 3:17",
            ],
          },
        ],
      },
      {
        id: "2.02",
        number: "Section 2.02",
        title: "Authority of Statement of Faith",
        paragraphs: [
          "The Statement of Faith does not exhaust the extent of our faith. The Bible itself is the sole and final source of all that we believe. We do believe, however, that the foregoing Statement of Faith accurately represents the teachings of the Bible.",
        ],
      },
      {
        id: "2.03",
        number: "Section 2.03",
        title: "Church Agreement",
        paragraphs: [
          "Having been led, as we believe, by the Spirit of God, to receive the Lord Jesus Christ as our Savior, and on profession of our faith we do now, in the presence of God and this local assembly, joyfully enter into agreement with one another, as being part of Crossview church.",
          "We engage, therefore, by the aid of the Holy Spirit, to walk together in Christian love; to strive for the advancement of this church in knowledge, holiness, and comfort; to promote its prosperity and spirituality; to sustain its worship, ordinances, discipline, and doctrines; and to contribute cheerfully and regularly to the support of the ministry, the expenses of the church, and the spreading of the Gospel.",
          "We also engage to maintain personal devotions; to educate our children in the truth of God's Word; to seek the salvation of our families, acquaintances, and all others; to walk circumspectly in the world; to be just in our dealings, faithful to our engagements, and to be zealous in our efforts to advance the Kingdom of our Savior.",
          "We further engage to watch over one another in brotherly love; to remember each other in prayer; to aid each other in sickness and distress; to cultivate Christian sympathy in feeling and courtesy of speech; to be slow to take offense, but always ready to secure reconciliation without delay.",
        ],
      },
    ],
  },
  {
    id: "article-3",
    number: "Article 3",
    title: "Membership",
    sections: [
      {
        id: "3.01",
        number: "Section 3.01",
        title: "Qualifications for Membership",
        paragraphs: [
          "Those seeking membership must, through their actions, words, lifestyle, and affiliations, evidence a genuine experience of regeneration through faith in and acceptance of the Lord Jesus Christ as personal Savior.",
        ],
        items: [
          { label: "(A)", text: "They must renounce sin and endeavor to live a life unto the Lord." },
          {
            label: "(B)",
            text: "Candidates for membership will be required to attend a membership class or meet with pastor in which they will review the Statement of Faith, the bylaws of this church, general church practices, and expectations of members.",
          },
          {
            label: "(C)",
            text: "Membership will be granted upon compliance with the following conditions:",
            children: [
              { text: "By testimony of faith in the Lord Jesus alone for salvation." },
              { text: "Agreement with our statement of faith and policies." },
            ],
          },
        ],
      },
      {
        id: "3.02",
        number: "Section 3.02",
        title: "Duties of a Member",
        paragraphs: [
          "On becoming a member of this local assembly, each member further agrees to love, honor, and esteem all members of the church; to support the church in prayer and with other financial support as the Lord enables; and in accordance with Biblical commands, to support through a lifestyle walk affirming the beliefs and practices of the church.",
        ],
      },
      {
        id: "3.03",
        number: "Section 3.03",
        title: "Privileges of Membership",
        items: [
          {
            label: "(A)",
            text: "Only members at least eighteen years of age who are physically present at a duly called meeting of the church shall be entitled to vote. There shall be no proxy or absentee voting. The eligible membership of the church may only exercise voting privileges in those areas that are defined and limited by these bylaws. Members are encouraged to bring recommendations or concerns to the pastor and church leadership for prayerful consideration. The vote of a member is to confirm and ratify the direction of the church as discerned by the pastor and board, prayerfully seeking the guidance of the Lord.",
          },
          {
            label: "(B)",
            text: "This congregation functions not as a pure democracy, but as a body under the headship of the Lord Jesus Christ. Christ is the Chief Shepherd, and the pastor serves as an under-shepherd, providing spiritual leadership, direction, and oversight for the church.",
            children: [
              {
                label: "(1)",
                text: "The pastor shall lead the church in accordance with the Word of God, seeking to shepherd the congregation with humility, wisdom, and accountability before the Lord. The Board of Directors shall serve alongside the pastor by providing counsel, encouragement, and support, helping to ensure that decisions are made prayerfully and in alignment with Scripture.",
              },
              {
                label: "(2)",
                text: "While final responsibility for leadership rests with the pastor, he shall not lead in isolation but in fellowship with godly counsel, recognizing the value of wise and faithful who assist in the care and direction of the church.",
              },
              {
                label: "(3)",
                text: "All determinations regarding the internal affairs of this church are ecclesiastical matters and shall be governed according to the Scriptures and the church's established policies and procedures.",
              },
            ],
          },
          {
            label: "(C)",
            text: "Membership in this local church does not afford the members with any property, contractual, or civil rights based on principles of democratic government. Although the general public is invited to all of the church's worship services, the church property remains private property. The pastor, in coordination with the board of directors when appropriate, has the authority to suspend or revoke the right of any person, including a member, to enter or remain on church property when necessary for the safety, peace, and order of the church.",
          },
          {
            label: "(D)",
            text: "A member may inspect or copy the prepared financial statements of the church and the minutes of the proceedings of church and committee meetings, provided he shall have made a written request upon the church and the church has received the written request at least five business days before the requested inspection date. Minutes from church discipline meetings are exempt from this provision and are not subject to inspection or copy.",
            children: [
              {
                label: "(1)",
                text: "A member may not, under any circumstances, inspect or copy any record relating to individual contributions to the church, the list of names and addresses of the church members, or the accounting books and financial records of the church.",
              },
              {
                label: "(2)",
                text: "The church may impose a reasonable charge, covering the costs of labor and material, for copies of any documents provided to the member before releasing the copies to the member.",
              },
            ],
          },
        ],
      },
      {
        id: "3.04",
        number: "Section 3.04",
        title: "Discipline of a Member",
        items: [
          {
            label: "(A)",
            text: "Because we are committed to the spiritual growth and restoration of every believer, church discipline is exercised not as a means of punishment, but as a loving and necessary process of correction. Its goal is always the glory of God, the purity of the church, and the restoration of the one in sin. A discipline committee consisting of the pastor and the board of directors shall oversee matters requiring formal involvement. These shall seek to handle each situation with humility, wisdom, and faithfulness to Scripture. If the pastor or any member of the board is the subject of a disciplinary matter, he shall not participate in the decision-making process. All members, including the pastor, are subject to the same biblical standard.",
          },
          {
            label: "(B)",
            text: "When a member becomes aware of sin in the life of another believer that hinders spiritual growth or damages the testimony of Christ, he is first to examine his own heart and motives (Gal. 6:1). He is then to go privately and graciously to the individual, seeking restoration in a spirit of humility, gentleness, and love. The goal of this step is not to win an argument, but to lovingly restore a brother or sister to fellowship with God.",
          },
          {
            label: "(C)",
            text: "If the matter is not resolved, the one seeking restoration shall take one or two spiritually mature believers with him, that the matter may be confirmed and addressed with greater clarity and care. This step should continue to reflect a spirit of humility, patience, and a sincere desire for reconciliation.",
          },
          {
            label: "(D)",
            text: "If the matter remains unresolved, it shall be brought before the discipline committee. The committee shall carefully and prayerfully evaluate the situation, seeking to apply Scripture faithfully while encouraging repentance and restoration. If necessary, the committee may recommend that the church family become involved in pursuing the individual, not in a spirit of judgment, but in unified love and concern, urging the individual toward repentance and reconciliation.",
          },
          {
            label: "(E)",
            text: "If, after repeated loving efforts, the individual refuses to repent, the church may, as a final step of discipline, remove the individual from membership. This action is taken with sorrow, not condemnation, and is intended to impress upon the individual the seriousness of unrepentant sin and the need for restoration. Such action shall require a majority vote of the members present at a meeting called for that purpose. The individual under discipline shall not vote on the matter.",
          },
          {
            label: "(F)",
            text: "Except in cases of public or widely known sin, no matter shall be brought before the discipline committee until the steps outlined in subsections (B) and (C) have been faithfully followed.",
          },
          {
            label: "(G)",
            text: "If a person is removed from membership, the church's posture toward that individual shall remain one of love and concern. Any continued contact should be for the purpose of encouraging repentance and restoration, not for hostility or rejection. The church shall remain ready to forgive and restore any individual who demonstrates genuine repentance, affirming the grace and mercy of God in Christ.",
          },
          {
            label: "(H)",
            text: "These procedures are based on the teaching of Scripture, including Matthew 18:15-20; Romans 16:17-18; 1 Corinthians 5:1-13; 2 Corinthians 2:1-11; Galatians 6:1; 1 Thessalonians 5:14; 2 Thessalonians 3:6, 10-15; 1 Timothy 5:19-20; and Titus 3:10-11.",
            scriptures: [
              "Matthew 18:15-20",
              "Romans 16:17-18",
              "1 Corinthians 5:1-13",
              "2 Corinthians 2:1-11",
              "Galatians 6:1",
              "1 Thessalonians 5:14",
              "2 Thessalonians 3:6, 10-15",
              "1 Timothy 5:19-20",
              "Titus 3:10-11",
            ],
          },
        ],
      },
      {
        id: "3.05",
        number: "Section 3.05",
        title: "Automatic Termination of Membership",
        items: [
          {
            label: "(A)",
            text: "The membership of any individual member may be subject to review if the member has not attended a regular worship service of the church for a period of three months without reasonable cause or communication. Upon good cause being shown, this provision may be waived at the discretion of the pastor.",
          },
          {
            label: "(B)",
            text: "Because meaningful membership involves commitment and accountability, individuals may not hold membership in more than one church. If a member unites in membership with another church, their membership at Crossview Church will be considered concluded.",
          },
          {
            label: "(C)",
            text: "The membership of any individual member who is found to be in open and unrepentant involvement in any sexual misconduct described in Section 2.01(P), or who files a lawsuit in violation of Section 2.01(V), shall be subject to the biblical process of church discipline as outlined in Section 3.04, which may result in removal from membership.",
          },
          {
            label: "(D)",
            text: "The membership of an individual will automatically terminate upon his or her death.",
          },
        ],
      },
      {
        id: "3.06",
        number: "Section 3.06",
        title: "Affiliated Co-Laborer",
        paragraphs: [
          "Those desiring fellowship, accountability, and opportunities for service with this assembly on a temporary basis but who maintain active membership in a like body of believers outside this city, may be granted affiliated co-laborer status with this church. The affiliated co-laborer may be eligible to serve in certain capacities determined by the pastor and may attend fellowship events granted for members. This affiliation does not grant membership or the rights of membership to the individual(s) so granted. Affiliated co-laborers shall not be entitled to hold any office, vote in or have any say in any church matter, and shall not be counted for quorum purposes. A person wishing to become an affiliated co-laborer with this assembly must request so of the pastor, who will, in consultation, decide if affiliated co-laborer status may be granted to the individual. If the pastor so determines, the person may be granted such upon a majority vote of the church membership at any public service or church administration meeting.",
        ],
      },
    ],
  },
  {
    id: "article-4",
    number: "Article 4",
    title: "Officers",
    sections: [
      {
        id: "4.01",
        number: "Section 4.01",
        title: "Church Officers",
        paragraphs: [
          "The church officers are pastor, deacon (if needed), church clerk, financial secretary, and church treasurer. One person may hold two or more offices, with some exceptions. The church treasurer and financial secretary may not be the same person. Officers of the church must be elected by a majority of the present, voting membership at a regular church administration meeting. The pastor, from time to time as he deems appropriate, may appoint other church officers, subject to a majority confirmation vote by present, voting church members at any regular or special church administrative meeting.",
        ],
      },
      {
        id: "4.02",
        number: "Section 4.02",
        title: "Designation of Corporate Officers",
        paragraphs: [
          "As an accommodation to legal relationships outside the church, the pastor shall serve as president of the corporation; the church clerk shall serve as secretary of the corporation; the church treasurer shall serve as treasurer of the corporation; an appointed member shall serve as vice president of the corporation. The pastor and the elected officers shall constitute the board of directors of the corporation. The board of directors shall seek to carry out these responsibilities in unity, transparency, and with a shared commitment to the spiritual well-being of the church.",
          "The board of directors within the church (pastor, deacon (if needed), clerk, secretary, treasurer, any other member) shall exercise the following specific powers only upon authorization by a majority vote of the members present at a duly called church administration meeting:",
        ],
        items: [
          {
            label: "(1)",
            text: "To purchase, lease, or otherwise acquire real and personal property on behalf of the church, and to take real and personal property by will, gift, or bequest on behalf of the church;",
          },
          {
            label: "(2)",
            text: "To sell, convey, alienate, transfer, lease, assign, exchange, or otherwise dispose of, and to mortgage, pledge, or otherwise encumber the real and personal property of the church, to borrow money and incur indebtedness for the purpose and use of the church; to cause to be executed, issued, and delivered for the indebtedness, in the name of the church, promissory notes, bonds, debentures, or other evidence of indebtedness; and to secure repayment by deeds of trust, mortgages, or pledges; and",
          },
          {
            label: "(3)",
            text: "To exercise all powers necessary for the dissolution of the church corporation.",
          },
          {
            label: "(4)",
            text: "All powers of the directors, (whether deacons or other appointed group) shall be compatible with the laws of the state of Ohio.",
          },
        ],
      },
      {
        id: "4.03",
        number: "Section 4.03",
        title: "General Eligibility for All Officers",
        items: [
          {
            label: "(A)",
            text: "The church shall not install or retain an officer who fails to adhere to or expresses disagreement with the Statement of Faith set forth in Article 2. All church officers, upon request of the pastor, shall affirm their agreement with the Statement of Faith.",
          },
          {
            label: "(B)",
            text: "All church officers must be approved initially and thereafter annually by the pastor, in consultation with the board of directors, in order to ensure that those serving are in agreement with the church's doctrine, testimony, and direction.",
          },
          {
            label: "(C)",
            text: "Only church members are eligible for election or appointment to any church office or position. Affiliated co-laborers with this ministry are not eligible for such election or appointment.",
          },
          {
            label: "(D)",
            text: "Upon termination of membership any officer of the church shall immediately forfeit his position and return any church property to the church office.",
          },
        ],
      },
      {
        id: "4.04",
        number: "Section 4.04",
        title: "Terms of Office",
        items: [
          {
            label: "(A)",
            text: "The relationship between the pastor and the church shall be permanent unless dissolved at the option of either party by the giving of a month's notice, or less by mutual consent. The severance of the relationship between the pastor and the church may be considered at any regular or special church administration meeting by following the procedures outlined in 6.04, provided notice of the meeting shall have been given from the pulpit to the church two Sundays prior to the meeting. A two-thirds majority of the eligible members present and voting shall be required to sever the relationship between the pastor and the church. Disciplinary removal of the pastor from office automatically terminates his membership. A restoration to membership after disciplinary removal will be subject to the requirements of Section 3.01(D).",
          },
          {
            label: "(B)",
            text: "The term of service for all offices and positions in the church, except the pastor, shall be one year, at the expiration of which the officers may be re-elected or re-appointed.",
          },
          {
            label: "(C)",
            text: "A vacancy occurring in any office or board, except in the case of the pastor, may be filled at any regular church administration meeting by a majority vote of present members.",
          },
          {
            label: "(D)",
            text: "All elected and appointed officers shall serve in their respective offices until their successors are duly elected or appointed.",
          },
          {
            label: "(E)",
            text: "Members of the board of directors or deacons may be removed from office for unbiblical conduct, as determined by the other board members, upon a majority vote of the remaining members of the board.",
          },
        ],
      },
      {
        id: "4.05",
        number: "Section 4.05",
        title: "Calling a Pastor",
        paragraphs: [
          "Upon the resignation, death or dismissal of the Pastor, the church shall seek a candidate who subscribes to the Statement of Faith, the Covenant and bylaw provisions of this church, and whose life aligns with the qualifications of a pastor as described in I Timothy 3:1-7 and Titus 1:6-9. The church shall abide by the following guidelines for calling a pastor:",
        ],
        items: [
          {
            label: "(A)",
            text: "The board of directors shall select a pulpit committee to consist of all board of directors and five other members elected by a simple majority of the board of directors. The pulpit committee shall interview potential candidates and will only consider men who subscribe to the Statement of Faith and Agreement contained herein;",
          },
          {
            label: "(B)",
            text: "Prior to being announced to the congregation as a formal candidate, any man being considered for pastoral candidate must preach at least one Sunday service. Thereafter, upon a majority vote of the board of directors, the pulpit committee may formally announce the candidate to the church, after which the candidate must preach at least two regularly scheduled services and be available for a church-wide question/answer time prior to being voted upon by the congregation;",
          },
          {
            label: "(D)",
            text: "The candidate must be elected as Pastor by a 75% vote of qualified, present voting members.",
          },
        ],
      },
      {
        id: "4.06",
        number: "Section 4.06",
        title: "Election of Officers",
        paragraphs: [
          "The annual election of officers by the church membership shall occur during the month of December at the annual church administration meeting.",
        ],
      },
      {
        id: "4.07",
        number: "Section 4.07",
        title: "Pastoral Oversight of Officers and Staff",
        items: [
          {
            label: "(A)",
            text: "Subject to appropriate budgetary allowance, and on the condition that they shall become a member of the church upon assuming their duties, the pastor may hire associates and assistants to assist him in carrying out his God-given responsibilities in fellowship with the board and with prayerful consideration of the individual's gifts and faithfulness to Scripture.",
          },
          {
            label: "(B)",
            text: "All church staff, whether paid or volunteer, shall serve under the supervision and leadership of the pastor. This oversight is exercised in consultation with the board, with prayerful guidance, and with care for the spiritual and practical well-being of all staff. The pastor shall have the responsibility to hire and, when necessary, dismiss staff, seeking to do so with wisdom, fairness, and in consultation with the board of directors when appropriate. No employee or volunteer shall be hired, appointed, or retained who fails to adhere to or expresses disagreement with the Statement of Faith.",
          },
        ],
      },
    ],
  },
  {
    id: "article-5",
    number: "Article 5",
    title: "Duties and Powers of Officers",
    sections: [
      {
        id: "5.01",
        number: "Section 5.01",
        title: "The Pastor",
        items: [
          {
            label: "(A)",
            text: "The pastor shall faithfully preach and teach the Word of God and shall be at liberty to declare the whole counsel of Scripture as the Lord leads him. He shall administer the ordinances of the church, serve as moderator of church meetings, oversee the teaching ministries, and shepherd the congregation with care, diligence, and a sincere concern for their spiritual growth and well-being.",
          },
          {
            label: "(B)",
            text: "The pastor shall appoint the members of the various committees, seeking to involve faithful and qualified individuals in the work of the ministry in consultation with the board and with prayerful discernment of their gifts and calling. He shall serve as president of the corporation and ensure that all officers understand the responsibilities of their respective roles. He shall extend the right hand of fellowship to new members on behalf of the church and carry out the duties that pertain to the office of pastor. In all matters of ministry philosophy and practice, the pastor shall seek the Lord's guidance and lead in a manner consistent with Scripture, exercising his responsibilities not for personal preference, but for the edification of the body and the glory of God.",
          },
          {
            label: "(C)",
            text: "All appointments for public worship and Bible study, including the time, place, and use of church property, shall be overseen by the pastor. In carrying out this responsibility, he shall seek to ensure that all activities are consistent with the doctrine, mission, and orderly function of the church.",
          },
          {
            label: "(D)",
            text: "The pastor shall be responsible to fill the pulpit for each regularly scheduled church service as well as any special services. In the event of his absence, he shall be responsible to invite speakers from within the membership or outside the church to preach in a manner consistent with the beliefs articulated in the Statement of Faith.",
          },
          {
            label: "(E)",
            text: "The pastor shall be responsible to establish mandatory safety and security procedures for all ministries and programs involving minors.",
          },
        ],
      },
      {
        id: "5.02",
        number: "Section 5.02",
        title: "The Deacons",
        items: [
          {
            label: "(A)",
            text: "Deacons shall be recognized as servants within the church who meet the biblical qualifications set forth in Scripture. They shall be elected as the need arises and shall assist the pastor in caring for the practical and spiritual needs of the congregation.",
          },
          {
            label: "(B)",
            text: "Deacons serve to support and strengthen the ministry of the church, working in unity with the pastor to promote the health, order, and effectiveness of the body.",
          },
        ],
      },
      {
        id: "5.03",
        number: "Section 5.03",
        title: "Church Clerk",
        paragraphs: ["The church clerk shall:"],
        items: [
          {
            label: "(A)",
            text: "Certify and keep at the office of the church, the original bylaws or a copy, including all amendments or alterations to the bylaws, minutes of meetings, the membership roll, and certificates of ordination and license; and deliver such documents to successor upon leaving office;",
          },
          {
            label: "(B)",
            text: "Keep minutes of all church administration and meetings, including the time and place of holding, the notice given, and the names of those present (unless a church-wide meeting), and an accurate record of all church business approved at each meeting. A copy of these minutes shall be kept as a permanent record of the church and shall be made available at all reasonable times to any proper person on terms provided by law and pursuant to these bylaws.",
          },
          {
            label: "(C)",
            text: "Sign, certify, or attest documents as may be required by law; see that reports, statements, certificates, and all other documents and records required by law are properly kept and filed;",
          },
          {
            label: "(D)",
            text: "See that all notices are duly given in accordance with the provisions of these bylaws. (In case of the absence or disability of the secretary, or his or her refusal or neglect to act, notice may be given and served by the pastor or by the chairman;",
          },
          {
            label: "(E)",
            text: "Keep an account of any special events in the life of the church which are of historical interest and give a report at the annual church administration meeting of the status of the church membership roll in the past year;",
          },
          {
            label: "(F)",
            text: "Keep all records at the office of the church and deliver them to any successor upon leaving office; and",
          },
          {
            label: "(G)",
            text: "Serve as the secretary of the corporation and be a member in good standing.",
          },
        ],
      },
      {
        id: "5.04",
        number: "Section 5.04",
        title: "Financial Secretary",
        paragraphs: ["The financial secretary shall:"],
        items: [
          {
            label: "(A)",
            text: "Count, along with two other persons so appointed, and record in a permanent record all the monies received in offerings for the church. This shall be done following each service or day of services of the church.",
          },
          {
            label: "(B)",
            text: "Convey in a timely manner all funds received to the treasurer for verification and deposit in the bank, including moneys received from outside sources, and shall provide the treasurer with a record of all monies received, specifying the distribution into various funds as designated. A copy shall be provided to the pastor each week or upon request.",
          },
          {
            label: "(C)",
            text: "Maintain a permanent weekly record of individual giving for all donations, offerings, contributions and gifts, and shall guard said records confidentially as a sacred trust. The financial secretary shall issue an official receipt to each contributor quarterly and at the end of the fiscal year.",
          },
          {
            label: "(D)",
            text: "The chairman of the board of directors may assume the duties of the financial secretary in the absence of a financial secretary, unless already serving in the capacity of the treasurer.",
          },
        ],
      },
      {
        id: "5.05",
        number: "Section 5.05",
        title: "Treasurer",
        paragraphs: ["The Treasurer shall:"],
        items: [
          {
            label: "(A)",
            text: "Keep in the church office an accurate and permanent record of all financial transactions of church funds. Make reports of itemized disbursements and the financial condition of the church as requested by pastor for annual, quarterly or otherwise special or regular administration meetings; deliver such records to successor upon leaving office;",
          },
          {
            label: "(B)",
            text: "Receive and give receipt for all contributions, gifts, and donations to the church;",
          },
          {
            label: "(C)",
            text: "Verify all funds received from the church financial secretary, and deposit these and all other funds received in appropriate amounts at an approved banking facility or trust company as shall be selected by the pastor.",
          },
          {
            label: "(D)",
            text: "Write, sign, record, and mail checks in payment of church bills and routine expenses approved by the pastor as well as disburse funds and salaries as directed by the church.",
          },
          {
            label: "(E)",
            text: "At least two directors of this corporation shall be authorized to sign church checks in the treasurer's absence. No persons shall be permitted to sign checks written to themselves, and no expenditures of the church (except miscellaneous petty cash disbursements) shall be made by cash.",
          },
          {
            label: "(F)",
            text: "Serve as treasurer of the corporation and be a member in good standing.",
          },
        ],
      },
      {
        id: "5.06",
        number: "Section 5.06",
        title: "Associate Pastors",
        paragraphs: [
          "Under the direction and guidance of the pastor, the associate pastor(s)—if needed and voted on—of the church shall assist the pastor in carrying out the ministries of the church.",
        ],
      },
      {
        id: "5.07",
        number: "Section 5.07",
        title: "Duties of All Officers",
        items: [
          {
            label: "(A)",
            text: "All officers shall prepare a written report of their work for the annual church administration meeting and shall surrender all records in their possession to the church clerk at the close of their term of office to be filed as a permanent record of the work of the church. All records are the property of the church and must be kept in the church office.",
          },
          {
            label: "(B)",
            text: "Any officer who neglects his duties as outlined in the bylaws for a period of three months may be subject to removal from office, upon the recommendation of the pastor and in consultation with the board of directors, and another may be appointed to serve the unexpired term.",
          },
        ],
      },
      {
        id: "5.08",
        number: "Section 5.08",
        title: "Installation of Officers",
        paragraphs: [
          "A public installation service in which all newly elected officers of the church are to be dedicated to their respective offices and the ordination of newly elected deacons shall be held at a public church service following their election at the annual church administration meeting.",
        ],
      },
    ],
  },
  {
    id: "article-6",
    number: "Article 6",
    title: "Meetings",
    sections: [
      {
        id: "6.01",
        number: "Section 6.01",
        title: "Meetings for Public Worship",
        paragraphs: [
          "Unless otherwise determined by the pastor, the church shall meet each Sunday for public worship, and at least once during the week for Bible study and prayer. There may be times when services may be cancelled due to weather, emergencies, or holidays.",
        ],
      },
      {
        id: "6.02",
        number: "Section 6.02",
        title: "Meetings for Church Administration",
        items: [
          {
            label: "(A)",
            text: "The annual church administration meeting, for the election of officers and the transaction of other business, shall be held on an agreeable day. A quorum shall consist of the members present. Public notice of the meeting shall be given from the pulpit for two successive Sundays immediately preceding the meeting.",
          },
          {
            label: "(B)",
            text: "The moderator shall determine the rules of procedure according to his sense of fairness and common sense, giving all members a reasonable opportunity to be heard on a matter. The moderator shall guide the proceedings and make determinations regarding questions of procedure, seeking to do so with fairness, clarity, and respect for all involved.",
          },
          {
            label: "(C)",
            text: "For any meeting under this article, the moderator shall have the responsibility to maintain order and a spirit of edification during meetings. If an individual is disruptive, the moderator may, when necessary, require that person to leave the meeting in order to preserve peace and proper conduct. Such actions should be taken with wisdom, fairness, and a desire to maintain unity within the church.",
          },
        ],
      },
      {
        id: "6.03-special-meetings",
        number: "Section 6.03",
        title: "Special Meetings",
        items: [
          {
            label: "(A)",
            text: "The pastor may call a special meeting by giving notice of such a meeting and the purpose for which it is called to the church from the pulpit at least one Sunday and not less than one week prior to a meeting. A meeting for the calling of a pastor or the severance of the relationship between the church and pastor shall be called in accordance with the provision of Sections 4.04(A) and 4.05.",
          },
          {
            label: "(B)",
            text: "Bible conferences, missionary conferences, and special meetings may be held as the pastor deems beneficial.",
          },
        ],
      },
      {
        id: "6.03-motions",
        number: "Section 6.03",
        title: "Motions",
        paragraphs: [
          "Members who desire that a certain motion be made or subject matter be discussed during an annual, regular, or special business meeting are encouraged to submit a written recommendation to the pastor and church leadership at least two weeks prior to the meeting. The leadership will prayerfully consider the proposal and determine how best to proceed in accordance with Scripture and the overall direction of the church. All motions brought before the church shall be presented by the pastor (or other moderator if the office of pastor is vacant), unless he delegates that responsibility to another member or officer.",
        ],
      },
      {
        id: "6.04",
        number: "Section 6.04",
        title: "Fiscal Year",
        paragraphs: [
          "The fiscal year of the church shall begin January 1st and end December 31st.",
        ],
      },
      {
        id: "6.05",
        number: "Section 6.05",
        title: "Extra-Budget Expenditures",
        paragraphs: [
          "The treasurer may, in the ordinary course of his duties, make or authorize the making of any expenditure or obligation in any amount not exceeding One Hundred dollars ($100). The board may make or authorize the making of any expenditure or obligation in any amount whatsoever.",
        ],
      },
      {
        id: "6.06",
        number: "Section 6.06",
        title: "Emergency Expenditures",
        paragraphs: [
          "The pastor and the board of directors may, in an emergency situation, make or approve the making of any expenditure or obligation:",
        ],
        items: [
          {
            label: "(A)",
            text: "The pastor and the board of directors, by a majority vote, must determine that the matter is of such urgency that it cannot wait until the next regular meeting of the membership or until a special meeting can be held.",
          },
          {
            label: "(B)",
            text: "Before making any decision, the pastor and the board of directors shall make a good faith effort to obtain the opinions of as many of the members as can be reached. The actual decision shall then be taken at a meeting of the pastor and the board of directors, any action requiring the approval of at least two-thirds (2/3) of the board.",
          },
        ],
      },
    ],
  },
  {
    id: "article-7",
    number: "Article 7",
    title: "Indemnification",
    sections: [
      {
        id: "7.01",
        number: "Section 7.01",
        title: "Actions Subject to Indemnification",
        items: [
          {
            label: "(A)",
            text: "This provision is intended to ensure that those serving the church may do so with confidence and integrity, while acting in good faith and in the best interests of the church. The church may indemnify any person who was or is a party or is threatened to be made a party to any threatened, pending or completed action, suit, or proceeding, whether civil, criminal, administrative, or investigative, including all appeals (other than an action by or in the right of the church) by reason of the fact that the person is or was a pastor, deacon, officer, employee, or agent of the church, against expenses, including attorneys' fees, judgments, fines, and amounts paid in settlement actually and reasonably incurred by him in connection with the action, suit, or proceeding; and if that person acted in good faith and in a manner he reasonably believed to be in or not opposed to the best interests of the church and, with respect to any criminal action or proceeding, had no reasonable cause to believe his conduct was unlawful.",
          },
          {
            label: "(B)",
            text: "The termination of any action, suit, or proceeding by judgment, order, settlement, conviction, or on a plea of nolo contendere or its equivalent, shall not, of itself, create a presumption that the person did not act in good faith and in a manner that he reasonably believed to be in or not opposed to the best interests of the church and, with respect to any criminal action or proceeding, had no reasonable cause to believe that his or her conduct was unlawful.",
          },
        ],
      },
      {
        id: "7.02",
        number: "Section 7.02",
        title: "Expenses Subject to Indemnification",
        paragraphs: [
          "To the extent that a pastor, deacon, officer, employee, or agent has been successful on the merits or otherwise in defense of any action, suit, or proceeding referred to in this Article, or in defense of any claim, issue, or matter in that action, suit, or proceeding, he or she may be indemnified against expenses, including attorneys' fees, actually and reasonably incurred by him or her in connection with the action, suit, or proceeding.",
        ],
      },
      {
        id: "7.03",
        number: "Section 7.03",
        title: "Limitations of Indemnification",
        paragraphs: [
          "Any indemnification made under this Article, may be made by the church only as authorized in the specific case on a determination that indemnification of the pastor, deacon, officer, employee, or agent is proper in the circumstances because he has met the applicable standard of conduct set forth in Section 5.01. The determination shall be made (a) by a majority vote of a quorum consisting of the pastor and board who were not and are not parties to or threatened with the action, suit, or proceeding; (b) if the described quorum is not obtainable or if a majority vote of a quorum so directs, by independent legal counsel in a written opinion; or (c) by a majority vote of the members of the church.",
        ],
      },
      {
        id: "7.04",
        number: "Section 7.04",
        title: "Timing of Indemnification",
        paragraphs: [
          "Expenses of each person seeking indemnification under this Article may be paid by the church as they are incurred, in advance of the final disposition of the action, suit, or proceeding, as authorized by the board of directors in the specific case, so long as the pastor, deacon, officer, employee, or agent agrees to repay the amount if it is ultimately determined that he or she is not qualified to be indemnified by the church.",
        ],
      },
      {
        id: "7.05",
        number: "Section 7.05",
        title: "Extent of Indemnification",
        paragraphs: [
          "The indemnification provided by this Article shall be deemed to be discretionary unless otherwise required as a matter of law or under any agreement or provided by insurance purchased by the church, both as to action of each person seeking indemnification under this Article in his official capacity and as to action in another capacity while holding that office, and may continue as to a person who has ceased to be a pastor, deacon, officer, employee, or agent and may inure to the benefit of the heirs, executors, and administrators of that person.",
        ],
      },
      {
        id: "7.06",
        number: "Section 7.06",
        title: "Insurance",
        paragraphs: [
          "The church may purchase and maintain insurance on behalf of any person who is or was a pastor, deacon, officer, employee, or agent of the church against any liability asserted against him and incurred by him in that capacity, or arising out of his status in that capacity, whether or not the church would have the power to indemnify him against liability under the provisions of this Article.",
        ],
      },
    ],
  },
  {
    id: "article-8",
    number: "Article 8",
    title: "Committees",
    sections: [
      {
        id: "8.01",
        number: "Section 8.01",
        title: "Standing Committees",
        paragraphs: [
          "The pastor (or the board of directors if the office of pastor is vacant) shall appoint standing committees as he deems appropriate and shall designate a chairperson and the membership for each standing committee except when otherwise specifically provided in these bylaws.",
        ],
      },
      {
        id: "8.02",
        number: "Section 8.02",
        title: "Special Committees",
        paragraphs: [
          "Nominations for special committee members shall be made by the pastor or such persons as he shall appoint to make such nominations. The members of the committee shall be chosen by a majority vote of the board of directors. The special committee shall be subject to the control and direction of the board of directors at all times.",
        ],
      },
      {
        id: "8.03",
        number: "Section 8.03",
        title: "Actions of Committees",
        paragraphs: [
          "Committees, whether standing or special, have no authority to act on behalf of the corporation. Their primary function is to research and recommend. Committees shall make available upon request all records and materials to the pastor, who shall provide final oversight to ensure that all plans and decisions align with the doctrine, mission, and direction of the church. Each committee shall have a secretary that keeps minutes of each meeting and shall timely submit the minutes to the pastor and church clerk to be filed with church records. If deemed appropriate by the pastor, the committee secretary, in conjunction with the chairman, shall submit an annual report to the church of the decisions and plans of the committee.",
        ],
      },
    ],
  },
  {
    id: "article-9",
    number: "Article 9",
    title: "Binding Arbitration",
    sections: [
      {
        id: "9.01",
        number: "Section 9.01",
        title: "Submission to Arbitration",
        paragraphs: [
          "Believing that lawsuits between believers are a bad testimony, all members of this church agree to do their best to resolve issues outside of court for testimony sake.",
        ],
      },
      {
        id: "9.02",
        number: "Section 9.02",
        title: "Notice of Arbitration",
        items: [
          {
            label: "(A)",
            text: "In the event of any dispute, claim, question, or disagreement arising out of or relating to these bylaws or any other church matter, the parties shall use their best efforts to settle such disputes, claims, questions, or disagreement as befits Christians and in accord with Matthew 5:15-17.",
            scriptures: ["Matthew 5:15-17"],
          },
          {
            label: "(B)",
            text: "To this effect, they shall consult and negotiate with each other in good faith and, recognizing their mutual interests not to disgrace the name of Christ, seek to reach a just and equitable solution.",
          },
        ],
      },
      {
        id: "9.03",
        number: "Section 9.03",
        title: "Limitations on Arbitration Decisions",
        items: [
          {
            label: "(A)",
            text: "Should any dispute involve matters of church discipline, the arbitrators shall be limited to determining whether the procedures for church discipline, as outlined under Section 3.04, were followed.",
          },
          {
            label: "(B)",
            text: "Should any dispute involve the removal from office of the pastor or any church officer, the arbitrators shall be limited to determining whether the procedures set forth in Sections 4.04, 4.07, or 5.07 were followed.",
          },
        ],
      },
      {
        id: "9.04",
        number: "Section 9.04",
        title: "Arbitration Procedures",
        paragraphs: [
          "The procedures for arbitration shall be determined by the pastor and the board of directors and, when appropriate, may be guided by recognized biblical principles of reconciliation and Christian conciliation.",
        ],
      },
    ],
  },
  {
    id: "article-10",
    number: "Article 10",
    title: "Conflict of Interest",
    sections: [
      {
        id: "10.01",
        number: "Section 10.01",
        title: "Purpose",
        paragraphs: [
          "The purpose of this conflict of interest policy is to protect the Church's interest when it is contemplating entering into a transaction or arrangement that might either benefit the private interest of an officer or trustee of the Church or might result in a possible excess benefit transaction. This policy is intended to supplement but not replace any applicable state or federal laws governing conflicts of interest applicable to nonprofit and charitable organizations.",
        ],
      },
      {
        id: "10.02",
        number: "Section 10.02",
        title: "Definitions",
        items: [
          {
            label: "(A)",
            text: "Interested Person: Any trustee or officer who has a direct or indirect financial interest.",
          },
          {
            label: "(B)",
            text: "Financial interest: A person has a financial interest if the person has, directly or indirectly, through business, investment, or family:",
            children: [
              {
                label: "1.",
                text: "An ownership or investment interest in any entity with which the Church has a transaction or arrangement,",
              },
              {
                label: "2.",
                text: "A compensation arrangement with the Church or with any entity or individual with which Church has a transaction or arrangement, or",
              },
              {
                label: "3.",
                text: "A potential ownership or investment interest in, or compensation arrangement with, any entity or individual with which Church is negotiating a transaction or arrangement.",
              },
              {
                label: "4.",
                text: "A financial interest is not necessarily a conflict of interest. A person who has a financial interest may have a conflict of interest only if the board decides that a conflict of interest exists.",
              },
            ],
          },
          {
            label: "(C)",
            text: "Compensation: Compensation includes direct and indirect remuneration as well as gifts or favors that are not insubstantial.",
          },
        ],
      },
      {
        id: "10.03",
        number: "Section 10.03",
        title: "Procedures",
        items: [
          {
            label: "(A)",
            text: "In connection with any actual or possible conflict of interest, an interested person must disclose the existence of the financial interest and be given the opportunity to disclose all material facts to the directors considering the proposed transaction or arrangement.",
          },
          {
            label: "(B)",
            text: "After disclosure of the financial interest and all material facts, and after any discussion with the interested person, he shall leave the board meeting while the determination of a conflict of interest is discussed and voted upon. The remaining board members shall decide if a conflict of interest exists.",
          },
          {
            label: "(C)",
            text: "An interested person may make a presentation at the board meeting, but after the presentation, he shall leave the meeting during the discussion of, and the vote on, the transaction or arrangement involving the possible conflict of interest.",
            children: [
              {
                label: "(1)",
                text: "The chairman of the board shall, if appropriate, appoint a disinterested person or committee to investigate alternatives to the proposed transaction or arrangement.",
              },
              {
                label: "(2)",
                text: "After exercising due diligence, the board or committee shall determine whether Church can obtain with reasonable efforts a more advantageous transaction or arrangement from a person or entity that would not give rise to a conflict of interest.",
              },
              {
                label: "(3)",
                text: "If a more advantageous transaction or arrangement is not reasonably possible under circumstances not producing a conflict of interest, the board shall determine by a majority vote of the disinterested trustees whether the transaction or arrangement is in the best interests of Church, for its own benefit, and whether it is fair and reasonable. In conformity with the above determination it shall make its decision as to whether to enter into the transaction or arrangement.",
              },
            ],
          },
          {
            label: "(D)",
            text: "If the board has reasonable cause to believe a member has failed to disclose actual or possible conflicts of interest, it shall inform the member of the basis for such belief and afford the member an opportunity to explain the alleged failure to disclose.",
          },
          {
            label: "(E)",
            text: "If, after hearing the member's response and after making further investigation as warranted by the circumstances, the board determines the member has failed to disclose an actual or possible conflict of interest, it shall take appropriate disciplinary and corrective action.",
          },
        ],
      },
      {
        id: "10.04",
        number: "Section 10.04",
        title: "Records of Proceedings",
        items: [
          {
            label: "(A)",
            text: "The minutes of the board shall contain the names of the persons who disclosed or otherwise were found to have a financial interest in connection with an actual or possible conflict of interest, the nature of the financial interest, any action taken to determine whether a conflict of interest was present, and the board's decision as to whether a conflict of interest in fact existed.",
          },
          {
            label: "(B)",
            text: "The minutes of the board also shall contain the names of the persons who were present for discussions and votes relating to the transaction or arrangement, the content of the discussion, including any alternatives to the proposed transaction or arrangement, and a record of any votes taken in connection with the proceedings.",
          },
        ],
      },
      {
        id: "10.05",
        number: "Section 10.05",
        title: "Compensation",
        paragraphs: [
          "A voting member of the board who receives compensation, directly or indirectly, from the church for services rendered may not vote on matters pertaining to that member's compensation.",
        ],
      },
    ],
  },
  {
    id: "article-11",
    number: "Article 11",
    title: "Designated Contributions",
    sections: [
      {
        id: "11.01",
        number: "Section 11.01",
        title: "Designated Contributions",
        paragraphs: [
          "From time to time the church, in the exercise of its religious, educational, and charitable purposes, may establish various funds to accomplish specific goals. All contributions to these funds shall be deemed advisory rather than mandatory in nature and shall remain subject to the exclusive control and discretion of the pastor and the board of directors. No fiduciary obligation shall be created by any designated contribution made to the church other than to use the contribution for the general furtherance of any of its tax-exempt purposes.",
        ],
      },
    ],
  },
  {
    id: "article-12",
    number: "Article 12",
    title: "Amendments",
    sections: [
      {
        id: "12.01",
        number: "Section 12.01",
        title: "Amendments",
        paragraphs: [
          "These bylaws may be revised or amended by a majority vote of the board of directors.",
        ],
      },
    ],
  },
]

export const sofClosingNote =
  "This document was put together to provide consistency, accountability, unity, transparency, protection, and biblical integrity in how we operate as a church."
