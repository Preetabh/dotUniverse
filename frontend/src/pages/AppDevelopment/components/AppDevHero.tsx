import React, { useState } from 'react';
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Smartphone,
  Cpu,
  Fingerprint,
  Plane,
  Watch,
  CreditCard,
  Crown,
  ChevronRight,
  Activity,
  Layers,
  Award
} from 'lucide-react';

export const AppDevHero: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState<'wealth' | 'atelier' | 'concierge'>('wealth');

  return (
    <section className="relative pt-36 pb-28 overflow-hidden text-center">
      {/* Background radial gold wash */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[950px] h-[600px] bg-gradient-to-tr from-[#D4AF37]/15 via-[#F5D061]/8 to-transparent rounded-full blur-[220px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Luxury Eyebrow Pill */}
        <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-[#D4AF37]/40 bg-black/60 backdrop-blur-2xl mb-8 shadow-[0_0_30px_rgba(212,175,55,0.2)]">
          <Crown className="w-3.5 h-3.5 text-[#F5D061]" />
          <span className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#F5D061]">
            HAUTE HORLOGERIE OF MOBILE SOFTWARE • iOS &amp; ANDROID ATELIER
          </span>
          <span className="hidden sm:inline text-white/20">|</span>
          <span className="hidden sm:inline font-mono text-[11px] text-white/60">
            120 FPS Native Motion
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] uppercase">
          <span className="text-white block tracking-tight">
            Crafting Digital
          </span>
          <span className="gold-gradient-text block mt-2 font-serif italic tracking-normal glow-gold">
            Luxury Apps.
          </span>
        </h1>

        {/* Subcopy */}
        <p className="mt-8 text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto font-normal leading-relaxed">
          We engineer bespoke mobile applications for high-growth enterprises and luxury brands. 
          Uncompromising craftsmanship, sub-second native responsiveness, and bank-grade biometric security.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
          <a
            href="#vip-commission"
            className="gold-btn w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full text-black font-mono text-sm uppercase tracking-wider font-extrabold shadow-[0_0_35px_rgba(212,175,55,0.4)] cursor-pointer"
          >
            <span>Commission Your App</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </a>

          <a
            href="#interactive-device"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-[#D4AF37]/30 bg-black/50 hover:bg-[#D4AF37]/10 text-[#F5D061] font-mono text-sm uppercase tracking-wider backdrop-blur-xl transition-all hover:border-[#D4AF37] cursor-pointer"
          >
            <Smartphone className="w-4 h-4 text-[#F5D061]" />
            <span>Inspect Device Atelier</span>
          </a>
        </div>

        {/* Trust Badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 font-mono text-xs text-white/50">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-[#F5D061]" />
            <span>100% App Store Approval Track Record</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-[#F5D061]" />
            <span>120 FPS Fluid Gestures &amp; Haptics</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#F5D061]" />
            <span>Hardware Enclave Biometric Security</span>
          </div>
        </div>

        {/* ============================================================== */}
        {/* INTERACTIVE OBSIDIAN IPHONE 16 PRO MAX DEVICE SHOWCASE        */}
        {/* ============================================================== */}
        <div id="interactive-device" className="mt-16 w-full max-w-4xl flex flex-col items-center">
          {/* Interactive Screen Selector Pills */}
          <div className="inline-flex items-center p-1.5 rounded-2xl bg-black/70 border border-[#D4AF37]/30 backdrop-blur-2xl mb-8 shadow-xl">
            <button
              type="button"
              onClick={() => setActiveScreen('wealth')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeScreen === 'wealth'
                  ? 'bg-gradient-to-r from-[#F5D061] to-[#D4AF37] text-black shadow-[0_0_20px_rgba(212,175,55,0.4)]'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              <CreditCard className="w-3.5 h-3.5" />
              <span>Private Wealth &amp; Vault</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveScreen('atelier')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeScreen === 'atelier'
                  ? 'bg-gradient-to-r from-[#F5D061] to-[#D4AF37] text-black shadow-[0_0_20px_rgba(212,175,55,0.4)]'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              <Crown className="w-3.5 h-3.5" />
              <span>Haute Maison E-Commerce</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveScreen('concierge')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeScreen === 'concierge'
                  ? 'bg-gradient-to-r from-[#F5D061] to-[#D4AF37] text-black shadow-[0_0_20px_rgba(212,175,55,0.4)]'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              <Plane className="w-3.5 h-3.5" />
              <span>Aero &amp; Yacht Concierge</span>
            </button>
          </div>

          {/* The Obsidian iPhone Frame */}
          <div className="relative w-full max-w-[340px] sm:max-w-[370px] rounded-[52px] p-3 sm:p-3.5 bg-gradient-to-b from-[#2a261f] via-[#14120e] to-[#0a0a08] border-[3px] border-[#D4AF37]/50 shadow-[0_30px_90px_rgba(0,0,0,0.9),0_0_60px_rgba(212,175,55,0.25)] text-left select-none">
            {/* Dynamic Glass Glare Sheen */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-white/[0.08] to-transparent rounded-[48px] pointer-events-none" />

            {/* Screen Glass Area */}
            <div className="relative w-full h-[620px] rounded-[42px] bg-black overflow-hidden border border-white/10 flex flex-col justify-between">
              {/* iOS Status Bar + Dynamic Island */}
              <div className="relative pt-3 px-6 flex items-center justify-between text-[11px] font-mono font-bold text-white/80 z-20">
                <span>9:41</span>
                {/* Dynamic Island */}
                <div className="w-24 h-6 rounded-full bg-black border border-white/10 flex items-center justify-center gap-2 px-2 shadow-inner">
                  <span className="w-2 h-2 rounded-full bg-[#10b981] animate-ping" />
                  <span className="text-[9px] font-mono text-[#F5D061]">VIP ACTIVE</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Activity className="w-3 h-3 text-[#F5D061]" />
                  <span>5G</span>
                </div>
              </div>

              {/* Dynamic Screen Content Based on Active Screen */}
              <div className="px-5 py-4 flex-1 flex flex-col justify-between overflow-y-auto">
                {activeScreen === 'wealth' && (
                  <div className="space-y-4 animate-in fade-in duration-300">
                    <div className="flex items-center justify-between pt-2">
                      <div>
                        <div className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-wider">
                          Sovereign Vault #8901
                        </div>
                        <div className="text-xl font-black text-white mt-0.5">
                          $4,892,450.00
                        </div>
                      </div>
                      <div className="w-9 h-9 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 flex items-center justify-center text-[#F5D061]">
                        <Fingerprint className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Performance Graph Mock */}
                    <div className="p-3.5 rounded-2xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-[#D4AF37]/20">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-white/60 font-mono">Portfolio Yield</span>
                        <span className="text-[#10b981] font-mono font-bold">+28.4% YTD</span>
                      </div>
                      <div className="h-16 mt-3 flex items-end gap-1.5">
                        {[40, 55, 48, 65, 78, 70, 85, 92, 88, 100].map((val, i) => (
                          <div
                            key={i}
                            className="flex-1 bg-gradient-to-t from-[#D4AF37]/30 to-[#F5D061] rounded-t-sm"
                            style={{ height: `${val}%` }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Instant Allocation Rows */}
                    <div className="space-y-2">
                      <div className="text-[10px] font-mono text-white/50 uppercase tracking-wider">
                        Allocated Assets
                      </div>
                      <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-xs">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-lg bg-[#D4AF37]/20 flex items-center justify-center text-[#F5D061] font-bold text-[10px]">
                            GLD
                          </div>
                          <div>
                            <div className="font-bold text-white">Physical Gold Vault</div>
                            <div className="text-[10px] text-white/40">Zurich Depository</div>
                          </div>
                        </div>
                        <span className="font-mono text-white font-bold">$2,140,000</span>
                      </div>

                      <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-xs">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-lg bg-[#00f0ff]/20 flex items-center justify-center text-[#00f0ff] font-bold text-[10px]">
                            BTC
                          </div>
                          <div>
                            <div className="font-bold text-white">Multi-Sig Cold Stash</div>
                            <div className="text-[10px] text-white/40">Hardware Enclave</div>
                          </div>
                        </div>
                        <span className="font-mono text-white font-bold">$1,852,450</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeScreen === 'atelier' && (
                  <div className="space-y-4 animate-in fade-in duration-300">
                    <div className="flex items-center justify-between pt-2">
                      <div>
                        <div className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-wider">
                          Maison Privée Collection
                        </div>
                        <div className="text-lg font-black text-white mt-0.5">
                          Autumn / Winter 2026
                        </div>
                      </div>
                      <Crown className="w-5 h-5 text-[#F5D061]" />
                    </div>

                    {/* Featured Product Preview */}
                    <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/30 bg-black/60 group">
                      <img
                        src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&auto=format&fit=crop&q=80"
                        alt="Luxury Item"
                        className="w-full h-40 object-cover filter brightness-90 contrast-110"
                      />
                      <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-md border border-[#D4AF37]/40 text-[9px] font-mono text-[#F5D061]">
                        1 OF 10 BESPOKE
                      </div>
                      <div className="p-3 bg-gradient-to-t from-black via-black/90 to-transparent">
                        <div className="text-sm font-bold text-white">Obsidian Chronograph Tourbillon</div>
                        <div className="text-xs font-mono text-[#F5D061] mt-0.5">£38,500 GBP</div>
                      </div>
                    </div>

                    {/* Instant 1-Click Concierge Purchase */}
                    <button
                      type="button"
                      className="w-full py-2.5 rounded-xl gold-btn text-black font-mono text-xs font-bold uppercase tracking-wider cursor-pointer"
                    >
                      Instant VIP Checkout (Apple Pay)
                    </button>
                  </div>
                )}

                {activeScreen === 'concierge' && (
                  <div className="space-y-4 animate-in fade-in duration-300">
                    <div className="flex items-center justify-between pt-2">
                      <div>
                        <div className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-wider">
                          Sky &amp; Sea Charter
                        </div>
                        <div className="text-lg font-black text-white mt-0.5">
                          Gulfstream G700 Reserved
                        </div>
                      </div>
                      <Plane className="w-5 h-5 text-[#F5D061]" />
                    </div>

                    <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-[#D4AF37]/30 space-y-2">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-mono text-white/50">ROUTE</span>
                        <span className="font-mono text-[#F5D061] font-bold">LHR (London) → DXB (Dubai)</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-mono text-white/50">DEPARTURE</span>
                        <span className="font-mono text-white">Tonight · 23:45 UTC</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-mono text-white/50">STATUS</span>
                        <span className="text-[#10b981] font-mono font-bold">FBO Fast-Track Cleared</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-black/60 border border-white/10 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#10b981] animate-ping" />
                        <span className="text-white/80">Private Chauffeur Assigned</span>
                      </div>
                      <span className="font-mono text-[#F5D061]">Rolls Royce Spectre</span>
                    </div>
                  </div>
                )}
              </div>

              {/* iOS Home Indicator Bar */}
              <div className="pb-2 pt-1 flex justify-center">
                <div className="w-32 h-1 rounded-full bg-white/40" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
