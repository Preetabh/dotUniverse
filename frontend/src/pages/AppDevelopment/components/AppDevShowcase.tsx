import React, { useState } from 'react';
import {
  Smartphone,
  ExternalLink,
  Crown,
  Sparkles,
  ArrowRight,
  Shield,
  Star,
  CheckCircle,
  Zap
} from 'lucide-react';

export const AppDevShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const projects = [
    {
      title: "Aura Private Wealth Vault",
      domain: "Fintech & Sovereign Custody",
      platform: "iOS & iPadOS Native (SwiftUI)",
      rating: "5.0 ★ App Store",
      tagline: "Next-generation private banking interface with zero-knowledge hardware biometric security.",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1000&auto=format&fit=crop&q=80",
      stats: "$180M+ Transacted",
      tech: ["SwiftUI", "Secure Enclave", "Metal Shaders", "WebSockets"],
      impact: "Seamless institutional vault management for high-net-worth investors across London and Zurich."
    },
    {
      title: "Maison Royale Atelier",
      domain: "Haute Horlogerie & Fashion",
      platform: "Cross-Platform (Flutter Engine)",
      rating: "4.9 ★ Global Average",
      tagline: "Ultra-luxury shopping portal featuring 3D interactive model previews and 1-click private concierge checkout.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1000&auto=format&fit=crop&q=80",
      stats: "3.8x VIP Sales Conversion",
      tech: ["Flutter 3.22", "ARKit 3D", "Stripe Private", "Firebase"],
      impact: "Zero drop-off checkout experience serving exclusive boutique patrons in Dubai, Milan, and Paris."
    },
    {
      title: "Veloce Aero & Marine Club",
      domain: "Private Jet & Yacht Concierge",
      platform: "Native iOS & Android",
      rating: "5.0 ★ Invitation-Only",
      tagline: "Autonomous flight booking, live manifest tracking, and synchronized Rolls Royce tarmac pickup.",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1000&auto=format&fit=crop&q=80",
      stats: "Under 60s Booking SLA",
      tech: ["Kotlin", "Swift", "Live Telemetry", "Radar API"],
      impact: "Instant jet dispatch and FBO fast-track clearance for 2,500+ verified private aviation members."
    },
    {
      title: "Solstice BioSync Health",
      domain: "Longevity & Biometric Tracking",
      platform: "iOS & watchOS Native",
      rating: "4.9 ★ Health & Fitness",
      tagline: "Realtime cardiovascular telemetry, sleep architecture coaching, and continuous glucose tracking.",
      image: "https://images.unsplash.com/photo-1510519138171-c70d7634f02c?w=1000&auto=format&fit=crop&q=80",
      stats: "120K Daily Active Users",
      tech: ["HealthKit", "watchOS Complications", "CoreML", "SQLite"],
      impact: "Predictive metabolic recommendations with zero background battery drain on Apple Watch Ultra."
    }
  ];

  const current = projects[activeTab];

  return (
    <section id="portfolio" className="relative py-28 sm:py-36 overflow-hidden border-t border-[#D4AF37]/20 bg-black/90">
      <div className="absolute top-1/2 right-10 w-[600px] h-[600px] bg-[#D4AF37]/8 rounded-full blur-[200px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/35 text-[#F5D061] font-mono text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>[ THE FLAGSHIP GALLERY ]</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight font-sans">
            Curated Prestige <br />
            <span className="gold-gradient-text font-serif italic glow-gold">Case Studies</span>
          </h2>

          <p className="mt-6 text-white/70 text-base sm:text-lg">
            Inspect our proudest mobile engineering feats. Engineered for brands that demand perfection
            down to the microsecond.
          </p>

          {/* Interactive Project Switcher */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            {projects.map((p, idx) => (
              <button
                key={p.title}
                type="button"
                onClick={() => setActiveTab(idx)}
                className={`px-4 sm:px-5 py-2.5 rounded-2xl font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === idx
                    ? 'bg-gradient-to-r from-[#F5D061] to-[#D4AF37] text-black shadow-[0_0_25px_rgba(212,175,55,0.4)]'
                    : 'bg-white/5 text-white/70 border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 hover:text-white'
                }`}
              >
                {p.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Active Project Luxury Feature Showcase Card */}
        <div className="luxury-glass-card rounded-3xl p-6 sm:p-12 relative overflow-hidden border border-[#D4AF37]/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            {/* Visual Screen Preview */}
            <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl group">
              <img
                src={current.image}
                alt={current.title}
                className="w-full h-72 sm:h-96 object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-[#D4AF37]/40 text-xs font-mono text-[#F5D061]">
                {current.rating}
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="font-mono text-xs text-[#F5D061] uppercase tracking-wider">
                  {current.platform}
                </div>
                <div className="text-xl sm:text-2xl font-black text-white mt-1">
                  {current.title}
                </div>
              </div>
            </div>

            {/* Project Details & Architecture Spec */}
            <div className="lg:col-span-6 text-left flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold px-3 py-1 rounded-md border border-[#D4AF37]/40 bg-[#D4AF37]/10 text-[#F5D061]">
                  {current.domain}
                </span>

                <h3 className="text-2xl sm:text-4xl font-black text-white font-sans mt-4 leading-tight">
                  {current.title}
                </h3>

                <p className="mt-4 text-base text-white/70 leading-relaxed font-normal">
                  {current.tagline}
                </p>

                <p className="mt-3 text-sm text-[#F5D061]/90 italic font-serif">
                  &ldquo;{current.impact}&rdquo;
                </p>

                {/* Tech Badges */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {current.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-white/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Metric Bar */}
              <div className="mt-8 pt-6 border-t border-[#D4AF37]/20 flex items-center justify-between">
                <div>
                  <div className="font-mono text-[10px] text-white/50 uppercase tracking-wider">
                    PROVEN OUTCOME
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-[#F5D061] font-mono">
                    {current.stats}
                  </div>
                </div>

                <a
                  href="#vip-commission"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full gold-btn text-black font-mono text-xs font-bold uppercase tracking-wider shadow-lg"
                >
                  <span>Inquire Similar App</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
