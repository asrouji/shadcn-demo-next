import Nav from '@/components/Nav'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="p-24">
      <Nav />
      <section className="py-12 flex flex-col items-center text-center gap-8">
        <h1 className="text-4xl font-bold">Sample title</h1>
        <p className="text-2xl text-muted-foreground">Sample paragraph</p>
      </section>
      <div className="flex gap-6 items-center justify-center">
        <Button>Primary Button</Button>
        <Button variant={'secondary'}>Secondary Button</Button>
      </div>
    </main>
  )
}
