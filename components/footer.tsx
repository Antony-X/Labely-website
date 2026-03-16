import Link from 'next/link'

const columns = [
  {
    title: 'Product',
    links: [
      { href: '/how-it-works', label: 'How It Works' },
      { href: '/pricing', label: 'Pricing' },
      { href: '#', label: 'API Docs' },
      { href: '#', label: 'Status' },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: '#', label: 'About' },
      { href: '#', label: 'Blog' },
      { href: '#', label: 'Careers' },
      { href: '/contact', label: 'Contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { href: '#', label: 'Privacy' },
      { href: '#', label: 'Terms' },
      { href: '#', label: 'Security' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border/40">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="text-xl font-bold tracking-tight text-foreground"
            >
              <span className="text-primary">L</span>abely
            </Link>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-xs">
              Crowd-powered data labeling for ML teams. Fast, accurate,
              affordable.
            </p>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-4">
                {col.title}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-6 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground font-mono">
            &copy; {new Date().getFullYear()} Labely. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground font-mono">
            Built for ML teams that ship.
          </p>
        </div>
      </div>
    </footer>
  )
}
