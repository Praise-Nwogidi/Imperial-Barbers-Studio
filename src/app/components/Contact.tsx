import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-white">
            Visit <span className="text-amber-600">Our Studio</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Find us and get in touch
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Location */}
          <div className="text-center">
            <div className="bg-amber-600/20 p-6 rounded-full border-2 border-amber-600 inline-flex mb-6">
              <MapPin className="w-10 h-10 text-amber-600" />
            </div>
            <h3 className="text-2xl mb-3 text-white">Location</h3>
            <p className="text-gray-400 leading-relaxed">
              123 Grooming Street<br />
              Downtown District<br />
              New York, NY 10001
            </p>
          </div>

          {/* Phone */}
          <div className="text-center">
            <div className="bg-amber-600/20 p-6 rounded-full border-2 border-amber-600 inline-flex mb-6">
              <Phone className="w-10 h-10 text-amber-600" />
            </div>
            <h3 className="text-2xl mb-3 text-white">Phone</h3>
            <p className="text-gray-400 leading-relaxed">
              +1 (555) 123-4567<br />
              Mon - Sat: 9AM - 7PM<br />
              Sunday: Closed
            </p>
          </div>

          {/* Email */}
          <div className="text-center">
            <div className="bg-amber-600/20 p-6 rounded-full border-2 border-amber-600 inline-flex mb-6">
              <Mail className="w-10 h-10 text-amber-600" />
            </div>
            <h3 className="text-2xl mb-3 text-white">Email</h3>
            <p className="text-gray-400 leading-relaxed">
              info@imperialbarber.com<br />
              bookings@imperialbarber.com<br />
              We reply within 24 hours
            </p>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl mb-6 text-white">Follow Us</h3>
          <div className="flex gap-4 justify-center">
            <a 
              href="#" 
              className="bg-zinc-800 p-4 rounded-full hover:bg-amber-600 transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6 text-white" />
            </a>
            <a 
              href="#" 
              className="bg-zinc-800 p-4 rounded-full hover:bg-amber-600 transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6 text-white" />
            </a>
            <a 
              href="#" 
              className="bg-zinc-800 p-4 rounded-full hover:bg-amber-600 transition-colors duration-300"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6 text-white" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
