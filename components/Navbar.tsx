import React, { useState, useEffect } from 'react';
import { Menu, X, UtensilsCrossed } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { NavLink } from '../types';

interface NavbarProps {
  onOpenReservation: () => void;
}

const navLinks: NavLink[] = [
  { name: 'Home', href: '/' },
  { name: 'Menu', href: '/menu' },
  { name: 'About', href: '/about' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenReservation }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Show solid background if scrolled OR if not on the home page
  const showSolidBackground = scrolled || !isHome;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${showSolidBackground ? 'bg-white/95 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className={`p-2 rounded-full ${showSolidBackground ? 'bg-primary text-white' : 'bg-white text-primary'}`}>
                <UtensilsCrossed size={24} />
              </div>
              <span className={`font-serif text-2xl font-bold ${showSolidBackground ? 'text-gray-900' : 'text-white'}`}>
                Lumière
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-medium uppercase tracking-wider hover:text-primary transition-colors ${
                  showSolidBackground ? 'text-gray-700' : 'text-white/90 hover:text-white'
                } ${location.pathname === link.href ? 'text-primary' : ''}`}
              >
                {link.name}
              </Link>
            ))}
            <button 
              onClick={onOpenReservation}
              className={`px-5 py-2 rounded-md font-medium transition-colors ${
                showSolidBackground 
                  ? 'bg-primary text-white hover:bg-amber-700' 
                  : 'bg-white text-gray-900 hover:bg-gray-100'
              }`}
            >
              Book Table
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${showSolidBackground ? 'text-gray-900' : 'text-white'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 ease-in-out transform origin-top ${isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}`}>
        <div className="px-4 py-6 space-y-4 flex flex-col items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-gray-800 hover:text-primary font-medium text-lg py-2 ${location.pathname === link.href ? 'text-primary' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={() => {
              setIsOpen(false);
              onOpenReservation();
            }}
            className="w-full text-center bg-primary text-white py-3 rounded-md font-medium hover:bg-amber-700"
          >
            Book a Table
          </button>
        </div>
      </div>
    </nav>
  );
};