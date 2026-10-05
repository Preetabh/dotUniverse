import React, { useState } from 'react';
import {
  TrendingUp,
  ArrowRight,
  Zap,
  ShieldCheck,
  Target,
  BarChart3,
  Flame,
  CheckCircle2,
  DollarSign,
  Activity,
  Users
} from 'lucide-react';
import { CTAButton } from '../../../components/Buttons/CTAButton';

export const DigitalMarketingHero: React.FC = () => {
  const [activeChannel, setActiveChannel] = useState<'meta' | 'google' | 'tiktok' | 'seo'>('meta');

  const channelData = {
    meta: {
      name: "Meta Performance Ads",
      tagline: "High-retention video creatives & lookalike algorithmic scaling on Instagram & Facebook.",
      roas: "4.9x",
      cpa: "$14.20",
      leads: "+380%",
      accent: "#ec4899",
      metrics: [
        { label: "Target CPM", value: "$6.40", change: "-28%" },
        { label: "CTR (Link Clicks)", value: "3.85%", change: "+114%" },
        { label: "Conversion Rate", value: "4.7%", change: "+92%" },
        { label: "Attributed Revenue", value: "$412,800", change: "Verified" },
      ]
    },
    google: {
      name: "Google High-Intent Search & PMax",
      tagline: "Snatch ready-to-buy customers at the precise second they search for your solution.",
      roas: "5.4x",
      cpa: "$21.50",
      leads: "+290%",
      accent: "#06b6d4",
      metrics: [
        { label: "Impression Share", value: "84.2%", change: "+35%" },
        { label: "Top-of-Page Rate", value: "91.0%", change: "+44%" },
        { label: "Quality Score", value: "9.2/10", change: "Optimal" },
        { label: "Attributed Pipeline", value: "$680,000", change: "Verified" },
      ]
    },
    tiktok: {
      name: "Short-Form Social & Viral Reels",
      tagline: "Direct-response hooks that arrest thumb-scrolling and turn viral attention into checkout.",
      roas: "4.2x",
      cpa: "$11.80",
      leads: "+450%",
      accent: "#f43f5e",
      metrics: [
        { label: "Hook Retention", value: "62.4%", change: "+78%" },
        { label: "Organic Reach", value: "1.8M", change: "Compounding" },
        { label: "Cost Per Follower", value: "$0.08", change: "-42%" },
        { label: "Social Sales", value: "$295,400", change: "Verified" },
      ]
    },
    seo: {
      name: "Technical & Programmatic SEO",
      tagline: "Dominate high-ticket keywords organically. Zero ad spend required once ranked.",
      roas: "∞ (Organic)",
      cpa: "$0.00",
      leads: "+310%",
      accent: "#c8ff00",
      metrics: [
        { label: "#1 Keyword Ranks", value: "148 Terms", change: "+92" },
        { label: "Organic Influx", value: "84,000/mo", change: "+185%" },
        { label: "Domain Authority", value: "64 DA", change: "+18 pts" },
        { label: "Free Lead Flow", value: "240/mo", change: "Passive" },
      ]
    }
  };

  const current = channelData[activeChannel];

  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Eyebrow Badge */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#ec4899]/15 border border-[#ec4899]/40 text-[#f472b6] font-mono text-xs font-bold uppercase tracking-wider mb-6 shadow-[0_0_25px_rgba(236,72,153,0.3)]">
            <Flame className="w-3.5 h-3.5 text-[#ec4899] animate-pulse" />
            <span>[ ROI-FOCUSED HYPERGROWTH ENGINE ]</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#ec4899]" />
            <span className="text-white/60">Blended 4.8x Mean ROAS</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight max-w-5xl leading-[1.05]">
            Turn Ad Spend Into <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-[#ec4899] via-[#f43f5e] to-[#a855f7] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(236,72,153,0.4)]">
              Predictable, Compounding
            </span>{' '}
            Revenue.
          </h1>

          {/* Supporting Copy */}
          <p className="mt-6 text-base sm:text-xl text-white/75 max-w-3xl leading-relaxed">
            Stop burning budget on vanity impressions and broken funnels. dotUniverse deploys high-converting ad creative, precision audience targeting, and ruthless conversion rate optimization that drives actual bank deposits.
          </p>

          {/* Primary Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <CTAButton
              href="#growth-audit"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto shadow-[0_0_35px_rgba(236,72,153,0.4)] hover:shadow-[0_0_50px_rgba(236,72,153,0.6)] !bg-gradient-to-r !from-[#ec4899] !to-[#a855f7] !border-none !text-white font-mono font-bold tracking-wider"
            >
              <span>Claim Free 30-Min Audit</span>
              <ArrowRight className="w-5 h-5 ml-1" />
            </CTAButton>

            <a
              href="#roas-calculator"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white font-mono text-sm uppercase tracking-wider transition-all hover:border-[#ec4899] hover:text-[#f472b6] cursor-pointer"
            >
              <Zap className="w-4 h-4 text-[#ec4899]" />
              <span>Interactive ROAS Calculator</span>
            </a>
          </div>

          {/* Trust Safeguards */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-white/50 font-mono">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#ec4899]" />
              <span>Full Ad Account Ownership (Zero Hostage)</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#ec4899]" />
              <span>Daily Live Dashboard &amp; Slack Sync</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#ec4899]" />
              <span>No 12-Month Lock-in Contracts</span>
            </div>
          </div>
        </div>

        {/* Live Interactive Growth Engine Terminal */}
        <div className="mt-16 relative max-w-5xl mx-auto rounded-3xl border border-white/15 bg-gradient-to-b from-[#140b17]/95 via-[#0b080f]/95 to-black/95 backdrop-blur-2xl p-6 sm:p-10 shadow-[0_0_80px_rgba(236,72,153,0.15)] overflow-hidden">
          {/* Top Terminal Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-white/10 gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#f43f5e]" />
                <span className="w-3 h-3 rounded-full bg-[#fbbf24]" />
                <span className="w-3 h-3 rounded-full bg-[#10b981]" />
              </div>
              <span className="font-mono text-xs text-white/50 tracking-wider">
                LIVE_TELEMETRY::GROWTH_COCKPIT.v4
              </span>
            </div>

            {/* Channel Tabs */}
            <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-black/60 border border-white/10 w-full sm:w-auto">
              {(['meta', 'google', 'tiktok', 'seo'] as const).map((ch) => (
                <button
                  key={ch}
                  type="button"
                  onClick={() => setActiveChannel(ch)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold uppercase transition-all cursor-pointer ${
                    activeChannel === ch
                      ? 'bg-[#ec4899] text-white shadow-[0_0_15px_rgba(236,72,153,0.4)]'
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {ch.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Active Channel Deep-Dive Display */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Highlights */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span
                  className="px-3 py-1 rounded-md font-mono text-xs font-bold border"
                  style={{
                    backgroundColor: `${current.accent}15`,
                    borderColor: `${current.accent}40`,
                    color: current.accent,
                  }}
                >
                  ACTIVE PROTOCOL
                </span>
                <span className="text-white/40 text-xs font-mono">Realtime Live Attribution</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-white">
                {current.name}
              </h2>

              <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                {current.tagline}
              </p>

              {/* 4 Telemetry Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-3">
                {current.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors"
                  >
                    <div className="text-[11px] font-mono text-white/50">{m.label}</div>
                    <div className="text-lg sm:text-xl font-black text-white font-mono mt-1">
                      {m.value}
                    </div>
                    <span
                      className="inline-block mt-1 text-[10px] font-mono font-bold px-1.5 py-0.5 rounded"
                      style={{
                        backgroundColor: `${current.accent}20`,
                        color: current.accent,
                      }}
                    >
                      {m.change}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right KPI Card */}
            <div className="lg:col-span-5 rounded-2xl p-6 sm:p-8 border border-white/15 bg-gradient-to-br from-white/[0.04] to-black flex flex-col justify-between relative overflow-hidden">
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl pointer-events-none"
                style={{ backgroundColor: `${current.accent}30` }}
              />

              <div className="space-y-6">
                <div>
                  <div className="text-xs font-mono text-white/50 uppercase tracking-wider">
                    TARGET ROAS MULTIPLIER
                  </div>
                  <div
                    className="text-4xl sm:text-5xl font-black font-mono mt-1 tracking-tight"
                    style={{ color: current.accent }}
                  >
                    {current.roas}
                  </div>
                  <div className="text-xs text-white/60 mt-1">Every $1 spend generates {current.roas} in pipeline.</div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                  <div>
                    <div className="text-[10px] font-mono text-white/40 uppercase">Cost Per Acquisition</div>
                    <div className="text-lg font-bold text-white font-mono mt-0.5">{current.cpa}</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-white/40 uppercase">Lead Volume Surge</div>
                    <div className="text-lg font-bold text-[#10b981] font-mono mt-0.5">{current.leads}</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <a
                  href="#growth-audit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-mono font-bold uppercase tracking-wider text-black bg-white hover:bg-white/90 transition-all cursor-pointer shadow-md"
                >
                  <span>Deploy Strategy</span>
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
