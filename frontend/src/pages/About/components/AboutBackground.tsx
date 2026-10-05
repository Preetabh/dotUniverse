import React, { useEffect, useRef } from 'react';

export const AboutBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Cosmic star particles & gravitational nodes
    interface Star {
      x: number;
      y: number;
      originX: number;
      originY: number;
      size: number;
      color: string;
      alpha: number;
      speed: number;
      pulseSpeed: number;
    }

    const starColors = ['#c8ff00', '#00f0ff', '#ff005e', '#a855f7', '#fbbf24', '#ffffff'];
    const stars: Star[] = Array.from({ length: 65 }, () => {
      const x = Math.random() * width;
      const y = Math.random() * height;
      return {
        x,
        y,
        originX: x,
        originY: y,
        size: Math.random() * 2 + 0.8,
        color: starColors[Math.floor(Math.random() * starColors.length)],
        alpha: Math.random() * 0.7 + 0.2,
        speed: Math.random() * 0.4 + 0.1,
        pulseSpeed: Math.random() * 0.03 + 0.01,
      };
    });

    let tick = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      tick += 1;

      // Smooth mouse follow
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Draw constellation links
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const dx = stars[i].x - stars[j].x;
          const dy = stars[i].y - stars[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(200, 255, 0, ${0.14 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.65;
            ctx.moveTo(stars[i].x, stars[i].y);
            ctx.lineTo(stars[j].x, stars[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw and animate stars with subtle gravitational deflection from cursor
      stars.forEach((s) => {
        // Slow natural drift
        s.y -= s.speed;
        if (s.y < 0) {
          s.y = height;
          s.x = Math.random() * width;
        }

        // Mouse gravity influence
        const mdx = s.x - mouseX;
        const mdy = s.y - mouseY;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);

        let drawX = s.x;
        let drawY = s.y;

        if (mdist < 180) {
          const force = (1 - mdist / 180) * 18;
          drawX += (mdx / mdist) * force;
          drawY += (mdy / mdist) * force;
        }

        const pulse = Math.sin(tick * s.pulseSpeed) * 0.25 + s.alpha;

        ctx.beginPath();
        ctx.arc(drawX, drawY, s.size, 0, Math.PI * 2);
        ctx.fillStyle = s.color;
        ctx.globalAlpha = Math.max(0.15, pulse);
        ctx.shadowColor = s.color;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10 bg-[#050608]">
      {/* Radiant Nebula Atmospheric Glow Orbs */}
      <div className="absolute -top-[10%] left-1/4 w-[850px] h-[750px] bg-gradient-to-br from-[#c8ff00]/15 via-[#00f0ff]/10 to-transparent rounded-full blur-[220px] pointer-events-none animate-pulse duration-1000" />
      <div className="absolute top-1/3 -right-20 w-[700px] h-[700px] bg-gradient-to-bl from-[#ff005e]/15 via-[#a855f7]/10 to-transparent rounded-full blur-[240px] pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-[750px] h-[650px] bg-gradient-to-tr from-[#00f0ff]/12 via-[#c8ff00]/8 to-transparent rounded-full blur-[230px] pointer-events-none" />

      {/* Cybernetic Isometric Coordinates Grid */}
      <div
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(200, 255, 0, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 240, 255, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Interactive Gravity Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-75" />
    </div>
  );
};
