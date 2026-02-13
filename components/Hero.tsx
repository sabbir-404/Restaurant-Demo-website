import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './Button';

interface HeroProps {
  onOpenReservation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation }) => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Restaurant Interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold tracking-widest uppercase mb-6 animate-fade-in-up">
          Est. 2014 • Authentic Cuisine
        </span>
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight animate-fade-in-up delay-100">
          Taste the <span className="text-primary italic">Extraordinary</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in-up delay-200">
          Experience a symphony of flavors in a cozy, modern atmosphere. 
          Fresh ingredients, masterfully crafted dishes, and unforgettable moments.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
          <Link to="/menu">
            <Button 
              variant="primary" 
              className="flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              View Menu <ArrowRight size={18} />
            </Button>
          </Link>
          <Button variant="white" onClick={onOpenReservation} className="w-full sm:w-auto">
            Book a Table
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block text-white/70">
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white to-transparent mx-auto mb-2"></div>
        <span className="text-xs uppercase tracking-widest">Scroll</span>
      </div>
    </section>
  );
};