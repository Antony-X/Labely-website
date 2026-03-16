import type { Metadata } from 'next'
import { PricingTable } from '@/components/pricing-table'

export const metadata: Metadata = {
  title: 'Pricing — Labely',
  description:
    'Simple, usage-based pricing. Pay per labeled item with no subscriptions or minimums.',
}

export default function PricingPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-6">
        <PricingTable />
      </div>
    </div>
  )
}
