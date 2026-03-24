import Hero from "@/components/Hero";
import Booking from "@/components/Booking";
import Gallery from "@/components/Gallery";
import Services from "@/components/Services";
import Location from "@/components/Location";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Booking />
      <Gallery />
      <Services />
      <Location />
      <Contact />
    </main>
  );
}
