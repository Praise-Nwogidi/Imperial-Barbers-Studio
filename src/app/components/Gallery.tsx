export function Gallery() {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1590503347339-ccd768ad83d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW5zJTIwaGFpcmN1dCUyMGJlZm9yZSUyMGFmdGVyJTIwdHJhbnNmb3JtYXRpb258ZW58MXx8fHwxNzczNTM1OTgyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Professional haircut transformation"
    },
    {
      url: "https://images.unsplash.com/photo-1599387737838-660b75526801?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMG1lbnMlMjBoYWlyc3R5bGUlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzczNTM1OTgzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Clean professional men's hairstyle"
    },
    {
      url: "https://images.unsplash.com/photo-1603899968034-1a56ca48d172?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjBiZWFyZCUyMHRyaW0lMjBncm9vbWluZ3xlbnwxfHx8fDE3NzM1MzU5ODN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Expert beard grooming"
    },
    {
      url: "https://images.unsplash.com/photo-1566416440105-6c36b6919a2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwYmFyYmVyJTIwdG9vbHMlMjBzY2lzc29ycyUyMHJhem9yfGVufDF8fHx8MTc3MzUzNTk4Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Professional barber tools"
    },
    {
      url: "https://images.unsplash.com/photo-1760641371942-e3d39565ac67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW5zJTIwaGFpcnN0eWxlJTIwc2lkZSUyMHZpZXclMjBwcm9mZXNzaW9uYWwlMjBjdXR8ZW58MXx8fHwxNzczNTM1OTg3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Professional men's haircut side view"
    },
    {
      url: "https://images.unsplash.com/photo-1759142235060-3191ee596c81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBiYXJiZXIlMjBjdXR0aW5nJTIwaGFpciUyMGx1eHVyeSUyMHNhbG9ufGVufDF8fHx8MTc3MzUzNTk4MXww&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Barber at work in luxury salon"
    }
  ];

  return (
    <section id="gallery" className="py-20 px-4 bg-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-white">
            Our <span className="text-amber-600">Gallery</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Witness the transformation. Our work speaks for itself.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="relative h-80 rounded-lg overflow-hidden group cursor-pointer"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
