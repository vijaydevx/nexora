import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

// Particle system for hero background
export function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let particles: { x: number; y: number; vx: number; vy: number; size: number; alpha: number; color: string }[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener('resize', resize);

    // Create particles
    const count = 60;
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.4 + 0.1,
        color: Math.random() > 0.5 ? '139,92,246' : '59,130,246',
      });
    }

    const handleMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    window.addEventListener('mousemove', handleMouse);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      particles.forEach((p) => {
        // Subtle mouse repulsion
        const dx = p.x - mx;
        const dy = p.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120 && dist > 0) {
          const force = (120 - dist) / 120 * 0.02;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }

        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.99;
        p.vy *= 0.99;

        // Wrap
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color},${p.alpha})`;
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(139,92,246,${0.06 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-[1] h-full w-full opacity-60"
    />
  );
}

// AI Core — glowing neural sphere
export function AICore() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      mouseX.set((e.clientX - cx) * 0.02);
      mouseY.set((e.clientY - cy) * 0.02);
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      className="pointer-events-none absolute left-1/2 top-[30%] z-[1] -translate-x-1/2 -translate-y-1/2 opacity-40"
    >
      <div className="relative flex h-40 w-40 items-center justify-center md:h-56 md:w-56">
        {/* Outer energy ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 rounded-full"
          style={{
            background: 'conic-gradient(from 0deg, transparent, rgba(139,92,246,0.15), transparent, rgba(59,130,246,0.1), transparent)',
          }}
        />

        {/* Pulse rings */}
        <motion.div
          animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-2 rounded-full border border-purple-500/20"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0, 0.2] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute inset-4 rounded-full border border-blue-500/15"
        />

        {/* Inner glow sphere */}
        <div className="absolute inset-6 rounded-full bg-gradient-to-br from-purple-600/20 via-transparent to-blue-600/20 backdrop-blur-sm" />

        {/* Core */}
        <motion.div
          animate={{
            boxShadow: [
              '0 0 30px rgba(139,92,246,0.3), 0 0 60px rgba(139,92,246,0.1), inset 0 0 30px rgba(139,92,246,0.2)',
              '0 0 40px rgba(139,92,246,0.4), 0 0 80px rgba(59,130,246,0.15), inset 0 0 40px rgba(59,130,246,0.25)',
              '0 0 30px rgba(139,92,246,0.3), 0 0 60px rgba(139,92,246,0.1), inset 0 0 30px rgba(139,92,246,0.2)',
            ],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="relative h-16 w-16 rounded-full bg-gradient-to-br from-purple-500/40 to-blue-500/40 md:h-20 md:w-20"
        >
          {/* Inner light */}
          <motion.div
            animate={{ opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-2 rounded-full bg-gradient-to-br from-purple-400/30 to-blue-400/30 blur-sm"
          />
          {/* Center dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ scale: [0.8, 1.1, 0.8] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              className="h-3 w-3 rounded-full bg-white/60 blur-[2px]"
            />
          </div>
        </motion.div>

        {/* Orbiting dots */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{ rotate: 360 }}
            transition={{ duration: 8 + i * 3, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0"
            style={{ transform: `rotate(${i * 120}deg)` }}
          >
            <motion.div
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
              className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-purple-400"
              style={{ boxShadow: '0 0 6px rgba(139,92,246,0.6)' }}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

// Gradient shift wrapper
export function ScrollGradientShift({ children }: { children: React.ReactNode }) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(maxScroll > 0 ? window.scrollY / maxScroll : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="relative"
      style={{
        '--scroll-hue': `${scrollProgress * 30}`,
      } as React.CSSProperties}
    >
      {/* Scroll-reactive gradient overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-[1] opacity-[0.03] transition-all duration-1000"
        style={{
          background: `radial-gradient(ellipse at 50% ${30 + scrollProgress * 40}%, hsl(${265 + scrollProgress * 30}, 80%, 50%) 0%, transparent 60%)`,
        }}
      />
      <div className="relative z-[2]">{children}</div>
    </div>
  );
}
