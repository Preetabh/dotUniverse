import React from 'react';
import { Network, CheckCircle2, ShieldCheck, Zap, Activity, Radio, ArrowUpRight, Cpu } from 'lucide-react';

export const WebDevIntegrations: React.FC = () => {
  const tools = [
    {
      name: "Google Analytics 4 & Tag Manager",
      cat: "ANALYTICS",
      latency: "12ms",
      status: "ACTIVE",
      desc: "Full e-commerce event tracking, user journey funnel drops, and conversion attribution.",
      accent: "#00f0ff"
    },
    {
      name: "Stripe & Global Payments",
      cat: "FINTECH",
      latency: "24ms",
      status: "ENCRYPTED",
      desc: "1-click Apple Pay/Google Pay checkouts, recurring billing, and multi-currency exchange.",
      accent: "#c8ff00"
    },
    {
      name: "WhatsApp Business API",
      cat: "COMMS",
      latency: "18ms",
      status: "STREAMING",
      desc: "Instant click-to-chat widgets, automated lead distribution, and broadcast sequences.",
      accent: "#10b981"
    },
    {
      name: "HubSpot & Zoho CRM",
      cat: "CRM PIPELINE",
      latency: "30ms",
      status: "SYNCED",
      desc: "Zero lead-loss pipeline synchronization, smart tags, and automated sales email alerts.",
      accent: "#ff005e"
    },
    {
      name: "Mailchimp & Klaviyo",
      cat: "MARKETING",
      latency: "28ms",
      status: "ACTIVE",
      desc: "Automated customer retention sequences, abandoned cart triggers, and list segmentation.",
      accent: "#a855f7"
    },
    {
      name: "Cloudflare & AWS Cloud",
      cat: "EDGE INFRA",
      latency: "6ms",
      status: "OPTIMIZED",
      desc: "Sub-10ms global edge delivery, automatic SSL, DDoS shield, and HTTP/3 streaming.",
      accent: "#f59e0b"
    },
  ];

  return (
    <section className="relative py-28 sm:py-36 overflow-hidden border-t border-white/10 bg-black cyber-grid">
      <div className="absolute top-1/2 left-10 w-[500px] h-[500px] bg-[#00f0ff]/10 rounded-full blur-[170px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Context & Guarantees */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-[#00f0ff] font-mono text-xs font-bold uppercase tracking-wider mb-6">
              <Radio className="w-3.5 h-3.5 animate-pulse" />
              <span>[ REALTIME API DATAFLOW ]</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight leading-[1.08] font-sans">
              Connect Your Stack For <br />
              <span className="text-[#00f0ff] glow-cyan">Exponential Growth</span>
            </h2>

            <p className="mt-6 text-base text-white/70 leading-relaxed font-normal">
              Eliminate data silos. We integrate your web platform directly into your CRM, payment processors,
              and analytics engines — turning your site into an automated revenue-generating engine.
            </p>

            <div className="mt-8 space-y-4 w-full">
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.02] border border-white/10 text-sm text-white/80">
                <CheckCircle2 className="w-5 h-5 text-[#c8ff00] shrink-0" />
                <span>Zero vendor lock-in with open REST &amp; GraphQL APIs</span>
              </div>
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.02] border border-white/10 text-sm text-white/80">
                <CheckCircle2 className="w-5 h-5 text-[#c8ff00] shrink-0" />
                <span>End-to-end encrypted telemetry &amp; GDPR compliance</span>
              </div>
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.02] border border-white/10 text-sm text-white/80">
                <CheckCircle2 className="w-5 h-5 text-[#c8ff00] shrink-0" />
                <span>Pre-launch automated webhook &amp; failover testing</span>
              </div>
            </div>
          </div>

          {/* Right Column: Cyber Integrations Matrix */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="cyber-hud-card p-6 rounded-3xl flex flex-col justify-between group relative overflow-hidden transition-all duration-300"
              >
                <div className="hud-bracket-top-left" />
                <div className="hud-bracket-bottom-right" />

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="font-mono text-[10px] font-bold px-2 py-0.5 rounded border"
                      style={{
                        borderColor: `${tool.accent}40`,
                        backgroundColor: `${tool.accent}10`,
                        color: tool.accent,
                      }}
                    >
                      {tool.cat}
                    </span>
                    <span className="font-mono text-[10px] text-white/40">
                      PING: {tool.latency}
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-[#00f0ff] transition-colors leading-snug">
                    {tool.name}
                  </h4>

                  <p className="mt-2.5 text-xs text-white/60 leading-relaxed font-normal">
                    {tool.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between font-mono text-[10px] text-white/40">
                  <div className="flex items-center gap-1.5">
                    <span
                      className="w-1.5 h-1.5 rounded-full animate-ping"
                      style={{ backgroundColor: tool.accent }}
                    />
                    <span style={{ color: tool.accent }}>{tool.status}</span>
                  </div>
                  <span className="text-white/30">API PROTOCOL</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
