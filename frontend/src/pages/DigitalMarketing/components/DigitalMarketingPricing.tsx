import React from 'react';
import { Check, Sparkles, ArrowRight, Zap, Flame, ShieldCheck } from 'lucide-react';
import { PRICING_PLANS } from '../../../constants';
import { Currency } from '../../../hooks/useCurrencyPricing';

interface DigitalMarketingPricingProps {
  currentCurrency: Currency;
  onCurrencyChange: (c: Currency) => void;
}

export const DigitalMarketingPricing: React.FC<DigitalMarketingPricingProps> = ({
  currentCurrency,
  onCurrencyChange,
}) => {
  const currencies: Currency[] = ['INR', 'USD', 'GBP', 'AED'];

  return (
    <section id="pricing" className="relative py-28 sm:py-36 overflow-hidden border-t border-white/10 bg-black/95">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-r from-[#ec4899]/10 via-[#a855f7]/10 to-transparent rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ec4899]/10 border border-[#ec4899]/35 text-[#f472b6] font-mono text-xs font-bold uppercase tracking-wider mb-4 shadow-[0_0_20px_rgba(236,72,153,0.25)]">
            <Zap className="w-3.5 h-3.5 text-[#ec4899]" />
            <span>[ TRANSPARENT INVESTMENT PACKAGES ]</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight font-sans">
            Transparent Pricing. <br />
            <span className="bg-gradient-to-r from-[#ec4899] via-[#f43f5e] to-[#a855f7] bg-clip-text text-transparent">
              Compounding ROI.
            </span>
          </h2>

          <p className="mt-6 text-white/70 text-base sm:text-lg">
            No hidden retainers or confusing agency percentages. Choose your scale tier and upgrade anytime as your ad revenue multiplies.
          </p>

          {/* Currency Switcher */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            {currencies.map((curr) => (
              <button
                key={curr}
                type="button"
                onClick={() => onCurrencyChange(curr)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase transition-all cursor-pointer ${
                  currentCurrency === curr
                    ? 'bg-gradient-to-r from-[#ec4899] to-[#a855f7] text-white shadow-[0_0_15px_rgba(236,72,153,0.4)]'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {curr}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const isFeatured = plan.featured;
            const price = plan.prices[currentCurrency] || plan.prices.USD;

            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden transition-all duration-300 ${
                  isFeatured
                    ? 'border-2 border-[#ec4899] bg-gradient-to-b from-[#1a0e1c] via-[#0d0714] to-black shadow-[0_0_50px_rgba(236,72,153,0.3)] scale-[1.02] z-10'
                    : 'border border-white/10 bg-white/[0.02] hover:border-white/20'
                }`}
              >
                {/* Featured Highlight Badge */}
                {isFeatured && (
                  <div className="absolute top-0 right-0 bg-gradient-to-l from-[#ec4899] to-[#a855f7] text-white font-mono text-[10px] font-extrabold uppercase px-4 py-1.5 rounded-bl-2xl shadow-lg flex items-center gap-1">
                    <Flame className="w-3 h-3 fill-current" />
                    <span>{plan.badge || 'MOST POPULAR'}</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-black text-white">{plan.name}</h3>
                  </div>

                  <p className="text-xs sm:text-sm text-white/60 min-h-[40px] leading-relaxed">
                    {plan.tagline}
                  </p>

                  {/* Price */}
                  <div className="mt-6 pb-6 border-b border-white/10">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl sm:text-5xl font-black font-mono text-white tracking-tight">
                        {price}
                      </span>
                      <span className="text-xs font-mono text-white/50 uppercase">
                        / {plan.pricingLabel}
                      </span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="mt-8 space-y-3.5">
                    <div className="text-xs font-mono font-bold text-white/50 uppercase tracking-wider">
                      Included in this plan:
                    </div>
                    {plan.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-3 text-xs sm:text-sm text-white/80">
                        <Check
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            isFeatured ? 'text-[#ec4899]' : 'text-[#a855f7]'
                          }`}
                        />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <div className="mt-10 pt-6 border-t border-white/10">
                  <a
                    href={`mailto:support.dotuniverse@gmail.com?subject=Digital%20Marketing%20Inquiry%20-%20${encodeURIComponent(plan.name)}%20Tier&body=Hello%20dotUniverse,%0A%0AI%20would%20like%20to%20get%20started%20with%20the%20${encodeURIComponent(plan.name)}%20Digital%20Marketing%20package.`}
                    className={`w-full inline-flex items-center justify-center gap-2 py-4 rounded-full font-mono text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
                      isFeatured
                        ? 'bg-gradient-to-r from-[#ec4899] via-[#f43f5e] to-[#a855f7] text-white shadow-[0_0_30px_rgba(236,72,153,0.4)] hover:opacity-95'
                        : 'border border-white/20 bg-white/5 hover:bg-white/10 text-white'
                    }`}
                  >
                    <span>{plan.cta}</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Guarantees Footer */}
        <div className="mt-12 text-center text-xs font-mono text-white/50 flex flex-wrap items-center justify-center gap-6">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#ec4899]" />
            <span>Dedicated Account Growth Lead</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#ec4899]" />
            <span>Weekly Performance Dashboards</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#ec4899]" />
            <span>Pause or Cancel Anytime</span>
          </div>
        </div>

      </div>
    </section>
  );
};
