import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'

export default function WebsiteHomePage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Website: Home</CardTitle>
        <CardDescription>Edit hero, featured sections, and homepage copy.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-[#9fb0c8]">Home content editor placeholder for MVP demo.</p>
      </CardContent>
    </Card>
  )
}
