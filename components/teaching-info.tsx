import { MapPin, Book, Phone, Youtube } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"

export default function TeachingInfo() {
  return (
    <section id="info" className="py-16 bg-gradient-to-r from-info to-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Teaching Information</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-white/10 backdrop-blur-md text-white border-accent">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-accent">
                <MapPin className="h-5 w-5" />
                Where I Teach
              </CardTitle>
            </CardHeader>
            <CardContent>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.239274763311!2d88.13207837358733!3d24.99198423998545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fafd7a61295c0d%3A0x9f790937a5fb8a72!2sBIOSkm%20-%20Biology%20Tuition!5e0!3m2!1sen!2sin!4v1727722837856!5m2!1sen!2sin"
                width="100%" 
                height="300" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </CardContent>
          </Card>
          <Card className="bg-white/10 backdrop-blur-md text-white border-accent">
            <CardHeader>
              <CardTitle className="text-accent">Details</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <Book className="h-5 w-5 text-secondary" />
                  <span><strong>Subjects Offered:</strong> Biology</span>
                </li>
                <li className="flex items-center gap-2">
                  <Book className="h-5 w-5 text-secondary" />
                  <span><strong>Classes:</strong> 9th to 12th Grade (NEET+BOARD)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-secondary" />
                  <span><strong>Mobile Number:</strong> <a href="tel:+917908416319" className="text-accent hover:underline">+91 7908416319</a></span>
                </li>
                <li className="flex items-center gap-2">
                  <Youtube className="h-5 w-5 text-secondary" />
                  <span><strong>YouTube Channel:</strong> <a href="http://www.youtube.com/@SouMitrAKuMaRMaNdaL" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Visit My Channel</a></span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}