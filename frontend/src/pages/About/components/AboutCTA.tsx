import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Copy, Check, ArrowRight, ShieldCheck, Zap } from "lucide-react";

export const AboutCTA: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = "support.dotuniverse@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 border-t border-cyan-500/10 bg-gradient-to-b from-[#030712] via-[#05091a] to-[#02050e] overflow-hidden">
      {/* Background radial effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/15 via-indigo-500/10 to-purple-500/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-8 sm:p-14 rounded-3xl border border-cyan-500/30 bg-gradient-to-b from-white/[0.04] to-black/60 backdrop-blur-2xl shadow-2xl shadow-cyan-950/40 relative overflow-hidden text-center"
        >
          {/* Ambient Top Glow Line */}
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-400/30 bg-cyan-950/40 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-6"
          >
            <Zap className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            Let&apos;s Architect The Next Frontier
          </motion.div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight max-w-3xl mx-auto leading-tight">
            Ready to Build What Others Say Is{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
              Impossible?
            </span>
          </h2>

          <p className="mt-6 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you need a high-concurrency Web3 application, an AI-powered enterprise platform, 
            or high-ticket digital marketing campaigns that dominate search and social, our team is ready to deploy.
          </p>

          {/* Direct Founder Email Quick-Copy Box */}
          <div className="mt-10 max-w-md mx-auto p-2 rounded-2xl border border-cyan-500/30 bg-black/60 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-3 shadow-inner">
            <div className="flex items-center gap-3 px-3 py-1 text-slate-200 text-sm font-mono truncate w-full sm:w-auto">
              <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
              <span className="truncate">{email}</span>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={handleCopy}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider bg-white/[0.05] hover:bg-white/10 text-cyan-300 border border-cyan-500/30 transition-all"
                title="Copy to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${email}?subject=Project%20Partnership%20Inquiry%20-%20dotUniverse`}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold transition-all shadow-md shadow-cyan-500/20"
              >
                <span>Send</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Key Value Guarantees */}
          <div className="mt-10 pt-8 border-t border-white/5 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Direct Founder Sprints</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>Under 48hr Proposal Turnaround</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-400" />
              <span>Barabanki HQ • Global Deployment</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
