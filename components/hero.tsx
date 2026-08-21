import { MapPin } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-5xl items-center gap-12 px-5 pb-16 pt-14 md:grid-cols-2 md:pb-24 md:pt-20">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
            <MapPin className="size-3.5" aria-hidden="true" />
            Built for South African matrics
          </span>
          <h1 className="mt-5 text-balance font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Only your papers. A live countdown to every one.
          </h1>
          <p className="mt-5 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
            The official DBE timetables list 60+ subject variants. MatricPulse
            lets you pick your subjects once, then shows only the papers that
            matter to you — with a live countdown and local reminders.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#features"
              className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              See what it does
            </a>
            <a
              href="/privacy"
              className="inline-flex h-12 items-center justify-center rounded-full border border-border px-7 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
            >
              Privacy policy
            </a>
          </div>
          <p className="mt-5 text-sm text-muted-foreground">
            Offline-first · No accounts · No backend required
          </p>
        </div>

        <div className="flex justify-center md:justify-end">
          <PhonePreview />
        </div>
      </div>
    </section>
  )
}

function PhonePreview() {
  return (
    <div className="w-[280px] overflow-hidden rounded-[2.5rem] border-8 border-foreground/90 bg-card shadow-2xl">
      {/* App header */}
      <div className="bg-accent px-5 pb-4 pt-5">
        <div className="flex items-center gap-2">
          <span className="flex size-7 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <span className="text-xs font-bold">M</span>
          </span>
          <span className="font-serif text-lg font-semibold text-primary">
            MatricPulse
          </span>
        </div>
        <p className="mt-0.5 pl-9 text-sm text-muted-foreground">ThatDev</p>
      </div>

      {/* Countdown banner */}
      <div className="bg-primary px-5 py-8 text-center text-primary-foreground">
        <p className="text-sm opacity-90">Next paper in</p>
        <p className="mt-1 font-serif text-4xl font-semibold tracking-tight">
          27d 6h 43m
        </p>
        <p className="mt-3 text-sm opacity-90">Life Orientation (LO CAT)</p>
        <p className="text-xs opacity-70">2026-09-01 · 09:00</p>
      </div>

      {/* Schedule */}
      <div className="px-5 py-5">
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Thursday, 15 October
        </p>
        <div className="mt-3 flex items-center justify-between">
          <div>
            <p className="font-semibold text-foreground">English FAL</p>
            <p className="text-sm text-muted-foreground">P3</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium text-primary">Morning</p>
            <p className="text-foreground">09:00</p>
          </div>
        </div>
        <div className="mt-4 border-t border-border pt-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-foreground">Accounting</p>
              <p className="text-sm text-muted-foreground">P1</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-chart-4">Afternoon</p>
              <p className="text-foreground">14:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
