import * as React from 'react'
import { cn } from '@/lib/utils'

type BadgeProps = React.HTMLAttributes<HTMLDivElement> & {
  tone?: 'active' | 'inactive' | 'owner' | 'default'
}

export function Badge({ className, tone = 'default', ...props }: BadgeProps) {
  const toneClasses: Record<NonNullable<BadgeProps['tone']>, string> = {
    active: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
    inactive: 'bg-zinc-500/15 text-zinc-300 border-zinc-500/30',
    owner: 'bg-[#E07A2F]/20 text-[#f6c79f] border-[#E07A2F]/30',
    default: 'bg-[#24344b] text-[#d4c9bc] border-[#324764]',
  }

  return <div className={cn('inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium', toneClasses[tone], className)} {...props} />
}
