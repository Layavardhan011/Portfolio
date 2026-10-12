'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Star, Github } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { PROJECTS, type Project } from '@/lib/portfolio-data'
import { SectionHeading } from '@/components/sections/section-heading'

const accentMap = {
  emerald: {
    glow: 'bg-primary/10',
    ring: 'group-hover:border-primary/40',
    chip: 'bg-primary/10 text-primary',
    bar: 'from-primary/40',
    dot: 'bg-primary',
  },
  gold: {
    glow: 'bg-primary/10',
    ring: 'group-hover:border-primary/40',
    chip: 'bg-primary/10 text-primary',
    bar: 'from-primary/40',
    dot: 'bg-primary',
  },
  violet: {
    glow: 'bg-primary/10',
    ring: 'group-hover:border-primary/40',
    chip: 'bg-primary/10 text-primary',
    bar: 'from-primary/40',
    dot: 'bg-primary',
  },
} as const

export function Projects() {
  const [filter, setFilter] = React.useState<'all' | 'featured'>('all')
  const list = React.useMemo(
    () => (filter === 'featured' ? PROJECTS.filter((p) => p.featured) : PROJECTS),
    [filter]
  )

  return (
    <section
      id="projects"
      className="scroll-mt-24 border-y border-border/60 bg-card/20 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="03 / Selected Work"
            title="Real systems shipped, not just prototyped."
            description="A selection of smart contract, vm-executor, infra, and full-stack work I've built and shipped."
          />
          <div className="inline-flex shrink-0 items-center gap-1 rounded-full border border-border/60 bg-background/60 p-1">
            {(['all', 'featured'] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={cn(
                  'relative rounded-full px-4 py-1.5 text-sm font-medium capitalize transition-colors',
                  filter === f
                    ? 'text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {filter === f && (
                  <motion.span
                    layoutId="project-filter"
                    className="absolute inset-0 -z-10 rounded-full bg-primary"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {list.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button asChild variant="outline" size="lg" className="rounded-full">
            <a
              href="https://github.com/layavardhanreddy024"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="size-4" />
              See more on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const accent = accentMap[project.accent]
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card/60 transition-all duration-300 hover:-translate-y-1',
        accent.ring
      )}
    >
      {/* Visual header */}
      <div className="relative h-40 overflow-hidden border-b border-border/60 bg-background/40">
        <div
          className={cn(
            'absolute -right-8 -top-8 size-40 rounded-full blur-2xl transition-transform duration-500 group-hover:scale-125',
            accent.glow
          )}
        />
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 flex items-center justify-between p-5">
          <div>
            <div className="flex items-center gap-2">
              <span className={cn('size-2 rounded-full', accent.dot)} />
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                {project.category}
              </span>
            </div>
            <span className="mt-1 block font-mono text-xs text-muted-foreground">
              {project.year}
            </span>
          </div>
          {project.featured && (
            <Badge
              variant="secondary"
              className="gap-1 border-primary/30 bg-primary/10 text-primary"
            >
              <Star className="size-3 fill-current" />
              Featured
            </Badge>
          )}
        </div>
        <span className="absolute bottom-3 right-4 font-mono text-5xl font-bold text-foreground/5 transition-colors group-hover:text-foreground/10">
          0{index + 1}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold tracking-tight">
            {project.name}
          </h3>
          <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
        </div>
        <p className="mt-1 text-sm font-medium text-primary">
          {project.tagline}
        </p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        {/* metrics */}
        <div className="mt-5 grid grid-cols-3 gap-2 border-t border-border/60 pt-4">
          {project.metrics.map((m) => (
            <div key={m.label}>
              <div className="text-sm font-semibold">{m.value}</div>
              <div className="text-[11px] text-muted-foreground">{m.label}</div>
            </div>
          ))}
        </div>

        {/* tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-muted px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}
