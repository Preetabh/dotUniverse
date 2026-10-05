import React from 'react';
import { CheckCircle2, Clock, Users, Trophy, Shield } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const proofStats = [
    {
      number: "50+",
      label: "Production Deployments",
      detail: "Clean codebases with automated CI/CD and zero downtime",
      icon: Trophy,
      accent: "#c8ff00"
    },
    {
      number: "15+",
      label: "Global Retainers",
      detail: "Active partnerships spanning 3 continents and 8 industries",
      icon: Users,
      accent: "#00f0ff"
    },
    {
      number: "2-4 wks",
      label: "Average Velocity",
      detail: "From ideation to production launch without sacrificing quality",
      icon: Clock,
      accent: "#ff005e"
    },
    {
      number: "100%",
      label: "Security & IP Transfer",
      detail: "Fully vetted NDA protection and complete code repository transfer",
      icon: Shield,
      accent: "#a855f7"
    }
  ];

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden border-t border-white/10 bg-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Proof Metrics */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-[#00f0ff] text-xs font-bold uppercase tracking-wider mb-6">
              <span>✦ Battle-Tested Execution</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
              Obsessed with Velocity, <br />
              <span className="text-[#00f0ff]">Disciplined with Quality.</span>
            </h2>

            <p className="mt-6 text-base text-white/70 leading-relaxed font-normal">
              We eliminate the bloated timelines and sluggish bureaucracy of traditional consultancies.
              Our specialized squads deliver custom, enterprise-grade software and marketing campaigns with startup agility.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {proofStats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="p-5 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.05] transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{ backgroundColor: `${stat.accent}20`, color: stat.accent }}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-2xl font-black text-white" style={{ color: stat.accent }}>
                        {stat.number}
                      </span>
                    </div>
                    <div className="mt-3 text-sm font-bold text-white">{stat.label}</div>
                    <div className="mt-1 text-xs text-white/50 leading-relaxed">{stat.detail}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Visual Experience Media Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl p-2 bg-gradient-to-br from-white/10 to-transparent">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&auto=format&fit=crop&q=80"
                alt="dotUniverse High-Performance Digital Team"
                className="w-full h-80 sm:h-96 object-cover rounded-2xl filter brightness-90 contrast-105"
              />

              {/* Floating Testimonial/Metric Chip */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/15 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#c8ff00] animate-ping" />
                  <div>
                    <div className="text-xs font-bold text-white">Live Development Sprints</div>
                    <div className="text-[11px] text-white/50">Active builds running on Next.js &amp; Flutter</div>
                  </div>
                </div>
                <span className="text-xs font-black uppercase text-[#c8ff00] bg-[#c8ff00]/10 px-3 py-1 rounded-full border border-[#c8ff00]/20">
                  Sprint #42
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
