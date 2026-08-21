import Link from 'next/link'
import { Logo } from '@/components/logo'

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Logo />
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
            A personalised NSC exam tracker for South African matric students.
          </p>
        </div>
        <nav className="flex flex-col gap-2 text-sm sm:items-end">
          <Link
            href="/privacy"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Privacy policy
          </Link>
          <span className="text-muted-foreground">
            © {new Date().getFullYear()} MatricPulse
          </span>
        </nav>
      </div>
    </footer>
  )
}
