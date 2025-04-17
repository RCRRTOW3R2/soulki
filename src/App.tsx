import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import TreatmentSection from './components/TreatmentSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
export function App() {
  return <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <ServicesSection />
        <TreatmentSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>;
}