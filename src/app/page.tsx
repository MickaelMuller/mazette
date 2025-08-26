import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Gallery from '@/components/Gallery'
import Booking from '@/components/Booking'
import Location from '@/components/Location'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Gallery />
      <Booking />
      <Location />
      <Contact />
    </main>
  )
}