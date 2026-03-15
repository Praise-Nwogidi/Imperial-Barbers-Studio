import { Scissors } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black py-12 px-4 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Motto */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-amber-600 p-2 rounded">
                <Scissors className="w-6 h-6 text-black" />
              </div>
              <span className="text-xl text-white">Imperial Barber Studio Ltd.</span>
            </div>
            <p className="text-gray-400 italic mb-4">
              "For the best in men's grooming, drop in for a haircut and shave. Come in rough and walk out fresh."
            </p>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-white text-lg mb-4">Business Hours</h3>
            <div className="space-y-2 text-gray-400">
              <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
              <p>Saturday: 9:00 AM - 6:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#about" className="block text-gray-400 hover:text-amber-600 transition-colors">About Us</a>
              <a href="#services" className="block text-gray-400 hover:text-amber-600 transition-colors">Services</a>
              <a href="#gallery" className="block text-gray-400 hover:text-amber-600 transition-colors">Gallery</a>
              <a href="#booking" className="block text-gray-400 hover:text-amber-600 transition-colors">Book Now</a>
              <a href="#contact" className="block text-gray-400 hover:text-amber-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-zinc-800 pt-8 text-center text-gray-400">
          <p>&copy; 2026 Imperial Barber Studio Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
