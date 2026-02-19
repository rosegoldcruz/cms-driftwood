import { TrendingUp, FolderTree, UtensilsCrossed, CalendarDays, Clock3, PenSquare } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Separator } from '@/components/ui/Separator'

const stats = [
  { label: 'Menu Items', value: '99', hint: '+4 this week', icon: UtensilsCrossed },
  { label: 'Categories', value: '13', hint: 'All synced', icon: FolderTree },
  { label: 'Specials', value: '6', hint: '2 scheduled', icon: CalendarDays },
  { label: 'Last Update', value: '23m ago', hint: 'By Owner', icon: Clock3 },
]

const edits = [
  { action: 'Updated “Driftwood Burger” price to $16.00', target: 'Menu > Items' },
  { action: 'Activated “Weekend Brunch” special', target: 'Specials / Events' },
  { action: 'Changed contact phone number', target: 'Website > Contact' },
  { action: 'Uploaded Coconut Shrimp photo', target: 'Menu > Photos' },
]

const tasks = [
  { label: 'Homepage hero refresh', status: 'In Review' },
  { label: 'Daily specials for Friday', status: 'Scheduled' },
  { label: 'Spring cocktail photos', status: 'Draft' },
]

export default function AdminDashboardPage() {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <p className="text-sm text-[#9fb0c8]">Live website content status and editor activity.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="secondary">View Publish Queue</Button>
          <Button>New Menu Item</Button>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <Card key={item.label} className="relative overflow-hidden">
            <div className="pointer-events-none absolute right-0 top-0 h-20 w-20 translate-x-4 -translate-y-5 rounded-full bg-[#E07A2F]/10" />
            <CardHeader>
              <CardDescription>{item.label}</CardDescription>
              <CardTitle className="flex items-center justify-between gap-2 text-2xl">
                {item.value}
                <item.icon className="h-4 w-4 text-[#f6c79f]" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-[#9fb0c8]">{item.hint}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-[#f6c79f]" />
              Content Momentum
            </CardTitle>
            <CardDescription>Recent editing velocity and publishing readiness.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-[#9fb0c8]">
                <span>Menu updates this week</span>
                <span>84%</span>
              </div>
              <div className="h-2 rounded-full bg-[#223146]">
                <div className="h-2 w-[84%] rounded-full bg-[#E07A2F]" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-[#9fb0c8]">
                <span>Website content freshness</span>
                <span>71%</span>
              </div>
              <div className="h-2 rounded-full bg-[#223146]">
                <div className="h-2 w-[71%] rounded-full bg-[#f6b277]" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-[#9fb0c8]">
                <span>Photo coverage on active items</span>
                <span>62%</span>
              </div>
              <div className="h-2 rounded-full bg-[#223146]">
                <div className="h-2 w-[62%] rounded-full bg-[#f8d0ad]" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Work Queue</CardTitle>
            <CardDescription>High-impact updates before service starts.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {tasks.map((task, idx) => (
              <div key={task.label}>
                <div className="flex items-center justify-between gap-2 rounded-md bg-[#1a2638] p-2.5">
                  <div className="flex items-center gap-2">
                    <PenSquare className="h-3.5 w-3.5 text-[#9fb0c8]" />
                    <p className="text-sm text-[#dbe4f2]">{task.label}</p>
                  </div>
                  <Badge tone="default">{task.status}</Badge>
                </div>
                {idx < tasks.length - 1 ? <Separator className="my-2" /> : null}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Edits</CardTitle>
          <CardDescription>Most recent content changes for today’s demo.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {edits.map((edit, index) => (
            <div key={edit.action} className="rounded-md bg-[#1a2638] p-3">
              <p className="text-sm text-[#d7e1f0]">{edit.action}</p>
              <p className="mt-1 text-xs text-[#8fa3bf]">{edit.target}</p>
              {index < edits.length - 1 ? <Separator className="mt-3" /> : null}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
