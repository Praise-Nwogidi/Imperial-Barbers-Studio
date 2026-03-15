import { Scissors, Sparkles, Droplet, Wind, Package } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const services = [
  {
    icon: Scissors,
    title: "Classic Haircut",
    description: "Precision cutting tailored to your style and face shape",
    price: "$45"
  },
  {
    icon: Wind,
    title: "Beard Trim",
    description: "Expert beard shaping and maintenance for the perfect look",
    price: "$30"
  },
  {
    icon: Droplet,
    title: "Hot Towel Shave",
    description: "Traditional straight razor shave with hot towel treatment",
    price: "$50"
  },
  {
    icon: Sparkles,
    title: "Hair Wash & Styling",
    description: "Premium wash, conditioning, and professional styling",
    price: "$35"
  },
  {
    icon: Package,
    title: "Full Grooming Package",
    description: "Complete service: haircut, beard trim, shave, and styling",
    price: "$120"
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-white">
            Our <span className="text-amber-600">Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Premium grooming services designed to keep you looking sharp and feeling confident
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="bg-zinc-900 border-zinc-800 hover:border-amber-600 transition-all duration-300 group"
              >
                <CardContent className="p-8">
                  <div className="bg-amber-600/20 p-4 rounded-lg border border-amber-600 inline-flex mb-6 group-hover:bg-amber-600/30 transition-colors">
                    <Icon className="w-10 h-10 text-amber-600" />
                  </div>
                  
                  <h3 className="text-2xl mb-3 text-white">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="text-3xl text-amber-600">
                    {service.price}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
