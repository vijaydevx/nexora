import { useEffect, useRef, useState } from 'react';
import { useInView, motion } from 'motion/react';

export function AnimatedCounter({
  target,
  suffix = '',
  prefix = '',
  duration = 2000,
  className,
}: {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const startTime = Date.now();
    const step = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target * 10) / 10);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, target, duration]);

  return (
    <motion.span
      ref={ref}
      className={className}
    >
      {prefix}{value % 1 === 0 ? Math.round(value) : value.toFixed(1)}{suffix}
    </motion.span>
  );
}
