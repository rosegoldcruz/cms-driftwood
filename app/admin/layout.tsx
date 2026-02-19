'use client'

import { useState } from 'react'
import { AdminSidebar } from '@/components/admin/AdminSidebar'
import { AdminTopbar } from '@/components/admin/AdminTopbar'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleMenuClick = () => {
    if (window.innerWidth < 1024) {
      setMobileOpen((prev) => !prev)
      return
    }
    setCollapsed((prev) => !prev)
  }

  return (
    <div className="min-h-screen bg-[#0e1726] text-[#f3ede6]">
      <div className="grid min-h-screen lg:grid-cols-[auto_1fr]">
        <div className={`hidden lg:block ${collapsed ? 'w-[84px]' : 'w-[250px]'}`}>
          <AdminSidebar collapsed={collapsed} />
        </div>

        {mobileOpen ? (
          <div className="fixed inset-0 z-40 bg-black/50 lg:hidden" onClick={() => setMobileOpen(false)}>
            <div className="h-full w-[84%] max-w-[310px]" onClick={(e) => e.stopPropagation()}>
              <AdminSidebar onNavigate={() => setMobileOpen(false)} />
            </div>
          </div>
        ) : null}

        <div className="grid min-h-screen grid-rows-[auto_1fr]">
          <AdminTopbar onMenuClick={handleMenuClick} />
          <main className="p-3 sm:p-4 lg:p-6">{children}</main>
        </div>
      </div>
    </div>
  )
}
