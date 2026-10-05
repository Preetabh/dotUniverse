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
      { name: "Website Development", href: "/web-development", trending: true, description: "Custom Next.js & React web platforms" },
      { name: "App Development", href: "/app-development", trending: true, description: "Bespoke iOS, Android & Cross-platform apps" },
      { name: "Digital Marketing", href: "/digital-marketing", trending: true, description: "SEO, Performance marketing & paid ads" },
      { name: "Online Courses", href: "/online-courses", trending: true, description: "Practical mastery in tech & digital marketing" },
      { name: "AI Solutions", href: "#services", description: "Workflow automation and smart chatbots" },
    ],
  },
  { name: "About", href: "/about" },
  { name: "Work", href: "/work" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
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

export const APP_DEV_MARQUEE = [
  { name: "Flutter", category: "Cross-Platform" },
  { name: "React Native", category: "Cross-Platform" },
  { name: "Swift & SwiftUI", category: "iOS Native" },
  { name: "Kotlin & Jetpack", category: "Android Native" },
  { name: "Dart", category: "Language" },
  { name: "Firebase & Firestore", category: "Mobile Cloud" },
  { name: "SQLite & Watermelon", category: "Offline Sync" },
  { name: "GraphQL & Apollo", category: "Mobile API" },
  { name: "WebSockets & Socket.io", category: "Real-Time Mesh" },
  { name: "Fastlane & CI/CD", category: "Automated Deploy" },
  { name: "App Store & TestFlight", category: "Apple Review" },
  { name: "Google Play Console", category: "Android Publish" },
  { name: "RevenueCat", category: "In-App Subscriptions" },
  { name: "Apple PushKit & APNs", category: "Push Telemetry" },
  { name: "Metal & Shader Graph", category: "60-120 FPS UI" },
];

export const WEB_DEV_MARQUEE = [
  { name: "Next.js 15", category: "Hybrid Framework" },
  { name: "React 19", category: "UI Architecture" },
  { name: "TypeScript 5.x", category: "Strict Contracts" },
  { name: "Tailwind CSS", category: "Atomic Design" },
  { name: "Three.js & WebGL", category: "3D Spatial" },
  { name: "Node.js & Bun", category: "High Concurrency" },
  { name: "PostgreSQL & Prisma", category: "Relational ACID" },
  { name: "Redis In-Memory", category: "Sub-2ms Cache" },
  { name: "Cloudflare Edge", category: "Global Serverless" },
  { name: "Docker & K8s", category: "Cluster DevOps" },
  { name: "GSAP & Framer Motion", category: "Kinetic Physics" },
  { name: "GraphQL & tRPC", category: "Type-Safe APIs" },
];

export const DIGITAL_MARKETING_MARQUEE = [
  { name: "Meta Ads Manager", category: "Performance Media" },
  { name: "Google Ads & PMax", category: "High Intent Search" },
  { name: "TikTok For Business", category: "Viral Creative" },
  { name: "Google Analytics 4 (GA4)", category: "Multi-Touch Attribution" },
  { name: "Ahrefs & SEMrush", category: "Technical SEO" },
  { name: "Triple Whale", category: "1st-Party Pixel" },
  { name: "Meta Conversions API (CAPI)", category: "Server-Side Tracking" },
  { name: "Klaviyo & Postscript", category: "Retention & SMS" },
  { name: "Hotjar & Microsoft Clarity", category: "Heatmaps & CRO" },
  { name: "Shopify Plus", category: "High-Ticket E-Com" },
  { name: "YouTube Direct-Response", category: "Video Funnels" },
  { name: "LinkedIn Campaign Manager", category: "B2B ABM Lead Gen" },
];

export const COURSES_MARQUEE = [
  { name: "Interactive Coding Labs", category: "Hands-On Sandbox" },
  { name: "1-on-1 Founder Mentorship", category: "Direct Sprints" },
  { name: "Full-Stack Next.js 15", category: "MERN To Edge" },
  { name: "AI Agent Engineering", category: "RAG & LLM Workflows" },
  { name: "Performance Marketing Bootcamp", category: "5x ROAS Scaling" },
  { name: "DSA & System Architecture", category: "Faang / Unicorn Prep" },
  { name: "Production PR Code Reviews", category: "Zero-Debt Standard" },
  { name: "Placement Sprint Guarantee", category: "Career Jumps" },
  { name: "Private Discord Dojo", category: "24/7 Hacker Peer Guild" },
  { name: "Verified Credential Badges", category: "Proof of Work" },
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
    title: "UI/UX & Brand Systems",
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

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  categorySlug: 'crm' | 'hrm' | 'comms' | 'ecommerce' | 'fitness' | 'education';
  tagline: string;
  result: string;
  badge: string;
  image: string;
  stats: string;
  tags: string[];
  client: string;
  year: string;
  architecture: string[];
  highlights: string[];
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "infrapilot-crm",
    title: "InfraPilot — Construction ERP & CRM Portal",
    category: "Projects & CRM Portal",
    categorySlug: "crm",
    tagline: "Plan • Build • Control — Enterprise site operations, budget forecasting, and multi-tenant client CRM.",
    result: "Unified ₹3.4Cr+ in construction budget tracking and reduced project variance down to < 1.2% with live DB sync.",
    badge: "Live Enterprise Client",
    image: "/assets/projects/infrapilot-crm-portal.png",
    stats: "₹34.7k Tracked • 0 Risk",
    tags: ["Next.js 14", "PostgreSQL", "Tailwind CSS", "Recharts", "Node.js", "Multi-Tenant"],
    client: "InfraPilot Infrastructure Ltd.",
    year: "2025 - 2026",
    architecture: ["Distributed Micro-services", "Real-Time Spend Sync", "Role-Based Access Control", "Site Audit Trail"],
    highlights: [
      "Dynamic 12-Month spend vs. forecast variance bar & area telemetry charts",
      "Interactive Leads & Client CRM module with multi-stage deal tracking",
      "Site Operations, Measurement Book, Daily Progress Reports (DPR), and Cost Control EVM",
      "Multi-dashboard master admin switcher with instant recycle bin recovery"
    ]
  },
  {
    id: "hrmitra-hrm",
    title: "HrMitra — Enterprise HRM & Attendance Portal",
    category: "HRM & Workforce Portal",
    categorySlug: "hrm",
    tagline: "Comprehensive human resource operating system with real-time biometric telemetry and payroll automation.",
    result: "Automated attendance tracking for 1,200+ employees with 100% compliance rate and instant payroll generation.",
    badge: "Live HR Platform",
    image: "/assets/projects/hrmitra-hrm-portal.png",
    stats: "100% Compliance • 0 Pending",
    tags: ["React 19", "Node.js", "MongoDB", "Express", "Tailwind", "WebSockets"],
    client: "HrMitra Workforce Solutions",
    year: "2025 - 2026",
    architecture: ["Live Biometric Sync", "Encrypted Payroll Ledger", "Automated Leave Workflows", "Shift Engine"],
    highlights: [
      "Live Attendance Console with dynamic real-time clock and instant punch telemetry",
      "Quick action launcher for approvals, team attendance, and multi-format report exports",
      "Leave request triage with automated approval escalations and past leave archives",
      "Recruitment pipeline, shift scheduling, and granular role permissions console"
    ]
  },
  {
    id: "leadforce-portal",
    title: "LeadForce 360 — Omnichannel Sales CRM & Pipeline",
    category: "Lead Force Portal",
    categorySlug: "crm",
    tagline: "High-velocity sales CRM with automated lead scoring, WhatsApp business bots, and deal revenue forecasting.",
    result: "Accelerated lead-to-close velocity by 340% while eliminating 80+ hours of manual data entry every month.",
    badge: "High Growth CRM",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80",
    stats: "+340% Close Rate",
    tags: ["Next.js", "Redis", "WhatsApp API", "Stripe", "Prisma", "TypeScript"],
    client: "Global SaaS & Real Estate Guild",
    year: "2025",
    architecture: ["Event-Driven Pipeline", "Auto-Dialer Integration", "AI Lead Scoring", "Webhook Dispatcher"],
    highlights: [
      "Visual Kanban pipeline stages with automated lead health indicators",
      "Two-way WhatsApp and Email conversation synchronization directly inside lead cards",
      "Predictive deal revenue forecasting powered by historical conversion velocity",
      "Custom trigger workflows for automated follow-up sequences and rep task distribution"
    ]
  },
  {
    id: "vibepulse-video-chat",
    title: "VibePulse — WebRTC Video Calling & Real-Time Chat",
    category: "Real-Time Comms",
    categorySlug: "comms",
    tagline: "Low-latency WebRTC video conferencing suite with crystal HD audio, screen share, and encrypted chat channels.",
    result: "Sustained sub-50ms round-trip latency across 10,000+ concurrent audio/video conference rooms.",
    badge: "Ultra Low Latency",
    image: "https://images.unsplash.com/photo-1616469829941-c7200edec809?w=1200&auto=format&fit=crop&q=80",
    stats: "< 50ms Latency • HD 60fps",
    tags: ["WebRTC", "Socket.io", "React", "Node.js", "Redis Pub/Sub", "SFU Mesh"],
    client: "VibePulse Technologies",
    year: "2025",
    architecture: ["Selective Forwarding Unit (SFU)", "End-to-End Encryption", "Adaptive Bitrate Streaming", "STUN/TURN Mesh"],
    highlights: [
      "Peer-to-peer and SFU video conferencing with adaptive bitrate downsampling",
      "Multi-party screen sharing, virtual background canvas, and noise suppression",
      "Rich markdown chat with thread replies, emoji reactions, and file attachments",
      "End-to-end encrypted direct messages and group workspaces"
    ]
  },
  {
    id: "aura-luxe-ecommerce",
    title: "Aura Luxe — Headless E-Commerce & 3D Storefront",
    category: "E-Commerce",
    categorySlug: "ecommerce",
    tagline: "Ultra-fast headless commerce platform with 3D product visualizer, multi-currency pricing, and one-click checkout.",
    result: "Achieved 4.8% conversion rate and sub-second page transitions, generating ₹1.8Cr+ in GMV in Q4.",
    badge: "Headless E-Commerce",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&auto=format&fit=crop&q=80",
    stats: "4.8% CVR • ₹1.8Cr GMV",
    tags: ["Next.js", "Three.js", "Shopify API", "Stripe", "Tailwind", "Algolia"],
    client: "Aura Luxe International",
    year: "2024 - 2025",
    architecture: ["Jamstack Static Generation", "Edge Cart Caching", "Webhook Inventory Sync", "Instant Algolia Search"],
    highlights: [
      "Interactive 3D model rotation and AR preview directly inside product pages",
      "Dynamic multi-currency pricing with automatic geo-IP localization",
      "Frictionless slide-over cart drawer with automated upsells and cross-sells",
      "Lightning-fast faceted filtering by color, size, material, and instant live search"
    ]
  },
  {
    id: "ironforge-gym",
    title: "IronForge Gym — Athletic Club Portal & Booking Engine",
    category: "Fitness & Club Portal",
    categorySlug: "fitness",
    tagline: "Modern high-octane fitness club website with trainer booking, live class schedules, and member subscription tiers.",
    result: "Drove 420+ new monthly recurring gym memberships and reduced front-desk class booking friction to zero.",
    badge: "Gym & Fitness",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&auto=format&fit=crop&q=80",
    stats: "420+ Monthly Members",
    tags: ["React", "Node.js", "Tailwind CSS", "Razorpay Subscriptions", "Calendar API"],
    client: "IronForge Athletic Performance",
    year: "2024",
    architecture: ["Recurring Subscription Engine", "Real-Time Slot Booking", "Member QR Check-In", "Diet Macro Calculator"],
    highlights: [
      "Dynamic interactive weekly class schedule with real-time seat availability countdown",
      "Personal trainer profile booking with calendar slot synchronization",
      "Automated monthly recurring membership billing with instant invoice dispatch",
      "Nutrition & workout telemetry dashboard for members to track bench, squat & cardio milestones"
    ]
  },
  {
    id: "edusphere-school",
    title: "EduSphere — Smart School & Campus Management System",
    category: "EdTech & School ERP",
    categorySlug: "education",
    tagline: "Comprehensive educational institution ERP unifying student admissions, exam grading, fee collection, and parent app.",
    result: "Currently powering operations for 3,500+ students and 140+ faculty across 2 modern campuses with zero paperwork.",
    badge: "School Management",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&auto=format&fit=crop&q=80",
    stats: "3,500+ Students • 100% Digital",
    tags: ["React", "PostgreSQL", "Node.js", "Docker", "Tailwind", "SMS Gateway"],
    client: "EduSphere International Academies",
    year: "2025",
    architecture: ["Multi-Tenant Academic Database", "Automated Report Generator", "Parent Notification Engine", "Fee Reconciliation"],
    highlights: [
      "Student Information System (SIS) tracking full academic lifecycle from admission to alumni",
      "Online fee collection gateway with automatic late fee calculations and receipt generation",
      "Automated exam grading, GPA computation, and one-click PDF report card compilation",
      "Parent-teacher communication portal with attendance SMS alerts and bus tracking telemetry"
    ]
  },
  {
    id: "pulsecare-telehealth",
    title: "PulseCare — Digital Clinic & Telemedicine Portal",
    category: "Healthcare & Clinic ERP",
    categorySlug: "comms",
    tagline: "HIPAA-compliant telehealth platform connecting patients with specialist doctors via encrypted video and e-prescriptions.",
    result: "Facilitated 18,000+ remote consultations with 99.4% patient satisfaction and instant lab report delivery.",
    badge: "HealthTech Portal",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&auto=format&fit=crop&q=80",
    stats: "18k+ Consultations",
    tags: ["WebRTC", "Next.js", "PostgreSQL", "HIPAA Ready", "Stripe Health"],
    client: "PulseCare Health Systems",
    year: "2024 - 2025",
    architecture: ["HIPAA-Compliant Vault", "WebRTC Video Tunnel", "Digital Signature Engine", "Pharmacy API"],
    highlights: [
      "Instant doctor appointment booking with specialty and language preference filters",
      "One-click high-definition encrypted video consultation without app downloads",
      "Digital prescription pad with instant forwarding to connected local pharmacies",
      "Secure electronic medical record (EMR) repository with patient diagnostic history"
    ]
  }
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
    name: "Launch Special",
    id: "tier-launch",
    prices: {
      INR: "₹999",
      USD: "$12",
      GBP: "£10",
      AED: "45 AED",
    },
    pricingLabel: "PER MONTH • PROMO",
    tagline: "Ultra-affordable starter package for businesses ready to dominate online",
    cta: "GET STARTED @ ₹999 →",
    featured: true,
    badge: "FLASH DEAL",
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
      INR: "₹1,999",
      USD: "$25",
      GBP: "£20",
      AED: "89 AED",
    },
    pricingLabel: "PER MONTH",
    tagline: "For ambitious brands ready to accelerate reach and multiply revenue",
    cta: "START SCALING →",
    featured: false,
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
    name: "Universe (Custom)",
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
    name: "Vishu Awasthi",
    role: "FOUNDER & STRATEGIST",
    bio: "Visionary behind dotUniverse. Vishu drives company strategy, culture, and high-velocity digital execution with an obsessive passion for building brands that dominate.",
    image: "/assets/founder.png",
    linkedin: "https://www.linkedin.com/in/#/",
    accent: "#c8ff00"
  },
  {
    name: "Sardar Japnam Singh Lal",
    role: "CO-FOUNDER",
    bio: "The visual storyteller and creative co-founder. Overseeing high-retention content direction and production for 20+ partner brands with 500K+ organic views.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=80",
    linkedin: "https://www.linkedin.com/in/#/",
    accent: "#ff005e"
  },
];

export const COUNTRIES = [
  { code: "IN", name: "India", flag: "🇮🇳", currency: "INR", symbol: "₹" },
  { code: "UK", name: "United Kingdom", flag: "🇬🇧", currency: "GBP", symbol: "£" },
  { code: "UAE", name: "UAE / Dubai", flag: "🇦🇪", currency: "AED", symbol: "AED" },
  { code: "US", name: "Global / US", flag: "🇺🇸", currency: "USD", symbol: "$" },
];
