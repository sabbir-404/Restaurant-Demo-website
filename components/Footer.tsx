import React from 'react';
import { Facebook, Instagram, Twitter, UtensilsCrossed } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-primary rounded-full text-white">
                <UtensilsCrossed size={20} />
              </div>
              <span className="font-serif text-2xl font-bold">Lumière</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Experience the art of culinary excellence in a warm and inviting atmosphere. 
              Making memories, one plate at a time.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Menu', 'About Us', 'Gallery', 'Reservations'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '')}`} className="text-gray-400 hover:text-primary text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6 text-white">Opening Hours</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex justify-between">
                <span>Mon - Fri</span>
                <span>11:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sat - Sun</span>
                <span>10:00 AM - 11:00 PM</span>
              </li>
              <li className="flex justify-between text-primary">
                <span>Happy Hour</span>
                <span>05:00 PM - 07:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6 text-white">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Subscribe for latest updates and offers.</p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-gray-800 text-white px-4 py-2 rounded focus:outline-none focus:ring-1 focus:ring-primary text-sm"
              />
              <button className="bg-primary text-white px-4 py-2 rounded text-sm font-semibold hover:bg-amber-700 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Lumière Bistro. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};