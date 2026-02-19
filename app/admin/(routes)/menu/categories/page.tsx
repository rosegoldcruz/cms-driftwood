import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { driftwoodsMenuSource } from '@/lib/menu-data'

export default function MenuCategoriesPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Menu: Categories</CardTitle>
        <CardDescription>
          {driftwoodsMenuSource.length} categories synced from Driftwoods source.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="grid gap-2 text-sm text-[#d7e1f0] sm:grid-cols-2 xl:grid-cols-3">
          {driftwoodsMenuSource.map((category) => (
            <li key={category.id} className="rounded-md border border-[#26364d] bg-[#1a2638] p-3">
              <p className="font-medium text-[#efe8df]">{category.name}</p>
              <p className="mt-1 text-xs text-[#9fb0c8]">{category.description || 'No description'}</p>
              <p className="mt-2 text-xs text-[#f6c79f]">{category.items.length} items</p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
