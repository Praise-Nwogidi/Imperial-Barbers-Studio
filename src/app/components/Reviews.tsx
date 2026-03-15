import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const reviews = [
  {
    name: "Marcus Johnson",
    rating: 5,
    review: "Best barber shop in town! The attention to detail is incredible. I always leave looking sharp and feeling confident.",
    date: "2 weeks ago"
  },
  {
    name: "David Chen",
    rating: 5,
    review: "Imperial Barber Studio is the real deal. Professional service, relaxing atmosphere, and the hot towel shave is absolutely worth it.",
    date: "1 month ago"
  },
  {
    name: "James Williams",
    rating: 5,
    review: "I've been coming here for over a year. The barbers really know their craft and the premium products they use make a difference.",
    date: "3 weeks ago"
  }
];

export function Reviews() {
  return (
    <section id="reviews" className="py-20 px-4 bg-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-white">
            Client <span className="text-amber-600">Testimonials</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card 
              key={index}
              className="bg-black border-zinc-800 hover:border-amber-600 transition-colors duration-300"
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <Quote className="w-12 h-12 text-amber-600/30" />
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-600 text-amber-600" />
                  ))}
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed italic">
                  "{review.review}"
                </p>

                <div className="border-t border-zinc-800 pt-4">
                  <p className="text-white font-semibold">{review.name}</p>
                  <p className="text-gray-500 text-sm">{review.date}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 text-amber-600">
            <Star className="w-8 h-8 fill-amber-600" />
            <span className="text-4xl">4.9</span>
            <span className="text-gray-400 ml-2">Based on 200+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}
