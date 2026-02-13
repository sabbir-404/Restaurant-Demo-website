import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';

function App() {
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);

  const openReservationModal = () => setIsReservationModalOpen(true);
  const closeReservationModal = () => setIsReservationModalOpen(false);

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-gray-900 flex flex-col">
      <Navbar onOpenReservation={openReservationModal} />
      
      <main className="flex-grow">
        <Hero onOpenReservation={openReservationModal} />
        <MenuSection />
        <AboutSection />
        <GallerySection />
        <ContactSection />
      </main>

      <Footer />
      
      <ReservationModal 
        isOpen={isReservationModalOpen} 
        onClose={closeReservationModal} 
      />
    </div>
  );
}

export default App;