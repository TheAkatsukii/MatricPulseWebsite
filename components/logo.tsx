import { Activity } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Logo({
  className,
  showWordmark = true,
}: {
  className?: string
  showWordmark?: boolean
}) {
  return (
    <span className={cn('flex items-center gap-2.5', className)}>
      <span className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
        <Activity className="size-5" strokeWidth={2.5} aria-hidden="true" />
      </span>
      {showWordmark && (
        <span className="font-serif text-xl font-semibold tracking-tight text-primary">
          MatricPulse
        </span>
      )}
    </span>
  )
}
