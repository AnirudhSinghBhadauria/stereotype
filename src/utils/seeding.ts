import { prisma } from "../../prisma/prismaClient";

// export const seed = async () => {
  // const seeding = await prisma.mainStory.createMany({
  //   data: [],
  // });

    // const seeding = await prisma.sideStory.createMany({
    //   data: [
        // {
        //   ThumbTitle: "Revolutionary Sony Walkman: Reshaping Musical Experiencei",
        //   ThumbDescriptionOne: "Experience the paradigm shift in auditory pleasure with Sony's groundbreaking Walkman.",
        //   ThumbDescriptionTwo: "Unveiling the Walkman: A technological marvel providing unparalleled sound immersion.",
        //   Title: "The Sonic Revolution: Sony's Walkman Reimagines Musical Mobility",
        //   Description: "Witness the audiophile's dream come alive with Sony's avant-garde Walkman, a groundbreaking marvel redefining how we savor music. Step into a realm where portability meets unmatched audio finesse.",
        //   Tag: "Audio Innovation",
        //   Slug: "sonic-revolution",
        //   BackgroundColor: "PINK",
        //   AsideText: "“Music is the divine way to tell beautiful, poetic things to the heart.” - Pablo Casals",
        //   IntroPara: "In an epoch-defining moment, Sony unveils its newest incarnation of auditory marvel—the Walkman, a symphony of technology and elegance. Akin to an orchestra in your pocket, this device promises a seismic shift in how we carry and indulge in music.",
        //   ParaTwo: "Sony's Walkman isn't merely a gadget; it's an auditory revolution. With pristine sound quality and a portable design, it reshapes the ethos of personal music. Whether you're on a commute or immersed in solitude, this device adapts seamlessly to your auditory desires.",
        //   ParaThree: "The genesis of the Walkman lies in its fusion of portability and impeccable audio engineering. It's a testament to Sony's relentless pursuit of innovation, crafting a device that transcends mere utility to become an emblem of musical sophistication.",
        //   ParaFour: "This breakthrough isn't just about technical prowess; it's a conduit for emotion, a vessel that carries the soul of music. As you traverse the auditory landscape with the Walkman, each note becomes an intimate affair, heightened by its fidelity.",
        //   ParaFive: "",
        //   ParaSix: "",
        //   ParaSeven: "Experience the harmonious blend of design and functionality—a melodic synergy that encapsulates Sony's ethos. The Walkman isn't just a device; it's a testament to a musical utopia in your hands.",
        //   ParaEight: "In a world craving sensory immersion, the Sony Walkman emerges as an oasis of auditory delight. It's not just a device; it's a melodic companion, crafting a symphony that resonates in the heart of every music aficionado.",
        //   genreId: "1f28a4f3-f193-4a37-8dde-45e875ffeed8",
        //   authorId: "0b8ee867-8009-4be8-bda4-0ff6db321993",
        // ThumbImage: 'https://ik.imagekit.io/kvap7rsky/walkman-t.jpg?updatedAt=1700400452708',
        // ThumbImageDescription: "This breakthrough isn't just about technical prowess; it's a conduit for emotion, a vessel that carries the soul of music",
        // ImageDescription: "This breakthrough isn't just about technical prowess; it's a conduit for emotion, a vessel that carries the soul of music",
        // Image: 'https://ik.imagekit.io/kvap7rsky/walkman-i.jpg?updatedAt=1700400452716'
        // },
        // {
        //   ThumbTitle: "Atal Bihari Vajpayee: The Legacy of India's 13-Day Rule",
        //   ThumbDescriptionOne: "Discover the intricate political dynamics and significant decisions that marked this historic period.",
        //   ThumbDescriptionTwo: "Delve deeper into the aftermath of Vajpayee's short-lived governance, unveiling the impact.",
        //   Title: "Atal Bihari Vajpayee's Eventful 13-Day Stint: An Intriguing Political Saga",
        //   Description: "Delve into the captivating narrative of Atal Bihari Vajpayee's tenure, a mere 13-day window that left an indelible mark on India's political landscape. Unravel the complexities, decisions, and aftermath of this iconic period.",
        //   Tag: "Leadership Legacy",
        //   Slug: "vajpayee-13days",
        //   BackgroundColor: "ORANGE",
        //   AsideText: "In politics, even the shortest tenures hold the potential to reshape destinies.",
        //   IntroPara: "Atal Bihari Vajpayee's 13-day rule in 1996 remains a captivating chapter in Indian politics. Emerging as the Prime Minister amid a fragmented political landscape, his coalition government faced arduous challenges.",
        //   ParaTwo: "Despite its brevity, Vajpayee's administration showcased strategic decision-making. However, the coalition's fragile unity and ideological disparities led to the government's downfall.",
        //   ParaThree: "The Parliament vote in May 1996 marked the end of Vajpayee's tenure. The resignation underlined the inherent challenges in coalition governance and the intricacies of India's diverse political spectrum.",
        //   ParaFour: "This watershed moment sparked a chain of events, triggering significant political realignments and setting the stage for subsequent elections. Vajpayee's leadership during this brief period left an enduring impact on Indian politics.",
        //   ParaFive: "",
        //   ParaSix: "",
        //   ParaSeven: "The 13-day rule exemplifies the delicate balance required in coalition politics, emphasizing the complexities of governance amidst varied ideological alliances.",
        //   ParaEight: "Vajpayee's legacy, beyond this short-lived tenure, resonates in India's political fabric, leaving behind lessons on leadership, consensus-building, and the dynamics of coalition governance.",
        //   genreId: '023f04db-f828-4fed-8832-48bf941c24fb',
        //   authorId: '0b8ee867-8009-4be8-bda4-0ff6db321993',
        // ThumbImage: 'https://ik.imagekit.io/kvap7rsky/13d-t.jpg?updatedAt=1700400450048',
        // ThumbImageDescription: 'The 13-day rule exemplifies the delicate balance required in coalition politics',
        // ImageDescription: 'The 13-day rule exemplifies the delicate balance required in coalition politics',
        // Image: 'https://ik.imagekit.io/kvap7rsky/13d-i.jpg?updatedAt=1700400449858'
        // },
        // {
        //   ThumbTitle: "Bun, A Node.js Alternative Redefining JavaScript Development",
        //   ThumbDescriptionOne: "Explore the evolution of Bun as it challenges the Node.js status quo.",
        //   ThumbDescriptionTwo: "Discover why developers are making the switch to Bun for next-level JavaScript development.",
        //   Title: "Bun, A Node.js Alternative That Outshines the Competition",
        //   Description: "Dive into the world of Bun, a revolutionary Node.js alternative that's turning heads in the JavaScript community.",
        //   Tag: "bun runtime",
        //   Slug: "node-alternative",
        //   BackgroundColor: "LEAF",
        //   AsideText: "Innovation never rests, Bun is the thing now",
        //   IntroPara: "In the ever-evolving landscape of JavaScript development, a formidable contender has emerged. Bun, often described as a 'Node.js killer,' has been quietly revolutionizing the way developers approach server-side JavaScript. It offers a fresh perspective, challenging the status quo with innovation and enhanced performance.",
        //   ParaTwo: "The journey of Bun began as a response to the growing needs of modern developers. It aimed not just to replace Node.js but to excel in areas where Node.js showed limitations. With a keen focus on efficiency, speed, and adaptability, Bun embarked on a mission to reshape the future of JavaScript development.",
        //   ParaThree: "Bun's aspirations as a Node.js alternative are grounded in its ability to seamlessly integrate with existing projects. Developers will find that the transition is remarkably smooth, thanks to its support for Node.js features, including globals, module resolution, and built-in modules. This means no steep learning curve or substantial code rewriting, making the switch to Bun a logical step for many.",
        //   ParaFour: "While Bun pays its respects to Node.js by maintaining compatibility, it also extends a warm welcome to the broader JavaScript community. Recognizable modules such as fs, path, and Buffer are present in Bun, ensuring that developers feel right at home. Bun doesn't seek to replace but rather enhance the JavaScript development experience.",
        //   ParaFive: "The pivotal difference lies in Bun's ambition to lead the server-side JavaScript domain. Its integrated package manager and bundler have been meticulously designed to streamline developer processes, offering an unparalleled developer experience. As evidenced by its impressive performance metrics, with the capability to handle 66,706 requests per second.",
        //   ParaSix: "Efficiency and developer productivity are at the heart of Bun's design philosophy. While Node.js has made strides in speed and security, Bun takes these concepts to the next level. Lightning-fast startup times and an optimized package management system ensure that developers can focus on coding and innovation without unnecessary delays.",
        //   ParaSeven: "The path Bun treads is not about replacing Node.js but about providing developers with a powerful, streamlined option. The toolkit's introduction marks a potential shift in the server-side JavaScript landscape. As Bun evolves, the responsibility lies with developers to assess its viability and determine its place in their tech stack.",
        //   ParaEight: "In conclusion, Bun is a game-changer, setting new benchmarks in the world of JavaScript development. Its speed, compatibility, and commitment to efficiency make it an attractive option for developers seeking a competitive edge. While it may not be the end of Node.js, it certainly is a compelling alternative that deserves a closer look.",
        //   genreId: '05e3a6e1-b1ee-46d3-9867-9987ec8cc9b5',
        //   authorId: '0b8ee867-8009-4be8-bda4-0ff6db321993',
        // ThumbImage: 'https://ik.imagekit.io/kvap7rsky/bun-thumb.jpg?updatedAt=1699120386252',
        // ThumbImageDescription: 'Its speed, compatibility, and commitment to efficiency make it an attractive option for developers seeking a competitive edge',
        // ImageDescription: 'Its speed, compatibility, and commitment to efficiency make it an attractive option for developers seeking a competitive edge',
        // Image: 'https://ik.imagekit.io/kvap7rsky/bun-inside.jpg?updatedAt=1699120386519'
        // },
        // {
        //   ThumbTitle: "Unraveling the Myth: Raging Bull's Resonance in Cinematic History",
        //   ThumbDescriptionOne: "Delve into the cinematic brilliance and tumultuous narrative of 'Raging Bull,'",
        //   ThumbDescriptionTwo: "From the adrenaline-fueled boxing ring to the turbulent psyche of its protagonist.",
        //   Title: "The Magnanimous Saga of 'Raging Bull': A Profound Cinematic Odyssey",
        //   Description: "Experience the cinematic brilliance of 'Raging Bull,' delving into the tumultuous life of Jake LaMotta, a visceral journey through the visceral arenas of boxing.",
        //   Tag: "Cinematic Masterpiece",
        //   Slug: "raging-bull",
        //   BackgroundColor: "ORANGE",
        //   AsideText: "“The hardest thing to box is the mind.” - Jake LaMotta",
        //   IntroPara: "Embark on a cinematic odyssey as 'Raging Bull' etches an indelible mark in the annals of filmmaking. The story of Jake LaMotta, a tormented boxer whose personal battles spill into the ring, unfolds in raw and unfiltered honesty.",
        //   ParaTwo: "Director Martin Scorsese masterfully crafts a canvas that captures the ferocity of LaMotta's fights alongside the fragility of his personal life. The film transcends its sports genre, becoming a gripping introspection of human nature.",
        //   ParaThree: "Robert De Niro's transformative portrayal of LaMotta is a tour de force, immersing viewers into the protagonist's chaotic world. The film's black-and-white cinematography adds a haunting depth to the visceral narrative.",
        //   ParaFour: "Navigating LaMotta's journey, we witness the turbulent dynamics of masculinity, jealousy, and self-destruction. Each frame resonates with emotional intensity, leaving an enduring impact on the audience.",
        //   ParaFive: "",
        //   ParaSix: "",
        //   ParaSeven: "Scorsese's direction intertwines brutality and vulnerability, presenting a harrowing yet beautiful portrayal of the human spirit. 'Raging Bull' transcends its boxing premise, becoming a profound commentary on life's relentless trials.",
        //   ParaEight: "As the credits roll, 'Raging Bull' remains an indomitable testament to the power of cinema, a poignant reminder that within our struggles lies the essence of our humanity.",
        //   genreId: "a2326d85-c917-4271-bc27-b5ab43982977",
        //   authorId: "0b8ee867-8009-4be8-bda4-0ff6db321993",
        // ThumbImage: 'https://ik.imagekit.io/kvap7rsky/bull-t.jpg?updatedAt=1700400450045',
        // ThumbImageDescription: "Robert De Niro transformative portrayal of LaMotta is a tour de force, immersing viewers into the protagonist's chaotic world",
        // ImageDescription: "Robert De Niro transformative portrayal of LaMotta is a tour de force, immersing viewers into the protagonist's chaotic world",
        // Image: 'https://ik.imagekit.io/kvap7rsky/bull-i.jpg?updatedAt=1700401287480'
        // },
        // {
        //   ThumbTitle: "OnePlus Open: Redefining Innovation in the Smartphone Arena",
        //   ThumbDescriptionOne: "Unveiling the OnePlus Open, a paradigm shift in smartphone technology.",
        //   ThumbDescriptionTwo: "Discover the OnePlus Open: A fusion of cutting-edge design and unparalleled performance.",
        //   Title: "OnePlus Open: Pushing Boundaries in Mobile Technology",
        //   Description: "Experience the OnePlus Open, an epitome of innovation in the realm of smartphones. A device redefining possibilities, merging futuristic design with unrivaled functionality.",
        //   Tag: "Smartphone Innovation",
        //   Slug: "oneplus-open",
        //   BackgroundColor: "TORQUISE",
        //   AsideText: "“Innovation distinguishes between a leader and a follower.” - Steve Jobs",
        //   IntroPara: "The OnePlus Open emerges as a testament to OnePlus's relentless pursuit of innovation. Seamlessly blending futuristic technology with exquisite design, it marks a new era in the smartphone landscape.",
        //   ParaTwo: "Dive into a world of possibilities with the OnePlus Open. Its foldable LTPO3 Flexi-fluid AMOLED display, boasting Dolby Vision and 120Hz refresh rate, redefines visual immersion.",
        //   ParaThree: "Powered by the Qualcomm Snapdragon 8 Gen 2 chipset and 16GB RAM, this device stands at the pinnacle of performance. With 512GB storage and UFS 4.0, it offers a seamless user experience.",
        //   ParaFour: "The camera prowess of the OnePlus Open is unparalleled. Hasselblad Color Calibration, triple rear cameras with multi-directional PDAF, and a 32MP cover camera redefine smartphone photography and videography.",
        //   ParaFive: "Seamless connectivity with 5G support, Wi-Fi 6e/7, and a suite of sensors including fingerprint, gyro, and compass make the OnePlus Open a technological marvel.",
        //   ParaSix: "With a Li-Po 4805mAh battery and 67W wired charging, this device ensures longevity and rapid power-ups. Its IPX4 splash resistance adds durability to its sleek design.",
        //   ParaSeven: "The OnePlus Open isn't just a smartphone; it's a fusion of elegance and functionality, a gateway to a future where innovation meets seamless user experience.",
        //   ParaEight: "In a world where technology evolves rapidly, the OnePlus Open stands as a beacon of innovation, rewriting the rules of what a smartphone can achieve.",
        //   genreId: "1f28a4f3-f193-4a37-8dde-45e875ffeed8",
        //   authorId: "0b8ee867-8009-4be8-bda4-0ff6db321993",
        // ThumbImage: 'https://ik.imagekit.io/kvap7rsky/oneplus-t.jpg?updatedAt=1700400450400',
        // ThumbImageDescription: 'Seamless connectivity with 5G support, Wi-Fi 6e/7, and a suite of sensors including fingerprint, gyro',
        // ImageDescription: 'Seamless connectivity with 5G support, Wi-Fi 6e/7, and a suite of sensors including fingerprint, gyro',
        // Image: 'https://ik.imagekit.io/kvap7rsky/oneplus-i.jpg?updatedAt=1700400450893'
        // },
        // {
        //   ThumbTitle: "The Kargil War: India's Triumph Amidst Adversity",
        //   ThumbDescriptionOne: "Explore the riveting tale of India's resilience and valor during the Kargil War.",
        //   ThumbDescriptionTwo: "Uncover the aftermath and enduring impact of the Kargil War, reflecting on the heroic acts.",
        //   Title: "Kargil War: India's Defining Triumph in the Face of Adversity",
        //   Description: "Delve into the gripping narrative of the Kargil War, an unforgettable chapter in India's history that showcased bravery, sacrifice, and strategic brilliance. Unravel the intricacies, sacrifices, and the legacy that resonates till today.",
        //   Tag: "LOC KARGIL",
        //   Slug: "kargil-war",
        //   BackgroundColor: "TORQUISE",
        //   AsideText: "In the crucible of war, the human spirit shines brightest.",
        //   IntroPara: "The Kargil War of 1999 stands as a testament to India's resilience and fortitude. It was a conflict that caught the nation by surprise, testing the resolve of its armed forces against infiltrators in the high-altitude regions of Kargil.",
        //   ParaTwo: "The Indian military displayed unparalleled bravery and strategic brilliance in regaining control of the infiltrated territories, facing extreme weather and treacherous terrain to secure victory.",
        //   ParaThree: "The conflict's resolution not only showcased India's military prowess but also highlighted the need for diplomatic channels to address cross-border conflicts, emphasizing the importance of international relations.",
        //   ParaFour: "The sacrifices made by the soldiers, their unwavering commitment, and the nation's unity during this challenging time remain etched in the collective memory of India.",
        //   ParaFive: "",
        //   ParaSix: "",
        //   ParaSeven: "The Kargil War serves as a poignant reminder of the importance of vigilance, preparedness, and national unity in defending the sovereignty and integrity of a nation.",
        //   ParaEight: "The valor and sacrifices of the soldiers in the Kargil War continue to inspire generations, standing as a testament to the unyielding spirit of India.",
        //   genreId: '023f04db-f828-4fed-8832-48bf941c24fb',
        //   authorId: '0b8ee867-8009-4be8-bda4-0ff6db321993',
        // ThumbImage: 'https://ik.imagekit.io/kvap7rsky/kargil-t.jpg?updatedAt=1700400450888',
        // ThumbImageDescription: 'The Kargil War serves as a poignant reminder of the importance of vigilance, preparedness',
        // ImageDescription: 'The Kargil War serves as a poignant reminder of the importance of vigilance, preparedness',
        // Image: 'https://ik.imagekit.io/kvap7rsky/kargil-i.jpg?updatedAt=1700400450054'
        // },
        // {
        //   ThumbTitle: "L&T Invests ₹830 Crore in Fabless Semiconductor Chip Design",
        //   ThumbDescriptionOne: "Larsen & Toubro is making waves in the semiconductor industry with a massive ₹830 crore investment.",
        //   ThumbDescriptionTwo: "This investment marks a major step towards India's semiconductor self-reliance and tech prowess.",
        //   Title: "Larsen & Toubro's Ambitious Investment in Fabless Semiconductor Chip Design",
        //   Description: "Larsen & Toubro (L&T) is making a groundbreaking entry into the fabless semiconductor chip design industry with an initial investment of ₹830 crore. This strategic move is set to revolutionize India's semiconductor landscape.",
        //   Tag: "Semiconductors",
        //   Slug: "semiconductor-investment",
        //   BackgroundColor: "PINK",
        //   AsideText: "Innovation knows no boundaries",
        //   IntroPara: "In a decisive step towards fortifying its presence in the technology landscape, Larsen & Toubro (L&T), one of India's engineering giants, is poised to invest a substantial ₹830 crore in the fabless semiconductor chip design industry. This strategic decision marks a significant departure from L&T's conventional business domain and underlines its commitment to technological innovation and self-reliance.",
        //   ParaTwo: "The semiconductor industry has become a cornerstone of modern technology, powering everything from smartphones to advanced computing systems. Recognizing the importance of semiconductor chips in today's world, L&T is making a calculated move to capitalize on the immense potential within this domain. With a keen eye on creating patented fabless chip designs, the company is positioning itself as a key player in India's semiconductor journey.",
        //   ParaThree: "The focus on fabless semiconductor chip design is a prudent choice, considering the formidable competition posed by established manufacturing giants from countries like China, Taiwan, and South Korea. Manufacturing semiconductor chips demands substantial investments and infrastructure, and L&T's strategy is to concentrate on the design aspect, which can be highly valuable through patents and intellectual property.",
        //   ParaFour: "The Indian government has also been actively promoting the growth of the semiconductor industry through incentives and initiatives. It is currently considering multiple applications from semiconductor manufacturers under a significant incentive scheme, further emphasizing the sector's strategic importance.",
        //   ParaFive: "India's semiconductor industry is rapidly evolving, with the recent establishment of the country's first semiconductor plant and the emergence of several chip design startups. This growth is in line with the government's vision to reduce dependency on semiconductor imports and bolster India's self-reliance in this critical technology sector.",
        //   ParaSix: "In parallel, the India Semiconductor R&D Committee has been working to establish the India Semiconductor Research Centre (ISRC), which aims to foster collaboration between industry, academia, and government. This collaborative effort will bridge the gap between research and manufacturing, nurturing a vibrant semiconductor ecosystem in India.",
        //   ParaSeven: "As India strives to catch up in the semiconductor domain after missing several opportunities, L&T's investment in fabless chip design adds a significant milestone to the nation's journey towards becoming a semiconductor hub. With innovation and collaboration at the forefront, India's semiconductor industry is poised for a promising future.",
        //   ParaEight: "Larsen & Toubro's foray into fabless semiconductor chip design demonstrates its commitment to technological excellence and self-reliance. With this substantial investment, L&T is gearing up to play a pivotal role in India's semiconductor story, showcasing the nation's prowess in cutting-edge technology.",
        //   genreId: "05e3a6e1-b1ee-46d3-9867-9987ec8cc9b5",
        //   authorId: "0b8ee867-8009-4be8-bda4-0ff6db321993",
        // ThumbImage: 'https://ik.imagekit.io/kvap7rsky/LandT-t.jpg?updatedAt=1699120389033',
        // ThumbImageDescription: "L&T's investment in fabless chip design adds a significant milestone to the nation's journey towards becoming a semiconductor hub",
        // ImageDescription: "L&T's investment in fabless chip design adds a significant milestone to the nation's journey towards becoming a semiconductor hub",
        // Image: 'https://ik.imagekit.io/kvap7rsky/LandT-i.jpg?updatedAt=1699120389373'
        // },
    //     {
    //       ThumbTitle: "Journey into Vertigo: Hitchcock's Cinematic Enigma Unveiled",
    //       ThumbDescriptionOne: "Embark on a mesmerizing voyage into 'Vertigo,' Alfred Hitchcock's enigmatic masterpiece.",
    //       ThumbDescriptionTwo: "From dizzying heights to witness a film that delves into the complexities of desire.",
    //       Title: "Unraveling 'Vertigo': Hitchcock's Pinnacle of Psychological Intrigue",
    //       Description: "Immerse yourself in the gripping tale of 'Vertigo,' a cinematic marvel that weaves a tapestry of mystery, romance, and psychological suspense, captivating audiences with its haunting narrative.",
    //       Tag: "Psychological Thriller",
    //       Slug: "vertigo-mystery",
    //       BackgroundColor: "PINK",
    //       AsideText: "“Only one is a wanderer; two together are always going somewhere.” - Alfred Hitchcock",
    //       IntroPara: "'Vertigo' stands as a testament to Alfred Hitchcock's mastery, drawing viewers into a world where reality blurs and identities intertwine. The film's nuanced storytelling lingers long after the screen fades to black.",
    //       ParaTwo: "James Stewart's portrayal of a retired detective, ensnared in a web of intrigue and romance, is a cinematic tour de force. His obsession with the elusive Madeleine drives the film's haunting narrative.",
    //       ParaThree: "Hitchcock's meticulous direction weaves an intricate tapestry of suspense, manipulating perceptions and emotions with every frame. The iconic San Francisco backdrop serves as a character in its own right, echoing the film's eerie ambiance.",
    //       ParaFour: "As the narrative unravels, Vertigo takes daring leaps into the realm of the subconscious, exploring the depths of human obsession and the disquieting nature of unchecked desire.",
    //     ParaFive: "Vertigo stands as a quintessential exploration of Hitchcock's fascination with the human psyche. The film's intricate layers peel back the complexities of identity, obsession, and the haunting nature of past traumas, inviting viewers into a mesmerizing labyrinth of emotions and intrigue.",
    //       ParaSix: "Through its haunting visuals and meticulously crafted suspense, Vertigo remains an enduring masterpiece, challenging perceptions and leaving an indelible mark on cinematic history. Hitchcock's deft storytelling and the film's psychological depth ensure its place among the most revered films of all time.",
    //       ParaSeven: "The film's haunting score and visual aesthetics immerse viewers in a world where reality and illusion merge, leaving an indelible mark on cinematic history.",
    //       ParaEight: "Long after its release, 'Vertigo' remains an enigmatic treasure, a testament to Hitchcock's unparalleled ability to captivate audiences with his masterful storytelling.",
    //       genreId: "a2326d85-c917-4271-bc27-b5ab43982977",
    //       authorId: "0b8ee867-8009-4be8-bda4-0ff6db321993",
    //     ThumbImage: 'https://ik.imagekit.io/kvap7rsky/vertigo-t.jpg?updatedAt=1700400450891',
    //     ThumbImageDescription: 'The film haunting score and visual aesthetics immerse viewers in a world where reality and illusion merge',
    //     ImageDescription: 'The film haunting score and visual aesthetics immerse viewers in a world where reality and illusion merge',
    //     Image: 'https://ik.imagekit.io/kvap7rsky/vertigo-i.jpg?updatedAt=1700401288434'
    //     }
    //   ],
    // });

  // const seeding = await prisma.headlinerStory.createMany({
  //   data: [],
  // });
// };

// 1fda14d7-71b9-439f-b63c-a9bc5457b343 - entertainment
// e4d160de-25ac-415f-bf13-496e249f5d30 - news
// e123039d-81cb-404d-8cca-cb99b489116d - review
// 05e3a6e1-b1ee-46d3-9867-9987ec8cc9b5 - tech

// 8b589a4c-272f-46c2-b918-21c5601f4773 - author

// ENTERRAINMENT
// TECH
// NEWS
// REVIEW
