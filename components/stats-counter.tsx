'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { useInView } from 'motion/react'

function AnimatedNumber({
  target,
  suffix = '',
  prefix = '',
  decimals = 0,
}: {
  target: number
  suffix?: string
  prefix?: string
  decimals?: number
}) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const hasAnimated = useRef(false)

  const animate = useCallback(() => {
    if (hasAnimated.current) return
    hasAnimated.current = true

    const duration = 2000
    const start = performance.now()

    const step = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(eased * target)

      if (progress < 1) {
        requestAnimationFrame(step)
      } else {
        setCount(target)
      }
    }

    requestAnimationFrame(step)
  }, [target])

  useEffect(() => {
    if (isInView) animate()
  }, [isInView, animate])

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </span>
  )
}

const stats = [
  { target: 10, suffix: 'K+', label: 'Active Labelers', decimals: 0 },
  { target: 2, suffix: 'M+', label: 'Items Labeled', decimals: 0 },
  { target: 4, suffix: 'hr', label: 'Avg. Turnaround', decimals: 0, prefix: '<' },
  { target: 98.7, suffix: '%', label: 'Consensus Accuracy', decimals: 1 },
]

export function StatsCounter() {
  return (
    <section className="relative py-16 lg:py-20 border-y border-border/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-1.5">
                <AnimatedNumber
                  target={stat.target}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  decimals={stat.decimals}
                />
              </div>
              <div className="text-[11px] text-muted-foreground font-mono uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
