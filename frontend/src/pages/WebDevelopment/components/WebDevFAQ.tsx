import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Terminal, CheckCircle2 } from 'lucide-react';

export const WebDevFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      code: "FAQ::01",
      q: "How much does a new website cost?",
      a: "Our pricing is transparent and modular — see our Landing, Business Scale, and Enterprise Custom packages above. Landing packages start at ₹999 ($12 USD), and Business Scale starts at ₹1,999 ($25 USD). Every engagement starts with a technical strategy audit to guarantee our proposal matches your exact business goals without unnecessary padding."
    },
    {
      code: "FAQ::02",
      q: "What is your typical delivery and turnaround timeframe?",
      a: "Landing pages are delivered in 2 weeks. Comprehensive 10-20 page business platforms ship in 30-45 days. Large-scale enterprise platforms with custom backend integrations are delivered on structured milestone schedules of 8-12 weeks."
    },
    {
      code: "FAQ::03",
      q: "What does the 120-Day Post-Launch Warranty cover?",
      a: "Our 120-day warranty includes comprehensive bug fixes, browser compatibility updates, performance monitoring, Core Web Vitals checks, and direct technical support to ensure your site continues running flawlessly after go-live."
    },
    {
      code: "FAQ::04",
      q: "Will our marketing team be able to update content without writing code?",
      a: "Yes, 100%. We configure an intuitive, visual content management system (headless CMS, WordPress, or Webflow) tailored to your workflows. We also provide full video training documentation for your team."
    },
    {
      code: "FAQ::05",
      q: "Are your builds engineered for 90+ PageSpeed and Google SEO?",
      a: "Yes. Blistering speed is our core differentiator. Every build is benchmarked against Google Core Web Vitals (LCP, CLS, INP) targeting 90-100 scores, with semantic HTML, automated XML sitemaps, and Open Graph meta tags."
    },
    {
      code: "FAQ::06",
      q: "Can you assist with migration from our existing site without losing traffic?",
      a: "Absolutely. We map comprehensive 301 redirect tables, preserve canonical URL structures, and audit Google Search Console indexing to ensure zero loss in domain authority or search rankings during migration."
    },
    {
      code: "FAQ::07",
      q: "What technologies and frameworks do you build with?",
      a: "We develop primarily with Next.js 14, React 18, TypeScript, Tailwind CSS, Node.js, and modern headless CMS architecture to ensure zero legacy bloat and infinite scalability."
    }
  ];

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="relative py-28 sm:py-36 overflow-hidden border-t border-white/10 bg-black cyber-grid">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-[#00f0ff] font-mono text-xs font-bold uppercase tracking-wider mb-4">
            <Terminal className="w-3.5 h-3.5" />
            <span>[ SYSTEM KNOWLEDGE BASE &amp; FAQ ]</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight font-sans">
            Frequently Asked <br />
            <span className="text-[#00f0ff] glow-cyan">Questions</span>
          </h2>

          <p className="mt-6 text-white/70 text-base sm:text-lg">
            Everything you need to know about our web development sprints, technical guarantees, and deployment process.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={faq.code}
                className={`cyber-hud-card rounded-2xl overflow-hidden transition-all duration-300 relative ${
                  isOpen
                    ? 'border-[#00f0ff]/60 shadow-[0_0_30px_rgba(0,240,255,0.15)] bg-white/[0.04]'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                {isOpen && <div className="hud-bracket-top-left" />}
                {isOpen && <div className="hud-bracket-bottom-right" />}

                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-[#00f0ff]">
                      [{faq.code}]
                    </span>
                    <span className="text-base sm:text-lg font-bold text-white leading-snug">
                      {faq.q}
                    </span>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center border transition-all shrink-0 ${
                      isOpen
                        ? 'border-[#00f0ff] bg-[#00f0ff]/10 text-[#00f0ff]'
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
                  <div className="px-6 pb-6 pt-1 text-sm text-white/70 leading-relaxed border-t border-white/5 font-normal">
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
