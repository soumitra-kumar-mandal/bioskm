import Link from 'next/link'
import { Home } from 'lucide-react'
import { Button } from "../../../components/ui/button"

export default function QuestionsHeader({ title }: { title: string }) {
  return (
    <header className="bg-gradient-to-r from-primary to-secondary py-4 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">{title}</h1>
          <Button asChild variant="outline" size="sm" className="text-white border-white hover:bg-white hover:text-primary">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" /> Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}