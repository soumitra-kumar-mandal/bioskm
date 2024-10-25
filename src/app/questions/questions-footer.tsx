import Link from 'next/link'

export default function QuestionsFooter() {
  return (
    <footer className="bg-gradient-to-r from-primary to-secondary py-4 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} BioSkm. All rights reserved.</p>
          <nav className="mt-4 md:mt-0">
            <ul className="flex space-x-4">
              <li><Link href="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-accent transition-colors">Terms of Service</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}