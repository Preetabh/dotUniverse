import React from 'react';
import { TEAM_MEMBERS } from '../../constants';
import { Sparkles, ExternalLink } from 'lucide-react';

export const TeamSection: React.FC = () => {
  return (
    <section id="team" className="relative py-24 sm:py-32 overflow-hidden border-t border-white/10 bg-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#c8ff00] px-3.5 py-1.5 rounded-full bg-[#c8ff00]/10 border border-[#c8ff00]/30">
            ✦ Leadership
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            The Minds Behind <span className="text-[#c8ff00]">The Machine</span>
          </h2>
          <p className="mt-4 text-white/60 text-base sm:text-lg">
            Hands-on founders and technical directors who actively build and strategize for your brand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.name}
              className="group flex flex-col sm:flex-row gap-6 p-6 rounded-3xl border border-white/10 bg-white/[0.02] hover:border-white/25 hover:bg-white/[0.05] transition-all duration-300"
            >
              {/* Member Portrait */}
              <div className="relative w-full sm:w-44 h-56 sm:h-auto rounded-2xl overflow-hidden shrink-0 border border-white/10">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter grayscale contrast-125 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Member Bio */}
              <div className="flex flex-col justify-between">
                <div>
                  <span
                    className="text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full border inline-block mb-2"
                    style={{
                      borderColor: `${member.accent}40`,
                      color: member.accent,
                      backgroundColor: `${member.accent}15`,
                    }}
                  >
                    {member.role}
                  </span>
                  <h3 className="text-2xl font-bold text-white group-hover:text-[#c8ff00] transition-colors">
                    {member.name}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-white/70 leading-relaxed font-normal">
                    {member.bio}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-white/70 hover:text-[#c8ff00] transition-colors"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                    </svg>
                    <span>Connect on LinkedIn</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
