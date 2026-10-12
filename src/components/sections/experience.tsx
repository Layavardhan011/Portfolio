'use client'

import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'

import { EXPERIENCE } from '@/lib/portfolio-data'
import { SectionHeading } from '@/components/sections/section-heading'

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="04 / Experience"
          title="From full-stack intern to smart contract & VM engineering."
          description="A growing track record across the Dharitri blockchain and full-stack web development."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-12">
          {/* sticky rail */}
          <div className="lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/40 px-4 py-2 text-sm text-muted-foreground">
                <Briefcase className="size-4 text-primary" />
                3 roles · since 2025
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Each role compounded the last — from full-stack web
                development into smart contract and vm-executor engineering on the
                Dharitri chain.
              </p>
            </div>
          </div>

          {/* timeline */}
          <div className="lg:col-span-9">
            <div className="relative space-y-8 before:absolute before:top-2 before:bottom-2 before:left-[7px] before:w-px before:bg-border">
              {EXPERIENCE.map((exp, idx) => (
                <motion.div
                  key={`${exp.company}-${exp.role}-${idx}`}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="relative pl-8"
                >
                  <span className="absolute left-0 top-2 grid size-4 place-items-center">
                    <span className="size-2.5 rounded-full bg-primary ring-4 ring-primary/15" />
                  </span>
                  <div className="rounded-2xl border border-border/60 bg-card/40 p-6 transition-colors hover:border-primary/40">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <div>
                        <h3 className="text-lg font-semibold">{exp.role}</h3>
                        <p className="text-sm text-primary">{exp.company}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-mono text-xs text-muted-foreground">
                          {exp.period}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {exp.location}
                        </p>
                      </div>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {exp.summary}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {exp.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                        >
                          <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {exp.stack.map((s) => (
                        <span
                          key={s}
                          className="rounded-md bg-muted px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
