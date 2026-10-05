export interface NavItem {
  name: string;
  href: string;
  badge?: string;
  dropdown?: {
    name: string;
    href: string;
    description?: string;
    trending?: boolean;
    icon?: string;
  }[];
}

export const NAV_LINKS: NavItem[] = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    href: "#services",
    dropdown: [
      { name: "All Services", href: "#services", description: "Explore full digital ecosystem" },
      { name: "Website Development", href: "/web-development", trending: true, description: "Custom Next.js & React web platforms" },
      { name: "App Development", href: "/app-development", trending: true, description: "Bespoke iOS, Android & Cross-platform apps" },
      { name: "Digital Marketing", href: "#services", trending: true, description: "SEO, Performance marketing & paid ads" },
      { name: "DesignX (Brand & UI/UX)", href: "#services", trending: true, description: "Conversion-optimized product design" },
      { name: "Online Courses", href: "#services", description: "Practical mastery in tech & digital marketing" },
      { name: "AI Solutions", href: "#services", description: "Workflow automation and smart chatbots" },
    ],
  },
  { name: "About", href: "#about" },
  { name: "Work", href: "#portfolio" },
  { name: "Reviews", href: "#testimonials" },
  { name: "Pricing", href: "#pricing" },
  { name: "Team", href: "#team" },
];

export const TECH_MARQUEE = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Framework" },
  { name: "Node.js", category: "Backend" },
  { name: "Express", category: "API" },
  { name: "MongoDB", category: "Database" },
  { name: "TypeScript", category: "Language" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Flutter", category: "Mobile" },
  { name: "Python", category: "AI & ML" },
  { name: "Figma", category: "UI/UX" },
  { name: "Google Ads", category: "Marketing" },
  { name: "AWS Cloud", category: "DevOps" },
  { name: "PostgreSQL", category: "Database" },
  { name: "GraphQL", category: "API" },
];

export const ABOUT_STATS = [
  { value: "50+", label: "Projects Delivered", detail: "Completed on schedule with 100% client sign-off" },
  { value: "15+", label: "Global Clients", detail: "Active partners in India, United Kingdom & UAE" },
  { value: "8+", label: "Core Services", detail: "Web, App, Marketing, UI/UX, AI under one roof" },
  { value: "98%", label: "Satisfaction Rate", detail: "Long-term client retention and repeat engagements" },
];

export const SERVICES = [
  {
    id: "web-dev",
    title: "Web Development",
    category: "Full Stack",
    desc: "Websites that don't just sit there - they sell. Lightning-fast, mobile-perfect, and built to turn clicks into paying customers.",
    img: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&auto=format&fit=crop&q=80",
    color: "#0d7a6b",
    tag: "High Conversion",
    features: [
      "Custom React & Next.js Architecture",
      "Sub-second Load Times & Top SEO",
      "Dynamic CMS & E-commerce Systems",
      "Interactive 3D & Micro-interactions"
    ]
  },
  {
    id: "app-dev",
    title: "App Development",
    category: "Mobile",
    desc: "Your idea, in their pocket. We design and build iOS and Android apps people actually open twice, with silky smooth 60fps native feel.",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=80",
    color: "#5b21b6",
    tag: "Cross-Platform",
    features: [
      "Flutter & React Native Applications",
      "Offline-first Local Caching & Sync",
      "Push Notifications & Analytics",
      "App Store & Play Store Certification"
    ]
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    category: "Growth",
    desc: "Right people. Right moment. Right offer. SEO, paid ads, and viral social media working together to fill your sales pipeline.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
    color: "#ec4899",
    tag: "ROI Focused",
    features: [
      "Data-driven Google & Meta Ads",
      "Technical & On-Page SEO Ranking",
      "High-converting Copywriting & Hooks",
      "Full Pipeline Funnel Tracking"
    ]
  },
  {
    id: "uiux-design",
    title: "DesignX (UI/UX & Branding)",
    category: "Product Design",
    desc: "Designs that command respect and spark desire. Complete design systems, intuitive wireframes, and memorable visual brand identities.",
    img: "https://images.unsplash.com/photo-1581291518655-9523c932deb2?w=800&auto=format&fit=crop&q=80",
    color: "#c8ff00",
    tag: "Brand Authority",
    features: [
      "Interactive Figma Prototypes & Systems",
      "Deep User Flow & Behavioral Research",
      "Iconography, Typography & 3D Visuals",
      "Design Systems Built for Developers"
    ]
  },
  {
    id: "ai-solutions",
    title: "AI Solutions & Automation",
    category: "Intelligence",
    desc: "Supercharge your business with smart automation, custom LLM bots, and intelligent workflows that save dozens of team hours weekly.",
    img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80",
    color: "#00f0ff",
    tag: "Future Ready",
    features: [
      "Custom Knowledge-Base Chatbots",
      "Lead Generation & CRM Automation",
      "Automated Social & Content Engines",
      "Internal Tooling & Workflow AI"
    ]
  },
  {
    id: "online-courses",
    title: "dotUniverse Academy",
    category: "Education",
    desc: "Practical, real-world masterclasses in full-stack engineering, performance marketing, and product design taught by active practitioners.",
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80",
    color: "#f59e0b",
    tag: "Career Accelerating",
    features: [
      "Production-level Live Code Repos",
      "1-on-1 Mentorship & Portfolio Reviews",
      "Direct Placement Support",
      "Lifetime Community & Tool Access"
    ]
  },
];

export const PORTFOLIO_PROJECTS = [
  {
    title: "Visa Direct",
    category: "Digital Marketing & Analytics",
    result: "Boosted inquiry conversions by 310% through targeted cross-border social funnels",
    badge: "Live Client",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&auto=format&fit=crop&q=80",
    stats: "310% More Leads",
    tags: ["Google Ads", "Meta Ads", "Analytics"]
  },
  {
    title: "El Broasteria",
    category: "Web Development & Brand Ads",
    result: "Built a bold visual brand identity and digital ordering platform that drove massive local footfall",
    badge: "Live Client",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop&q=80",
    stats: "2.4x In-Store Footfall",
    tags: ["Next.js", "Brand Identity", "Google Local"]
  },
  {
    title: "Services Cell Plus",
    category: "Full Stack Web & SEO",
    result: "Delivered an authoritative corporate web portal that established market trust in UK & Europe",
    badge: "Live Client",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80",
    stats: "#1 Google Ranking",
    tags: ["React", "Custom CMS", "Technical SEO"]
  },
  {
    title: "FitTrack Pro App",
    category: "App Development",
    result: "Sleek workout & nutrition tracker with real-time biometric charts and social challenges",
    badge: "Featured App",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=80",
    stats: "4.9 ★ App Rating",
    tags: ["Flutter", "Node.js", "Firebase"]
  },
  {
    title: "Krypton Luxury Store",
    category: "E-Commerce Platform",
    result: "High-end luxury apparel store featuring 3D product previews and instant one-click checkout",
    badge: "E-Commerce",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=80",
    stats: "4.2% Conversion Rate",
    tags: ["Tailwind", "Stripe", "Next.js"]
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Mehul Tandon",
    role: "Founder, Fitness Care Gym",
    location: "India 🇮🇳",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
    quote: "40 leads a month felt like an impenetrable ceiling. dotUniverse redesigned our website, took over our Google Ads, and within 90 days we were pulling 180 qualified leads every single month. What set them apart wasn't just the numbers — it was that they truly understood our business mechanics, not just what looked pretty on a slide deck.",
    stars: 5,
    result: "40 → 180 Leads/Month · Google Ads · Website Redesign",
  },
  {
    id: 2,
    name: "Shah",
    role: "Owner, SRK Trends",
    location: "United Kingdom 🇬🇧",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80",
    quote: "We had a vision for our store and zero faith any agency could execute it on time. dotUniverse built the entire e-commerce platform, wired Instagram directly into the shop, and handed us a custom CMS in 3 weeks flat. Our conversion rate doubled on day one. I've worked with agencies that take 3 months to do half of this.",
    stars: 5,
    result: "E-commerce Built in 3 Weeks · Instagram Integrated · 2x Conversions",
  },
  {
    id: 3,
    name: "Richa",
    role: "Director, 2K1 Ethnic",
    location: "India 🇮🇳",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
    quote: "Our digital presence before dotUniverse didn't do justice to the quality of our handcrafted products. The new brand design and mobile-optimized store completely transformed our brand perception. Global orders from the UK and Middle East shot up immediately.",
    stars: 5,
    result: "300% Boost in International Sales · Premium Rebrand",
  },
];

export const PRICING_PLANS = [
  {
    name: "Launch",
    id: "tier-launch",
    prices: {
      INR: "₹4,999",
      USD: "$69",
      GBP: "£55",
      AED: "250 AED",
    },
    pricingLabel: "PER MONTH",
    tagline: "Perfect for businesses ready to establish a strong presence online",
    cta: "GET STARTED →",
    featured: false,
    features: [
      "Full management of 2 social media platforms",
      "12 custom posts + 5 Reels per month",
      "2 active ad campaigns monitored & tuned",
      "Weekly performance reports & clear insights",
      "SEO setup and on-page metadata optimization",
      "Priority WhatsApp & Email support (24hr response)",
    ],
  },
  {
    name: "Scale",
    id: "tier-scale",
    prices: {
      INR: "₹9,999",
      USD: "$139",
      GBP: "£110",
      AED: "510 AED",
    },
    pricingLabel: "PER MONTH",
    tagline: "For ambitious brands ready to accelerate reach and multiply revenue",
    cta: "START SCALING →",
    featured: true,
    badge: "MOST POPULAR",
    features: [
      "Everything in Launch included",
      "Full management of 3 social media platforms",
      "20 high-converting posts + 10 viral Reels/TikToks",
      "5 active multi-channel ad campaigns with A/B testing",
      "Dedicated account strategist — single point of contact",
      "Bi-weekly strategy zoom calls to audit results",
      "Website speed monitoring, health audits & updates",
      "Custom lead-capture funnels and email triggers",
    ],
  },
  {
    name: "Conquer (Custom)",
    id: "tier-custom",
    prices: {
      INR: "Custom",
      USD: "Custom",
      GBP: "Custom",
      AED: "Custom",
    },
    pricingLabel: "TAILORED QUOTE",
    tagline: "Full-scale custom engineering, end-to-end design & aggressive growth",
    cta: "TALK TO FOUNDERS →",
    featured: false,
    features: [
      "Custom full-stack web or mobile app development",
      "Omni-channel growth campaigns with unlimited ad budget scale",
      "Complete Brand identity overhaul & UI/UX Design System",
      "Custom AI workflow agents & automated CRM pipeline",
      "24/7 VIP Emergency hotline & dedicated dev squad",
      "Weekly executive progress syncs & KPI guarantees",
    ],
  },
];

export const TEAM_MEMBERS = [
  {
    name: "ALI AHMED",
    role: "CO-FOUNDER & STRATEGIST",
    bio: "Visionary behind dotUniverse. Ali drives company strategy, culture, and high-velocity digital execution with an obsessive passion for building brands that dominate.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80",
    linkedin: "https://www.linkedin.com/in/aliahmedsiddiq/",
    accent: "#c8ff00"
  },
  {
    name: "PRIYANSHU SAROGI",
    role: "VIDEOGRAPHER & CONTENT LEAD",
    bio: "The visual storyteller. Priyanshu has directed and produced high-retention content for 20+ brands across lifestyle, tech, and retail, averaging 500K+ organic views.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=80",
    linkedin: "https://www.linkedin.com/in/priyanshu-saraogi-7816b1323/",
    accent: "#ff005e"
  },
];

export const COUNTRIES = [
  { code: "IN", name: "India", flag: "🇮🇳", currency: "INR", symbol: "₹" },
  { code: "UK", name: "United Kingdom", flag: "🇬🇧", currency: "GBP", symbol: "£" },
  { code: "UAE", name: "UAE / Dubai", flag: "🇦🇪", currency: "AED", symbol: "AED" },
  { code: "US", name: "Global / US", flag: "🇺🇸", currency: "USD", symbol: "$" },
];
