import { useEffect, useState } from 'react';
import { Star } from 'lucide-react';
import { collection, getDocs, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

interface Testimonial {
  id: string;
  name: string;
  quote: string;
  rating: number;
  timestamp?: any;
}

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [newTestimonial, setNewTestimonial] = useState({
    name: '',
    quote: '',
    rating: 5
  });

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'testimonials'));
      const testimonialData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Testimonial[];
      
      // Sort by timestamp if available, newest first
      testimonialData.sort((a, b) => {
        if (!a.timestamp || !b.timestamp) return 0;
        return b.timestamp.seconds - a.timestamp.seconds;
      });
      
      setTestimonials(testimonialData);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching testimonials:', err);
      setError('Failed to load testimonials. Please try again later.');
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'testimonials'), {
        ...newTestimonial,
        timestamp: serverTimestamp()
      });
      setNewTestimonial({ name: '', quote: '', rating: 5 });
      setShowForm(false);
      fetchTestimonials(); // Refresh the testimonials
    } catch (err) {
      console.error('Error adding testimonial:', err);
      setError('Failed to submit testimonial. Please try again.');
    }
  };

  if (loading) {
    return (
      <section id="testimonials" className="w-full bg-teal-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <p>Loading testimonials...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="testimonials" className="w-full bg-teal-50 py-20">
        <div className="container mx-auto px-4 text-center text-red-600">
          {error}
        </div>
      </section>
    );
  }

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
          
          <button
            onClick={() => setShowForm(!showForm)}
            className="mt-8 bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-600 transition-colors"
          >
            {showForm ? 'Cancelar' : 'Compartir tu experiencia'}
          </button>
        </div>

        {showForm && (
          <div className="max-w-2xl mx-auto mb-16 bg-white p-6 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Nombre</label>
                <input
                  type="text"
                  value={newTestimonial.name}
                  onChange={(e) => setNewTestimonial({...newTestimonial, name: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Tu experiencia</label>
                <textarea
                  value={newTestimonial.quote}
                  onChange={(e) => setNewTestimonial({...newTestimonial, quote: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  rows={4}
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Calificación</label>
                <select
                  value={newTestimonial.rating}
                  onChange={(e) => setNewTestimonial({...newTestimonial, rating: Number(e.target.value)})}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  {[5,4,3,2,1].map(num => (
                    <option key={num} value={num}>{num} estrellas</option>
                  ))}
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600 transition-colors"
              >
                Enviar testimonio
              </button>
            </form>
          </div>
        )}

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