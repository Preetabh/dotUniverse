import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const DigitalMarketingFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How much monthly ad budget should we start with?",
      a: "For our Launch and Scale tiers, we typically advise starting between ₹25,000 to ₹1,00,000 / month ($500 to $2,000 / month) in ad spend, paid directly to Meta or Google. This gives algorithms sufficient data to exit the learning phase within 7 to 10 days and identify winning audiences."
    },
    {
      q: "Who owns the ad accounts, pixels, and creative assets?",
      a: "You retain 100% full legal ownership of your Meta Business Manager, Google Ads accounts, tracking pixels, and all produced video/static creatives. We operate strictly as authorized agency partners. We never hold your ad assets hostage."
    },
    {
      q: "How soon do we see leads, sales, and positive ROAS?",
      a: "Once onboarding is complete, campaigns go live within 48 to 72 hours. Initial click traffic and lead flow starts on Day 1. The algorithmic calibration and CPA stabilization usually takes 10 to 14 days, after which we scale winning ad sets aggressively."
    },
    {
      q: "Do you produce the videos, graphics, and ad copy or do we provide it?",
      a: "We handle the complete creative lifecycle. Our studio scripts high-retention hooks, writes direct-response copy, designs carousels, and edits vertical short-form reels. If you have existing footage or product samples, our team remixes them into high-performing ads."
    },
    {
      q: "How do you track true attribution after iOS 14.5+ privacy updates?",
      a: "We do not rely on fragile browser cookies. We deploy server-side Conversions API (CAPI) on Meta, Enhanced Conversions on Google, and robust GA4 server-to-server event tracking. This ensures 90%+ match rates and true attribution even on Apple devices."
    },
    {
      q: "Are we locked into a long-term contract?",
      a: "No. Our standard engagements operate on a transparent month-to-month cadence. We believe in earning your business every single month through measurable profit and revenue, not locking you into restrictive 12-month handcuffs."
    }
  ];

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative py-28 sm:py-36 overflow-hidden border-t border-white/10 bg-black/95">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ec4899]/10 border border-[#ec4899]/35 text-[#f472b6] font-mono text-xs font-bold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#ec4899]" />
            <span>[ FREQUENTLY ASKED QUESTIONS ]</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight font-sans">
            Got Questions? <br />
            <span className="bg-gradient-to-r from-[#ec4899] via-[#f43f5e] to-[#a855f7] bg-clip-text text-transparent">
              We Have Answers.
            </span>
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.q}
                className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden transition-all duration-200 hover:border-white/20"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-bold text-white pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#f472b6] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-white/70 leading-relaxed border-t border-white/5 pt-4">
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
