'use client'

import { motion } from 'framer-motion'
import { STATS } from '@/lib/portfolio-data'

export function Stats() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 size-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 lg:grid-cols-4">
          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative bg-background/80 p-6 sm:p-8"
            >
              <div className="text-4xl font-bold tracking-tight text-gradient-emerald sm:text-5xl">
                {stat.value}
              </div>
              <div className="mt-2 font-medium">{stat.label}</div>
              <div className="mt-1 text-xs text-muted-foreground">{stat.hint}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
