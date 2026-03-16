import { Upload, Users, Download } from 'lucide-react'
import { AnimateOnScroll } from './animate-on-scroll'

const steps = [
  {
    number: '01',
    title: 'Upload',
    description:
      'Push your dataset through our API or dashboard. Images, text, audio, video — any format, any size.',
    icon: Upload,
  },
  {
    number: '02',
    title: 'Label',
    description:
      'Thousands of labelers work in parallel. Every item is reviewed by multiple people. Consensus drives quality.',
    icon: Users,
  },
  {
    number: '03',
    title: 'Download',
    description:
      'Get structured, validated results ready for model training. Hours turnaround, not weeks.',
    icon: Download,
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <AnimateOnScroll>
          <div className="mb-14 lg:mb-20">
            <span className="text-[11px] font-mono tracking-widest uppercase text-primary mb-3 block">
              How It Works
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Three steps to labeled data
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, i) => (
            <AnimateOnScroll key={step.number} delay={i * 0.12}>
              <div className="relative group">
                {/* Connector line (desktop only) */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[calc(100%+0.5rem)] w-[calc(100%-2rem)] h-px border-t border-dashed border-border/50" />
                )}

                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 flex items-center justify-center border border-border/50 rounded-[var(--radius)] bg-card/50 group-hover:border-primary/40 group-hover:bg-primary/[0.06] transition-colors">
                    <step.icon
                      size={22}
                      className="text-muted-foreground group-hover:text-primary transition-colors"
                    />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground/60 tracking-widest">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-2.5">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
