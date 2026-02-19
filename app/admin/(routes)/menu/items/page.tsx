'use client'

import { useMemo, useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { Badge } from '@/components/ui/Badge'

type MenuItem = {
  id: number
  name: string
  price: string
  category: string
  active: boolean
}

const menuItems: MenuItem[] = [
  { id: 1, name: 'Driftwood Burger', price: '$16.00', category: 'High Tide Handhelds', active: true },
  { id: 2, name: 'Coconut Shrimp', price: '$14.00', category: 'Shoreline Starters', active: true },
  { id: 3, name: 'Weekend Brunch', price: '$0.00', category: 'Daily Seaside Specials', active: true },
  { id: 4, name: 'Bay Breeze', price: '$10.00', category: 'Coastal Cocktails', active: false },
  { id: 5, name: 'Fish Tacos', price: '$17.00', category: 'High Tide Handhelds', active: true },
]

export default function MenuItemsPage() {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState<'all' | 'active' | 'inactive'>('all')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return menuItems.filter((item) => {
      const passQuery = !q || item.name.toLowerCase().includes(q) || item.category.toLowerCase().includes(q)
      const passFilter = filter === 'all' ? true : filter === 'active' ? item.active : !item.active
      return passQuery && passFilter
    })
  }, [query, filter])

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-xl font-semibold">Menu Items</h1>
        <p className="text-sm text-[#9fb0c8]">Edit item name, price, status, and category visibility.</p>
      </div>

      <Card>
        <CardHeader className="space-y-3">
          <CardTitle>Items</CardTitle>
          <div className="grid gap-2 sm:grid-cols-[1fr_auto]">
            <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search by name or category" />
            <div className="grid grid-cols-3 gap-2">
              <Button variant={filter === 'all' ? 'primary' : 'secondary'} onClick={() => setFilter('all')}>
                All
              </Button>
              <Button variant={filter === 'active' ? 'primary' : 'secondary'} onClick={() => setFilter('active')}>
                Active
              </Button>
              <Button variant={filter === 'inactive' ? 'primary' : 'secondary'} onClick={() => setFilter('inactive')}>
                Inactive
              </Button>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <div className="space-y-2 md:hidden">
            {filtered.map((item) => (
              <div key={item.id} className="rounded-md border border-[#26364d] bg-[#1a2638] p-3">
                <div className="mb-1 flex items-start justify-between gap-2">
                  <p className="font-medium text-[#f3ede6]">{item.name}</p>
                  <Badge tone={item.active ? 'active' : 'inactive'}>{item.active ? 'Active' : 'Inactive'}</Badge>
                </div>
                <p className="text-sm text-[#9fb0c8]">{item.category}</p>
                <div className="mt-2 flex items-center justify-between">
                  <p className="font-semibold text-[#f6c79f]">{item.price}</p>
                  <Button variant="secondary" size="sm" onClick={() => (window.location.href = `/admin/menu/items?edit=${item.id}`)}>
                    Edit
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="hidden overflow-x-auto md:block">
            <table className="w-full min-w-[680px] text-sm">
              <thead>
                <tr className="border-b border-[#26364d] text-left text-[#9fb0c8]">
                  <th className="py-2">Name</th>
                  <th className="py-2">Price</th>
                  <th className="py-2">Category</th>
                  <th className="py-2">Status</th>
                  <th className="py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((item) => (
                  <tr key={item.id} className="border-b border-[#223146] text-[#dbe4f2]">
                    <td className="py-3">{item.name}</td>
                    <td className="py-3 text-[#f6c79f]">{item.price}</td>
                    <td className="py-3">{item.category}</td>
                    <td className="py-3">
                      <Badge tone={item.active ? 'active' : 'inactive'}>{item.active ? 'Active' : 'Inactive'}</Badge>
                    </td>
                    <td className="py-3">
                      <Button variant="secondary" size="sm" onClick={() => (window.location.href = `/admin/menu/items?edit=${item.id}`)}>
                        Edit
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
