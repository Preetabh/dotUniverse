import React from 'react';
import {
  Quote,
  Sparkles,
  Award,
  CheckCircle2,
  ExternalLink,
  MapPin,
  Heart,
  Target,
  Compass
} from 'lucide-react';
import { TEAM_MEMBERS } from '../../../constants';

export const AboutFoundersSpotlight: React.FC = () => {
  const leaders = [
    {
      name: "Vishu Awasthi",
      role: "FOUNDER & CHIEF STRATEGIST",
      location: "Barabanki, India 🇮🇳 (Global Remote Force)",
      image: "/assets/founder.png",
      linkedin: "https://www.linkedin.com/in/#/",
      accent: "#c8ff00",
      quote:
        "We started dotUniverse with a single, uncompromising standard: never ship work we wouldn't stake our own reputation and money on. We don't hide behind layers of account executives. When you partner with us, you work directly with builders who live and breathe your growth.",
      highlights: [
        "Architected growth strategies for 50+ enterprise and retail brands",
        "Directs multi-channel performance media spend with 4.8x average ROAS",
        "Oversees full-stack engineering sprints from Barabanki HQ to international hubs",
      ],
      philosophy: "Execution eats strategy for breakfast. Speed is our religion.",
    },
    {
      name: "Sardar Japnam Singh Lal",
      role: "CO-FOUNDER & CREATIVE DIRECTOR",
      location: "Global Remote Atelier",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=80",
      linkedin: "https://www.linkedin.com/in/#/",
      accent: "#ff005e",
      quote:
        "Attention is the new global currency. If your video hook doesn't arrest thumbs in the first 3 seconds, the rest of your funnel doesn't exist. We engineer visual identities that spark visceral desire and build unshakable brand loyalty.",
      highlights: [
        "Directed high-retention video campaigns generating 500K+ organic impressions",
        "Pioneered viral short-form pacing and commercial direct-response frameworks",
        "Lead visual identity and creative art direction for consumer lifestyle brands",
      ],
      philosophy: "Make it memorable. Make it convert. Never settle for ordinary.",
    },
  ];

  return (
    <section id="founders" className="relative py-28 sm:py-36 overflow-hidden border-t border-white/10 bg-black/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c8ff00]/10 border border-[#c8ff00]/30 text-[#c8ff00] font-mono text-xs font-bold uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>[ THE ARCHITECTS &amp; FOUNDERS ]</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight font-sans">
            The Leadership <br />
            <span className="bg-gradient-to-r from-[#c8ff00] via-[#00f0ff] to-[#ff005e] bg-clip-text text-transparent">
              In The Arena
            </span>
          </h2>

          <p className="mt-6 text-white/70 text-base sm:text-lg">
            Meet the hands-on founders who steer company strategy, lead technical engineering sprints, and drive real client revenue every single day.
          </p>
        </div>

        {/* 2 Featured Founder Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {leaders.map((leader) => (
            <div
              key={leader.name}
              className="rounded-3xl border border-white/15 bg-gradient-to-b from-white/[0.04] to-black/95 p-6 sm:p-10 flex flex-col justify-between relative overflow-hidden group hover:border-white/30 transition-all duration-500 shadow-2xl"
            >
              {/* Opulent Corner Accent Glow */}
              <div
                className="absolute -top-16 -right-16 w-48 h-48 rounded-full blur-3xl pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-700"
                style={{ backgroundColor: leader.accent }}
              />

              <div>
                {/* Top Founder Portrait + Meta */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-8 border-b border-white/10">
                  {/* Portrait with Glowing Frame */}
                  <div className="relative w-36 h-44 sm:w-44 sm:h-52 rounded-2xl overflow-hidden shrink-0 border-2 shadow-2xl transition-transform duration-500 group-hover:scale-105"
                    style={{ borderColor: `${leader.accent}60` }}
                  >
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover filter brightness-95 group-hover:brightness-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Title & Role */}
                  <div className="flex-1 text-center sm:text-left">
                    <span
                      className="text-[11px] font-mono font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border inline-block mb-2"
                      style={{
                        borderColor: `${leader.accent}40`,
                        color: leader.accent,
                        backgroundColor: `${leader.accent}15`,
                      }}
                    >
                      {leader.role}
                    </span>

                    <h3 className="text-2xl sm:text-3xl font-black text-white group-hover:text-white transition-colors">
                      {leader.name}
                    </h3>

                    <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs font-mono text-white/50 mt-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#00f0ff]" />
                      <span>{leader.location}</span>
                    </div>

                    {/* Philosophy Callout */}
                    <div className="mt-4 p-3 rounded-xl bg-white/[0.03] border border-white/10">
                      <div className="text-[10px] font-mono text-white/40 uppercase">CREED:</div>
                      <div className="text-xs font-semibold text-white/90 italic font-serif mt-0.5">
                        &ldquo;{leader.philosophy}&rdquo;
                      </div>
                    </div>
                  </div>
                </div>

                {/* Personal Quote */}
                <div className="pt-6 relative">
                  <Quote className="w-6 h-6 text-white/15 mb-2" />
                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed italic font-serif">
                    &ldquo;{leader.quote}&rdquo;
                  </p>
                </div>

                {/* Proven Execution Highlights */}
                <div className="mt-6 space-y-2.5 border-t border-white/10 pt-5">
                  <div className="text-[10px] font-mono text-white/40 uppercase tracking-wider">
                    KEY ACHIEVEMENTS &amp; RESPONSIBILITIES:
                  </div>
                  {leader.highlights.map((h) => (
                    <div key={h} className="flex items-start gap-2.5 text-xs text-white/85">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: leader.accent }} />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Connect */}
              <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] font-mono text-white/40">Direct Founder Channel</span>
                <a
                  href={leader.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-white/70 hover:text-white transition-colors"
                >
                  <span>Connect on LinkedIn</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Founder's Letter Box */}
        <div className="mt-16 rounded-3xl p-8 sm:p-12 border border-white/15 bg-gradient-to-b from-[#12161c]/90 to-black/95 relative overflow-hidden backdrop-blur-2xl">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#c8ff00]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>A PERSONAL COMMITMENT TO EVERY CLIENT</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-black text-white font-sans">
              From Barabanki to Global Enterprise: <br />
              <span className="text-[#c8ff00]">Our Promise to You</span>
            </h3>

            <p className="text-sm sm:text-base text-white/75 leading-relaxed font-normal">
              Whether you are an ambitious local business looking to multiply footfall, a global founder scaling a venture-backed tech portal, or a learner aiming to master production software, you will never be treated like a support ticket.
              We treat your budget and code with the exact same obsession as our own.
            </p>

            <div className="pt-4 flex flex-col items-center">
              <span className="text-sm font-bold text-white">Vishu Awasthi &amp; Sardar Japnam Singh Lal</span>
              <span className="text-xs font-mono text-white/50">Founders, dotUniverse Atelier</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
