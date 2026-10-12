'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => setMounted(true), [])

  const isDark = resolvedTheme === 'dark'

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="rounded-full border border-border/60 bg-background/40 backdrop-blur hover:bg-accent"
    >
      {mounted ? (
        isDark ? (
          <Sun className="size-[18px] text-amber-300" />
        ) : (
          <Moon className="size-[18px] text-primary" />
        )
      ) : (
        <Sun className="size-[18px]" />
      )}
    </Button>
  )
}
