import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [{
    id: 1,
    name: 'Diego Martinez',
    quote: "Como maratonista, no soy extraño a las lesiones. El tratamiento en SOUL-KI no solo me ayudó a recuperarme mas rapido y eficazmente, sino que también mejoró mi perspectiva en identificacion de lesiones antes de empeoren. ¡Altamente recomendado!",
    rating: 5
  }, {
    id: 2,
    name: 'El Chavo del 8',
    quote: "Vivir en un barril todos estos años han dañado mucho mi postura, y me causaba mucho dolor cronico en mi espalda. Pedro me ayudo a recuperarme de esta lesion y me ayudo a tener mejores habitos.",
    rating: 5
  }, {
    id: 3,
    name: 'Un perro',
    quote: "Guau.",
    rating: 5
  }];

  return (
    <section id="testimonials" className="w-full bg-teal-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Testimonios de nuestros pacientes
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            No solo tome nuestra palabra. Escuche lo que nuestros clientes tienen que decir acerca de sus experiencias con nosotros.
          </p>
          <div className="w-24 h-1 bg-teal-500 mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <div className="flex flex-col">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    {testimonial.name}
                  </h4>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;