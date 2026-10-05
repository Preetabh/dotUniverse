import React, { useState } from 'react';
import {
  Compass,
  TrendingUp,
  Briefcase,
  Zap,
  ArrowRight,
  Code2,
  CheckCircle2,
  Sparkles,
  Layers,
  GraduationCap
} from 'lucide-react';
import { Currency } from '../../../hooks/useCurrencyPricing';

interface OnlineCoursesInteractiveLabProps {
  currentCurrency?: Currency;
}

export const OnlineCoursesInteractiveLab: React.FC<OnlineCoursesInteractiveLabProps> = ({
  currentCurrency = 'INR'
}) => {
  const [currentRole, setCurrentRole] = useState<'fresher' | 'junior_dev' | 'marketer' | 'designer'>('fresher');
  const [targetRole, setTargetRole] = useState<'fullstack' | 'media_buyer' | 'product_designer' | 'ai_engineer'>('fullstack');
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(14);

  const currencySymbol = currentCurrency === 'USD' ? '$' : currentCurrency === 'GBP' ? '£' : currentCurrency === 'AED' ? 'AED ' : '₹';
  const currencyRate = currentCurrency === 'USD' ? 0.012 : currentCurrency === 'GBP' ? 0.0095 : currentCurrency === 'AED' ? 0.044 : 1;

  const currentRoleData = {
    fresher: { name: "Fresher / College Student", basePayINR: 350000 },
    junior_dev: { name: "Junior Dev (HTML/CSS/JS)", basePayINR: 500000 },
    marketer: { name: "Traditional / Social Marketer", basePayINR: 420000 },
    designer: { name: "Graphic Designer / Canva", basePayINR: 380000 },
  };

  const targetRoleData = {
    fullstack: {
      name: "Full-Stack Software Architect",
      targetPayINR: 1650000,
      capstoneCount: 3,
      trackName: "Full-Stack System Architecture & Next.js 15",
      skills: ["Next.js 15", "Distributed Redis Caching", "Docker", "PostgreSQL", "AWS ECS"],
    },
    media_buyer: {
      name: "8-Figure Growth Media Buyer",
      targetPayINR: 1450000,
      capstoneCount: 2,
      trackName: "8-Figure Performance Marketing & Viral Social",
      skills: ["Advantage+ Scaling", "CAPI Server-Side", "Direct-Response Copy", "GA4 Attribution"],
    },
    product_designer: {
      name: "Senior Product Designer (UI/UX)",
      targetPayINR: 1350000,
      capstoneCount: 2,
      trackName: "DesignX: UI/UX & Tokenized Design Systems",
      skills: ["Figma Design Tokens", "Auto-Layout 5", "Spline 3D", "Framer Interactions"],
    },
    ai_engineer: {
      name: "AI Automation & LLM Engineer",
      targetPayINR: 1950000,
      capstoneCount: 3,
      trackName: "Autonomous AI Agents & LLM Workflow Automation",
      skills: ["LangChain", "Vector Embeddings", "Multi-Agent Swarms", "FastAPI Tooling"],
    },
  };

  const currentRoleObj = currentRoleData[currentRole];
  const targetRoleObj = targetRoleData[targetRole];

  // Dynamic calculations
  const salaryDiffINR = targetRoleObj.targetPayINR - currentRoleObj.basePayINR;
  const percentageJump = Math.round((salaryDiffINR / currentRoleObj.basePayINR) * 100);
  const estimatedWeeks = Math.max(8, Math.round(180 / hoursPerWeek));

  const formatCompensation = (amountInINR: number) => {
    const converted = amountInINR * currencyRate;
    if (currentCurrency === 'INR') {
      const lpa = (amountInINR / 100000).toFixed(1);
      return `₹${lpa} LPA`;
    }
    return `${currencySymbol}${Math.round(converted).toLocaleString()}/yr`;
  };

  return (
    <section id="career-simulator" className="relative py-28 sm:py-36 overflow-hidden border-t border-white/10 bg-gradient-to-b from-black via-[#0f0b04] to-black">
      {/* Opulent Ambient Backlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-gradient-to-r from-[#f59e0b]/15 via-[#ec4899]/10 to-[#06b6d4]/10 rounded-full blur-[190px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f59e0b]/15 border border-[#f59e0b]/40 text-[#fbbf24] font-mono text-xs font-bold uppercase tracking-wider mb-4 shadow-[0_0_20px_rgba(245,158,11,0.25)]">
            <Compass className="w-3.5 h-3.5 text-[#f59e0b]" />
            <span>[ CAREER &amp; COMPENSATION ACCELERATOR ]</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight font-sans">
            Simulate Your <br />
            <span className="bg-gradient-to-r from-[#f59e0b] via-[#fbbf24] to-[#f97316] bg-clip-text text-transparent">
              Career Trajectory &amp; Salary Jump
            </span>
          </h2>

          <p className="mt-6 text-white/70 text-base sm:text-lg">
            Map your starting point to your target high-income specialization. Discover the exact timeline, capstones, and compensation potential backed by dotUniverse alumni outcomes.
          </p>
        </div>

        {/* Interactive Simulator Shell */}
        <div className="max-w-5xl mx-auto rounded-3xl p-6 sm:p-12 border border-white/15 bg-gradient-to-b from-white/[0.04] to-black/95 backdrop-blur-2xl shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            
            {/* Left Inputs Column */}
            <div className="lg:col-span-6 space-y-8">
              
              {/* Step 1: Current Background */}
              <div>
                <label className="block text-xs font-mono font-bold text-white/60 uppercase tracking-wider mb-3">
                  Step 1: Your Current Background
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {(Object.keys(currentRoleData) as (keyof typeof currentRoleData)[]).map((key) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setCurrentRole(key)}
                      className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                        currentRole === key
                          ? 'border-[#f59e0b] bg-[#f59e0b]/15 text-white shadow-[0_0_20px_rgba(245,158,11,0.3)]'
                          : 'border-white/10 bg-white/[0.02] text-white/60 hover:border-white/20 hover:text-white'
                      }`}
                    >
                      <div className="font-bold text-xs sm:text-sm line-clamp-1">
                        {currentRoleData[key].name}
                      </div>
                      <div className="text-[10px] font-mono text-white/40 mt-1">
                        Base: ~{formatCompensation(currentRoleData[key].basePayINR)}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Target Dream Role */}
              <div>
                <label className="block text-xs font-mono font-bold text-white/60 uppercase tracking-wider mb-3">
                  Step 2: Desired Career Specialization
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {(Object.keys(targetRoleData) as (keyof typeof targetRoleData)[]).map((key) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setTargetRole(key)}
                      className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                        targetRole === key
                          ? 'border-[#fbbf24] bg-gradient-to-r from-[#f59e0b]/20 to-[#fbbf24]/10 text-white shadow-[0_0_20px_rgba(245,158,11,0.3)]'
                          : 'border-white/10 bg-white/[0.02] text-white/60 hover:border-white/20 hover:text-white'
                      }`}
                    >
                      <div className="font-bold text-xs sm:text-sm line-clamp-1">
                        {targetRoleData[key].name}
                      </div>
                      <div className="text-[10px] font-mono text-[#fbbf24] mt-1 font-bold">
                        Target: {formatCompensation(targetRoleData[key].targetPayINR)}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Weekly Commitment Slider */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-xs font-mono font-bold text-white/60 uppercase tracking-wider">
                    Step 3: Weekly Practice Hours
                  </label>
                  <span className="font-mono text-base font-black text-[#fbbf24]">
                    {hoursPerWeek} Hours / Week
                  </span>
                </div>

                <input
                  type="range"
                  min={8}
                  max={30}
                  step={2}
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                  className="w-full h-2.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#f59e0b]"
                />

                <div className="flex justify-between text-[11px] font-mono text-white/40 mt-2">
                  <span>8h (Working Pro)</span>
                  <span>14h (Recommended)</span>
                  <span>30h (Full Immersion)</span>
                </div>
              </div>

            </div>

            {/* Right Output Projections Card */}
            <div className="lg:col-span-6 rounded-3xl p-6 sm:p-8 border border-white/20 bg-gradient-to-b from-white/[0.06] to-black/95 relative overflow-hidden flex flex-col justify-between shadow-2xl">
              
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <span className="font-mono text-xs text-white/50 uppercase tracking-wider">
                    SIMULATED OUTCOME
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f59e0b]/15 border border-[#f59e0b]/35 text-[#fbbf24] font-mono text-xs font-bold">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>+{percentageJump}% SALARY UPLIFT</span>
                  </span>
                </div>

                <div>
                  <div className="text-xs font-mono text-white/40 uppercase">
                    PROJECTED TARGET COMPENSATION
                  </div>
                  <div className="text-4xl sm:text-5xl font-black font-mono text-white tracking-tight mt-1 bg-gradient-to-r from-[#fbbf24] via-white to-white/90 bg-clip-text">
                    {formatCompensation(targetRoleObj.targetPayINR)}
                  </div>
                  <div className="text-xs font-mono text-[#10b981] mt-1 flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5" />
                    <span>+{formatCompensation(salaryDiffINR)} Net Compensation Increase</span>
                  </div>
                </div>

                {/* Sub-Metrics Grid */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="text-[10px] font-mono text-white/40 uppercase">
                      Est. Timeline to Job-Ready
                    </div>
                    <div className="text-xl font-bold font-mono text-white mt-0.5">
                      ~{estimatedWeeks} Weeks
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="text-[10px] font-mono text-white/40 uppercase">
                      Required Repos / Portfolios
                    </div>
                    <div className="text-xl font-bold font-mono text-white mt-0.5">
                      {targetRoleObj.capstoneCount} Capstones
                    </div>
                  </div>
                </div>

                {/* Recommended Track Card */}
                <div className="p-3.5 rounded-2xl bg-[#f59e0b]/10 border border-[#f59e0b]/25">
                  <div className="text-[10px] font-mono uppercase text-[#fbbf24] font-bold">
                    MATCHED MASTERCLASS:
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-white mt-0.5">
                    {targetRoleObj.trackName}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <a
                  href={`mailto:contact@dotuniverse.io?subject=Academy%20Career%20Roadmap%20Inquiry%20(${encodeURIComponent(targetRoleObj.name)})&body=Hello%20dotUniverse%20Academy,%0A%0AI%20ran%20the%20Career%20Simulator.%20My%20current%20background%20is%20${encodeURIComponent(currentRoleObj.name)}%20and%20I%20am%20targeting%20a%20career%20jump%20to%20${encodeURIComponent(targetRoleObj.name)}%20with%20${hoursPerWeek}%20hours/week%20commitment.%20Please%20schedule%20a%201-on-1%20admissions%20call.`}
                  className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-full font-mono text-xs font-black uppercase tracking-wider text-black bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] hover:opacity-90 transition-all shadow-[0_0_30px_rgba(245,158,11,0.4)] cursor-pointer"
                >
                  <span>Book Free 1-on-1 Career Evaluation</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>

                <div className="mt-3 text-center text-[10px] font-mono text-white/40">
                  *Projections based on verified dotUniverse alumni placements and current hiring partner packages.
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
