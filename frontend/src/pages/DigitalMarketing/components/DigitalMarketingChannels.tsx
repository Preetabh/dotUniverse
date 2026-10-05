import React, { useState } from 'react';
import {
  Layers,
  Search,
  Video,
  LineChart,
  ShoppingCart,
  Mail,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Zap,
  Target
} from 'lucide-react';

export const DigitalMarketingChannels: React.FC = () => {
  const [selectedChannel, setSelectedChannel] = useState<number>(0);

  const channels = [
    {
      id: "meta-ads",
      title: "Meta Ads & Paid Social",
      subtitle: "Instagram & Facebook High-Conversion Scaling",
      icon: Layers,
      accent: "#ec4899",
      tag: "Highest Volume Scale",
      description:
        "We engineer direct-response creative frameworks that break algorithmic fatigue, combined with lookalike audience architectures that consistently lower CPA as ad spend multiplies.",
      highlights: [
        "Dynamic Product Ads & Multi-Tier Retargeting Loops",
        "Direct-Response UGC & High-Retention Hook Creatives",
        "Broad AI-Assisted Audience Bidding with Advantage+",
        "Server-Side CAPI (Conversions API) Tracking for iOS Parity",
      ],
      deliverables: [
        "15+ Fresh Creative Variations / Month",
        "Continuous A/B Angle & Headline Split-Testing",
        "Attribution Verification via Offline Match Rates",
      ],
      metric: "4.9x Blended ROAS",
    },
    {
      id: "google-ads",
      title: "Google High-Intent Search & PMax",
      subtitle: "Capture Ready-to-Buy Commercial Traffic",
      icon: Search,
      accent: "#06b6d4",
      tag: "Highest Buyer Intent",
      description:
        "Zero vanity impressions. We target high-intent commercial keywords where customers have wallets in hand, cutting out irrelevant clicks with ruthless negative keyword pruning.",
      highlights: [
        "Exact Match & High-Intent Modifier Search Campaigns",
        "Performance Max (PMax) Asset Optimization & Safeguards",
        "Google Shopping & Merchant Center Feed Optimization",
        "Location & Device-Specific Bid Multipliers",
      ],
      deliverables: [
        "Weekly Negative Keyword Audits",
        "9.0+ Average Quality Score Ad Groups",
        "Smart Competitor Bidding & Domain Displacement",
      ],
      metric: "91% Top-of-Page Rate",
    },
    {
      id: "short-form",
      title: "Short-Form Content & Viral Reels",
      subtitle: "TikTok, Instagram Reels & YouTube Shorts",
      icon: Video,
      accent: "#f43f5e",
      tag: "Organic & Paid Synergy",
      description:
        "The fastest way to build undeniable brand authority. We script, produce, and edit high-retention vertical video content engineered to hack platform algorithms and generate organic virality.",
      highlights: [
        "Thumb-Stopping 3-Second Hook Architecture",
        "Fast-Paced Micro-Pacing & Dynamic B-Roll Stems",
        "Trending Audio & Algorithmic Sound Synchronization",
        "Seamless Transition from Viral Organic to Paid Ad Sparking",
      ],
      deliverables: [
        "10 to 20 High-Retention Produced Videos / Month",
        "Direct Hook Scripting & Storyboard Direction",
        "Cross-Platform Syndication (Reels, TikTok, Shorts)",
      ],
      metric: "1.8M+ Organic Views",
    },
    {
      id: "seo",
      title: "Technical & Commercial SEO",
      subtitle: "Rank #1 for Revenue-Driving Search Terms",
      icon: LineChart,
      accent: "#c8ff00",
      tag: "Compounding Passive Asset",
      description:
        "Rankings that actually convert into signed contracts and paid orders. We fix crawl bottlenecks, engineer schema markup, and build authoritative topical clusters that Google prioritizes.",
      highlights: [
        "Core Web Vitals & Sub-Second PageSpeed Optimization",
        "Commercial Intent Keyword Mapping & Pillar Architecture",
        "High-Authority PR Backlink Outreach & Citations",
        "Local Map Pack & Google Business Profile Domination",
      ],
      deliverables: [
        "Full Technical Health & Speed Audit",
        "Monthly High-Authority Content Clusters",
        "Rank Tracking Across 200+ Target Terms",
      ],
      metric: "+310% Organic Influx",
    },
    {
      id: "cro-funnels",
      title: "CRO & Funnel Architecture",
      subtitle: "Plug the Leaks in Your Checkout Pipeline",
      icon: ShoppingCart,
      accent: "#a855f7",
      tag: "Doubles Existing Traffic Value",
      description:
        "Doubling your conversion rate cuts your customer acquisition cost in half. We build bespoke landing pages and conduct real user session recordings to systematically eliminate checkout friction.",
      highlights: [
        "Bespoke High-Velocity Landing Pages (React / Next.js)",
        "Session Recording & Heatmap Friction Point Audits",
        "Multi-Step Lead Capture & Dynamic Form Validation",
        "One-Click Checkout & Mobile Pay (Apple Pay / Google Pay)",
      ],
      deliverables: [
        "Continuous A/B Variant Testing (Hero, CTA, Proof)",
        "Zero-Jank 60 FPS Mobile Checkout Experience",
        "Full Funnel Drop-Off Analytics Integration",
      ],
      metric: "2.4x Conversion Uplift",
    },
    {
      id: "retention-crm",
      title: "Retention & Lifecycle Automation",
      subtitle: "Maximize Lifetime Value (LTV) on Autopilot",
      icon: Mail,
      accent: "#fbbf24",
      tag: "Zero Ad Cost Revenue",
      description:
        "Turn one-time shoppers into repeat brand evangelists. Automated email flows, WhatsApp remarketing, and SMS triggers that generate 25-40% of your total store revenue automatically.",
      highlights: [
        "Klaviyo & HubSpot Automated Nurture Sequences",
        "Abandoned Cart, Browse Abandonment & Back-in-Stock Alerts",
        "VIP Segment Rewards & Churn Win-Back Triggers",
        "Direct WhatsApp Broadcasts & Two-Way Concierge Bots",
      ],
      deliverables: [
        "Full Lifecycle Email & SMS Architecture",
        "Hyper-Segmented Customer Cohort Tagging",
        "Predictive Restock & Upsell Sequences",
      ],
      metric: "35% Total Revenue from Flows",
    },
  ];

  const active = channels[selectedChannel];

  return (
    <section id="services-matrix" className="relative py-28 sm:py-36 overflow-hidden border-t border-white/10 bg-black/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ec4899]/10 border border-[#ec4899]/35 text-[#f472b6] font-mono text-xs font-bold uppercase tracking-wider mb-4">
            <Target className="w-3.5 h-3.5 text-[#ec4899]" />
            <span>[ MULTI-CHANNEL REVENUE CAPABILITIES ]</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight font-sans">
            A Full-Stack Growth Engine, <br />
            <span className="bg-gradient-to-r from-[#ec4899] via-[#f43f5e] to-[#a855f7] bg-clip-text text-transparent">
              Not Isolated Tactics
            </span>
          </h2>

          <p className="mt-6 text-white/70 text-base sm:text-lg">
            Every channel reinforces the other. SEO brings free trust, Meta captures impulse demand, Google captures ready buyers, and automated funnels lock in repeat retention.
          </p>
        </div>

        {/* 6-Channel Grid Switcher */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {channels.map((ch, idx) => {
            const Icon = ch.icon;
            const isSelected = selectedChannel === idx;
            return (
              <div
                key={ch.id}
                onClick={() => setSelectedChannel(idx)}
                className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col justify-between relative overflow-hidden group ${
                  isSelected
                    ? 'border-white/40 bg-gradient-to-b from-white/[0.08] to-black/90 shadow-[0_0_40px_rgba(236,72,153,0.2)]'
                    : 'border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]'
                }`}
              >
                {/* Glow pill behind icon */}
                <div
                  className="absolute -top-12 -right-12 w-28 h-28 rounded-full blur-2xl pointer-events-none transition-opacity duration-300"
                  style={{
                    backgroundColor: `${ch.accent}30`,
                    opacity: isSelected ? 1 : 0.2,
                  }}
                />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center transition-colors"
                      style={{
                        backgroundColor: `${ch.accent}20`,
                        border: `1px solid ${ch.accent}40`,
                      }}
                    >
                      <Icon className="w-6 h-6" style={{ color: ch.accent }} />
                    </div>

                    <span
                      className="font-mono text-[10px] font-bold px-2.5 py-1 rounded-full border"
                      style={{
                        backgroundColor: `${ch.accent}15`,
                        borderColor: `${ch.accent}35`,
                        color: ch.accent,
                      }}
                    >
                      {ch.tag}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-white transition-colors">
                    {ch.title}
                  </h3>
                  <div className="text-xs font-mono text-white/50 mt-1">{ch.subtitle}</div>

                  <p className="mt-4 text-xs sm:text-sm text-white/70 leading-relaxed">
                    {ch.description}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="mt-6 space-y-2 border-t border-white/10 pt-4">
                    {ch.highlights.slice(0, 3).map((item) => (
                      <div key={item} className="flex items-start gap-2 text-xs text-white/80">
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: ch.accent }} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Metric & Action */}
                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-white/40 block">BENCHMARK</span>
                    <span className="font-mono text-sm font-bold text-white">{ch.metric}</span>
                  </div>

                  <span
                    className="font-mono text-xs font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                    style={{ color: ch.accent }}
                  >
                    <span>View Plan</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
