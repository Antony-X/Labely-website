'use client'

import type { FormEvent } from 'react'
import { useState } from 'react'
import { AnimateOnScroll } from '@/components/animate-on-scroll'
import { Send } from 'lucide-react'

const taskTypeOptions = [
  'Image Classification',
  'Object Detection',
  'Text Classification',
  'Sentiment Analysis',
  'Audio Transcription',
  'Content Moderation',
  'Named Entity Recognition',
  'Semantic Segmentation',
  'Other / Custom',
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="pt-32 pb-20">
      <div className="mx-auto max-w-3xl px-6">
        <AnimateOnScroll>
          <div className="mb-12">
            <span className="text-[11px] font-mono tracking-widest uppercase text-primary mb-3 block">
              Contact
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              Get in touch
            </h1>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-lg">
              Tell us about your labeling needs. We&apos;ll respond within one
              business day with a plan tailored to your dataset and timeline.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          {submitted ? (
            <div className="p-8 border border-secondary/40 rounded-[var(--radius)] bg-secondary/[0.06] text-center">
              <div className="text-secondary text-3xl mb-3">&#10003;</div>
              <h2 className="text-xl font-bold mb-2">Message sent</h2>
              <p className="text-sm text-muted-foreground">
                We&apos;ll get back to you within one business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
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
                    htmlFor="name"
                    className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2.5 text-sm bg-card/30 border border-border/50 rounded-[var(--radius)] text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:outline-none transition-colors"
                    placeholder="Jane Smith"
                  />
                </div>
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
                  placeholder="jane@acme.com"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="taskType"
                    className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2"
                  >
                    Task Type
                  </label>
                  <select
                    id="taskType"
                    name="taskType"
                    className="w-full px-4 py-2.5 text-sm bg-card/30 border border-border/50 rounded-[var(--radius)] text-foreground focus:border-primary/50 focus:outline-none transition-colors"
                  >
                    {taskTypeOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="volume"
                    className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2"
                  >
                    Estimated Volume
                  </label>
                  <select
                    id="volume"
                    name="volume"
                    className="w-full px-4 py-2.5 text-sm bg-card/30 border border-border/50 rounded-[var(--radius)] text-foreground focus:border-primary/50 focus:outline-none transition-colors"
                  >
                    <option>Less than 10K items</option>
                    <option>10K – 100K items</option>
                    <option>100K – 1M items</option>
                    <option>1M+ items</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2"
                >
                  Tell Us More
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2.5 text-sm bg-card/30 border border-border/50 rounded-[var(--radius)] text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:outline-none transition-colors resize-y"
                  placeholder="Describe your dataset and labeling requirements..."
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-7 py-3 bg-primary text-primary-foreground font-medium rounded-[var(--radius)] hover:opacity-90 transition-opacity text-sm"
              >
                Send Message
                <Send size={14} />
              </button>
            </form>
          )}
        </AnimateOnScroll>
      </div>
    </div>
  )
}
