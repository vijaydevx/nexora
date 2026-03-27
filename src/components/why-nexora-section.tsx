import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, BarChart3, Palette, Zap, Rocket, Check, Globe, Shield, Code2, Layers, Database, Cpu, Gauge, Eye } from 'lucide-react';
import { MagneticButton } from '@/src/components/effects/sticky-navbar';

// Cards for scrolling columns
const allCards = [
  // Column 1 (scrolls up)
  [
    { title: 'AI Builder', description: 'Generate full websites from a single prompt', icon: Sparkles, iconColor: 'text-purple-400', gradient: 'from-purple-500/20 to-violet-600/20', border: 'border-purple-500/20', stat: '10x Faster' },
    { title: 'Analytics', description: 'Real-time insights and performance metrics', icon: BarChart3, iconColor: 'text-blue-400', gradient: 'from-blue-500/20 to-cyan-600/20', border: 'border-blue-500/20', stat: '99.9% Uptime' },
    { title: 'Design Editor', description: 'Pixel-perfect control with AI assistance', icon: Palette, iconColor: 'text-pink-400', gradient: 'from-pink-500/20 to-rose-600/20', border: 'border-pink-500/20', stat: '500+ Templates' },
    { title: 'Performance', description: 'Optimized for speed and search rankings', icon: Zap, iconColor: 'text-amber-400', gradient: 'from-amber-500/20 to-orange-600/20', border: 'border-amber-500/20', stat: '100 Score' },
  ],
  // Column 2 (scrolls down)
  [
    { title: 'Global CDN', description: 'Lightning-fast delivery worldwide', icon: Globe, iconColor: 'text-emerald-400', gradient: 'from-emerald-500/20 to-teal-600/20', border: 'border-emerald-500/20', stat: '200+ Edges' },
    { title: 'Security', description: 'Enterprise-grade protection built in', icon: Shield, iconColor: 'text-sky-400', gradient: 'from-sky-500/20 to-blue-600/20', border: 'border-sky-500/20', stat: 'SOC2 Ready' },
    { title: 'Code Export', description: 'Clean, production-ready code output', icon: Code2, iconColor: 'text-violet-400', gradient: 'from-violet-500/20 to-purple-600/20', border: 'border-violet-500/20', stat: 'Zero Bloat' },
    { title: 'Components', description: 'Reusable blocks and design systems', icon: Layers, iconColor: 'text-rose-400', gradient: 'from-rose-500/20 to-pink-600/20', border: 'border-rose-500/20', stat: '1000+ Blocks' },
  ],
  // Column 3 (scrolls up)
  [
    { title: 'Database', description: 'Integrated data layer for dynamic sites', icon: Database, iconColor: 'text-cyan-400', gradient: 'from-cyan-500/20 to-sky-600/20', border: 'border-cyan-500/20', stat: 'Auto Scale' },
    { title: 'AI Models', description: 'Multiple AI engines for best results', icon: Cpu, iconColor: 'text-indigo-400', gradient: 'from-indigo-500/20 to-violet-600/20', border: 'border-indigo-500/20', stat: 'GPT + Claude' },
    { title: 'Speed Test', description: 'Automatic performance optimization', icon: Gauge, iconColor: 'text-lime-400', gradient: 'from-lime-500/20 to-green-600/20', border: 'border-lime-500/20', stat: '< 1s Load' },
    { title: 'Preview', description: 'Live preview across all devices', icon: Eye, iconColor: 'text-orange-400', gradient: 'from-orange-500/20 to-amber-600/20', border: 'border-orange-500/20', stat: 'All Devices' },
  ],
];

const features = [
  'Instant Website Generation',
  'Smart AI Optimization',
  'Premium Design System',
  'One-Click Launch',
];

type CardData = typeof allCards[number][number];

function ScrollingColumn({ cards, reverse, duration }: { cards: CardData[]; reverse?: boolean; duration: number }) {
  return (
    <div className="flex-1 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]">
      <motion.div
        animate={{ translateY: reverse ? '0%' : '-50%' }}
        initial={{ translateY: reverse ? '-50%' : '0%' }}
        transition={{
          duration,
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop',
        }}
        className="flex flex-col gap-4 pb-4"
      >
        {[0, 1].map((copy) => (
          <div key={copy} className="flex flex-col gap-4">
            {cards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={`${copy}-${card.title}`}
                  className={`relative overflow-hidden rounded-xl border backdrop-blur-xl ${card.border} p-4`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-60`} />
                  <div className="absolute inset-0 bg-white/5" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-2.5">
                      <div className={`flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 ${card.iconColor}`}>
                        <Icon size={16} />
                      </div>
                      <span className="text-xs font-semibold text-white">{card.title}</span>
                    </div>
                    <p className="mt-2 text-[10px] leading-relaxed text-white/50">{card.description}</p>
                    <div className="mt-3 flex items-center gap-1.5">
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      <span className="text-[9px] font-bold uppercase tracking-wider text-emerald-400">{card.stat}</span>
                    </div>
                    <div className="mt-2 h-0.5 w-full overflow-hidden rounded-full bg-white/10">
                      <div className={`h-full w-2/3 rounded-full bg-gradient-to-r from-purple-400 to-blue-400`} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function WhyNexoraSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gray-950 px-6 py-28 sm:px-10 lg:px-16">
      {/* Background elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,60,220,0.15),transparent)]" />
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-1/4 top-1/3 h-72 w-72 rounded-full bg-purple-600/10 blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 25, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-blue-600/10 blur-[100px]"
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2 lg:gap-12">
        {/* Left — Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-purple-400/70">
            Built Different
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-[2.75rem] md:leading-[1.15]">
            Why Creators Choose{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              NEXORA
            </span>
          </h2>

          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/50 md:text-[15px]">
            AI-powered tools designed to build, optimize, and launch websites
            instantly — no coding, no complexity.
          </p>

          {/* Feature list */}
          <div className="mt-10 flex flex-col gap-3.5">
            {features.map((feature, i) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className={`flex items-center gap-3 transition-all duration-500 ${
                  activeIndex === i ? 'translate-x-1' : ''
                }`}
              >
                <div
                  className={`flex h-6 w-6 items-center justify-center rounded-full transition-all duration-500 ${
                    activeIndex === i
                      ? 'bg-purple-500 shadow-lg shadow-purple-500/30'
                      : 'bg-white/10'
                  }`}
                >
                  <Check
                    size={12}
                    className={`transition-colors duration-500 ${
                      activeIndex === i ? 'text-white' : 'text-white/40'
                    }`}
                  />
                </div>
                <span
                  className={`text-sm font-medium transition-colors duration-500 ${
                    activeIndex === i ? 'text-white' : 'text-white/40'
                  }`}
                >
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-10"
          >
            <MagneticButton>
              <button className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 text-xs font-bold uppercase tracking-[0.15em] text-white shadow-lg shadow-purple-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/30">
                <Rocket size={14} />
                <span>Start Building Free</span>
              </button>
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* Right — Scrolling Card Columns */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="hidden h-[500px] gap-4 lg:flex"
        >
          <ScrollingColumn cards={allCards[0]} duration={18} />
          <ScrollingColumn cards={allCards[1]} duration={22} reverse />
          <ScrollingColumn cards={allCards[2]} duration={16} />
        </motion.div>
      </div>
    </section>
  );
}
