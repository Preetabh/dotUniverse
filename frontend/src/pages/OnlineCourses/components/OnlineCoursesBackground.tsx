import React, { useEffect, useRef } from 'react';

export const OnlineCoursesBackground: React.FC = () => {
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

    // Constellation knowledge nodes
    interface Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
      color: string;
      pulseSpeed: number;
    }

    const palette = ['#f59e0b', '#fbbf24', '#d97706', '#ec4899', '#06b6d4'];
    const nodes: Node[] = Array.from({ length: 50 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      radius: Math.random() * 2 + 1,
      alpha: Math.random() * 0.6 + 0.2,
      color: palette[Math.floor(Math.random() * palette.length)],
      pulseSpeed: Math.random() * 0.02 + 0.01,
    }));

    let step = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      step += 1;

      // Draw synapse links
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(245, 158, 11, ${0.15 * (1 - dist / 140)})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;

        if (n.x < 0) n.x = width;
        if (n.x > width) n.x = 0;
        if (n.y < 0) n.y = height;
        if (n.y > height) n.y = 0;

        const pulse = Math.sin(step * n.pulseSpeed) * 0.2 + n.alpha;

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = n.color;
        ctx.globalAlpha = Math.max(0.1, pulse);
        ctx.shadowColor = n.color;
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10 bg-[#06070a]">
      {/* Solar Amber and Prismatic Radial Blurs */}
      <div className="absolute -top-[15%] left-1/3 w-[800px] h-[700px] bg-gradient-to-br from-[#f59e0b]/20 via-[#d97706]/15 to-transparent rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute top-1/2 -left-20 w-[650px] h-[650px] bg-gradient-to-tr from-[#ec4899]/10 via-[#f59e0b]/10 to-transparent rounded-full blur-[210px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[700px] h-[550px] bg-gradient-to-tl from-[#06b6d4]/10 via-[#d97706]/10 to-transparent rounded-full blur-[220px] pointer-events-none" />

      {/* Modern Isometric Knowledge Grid */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(245, 158, 11, 0.18) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(245, 158, 11, 0.18) 1px, transparent 1px)
          `,
          backgroundSize: '54px 54px',
        }}
      />

      {/* Floating Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-65" />
    </div>
  );
};
