import { motion } from 'motion/react';
import { MessageSquareText, Sparkles, Rocket, Search, Wand2, PenTool, Code2, Layers } from 'lucide-react';
import { FeatureHighlightCard } from '@/components/ui/feature-highlight-card';

function Step1Icon() {
  return (
    <div className="relative flex flex-col items-center gap-3">
      {/* Chat bubble */}
      <div className="flex items-start gap-2.5 rounded-xl bg-white/80 px-4 py-3 shadow-sm backdrop-blur">
        <MessageSquareText size={18} className="mt-0.5 shrink-0 text-purple-500" />
        <div>
          <p className="text-xs font-semibold text-gray-800">SAAS startup</p>
          <p className="mt-0.5 text-[10px] text-gray-400">AI automation tools</p>
        </div>
      </div>
      {/* Search + Pen icons floating */}
      <div className="flex gap-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/80 shadow-sm backdrop-blur">
          <Search size={16} className="text-purple-400" />
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/80 shadow-sm backdrop-blur">
          <PenTool size={16} className="text-purple-400" />
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/80 shadow-sm backdrop-blur">
          <Code2 size={16} className="text-purple-400" />
        </div>
      </div>
    </div>
  );
}

function Step2Icon() {
  return (
    <div className="relative flex flex-col items-center gap-3">
      {/* Animated orb */}
      <div className="relative flex h-28 w-28 items-center justify-center">
        <div className="absolute inset-0 animate-pulse rounded-full bg-purple-400/20 blur-xl" />
        <div className="absolute inset-2 rounded-full bg-gradient-to-br from-purple-400/30 to-violet-600/30 backdrop-blur" />
        <Sparkles size={28} className="relative z-10 text-white" />
      </div>
      <div className="flex items-center gap-1.5 rounded-full bg-white/80 px-3 py-1.5 shadow-sm backdrop-blur">
        <div className="flex gap-0.5">
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-purple-400" style={{ animationDelay: '0ms' }} />
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-purple-400" style={{ animationDelay: '150ms' }} />
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-purple-400" style={{ animationDelay: '300ms' }} />
        </div>
        <span className="text-[10px] font-medium text-gray-600">Generating your custom...</span>
      </div>
    </div>
  );
}

function Step3Icon() {
  return (
    <div className="relative flex flex-col items-center gap-2">
      {/* Mini browser preview */}
      <div className="w-52 overflow-hidden rounded-lg bg-gray-900 shadow-lg">
        <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-1.5">
          <Wand2 size={10} className="text-purple-400" />
          <span className="text-[9px] font-medium text-white/70">Preview</span>
          <div className="ml-auto flex gap-1">
            <div className="h-1.5 w-5 rounded-full bg-white/15" />
            <div className="h-1.5 w-3 rounded-full bg-white/15" />
          </div>
        </div>
        <div className="space-y-2 px-3 py-2.5">
          <p className="text-[10px] font-bold text-white">Super Intelligent<br />Digital Experiences</p>
          <div className="h-4 w-16 rounded bg-purple-500 text-center text-[7px] font-bold leading-4 text-white">Get Started</div>
        </div>
      </div>
      {/* Bottom status badges */}
      <div className="flex gap-2">
        <div className="flex items-center gap-1 rounded-md bg-white/80 px-2 py-1 shadow-sm backdrop-blur">
          <div className="h-2 w-2 rounded-full bg-emerald-400" />
          <span className="text-[8px] font-semibold text-gray-600">Live</span>
        </div>
        <div className="flex items-center gap-1 rounded-md bg-white/80 px-2 py-1 shadow-sm backdrop-blur">
          <Layers size={8} className="text-purple-500" />
          <span className="text-[8px] font-semibold text-gray-600">Deployed</span>
        </div>
      </div>
    </div>
  );
}

const steps = [
  {
    step: '01',
    title: 'Describe Your Idea',
    description: 'Tell our AI what you need — your brand, style, and goals. It understands context and builds with purpose.',
    bgColor: 'bg-purple-100',
    icon: <Step1Icon />,
  },
  {
    step: '02',
    title: 'AI Builds Instantly',
    description: 'NEXORA generates your custom website with intelligent layouts, optimized code, and stunning design in seconds.',
    bgColor: 'bg-indigo-200',
    icon: <Step2Icon />,
  },
  {
    step: '03',
    title: 'Customize & Launch',
    description: 'Fine-tune every detail with an intuitive editor. One click to publish — modern, fast, and production-ready.',
    bgColor: 'bg-amber-100',
    icon: <Step3Icon />,
  },
];

export function HowItWorksSection() {
  return (
    <section className="relative overflow-hidden bg-gray-50 px-6 py-24 sm:px-10 lg:px-16">
      {/* Decorative blurs */}
      <div className="pointer-events-none absolute -right-20 top-20 h-64 w-64 rounded-full bg-purple-300/20 blur-[100px]" />
      <div className="pointer-events-none absolute -left-20 bottom-20 h-48 w-48 rounded-full bg-amber-300/15 blur-[80px]" />

      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gray-400">
            No coding. No complexity. Just describe, generate, and launch.
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">
            From Idea to Website{' '}
            <span className="italic text-purple-600">in Seconds</span>
          </h2>
        </motion.div>

        {/* 3 Cards */}
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3 md:gap-5">
          {steps.map((step) => (
            <FeatureHighlightCard
              key={step.step}
              step={step.step}
              title={step.title}
              description={step.description}
              bgColor={step.bgColor}
              icon={step.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
