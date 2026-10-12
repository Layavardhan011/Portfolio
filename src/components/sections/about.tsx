'use client'

import { motion } from 'framer-motion'
import { MapPin, Coffee, Code2, ShieldCheck, Boxes, Zap } from 'lucide-react'
import { PROFILE } from '@/lib/portfolio-data'
import { SectionHeading } from '@/components/sections/section-heading'

const highlights = [
  {
    icon: ShieldCheck,
    title: 'Smart contracts & VM-executor',
    text: 'I work at the smart contract execution layer — stabilizing the vm-executor bridge and ensuring strict runtime safety.',
  },
  {
    icon: Zap,
    title: 'Bridge & runtime work',
    text: 'Stabilising the Rust ↔ Go execution bridge and devnet infra on the Dharitri blockchain.',
  },
  {
    icon: Boxes,
    title: 'Full-stack capable',
    text: 'From smart contracts in Rust to CDNs, explorers, and modern React web apps.',
  },
  {
    icon: Code2,
    title: 'Open-source mindset',
    text: 'Refactored the Dharitri DNS smart contract to v1.0.0 with full fuzz-test coverage.',
  },
]

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="01 / About"
          title="Smart contract developer, VM-executor specialist."
          description="I work where Rust, Go, and smart contracts meet — engineering the vm-executor runtime bridge and high-performance blockchain tooling."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>{PROFILE.intro}</p>
              <p>
                My approach is simple: understand the execution layer, fix the
                hard low-level problems, then build the infra and tooling around
                it. I&apos;ve worked on the Dharitri Rust SDK and its vm-executor
                bridge, refactored a DNS smart contract to v1.0.0, shipped an
                Asset CDN microservice, and overhauled the Blockchain Explorer
                data pipeline — each one stress-tested on devnet before
                mainnet.
              </p>
              <p>
                Beyond the blockchain work, I build full-stack apps (React,
                TypeScript, Java) and care about clean, reproducible deployments
                with Docker. I also placed 1st in the coding competition at the
                CSET 2K24 Event and was runner-up at the CSET 2K25 Project Expo.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <MapPin className="size-4 text-primary" />
                {PROFILE.location}
              </span>
              <span className="inline-flex items-center gap-2">
                <Coffee className="size-4 text-primary" />
                Open to remote
              </span>
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center gap-2 text-foreground underline-offset-4 hover:underline"
              >
                {PROFILE.email}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              {highlights.map((h) => (
                <div
                  key={h.title}
                  className="group rounded-2xl border border-border/60 bg-card/40 p-5 transition-colors hover:border-primary/40"
                >
                  <div className="mb-3 inline-flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                    <h.icon className="size-5" />
                  </div>
                  <h3 className="font-semibold">{h.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {h.text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
