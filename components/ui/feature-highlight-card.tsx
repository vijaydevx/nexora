import * as React from "react";
import { motion, type Variants } from "motion/react";
import { cn } from "@/lib/utils";

interface FeatureHighlightCardProps {
  imageSrc?: string;
  imageAlt?: string;
  icon?: React.ReactNode;
  step: string;
  title: string;
  description: string;
  bgColor?: string;
  className?: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 15, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const imageContainerVariants: Variants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export const FeatureHighlightCard = React.forwardRef<
  HTMLDivElement,
  FeatureHighlightCardProps
>(({ imageSrc, imageAlt = "Feature image", icon, step, title, description, bgColor, className }, ref) => {
  return (
    <motion.div
      ref={ref}
      className={cn("flex flex-col", className)}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {/* Card image area */}
      <motion.div
        variants={imageContainerVariants}
        className={cn(
          "relative flex aspect-square items-center justify-center overflow-hidden rounded-xl",
          bgColor || "bg-gray-100"
        )}
      >
        {/* Step number watermark */}
        <span className="pointer-events-none absolute right-4 top-2 text-6xl font-black text-black/5">
          {step}
        </span>
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={imageAlt}
            className="h-full w-full object-cover"
          />
        ) : icon ? (
          <div className="flex items-center justify-center">{icon}</div>
        ) : null}
      </motion.div>

      {/* Text below card */}
      <div className="mt-5 flex items-start gap-3">
        <motion.div
          variants={itemVariants}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-gray-900 text-sm font-bold text-gray-900"
        >
          {step}
        </motion.div>
        <div>
          <motion.h3
            variants={itemVariants}
            className="text-lg font-bold tracking-tight text-gray-900"
          >
            {title}
          </motion.h3>
          <motion.p
            variants={itemVariants}
            className="mt-1 text-sm leading-relaxed text-gray-500"
          >
            {description}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
});

FeatureHighlightCard.displayName = "FeatureHighlightCard";
