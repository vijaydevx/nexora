import { ArrowRight, BarChart3, Bell } from 'lucide-react';
import { motion } from 'motion/react';

function LoopingVideo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      className="w-full max-w-lg"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        controls={false}
        disablePictureInPicture
        controlsList="nodownload nofullscreen noremoteplayback"
        className="pointer-events-none w-full select-none rounded-2xl border border-gray-200 shadow-xl shadow-black/5"
      >
        <source src="/second-page.mp4" type="video/mp4" />
      </video>
    </motion.div>
  );
}

export function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2 lg:gap-20">
        {/* Left — Text content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="order-2 flex flex-col lg:order-1"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-gray-900 md:text-[2.75rem] md:leading-[1.15]"
          >
            Built for speed.{' '}
            <span className="text-gray-400">Designed for intelligence.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-5 max-w-lg text-sm leading-relaxed text-gray-500 md:text-[15px]"
          >
            NEXORA delivers next-generation AI solutions that automate, optimize,
            and elevate your digital presence — all in real time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <a
              href="#"
              className="nav-link-hover group relative inline-flex items-center gap-2 text-sm font-bold tracking-tight text-gray-900 transition-colors hover:text-purple-600"
            >
              <span>live performance tracking</span>
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-4 max-w-lg text-sm leading-relaxed text-gray-500 md:text-[15px]"
          >
            Understand your system behavior instantly with intelligent analytics
            and adaptive AI models working behind the scenes.
          </motion.p>

          {/* Bottom feature cards */}
          <div className="mt-10 grid grid-cols-2 gap-3">
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, boxShadow: '0 8px 25px rgba(139,92,246,0.08)' }}
              className="rounded-xl border border-gray-150 bg-gray-50 p-4"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
                className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-white shadow-sm ring-1 ring-gray-200"
              >
                <BarChart3 size={16} className="text-gray-700" />
              </motion.div>
              <p className="text-[13px] font-semibold text-gray-800">Real-Time Monitoring</p>
              <p className="mt-1 text-[11px] leading-relaxed text-gray-500">
                Stay in control with live system insights and performance tracking.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, boxShadow: '0 8px 25px rgba(139,92,246,0.08)' }}
              className="rounded-xl border border-gray-150 bg-gray-50 p-4"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
                className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-white shadow-sm ring-1 ring-gray-200"
              >
                <Bell size={16} className="text-gray-700" />
              </motion.div>
              <p className="text-[13px] font-semibold text-gray-800">Smart Alerts</p>
              <p className="mt-1 text-[11px] leading-relaxed text-gray-500">
                Receive instant updates and AI-powered recommendations.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right — Looping Video */}
        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <LoopingVideo />
        </div>
      </div>
    </section>
  );
}
