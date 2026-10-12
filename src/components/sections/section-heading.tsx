'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

type Props = {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center')}
    >
      <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary">
        {eyebrow}
      </span>
      <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.6rem] lg:leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  )
}
