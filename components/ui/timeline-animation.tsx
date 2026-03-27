'use client'

import { type RefObject } from 'react'
import { motion, type Variants } from 'motion/react'
import { cn } from '@/lib/utils'

interface TimelineContentProps {
  children: React.ReactNode
  as?: keyof JSX.IntrinsicElements
  animationNum: number
  timelineRef: RefObject<HTMLDivElement | null>
  customVariants?: Variants
  className?: string
}

export function TimelineContent({
  children,
  as: Tag = 'div',
  animationNum,
  customVariants,
  className,
}: TimelineContentProps) {
  const MotionTag = motion.create(Tag as any)

  return (
    <MotionTag
      custom={animationNum}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={customVariants}
      className={cn(className)}
    >
      {children}
    </MotionTag>
  )
}
