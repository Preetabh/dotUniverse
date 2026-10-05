import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Crown } from 'lucide-react';

export const AppDevFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Who owns the Intellectual Property (IP) and source code of our application?",
      a: "You retain 100% complete, unencumbered ownership of all source code, design systems, Figma tokens, database schemas, and intellectual property. Upon milestone completion, the full Git repository and deployment keys are transferred directly to your organization."
    },
    {
      q: "How do you guarantee approval on the Apple App Store & Google Play?",
      a: "Our mobile leads conduct thorough pre-submission audits benchmarked against Apple Human Interface Guidelines and Google Play Developer Policies. We handle sandbox testing, TestFlight provisioning, and direct resolution with Apple review teams, upholding our 100% first-pass certification track record."
    },
    {
      q: "Should our company choose Native (Swift/Kotlin) or Cross-Platform (Flutter/React Native)?",
      a: "If your app demands hardware-level sensor telemetry, Metal 3D shaders, or deep watchOS/Dynamic Island integrations, pure Native Swift is unrivaled. For high-velocity multi-platform apps where rapid feature iteration and unified logic across iOS & Android are paramount, Flutter or React Native provides 120 FPS performance with 40-50% reduced development time. We advise on the optimal architecture during our initial discovery call."
    },
    {
      q: "What does your 180-Day VIP Warranty cover?",
      a: "Our signature 6-month warranty provides comprehensive post-launch protection: zero-downtime hotfixes, OS updates (such as new iOS and Android releases), performance profiling, Crashlytics monitoring, and direct access to your dedicated Mobile Lead engineer."
    },
    {
      q: "Can you integrate with our existing backend, ERP, or legacy database?",
      a: "Yes. We regularly interface with custom REST, GraphQL, SAP, Salesforce, and legacy SQL architectures. We engineer encrypted middle-tier API adapters and WebSocket streams to ensure your mobile apps communicate with institutional speed and bank-grade security."
    },
    {
      q: "How do you handle offline functionality and data security?",
      a: "We implement an offline-first architecture using local SQLite and WatermelonDB databases with background data synchronization. All sensitive credentials, encryption keys, and user tokens are secured inside Apple Secure Enclave and Android Keystore with biometric FaceID authentication."
    }
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="relative py-28 sm:py-36 overflow-hidden border-t border-[#D4AF37]/20 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/35 text-[#F5D061] font-mono text-xs font-bold uppercase tracking-wider mb-4">
            <Crown className="w-3.5 h-3.5" />
            <span>[ VIP ADVISORY &amp; INTEL ]</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight font-sans">
            Frequently Asked <br />
            <span className="gold-gradient-text font-serif italic glow-gold">Questions</span>
          </h2>

          <p className="mt-6 text-white/70 text-base sm:text-lg">
            Insight into our bespoke engineering standards, intellectual property governance, and launch guarantees.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={faq.q}
                className={`luxury-glass-card rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? 'border-[#D4AF37] shadow-[0_0_35px_rgba(212,175,55,0.2)] bg-gradient-to-b from-[#18150f] to-black'
                    : 'border-white/10 hover:border-[#D4AF37]/40'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-bold text-white leading-snug">
                    {faq.q}
                  </span>

                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center border transition-all shrink-0 ${
                      isOpen
                        ? 'border-[#D4AF37] bg-[#D4AF37]/20 text-[#F5D061]'
                        : 'border-white/10 bg-white/5 text-white/50'
                    }`}
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-white/70 leading-relaxed border-t border-[#D4AF37]/15 font-normal">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
