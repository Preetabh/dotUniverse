import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const OnlineCoursesFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Are the masterclasses live or pre-recorded?",
      a: "All masterclasses feature mandatory live weekend sprints with active screen-sharing, live debugging, and interactive Q&A directly with the lead instructors. Every session is recorded in 4K and uploaded within 2 hours alongside dedicated GitHub branches and lesson summaries for lifetime access."
    },
    {
      q: "Can working professionals manage the weekly workload?",
      a: "Yes. Over 65% of our cohort members work full-time jobs. Live sessions take place on Saturdays and Sundays (3 hours each). Assignments, pull request reviews, and mentor consultations are handled asynchronously throughout the week via our private Discord and Slack channels."
    },
    {
      q: "How does the direct placement and referral process work?",
      a: "During Weeks 10-14, students complete rigorous portfolio polishing, technical resume reviews, and live mock interviews with active hiring managers. We introduce top-performing graduates directly to dotUniverse partner agencies and funded startups across India, the UK, and UAE."
    },
    {
      q: "What if I get stuck while working on my capstone repo?",
      a: "You are never stranded. Our instructors and senior alumni host daily live 'Office Hours' on Discord voice channels. You can share your screen, debug live errors, and receive line-by-line GitHub pull request reviews on your code."
    },
    {
      q: "Are there flexible installment or EMI options available?",
      a: "Yes. We offer 0% interest monthly installment plans across 2 to 3 split payments for all masterclasses to ensure financial accessibility for deserving students and early-career engineers."
    },
    {
      q: "What certificate or credential do I receive upon graduation?",
      a: "Graduates receive a cryptographically verified dotUniverse Practitioner Credential highlighting the exact live production repositories, capstones, and technologies mastered, which can be linked directly on LinkedIn and GitHub."
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/35 text-[#fbbf24] font-mono text-xs font-bold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#f59e0b]" />
            <span>[ FREQUENTLY ASKED QUESTIONS ]</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight font-sans">
            Curious About the Academy? <br />
            <span className="bg-gradient-to-r from-[#f59e0b] via-[#fbbf24] to-[#f97316] bg-clip-text text-transparent">
              Here are the Facts.
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
                    className={`w-5 h-5 text-[#fbbf24] shrink-0 transition-transform duration-200 ${
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
