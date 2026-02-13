import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';
import { PageTransition } from './components/PageTransition';

// Scroll to top component to reset scroll position on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

// Wrapper for Routes to access useLocation for Framer Motion
const AnimatedRoutes = ({ openReservation }: { openReservation: () => void }) => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={
            <PageTransition>
              <Hero onOpenReservation={openReservation} />
            </PageTransition>
          } 
        />
        <Route 
          path="/menu" 
          element={
            <PageTransition>
              <MenuSection />
            </PageTransition>
          } 
        />
        <Route 
          path="/about" 
          element={
            <PageTransition>
              <AboutSection />
            </PageTransition>
          } 
        />
        <Route 
          path="/gallery" 
          element={
            <PageTransition>
              <GallerySection />
            </PageTransition>
          } 
        />
        <Route 
          path="/contact" 
          element={
            <PageTransition>
              <ContactSection />
            </PageTransition>
          } 
        />
      </Routes>
    </AnimatePresence>
  );
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
          <AnimatedRoutes openReservation={openReservationModal} />
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