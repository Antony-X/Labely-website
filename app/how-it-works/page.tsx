import type { Metadata } from 'next'
import {
  Upload,
  Users,
  Download,
  ShieldCheck,
  Zap,
  BarChart3,
  Lock,
  Code2,
} from 'lucide-react'
import { AnimateOnScroll } from '@/components/animate-on-scroll'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How It Works — Labely',
  description:
    'Learn how Labely processes millions of data items through crowd-powered parallel labeling with built-in quality control.',
}

const pipeline = [
  {
    number: '01',
    title: 'Upload Your Dataset',
    icon: Upload,
    description:
      'Push data through our REST API or drag-and-drop dashboard. We accept images, text, audio, video, and structured data in any standard format.',
    details: [
      'CSV, JSON, JSONL, image archives, audio files',
      'Up to 10GB per upload via API, unlimited via streaming',
      'Define your labeling schema with our template builder',
      'Set quality thresholds and turnaround requirements',
    ],
  },
  {
    number: '02',
    title: 'Crowd-Powered Labeling',
    icon: Users,
    description:
      'Your dataset is split into micro-tasks and distributed across thousands of active labelers. Each item is independently reviewed by multiple people.',
    details: [
      'Items distributed across 10,000+ active labelers',
      'Each item reviewed by 3-5 independent annotators',
      'Consensus-based resolution for disagreements',
      'Real-time progress tracking from your dashboard',
    ],
  },
  {
    number: '03',
    title: 'Quality Assurance',
    icon: ShieldCheck,
    description:
      'Multi-layer quality control runs continuously. Gold-standard items are planted throughout every session. Labelers who rush or guess are flagged and downgraded.',
    details: [
      'Gold standard QA items planted in every batch',
      'Inter-annotator agreement tracking',
      'Automatic flagging of low-quality labelers',
      'Tiered labeler system rewards accuracy',
    ],
  },
  {
    number: '04',
    title: 'Download Results',
    icon: Download,
    description:
      'Get structured, validated data ready for model training. Export in your preferred format with full provenance metadata.',
    details: [
      'Export as CSV, JSON, JSONL, or custom format',
      'Full audit trail and provenance metadata',
      'Webhook notifications when batches complete',
      'Incremental delivery as items are labeled',
    ],
  },
]

const capabilities = [
  {
    icon: Zap,
    title: 'Speed',
    stat: '<4hr',
    description:
      'Average turnaround time. Datasets that take weeks with traditional vendors are processed in hours.',
  },
  {
    icon: BarChart3,
    title: 'Accuracy',
    stat: '98.7%',
    description:
      'Consensus accuracy across all task types. Multi-labeler review ensures no single error makes it through.',
  },
  {
    icon: Lock,
    title: 'Security',
    stat: 'SOC 2',
    description:
      'Enterprise-grade data security. Your data is encrypted in transit and at rest. We never train on customer data.',
  },
  {
    icon: Code2,
    title: 'Integration',
    stat: 'REST API',
    description:
      'Full programmatic access. Upload, configure, monitor, and download through our API. SDKs for Python and Node.js.',
  },
]

export default function HowItWorksPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Hero */}
        <AnimateOnScroll>
          <div className="mb-20 lg:mb-28 max-w-2xl">
            <span className="text-[11px] font-mono tracking-widest uppercase text-primary mb-3 block">
              How It Works
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-5">
              From upload to training-ready data
            </h1>
            <p className="text-muted-foreground text-base leading-relaxed">
              Labely turns raw datasets into structured, labeled training data
              through crowd-powered parallel processing with built-in quality
              control at every step.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Pipeline steps */}
        <div className="space-y-8 mb-20 lg:mb-28">
          {pipeline.map((step, i) => (
            <AnimateOnScroll key={step.number} delay={i * 0.08}>
              <div className="group grid md:grid-cols-[200px_1fr] gap-6 p-6 border border-border/40 rounded-[var(--radius)] bg-card/30 hover:border-primary/30 transition-colors">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 flex items-center justify-center border border-border/40 rounded-[var(--radius)] bg-card/50 group-hover:border-primary/40 transition-colors">
                      <step.icon
                        size={18}
                        className="text-muted-foreground group-hover:text-primary transition-colors"
                      />
                    </div>
                    <span className="text-xs font-mono text-muted-foreground/60 tracking-widest">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold">{step.title}</h3>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {step.description}
                  </p>
                  <ul className="space-y-2">
                    {step.details.map((detail) => (
                      <li
                        key={detail}
                        className="text-xs text-muted-foreground/80 flex items-start gap-2"
                      >
                        <span className="text-primary mt-0.5">&#8226;</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Capabilities */}
        <AnimateOnScroll>
          <div className="mb-12">
            <span className="text-[11px] font-mono tracking-widest uppercase text-primary mb-3 block">
              Platform Capabilities
            </span>
            <h2 className="text-3xl font-bold tracking-tight">
              Built for production ML teams
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {capabilities.map((cap, i) => (
            <AnimateOnScroll key={cap.title} delay={i * 0.08}>
              <div className="p-5 border border-border/40 rounded-[var(--radius)] bg-card/30 h-full">
                <cap.icon
                  size={20}
                  className="text-muted-foreground mb-4"
                />
                <div className="text-2xl font-bold text-primary mb-1 tabular-nums">
                  {cap.stat}
                </div>
                <h3 className="text-sm font-bold mb-1.5">{cap.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {cap.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* CTA */}
        <AnimateOnScroll>
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight mb-3">
              Start labeling in minutes
            </h2>
            <p className="text-muted-foreground text-sm mb-7 max-w-md mx-auto">
              Upload your first dataset and see the results yourself. No credit
              card required.
            </p>
            <Link
              href="/signup"
              className="inline-block px-7 py-3 bg-primary text-primary-foreground font-medium rounded-[var(--radius)] hover:opacity-90 transition-opacity text-sm"
            >
              Get Started Free
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  )
}
