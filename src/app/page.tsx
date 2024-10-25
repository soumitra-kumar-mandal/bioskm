import Header from '../../components/header'
import HeroSection from '../../components/hero-section'
import AboutSection from '../../components/about-section'
import TeachingInfo from '../../components/teaching-info'
import Qualifications from '../../components/qualifications'
import Achievements from '../../components/achievements'
import Gallery from '../../components/gallery'
import ContactMeNow from '../../components/contact-me-now'
import GetYourQuestions from '../../components/get-your-questions'
import Contact from '../../components/contact'
import Footer from '../../components/footer'
import Preloader from '../../components/preloader'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Preloader />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <TeachingInfo />
        <Qualifications />
        <Achievements />
        <Gallery />
        <ContactMeNow />
        <GetYourQuestions />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}