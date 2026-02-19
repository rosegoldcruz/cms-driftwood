import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'

const photos = ['coconut-shrimp.jpg', 'fish-tacos.jpg', 'driftwood-burger.jpg', 'beach-nachos.jpg']

export default function MenuPhotosPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Menu: Photos</CardTitle>
        <CardDescription>Upload and assign photos to menu cards.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {photos.map((photo) => (
            <div key={photo} className="rounded-md border border-[#26364d] bg-[#1a2638] p-3 text-sm text-[#dbe4f2]">
              {photo}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
