/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';

import { LiquidButton } from '@/components/ui/liquid-glass-button';
import { MagicCursor } from '@/components/ui/magic-cursor';
import { AboutSection } from '@/src/components/about-section';
import { CtaSection } from '@/src/components/cta-section';
import { SmoothScroll } from '@/src/components/effects/smooth-scroll';
import { StickyNavbar, MagneticButton } from '@/src/components/effects/sticky-navbar';
import { PageLoader } from '@/src/components/effects/page-loader';
import { TypingText } from '@/src/components/effects/typing-text';
import { ScrollToTop } from '@/src/components/effects/scroll-to-top';
import { HeroParticles, AICore, ScrollGradientShift } from '@/src/components/effects/ai-core';
import { FooterSection } from '@/src/components/footer-section';
import { HowItWorksSection } from '@/src/components/how-it-works-section';
import { LogoShowcase } from '@/src/components/logo-showcase';
import PricingSection from '@/components/ui/pricing';
import { TestimonialsSection } from '@/src/components/testimonials-section';
import { WhyNexoraSection } from '@/src/components/why-nexora-section';

function useParallax(speed: number) {
  const { scrollY } = useScroll();
  return useTransform(scrollY, [0, 1000], [0, -1000 * speed]);
}

export default function App() {
  const videoARef = useRef<HTMLVideoElement>(null);
  const videoBRef = useRef<HTMLVideoElement>(null);
  const [activeVideo, setActiveVideo] = useState<'A' | 'B'>('A');

  useEffect(() => {
    const videoA = videoARef.current;
    const videoB = videoBRef.current;
    if (!videoA || !videoB) return;

    // Preload video B at start
    videoB.currentTime = 0;
    videoB.pause();

    const handleNearEnd = (current: HTMLVideoElement, next: HTMLVideoElement, nextLabel: 'A' | 'B') => {
      const checkTime = () => {
        if (current.duration - current.currentTime < 0.8) {
          // Start next video from beginning, crossfade
          next.currentTime = 0;
          next.play();
          setActiveVideo(nextLabel);
          current.removeEventListener('timeupdate', checkTime);
        }
      };
      current.addEventListener('timeupdate', checkTime);
      return checkTime;
    };

    const onEndA = () => {
      videoA.currentTime = 0;
      videoA.pause();
    };
    const onEndB = () => {
      videoB.currentTime = 0;
      videoB.pause();
    };

    videoA.addEventListener('ended', onEndA);
    videoB.addEventListener('ended', onEndB);

    // Start monitoring video A
    let cleanupA: (() => void) | undefined;
    let cleanupB: (() => void) | undefined;

    const onPlayA = () => {
      const checker = handleNearEnd(videoA, videoB, 'B');
      cleanupA = () => videoA.removeEventListener('timeupdate', checker);
    };
    const onPlayB = () => {
      const checker = handleNearEnd(videoB, videoA, 'A');
      cleanupB = () => videoB.removeEventListener('timeupdate', checker);
    };

    videoA.addEventListener('play', onPlayA);
    videoB.addEventListener('play', onPlayB);

    // Trigger initial
    onPlayA();

    return () => {
      videoA.removeEventListener('ended', onEndA);
      videoB.removeEventListener('ended', onEndB);
      videoA.removeEventListener('play', onPlayA);
      videoB.removeEventListener('play', onPlayB);
      cleanupA?.();
      cleanupB?.();
    };
  }, []);

  return (
    <ScrollGradientShift>
    <div className="bg-white font-sans text-white selection:bg-purple-500 selection:text-white">
      <PageLoader />
      <SmoothScroll />
      <MagicCursor />
      <StickyNavbar />
      <ScrollToTop />
      <div className="p-2.5 sm:p-3.5 md:p-4">
      <section className="relative min-h-[calc(100vh-20px)] overflow-hidden rounded-2xl sm:min-h-[calc(100vh-28px)] sm:rounded-3xl md:min-h-[calc(100vh-32px)]">
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <video
            ref={videoARef}
            autoPlay
            muted
            playsInline
            preload="auto"
            className={`absolute inset-0 h-full w-full scale-105 object-cover transition-opacity duration-1000 ease-in-out ${activeVideo === 'A' ? 'opacity-100' : 'opacity-0'}`}
          >
            <source
              src="https://image.cdn2.seaart.me/2026-03-26/d72noble878c73ab7es0/c147adf8-a233-42f7-a035-4d0550111792.mp4"
              type="video/mp4"
            />
          </video>
          <video
            ref={videoBRef}
            muted
            playsInline
            preload="metadata"
            className={`absolute inset-0 h-full w-full scale-105 object-cover transition-opacity duration-1000 ease-in-out ${activeVideo === 'B' ? 'opacity-100' : 'opacity-0'}`}
          >
            <source
              src="https://image.cdn2.seaart.me/2026-03-26/d72noble878c73ab7es0/c147adf8-a233-42f7-a035-4d0550111792.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-radial-[circle_at_center] from-transparent via-black/10 to-black/80" />
          <HeroParticles />
          <AICore />
        </div>

        <nav className="relative z-10 flex items-center justify-between px-6 py-8 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, filter: 'blur(8px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1 }}
            className="relative text-2xl font-bold tracking-tighter"
          >
            <motion.span
              animate={{
                textShadow: [
                  '0 0 8px rgba(139,92,246,0)',
                  '0 0 12px rgba(139,92,246,0.4)',
                  '0 0 8px rgba(139,92,246,0)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              NEXORA.
            </motion.span>
          </motion.div>

          <div className="hidden items-center gap-10 text-[11px] font-medium uppercase tracking-[0.2em] text-white/60 lg:flex">
            <a href="#" className="nav-link-hover relative transition-colors hover:text-white">
              Magic
            </a>
            <a href="#" className="nav-link-hover relative transition-colors hover:text-white">
              Work
            </a>
            <a href="#" className="nav-link-hover relative transition-colors hover:text-white">
              Pricing
            </a>
            <a href="#" className="nav-link-hover relative transition-colors hover:text-white">
              Say Hi
            </a>
          </div>

          <MagneticButton>
            <div className="cursor-pointer text-[11px] font-bold uppercase tracking-[0.2em] transition-colors hover:text-white/70">
              START NOW
            </div>
          </MagneticButton>
        </nav>

        <motion.main
          style={{ y: useParallax(0.15) }}
          className="relative z-10 flex min-h-[70vh] flex-col items-center justify-center px-6 pb-40 pt-10 text-center sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6"
          >
            <h1 className="text-[12vw] leading-[0.9] tracking-tighter md:text-[5.5vw]">
              <span className="mb-2 block font-light italic opacity-90">
                Build Websites at the
              </span>
              <span className="block font-black uppercase italic">
                <TypingText text="SPEED OF THOUGHT" delay={800} speed={55} />
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="mb-10 max-w-md text-sm leading-relaxed text-white/70 md:text-base"
          >
            AI-powered creation. Instant launch. Zero complexity.
            Design and ship powerful websites in minutes, not months.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mb-12"
          >
            <MagneticButton strength={0.4}>
              <button className="rounded-full bg-white px-10 py-3.5 text-[11px] font-black uppercase tracking-[0.2em] text-black shadow-[0_0_40px_rgba(255,255,255,0.15)] transition-transform hover:scale-105">
                GET STARTED
              </button>
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {['BUILT WITH AI', 'FAST AS LIGHT', 'FUTURE READY', 'HUMAN-CENTERED'].map((text) => (
              <LiquidButton
                key={text}
                size="sm"
                variant="default"
                className="rounded-full text-[8px] font-bold tracking-[0.2em] text-white"
              >
                {text}
              </LiquidButton>
            ))}
          </motion.div>
        </motion.main>

        <div className="relative z-10 px-6 pb-12 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col gap-1"
          >
            <p className="text-lg font-light italic text-white/90 md:text-xl">
              Tell the AI what you want.
            </p>
            <p className="mb-4 text-lg font-light italic text-white/90 md:text-xl">
              Watch it happen.
            </p>
            <a
              href="#"
              className="group flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.3em]"
            >
              <span>SEE THE EXPERIENCE</span>
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </motion.div>
        </div>

        <div className="pointer-events-none absolute bottom-12 right-6 z-10 hidden rotate-180 text-[9px] uppercase tracking-[0.6em] text-white/10 [writing-mode:vertical-rl] lg:block">
          NEXORA • INTELLIGENCE BY DESIGN
        </div>
      </section>
      </div>

      <LogoShowcase />

      <AboutSection />

      <HowItWorksSection />

      <WhyNexoraSection />

      <TestimonialsSection />

      <section className="bg-gray-50 px-6 pb-24 sm:px-10 lg:px-16">
        <PricingSection />
      </section>

      <CtaSection />

      <FooterSection />

      <div className="pointer-events-none fixed bottom-6 left-1/2 z-20 hidden -translate-x-1/2 rounded-full border border-black/10 bg-white/80 px-4 py-2 text-[9px] uppercase tracking-[0.4em] text-black/35 backdrop-blur md:block">
        Scroll to explore
      </div>
    </div>
    </ScrollGradientShift>
  );
}
