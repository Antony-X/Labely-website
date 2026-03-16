'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from './theme-toggle'
import { cn } from '@/lib/utils'

const links = [
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-foreground"
        >
          <span className="text-primary">L</span>abely
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm transition-colors',
                pathname === link.href
                  ? 'text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
          <Link
            href="/login"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-[var(--radius)] hover:opacity-90 transition-opacity"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="text-foreground"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-xl px-6 py-5 space-y-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                'block text-sm',
                pathname === link.href
                  ? 'text-foreground'
                  : 'text-muted-foreground'
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/login"
            onClick={() => setOpen(false)}
            className="block text-sm text-muted-foreground"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            onClick={() => setOpen(false)}
            className="block px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-[var(--radius)] text-center"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  )
}
