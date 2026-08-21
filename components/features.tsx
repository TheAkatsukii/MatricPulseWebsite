import {
  ListChecks,
  Timer,
  EyeOff,
  BellRing,
  UserPen,
  FolderDown,
  DatabaseZap,
} from 'lucide-react'

const features = [
  {
    icon: ListChecks,
    title: 'Guided onboarding',
    body: 'Enter your name and pick your subjects from a searchable multi-select. Do it once and you are set up.',
  },
  {
    icon: Timer,
    title: 'Live dashboard',
    body: 'A countdown to your next paper plus a personal schedule, grouped by date so nothing sneaks up on you.',
  },
  {
    icon: EyeOff,
    title: 'Auto-hide papers',
    body: 'Papers drop off your schedule automatically after their start time. No manual "mark as written".',
  },
  {
    icon: BellRing,
    title: 'Local reminders',
    body: 'Alerts 24 hours before, the morning of at 07:00, and one hour before each paper — all on-device.',
  },
  {
    icon: UserPen,
    title: 'Editable profile',
    body: 'Change your name, subjects, or preferred past-paper language whenever your setup changes.',
  },
  {
    icon: FolderDown,
    title: 'Study Vault',
    body: 'Every selected subject in one place. Download available past papers, or see a clear "not available yet" state.',
  },
  {
    icon: DatabaseZap,
    title: 'Flexible exam data',
    body: 'Import timetable and past-paper JSON from a file or fetch it from a URL. Bundled defaults stay as a fallback.',
  },
]

export function Features() {
  return (
    <section id="features" className="scroll-mt-20 border-t border-border/70">
      <div className="mx-auto max-w-5xl px-5 py-16 md:py-24">
        <div className="max-w-2xl">
          <h2 className="text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Everything a matric needs, nothing they don&apos;t
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            MatricPulse strips the national timetable down to your exams and
            keeps your study materials close.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-accent text-primary">
                <feature.icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                {feature.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
