import { Card, CardContent } from './ui/card';
import { testimonials } from '../lib/data';

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover mr-4" />
                  <div>
                    <p className="font-bold text-lg">{testimonial.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.location}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic">“{testimonial.quote}”</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;