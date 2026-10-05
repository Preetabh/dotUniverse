import React from "react";
import { motion } from "framer-motion";
import { Heart, Flame, Code2, Rocket, Award, Coffee, Sparkles } from "lucide-react";

interface CultureCard {
  icon: React.ReactNode;
  tag: string;
  title: string;
  description: string;
  highlight: string;
}

const CULTURE_CARDS: CultureCard[] = [
  {
    icon: <Flame className="w-6 h-6 text-amber-400" />,
    tag: "High Velocity",
    title: "Ship in Days, Not Quarters",
    description: "We hate bloated bureaucracy. Decisions happen in Slack/Discord threads, prototypes are demoed in 48 hours, and pull requests merge with automated test suites.",
    highlight: "Average 4.2 PR merges per engineer/day"
  },
  {
    icon: <Code2 className="w-6 h-6 text-cyan-400" />,
    tag: "Craftsmanship",
    title: "Obsession Over Code Quality",
    description: "Every line is formatted like art. We enforce strict linting, zero technical debt tolerance, and write self-documenting code with comprehensive integration benchmarks.",
    highlight: "100% TypeScript strict & zero 'any' policy"
  },
  {
    icon: <Rocket className="w-6 h-6 text-indigo-400" />,
    tag: "Autonomy",
    title: "Self-Governing Engineering Pods",
    description: "No micro-management. Every team member acts as a mini-CTO of their feature module, deciding implementation details and owning deployment end-to-end.",
    highlight: "True asynchronous deep work flow"
  },
  {
    icon: <Coffee className="w-6 h-6 text-rose-400" />,
    tag: "Vibe & Wellbeing",
    title: "High Energy, Zero Burnout",
    description: "We work hard during intense delivery sprints, then disconnect. Mental clarity breeds breakthrough architecture. Flexible hours and mental replenishment days.",
    highlight: "Unlimited sick & creative wellness resets"
  },
  {
    icon: <Award className="w-6 h-6 text-emerald-400" />,
    tag: "Meritocracy",
    title: "Profit-Sharing & Upside Equity",
    description: "When our client partners win, our builders win. We distribute direct bonus shares on milestone deliveries and encourage personal side-project spinouts.",
    highlight: "Quarterly transparent profit allocation"
  },
  {
    icon: <Sparkles className="w-6 h-6 text-purple-400" />,
    tag: "Mentorship",
    title: "The Next-Gen Builder Academy",
    description: "Rooted in Barabanki, we scout raw collegiate talent across Tier-2 & Tier-3 cities in India and forge them into elite Silicon Valley-grade architects via real client sprints.",
    highlight: "Over 200+ students mentored free of charge"
  }
];

export const AboutCulturePerks: React.FC = () => {
  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 border-t border-cyan-500/10 bg-[#030712] overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-rose-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-rose-500/25 bg-rose-950/30 text-rose-300 text-xs font-mono uppercase tracking-wider mb-4"
          >
            <Heart className="w-3.5 h-3.5 text-rose-400 animate-pulse" />
            Culture & The Builder Ethos
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-white tracking-tight"
          >
            Life Inside the <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-amber-300 to-cyan-400">dotUniverse Dojo</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed"
          >
            We are not a traditional IT agency where talent gets lost in cubicles. We are an elite band of rebels, 
            hackers, mathematicians, and motion designers who live to build what others deem impossible.
          </motion.p>
        </div>

        {/* Culture Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CULTURE_CARDS.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="p-8 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] hover:border-cyan-500/40 hover:bg-gradient-to-b hover:from-cyan-950/20 hover:to-slate-950/40 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Corner accent glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 group-hover:bg-cyan-500/15 rounded-full blur-2xl transition-all" />

              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 group-hover:border-cyan-500/30 group-hover:scale-110 transition-all duration-300">
                  {card.icon}
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/10 text-slate-400 group-hover:text-cyan-300 group-hover:border-cyan-500/30 transition-colors">
                  {card.tag}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-200 transition-colors">
                {card.title}
              </h3>

              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                {card.description}
              </p>

              <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-cyan-400/90">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span className="truncate">{card.highlight}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
