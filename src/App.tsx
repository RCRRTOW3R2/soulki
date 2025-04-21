import { useEffect, useState } from 'react';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from './firebase';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import TreatmentSection from './components/TreatmentSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Header from './components/Header';

export function App() {
  const [testMessage, setTestMessage] = useState<string>('');

  const testFirestore = async () => {
    try {
      // Try to write a document
      const docRef = await addDoc(collection(db, 'test'), {
        message: 'Test successful!',
        timestamp: new Date()
      });
      
      // Try to read documents
      const querySnapshot = await getDocs(collection(db, 'test'));
      const docs = querySnapshot.docs.map(doc => doc.data());
      
      setTestMessage('Firestore test successful! Check your console for details.');
      console.log('Written document ID:', docRef.id);
      console.log('Read documents:', docs);
    } catch (error) {
      setTestMessage('Error testing Firestore. Check console for details.');
      console.error('Firestore test error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Test button - Moved to top of component */}
      <div className="fixed top-4 right-4 z-[9999]">
        <button
          onClick={testFirestore}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg text-lg animate-bounce"
        >
          Test Firestore
        </button>
        {testMessage && (
          <div className="mt-4 p-4 bg-white rounded-lg shadow-lg text-sm border border-gray-200 w-64">
            {testMessage}
          </div>
        )}
      </div>
      
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
    </div>
  );
}