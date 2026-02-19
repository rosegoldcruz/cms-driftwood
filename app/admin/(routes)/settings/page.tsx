import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'

export default function AdminSettingsPage() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Business Info</CardTitle>
          <CardDescription>Hours, address, and contact information.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-2 sm:grid-cols-2">
          <Input value="9832 N 7th St, Phoenix, AZ 85020" readOnly />
          <Input value="(480) 393-3261" readOnly />
          <Input value="Mon-Fri 11:00 AM - 10:00 PM" readOnly />
          <Input value="Sat-Sun 8:00 AM - 10:00 PM" readOnly />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Branding</CardTitle>
          <CardDescription>Logo and primary brand colors.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded bg-[#E07A2F]" />
            <div className="h-10 w-10 rounded bg-[#0e1726] border border-[#26364d]" />
            <p className="text-sm text-[#9fb0c8]">Primary: #E07A2F • Surface: #0E1726</p>
          </div>
          <Button variant="secondary">Update Branding</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Users / Roles</CardTitle>
          <CardDescription>Optional for MVP, currently stubbed for demo.</CardDescription>
        </CardHeader>
        <CardContent className="flex items-center gap-3">
          <Badge tone="owner">Owner</Badge>
          <p className="text-sm text-[#9fb0c8]">Single-owner mode enabled for today’s demo.</p>
        </CardContent>
      </Card>
    </div>
  )
}
