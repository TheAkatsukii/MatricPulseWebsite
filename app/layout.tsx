import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist } from 'next/font/google'
import { Fraunces } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'MatricPulse — Personalised NSC exam tracker',
  description:
    'MatricPulse is a personalised NSC exam tracker for South African matric students. Pick your subjects once, then see only your papers with a live countdown, local reminders, and a Study Vault of past papers. Offline-first, no accounts.',
  keywords: [
    'MatricPulse',
    'NSC exam tracker',
    'matric timetable',
    'South Africa matric',
    'DBE timetable',
    'past papers',
    'exam countdown',
  ],
  generator: 'v0.app',
  openGraph: {
    title: 'MatricPulse — Personalised NSC exam tracker',
    description:
      'Pick your subjects once, then see only your papers with a live countdown and local reminders. Offline-first, no accounts.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#1f6b4d',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`light ${geistSans.variable} ${fraunces.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
