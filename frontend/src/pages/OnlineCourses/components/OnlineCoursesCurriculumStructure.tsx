import React from 'react';
import { Terminal, ShieldCheck, GitPullRequest, Briefcase, Zap, Sparkles } from 'lucide-react';

export const OnlineCoursesCurriculumStructure: React.FC = () => {
  const pillars = [
    {
      num: "01",
      title: "Reverse-Engineered Enterprise Repos",
      accent: "#f59e0b",
      icon: Terminal,
      lead: "Zero trivial tutorials. You dissect and contribute to real-world codebases with production-grade architecture.",
      details: [
        "Clone multi-tenant Next.js & React production microservices",
        "Implement production authentication, WebSockets, and Redis queues",
        "Write integration tests that pass CI/CD pipeline automation",
      ]
    },
    {
      num: "02",
      title: "Real Ad Budgets & Live Market Environments",
      accent: "#ec4899",
      icon: Zap,
      lead: "Theoretical knowledge is useless in paid ads. We hand you live sandbox budgets to spend on Meta and Google.",
      details: [
        "Manage real ad spend with true credit card skin in the game",
        "Diagnose algorithmic creative fatigue and CPA spikes in real time",
        "Wire server-side CAPI tracking and verify multi-touch attribution",
      ]
    },
    {
      num: "03",
      title: "Weekly 1-on-1 Founder PR Teardowns",
      accent: "#c8ff00",
      icon: GitPullRequest,
      lead: "No automated quiz bots. You get line-by-line code reviews and creative feedback directly from senior practitioners.",
      details: [
        "In-depth GitHub Pull Request reviews on code style and performance",
        "Design critiques on typography, token systems, and UX flows",
        "Private Slack & Discord voice channels with your lead mentor",
      ]
    },
    {
      num: "04",
      title: "Direct Placement & Global Agency Network",
      accent: "#06b6d4",
      icon: Briefcase,
      lead: "We do not leave you stranded with a PDF certificate. We connect you directly with hiring partners who need builders.",
      details: [
        "Direct fast-track interview referrals with 15+ partner brands",
        "Resume and GitHub profile teardowns tailored to pass senior filters",
        "Mock technical interview prep with active engineering leads",
      ]
    },
  ];

  return (
    <section className="relative py-28 sm:py-36 overflow-hidden border-t border-white/10 bg-black cyber-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/30 text-[#fbbf24] font-mono text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>[ THE PRACTITIONER METHODOLOGY ]</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight font-sans">
            Why Generic Bootcamps Fail <br />
            <span className="bg-gradient-to-r from-[#f59e0b] via-[#fbbf24] to-[#f97316] bg-clip-text text-transparent">
              And How Our Atelier Succeeds
            </span>
          </h2>

          <p className="mt-6 text-white/70 text-base sm:text-lg">
            Most courses teach outdated theory from people who haven&apos;t pushed production code in 5 years. 
            dotUniverse Academy immerses you directly inside an active high-velocity digital agency.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.num}
                className="rounded-3xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 relative overflow-hidden group hover:border-[#f59e0b]/30"
              >
                <div
                  className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl pointer-events-none opacity-10 group-hover:opacity-25 transition-opacity"
                  style={{ backgroundColor: p.accent }}
                />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center border"
                      style={{
                        backgroundColor: `${p.accent}15`,
                        borderColor: `${p.accent}35`,
                      }}
                    >
                      <Icon className="w-6 h-6" style={{ color: p.accent }} />
                    </div>

                    <span
                      className="font-mono text-2xl font-black"
                      style={{ color: p.accent }}
                    >
                      {p.num}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-white transition-colors">
                    {p.title}
                  </h3>

                  <p className="mt-4 text-sm text-white/70 leading-relaxed">
                    {p.lead}
                  </p>

                  <div className="mt-6 space-y-2.5 border-t border-white/10 pt-4">
                    {p.details.map((d) => (
                      <div key={d} className="flex items-start gap-2.5 text-xs text-white/80">
                        <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: p.accent }} />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-white/50">
                  <span className="w-2 h-2 rounded-full bg-[#10b981]" />
                  <span>Integrated in Every Masterclass</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
