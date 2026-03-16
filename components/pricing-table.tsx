import { AnimateOnScroll } from './animate-on-scroll'
import { Check } from 'lucide-react'
import Link from 'next/link'

const tiers = [
  {
    name: 'Growth',
    description: 'For teams getting started with data labeling.',
    highlight: false,
    cta: 'Start Free',
    href: '/signup',
    features: [
      '1,000 free labels to start',
      'All task types',
      'API access',
      'Standard turnaround',
      'Email support',
      'Multi-labeler consensus',
    ],
  },
  {
    name: 'Scale',
    description: 'For teams with production ML pipelines.',
    highlight: true,
    cta: 'Start Free',
    href: '/signup',
    features: [
      'Everything in Growth',
      'Volume discounts up to 40%',
      'Priority processing',
      'Dedicated support',
      'Webhook notifications',
      'Custom labeling instructions',
      'Quality SLA guarantee',
    ],
  },
  {
    name: 'Enterprise',
    description: 'For organizations with compliance needs.',
    highlight: false,
    cta: 'Contact Sales',
    href: '/contact',
    features: [
      'Everything in Scale',
      'Custom pricing',
      'Dedicated labeler pools',
      'SSO & SAML',
      'SOC 2 compliance',
      'On-prem data processing',
      'Account manager',
      '99.9% uptime SLA',
    ],
  },
]

const perItemRates = [
  { task: 'Image Classification', base: '$0.03', volume: '$0.018' },
  { task: 'Object Detection', base: '$0.08', volume: '$0.048' },
  { task: 'Text Classification', base: '$0.02', volume: '$0.012' },
  { task: 'Sentiment Analysis', base: '$0.025', volume: '$0.015' },
  { task: 'Audio Transcription', base: '$0.12', volume: '$0.072' },
  { task: 'Content Moderation', base: '$0.02', volume: '$0.012' },
  { task: 'Named Entity Recognition', base: '$0.04', volume: '$0.024' },
  { task: 'Semantic Segmentation', base: '$0.15', volume: '$0.09' },
]

export function PricingTable() {
  return (
    <div className="space-y-20 lg:space-y-28">
      {/* Tier cards */}
      <div>
        <AnimateOnScroll>
          <div className="mb-14 lg:mb-20">
            <span className="text-[11px] font-mono tracking-widest uppercase text-primary mb-3 block">
              Plans
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
              Simple, usage-based pricing
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-lg">
              Pay per labeled item. No subscriptions, no minimums, no surprises.
              Start free and scale when you&apos;re ready.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-5">
          {tiers.map((tier, i) => (
            <AnimateOnScroll key={tier.name} delay={i * 0.1}>
              <div
                className={`relative p-6 border rounded-[var(--radius)] h-full flex flex-col ${
                  tier.highlight
                    ? 'border-primary/50 bg-primary/[0.04]'
                    : 'border-border/40 bg-card/30'
                }`}
              >
                {tier.highlight && (
                  <span className="absolute -top-3 left-6 px-2.5 py-0.5 text-[10px] font-mono tracking-widest uppercase bg-primary text-primary-foreground rounded-full">
                    Popular
                  </span>
                )}
                <h3 className="text-lg font-bold mb-1">{tier.name}</h3>
                <p className="text-xs text-muted-foreground mb-6">
                  {tier.description}
                </p>
                <ul className="space-y-2.5 mb-8 flex-1">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-xs text-muted-foreground"
                    >
                      <Check
                        size={14}
                        className="text-secondary shrink-0 mt-0.5"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={tier.href}
                  className={`block text-center py-2.5 text-sm font-medium rounded-[var(--radius)] transition-opacity ${
                    tier.highlight
                      ? 'bg-primary text-primary-foreground hover:opacity-90'
                      : 'border border-border text-foreground hover:bg-muted/50'
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>

      {/* Per-item rate table */}
      <div>
        <AnimateOnScroll>
          <div className="mb-10">
            <span className="text-[11px] font-mono tracking-widest uppercase text-primary mb-3 block">
              Per-Item Rates
            </span>
            <h3 className="text-2xl font-bold tracking-tight mb-3">
              Transparent per-item pricing
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-lg">
              Base rates apply to all plans. Volume rates kick in automatically
              at 100K+ items per month.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <div className="border border-border/40 rounded-[var(--radius)] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/40 bg-card/30">
                    <th className="text-left font-mono text-[11px] uppercase tracking-widest text-muted-foreground px-5 py-3">
                      Task Type
                    </th>
                    <th className="text-right font-mono text-[11px] uppercase tracking-widest text-muted-foreground px-5 py-3">
                      Base Rate
                    </th>
                    <th className="text-right font-mono text-[11px] uppercase tracking-widest text-muted-foreground px-5 py-3">
                      100K+ Rate
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {perItemRates.map((rate, i) => (
                    <tr
                      key={rate.task}
                      className={
                        i < perItemRates.length - 1
                          ? 'border-b border-border/20'
                          : ''
                      }
                    >
                      <td className="px-5 py-3 text-foreground text-sm">
                        {rate.task}
                      </td>
                      <td className="px-5 py-3 text-right font-mono text-muted-foreground">
                        {rate.base}
                      </td>
                      <td className="px-5 py-3 text-right font-mono text-secondary">
                        {rate.volume}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </AnimateOnScroll>
      </div>

      {/* Comparison */}
      <AnimateOnScroll>
        <div className="p-6 sm:p-8 border border-border/40 rounded-[var(--radius)] bg-card/30">
          <h3 className="text-lg font-bold mb-2">
            How does this compare to enterprise vendors?
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl mb-6">
            Traditional labeling services charge $10,000–$50,000+ per project
            with weeks of lead time. Labely&apos;s crowd-powered model delivers the
            same quality at 60-80% lower cost with hours turnaround.
          </p>
          <div className="grid sm:grid-cols-3 gap-5">
            <div>
              <div className="text-2xl font-bold text-primary tabular-nums">
                60–80%
              </div>
              <div className="text-xs text-muted-foreground font-mono tracking-wide mt-1">
                LOWER COST
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-secondary tabular-nums">
                50x
              </div>
              <div className="text-xs text-muted-foreground font-mono tracking-wide mt-1">
                FASTER DELIVERY
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent tabular-nums">
                98.7%
              </div>
              <div className="text-xs text-muted-foreground font-mono tracking-wide mt-1">
                SAME ACCURACY
              </div>
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </div>
  )
}
