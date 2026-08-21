import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Privacy Policy — MatricPulse',
  description:
    'How MatricPulse handles your data. Offline-first, no accounts, no backend — your information stays on your device.',
}

const LAST_UPDATED = '5 August 2026'
const CONTACT_EMAIL = 'matricpulse@thatdev.co.za'

const sections = [
  { id: 'summary', label: 'Summary' },
  { id: 'no-collection', label: 'Information we collect' },
  { id: 'on-device', label: 'Data stored on your device' },
  { id: 'network', label: 'Network activity' },
  { id: 'permissions', label: 'Permissions' },
  { id: 'children', label: "Children's privacy" },
  { id: 'retention', label: 'Data retention & deletion' },
  { id: 'changes', label: 'Changes to this policy' },
  { id: 'contact', label: 'Contact' },
]

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-5 py-14 md:py-20">
          <header>
            <p className="text-sm font-medium text-primary">Legal</p>
            <h1 className="mt-2 text-balance font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              This policy explains how the MatricPulse Android app handles your
              information.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Last updated: {LAST_UPDATED}
            </p>
          </header>

          <nav
            aria-label="On this page"
            className="mt-10 rounded-2xl border border-border bg-card p-5"
          >
            <p className="text-sm font-semibold text-foreground">
              On this page
            </p>
            <ol className="mt-3 grid gap-2 sm:grid-cols-2">
              {sections.map((s, i) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {i + 1}. {s.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="mt-12 space-y-12">
            <Section id="summary" title="Summary">
              <p>
                MatricPulse is designed to be private by default. It is an{' '}
                <strong className="font-semibold text-foreground">
                  offline-first
                </strong>{' '}
                app with{' '}
                <strong className="font-semibold text-foreground">
                  no user accounts
                </strong>{' '}
                and{' '}
                <strong className="font-semibold text-foreground">
                  no backend server
                </strong>{' '}
                operated by us. We do not collect, store, sell, or share your
                personal information. The details you enter — such as your name
                and chosen subjects — stay on your device.
              </p>
            </Section>

            <Section id="no-collection" title="Information we collect">
              <p>
                We do not collect any personal information. MatricPulse does not
                require you to create an account, sign in, or provide an email
                address or phone number. There is no analytics SDK, advertising
                identifier, or tracking service that reports your usage back to
                us or to third parties.
              </p>
              <p>
                The only information you provide is what you type into the app
                during onboarding and profile editing (your name and your
                selected subjects, and your preferred past-paper language). This
                information is never transmitted to us.
              </p>
            </Section>

            <Section id="on-device" title="Data stored on your device">
              <p>
                All of your information is stored locally on your device only:
              </p>
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  <strong className="font-semibold text-foreground">
                    Profile &amp; preferences
                  </strong>{' '}
                  (your name, selected subjects, paper language, and any remote
                  config URLs you set) are stored using Android DataStore.
                </li>
                <li>
                  <strong className="font-semibold text-foreground">
                    Study Vault downloads
                  </strong>{' '}
                  (past papers and memos you download) and their status are
                  stored using a local Room database and your device&apos;s file
                  storage.
                </li>
                <li>
                  <strong className="font-semibold text-foreground">
                    Exam reminders
                  </strong>{' '}
                  are scheduled locally on your device using AlarmManager. The
                  notifications are generated on-device and are not sent through
                  any external service.
                </li>
              </ul>
              <p>
                This data stays on your device and is under your control. It is
                removed when you clear the app&apos;s data or uninstall the app.
              </p>
            </Section>

            <Section id="network" title="Network activity">
              <p>
                MatricPulse works offline, but a few optional features make
                network requests. When they do, the request goes directly from
                your device to the relevant server — never through us:
              </p>
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  <strong className="font-semibold text-foreground">
                    Downloading past papers and memos
                  </strong>{' '}
                  in the Study Vault fetches files from the source URLs defined
                  in the exam-data configuration.
                </li>
                <li>
                  <strong className="font-semibold text-foreground">
                    Fetching exam data from a URL
                  </strong>{' '}
                  downloads timetable or past-paper JSON when you choose to
                  import it from a remote address you provide or that is bundled
                  with the app.
                </li>
              </ul>
              <p>
                As with any internet request, the server you connect to may
                automatically receive standard technical information such as
                your IP address and device/browser user-agent. These servers are
                operated by third parties (for example, the source hosting the
                past papers or the URL you enter), and their handling of that
                information is governed by their own privacy policies. If you
                never use these features, MatricPulse makes no network requests.
              </p>
            </Section>

            <Section id="permissions" title="Permissions">
              <p>
                MatricPulse requests only the permissions it needs to do its
                job:
              </p>
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  <strong className="font-semibold text-foreground">
                    Notifications
                  </strong>{' '}
                  — to show your exam reminders (24 hours before, the morning of
                  at 07:00, and 1 hour before each paper).
                </li>
                <li>
                  <strong className="font-semibold text-foreground">
                    Alarms &amp; reminders
                  </strong>{' '}
                  — to schedule those reminders reliably at the correct times.
                </li>
                <li>
                  <strong className="font-semibold text-foreground">
                    Internet access
                  </strong>{' '}
                  — used only for the optional download and fetch features
                  described above.
                </li>
              </ul>
              <p>
                You can review or revoke these permissions at any time in your
                Android system settings.
              </p>
            </Section>

            <Section id="children" title="Children's privacy">
              <p>
                MatricPulse is intended for matric (Grade 12) students preparing
                for their National Senior Certificate examinations. Because the
                app does not collect or transmit any personal information, no
                personal data is gathered from any user regardless of age.
              </p>
            </Section>

            <Section id="retention" title="Data retention & deletion">
              <p>
                We do not retain any of your data because we never receive it.
                Everything created by the app lives on your device. To delete
                it, you can:
              </p>
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  Edit or clear your profile and subjects within the app, or
                  reset exam data to the bundled default; or
                </li>
                <li>
                  Clear the app&apos;s storage from Android system settings; or
                </li>
                <li>Uninstall the app, which removes all associated data.</li>
              </ul>
            </Section>

            <Section id="changes" title="Changes to this policy">
              <p>
                We may update this privacy policy from time to time — for
                example, if the app gains new features. When we do, we will
                revise the &ldquo;Last updated&rdquo; date at the top of this
                page. We encourage you to review this page periodically.
              </p>
            </Section>

            <Section id="contact" title="Contact">
              <p>
                If you have any questions about this privacy policy or how
                MatricPulse handles data, you can reach us at:
              </p>
              <p>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="font-medium text-primary underline underline-offset-4"
                >
                  {CONTACT_EMAIL}
                </a>
              </p>
            </Section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

function Section({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="font-serif text-2xl font-semibold tracking-tight text-foreground">
        {title}
      </h2>
      <div className="mt-4 space-y-4 leading-relaxed text-muted-foreground">
        {children}
      </div>
    </section>
  )
}
