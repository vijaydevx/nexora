import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';
import { MagneticButton } from '@/src/components/effects/sticky-navbar';

function PreviewImage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      className="mx-auto mt-12 max-w-4xl"
    >
      <img
        src="/cta-preview.png"
        alt="NEXORA AI Dashboard Preview"
        className="w-full [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_40%,transparent_70%)]"
      />
    </motion.div>
  );
}

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-purple-50/80 via-purple-50/40 to-white px-6 pb-8 pt-24 sm:px-10 lg:px-16">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[50vmin] w-[80vmin] -translate-x-1/2 rounded-full bg-purple-200/20 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Your All-in-One{' '}
            <span className="text-purple-600">AI Website Builder</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-gray-500 md:text-base">
            Build, design, and launch powerful websites in minutes.
            Get real-time AI generation, smart optimization, and seamless publishing — all in one platform.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <MagneticButton>
              <button className="flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-gray-900/20 transition-all hover:scale-105 hover:shadow-xl">
                <span>Start Building Free</span>
                <ArrowRight size={15} />
              </button>
            </MagneticButton>
            <MagneticButton>
              <button className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-7 py-3 text-sm font-semibold text-gray-700 shadow-sm transition-all hover:scale-105 hover:border-purple-200 hover:shadow-md">
                <Play size={14} className="text-purple-500" />
                <span>Try Live Demo</span>
              </button>
            </MagneticButton>
          </div>

          <p className="mt-4 text-[11px] text-gray-400">
            No credit card required &bull; Instant access &bull; Free plan available
          </p>
        </motion.div>
      </div>

      {/* Preview Image */}
      <PreviewImage />
    </section>
  );
}
