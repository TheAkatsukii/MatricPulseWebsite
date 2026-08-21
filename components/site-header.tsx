import Link from 'next/link'
import { Logo } from '@/components/logo'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5">
        <Link href="/" aria-label="MatricPulse home">
          <Logo />
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link
            href="/#features"
            className="hidden text-muted-foreground transition-colors hover:text-foreground sm:inline"
          >
            Features
          </Link>
          <Link
            href="/privacy"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Privacy
          </Link>
        </nav>
      </div>
    </header>
  )
}
