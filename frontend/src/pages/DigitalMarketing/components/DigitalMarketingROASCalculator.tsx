import React, { useState } from 'react';
import {
  Calculator,
  DollarSign,
  TrendingUp,
  Zap,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { Currency } from '../../../hooks/useCurrencyPricing';

interface DigitalMarketingROASCalculatorProps {
  currentCurrency?: Currency;
}

export const DigitalMarketingROASCalculator: React.FC<DigitalMarketingROASCalculatorProps> = ({
  currentCurrency = 'INR'
}) => {
  const [industry, setIndustry] = useState<'ecom' | 'b2b' | 'local' | 'saas'>('ecom');
  const [monthlyBudget, setMonthlyBudget] = useState<number>(50000);
  const [targetMultiplier, setTargetMultiplier] = useState<'standard' | 'aggressive'>('aggressive');

  // Currency multipliers relative to INR base
  const currencySymbol = currentCurrency === 'USD' ? '$' : currentCurrency === 'GBP' ? '£' : currentCurrency === 'AED' ? 'AED ' : '₹';
  const currencyRate = currentCurrency === 'USD' ? 0.012 : currentCurrency === 'GBP' ? 0.0095 : currentCurrency === 'AED' ? 0.044 : 1;

  const industries = [
    {
      id: 'ecom',
      name: 'E-Commerce / Direct-to-Consumer',
      aov: 'AOV: High Volume',
      baseRoas: targetMultiplier === 'aggressive' ? 4.8 : 3.6,
      cpaPercent: 0.22,
      desc: 'Optimized for Shopify, WooCommerce & direct brand checkouts.'
    },
    {
      id: 'b2b',
      name: 'B2B & High-Ticket Services',
      aov: 'Deal Size: $2K - $25K',
      baseRoas: targetMultiplier === 'aggressive' ? 5.6 : 4.2,
      cpaPercent: 0.18,
      desc: 'Optimized for booked sales calls and qualified enterprise leads.'
    },
    {
      id: 'local',
      name: 'Local Business & Clinics / Gyms',
      aov: 'High Footfall & Retainers',
      baseRoas: targetMultiplier === 'aggressive' ? 4.5 : 3.2,
      cpaPercent: 0.20,
      desc: 'Like Fitness Care Gym: Walk-ins, WhatsApp queries & memberships.'
    },
    {
      id: 'saas',
      name: 'SaaS & Digital Subscriptions',
      aov: 'High LTV & Compounding MRR',
      baseRoas: targetMultiplier === 'aggressive' ? 5.2 : 3.8,
      cpaPercent: 0.25,
      desc: 'Product-led growth, free trial signups & self-serve conversions.'
    }
  ];

  const selectedInd = industries.find((i) => i.id === industry) || industries[0];

  // Calculations
  const calculatedRevenue = Math.round(monthlyBudget * selectedInd.baseRoas);
  const estimatedOrdersOrLeads = Math.round(monthlyBudget / (monthlyBudget * selectedInd.cpaPercent * 0.15 + 250));
  const estimatedClicks = Math.round(monthlyBudget / 18);
  const projectedNetGain = calculatedRevenue - monthlyBudget;

  const formatMoney = (amountInINR: number) => {
    const converted = amountInINR * currencyRate;
    if (converted >= 100000) {
      return `${currencySymbol}${Math.round(converted).toLocaleString()}`;
    }
    return `${currencySymbol}${Math.round(converted).toLocaleString()}`;
  };

  return (
    <section id="roas-calculator" className="relative py-28 sm:py-36 overflow-hidden border-t border-white/10 bg-gradient-to-b from-black via-[#0d0714] to-black">
      {/* Opulent Ambient Backlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-[#ec4899]/10 via-[#a855f7]/10 to-[#06b6d4]/10 rounded-full blur-[170px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ec4899]/15 border border-[#ec4899]/35 text-[#f472b6] font-mono text-xs font-bold uppercase tracking-wider mb-4 shadow-[0_0_20px_rgba(236,72,153,0.25)]">
            <Calculator className="w-3.5 h-3.5 text-[#ec4899]" />
            <span>[ REVENUE FORECAST SIMULATOR ]</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight font-sans">
            Calculate Your <br />
            <span className="bg-gradient-to-r from-[#ec4899] via-[#f43f5e] to-[#a855f7] bg-clip-text text-transparent">
              Target Return On Ad Spend
            </span>
          </h2>

          <p className="mt-6 text-white/70 text-base sm:text-lg">
            Input your estimated monthly advertising budget and select your industry sector to project your pipeline return based on dotUniverse historical benchmarks.
          </p>
        </div>

        {/* Interactive Calculator Matrix */}
        <div className="max-w-5xl mx-auto rounded-3xl p-6 sm:p-12 border border-white/15 bg-gradient-to-b from-white/[0.04] to-black/90 backdrop-blur-2xl shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            
            {/* Left Inputs Column */}
            <div className="lg:col-span-6 space-y-8">
              
              {/* 1. Industry Selector */}
              <div>
                <label className="block text-xs font-mono font-bold text-white/60 uppercase tracking-wider mb-3">
                  Step 1: Select Your Business Model
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {industries.map((ind) => (
                    <button
                      key={ind.id}
                      type="button"
                      onClick={() => setIndustry(ind.id as any)}
                      className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                        industry === ind.id
                          ? 'border-[#ec4899] bg-[#ec4899]/15 text-white shadow-[0_0_20px_rgba(236,72,153,0.3)]'
                          : 'border-white/10 bg-white/[0.02] text-white/60 hover:border-white/20 hover:text-white'
                      }`}
                    >
                      <div className="font-bold text-xs sm:text-sm line-clamp-1">{ind.name}</div>
                      <div className="text-[10px] font-mono text-white/40 mt-1">{ind.aov}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Budget Slider */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-xs font-mono font-bold text-white/60 uppercase tracking-wider">
                    Step 2: Monthly Ad Spend Budget
                  </label>
                  <span className="font-mono text-lg font-black text-[#ec4899]">
                    {formatMoney(monthlyBudget)}
                  </span>
                </div>

                <input
                  type="range"
                  min={15000}
                  max={500000}
                  step={5000}
                  value={monthlyBudget}
                  onChange={(e) => setMonthlyBudget(Number(e.target.value))}
                  className="w-full h-2.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#ec4899]"
                />

                <div className="flex justify-between text-[11px] font-mono text-white/40 mt-2">
                  <span>{formatMoney(15000)} (Starter)</span>
                  <span>{formatMoney(250000)} (Scaling)</span>
                  <span>{formatMoney(500000)}+ (Enterprise)</span>
                </div>
              </div>

              {/* 3. Campaign Velocity */}
              <div>
                <label className="block text-xs font-mono font-bold text-white/60 uppercase tracking-wider mb-3">
                  Step 3: Campaign Optimization Pace
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setTargetMultiplier('standard')}
                    className={`py-2.5 px-4 rounded-xl font-mono text-xs font-bold border transition-all cursor-pointer ${
                      targetMultiplier === 'standard'
                        ? 'border-[#06b6d4] bg-[#06b6d4]/15 text-[#06b6d4]'
                        : 'border-white/10 bg-white/[0.02] text-white/60 hover:text-white'
                    }`}
                  >
                    Conservative / Balanced
                  </button>
                  <button
                    type="button"
                    onClick={() => setTargetMultiplier('aggressive')}
                    className={`py-2.5 px-4 rounded-xl font-mono text-xs font-bold border transition-all cursor-pointer ${
                      targetMultiplier === 'aggressive'
                        ? 'border-[#ec4899] bg-[#ec4899]/15 text-[#ec4899] shadow-[0_0_15px_rgba(236,72,153,0.3)]'
                        : 'border-white/10 bg-white/[0.02] text-white/60 hover:text-white'
                    }`}
                  >
                    Accelerated Hypergrowth 🚀
                  </button>
                </div>
              </div>

            </div>

            {/* Right Output Projections Card */}
            <div className="lg:col-span-6 rounded-3xl p-6 sm:p-8 border border-white/20 bg-gradient-to-b from-white/[0.06] to-black/95 relative overflow-hidden flex flex-col justify-between shadow-2xl">
              
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <span className="font-mono text-xs text-white/50 uppercase tracking-wider">
                    PROJECTED BLENDED RETURN
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ec4899]/15 border border-[#ec4899]/35 text-[#ec4899] font-mono text-xs font-bold">
                    <Zap className="w-3.5 h-3.5" />
                    <span>{selectedInd.baseRoas}x TARGET ROAS</span>
                  </span>
                </div>

                <div>
                  <div className="text-xs font-mono text-white/40 uppercase">
                    ESTIMATED MONTHLY REVENUE PIPELINE
                  </div>
                  <div className="text-4xl sm:text-5xl font-black font-mono text-white tracking-tight mt-1 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text">
                    {formatMoney(calculatedRevenue)}
                  </div>
                  <div className="text-xs font-mono text-[#10b981] mt-1 flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>+{formatMoney(projectedNetGain)} Projected Net Revenue Gain</span>
                  </div>
                </div>

                {/* Sub-Metrics Grid */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="text-[10px] font-mono text-white/40 uppercase">
                      Est. Qualified Inquiries / Orders
                    </div>
                    <div className="text-xl font-bold font-mono text-white mt-0.5">
                      ~{estimatedOrdersOrLeads.toLocaleString()}
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="text-[10px] font-mono text-white/40 uppercase">
                      Est. High-Intent Clicks
                    </div>
                    <div className="text-xl font-bold font-mono text-white mt-0.5">
                      ~{estimatedClicks.toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Callout */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <a
                  href={`mailto:contact@dotuniverse.io?subject=Digital%20Marketing%20Strategy%20Inquiry%20(${formatMoney(monthlyBudget)}%20Budget)&body=Hello%20dotUniverse,%0A%0AI%20used%20your%20ROAS%20Simulator%20with%20a%20budget%20of%20${formatMoney(monthlyBudget)}%20for%20my%20business%20in%20the%20${encodeURIComponent(selectedInd.name)}%20sector.%20I%20would%20like%20to%20audit%20my%20growth%20pipeline.`}
                  className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-full font-mono text-xs font-extrabold uppercase tracking-wider text-black bg-gradient-to-r from-[#ec4899] via-[#f43f5e] to-[#a855f7] hover:opacity-90 transition-all shadow-[0_0_30px_rgba(236,72,153,0.4)] cursor-pointer"
                >
                  <span>Apply This Growth Strategy</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>

                <div className="mt-3 text-center text-[10px] font-mono text-white/40">
                  *Projections derived from dotUniverse live campaigns. Results tailored to market conditions &amp; offer viability.
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
