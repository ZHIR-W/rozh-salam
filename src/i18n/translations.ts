export type Language = "en" | "ku" | "ar";

export const languageNames: Record<Language, string> = {
  en: "EN",
  ku: "کوردی",
  ar: "عربي",
};

export const rtlLanguages: Language[] = ["ku", "ar"];

export const translations: Record<Language, Record<string, string>> = {
  en: {
    // Nav
    "nav.home": "Home",
    "nav.videos": "Videos",
    "nav.shows": "Shows",
    "nav.gallery": "Gallery",
    "nav.press": "Press",
    "nav.booking": "Booking",

    // Hero
    "hero.watchReel": "Watch Reel",
    "hero.bookNow": "Book Now",

    // About
    "about.label": "About",
    "about.title": "The Performer",

    // Videos
    "videos.label": "Watch",
    "videos.title": "Videos",
    "videos.featured": "Featured Reel",
    "videos.viewAll": "View All Videos",
    "videos.cat.all": "All",
    "videos.cat.street": "Street",
    "videos.cat.stage": "Stage",
    "videos.cat.mentalism": "Mentalism",
    "videos.cat.tv": "TV",
    "videos.cat.shorts": "Shorts",
    "videos.cat.interview": "Interview",

    // Shows
    "shows.label": "Signature",
    "shows.title": "Shows & Acts",
    "shows.viewAll": "View All Shows",

    // Gallery
    "gallery.label": "Portfolio",
    "gallery.title": "Gallery",

    // Press
    "press.label": "Media",
    "press.title": "Press & Media Kit",
    "press.bio": "Biography",
    "press.shortBio": "Short Bio:",
    "press.extendedBio": "Extended Bio:",
    "press.headshots": "Headshots",
    "press.quotes": "Press Quotes",
    "press.downloadTitle": "Download Media Kit",
    "press.downloadDesc": "High-res photos, logos, bio text, and technical rider.",
    "press.downloadBtn": "Download Media Kit",

    // Booking
    "booking.label": "Contact",
    "booking.title": "Book Rozh Salam",
    "booking.subtitle": "Available for private events, corporate functions, weddings, and television appearances worldwide.",
    "booking.name": "Your Name *",
    "booking.email": "Email *",
    "booking.phone": "Phone / WhatsApp",
    "booking.city": "Country / City",
    "booking.eventType": "Event Type",
    "booking.date": "Preferred Date",
    "booking.budget": "Budget Range",
    "booking.message": "Tell us about your event...",
    "booking.send": "Send Inquiry",
    "booking.thankYou": "Thank You",
    "booking.thankYouMsg": "Your email client should have opened with your booking details. If not, please email us directly at",
    "booking.sendAnother": "Send Another Inquiry",
    "booking.directContact": "Direct Contact",
    "booking.responseTime": "Response Time",
    "booking.responseMsg": "We typically respond within 24–48 hours.",
    "booking.privateEvent": "Private Event",
    "booking.corporate": "Corporate",
    "booking.wedding": "Wedding",
    "booking.theatre": "Theatre",
    "booking.television": "Television",
    "booking.brandActivation": "Brand Activation",
    "booking.other": "Other",
    "booking.under1k": "Under $1,000",
    "booking.1k5k": "$1,000 – $5,000",
    "booking.5k15k": "$5,000 – $15,000",
    "booking.15kPlus": "$15,000+",
    "booking.discuss": "Discuss",

    // CTA
    "cta.title": "Make Your Event Unforgettable",
    "cta.subtitle": "Available for private events, corporate functions, weddings, and television appearances worldwide.",
    "cta.book": "Book Rozh Salam",

    // Press quotes section on homepage
    "pressSection.label": "Press",
    "pressSection.title": "What They Say",

    // Featured shows on homepage
    "featuredShows.label": "Signature",
    "featuredShows.title": "Shows & Acts",

    // Featured videos on homepage
    "featuredVideos.label": "Featured",
    "featuredVideos.title": "Videos",

    // Footer
    "footer.rights": "All rights reserved.",
  },

  ku: {
    "nav.home": "سەرەتا",
    "nav.videos": "ڤیدیۆکان",
    "nav.shows": "شۆکان",
    "nav.gallery": "گەلەری",
    "nav.press": "میدیا",
    "nav.booking": "حجز",

    "hero.watchReel": "ڤیدیۆ ببینە",
    "hero.bookNow": "ئێستا حجز بکە",

    "about.label": "دەربارە",
    "about.title": "ئەکتەر",

    "videos.label": "تەماشابکە",
    "videos.title": "ڤیدیۆکان",
    "videos.featured": "ڤیدیۆی تایبەت",
    "videos.viewAll": "هەموو ڤیدیۆکان ببینە",
    "videos.cat.all": "هەموو",
    "videos.cat.street": "شەقام",
    "videos.cat.stage": "ستەیج",
    "videos.cat.mentalism": "مێنتاڵیزم",
    "videos.cat.tv": "تەلەڤزیۆن",
    "videos.cat.shorts": "کورتە",
    "videos.cat.interview": "چاوپێکەوتن",

    "shows.label": "تایبەت",
    "shows.title": "شۆ و ئەکتەکان",
    "shows.viewAll": "هەموو شۆکان ببینە",

    "gallery.label": "کارەکان",
    "gallery.title": "گەلەری",

    "press.label": "میدیا",
    "press.title": "میدیا و پاکێجی ڕاگەیاندن",
    "press.bio": "ژیاننامە",
    "press.shortBio": "ژیاننامەی کورت:",
    "press.extendedBio": "ژیاننامەی درێژ:",
    "press.headshots": "وێنەکان",
    "press.quotes": "وتەکانی میدیا",
    "press.downloadTitle": "پاکێجی میدیا دابەزێنە",
    "press.downloadDesc": "وێنەی کوالیتی بەرز، لۆگۆ، دەق، و زانیاری تەکنیکی.",
    "press.downloadBtn": "پاکێجی میدیا دابەزێنە",

    "booking.label": "پەیوەندی",
    "booking.title": "حجزی ڕۆژ سەلام",
    "booking.subtitle": "بەردەستە بۆ ئاهەنگی تایبەت، کۆمپانیاکان، هەڵبژاردن، و دەرکەوتنی تەلەڤزیۆنی لە هەموو جیهاندا.",
    "booking.name": "ناوت *",
    "booking.email": "ئیمەیڵ *",
    "booking.phone": "ژمارەی مۆبایل / واتسئاپ",
    "booking.city": "وڵات / شار",
    "booking.eventType": "جۆری ئاهەنگ",
    "booking.date": "بەرواری پەسەندکراو",
    "booking.budget": "بودجە",
    "booking.message": "باسی ئاهەنگەکەت بکە...",
    "booking.send": "ناردن",
    "booking.thankYou": "سوپاس",
    "booking.thankYouMsg": "ئیمەیڵەکەت دەبێت کرابێتەوە بە وردەکاری حجزەکەت. ئەگەر نەکرایەوە، تکایە ئیمەیڵ بنێرە بۆ",
    "booking.sendAnother": "داواکاری تر بنێرە",
    "booking.directContact": "پەیوەندی ڕاستەوخۆ",
    "booking.responseTime": "کاتی وەڵامدانەوە",
    "booking.responseMsg": "ئێمە بە شێوەیەکی ئاسایی لە ماوەی ٢٤-٤٨ کاتژمێردا وەڵام دەدەینەوە.",
    "booking.privateEvent": "ئاهەنگی تایبەت",
    "booking.corporate": "کۆمپانیا",
    "booking.wedding": "هەڵبژاردن",
    "booking.theatre": "شانۆ",
    "booking.television": "تەلەڤزیۆن",
    "booking.brandActivation": "چالاکی براند",
    "booking.other": "تر",
    "booking.under1k": "کەمتر لە $١,٠٠٠",
    "booking.1k5k": "$١,٠٠٠ – $٥,٠٠٠",
    "booking.5k15k": "$٥,٠٠٠ – $١٥,٠٠٠",
    "booking.15kPlus": "$١٥,٠٠٠+",
    "booking.discuss": "گفتوگۆ",

    "cta.title": "ئاهەنگەکەت بکە بە نەبیرچوونەوە",
    "cta.subtitle": "بەردەستە بۆ ئاهەنگی تایبەت، کۆمپانیاکان، هەڵبژاردن، و دەرکەوتنی تەلەڤزیۆنی لە هەموو جیهاندا.",
    "cta.book": "حجزی ڕۆژ سەلام",

    "pressSection.label": "میدیا",
    "pressSection.title": "چی دەڵێن",

    "featuredShows.label": "تایبەت",
    "featuredShows.title": "شۆ و ئەکتەکان",

    "featuredVideos.label": "تایبەت",
    "featuredVideos.title": "ڤیدیۆکان",

    "footer.rights": "هەموو مافەکان پارێزراون.",
  },

  ar: {
    "nav.home": "الرئيسية",
    "nav.videos": "فيديوهات",
    "nav.shows": "العروض",
    "nav.gallery": "المعرض",
    "nav.press": "الإعلام",
    "nav.booking": "الحجز",

    "hero.watchReel": "شاهد العرض",
    "hero.bookNow": "احجز الآن",

    "about.label": "حول",
    "about.title": "المؤدي",

    "videos.label": "شاهد",
    "videos.title": "فيديوهات",
    "videos.featured": "فيديو مميز",
    "videos.viewAll": "شاهد جميع الفيديوهات",
    "videos.cat.all": "الكل",
    "videos.cat.street": "شارع",
    "videos.cat.stage": "مسرح",
    "videos.cat.mentalism": "قراءة الأفكار",
    "videos.cat.tv": "تلفزيون",
    "videos.cat.shorts": "مقاطع قصيرة",
    "videos.cat.interview": "مقابلة",

    "shows.label": "مميز",
    "shows.title": "العروض والأعمال",
    "shows.viewAll": "شاهد جميع العروض",

    "gallery.label": "الأعمال",
    "gallery.title": "المعرض",

    "press.label": "الإعلام",
    "press.title": "الإعلام والملف الصحفي",
    "press.bio": "السيرة الذاتية",
    "press.shortBio": "سيرة مختصرة:",
    "press.extendedBio": "سيرة مفصلة:",
    "press.headshots": "الصور",
    "press.quotes": "اقتباسات صحفية",
    "press.downloadTitle": "تحميل الملف الصحفي",
    "press.downloadDesc": "صور عالية الدقة، شعارات، نص السيرة الذاتية، ومتطلبات تقنية.",
    "press.downloadBtn": "تحميل الملف الصحفي",

    "booking.label": "تواصل",
    "booking.title": "احجز روژ سلام",
    "booking.subtitle": "متاح للمناسبات الخاصة، فعاليات الشركات، حفلات الزفاف، والعروض التلفزيونية حول العالم.",
    "booking.name": "اسمك *",
    "booking.email": "البريد الإلكتروني *",
    "booking.phone": "الهاتف / واتساب",
    "booking.city": "البلد / المدينة",
    "booking.eventType": "نوع الفعالية",
    "booking.date": "التاريخ المفضل",
    "booking.budget": "نطاق الميزانية",
    "booking.message": "أخبرنا عن فعاليتك...",
    "booking.send": "إرسال الاستفسار",
    "booking.thankYou": "شكراً لك",
    "booking.thankYouMsg": "يجب أن يكون برنامج البريد الإلكتروني قد فُتح مع تفاصيل حجزك. إن لم يفتح، يرجى مراسلتنا مباشرة على",
    "booking.sendAnother": "إرسال استفسار آخر",
    "booking.directContact": "تواصل مباشر",
    "booking.responseTime": "وقت الرد",
    "booking.responseMsg": "نرد عادة خلال ٢٤-٤٨ ساعة.",
    "booking.privateEvent": "مناسبة خاصة",
    "booking.corporate": "شركات",
    "booking.wedding": "زفاف",
    "booking.theatre": "مسرح",
    "booking.television": "تلفزيون",
    "booking.brandActivation": "تفعيل العلامة التجارية",
    "booking.other": "أخرى",
    "booking.under1k": "أقل من $١,٠٠٠",
    "booking.1k5k": "$١,٠٠٠ – $٥,٠٠٠",
    "booking.5k15k": "$٥,٠٠٠ – $١٥,٠٠٠",
    "booking.15kPlus": "$١٥,٠٠٠+",
    "booking.discuss": "للنقاش",

    "cta.title": "اجعل فعاليتك لا تُنسى",
    "cta.subtitle": "متاح للمناسبات الخاصة، فعاليات الشركات، حفلات الزفاف، والعروض التلفزيونية حول العالم.",
    "cta.book": "احجز روژ سلام",

    "pressSection.label": "الإعلام",
    "pressSection.title": "ماذا يقولون",

    "featuredShows.label": "مميز",
    "featuredShows.title": "العروض والأعمال",

    "featuredVideos.label": "مميز",
    "featuredVideos.title": "فيديوهات",

    "footer.rights": "جميع الحقوق محفوظة.",
  },
};
