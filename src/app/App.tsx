import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Gallery } from "./components/Gallery";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Reviews } from "./components/Reviews";
import { Booking } from "./components/Booking";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <About />
      <Services />
      <Gallery />
      <WhyChooseUs />
      <Reviews />
      <Booking />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}
