import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Screens from './components/Screens'
import Safety from './components/Safety'
import Faq from './components/Faq'
import DownloadCta from './components/DownloadCta'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Screens />
        <Safety />
        <Faq />
        <DownloadCta />
      </main>
      <Footer />
    </>
  )
}
