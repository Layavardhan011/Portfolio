'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  ArrowUpRight,
  Github,
  Twitter,
  Linkedin,
  FileText,
  Sparkles,
  ShieldCheck,
  Mail,
  Phone,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { PROFILE } from '@/lib/portfolio-data'

const socialIcons: Record<string, React.ElementType> = {
  GitHub: Github,
  'X / Twitter': Twitter,
  LinkedIn: Linkedin,
  Mirror: FileText,
  Email: Mail,
  Phone: Phone,
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      {/* Animated grid + glow background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid animate-grid-pan opacity-60" />
        <div className="absolute left-1/2 top-[-12%] size-[720px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Left: copy */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-medium text-primary">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-primary" />
                </span>
                {PROFILE.availability}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-6 text-balance text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
            >
              <span className="block text-foreground">{PROFILE.name}</span>
              <span className="mt-2 block text-gradient-emerald">
                {PROFILE.role}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground"
            >
              {PROFILE.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Button
                asChild
                size="lg"
                className="group rounded-full bg-primary px-6 text-primary-foreground hover:bg-primary/90"
              >
                <Link href="#projects">
                  View work
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full px-6"
              >
                <Link href="#contact">
                  Hire me
                  <ArrowUpRight className="size-4" />
                </Link>
              </Button>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              {PROFILE.socials.map((s) => {
                const Icon = socialIcons[s.label] ?? FileText
                return (
                  <Link
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/40 px-4 py-2 text-sm text-muted-foreground transition-all hover:border-primary/40 hover:text-foreground"
                  >
                    <Icon className="size-4 transition-colors group-hover:text-primary" />
                    <span>{s.label}</span>
                  </Link>
                )
              })}
            </motion.div>
          </div>

          {/* Right: terminal / code card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5"
          >
            <HeroTerminal />
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="pointer-events-none absolute inset-x-0 bottom-6 hidden justify-center sm:flex">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-[11px] font-mono uppercase tracking-[0.2em]">
            Scroll
          </span>
          <span className="flex h-9 w-5 items-start justify-center rounded-full border border-border/60 p-1.5">
            <motion.span
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
              className="size-1.5 rounded-full bg-primary"
            />
          </span>
        </motion.div>
      </div>
    </section>
  )
}

function HeroTerminal() {
  return (
    <div className="relative">
      {/* glow */}
      <div className="absolute -inset-4 -z-10 rounded-3xl bg-primary/10 blur-2xl" />
      <div className="glass overflow-hidden rounded-2xl border border-border/60 shadow-2xl">
        {/* header */}
        <div className="flex items-center gap-2 border-b border-border/60 bg-background/40 px-4 py-3">
          <span className="size-3 rounded-full bg-red-500/70" />
          <span className="size-3 rounded-full bg-amber-400/70" />
          <span className="size-3 rounded-full bg-emerald-500/70" />
          <span className="ml-3 font-mono text-xs text-muted-foreground">
            layavardhan@dharitri: ~/contracts
          </span>
        </div>
        {/* body */}
        <div className="space-y-2 p-5 font-mono text-[13px] leading-relaxed">
          <p className="text-muted-foreground">
            <span className="text-primary">$</span> whoami --onchain
          </p>
          <p className="text-foreground">
            <span className="text-amber-300">role:</span>{' '}
            <span className="text-emerald-300">&quot;Blockchain Developer&quot;</span>
          </p>
          <p className="text-foreground">
            <span className="text-amber-300">chain:</span>{' '}
            <span className="text-emerald-300">&quot;Dharitri&quot;</span>
          </p>
          <p className="text-foreground">
            <span className="text-amber-300">focus:</span>{' '}
            <span className="text-emerald-300">[&quot;SmartContracts&quot;, &quot;vm-executor&quot;, &quot;Rust&quot;, &quot;Go&quot;]</span>
          </p>
          <p className="text-muted-foreground">
            <span className="text-primary">$</span> build --lang rust,go,ts
          </p>
          <p className="text-foreground">
            <span className="text-violet-300">bridge:</span>{' '}
            <span className="text-foreground">vm-executor</span>{' '}
            <span className="text-muted-foreground">{'// Rust ↔ Go'}</span>
          </p>
          <p className="text-foreground">
            <span className="text-violet-300">runtime:</span>{' '}
            <span className="text-emerald-300">&quot;Go VM + WebAssembly&quot;</span>
          </p>
          <p className="text-muted-foreground">
            <span className="text-primary">$</span> deploy --env devnet,mainnet
          </p>
          <p className="flex items-center gap-2 text-emerald-300">
            <ShieldCheck className="size-4" />
            <span>verified &amp; live</span>
            <motion.span
              animate={{ opacity: [1, 0.2, 1] }}
              transition={{ duration: 1.1, repeat: Infinity }}
              className="ml-1 inline-block size-2.5 bg-emerald-400"
            />
          </p>
        </div>
        {/* footer badges */}
        <div className="flex flex-wrap items-center gap-2 border-t border-border/60 bg-background/40 px-5 py-3">
          <span className="inline-flex items-center gap-1.5 rounded-md bg-primary/10 px-2 py-1 font-mono text-[11px] text-primary">
            <Sparkles className="size-3" /> gas-optimized
          </span>
          <span className="rounded-md bg-amber-400/10 px-2 py-1 font-mono text-[11px] text-amber-300">
            audited
          </span>
          <span className="rounded-md bg-violet-500/10 px-2 py-1 font-mono text-[11px] text-violet-300">
            open-source
          </span>
        </div>
      </div>
    </div>
  )
}
