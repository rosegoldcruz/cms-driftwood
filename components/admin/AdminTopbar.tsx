'use client'

import Link from 'next/link'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'

type AdminTopbarProps = {
  onMenuClick: () => void
}

export function AdminTopbar({ onMenuClick }: AdminTopbarProps) {
  return (
    <header className="sticky top-0 z-20 border-b border-[#26364d] bg-[#111a2b]/95 px-3 py-3 backdrop-blur sm:px-4">
      <div className="grid grid-cols-[auto_1fr_auto] items-center gap-2 sm:gap-3">
        <div className="flex items-center gap-2">
          <Button variant="secondary" size="icon" onClick={onMenuClick} className="h-10 w-10">
            <Menu className="h-5 w-5" />
          </Button>
          <p className="hidden text-sm font-semibold text-[#f3ede6] sm:block">Driftwoods CMS</p>
        </div>

        <Input placeholder="Search pages, menu items, settings..." className="h-10" />

        <div className="flex items-center gap-2">
          <Link href="/" target="_blank">
            <Button variant="secondary" size="sm" className="hidden sm:inline-flex">
              View Site
            </Button>
          </Link>
          <select className="h-10 rounded-md border border-[#2a3a53] bg-[#1a2638] px-2 text-sm text-[#efe8df] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E07A2F]/70">
            <option>Owner</option>
            <option>Admin</option>
          </select>
        </div>
      </div>
    </header>
  )
}
