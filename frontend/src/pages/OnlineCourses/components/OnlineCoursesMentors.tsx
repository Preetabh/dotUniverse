import React from 'react';
import { ExternalLink, Sparkles, Award, CheckCircle2, MessageSquare } from 'lucide-react';
import { TEAM_MEMBERS } from '../../../constants';

export const OnlineCoursesMentors: React.FC = () => {
  const mentors = [
    {
      name: "Vishu Awasthi",
      role: "FOUNDER & GROWTH ARCHITECT",
      bio: "Visionary founder & growth strategist at dotUniverse. Vishu directs multi-million dollar ad spend and trains students on high-velocity paid acquisition and algorithmic scaling.",
      image: "/assets/founder.png",
      linkedin: "https://www.linkedin.com/in/#/",
      accent: "#f59e0b",
      specialty: "Performance Marketing & Funnel CRO"
    },
    {
      name: "Sardar Japnam Singh Lal",
      role: "VIDEOGRAPHER & CREATIVE DIRECTOR",
      bio: "Visual storyteller behind high-retention video campaigns. Directed content generating 500K+ organic impressions for leading consumer and tech brands.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=80",
      linkedin: "https://www.linkedin.com/in/#/",
      accent: "#ec4899",
      specialty: "Viral Hook Production & Directing"
    },
    {
      name: "DEV LEAD ATELIER",
      role: "SENIOR FULL-STACK ARCHITECT",
      bio: "Architecting cloud-native distributed microservices, Next.js 15 platforms, and real-time database clusters for dotUniverse global clients.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80",
      linkedin: "https://www.linkedin.com/company/dotuniverse",
      accent: "#06b6d4",
      specialty: "Next.js 15, Redis, Microservices & Docker"
    }
  ];

  return (
    <section className="relative py-28 sm:py-36 overflow-hidden border-t border-white/10 bg-black/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/35 text-[#fbbf24] font-mono text-xs font-bold uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5 text-[#f59e0b]" />
            <span>[ ACTIVE PRACTITIONER MENTORSHIP ]</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight font-sans">
            Learn Directly From <br />
            <span className="bg-gradient-to-r from-[#f59e0b] via-[#fbbf24] to-[#f97316] bg-clip-text text-transparent">
              Active Agency Founders
            </span>
          </h2>

          <p className="mt-6 text-white/70 text-base sm:text-lg">
            No hired teaching assistants. You get direct code audits, campaign reviews, and portfolio critiques from the people who actually run dotUniverse client projects.
          </p>
        </div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mentors.map((m) => (
            <div
              key={m.name}
              className="rounded-3xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative overflow-hidden group hover:border-[#f59e0b]/40"
            >
              <div>
                {/* Avatar with Status Badge */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-white/20 group-hover:border-[#f59e0b] transition-colors shadow-lg">
                    <img
                      src={m.image}
                      alt={m.name}
                      className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="absolute top-0 right-0 flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/80 border border-white/10 text-[10px] font-mono text-[#10b981]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
                    <span>Live Mentorship</span>
                  </div>
                </div>

                <div
                  className="font-mono text-[10px] font-bold uppercase tracking-wider mb-1"
                  style={{ color: m.accent }}
                >
                  {m.specialty}
                </div>

                <h3 className="text-xl font-black text-white group-hover:text-white transition-colors">
                  {m.name}
                </h3>
                <div className="text-xs font-mono text-white/50 mt-0.5">{m.role}</div>

                <p className="mt-4 text-xs sm:text-sm text-white/70 leading-relaxed">
                  {m.bio}
                </p>
              </div>

              {/* Bottom Connect */}
              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] font-mono text-white/40">1-on-1 Office Hours</span>
                <a
                  href={m.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono font-bold text-white/60 hover:text-white transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Profile</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
