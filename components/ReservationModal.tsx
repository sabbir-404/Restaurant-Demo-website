import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { ReservationForm } from './ReservationForm';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [shouldRender, setShouldRender] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Handle mounting and unmounting with animation delay
  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      // Small timeout to allow the browser to paint 'display: block' before adding opacity class
      const timer = setTimeout(() => setIsVisible(true), 10);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
      // Wait for animation to finish before unmounting
      const timer = setTimeout(() => setShouldRender(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Prevent body scroll when modal is actually visible (not just rendering)
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!shouldRender) return null;

  return (
    <div 
      className={`fixed inset-0 z-[60] flex items-center justify-center p-4 transition-opacity duration-300 ease-in-out ${
        isVisible ? 'bg-black/60 backdrop-blur-sm opacity-100' : 'bg-black/0 backdrop-blur-none opacity-0'
      }`}
      onClick={onClose}
    >
      <div 
        className={`bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative transition-all duration-300 ease-out transform ${
          isVisible ? 'scale-100 opacity-100 translate-y-0' : 'scale-90 opacity-0 translate-y-8'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500 z-10"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>
        
        <div className="p-8 md:p-10">
          <div className="text-center mb-8">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-2 block">Reservations</span>
            <h3 className="text-3xl font-serif font-bold text-gray-900">Book a Table</h3>
            <p className="text-gray-500 mt-3">Reserve your spot at Lumière for an unforgettable evening.</p>
          </div>
          
          <ReservationForm />
        </div>
      </div>
    </div>
  );
};