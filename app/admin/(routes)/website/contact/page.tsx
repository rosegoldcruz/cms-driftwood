import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'

export default function WebsiteContactPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Website: Contact</CardTitle>
        <CardDescription>Edit phone, address, map link, and contact CTA.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-[#9fb0c8]">Contact content editor placeholder for MVP demo.</p>
      </CardContent>
    </Card>
  )
}
