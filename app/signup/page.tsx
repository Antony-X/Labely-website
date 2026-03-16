'use client'

import type { FormEvent } from 'react'
import Link from 'next/link'
import { AnimateOnScroll } from '@/components/animate-on-scroll'

export default function SignupPage() {
  function handleSubmit(e: FormEvent) {
    e.preventDefault()
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-32">
      <AnimateOnScroll>
        <div className="w-full max-w-sm">
          {/* Logo */}
          <div className="text-center mb-10">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight text-foreground"
            >
              <span className="text-primary">L</span>abely
            </Link>
            <p className="text-sm text-muted-foreground mt-2">
              Start labeling data in minutes
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="company"
                className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2"
              >
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                required
                className="w-full px-4 py-2.5 text-sm bg-card/30 border border-border/50 rounded-[var(--radius)] text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:outline-none transition-colors"
                placeholder="Acme Corp"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2"
              >
                Work Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2.5 text-sm bg-card/30 border border-border/50 rounded-[var(--radius)] text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:outline-none transition-colors"
                placeholder="you@company.com"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                minLength={8}
                className="w-full px-4 py-2.5 text-sm bg-card/30 border border-border/50 rounded-[var(--radius)] text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:outline-none transition-colors"
                placeholder="8+ characters"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 bg-primary text-primary-foreground font-medium rounded-[var(--radius)] hover:opacity-90 transition-opacity text-sm mt-2"
            >
              Create Account
            </button>

            <p className="text-[11px] text-muted-foreground/70 text-center leading-relaxed">
              By signing up you agree to our{' '}
              <Link href="#" className="underline hover:text-muted-foreground">
                Terms
              </Link>{' '}
              and{' '}
              <Link href="#" className="underline hover:text-muted-foreground">
                Privacy Policy
              </Link>
              .
            </p>
          </form>

          <p className="text-center text-xs text-muted-foreground mt-6">
            Already have an account?{' '}
            <Link href="/login" className="text-primary hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </AnimateOnScroll>
    </div>
  )
}
