'use client'

import type { FormEvent } from 'react'
import Link from 'next/link'
import { AnimateOnScroll } from '@/components/animate-on-scroll'

export default function LoginPage() {
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
              Welcome back
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2"
              >
                Email
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
              <div className="flex items-center justify-between mb-2">
                <label
                  htmlFor="password"
                  className="block text-xs font-mono uppercase tracking-widest text-muted-foreground"
                >
                  Password
                </label>
                <Link
                  href="#"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  Forgot?
                </Link>
              </div>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="w-full px-4 py-2.5 text-sm bg-card/30 border border-border/50 rounded-[var(--radius)] text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:outline-none transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 bg-primary text-primary-foreground font-medium rounded-[var(--radius)] hover:opacity-90 transition-opacity text-sm mt-2"
            >
              Log in
            </button>
          </form>

          <p className="text-center text-xs text-muted-foreground mt-6">
            Don&apos;t have an account?{' '}
            <Link
              href="/signup"
              className="text-primary hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </AnimateOnScroll>
    </div>
  )
}
