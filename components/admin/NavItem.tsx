import Link from 'next/link'
import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

type NavItemProps = {
  href: string
  label: string
  icon: LucideIcon
  active: boolean
  collapsed?: boolean
  onNavigate?: () => void
}

export function NavItem({ href, label, icon: Icon, active, collapsed, onNavigate }: NavItemProps) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={cn(
        'group flex min-h-11 items-center gap-3 rounded-md px-3 text-sm text-[#c8d4e5] transition-colors',
        active ? 'bg-[#E07A2F] text-white' : 'hover:bg-[#1f2d44] hover:text-[#f3ede6]',
        collapsed && 'justify-center px-0',
      )}
      title={collapsed ? label : undefined}
    >
      <Icon className="h-4 w-4 shrink-0" />
      {!collapsed ? <span className="truncate">{label}</span> : null}
    </Link>
  )
}
