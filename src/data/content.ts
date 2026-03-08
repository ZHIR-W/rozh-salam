export const siteConfig = {
  name: "Rozh Salam",
  tagline: "Impossible, up close.",
  email: "booking@rozhsalam.com",
  whatsapp: "+964 772 517 3244",
  whatsappLink: "https://wa.me/9647725173244",
  instagram: "https://instagram.com/rozhsalam",
  youtube: "https://youtube.com/@rozhsalam",
  tiktok: "https://tiktok.com/@rozhsalam",
};

export const aboutText = {
  short: "Rozh Salam is a close-up magician and mentalist from Iraq, known for his cinematic performances that blur the line between reality and illusion. With 4 years of experience performing at private events, luxury galas, and television appearances — and invited to perform at events outside Iraq — Rozh has built a reputation for the impossible.",
  long: "From the streets of Kurdistan to international stages, Rozh Salam has captivated audiences with his unique blend of sleight-of-hand mastery and psychological illusion. His performances are intimate, powerful, and unforgettable — designed to leave a lasting impression on every audience member.",
};

export const videos = [
  { id: "1", title: "The Impossible Card", category: "Street", thumbnail: "/photos/DSC_3136.JPG", embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", featured: true },
  { id: "2", title: "Mind Reading Live", category: "Mentalism", thumbnail: "/photos/DSC_3132.JPG", embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", featured: false },
  { id: "3", title: "Corporate Gala Performance", category: "Stage", thumbnail: "/photos/DSC_3104.JPG", embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", featured: false },
  { id: "4", title: "Street Magic — Erbil", category: "Street", thumbnail: "/photos/DSC07905.JPG", embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", featured: false },
  { id: "5", title: "Television Special", category: "TV", thumbnail: "/photos/DSC07904.JPG", embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", featured: false },
  { id: "6", title: "60-Second Miracle", category: "Shorts", thumbnail: "/photos/8.jpg", embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", featured: false },
];

export const shows = [
  {
    id: "1",
    title: "The Intimate Experience",
    shortDesc: "An exclusive close-up magic show for small groups of 10–50 guests.",
    longDesc: "A deeply personal, interactive performance where every guest becomes part of the magic. Cards, coins, and borrowed objects transform in their hands. Perfect for private dinners, VIP receptions, and luxury brand activations.",
    image: "/photos/IMG_3184.JPG",
    gallery: ["/photos/IMG_3184.JPG", "/photos/DSC_3136.JPG"],
    eventTypes: ["Private Dinner", "VIP Reception", "Brand Activation"],
    duration: "45–60 min",
  },
  {
    id: "2",
    title: "Mentalism Unlocked",
    shortDesc: "A mind-reading experience that leaves audiences speechless.",
    longDesc: "Rozh reads thoughts, predicts decisions, and reveals secrets no one should know. A cerebral performance blending psychology, suggestion, and showmanship. Ideal for corporate events and theatre settings.",
    image: "/photos/DSC_3132.JPG",
    gallery: ["/photos/DSC_3132.JPG", "/photos/DSC_3104.JPG"],
    eventTypes: ["Corporate Event", "Theatre", "Conference"],
    duration: "30–45 min",
  },
  {
    id: "3",
    title: "Grand Illusion",
    shortDesc: "A full-stage spectacular for large audiences.",
    longDesc: "A cinematic stage show combining close-up miracles projected on screen with large-scale illusions. Designed for theatres, festivals, and televised events with audiences of 200+.",
    image: "/photos/DSC07905.JPG",
    gallery: ["/photos/DSC07905.JPG", "/photos/DSC07904.JPG"],
    eventTypes: ["Theatre", "Festival", "TV Special"],
    duration: "60–90 min",
  },
  {
    id: "4",
    title: "Wedding Magic",
    shortDesc: "Make your special day truly unforgettable.",
    longDesc: "Rozh moves through your reception performing intimate miracles for each table. A perfect icebreaker that creates shared moments of wonder. Customizable to match your wedding theme and schedule.",
    image: "/photos/IMG_1598.JPG",
    gallery: ["/photos/IMG_1598.JPG", "/photos/IMG_1594.JPG"],
    eventTypes: ["Wedding", "Engagement Party", "Anniversary"],
    duration: "2–3 hours (roaming)",
  },
  {
    id: "5",
    title: "Street Sessions",
    shortDesc: "Raw, unscripted magic performed on the streets.",
    longDesc: "Inspired by the tradition of street performance, Rozh takes magic directly to unsuspecting audiences. Ideal for content creation, brand campaigns, and social media activations.",
    image: "/photos/8.jpg",
    gallery: ["/photos/8.jpg", "/photos/IMG_1595.JPG"],
    eventTypes: ["Content Creation", "Brand Campaign", "Social Media"],
    duration: "Variable",
  },
  {
    id: "6",
    title: "Corporate Keynote",
    shortDesc: "A magic-infused keynote that inspires and entertains.",
    longDesc: "Rozh combines motivational storytelling with live magic demonstrations to deliver a unique keynote experience. Themes include perception, innovation, and the impossible — tailored to your corporate message.",
    image: "/photos/DSC_3104.JPG",
    gallery: ["/photos/DSC_3104.JPG", "/photos/DSC_3136.JPG"],
    eventTypes: ["Conference", "Corporate Retreat", "Team Building"],
    duration: "30–60 min",
  },
];

export const galleryPhotos = [
  "/photos/IMG_3184.JPG",
  "/photos/DSC_3136.JPG",
  "/photos/DSC_3132.JPG",
  "/photos/DSC_3104.JPG",
  "/photos/DSC07905.JPG",
  "/photos/DSC07904.JPG",
  "/photos/8.jpg",
  "/photos/IMG_1598.JPG",
  "/photos/IMG_1594.JPG",
  "/photos/IMG_1595.JPG",
];

export const pressQuotes = [
  { quote: "One of the most captivating performers I've ever witnessed.", source: "Kurdistan24 TV" },
  { quote: "Rozh Salam redefines what's possible with a deck of cards.", source: "Rudaw Media" },
  { quote: "A masterclass in close-up magic and audience connection.", source: "Event Magazine" },
  { quote: "The future of magic in the Middle East.", source: "The National" },
];

export const videoCategories = ["All", "Street", "Stage", "Mentalism", "TV", "Shorts"] as const;
