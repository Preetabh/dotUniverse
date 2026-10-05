import React from 'react';
import { PRICING_PLANS, COUNTRIES } from '../../constants';
import { Currency } from '../../hooks/useCurrencyPricing';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import { CTAButton } from '../Buttons/CTAButton';

interface PricingSectionProps {
  currentCurrency: Currency;
  onCurrencyChange: (c: Currency) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  currentCurrency,
  onCurrencyChange,
}) => {
  return (
    <section id="pricing" className="relative py-24 sm:py-32 overflow-hidden border-t border-white/10">
      {/* Background glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#c8ff00]/5 rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#c8ff00] px-3.5 py-1.5 rounded-full bg-[#c8ff00]/10 border border-[#c8ff00]/30">
            ✦ Transparent Investment
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight">
            Predictable Pricing. <br />
            <span className="text-[#c8ff00]">Uncompromising ROI.</span>
          </h2>
          <p className="mt-4 text-white/60 text-base sm:text-lg">
            Choose a plan tailored to your stage. Switch or cancel anytime with zero friction.
          </p>

          {/* Interactive Currency Switcher */}
          <div className="mt-8 inline-flex items-center gap-1.5 p-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            {COUNTRIES.map((country) => (
              <button
                key={country.code}
                type="button"
                onClick={() => onCurrencyChange(country.currency as Currency)}
                className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  currentCurrency === country.currency
                    ? 'bg-[#c8ff00] text-black shadow-md'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{country.flag}</span>
                <span>{country.currency}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const price = plan.prices[currentCurrency] || plan.prices.INR;

            return (
              <div
                key={plan.id}
                className={`relative flex flex-col justify-between rounded-3xl p-8 transition-all duration-300 ${
                  plan.featured
                    ? 'border-2 border-[#c8ff00] bg-gradient-to-b from-[#c8ff00]/10 via-black/80 to-black shadow-[0_0_40px_rgba(200,255,0,0.15)] lg:-translate-y-3'
                    : 'border border-white/10 bg-white/[0.02] hover:border-white/20'
                }`}
              >
                {/* Popular Ribbon */}
                {plan.featured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#c8ff00] text-black text-[11px] font-black uppercase tracking-widest shadow-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3 fill-black" />
                    <span>{plan.badge || 'MOST POPULAR'}</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white/40 px-2 py-0.5 rounded bg-white/5">
                      {plan.pricingLabel}
                    </span>
                  </div>

                  <p className="mt-2 text-xs text-white/50">{plan.tagline}</p>

                  {/* Price */}
                  <div className="mt-6 flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                      {price}
                    </span>
                    {price !== 'Custom' && (
                      <span className="text-xs text-white/50 font-semibold">/ month</span>
                    )}
                  </div>

                  {/* Features List */}
                  <div className="mt-8 space-y-3.5 border-t border-white/10 pt-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-white/40 block mb-3">
                      Included in this plan:
                    </span>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-white/80">
                        <div
                          className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                            plan.featured ? 'bg-[#c8ff00] text-black' : 'bg-white/10 text-white'
                          }`}
                        >
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-10 pt-6 border-t border-white/10">
                  <CTAButton
                    href="#contact"
                    variant={plan.featured ? 'primary' : 'outline'}
                    size="md"
                    className="w-full"
                  >
                    <span>{plan.cta}</span>
                  </CTAButton>
                  <p className="mt-3 text-center text-[10px] text-white/40 font-medium">
                    No hidden setup charges • Pause anytime
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
