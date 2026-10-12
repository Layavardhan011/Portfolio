'use client'

import { motion } from 'framer-motion'
import {
  Code2,
  Layers,
  Layout,
  Wrench,
  type LucideIcon,
} from 'lucide-react'

import { SKILL_CATEGORIES } from '@/lib/portfolio-data'
import { SectionHeading } from '@/components/sections/section-heading'

const icons: Record<string, LucideIcon> = {
  code: Code2,
  layers: Layers,
  layout: Layout,
  wrench: Wrench,
}

export function Skills() {
  return (
    <section
      id="stack"
      className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-dots opacity-50" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="02 / Skills"
          title="The toolkit behind smart contracts & vm-executor."
          description="A focused stack spanning systems languages, blockchain tooling, frontend frameworks, and developer infra."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const Icon = icons[cat.icon] ?? Code2
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group relative rounded-2xl border border-border/60 bg-card/50 p-6 transition-all duration-300 hover:border-border hover:bg-card/80"
              >
                <div className="mb-5 flex items-start gap-4">
                  <div className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-border/70 bg-muted/40 text-foreground transition-colors group-hover:border-primary/40 group-hover:text-primary">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{cat.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {cat.blurb}
                    </p>
                  </div>
                </div>

                <div className="space-y-3.5">
                  {cat.items.map((item) => (
                    <div key={item.name}>
                      <div className="mb-1.5 flex items-center justify-between">
                        <span className="text-sm font-medium text-foreground/90">{item.name}</span>
                        <span className="font-mono text-xs text-muted-foreground">
                          {item.level}%
                        </span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-muted/60">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.level}%` }}
                          viewport={{ once: true, margin: '-40px' }}
                          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
                          className="h-full rounded-full bg-primary"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
