import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'

export default function WebsiteAboutPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Website: About</CardTitle>
        <CardDescription>Edit story, values, and about section content.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-[#9fb0c8]">About page editor placeholder for MVP demo.</p>
      </CardContent>
    </Card>
  )
}
