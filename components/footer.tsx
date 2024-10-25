import Link from 'next/link'
import { Facebook, Instagram, Youtube, Twitter, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-primary to-secondary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-3xl font-bold mb-4">BioSkm</h3>
            <p className="mb-6">Shaping minds, inspiring futures in the world of biology.</p>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/Mail2soumitra" className="hover:text-accent transition-colors" target="_blank">
                <Facebook size={24} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://www.instagram.com/smarter.soumitra?igsh=MXEzMWt3bHBoc2g2Mw==" className="hover:text-accent transition-colors" target="_blank">
                <Instagram size={24} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="http://www.youtube.com/@SouMitrAKuMaRMaNdaL" className="hover:text-accent transition-colors" target="_main">
                <Youtube size={24} />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link href="#" className="hover:text-accent transition-colors">
                <Twitter size={24} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://wa.me/917908416319" className="hover:text-accent transition-colors" target="_blank">
                <Phone size={24} />
                <span className="sr-only">WhatsApp</span>
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#home" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link href="#about" className="hover:text-accent transition-colors">About</Link></li>
              <li><Link href="#info" className="hover:text-accent transition-colors">Teaching Info</Link></li>
              <li><Link href="#achievements" className="hover:text-accent transition-colors">Achievements</Link></li>
              <li><Link href="#gallery" className="hover:text-accent transition-colors">Gallery</Link></li>
              <li><Link href="#contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Information</h4>
            <p className="mb-2">Email: bioskm@example.com</p>
            <p className="mb-2">Phone: +91 7908416319</p>
            <p>Address: Malda, West Bengal, India</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Newsletter</h4>
            <p className="mb-4">Stay updated with our latest news and offers!</p>
            <form className="flex flex-col gap-2 items-start">
  <input 
    type="email" 
    placeholder="Your email" 
    className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent"
  />
  <button 
    type="submit" 
    className="w-full px-6 py-2 bg-accent text-white rounded-md hover:bg-accent/80 transition-colors"
  >
    Subscribe
  </button>
</form>

          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} BioSkm. All rights reserved.</p>
          <nav className="mt-4 md:mt-0">
            <ul className="flex space-x-4">
              <li><Link href="#" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Cookie Policy</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}