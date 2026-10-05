import React, { useEffect, useRef } from 'react';

interface AppDevLuxuryBackgroundProps {
  className?: string;
}

export const AppDevLuxuryBackground: React.FC<AppDevLuxuryBackgroundProps> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const mouse = {
      x: width / 2,
      y: height / 2,
      radius: 180,
      active: false,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Luxury gold palette: Champagne, Liquid Gold, Platinum, Rose Amber
    const goldTones = [
      '#F5D061', // Rich Champagne
      '#D4AF37', // Pure Metallic Gold
      '#FFF6D6', // Pale Platinum Shimmer
      '#C5A059', // Antique Gold
      '#E5C07B', // Warm Honey Gold
    ];

    const PARTICLE_COUNT = Math.min(65, Math.floor((width * height) / 20000));

    interface GoldDust {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      baseAlpha: number;
      pulseSpeed: number;
    }

    const particles: GoldDust[] = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35 - 0.05, // gentle upwards drift
        size: Math.random() * 2.2 + 0.8,
        color: goldTones[Math.floor(Math.random() * goldTones.length)],
        baseAlpha: Math.random() * 0.5 + 0.25,
        pulseSpeed: Math.random() * 0.015 + 0.005,
      });
    }

    let clock = 0;

    const render = () => {
      clock += 0.01;
      ctx.clearRect(0, 0, width, height);

      // Draw faint gold filament linkages between nearby stardust
      const maxDist = 130;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.12;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(212, 175, 55, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles & interactive aura
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges gracefully
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Mouse gravity interaction
        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            const force = (1 - dist / mouse.radius) * 0.025;
            p.x -= dx * force;
            p.y -= dy * force;

            // Shimmering gold filament to mouse
            const lineAlpha = (1 - dist / mouse.radius) * 0.25;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(245, 208, 97, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }

        // Shimmering alpha calculation
        const alpha = p.baseAlpha + Math.sin(clock + p.size) * 0.18;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0.1, Math.min(0.9, alpha));
        ctx.shadowBlur = 12;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className={`fixed inset-0 pointer-events-none z-0 overflow-hidden ${className}`}>
      {/* Opulent Gold Ambient Caustic Lighting */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1100px] h-[750px] bg-gradient-to-b from-[#D4AF37]/15 via-[#F5D061]/8 to-transparent rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute top-1/3 -left-32 w-[600px] h-[600px] bg-[#996515]/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-20 -right-32 w-[650px] h-[650px] bg-[#D4AF37]/8 rounded-full blur-[180px] pointer-events-none" />

      {/* Gold Stardust Interactive Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-85"
      />

      {/* Subtle Luxury Radial Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,#050508_100%)] pointer-events-none" />
    </div>
  );
};
