import React from 'react';
import { Star, CheckCircle2, TrendingUp, Award, Quote } from 'lucide-react';

export const OnlineCoursesReviews: React.FC = () => {
  const reviews = [
    {
      name: "Rohan Verma",
      track: "Full-Stack System Architecture",
      previousRole: "Service-Company Support Dev (₹4.2 LPA)",
      currentRole: "SaaS Full-Stack Engineer at Series-A Startup (₹18.5 LPA)",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
      quote:
        "Every other course teaches you how to build a basic to-do app. At dotUniverse Academy, we built a distributed microservices repo with Redis caching and Docker. In my interviews, the senior engineer didn't even ask standard DSA questions—we spent the entire 60 minutes discussing my dotUniverse capstone repo.",
      uplift: "+340% Salary Jump",
      stars: 5,
    },
    {
      name: "Ayesha Khan",
      track: "8-Figure Performance Marketing",
      previousRole: "Junior Social Media Intern",
      currentRole: "Lead Media Buyer managing $45K/mo Ad Spend",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
      quote:
        "The sandbox ad budget experience changed everything. Having actual ad spend on Meta and getting line-by-line feedback from Ali on my video hooks gave me the confidence to handle clients on Day 1. Within 60 days of graduation, I landed two international retainer clients in Dubai.",
      uplift: "4.6x Average Client ROAS",
      stars: 5,
    },
    {
      name: "Karan Singhania",
      track: "DesignX: UI/UX & Design Systems",
      previousRole: "Graphic Designer",
      currentRole: "Product Designer at FinTech Studio (₹14.0 LPA)",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80",
      quote:
        "Learning design tokens and Auto-Layout 5 at an enterprise scale set my portfolio apart from 99% of Behance mockups. The mentors taught me how to think in systems and talk the language of frontend engineers. Landed 3 offers within 3 weeks of posting my capstone.",
      uplift: "3 Job Offers Received",
      stars: 5,
    },
  ];

  return (
    <section id="reviews" className="relative py-28 sm:py-36 overflow-hidden border-t border-white/10 bg-black/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/35 text-[#fbbf24] font-mono text-xs font-bold uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5 text-[#f59e0b]" />
            <span>[ VERIFIED ALUMNI TRANSFORMATIONS ]</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight font-sans">
            Real Builders. <br />
            <span className="bg-gradient-to-r from-[#f59e0b] via-[#fbbf24] to-[#f97316] bg-clip-text text-transparent">
              Life-Changing Career Jumps.
            </span>
          </h2>

          <p className="mt-6 text-white/70 text-base sm:text-lg">
            Hear from alumni who transitioned from stagnant roles into high-income engineering, growth marketing, and product design leadership.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="rounded-3xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] p-8 flex flex-col justify-between transition-all duration-300 relative group hover:border-[#f59e0b]/40"
            >
              <div>
                {/* Stars & Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(r.stars)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#f59e0b] text-[#f59e0b]" />
                    ))}
                  </div>
                  <span className="font-mono text-[10px] text-white/40">VERIFIED ALUMNI</span>
                </div>

                <p className="text-xs sm:text-sm text-white/80 leading-relaxed italic">
                  &ldquo;{r.quote}&rdquo;
                </p>

                {/* Outcome Badge */}
                <div className="mt-6 p-3 rounded-xl bg-[#f59e0b]/10 border border-[#f59e0b]/25 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-[#fbbf24] shrink-0" />
                  <span className="font-mono text-xs font-bold text-[#fbbf24]">
                    {r.uplift}
                  </span>
                </div>
              </div>

              {/* Alum Profile Card */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3">
                <img
                  src={r.avatar}
                  alt={r.name}
                  className="w-11 h-11 rounded-full object-cover border border-white/20"
                />
                <div>
                  <div className="text-sm font-bold text-white group-hover:text-[#fbbf24] transition-colors">
                    {r.name}
                  </div>
                  <div className="text-[11px] text-white/50">{r.currentRole}</div>
                  <div className="text-[10px] font-mono text-[#f59e0b] mt-0.5">Track: {r.track}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
