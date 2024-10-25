import Link from 'next/link'
import { Button } from "../components/ui/button"

export default function GetYourQuestions() {
  return (
    <section className="py-16 bg-gradient-to-r from-info to-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Get Your Questions</h2>
        <p className="text-xl mb-8">Access a wide range of questions to enhance your preparation</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
            <Link href="/neet-questions">NEET Questions</Link>
          </Button>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
            <Link href="/allen-questions">Allen Questions</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}