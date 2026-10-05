import React, { useState } from 'react';
import { Check, Sparkles, Server, LayoutTemplate, ShieldCheck, Zap, ArrowRight, Cpu } from 'lucide-react';
import { CTAButton } from '../../../components/Buttons/CTAButton';
import { COUNTRIES } from '../../../constants';
import { Currency } from '../../../hooks/useCurrencyPricing';

interface WebDevPricingProps {
  currentCurrency: Currency;
  onCurrencyChange: (c: Currency) => void;
}

export const WebDevPricing: React.FC<WebDevPricingProps> = ({
  currentCurrency,
  onCurrencyChange,
}) => {
  const [activeTab, setActiveTab] = useState<'website' | 'hosting'>('website');

  const websiteTiers = [
    {
      code: "TIER::01",
      name: "Landing",
      scope: "3 to 5 Custom Pages",
      prices: { INR: "₹999", USD: "$12", GBP: "£10", AED: "45 AED" },
      desc: "Engineered for single-service businesses, high-impact campaign launches, or solo entrepreneurs.",
      cta: "Initialize Landing @ ₹999",
      popular: false,
      accent: "#00f0ff",
      features: [
        "100% Bespoke design (Zero template bloat)",
        "Up to 5 fully responsive viewports",
        "Mobile, tablet & retina display tuned",
        "On-page Google SEO foundation",
        "Lead capture form + Google Analytics 4",
        "1 rapid revision cycle included",
        "2-week expedited delivery timeline",
        "120 days post-launch warranty support"
      ]
    },
    {
      code: "TIER::02",
      name: "Business Scale",
      scope: "10 to 20 Custom Pages",
      prices: { INR: "₹1,999", USD: "$25", GBP: "£20", AED: "89 AED" },
      desc: "For fast-growing companies requiring content management, multi-service architecture, and maximum speed.",
      cta: "Deploy Business Scale",
      popular: true,
      accent: "#c8ff00",
      features: [
        "Complete bespoke design system in Figma",
        "10 to 20 structured page templates",
        "Modern Headless CMS / WordPress portal",
        "Dynamic blog, case study & filter system",
        "Full technical & schema markup SEO",
        "Guaranteed 90+ Lighthouse Core Vitals",
        "2 rounds of comprehensive revisions",
        "30-45 day delivery milestone window",
        "120 days dedicated engineering warranty"
      ]
    },
    {
      code: "TIER::03",
      name: "Enterprise Custom",
      scope: "Bespoke Scale & Architecture",
      prices: { INR: "Custom", USD: "Custom", GBP: "Custom", AED: "Custom" },
      desc: "High-throughput web applications, headless ecommerce, multi-region platforms, and custom portals.",
      cta: "Schedule Architecture Call",
      popular: false,
      accent: "#ff005e",
      features: [
        "Full UX audit & technical discovery phase",
        "Custom design tokens & component system",
        "Headless Next.js 14 edge micro-architecture",
        "Custom API integrations (ERP, CRM, Stripe)",
        "Multi-language & regional CDN routing",
        "Custom ecommerce or membership workflows",
        "24/7 automated security & uptime monitoring",
        "Dedicated Principal Technical Lead"
      ]
    },
  ];

  const hostingTiers = [
    {
      code: "INFRA::01",
      name: "Cloud Edge Hosting",
      scope: "Quarterly Invoicing",
      prices: { INR: "₹999", USD: "$12", GBP: "£10", AED: "45 AED" },
      desc: "High-speed global edge infrastructure with automatic SSL, firewall, and daily backups.",
      cta: "Provision Edge Node @ ₹999",
      popular: false,
      accent: "#00f0ff",
      features: [
        "DNS provisioning & edge routing setup",
        "Global 310+ CDN points of presence",
        "Automated SSL certificates & renewals",
        "Daily automated incremental site backups",
        "99.9% uptime SLA guaranteed"
      ]
    },
    {
      code: "INFRA::02",
      name: "Managed Edge + Ops",
      scope: "Quarterly Invoicing",
      prices: { INR: "₹1,999", USD: "$24", GBP: "£19", AED: "89 AED" },
      desc: "Full infrastructure management, monthly content updates, security patches, and emergency fixes.",
      cta: "Provision Managed Node",
      popular: true,
      accent: "#c8ff00",
      features: [
        "Everything in Cloud Edge Hosting",
        "2 hours included developer updates / month",
        "Proactive plugin, dependency & security patches",
        "Monthly Lighthouse speed & health reports",
        "Priority 4-hour emergency support SLA"
      ]
    },
    {
      code: "INFRA::03",
      name: "Dedicated Cluster",
      scope: "Quarterly Invoicing",
      prices: { INR: "Custom", USD: "Custom", GBP: "Custom", AED: "Custom" },
      desc: "Dedicated AWS/Cloudflare enterprise cluster for high-traffic platforms and rigorous compliance.",
      cta: "Consult Infrastructure Architect",
      popular: false,
      accent: "#ff005e",
      features: [
        "Isolated virtual private cloud environment",
        "Custom Redis / Memcached caching tier",
        "Enterprise DDoS mitigation & WAF shielding",
        "Staging & testing sandbox environments",
        "Direct Slack / WhatsApp developer channel"
      ]
    }
  ];

  const activeTiers = activeTab === 'website' ? websiteTiers : hostingTiers;

  return (
    <section id="pricing" className="relative py-28 sm:py-36 overflow-hidden border-t border-white/10 bg-black cyber-grid">
      {/* Dynamic Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-b from-[#c8ff00]/10 via-[#00f0ff]/10 to-transparent rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c8ff00]/10 border border-[#c8ff00]/30 text-[#c8ff00] font-mono text-xs font-bold uppercase tracking-wider mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>[ PRICING MATRIX &amp; INFRASTRUCTURE ]</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight font-sans">
            Transparent Pricing. <br />
            <span className="bg-gradient-to-r from-[#c8ff00] via-[#00f0ff] to-[#ff005e] bg-clip-text text-transparent">
              Zero Hidden Costs.
            </span>
          </h2>

          <p className="mt-6 text-white/70 text-base sm:text-lg">
            Choose the package engineered for your current growth phase. All web development plans include our
            signature 120-day post-launch warranty.
          </p>

          {/* Currency Switcher Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            <span className="font-mono text-xs text-white/50 mr-2">SELECT CURRENCY:</span>
            {(['INR', 'USD', 'GBP', 'AED'] as Currency[]).map((cur) => (
              <button
                key={cur}
                type="button"
                onClick={() => onCurrencyChange(cur)}
                className={`px-3 py-1.5 rounded-lg font-mono text-xs font-bold border transition-all cursor-pointer ${
                  currentCurrency === cur
                    ? 'bg-[#c8ff00] text-black border-[#c8ff00] shadow-[0_0_15px_rgba(200,255,0,0.4)]'
                    : 'bg-white/5 text-white/70 border-white/10 hover:border-white/30 hover:text-white'
                }`}
              >
                {cur}
              </button>
            ))}
          </div>

          {/* Tab Switcher: Website vs Hosting */}
          <div className="mt-10 inline-flex items-center p-1.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
            <button
              type="button"
              onClick={() => setActiveTab('website')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-mono text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'website'
                  ? 'bg-gradient-to-r from-[#c8ff00] to-[#00f0ff] text-black shadow-[0_0_20px_rgba(200,255,0,0.3)]'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              <LayoutTemplate className="w-4 h-4" />
              <span>Web Development</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('hosting')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-mono text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'hosting'
                  ? 'bg-gradient-to-r from-[#00f0ff] to-[#ff005e] text-black shadow-[0_0_20px_rgba(0,240,255,0.3)]'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              <Server className="w-4 h-4" />
              <span>Managed Hosting &amp; Ops</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {activeTiers.map((tier) => {
            const isPopular = tier.popular;
            const price = tier.prices[currentCurrency];

            return (
              <div
                key={tier.name}
                className={`cyber-hud-card rounded-3xl p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden transition-all duration-300 ${
                  isPopular
                    ? 'border-[#c8ff00] shadow-[0_0_40px_rgba(200,255,0,0.2)] bg-gradient-to-b from-white/[0.06] to-black/90'
                    : 'border-white/10 hover:border-white/30'
                }`}
              >
                {/* HUD Corners */}
                <div className="hud-bracket-top-left" />
                <div className="hud-bracket-bottom-right" />

                {/* Popular Holographic Tag */}
                {isPopular && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-[#c8ff00] text-black font-mono text-[10px] font-black uppercase px-4 py-1 rounded-bl-xl shadow-md tracking-wider">
                      ★ MOST POPULAR
                    </div>
                  </div>
                )}

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className="font-mono text-[11px] font-bold px-2 py-0.5 rounded border"
                      style={{
                        borderColor: `${tier.accent}40`,
                        backgroundColor: `${tier.accent}10`,
                        color: tier.accent,
                      }}
                    >
                      {tier.code}
                    </span>
                    <span className="font-mono text-xs text-white/50">{tier.scope}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-white font-sans mt-2">
                    {tier.name}
                  </h3>

                  <p className="mt-3 text-sm text-white/60 leading-relaxed min-h-[40px]">
                    {tier.desc}
                  </p>

                  {/* Price */}
                  <div className="mt-6 pb-6 border-b border-white/10">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl sm:text-5xl font-black text-white font-mono tracking-tight">
                        {price}
                      </span>
                      {activeTab === 'hosting' && price !== 'Custom' && (
                        <span className="text-xs font-mono text-white/50">/ quarter</span>
                      )}
                    </div>
                    <div className="font-mono text-[11px] text-white/40 mt-1">
                      {price === 'Custom' ? 'Tailored to technical scope' : 'One-time investment + 120d warranty'}
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="mt-8 space-y-3.5">
                    <div className="font-mono text-[11px] font-bold text-white/40 uppercase tracking-wider mb-2">
                      INCLUDED IN SPEC:
                    </div>
                    {tier.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-3 text-xs sm:text-sm text-white/80">
                        <Check
                          className="w-4 h-4 shrink-0 mt-0.5"
                          style={{ color: tier.accent }}
                        />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <div className="mt-10 pt-6 border-t border-white/10">
                  <CTAButton
                    href="#contact"
                    variant={isPopular ? 'primary' : 'outline'}
                    size="lg"
                    className="w-full font-mono text-xs sm:text-sm font-bold tracking-wider"
                  >
                    <span>{tier.cta}</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </CTAButton>
                  <p className="mt-2 text-center text-[10px] font-mono text-white/40">
                    30-min discovery session included
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
