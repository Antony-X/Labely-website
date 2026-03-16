import Link from 'next/link'
import { AnimateOnScroll } from './animate-on-scroll'

export function CtaSection() {
  return (
    <section className="py-20 lg:py-28 border-t border-border/30">
      <div className="mx-auto max-w-7xl px-6">
        <AnimateOnScroll>
          <div className="relative text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-mono tracking-widest uppercase text-primary mb-4 block">
              Get Started
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Ready to accelerate your ML&nbsp;pipeline?
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-9 max-w-lg mx-auto">
              Stop waiting weeks for labeled data. Upload your first dataset and
              see results in hours. No credit card required to start.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/signup"
                className="px-7 py-3 bg-primary text-primary-foreground font-medium rounded-[var(--radius)] hover:opacity-90 transition-opacity text-sm"
              >
                Start Free Trial
              </Link>
              <Link
                href="/contact"
                className="px-7 py-3 border border-border text-foreground font-medium rounded-[var(--radius)] hover:bg-muted/50 transition-colors text-sm"
              >
                Talk to Sales
              </Link>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
