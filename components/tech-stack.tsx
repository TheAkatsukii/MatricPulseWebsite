import { ShieldCheck, WifiOff, KeyRound } from 'lucide-react'

const stack = [
  'Kotlin',
  'Jetpack Compose',
  'Material 3',
  'DataStore',
  'Room',
  'WorkManager',
  'OkHttp',
  'AlarmManager',
]

const guarantees = [
  {
    icon: WifiOff,
    title: 'Offline-first',
    body: 'Your subjects, schedule, and downloads live on your device and work without a connection.',
  },
  {
    icon: KeyRound,
    title: 'No accounts',
    body: 'There is no sign-up and no password. Open the app and start tracking.',
  },
  {
    icon: ShieldCheck,
    title: 'No backend',
    body: 'MatricPulse has no server collecting your data. Nothing personal ever leaves your phone.',
  },
]

export function TechStack() {
  return (
    <section className="border-t border-border/70 bg-secondary/40">
      <div className="mx-auto max-w-5xl px-5 py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr]">
          <div>
            <h2 className="text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Built to stay out of your way
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              A native Android app engineered for reliability during the most
              important weeks of the year.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {stack.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border bg-card px-3.5 py-1.5 text-sm font-medium text-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-4">
            {guarantees.map((g) => (
              <div
                key={g.title}
                className="flex gap-4 rounded-2xl border border-border bg-card p-5"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
                  <g.icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-semibold text-foreground">{g.title}</h3>
                  <p className="mt-1 leading-relaxed text-muted-foreground">
                    {g.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
