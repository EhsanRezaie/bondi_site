import type { Lang } from './providers'

const en = {
  brand: 'Bondi',
  nav: {
    features: 'Features',
    how: 'How it works',
    safety: 'Safety',
    faq: 'FAQ',
    contact: 'Contact',
    download: 'Get the app',
  },
  hero: {
    badge: 'Available on Android, iOS & Web',
    title: 'Find your *match* right here',
    lead: 'Bondi is a Persian dating app to meet real, verified people around you — swipe, match, and chat in real time.',
    android: 'Download for Android',
    ios: 'Download for iOS',
    web: 'Open web app',
    notes: ['Verified profiles', 'Real people only', 'Encrypted & private'],
  },
  features: {
    kicker: 'Features',
    title: 'Everything a great connection needs',
    sub: 'From swiping to secure chat — Bondi is crafted for a smooth, effortless experience.',
    items: [
      {
        name: 'Discover nearby',
        desc: 'Swipe through curated profiles with real photos and prompts. Find people near you who share your vibe.',
      },
      {
        name: 'Real-time chat',
        desc: 'The moment you match, the conversation starts. Instant, encrypted messaging built right in.',
      },
      {
        name: 'Verified profiles',
        desc: 'Photo & face verification means real people only — verified members earn a blue badge.',
      },
      {
        name: 'Location-based',
        desc: 'Meet people close to you, on your terms. Your exact location is never shown publicly.',
      },
      {
        name: 'Premium, ad-free',
        desc: 'Free to use with ads, or go Premium to remove every ad and unlock unlimited likes.',
      },
      {
        name: 'Earn rewards',
        desc: 'Gain free Premium days by watching short ads and leaving app-store reviews.',
      },
    ],
  },
  how: {
    kicker: 'How it works',
    title: 'Three steps to a new connection',
    sub: 'Fast and simple — from sign-up to your first message in minutes.',
    steps: [
      {
        name: 'Create your account',
        desc: 'Sign up with email or phone, then pass a quick identity check to keep Bondi safe.',
      },
      {
        name: 'Discover & swipe',
        desc: 'See profiles near you and swipe to like or pass on who catches your eye.',
      },
      {
        name: 'Match & chat',
        desc: "When you both like each other, it's a match — break the ice with instant, secure messages.",
      },
    ],
  },
  screens: {
    kicker: 'Preview',
    title: 'Step inside Bondi',
    sub: 'Discover, chat and match — all in one fluid, hand-crafted experience.',
    discover: 'Discover',
    chat: 'Messages',
    likes: 'Likes',
  },
  safety: {
    kicker: 'Safety',
    title: 'Safety is built into Bondi',
    sub: 'Strict rules and real tools keep Bondi a respectful space for everyone.',
    items: [
      {
        name: 'Verified members',
        desc: 'Every profile passes photo & face verification, so you only ever meet real people.',
      },
      {
        name: 'Report & block',
        desc: 'Report or block anyone at any time. Our team reviews every report around the clock.',
      },
      {
        name: 'Privacy & encryption',
        desc: 'Chats are encrypted and in-app screenshots are disabled to protect your privacy.',
      },
      {
        name: 'Location control',
        desc: 'You set the distance. Your exact location is never shared publicly.',
      },
    ],
  },
  faq: {
    kicker: 'FAQ',
    title: 'Questions? Answered.',
    sub: 'Everything you might want to know about Bondi.',
    items: [
      {
        q: 'Is Bondi free?',
        a: 'Yes. Bondi is free to use — you can like, match and chat at no cost. Ads keep it free; Premium removes them and adds perks.',
      },
      {
        q: 'How do I verify my account?',
        a: 'During onboarding you submit a short selfie verification video. Our system reviews it and issues your verified badge.',
      },
      {
        q: 'Who can I meet on Bondi?',
        a: 'Anyone 18+ around you. Every member is verified so the community stays real and respectful.',
      },
      {
        q: 'How does location sharing work?',
        a: 'You control the distance — how close or far your matches can be. Your exact location is never shown publicly.',
      },
      {
        q: 'Is my data private?',
        a: 'Chats are encrypted and screenshots are disabled in-app. We never sell your data.',
      },
    ],
  },
  cta: {
    title: 'Ready to find your match?',
    sub: 'Download Bondi today — free on Android and iOS.',
  },
  footer: {
    about:
      'Bondi is a Persian dating app for people looking for genuine, meaningful connections.',
    product: 'Product',
    company: 'Bondi',
    legal: 'Legal',
    contactTitle: 'Contact',
    follow: 'Follow us',
    contactUs: 'Contact us',
    aboutUs: 'About us',
    webApp: 'Web app',
    terms: 'Terms of Service',
    privacy: 'Privacy Policy',
    safetyPage: 'Safety guidelines',
    rights: '© 2026 Bondi. All rights reserved.',
    email: 'support@bondi.app',
  },
}

const fa: typeof en = {
  brand: 'باندی',
  nav: {
    features: 'امکانات',
    how: 'چطور کار می‌کند',
    safety: 'امنیت',
    faq: 'سوالات متداول',
    contact: 'تماس',
    download: 'دانلود اپلیکیشن',
  },
  hero: {
    badge: 'در دسترس برای اندروید، آیفون و وب',
    title: 'جفتت رو همین‌جا *پیدا کن*',
    lead: 'باندی یک اپلیکیشن دوستیابی فارسی است که با آن آدم‌های واقعی و احرازشدهٔ نزدیک خودت را پیدا می‌کنی، جور می‌شوی و بی‌درنگ چت می‌کنی.',
    android: 'دانلود اندروید',
    ios: 'دانلود آیفون',
    web: 'ورود به نسخهٔ وب',
    notes: ['پروفایل‌های احرازشده', 'فقط آدم‌های واقعی', 'رمزگذاری‌شده و خصوصی'],
  },
  features: {
    kicker: 'امکانات',
    title: 'هرچی برای یک آشنایی خوب لازم است',
    sub: 'از کشیدن کارت تا چت امن؛ باندی برای یک تجربهٔ روان و بی‌دردسر طراحی شده است.',
    items: [
      {
        name: 'کشف افراد نزدیک',
        desc: 'کارت‌ها را بکش و پروفایل‌های هماهنگ با سلیقه‌ات را با عکس و پرامپت‌های واقعی ببین.',
      },
      {
        name: 'چت بی‌درنگ و امن',
        desc: 'وقتی جور شدی، گفتگو معطل نمی‌ماند. پیام‌رسانی آنی با رمزگذاری کامل، همین‌جا توی اپ.',
      },
      {
        name: 'پروفایل احرازشده',
        desc: 'احراز هویت عکس و چهره یعنی فقط آدم‌های واقعی؛ اعضای تأییدشده نشان آبی می‌گیرند.',
      },
      {
        name: 'بر اساس موقعیت مکانی',
        desc: 'همتاه‌های نزدیک خودت را انتخاب کن و فاصله را خودت مدیریت کن. موقعیت دقیقت هرگز عمومی نمی‌شود.',
      },
      {
        name: 'پریمیوم بدون تبلیغ',
        desc: 'رایگان با تبلیغ، یا پریمیوم برای حذف کامل تبلیغ‌ها و لایک نامحدود.',
      },
      {
        name: 'جایزه بگیر',
        desc: 'با تماشای تبلیغ‌های کوتاه و ثبت نظر در استور، روزهای پریمیوم رایگان جمع کن.',
      },
    ],
  },
  how: {
    kicker: 'نحوهٔ کار',
    title: 'سه قدم تا آشنایی جدید',
    sub: 'ساده و سریع؛ از ثبت‌نام تا اولین پیام، کمتر از چند دقیقه.',
    steps: [
      {
        name: 'حساب بساز',
        desc: 'با ایمیل یا شمارهٔ موبایل ثبت‌نام کن و با یک بررسی سریع هویت، جامعه را امن نگه دار.',
      },
      {
        name: 'بگرد و انتخاب کن',
        desc: 'پروفایل‌های نزدیک خودت را ببین و برای آدم‌هایی که جذاب‌اند بکش یا ردشان کن.',
      },
      {
        name: 'جور شو و چت کن',
        desc: 'وقتی هر دو لایک کنید، جور می‌شوید — با پیام‌های آنی و امن اولین قدم را بردار.',
      },
    ],
  },
  screens: {
    kicker: 'پیش‌نمایش',
    title: 'دنیای باندی را ببین',
    sub: 'کشف، چت و جور شدن — همه در یک تجربهٔ یکپارچه و خوش‌دست.',
    discover: 'کشف',
    chat: 'پیام‌ها',
    likes: 'لایک‌ها',
  },
  safety: {
    kicker: 'امنیت',
    title: 'امنیت بخشی از باندی است',
    sub: 'قوانین سخت‌گیرانه و ابزارهای واقعی، باندی را برای همه فضایی امن و محترم نگه می‌دارند.',
    items: [
      {
        name: 'اعضای احرازشده',
        desc: 'هر پروفایل از فیلتر احراز هویت عکس و چهره عبور می‌کند تا فقط با آدم‌های واقعی آشنا شوی.',
      },
      {
        name: 'گزارش و مسدودسازی',
        desc: 'هر زمان بخواهی می‌توانی هر کاربری را گزارش یا مسدود کنی؛ تیم ما شبانه‌روزی رسیدگی می‌کند.',
      },
      {
        name: 'حریم خصوصی و رمزگذاری',
        desc: 'چت‌ها رمزگذاری می‌شوند و برای حفاظت از حریم خصوصی، اسکرین‌شات داخل اپ غیرفعال است.',
      },
      {
        name: 'کنترل موقعیت مکانی',
        desc: 'محدودهٔ فاصله را خودت تعیین می‌کنی. موقعیت دقیقت هرگز عمومی نمایش داده نمی‌شود.',
      },
    ],
  },
  faq: {
    kicker: 'سوالات متداول',
    title: 'پاسخ سوال‌هایت',
    sub: 'هر آنچه احتمالاً دربارهٔ باندی می‌خواهی بدانی.',
    items: [
      {
        q: 'آیا باندی رایگان است؟',
        a: 'بله. باندی رایگان است — می‌توانی بدون هیچ هزینه‌ای لایک کنی، جور شوی و چت کنی. تبلیغ‌ها اپ را رایگان نگه می‌دارند؛ پریمیوم آن‌ها را حذف و امکانات بیشتری اضافه می‌کند.',
      },
      {
        q: 'چطور حسابم را احراز کنم؟',
        a: 'موقع ثبت‌نام یک ویدیوی کوتاه احراز هویت ضبط می‌کنی. سیستم ما آن را بررسی و نشان احراز هویت را برایت صادر می‌کند.',
      },
      {
        q: 'در باندی با چه کسانی آشنا می‌شوم؟',
        a: 'با هر فرد بالای ۱۸ سالِ نزدیک خودت. همهٔ اعضا احراز هویت شده‌اند تا جامعه واقعی و محترم بماند.',
      },
      {
        q: 'موقعیت مکانی چطور کار می‌کند؟',
        a: 'محدودهٔ فاصله دست خودت است — اینکه همتاه‌هایت چقدر نزدیک یا دور باشند. موقعیت دقیقت هرگز عمومی نمی‌شود.',
      },
      {
        q: 'آیا اطلاعاتم خصوصی است؟',
        a: 'چت‌ها رمزگذاری می‌شوند و داخل اپ اسکرین‌شات غیرفعال است. ما هرگز اطلاعاتت را نمی‌فروشیم.',
      },
    ],
  },
  cta: {
    title: 'آماده‌ای جفتت را پیدا کنی؟',
    sub: 'همین امروز باندی را دانلود کن — رایگان روی اندروید و آیفون.',
  },
  footer: {
    about:
      'باندی اپلیکیشن دوستیابی فارسی برای افرادی است که به‌دنبال ارتباط‌های واقعی و معنادار هستند.',
    product: 'محصول',
    company: 'باندی',
    legal: 'قانونی',
    contactTitle: 'تماس',
    follow: 'ما را دنبال کنید',
    contactUs: 'تماس با ما',
    aboutUs: 'دربارهٔ ما',
    webApp: 'نسخهٔ وب',
    terms: 'شرایط استفاده',
    privacy: 'حریم خصوصی',
    safetyPage: 'راهنمای امنیت',
    rights: '© ۲۰۲۶ باندی. همهٔ حقوق محفوظ است.',
    email: 'support@bondi.app',
  },
}

export const dictionaries: Record<Lang, typeof en> = { en, fa }
