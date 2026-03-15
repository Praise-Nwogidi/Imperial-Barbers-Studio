import { Scissors } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1759142235060-3191ee596c81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBiYXJiZXIlMjBjdXR0aW5nJTIwaGFpciUyMGx1eHVyeSUyMHNhbG9ufGVufDF8fHx8MTc3MzUzNTk4MXww&ixlib=rb-4.1.0&q=80&w=1080')`
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="flex justify-center mb-6">
          <div className="bg-amber-600/20 p-4 rounded-full border-2 border-amber-600">
            <Scissors className="w-12 h-12 text-amber-600" />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl mb-6 text-white tracking-wider">
          IMPERIAL BARBER STUDIO LTD.
        </h1>
        
        <p className="text-xl md:text-2xl text-amber-600 italic mb-12 max-w-3xl mx-auto">
          "For the best in men's grooming, drop in for a haircut and shave. Come in rough and walk out fresh."
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg"
            onClick={() => scrollToSection('booking')}
          >
            Book Appointment
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-6 text-lg"
            onClick={() => scrollToSection('services')}
          >
            View Services
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-amber-600 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-amber-600 rounded-full" />
        </div>
      </div>
    </section>
  );
}
