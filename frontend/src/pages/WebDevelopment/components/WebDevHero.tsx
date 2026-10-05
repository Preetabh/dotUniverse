import React, { useState } from 'react';
import { CTAButton } from '../../../components/Buttons/CTAButton';
import {
  ArrowRight,
  Sparkles,
  Terminal,
  Activity,
  Cpu,
  Zap,
  Gauge,
  Code2,
  CheckCircle,
  Copy,
  Layers,
  Flame,
  Shield,
  Play
} from 'lucide-react';

export const WebDevHero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'code' | 'vitals' | 'deploy'>('code');
  const [copied, setCopied] = useState(false);

  const copySnippet = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-36 pb-24 overflow-hidden text-center cyber-grid">
      {/* Dynamic Cyber Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] bg-gradient-to-tr from-[#c8ff00]/15 via-[#00f0ff]/15 to-[#ff005e]/15 rounded-full blur-[170px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-10 w-[350px] h-[350px] bg-[#00f0ff]/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-10 w-[350px] h-[350px] bg-[#ff005e]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Cyber Scanline Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none opacity-40 -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#c8ff00]/40 bg-black/60 backdrop-blur-xl mb-8 shadow-[0_0_25px_rgba(200,255,0,0.2)]">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#c8ff00] animate-ping" />
            <span className="w-2 h-2 rounded-full bg-[#c8ff00]" />
          </div>
          <span className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#c8ff00]">
            Web Development Studio • 12 Sites Shipped This Quarter
          </span>
          <span className="hidden sm:inline text-white/30 font-mono">|</span>
          <span className="hidden sm:inline font-mono text-[11px] text-white/70">
            Avg. 1.2s Load Time
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.04] uppercase font-sans">
          <span className="text-white block tracking-tighter drop-shadow-sm">
            Build Smarter Websites
          </span>
          <span className="bg-gradient-to-r from-[#c8ff00] via-[#00f0ff] to-[#ff005e] bg-clip-text text-transparent glow-lime block mt-2 tracking-normal">
            For Modern Business.
          </span>
        </h1>

        {/* Subcopy */}
        <p className="mt-8 text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto font-normal leading-relaxed">
          Leverage our web development studio to ship fast, secure, and scalable sites —
          engineered for conversion, built to grow with your business.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
          <CTAButton
            href="#pricing"
            variant="primary"
            size="lg"
            className="w-full sm:w-auto shadow-[0_0_30px_rgba(200,255,0,0.35)] hover:shadow-[0_0_45px_rgba(200,255,0,0.6)] transition-all font-mono font-bold tracking-wider"
          >
            <span>Get Free Audit</span>
            <ArrowRight className="w-5 h-5 ml-1" />
          </CTAButton>

          <a
            href="#interactive-playground"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-white/20 bg-black/40 hover:bg-white/10 text-white font-mono text-sm uppercase tracking-wider backdrop-blur-md hover:border-[#00f0ff]/60 hover:text-[#00f0ff] transition-all shadow-[0_0_20px_rgba(0,240,255,0.15)] cursor-pointer"
          >
            <Terminal className="w-4 h-4 text-[#00f0ff]" />
            <span>View Architecture &amp; Stack</span>
          </a>
        </div>

        <p className="mt-4 text-xs font-mono text-white/50 tracking-wider">
          ✦ No obligation — 30-minute technical strategy call included
        </p>

        {/* Cyber Telemetry HUD Status Cards */}
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-5xl">
          <div className="cyber-hud-card p-4 rounded-2xl text-left relative overflow-hidden">
            <div className="hud-bracket-top-left" />
            <div className="hud-bracket-bottom-right" />
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[10px] text-[#c8ff00] uppercase tracking-wider">Metric // Speed</span>
              <Gauge className="w-4 h-4 text-[#c8ff00]" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-white font-mono">0.6s</div>
            <div className="text-xs text-white/60 mt-1">Average Edge LCP</div>
            <div className="mt-3 w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
              <div className="bg-[#c8ff00] h-full w-[96%] shadow-[0_0_10px_#c8ff00]" />
            </div>
          </div>

          <div className="cyber-hud-card p-4 rounded-2xl text-left relative overflow-hidden">
            <div className="hud-bracket-top-left" />
            <div className="hud-bracket-bottom-right" />
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[10px] text-[#00f0ff] uppercase tracking-wider">Audit // Google</span>
              <Zap className="w-4 h-4 text-[#00f0ff]" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-white font-mono">100/100</div>
            <div className="text-xs text-white/60 mt-1">Lighthouse Core Vitals</div>
            <div className="mt-3 w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
              <div className="bg-[#00f0ff] h-full w-[100%] shadow-[0_0_10px_#00f0ff]" />
            </div>
          </div>

          <div className="cyber-hud-card p-4 rounded-2xl text-left relative overflow-hidden">
            <div className="hud-bracket-top-left" />
            <div className="hud-bracket-bottom-right" />
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[10px] text-[#ff005e] uppercase tracking-wider">Scale // SLA</span>
              <Shield className="w-4 h-4 text-[#ff005e]" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-white font-mono">99.99%</div>
            <div className="text-xs text-white/60 mt-1">Uptime SLA Guaranteed</div>
            <div className="mt-3 w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
              <div className="bg-[#ff005e] h-full w-[99.9%] shadow-[0_0_10px_#ff005e]" />
            </div>
          </div>

          <div className="cyber-hud-card p-4 rounded-2xl text-left relative overflow-hidden">
            <div className="hud-bracket-top-left" />
            <div className="hud-bracket-bottom-right" />
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[10px] text-[#a855f7] uppercase tracking-wider">Global // Edge</span>
              <Cpu className="w-4 h-4 text-[#a855f7]" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-white font-mono">310+</div>
            <div className="text-xs text-white/60 mt-1">Edge PoPs Globally</div>
            <div className="mt-3 w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
              <div className="bg-[#a855f7] h-full w-[94%] shadow-[0_0_10px_#a855f7]" />
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* INTERACTIVE CYBER TERMINAL & LIVE ARCHITECTURE PLAYGROUND     */}
        {/* ============================================================== */}
        <div
          id="interactive-playground"
          className="mt-16 w-full max-w-5xl rounded-3xl border border-white/20 bg-zinc-950/90 backdrop-blur-2xl shadow-[0_0_50px_rgba(0,240,255,0.15)] relative overflow-hidden text-left"
        >
          {/* Neon Top Bar */}
          <div className="h-1 bg-gradient-to-r from-[#c8ff00] via-[#00f0ff] to-[#ff005e]" />

          {/* Terminal Window Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 border-b border-white/10 bg-black/60">
            {/* Window Dots & Identifier */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff005e] shadow-[0_0_8px_#ff005e]" />
                <div className="w-3 h-3 rounded-full bg-[#f59e0b] shadow-[0_0_8px_#f59e0b]" />
                <div className="w-3 h-3 rounded-full bg-[#c8ff00] shadow-[0_0_8px_#c8ff00]" />
              </div>
              <span className="font-mono text-xs font-bold text-white/70 ml-2">
                dotUniverse::CyberConsole v3.4
              </span>
            </div>

            {/* Interactive Tabs */}
            <div className="flex items-center gap-1 bg-white/5 p-1 rounded-xl border border-white/10">
              <button
                type="button"
                onClick={() => setActiveTab('code')}
                className={`px-3 py-1.5 rounded-lg font-mono text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === 'code'
                    ? 'bg-[#c8ff00] text-black shadow-[0_0_12px_rgba(200,255,0,0.5)]'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                Architecture.tsx
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('vitals')}
                className={`px-3 py-1.5 rounded-lg font-mono text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === 'vitals'
                    ? 'bg-[#00f0ff] text-black shadow-[0_0_12px_rgba(0,240,255,0.5)]'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                VitalsRadar.live
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('deploy')}
                className={`px-3 py-1.5 rounded-lg font-mono text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === 'deploy'
                    ? 'bg-[#ff005e] text-white shadow-[0_0_12px_rgba(255,0,94,0.5)]'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                DeployPipeline.sh
              </button>
            </div>

            {/* Actions */}
            <button
              onClick={copySnippet}
              className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-mono text-white/70 hover:text-white transition-all cursor-pointer"
            >
              {copied ? <CheckCircle className="w-3.5 h-3.5 text-[#c8ff00]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          {/* Interactive Screen Content */}
          <div className="p-6 sm:p-8 font-mono text-xs sm:text-sm bg-black/80 min-h-[320px]">
            {activeTab === 'code' && (
              <div className="space-y-1.5 leading-relaxed text-white/90 overflow-x-auto">
                <div className="text-white/40">// DotUniverse Enterprise Web Platform Architecture</div>
                <div>
                  <span className="text-[#ff005e]">import</span>{' '}
                  <span className="text-[#00f0ff]">{'{'} createEdgeApp, withCyberSEO, useRealtimeStream {'}'}</span>{' '}
                  <span className="text-[#ff005e]">from</span>{' '}
                  <span className="text-[#c8ff00]">'@dotuniverse/core'</span>;
                </div>
                <div className="h-2" />
                <div>
                  <span className="text-[#a855f7]">export default async function</span>{' '}
                  <span className="text-[#00f0ff]">PlatformEngine</span>() {'{'}
                </div>
                <div className="pl-6 text-white/70">
                  <span className="text-[#ff005e]">const</span> telemetry = <span className="text-[#a855f7]">await</span>{' '}
                  <span className="text-[#c8ff00]">createEdgeApp</span>({'{'}
                </div>
                <div className="pl-12 text-[#c8ff00]">
                  framework: <span className="text-[#00f0ff]">'Next.js 14 / React 18 Headless'</span>,
                </div>
                <div className="pl-12 text-[#c8ff00]">
                  rendering: <span className="text-[#00f0ff]">'Streaming Edge SSR + ISR'</span>,
                </div>
                <div className="pl-12 text-[#c8ff00]">
                  targetPageSpeed: <span className="text-[#f59e0b]">99.8</span>,
                </div>
                <div className="pl-12 text-[#c8ff00]">
                  postLaunchSupport: <span className="text-[#00f0ff]">'120 Days Dedicated'</span>,
                </div>
                <div className="pl-6 text-white/70">{'}'});</div>
                <div className="h-2" />
                <div className="pl-6 text-white/60">
                  // Zero client-side bloat, automatic image AVIF/WebP encoding
                </div>
                <div className="pl-6">
                  <span className="text-[#ff005e]">return</span>{' '}
                  <span className="text-[#c8ff00]">&lt;UltraResponsivePipeline telemetry={'{telemetry}'} /&gt;</span>;
                </div>
                <div>{'}'}</div>
              </div>
            )}

            {activeTab === 'vitals' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-2">
                <div className="p-4 rounded-xl border border-[#c8ff00]/30 bg-[#c8ff00]/5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-[#c8ff00]">
                      <span>LARGEST CONTENTFUL PAINT</span>
                      <Flame className="w-4 h-4 text-[#c8ff00]" />
                    </div>
                    <div className="text-3xl font-black text-white mt-2">0.58s</div>
                    <p className="text-xs text-white/60 mt-1">Target &lt; 2.5s (Superior: 4.3x faster)</p>
                  </div>
                  <div className="mt-4 flex items-center gap-1.5 text-[11px] text-[#c8ff00]">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Google Green Standard</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-[#00f0ff]/30 bg-[#00f0ff]/5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-[#00f0ff]">
                      <span>CUMULATIVE LAYOUT SHIFT</span>
                      <Activity className="w-4 h-4 text-[#00f0ff]" />
                    </div>
                    <div className="text-3xl font-black text-white mt-2">0.000</div>
                    <p className="text-xs text-white/60 mt-1">Zero jitter or unexpected shifts</p>
                  </div>
                  <div className="mt-4 flex items-center gap-1.5 text-[11px] text-[#00f0ff]">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Rock Solid Layout Stability</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-[#ff005e]/30 bg-[#ff005e]/5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-[#ff005e]">
                      <span>INTERACTION TO NEXT PAINT</span>
                      <Zap className="w-4 h-4 text-[#ff005e]" />
                    </div>
                    <div className="text-3xl font-black text-white mt-2">14ms</div>
                    <p className="text-xs text-white/60 mt-1">Instant reactive micro-feedback</p>
                  </div>
                  <div className="mt-4 flex items-center gap-1.5 text-[11px] text-[#ff005e]">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Real 60 FPS Smoothness</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'deploy' && (
              <div className="space-y-2 text-white/80">
                <div className="flex items-center gap-2 text-[#c8ff00]">
                  <Play className="w-3 h-3 fill-current" />
                  <span>$ dotuniverse-cli deploy --production --target=global-edge</span>
                </div>
                <div className="text-white/50 pl-4">→ Compiling TypeScript &amp; AST validation... DONE [120ms]</div>
                <div className="text-white/50 pl-4">→ Optimizing dynamic SVG &amp; WebP assets... DONE [84ms]</div>
                <div className="text-white/50 pl-4">→ Generating automated XML sitemap &amp; schema robots... OK</div>
                <div className="text-[#00f0ff] pl-4">✔ Deployed to 310 Cloudflare edge zones globally.</div>
                <div className="text-[#c8ff00] pl-4 font-bold">
                  ⚡ STATUS: 200 OK — SSL Active — Instant Worldwide Propagation (0.04s)
                </div>
              </div>
            )}
          </div>

          {/* Terminal Bottom Status Bar */}
          <div className="px-6 py-2.5 bg-black/95 border-t border-white/10 flex flex-wrap items-center justify-between text-[11px] font-mono text-white/40">
            <div className="flex items-center gap-4">
              <span className="text-[#c8ff00]">● NODE_ENV: production</span>
              <span className="text-[#00f0ff]">● LATENCY: 8ms</span>
            </div>
            <div>dotuniverse.io/cyber-stack</div>
          </div>
        </div>
      </div>
    </section>
  );
};
