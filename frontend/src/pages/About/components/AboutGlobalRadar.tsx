import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Globe, MapPin, Clock, Radio, Users, Cpu, ArrowUpRight } from "lucide-react";

interface Hub {
  id: string;
  name: string;
  role: string;
  country: string;
  coords: { x: number; y: number }; // Percentage coords on radar
  timezone: string;
  teamCount: string;
  specialty: string;
  status: "Active HQ" | "Operational Node" | "Client Gateway";
  details: string;
}

const HUBS: Hub[] = [
  {
    id: "barabanki",
    name: "Barabanki Innovation HQ",
    role: "Global Command & Engineering Core",
    country: "India (Uttar Pradesh)",
    coords: { x: 68, y: 48 },
    timezone: "Asia/Kolkata",
    teamCount: "35+ Core Engineers & Designers",
    specialty: "Full-Stack Web3, Cloud Infra, AI Agents",
    status: "Active HQ",
    details: "The birthplace and technological heart of dotUniverse. Where all core architecture, algorithms, and primary platforms are designed and stress-tested."
  },
  {
    id: "delhi",
    name: "Delhi NCR Studio",
    role: "Strategic Growth & Creative Guild",
    country: "India",
    coords: { x: 66, y: 44 },
    timezone: "Asia/Kolkata",
    teamCount: "18+ Growth Strategists",
    specialty: "High-Ticket Performance Marketing & Motion Design",
    status: "Operational Node",
    details: "Rapid iteration sprint lab handling enterprise marketing campaigns, multimedia production, and client growth partnerships across Pan-India."
  },
  {
    id: "london",
    name: "London European Desk",
    role: "EMEA Enterprise Partnerships",
    country: "United Kingdom",
    coords: { x: 48, y: 32 },
    timezone: "Europe/London",
    teamCount: "Strategic Liaison Pod",
    specialty: "Fintech, Cross-Border Web3 & EU SaaS Expansion",
    status: "Client Gateway",
    details: "Connecting European brands and scaleups directly with our engineering powerhouse with real-time sprint reviews in GMT."
  },
  {
    id: "dubai",
    name: "Dubai MENA Gateway",
    role: "Middle East Tech Ventures",
    country: "United Arab Emirates",
    coords: { x: 59, y: 46 },
    timezone: "Asia/Dubai",
    teamCount: "Regional Deployment Team",
    specialty: "GovTech, AI Systems & Luxury Digital Brands",
    status: "Client Gateway",
    details: "High-speed digital transformation for Middle East retail leaders, real estate conglomerates, and venture-backed founders."
  }
];

export const AboutGlobalRadar: React.FC = () => {
  const [selectedHub, setSelectedHub] = useState<Hub>(HUBS[0]);
  const [currentTime, setCurrentTime] = useState<Record<string, string>>({});

  useEffect(() => {
    const updateTimes = () => {
      const times: Record<string, string> = {};
      HUBS.forEach((hub) => {
        try {
          times[hub.id] = new Intl.DateTimeFormat("en-US", {
            timeZone: hub.timezone,
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true
          }).format(new Date());
        } catch {
          times[hub.id] = "--:--:--";
        }
      });
      setCurrentTime(times);
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 border-t border-cyan-500/10 bg-gradient-to-b from-[#030712] via-[#050b18] to-[#030712] overflow-hidden">
      {/* Background Grid Lines */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.4) 1px, transparent 1px)`,
          backgroundSize: "32px 32px"
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-400/25 bg-cyan-950/30 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-4"
          >
            <Radio className="w-3.5 h-3.5 animate-pulse text-cyan-400" />
            Global Presence & Live Telemetry
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-white tracking-tight"
          >
            Rooted in <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">Barabanki</span>,
            <br />
            Operating <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Worldwide</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed"
          >
            Proof that world-class software engineering and hyper-growth marketing aren&apos;t confined to Silicon Valley. 
            We orchestrate 24/7 distributed digital momentum across four strategic operational nodes.
          </motion.p>
        </div>

        {/* Radar & Hub Display Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Radar Interactive Display (7 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-7 relative p-6 sm:p-8 rounded-3xl border border-cyan-500/20 bg-[#070e20]/80 backdrop-blur-xl shadow-2xl shadow-cyan-950/40"
          >
            {/* Top Control Bar */}
            <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80 animate-ping" />
                <span className="text-xs font-mono text-cyan-300 tracking-wider">LIVE SATELLITE RADAR</span>
              </div>
              <span className="text-xs font-mono text-slate-400">FPS: 60 • PING: 18ms</span>
            </div>

            {/* Radar Viewport with Concentric Circles */}
            <div className="relative aspect-[16/10] w-full rounded-2xl bg-[#040813] border border-cyan-500/15 overflow-hidden flex items-center justify-center">
              {/* Concentric Radar Rings */}
              <div className="absolute w-[80%] aspect-square rounded-full border border-cyan-500/10 pointer-events-none" />
              <div className="absolute w-[60%] aspect-square rounded-full border border-cyan-500/15 pointer-events-none" />
              <div className="absolute w-[40%] aspect-square rounded-full border border-cyan-500/20 pointer-events-none" />
              <div className="absolute w-[20%] aspect-square rounded-full border border-cyan-500/30 pointer-events-none" />

              {/* Crosshairs */}
              <div className="absolute inset-x-0 top-1/2 h-[1px] bg-cyan-500/10 pointer-events-none" />
              <div className="absolute inset-y-0 left-1/2 w-[1px] bg-cyan-500/10 pointer-events-none" />

              {/* Radar Sweeping Beam */}
              <div 
                className="absolute inset-0 origin-center pointer-events-none"
                style={{
                  background: "conic-gradient(from 0deg at 50% 50%, rgba(6, 182, 212, 0.25) 0deg, rgba(6, 182, 212, 0.05) 45deg, transparent 90deg)",
                  animation: "radarSweep 6s linear infinite"
                }}
              />

              {/* Stylized Minimal World Map SVG Outline */}
              <svg className="absolute inset-0 w-full h-full opacity-15 pointer-events-none" viewBox="0 0 1000 500">
                <path
                  d="M150,120 Q200,90 280,100 T320,180 T260,250 T170,220 Z M460,80 Q520,70 560,110 T520,200 T440,160 Z M620,100 Q720,70 850,140 T880,260 T760,290 T640,200 Z M220,280 Q270,300 290,380 T250,460 T190,380 Z M660,330 Q740,320 800,370 T750,450 T670,410 Z"
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
              </svg>

              {/* Hub Markers */}
              {HUBS.map((hub) => {
                const isSelected = selectedHub.id === hub.id;
                return (
                  <button
                    key={hub.id}
                    onClick={() => setSelectedHub(hub)}
                    style={{ left: `${hub.coords.x}%`, top: `${hub.coords.y}%` }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 group z-20 focus:outline-none transition-all duration-300 ${
                      isSelected ? "scale-125" : "hover:scale-110"
                    }`}
                  >
                    {/* Pulsing ring */}
                    <span
                      className={`absolute -inset-2 rounded-full animate-ping opacity-60 ${
                        hub.status === "Active HQ"
                          ? "bg-cyan-400"
                          : hub.status === "Operational Node"
                          ? "bg-indigo-400"
                          : "bg-purple-400"
                      }`}
                    />
                    {/* Marker Dot */}
                    <span
                      className={`relative flex items-center justify-center w-5 h-5 rounded-full border-2 transition-all ${
                        isSelected
                          ? "bg-white border-cyan-400 shadow-[0_0_15px_#22d3ee]"
                          : hub.status === "Active HQ"
                          ? "bg-cyan-500 border-white/80"
                          : "bg-slate-900 border-cyan-400/60"
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? "bg-cyan-600" : "bg-white"}`} />
                    </span>

                    {/* Quick tooltip label */}
                    <span className="absolute left-1/2 -bottom-6 -translate-x-1/2 whitespace-nowrap text-[10px] font-mono px-1.5 py-0.5 rounded bg-black/80 text-cyan-200 border border-cyan-500/30 opacity-90 group-hover:opacity-100">
                      {hub.name.split(" ")[0]}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Bottom Hub Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-6">
              {HUBS.map((hub) => (
                <button
                  key={hub.id}
                  onClick={() => setSelectedHub(hub)}
                  className={`px-3 py-2.5 rounded-xl border text-left transition-all ${
                    selectedHub.id === hub.id
                      ? "border-cyan-400 bg-cyan-950/40 text-cyan-200 shadow-[0_0_12px_rgba(6,182,212,0.25)]"
                      : "border-white/5 bg-white/[0.02] text-slate-400 hover:text-white hover:border-white/15"
                  }`}
                >
                  <div className="text-[11px] font-mono text-slate-400 truncate">{hub.name.split(" ")[0]}</div>
                  <div className="text-xs font-semibold text-white truncate">{hub.country.split(" ")[0]}</div>
                  <div className="text-[10px] font-mono text-cyan-400/90 mt-1 flex items-center gap-1">
                    <Clock className="w-2.5 h-2.5" />
                    {currentTime[hub.id] || "..."}
                  </div>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Active Hub Telemetry Card (5 cols) */}
          <motion.div
            key={selectedHub.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-5 p-8 rounded-3xl border border-cyan-500/20 bg-gradient-to-b from-cyan-950/30 via-[#070e20] to-[#040813] backdrop-blur-xl relative overflow-hidden"
          >
            {/* Ambient Corner Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center justify-between mb-4">
              <span className={`px-2.5 py-1 rounded-full text-xs font-mono uppercase tracking-wider border ${
                selectedHub.status === "Active HQ"
                  ? "bg-cyan-500/20 text-cyan-300 border-cyan-500/40"
                  : selectedHub.status === "Operational Node"
                  ? "bg-indigo-500/20 text-indigo-300 border-indigo-500/40"
                  : "bg-purple-500/20 text-purple-300 border-purple-500/40"
              }`}>
                {selectedHub.status}
              </span>
              <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                TELEMETRY ACTIVE
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-1 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-cyan-400 shrink-0" />
              {selectedHub.name}
            </h3>
            <p className="text-sm font-mono text-cyan-300/80 mb-6">{selectedHub.role}</p>

            <div className="space-y-4 mb-6">
              <div className="p-3.5 rounded-xl border border-white/5 bg-white/[0.02]">
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Local Solar Clock</div>
                <div className="text-xl font-bold font-mono text-white flex items-center gap-2 mt-0.5">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  {currentTime[selectedHub.id] || "Calculating..."}
                </div>
                <div className="text-[10px] text-slate-500 mt-0.5">Timezone: {selectedHub.timezone}</div>
              </div>

              <div className="p-3.5 rounded-xl border border-white/5 bg-white/[0.02]">
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-cyan-400" />
                  Station Personnel & Scale
                </div>
                <div className="text-sm font-semibold text-slate-200 mt-1">{selectedHub.teamCount}</div>
              </div>

              <div className="p-3.5 rounded-xl border border-white/5 bg-white/[0.02]">
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-indigo-400" />
                  Domain Specialty
                </div>
                <div className="text-sm font-semibold text-slate-200 mt-1">{selectedHub.specialty}</div>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-4 mb-6">
              {selectedHub.details}
            </p>

            <a
              href="mailto:support.dotuniverse@gmail.com"
              className="inline-flex items-center justify-center gap-2 w-full py-3 px-5 rounded-xl font-semibold text-xs tracking-wider uppercase bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white shadow-lg shadow-cyan-500/25 transition-all group"
            >
              Route Inquiry To This Node
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Embedded CSS Keyframe */}
      <style>{`
        @keyframes radarSweep {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};
