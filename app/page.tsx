import { Hero } from '@/components/hero'
import { StatsCounter } from '@/components/stats-counter'
import { HowItWorksSection } from '@/components/how-it-works-section'
import { TaskTypes } from '@/components/task-types'
import { QualitySection } from '@/components/quality-section'
import { CtaSection } from '@/components/cta-section'

export default function Home() {
  return (
    <>
      <Hero />
      <StatsCounter />
      <HowItWorksSection />
      <TaskTypes />
      <QualitySection />
      <CtaSection />
    </>
  )
}
