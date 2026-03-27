import type { MouseEvent as ReactMouseEvent, ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { label: 'Magic', href: '#' },
  { label: 'Work', href: '#' },
  { label: 'Pricing', href: '#' },
  { label: 'Say Hi', href: '#' },
];

export function StickyNavbar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed left-0 right-0 top-0 z-50 border-b border-black/5 bg-white/70 backdrop-blur-xl"
        >
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
            <motion.span
              animate={{
                textShadow: [
                  '0 0 0px rgba(139,92,246,0)',
                  '0 0 8px rgba(139,92,246,0.3)',
                  '0 0 0px rgba(139,92,246,0)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="text-lg font-bold tracking-tighter text-gray-900"
            >
              NEXORA.
            </motion.span>
            <div className="hidden items-center gap-8 lg:flex">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="nav-link-hover relative text-[11px] font-medium uppercase tracking-[0.15em] text-gray-500 transition-colors hover:text-gray-900"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <MagneticButton>
              <button className="rounded-full bg-gray-900 px-5 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-white transition-all hover:bg-purple-600">
                Start Now
              </button>
            </MagneticButton>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}

// Magnetic button used here and exported for reuse
export function MagneticButton({ children, strength = 0.3 }: { children: ReactNode; strength?: number }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: ReactMouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;
    setPosition({ x, y });
  };

  const handleLeave = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.div
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 250, damping: 15, mass: 0.5 }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}
