import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';

// Scroll to top component to reset scroll position on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

function App() {
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);

  const openReservationModal = () => setIsReservationModalOpen(true);
  const closeReservationModal = () => setIsReservationModalOpen(false);

  return (
    <Router>
      <div className="min-h-screen bg-stone-50 font-sans text-gray-900 flex flex-col">
        <ScrollToTop />
        <Navbar onOpenReservation={openReservationModal} />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Hero onOpenReservation={openReservationModal} />} />
            {/* Wrap inner pages in pt-20 to account for fixed navbar */}
            <Route path="/menu" element={<div className="pt-20"><MenuSection /></div>} />
            <Route path="/about" element={<div className="pt-20"><AboutSection /></div>} />
            <Route path="/gallery" element={<div className="pt-20"><GallerySection /></div>} />
            <Route path="/contact" element={<div className="pt-20"><ContactSection /></div>} />
          </Routes>
        </main>

        <Footer />
        
        <ReservationModal 
          isOpen={isReservationModalOpen} 
          onClose={closeReservationModal} 
        />
      </div>
    </Router>
  );
}

export default App;