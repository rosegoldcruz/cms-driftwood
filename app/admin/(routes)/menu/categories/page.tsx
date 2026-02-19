import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'

const categories = [
  'Shoreline Starters',
  'High Tide Handhelds',
  'Surf Side Salads',
  'Entrees',
  'Pastas',
  'Desserts',
]

export default function MenuCategoriesPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Menu: Categories</CardTitle>
        <CardDescription>Manage menu category structure and ordering.</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="grid gap-2 text-sm text-[#d7e1f0] sm:grid-cols-2">
          {categories.map((category) => (
            <li key={category} className="rounded-md border border-[#26364d] bg-[#1a2638] p-3">
              {category}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
