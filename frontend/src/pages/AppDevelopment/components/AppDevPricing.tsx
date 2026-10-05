import React, { useState } from 'react';
import { Check, Crown, Sparkles, ArrowRight, ShieldCheck, Smartphone } from 'lucide-react';
import { Currency } from '../../../hooks/useCurrencyPricing';

interface AppDevPricingProps {
  currentCurrency: Currency;
  onCurrencyChange: (c: Currency) => void;
}

export const AppDevPricing: React.FC<AppDevPricingProps> = ({
  currentCurrency,
  onCurrencyChange,
}) => {
  const tiers = [
    {
      code: "TIER::01",
      name: "Starter Architecture Blueprint",
      scope: "Interactive Prototype & System Spec",
      prices: { INR: "₹999", USD: "$12", GBP: "£10", AED: "45 AED" },
      desc: "For founders validating a concept with an interactive Figma prototype and technical architecture blueprint.",
      cta: "Commission Starter @ ₹999",
      popular: false,
      features: [
        "Interactive clickable Figma prototype",
        "System architecture & schema design",
        "iOS (Swift) / Android (Kotlin) feasibility plan",
        "Cloud backend & database scoping",
        "Push notification & auth workflow design",
        "App Store & Google Play compliance audit",
        "3 to 5 days rapid delivery",
        "100% credit toward production build"
      ]
    },
    {
      code: "TIER::02",
      name: "Signature MVP",
      scope: "Dual iOS & Android App",
      prices: { INR: "₹1,999", USD: "$25", GBP: "£20", AED: "89 AED" },
      desc: "Our most popular engagement. High-performance cross-platform application ready for launch.",
      cta: "Commission Signature Suite",
      popular: true,
      features: [
        "Unified cross-platform (Flutter or React Native)",
        "120 FPS native gesture & haptic parity",
        "15 to 25 custom feature viewports",
        "Offline-first local cache & background sync",
        "Stripe / In-App Purchase integration",
        "Automated CI/CD test deployment",
        "App Store & Google Play VIP approval guarantee",
        "Dedicated VIP warranty support"
      ]
    },
    {
      code: "TIER::03",
      name: "Sovereign Atelier",
      scope: "Bespoke Enterprise & Security",
      prices: { INR: "Custom", USD: "Custom", GBP: "Custom", AED: "Custom" },
      desc: "For institutional brands, fintech vaults, or luxury conglomerates requiring bespoke infrastructure.",
      cta: "Schedule Private Consultation",
      popular: false,
      features: [
        "Discovery & biometric security research phase",
        "Bespoke Swift 6 & Metal shader pipeline",
        "Hardware Enclave & cryptographic key vault",
        "Custom ERP, CRM, and banking API integrations",
        "Apple Watch & tablet ecosystem extensions",
        "SOC2 & PCI-DSS compliance audits",
        "Dedicated Senior Mobile Lead & Architect",
        "24/7 VIP Emergency Hotline SLA"
      ]
    }
  ];

  return (
    <section id="pricing" className="relative py-28 sm:py-36 overflow-hidden border-t border-[#D4AF37]/20 bg-black">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-[#D4AF37]/10 rounded-full blur-[200px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/35 text-[#F5D061] font-mono text-xs font-bold uppercase tracking-wider mb-4">
            <Crown className="w-3.5 h-3.5" />
            <span>[ BESPOKE INVESTMENT MATRIX ]</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight font-sans">
            Transparent Investment. <br />
            <span className="gold-gradient-text font-serif italic glow-gold">Prestige Craftsmanship.</span>
          </h2>

          <p className="mt-6 text-white/70 text-base sm:text-lg">
            Fixed milestone investments with zero unexpected billings. Every commission includes our
            signature 180-day post-launch VIP warranty.
          </p>

          {/* Currency Switcher Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            <span className="font-mono text-xs text-white/50 mr-2">SELECT CURRENCY:</span>
            {(['INR', 'USD', 'GBP', 'AED'] as Currency[]).map((cur) => (
              <button
                key={cur}
                type="button"
                onClick={() => onCurrencyChange(cur)}
                className={`px-3.5 py-1.5 rounded-xl font-mono text-xs font-bold border transition-all cursor-pointer ${
                  currentCurrency === cur
                    ? 'bg-gradient-to-r from-[#F5D061] to-[#D4AF37] text-black border-[#F5D061] shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                    : 'bg-white/5 text-white/70 border-white/10 hover:border-[#D4AF37]/40 hover:text-white'
                }`}
              >
                {cur}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((t) => {
            const isPopular = t.popular;
            const price = t.prices[currentCurrency];

            return (
              <div
                key={t.name}
                className={`luxury-glass-card rounded-3xl p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden transition-all duration-300 ${
                  isPopular
                    ? 'border-[#D4AF37] shadow-[0_0_45px_rgba(212,175,55,0.3)] bg-gradient-to-b from-[#1f1b13] to-black/95'
                    : 'border-white/10 hover:border-[#D4AF37]/50'
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-gradient-to-r from-[#F5D061] to-[#D4AF37] text-black font-mono text-[10px] font-black uppercase px-4 py-1.5 rounded-bl-xl shadow-md tracking-wider">
                      ★ PRESTIGE RECOMMENDED
                    </div>
                  </div>
                )}

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono text-[11px] font-bold px-2 py-0.5 rounded border border-[#D4AF37]/40 bg-[#D4AF37]/10 text-[#F5D061]">
                      {t.code}
                    </span>
                    <span className="font-mono text-xs text-white/50">{t.scope}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-white font-sans mt-2">
                    {t.name}
                  </h3>

                  <p className="mt-3 text-sm text-white/60 leading-relaxed min-h-[44px]">
                    {t.desc}
                  </p>

                  {/* Price Block */}
                  <div className="mt-6 pb-6 border-b border-[#D4AF37]/20">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl sm:text-5xl font-black text-white font-mono tracking-tight">
                        {price}
                      </span>
                    </div>
                    <div className="font-mono text-[11px] text-[#F5D061]/80 mt-1">
                      {price === 'Custom' ? 'Tailored to scope & security protocols' : 'Milestone payments • 180-day VIP warranty'}
                    </div>
                  </div>

                  {/* Included Spec Checklist */}
                  <div className="mt-8 space-y-3">
                    <div className="font-mono text-[11px] font-bold text-white/40 uppercase tracking-wider mb-2">
                      INCLUDED IN SPECIFICATION:
                    </div>
                    {t.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-3 text-xs sm:text-sm text-white/80">
                        <Check className="w-4 h-4 text-[#F5D061] shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-10 pt-6 border-t border-[#D4AF37]/20">
                  <a
                    href="#vip-commission"
                    className={`w-full py-4 rounded-full font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-center block transition-all ${
                      isPopular
                        ? 'gold-btn text-black'
                        : 'border border-[#D4AF37]/40 bg-white/5 hover:bg-[#D4AF37]/10 text-[#F5D061]'
                    }`}
                  >
                    <span>{t.cta}</span>
                  </a>
                  <p className="mt-2 text-center text-[10px] font-mono text-white/40">
                    Complimentary 45-minute technical blueprint call
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
