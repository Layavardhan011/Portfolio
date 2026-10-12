'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Trophy, Languages } from 'lucide-react'

import { EDUCATION, ACHIEVEMENTS, LANGUAGES } from '@/lib/portfolio-data'
import { SectionHeading } from '@/components/sections/section-heading'

export function Education() {
  return (
    <section className="scroll-mt-24 border-t border-border/60 bg-card/20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="05 / Education & More"
          title="Background, accolades & beyond code."
          description="The foundation behind the engineering — formal education, wins, and the languages I speak."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="group relative rounded-2xl border border-border/60 bg-card/60 p-6 transition-all duration-300 hover:border-border hover:bg-card/80"
          >
            <div className="inline-flex size-11 items-center justify-center rounded-xl border border-border/70 bg-muted/40 text-foreground transition-colors group-hover:border-primary/40 group-hover:text-primary">
              <GraduationCap className="size-5" />
            </div>
            <h3 className="mt-5 text-lg font-semibold leading-snug">
              {EDUCATION.institution}
            </h3>
            <p className="mt-1 text-sm font-medium text-primary">
              {EDUCATION.degree}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
              <span className="font-mono">{EDUCATION.period}</span>
              <span>·</span>
              <span>{EDUCATION.location}</span>
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative rounded-2xl border border-border/60 bg-card/60 p-6 transition-all duration-300 hover:border-border hover:bg-card/80"
          >
            <div className="inline-flex size-11 items-center justify-center rounded-xl border border-border/70 bg-muted/40 text-foreground transition-colors group-hover:border-primary/40 group-hover:text-primary">
              <Trophy className="size-5" />
            </div>
            <h3 className="mt-5 text-lg font-semibold">Achievements</h3>
            <ul className="mt-4 space-y-3">
              {ACHIEVEMENTS.map((a) => (
                <li key={a.title} className="flex items-start gap-3">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                  <span>
                    <span className="block text-sm font-medium text-foreground/90">{a.title}</span>
                    <span className="text-xs text-muted-foreground">
                      {a.context}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group relative rounded-2xl border border-border/60 bg-card/60 p-6 transition-all duration-300 hover:border-border hover:bg-card/80"
          >
            <div className="inline-flex size-11 items-center justify-center rounded-xl border border-border/70 bg-muted/40 text-foreground transition-colors group-hover:border-primary/40 group-hover:text-primary">
              <Languages className="size-5" />
            </div>
            <h3 className="mt-5 text-lg font-semibold">Languages</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {LANGUAGES.map((lang) => (
                <span
                  key={lang}
                  className="rounded-full border border-border/60 bg-muted/40 px-3 py-1 text-xs font-medium text-foreground/90"
                >
                  {lang}
                </span>
              ))}
            </div>
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
              Interests: Chess and strategic board games · Reading tech articles.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
