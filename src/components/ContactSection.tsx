'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { MapPin, Phone, Mail, Instagram } from 'lucide-react';

// Initialize EmailJS
emailjs.init('9e_AAuRiLenutUslJ');

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const fullMessage = `
Nombre: ${formData.name}
Correo Electrónico: ${formData.email}
Teléfono: ${formData.phone}

Mensaje:
${formData.message}
`;

    try {
      await emailjs.send(
        'service_9sjmufz',
        'template_bvhxmnb',
        {
          to_name: 'Soul Ki',
          from_name: formData.name,
          email: formData.email,
          message: fullMessage,
          reply_to: formData.email
        },
        '9e_AAuRiLenutUslJ'
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Contáctanos</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Tu nombre"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="tu@email.com"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Teléfono
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Tu número de teléfono"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Escribe tu mensaje aquí"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-teal-600 hover:bg-teal-700 text-white py-3 px-6 rounded-md transition-colors ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
            </button>
            
            {submitStatus === 'success' && (
              <p className="text-green-600 text-center mt-4">
                ¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.
              </p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-600 text-center mt-4">
                Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}