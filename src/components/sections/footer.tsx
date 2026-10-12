'use client'

import Link from 'next/link'
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Hexagon,
  ArrowUp,
} from 'lucide-react'

import { NAV_LINKS, PROFILE } from '@/lib/portfolio-data'

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/layavardhanreddy/', icon: Linkedin },
  { label: 'GitHub', href: 'https://github.com/layavardhanreddy024', icon: Github },
  { label: 'Email', href: 'mailto:layavardhanreddy024@gmail.com', icon: Mail },
  { label: 'Phone', href: 'tel:+919866367885', icon: Phone },
]

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border/60 bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="#top" className="group inline-flex items-center gap-2.5">
              <span className="relative grid size-9 place-items-center">
                <Hexagon className="size-9 text-primary transition-transform duration-500 group-hover:rotate-[60deg]" />
                <span className="absolute inset-0 grid place-items-center font-mono text-[13px] font-bold text-primary-foreground">
                  {PROFILE.initials}
                </span>
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-sm font-semibold tracking-tight">
                  {PROFILE.name}
                </span>
                <span className="text-[11px] font-mono text-muted-foreground">
                  {PROFILE.role}
                </span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Building &amp; engineering secure decentralized systems. Available
              for smart contracts and vm-executor development.
            </p>
            <div className="mt-5 flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="inline-flex size-9 items-center justify-center rounded-lg border border-border/60 bg-card/40 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                >
                  <s.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div className="md:col-span-3">
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Navigate
            </h4>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Get in touch
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {PROFILE.email}
                </a>
              </li>
              <li className="text-muted-foreground">{PROFILE.location}</li>
              <li className="flex items-center gap-2 text-primary">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-primary" />
                </span>
                {PROFILE.availability}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {PROFILE.name}. Built with Next.js,
            TypeScript &amp; a lot of gas.
          </p>
          <Link
            href="#top"
            className="group inline-flex items-center gap-2 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Back to top
            <span className="inline-flex size-7 items-center justify-center rounded-full border border-border/60 transition-colors group-hover:border-primary/40 group-hover:text-primary">
              <ArrowUp className="size-3.5" />
            </span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
