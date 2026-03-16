'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { motion, useInView } from 'motion/react'

export function Hero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-dot-grid" />
      <div className="glow-blob top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/[0.06]" />
      <div className="glow-blob bottom-1/4 right-1/3 w-[400px] h-[400px] bg-accent/[0.05]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-[1fr_0.85fr] gap-16 items-center">
          {/* Text content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55 }}
            >
              <span className="inline-block px-3 py-1 text-[11px] font-mono tracking-widest uppercase border border-primary/30 text-primary rounded-full mb-7">
                Crowd-Powered Data Labeling
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.1] mb-6"
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.08 }}
            >
              Label millions of
              <br />
              data points.{' '}
              <span className="text-primary">In hours,&nbsp;not&nbsp;weeks.</span>
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg text-muted-foreground max-w-xl mb-9 leading-relaxed"
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.16 }}
            >
              Upload your dataset and thousands of skilled labelers process it in
              parallel &mdash; delivering structured, quality-checked results at a
              fraction of enterprise pricing.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mb-9"
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.24 }}
            >
              <Link
                href="/signup"
                className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-[var(--radius)] hover:opacity-90 transition-opacity text-sm"
              >
                Start Free
              </Link>
              <Link
                href="/pricing"
                className="px-6 py-3 border border-border text-foreground font-medium rounded-[var(--radius)] hover:bg-muted/50 transition-colors text-sm"
              >
                See Pricing
              </Link>
            </motion.div>

            <motion.p
              className="text-xs text-muted-foreground font-mono tracking-wide"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.55, delay: 0.4 }}
            >
              No credit card required&ensp;&middot;&ensp;10,000+ active
              labelers&ensp;&middot;&ensp;98.7% accuracy
            </motion.p>
          </div>

          {/* Labeling matrix visualization */}
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            <LabelingMatrix />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function LabelingMatrix() {
  const cells = Array.from({ length: 70 }, (_, i) => {
    const row = Math.floor(i / 10)
    const col = i % 10
    const delay = (row * 0.25 + col * 0.12 + ((i * 7) % 13) * 0.15).toFixed(2)
    const duration = (3.5 + ((i * 3) % 7) * 0.5).toFixed(2)
    return { delay, duration }
  })

  return (
    <div className="relative p-6 sm:p-8 border border-border/30 rounded-[var(--radius)] bg-card/30 backdrop-blur-sm">
      {/* Header */}
      <div className="flex items-center gap-2.5 mb-5 pb-4 border-b border-border/30">
        <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
        <span className="text-[11px] font-mono text-muted-foreground tracking-wide">
          Processing dataset_v3.json &mdash; 2,847 items
        </span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-10 gap-1.5">
        {cells.map((cell, i) => (
          <div
            key={i}
            className="aspect-square rounded-[2px]"
            style={{
              animation: `label-cycle ${cell.duration}s ${cell.delay}s infinite ease-in-out`,
            }}
          />
        ))}
      </div>

      {/* Footer stats */}
      <div className="flex items-center justify-between mt-5 pt-4 border-t border-border/30 text-[11px] font-mono text-muted-foreground tracking-wide">
        <span>
          <span className="text-secondary">&#9679;</span> 1,923 labeled
        </span>
        <span>
          <span className="text-primary">&#9679;</span> 412 in progress
        </span>
        <span>
          <span className="text-muted-foreground/60">&#9679;</span> 512 pending
        </span>
      </div>
    </div>
  )
}
