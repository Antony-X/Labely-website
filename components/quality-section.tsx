import { CheckCircle2, BarChart3, ShieldCheck, Trophy } from 'lucide-react'
import { AnimateOnScroll } from './animate-on-scroll'

const features = [
  {
    icon: CheckCircle2,
    title: 'Multi-Labeler Consensus',
    description:
      'Every item is labeled by multiple independent workers. Agreement determines the final label — eliminating individual bias and errors.',
  },
  {
    icon: BarChart3,
    title: 'Gold Standard QA',
    description:
      'Known-answer items are planted throughout every session. Labelers who rush or guess get flagged automatically.',
  },
  {
    icon: Trophy,
    title: 'Tiered Labeler System',
    description:
      'Consistently accurate labelers rise to higher tiers with access to harder, better-paid tasks. Quality compounds over time.',
  },
  {
    icon: ShieldCheck,
    title: 'Real-Time Monitoring',
    description:
      'Track accuracy, inter-annotator agreement, and completion rates from your dashboard as your dataset is being processed.',
  },
]

export function QualitySection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-14 lg:gap-20 items-start">
          {/* Left: Text */}
          <AnimateOnScroll>
            <div className="lg:sticky lg:top-28">
              <span className="text-[11px] font-mono tracking-widest uppercase text-primary mb-3 block">
                Quality Control
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                No single person&apos;s answer is&nbsp;final
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
                Our multi-layer quality system ensures every labeled item meets
                your accuracy requirements. The output isn&apos;t crowd noise — it&apos;s
                validated, structured data ready for training.
              </p>

              {/* Accuracy indicator */}
              <div className="mt-8 p-4 border border-border/40 rounded-[var(--radius)] bg-card/30 inline-block">
                <div className="text-xs font-mono text-muted-foreground mb-2 tracking-wide">
                  AVG. CONSENSUS ACCURACY
                </div>
                <div className="text-3xl font-bold text-secondary tabular-nums">
                  98.7%
                </div>
                <div className="mt-2 h-1.5 w-48 bg-muted/30 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-secondary rounded-full"
                    style={{ width: '98.7%' }}
                  />
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Right: Feature cards */}
          <div className="space-y-5">
            {features.map((feature, i) => (
              <AnimateOnScroll key={feature.title} delay={i * 0.1}>
                <div className="group p-5 border border-border/40 rounded-[var(--radius)] bg-card/30 hover:border-primary/30 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center border border-border/40 rounded-[var(--radius)] bg-card/50 shrink-0 group-hover:border-primary/40 transition-colors">
                      <feature.icon
                        size={18}
                        className="text-muted-foreground group-hover:text-primary transition-colors"
                      />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold mb-1.5">
                        {feature.title}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
