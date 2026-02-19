import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'

const specials = [
  { name: 'Monday Taco Night', status: 'Active' },
  { name: 'Tuesday Wing Night', status: 'Active' },
  { name: 'Weekend Brunch Promo', status: 'Draft' },
]

export default function SpecialsPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Specials / Events</CardTitle>
        <CardDescription>Manage recurring promotions and event campaigns.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        {specials.map((special) => (
          <div key={special.name} className="flex items-center justify-between rounded-md border border-[#26364d] bg-[#1a2638] p-3">
            <p className="text-sm text-[#dbe4f2]">{special.name}</p>
            <Badge tone={special.status === 'Active' ? 'active' : 'default'}>{special.status}</Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
