'use client'

import { LayoutDashboard, Home, Info, Phone, FolderTree, UtensilsCrossed, Image, CalendarDays, Settings } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { NavItem } from '@/components/admin/NavItem'

type SidebarProps = {
  collapsed?: boolean
  onNavigate?: () => void
}

const sections = [
  {
    label: 'OVERVIEW',
    items: [{ href: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard }],
  },
  {
    label: 'WEBSITE',
    items: [
      { href: '/admin/website/home', label: 'Home', icon: Home },
      { href: '/admin/website/about', label: 'About', icon: Info },
      { href: '/admin/website/contact', label: 'Contact', icon: Phone },
    ],
  },
  {
    label: 'MENU',
    items: [
      { href: '/admin/menu/categories', label: 'Categories', icon: FolderTree },
      { href: '/admin/menu/items', label: 'Items', icon: UtensilsCrossed },
      { href: '/admin/menu/photos', label: 'Photos', icon: Image },
    ],
  },
  {
    label: 'GROWTH',
    items: [{ href: '/admin/specials', label: 'Specials', icon: CalendarDays }],
  },
  {
    label: 'SYSTEM',
    items: [{ href: '/admin/settings', label: 'Settings', icon: Settings }],
  },
]

export function AdminSidebar({ collapsed, onNavigate }: SidebarProps) {
  const pathname = usePathname()

  return (
    <aside className="flex h-full flex-col border-r border-[#26364d] bg-[#121c2d] px-3 py-4">
      <div className="mb-5 px-1">
        {!collapsed ? (
          <>
            <p className="text-xs uppercase tracking-widest text-[#7f8fa7]">Driftwoods</p>
            <p className="text-base font-semibold text-[#f3ede6]">Restaurant CMS</p>
          </>
        ) : (
          <div className="mx-auto h-9 w-9 rounded-md bg-[#E07A2F]/20" />
        )}
      </div>

      <nav className="space-y-5 overflow-y-auto pr-1">
        {sections.map((section) => (
          <div key={section.label} className="space-y-1.5">
            {!collapsed ? <p className="px-2 text-[10px] font-semibold tracking-widest text-[#7f8fa7]">{section.label}</p> : null}
            <div className="space-y-1">
              {section.items.map((item) => (
                <NavItem
                  key={item.href}
                  href={item.href}
                  label={item.label}
                  icon={item.icon}
                  active={pathname === item.href}
                  collapsed={collapsed}
                  onNavigate={onNavigate}
                />
              ))}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  )
}
