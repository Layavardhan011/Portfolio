'use client'

import { MARQUEE_ITEMS } from '@/lib/portfolio-data'

export function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]
  return (
    <div className="relative border-y border-border/60 bg-card/30 py-4">
      <div className="mask-fade-edges overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-8">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-8">
              <span className="font-mono text-sm font-medium text-muted-foreground">
                {item}
              </span>
              <span className="text-primary/50">◆</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
