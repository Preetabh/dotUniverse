import React, { useState } from 'react';
import {
  Mail,
  MessageSquare,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Copy,
  Check,
  ShieldCheck,
  Zap,
  ArrowRight,
  Sparkles,
  Phone,
  Layers,
  Terminal,
  Radio
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  // Configurator State
  const [selectedService, setSelectedService] = useState('CRM & Portals');
  const [selectedBudget, setSelectedBudget] = useState('₹5L - ₹15L');
  const [selectedTimeline, setSelectedTimeline] = useState('1 - 2 Months');

  // Input fields
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [projectBrief, setProjectBrief] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSent, setFormSent] = useState(false);

  const officialEmail = 'support.dotuniverse@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(officialEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);

    const subject = encodeURIComponent(`Project Proposal: ${selectedService} - ${clientName || companyName}`);
    const body = encodeURIComponent(
      `Hello dotUniverse Leadership Team,\n\nI would like to initiate a project proposal.\n\n` +
      `Client Name: ${clientName}\n` +
      `Company / Project: ${companyName}\n` +
      `Work Email: ${clientEmail}\n` +
      `Phone / WhatsApp: ${clientPhone}\n\n` +
      `Domain: ${selectedService}\n` +
      `Target Budget: ${selectedBudget}\n` +
      `Desired Timeline: ${selectedTimeline}\n\n` +
      `Project Brief & Requirements:\n${projectBrief}\n\n` +
      `Please review and share an initial sprint proposal and timeline.`
    );

    setTimeout(() => {
      window.location.href = `mailto:${officialEmail}?subject=${subject}&body=${body}`;
    }, 800);
  };

  return (
    <section id="contact" className="relative py-28 sm:py-36 overflow-hidden border-t border-cyan-500/20 bg-[#02050e]">
      {/* Background Radiance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-r from-cyan-500/10 via-indigo-500/10 to-emerald-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-400/30 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-4">
            <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>Direct Founder Gateway • Let&apos;s Build</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Ready to Engineer <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-[#c8ff00]">
              The Next Frontier?
            </span>
          </h2>

          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            No gatekeepers, no junior account managers. Configure your project parameters below to initiate a direct sprint proposal with our founder and chief architect.
          </p>
        </div>

        {/* Main 2-Column Command Center */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Telemetry & Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Email Launcher Card */}
            <div className="p-7 rounded-3xl border border-cyan-500/30 bg-gradient-to-b from-[#070e20] to-[#040813] backdrop-blur-xl shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                  OFFICIAL COMMUNICATION CORE
                </span>
                <span className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  ONLINE 24/7
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                Executive Desk &amp; Sprints
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                Direct route to Vishu Awasthi and the core engineering desk. We respond within 2 hours on active sprint days.
              </p>

              {/* Email Box */}
              <div className="p-3 rounded-2xl bg-black/60 border border-cyan-500/30 flex items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-mono text-cyan-200 truncate">
                  <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="truncate">{officialEmail}</span>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-cyan-300 transition-colors"
                    title="Copy to clipboard"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>

                  <a
                    href={`mailto:${officialEmail}?subject=Direct%20Executive%20Inquiry`}
                    className="p-2 rounded-xl bg-cyan-500 text-black font-bold hover:bg-cyan-400 transition-colors"
                    title="Send Email"
                  >
                    <Send className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* WhatsApp Quick Chat */}
              <a
                href="https://wa.me/919999999999?text=Hello%20dotUniverse,%20I%20would%20like%20to%20discuss%20a%20project%20partnership."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl border border-emerald-500/40 bg-emerald-950/20 hover:bg-emerald-950/40 text-emerald-300 font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Instant WhatsApp Consultation</span>
              </a>
            </div>

            {/* Global Nodes & Headquarters */}
            <div className="p-7 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                OPERATIONAL NODES &amp; PRESENCE
              </h4>

              <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/[0.02] border border-white/5">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-white">Barabanki Innovation HQ 🇮🇳</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    Uttar Pradesh, India • Global Core Command &amp; Engineering Labs
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/[0.02] border border-white/5">
                <MapPin className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-white">Delhi NCR Studio 🇮🇳</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    Strategic Growth, Creative Direction &amp; Enterprise Media
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/[0.02] border border-white/5">
                <MapPin className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-white">London &amp; Dubai Gateways 🇬🇧 🇦🇪</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    Cross-border Client Liaisons • EMEA &amp; MENA Timezone Sprints
                  </div>
                </div>
              </div>
            </div>

            {/* SLA Guarantees */}
            <div className="p-5 rounded-2xl border border-white/5 bg-white/[0.01] flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Default NDA Protected</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span>&lt; 2hr Turnaround</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-indigo-400" />
                <span>48hr Clickable Prototype</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Proposal & Blueprint Builder (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-10 rounded-3xl border border-cyan-500/30 bg-gradient-to-b from-[#060c1d] to-[#040813] backdrop-blur-2xl shadow-2xl relative">
              <div className="flex items-center gap-2 mb-2 text-xs font-mono text-cyan-400">
                <Terminal className="w-4 h-4" />
                <span>INTERACTIVE SPRINT CONFIGURATOR</span>
              </div>

              <h3 className="text-2xl font-black text-white mb-2">
                Configure Your Project Scope
              </h3>
              <p className="text-xs text-slate-400 mb-8">
                Select your specifications to generate a tailored sprint blueprint.
              </p>

              {formSent ? (
                <div className="py-16 text-center space-y-4">
                  <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto animate-bounce" />
                  <h4 className="text-2xl font-bold text-white">Proposal Dispatched!</h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                    Your email client is opening with the tailored sprint specifications. 
                    If it did not launch, simply email{' '}
                    <span className="text-cyan-300 font-mono">{officialEmail}</span>.
                  </p>
                  <button
                    onClick={() => setFormSent(false)}
                    className="text-xs font-mono text-cyan-400 underline pt-4"
                  >
                    Configure Another Proposal
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  {/* Step 1: Select Domain */}
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-2.5">
                      1. Select Project Domain:
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {[
                        'CRM & Portals',
                        'HRM Platforms',
                        'Web Development',
                        'Mobile App (iOS/Android)',
                        'Video/Chat Comms',
                        'E-Commerce & 3D',
                        'Growth Marketing',
                        'School Management ERP',
                        'AI Agents & LLMs'
                      ].map((service) => (
                        <button
                          key={service}
                          type="button"
                          onClick={() => setSelectedService(service)}
                          className={`p-2.5 rounded-xl text-[11px] font-mono text-left transition-all border ${
                            selectedService === service
                              ? 'border-cyan-400 bg-cyan-950/50 text-cyan-200 shadow-md shadow-cyan-500/20 font-bold'
                              : 'border-white/5 bg-white/[0.02] text-slate-400 hover:border-white/20 hover:text-white'
                          }`}
                        >
                          {service}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 2: Target Budget */}
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-2.5">
                      2. Estimated Investment Bracket:
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        '₹1L - ₹5L',
                        '₹5L - ₹15L',
                        '₹15L - ₹40L',
                        '₹40L+ / Global'
                      ].map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setSelectedBudget(b)}
                          className={`py-2 px-3 rounded-xl text-xs font-mono text-center transition-all border ${
                            selectedBudget === b
                              ? 'border-[#c8ff00] bg-[#c8ff00]/10 text-[#c8ff00] font-bold'
                              : 'border-white/5 bg-white/[0.02] text-slate-400 hover:text-white'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 3: Desired Timeline */}
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-2.5">
                      3. Target Delivery Window:
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        '< 30 Days (Rapid Sprint)',
                        '1 - 2 Months',
                        'Ongoing Strategic Retainer'
                      ].map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setSelectedTimeline(t)}
                          className={`py-2 px-3 rounded-xl text-[11px] font-mono text-center transition-all border ${
                            selectedTimeline === t
                              ? 'border-indigo-400 bg-indigo-950/40 text-indigo-300 font-bold'
                              : 'border-white/5 bg-white/[0.02] text-slate-400 hover:text-white'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 4: Contact Details */}
                  <div className="border-t border-white/5 pt-6 space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-mono uppercase text-slate-400 mb-1">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={clientName}
                          onChange={(e) => setClientName(e.target.value)}
                          placeholder="e.g. Rahul Sharma"
                          className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-xs font-mono"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono uppercase text-slate-400 mb-1">
                          Business Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={clientEmail}
                          onChange={(e) => setClientEmail(e.target.value)}
                          placeholder="rahul@company.com"
                          className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-xs font-mono"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-mono uppercase text-slate-400 mb-1">
                          Company / Brand Name
                        </label>
                        <input
                          type="text"
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                          placeholder="e.g. Apex Global"
                          className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-xs font-mono"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono uppercase text-slate-400 mb-1">
                          Phone / WhatsApp Number
                        </label>
                        <input
                          type="tel"
                          value={clientPhone}
                          onChange={(e) => setClientPhone(e.target.value)}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-xs font-mono"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase text-slate-400 mb-1">
                        Project Overview &amp; Key Goals *
                      </label>
                      <textarea
                        required
                        rows={3}
                        value={projectBrief}
                        onChange={(e) => setProjectBrief(e.target.value)}
                        placeholder="Briefly outline what you want to build, user volume, or current bottlenecks..."
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-xs font-mono resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-cyan-500 via-sky-400 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white shadow-xl shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 group"
                  >
                    <span>Transmit Sprint Proposal</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
