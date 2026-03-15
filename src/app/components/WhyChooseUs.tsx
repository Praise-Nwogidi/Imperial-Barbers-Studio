import { Award, Package, Armchair, Eye } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Experienced Barbers",
    description: "Our master barbers have years of expertise in traditional and modern grooming techniques"
  },
  {
    icon: Package,
    title: "Premium Products",
    description: "We use only the finest grooming products from renowned international brands"
  },
  {
    icon: Armchair,
    title: "Relaxing Atmosphere",
    description: "Enjoy a comfortable, masculine environment designed for your ultimate relaxation"
  },
  {
    icon: Eye,
    title: "Attention to Detail",
    description: "Every cut, every shave, every service is performed with meticulous precision"
  }
];

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-white">
            Why Choose <span className="text-amber-600">Imperial</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Experience the difference that true craftsmanship makes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="text-center group"
              >
                <div className="mb-6 inline-flex">
                  <div className="bg-amber-600/20 p-6 rounded-full border-2 border-amber-600 group-hover:bg-amber-600 transition-colors duration-300">
                    <Icon className="w-12 h-12 text-amber-600 group-hover:text-black transition-colors duration-300" />
                  </div>
                </div>
                
                <h3 className="text-2xl mb-3 text-white">
                  {feature.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
