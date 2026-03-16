import type { Metadata } from 'next'
import { Oxanium, Source_Code_Pro } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import './globals.css'

const oxanium = Oxanium({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Labely — Crowd-Powered Data Labeling',
  description:
    'Label millions of data points in hours, not weeks. Upload your dataset and thousands of skilled labelers process it in parallel with quality-checked results.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${oxanium.variable} ${sourceCodePro.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
