import { Award, Clock, Users } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1759134198561-e2041049419c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiYXJiZXIlMjBzaG9wJTIwaW50ZXJpb3IlMjBsdXh1cnl8ZW58MXx8fHwxNzczNTM1OTgyfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Imperial Barber Studio Interior"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl mb-6 text-white">
              About <span className="text-amber-600">Imperial Barber Studio</span>
            </h2>
            
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              At Imperial Barber Studio Ltd., we are dedicated to providing the finest grooming experience for the modern gentleman. Our team of expert barbers combines traditional techniques with contemporary styles to deliver precision cuts and luxury services.
            </p>
            
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              We believe that every man deserves to look and feel his best. From classic haircuts to hot towel shaves, we offer a complete range of grooming services in a relaxing, masculine atmosphere designed for your comfort.
            </p>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-amber-600/20 p-4 rounded-lg border border-amber-600 inline-flex mb-3">
                  <Award className="w-8 h-8 text-amber-600" />
                </div>
                <p className="text-white font-semibold">Expert Barbers</p>
              </div>
              
              <div className="text-center">
                <div className="bg-amber-600/20 p-4 rounded-lg border border-amber-600 inline-flex mb-3">
                  <Users className="w-8 h-8 text-amber-600" />
                </div>
                <p className="text-white font-semibold">1000+ Clients</p>
              </div>
              
              <div className="text-center">
                <div className="bg-amber-600/20 p-4 rounded-lg border border-amber-600 inline-flex mb-3">
                  <Clock className="w-8 h-8 text-amber-600" />
                </div>
                <p className="text-white font-semibold">10+ Years</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
