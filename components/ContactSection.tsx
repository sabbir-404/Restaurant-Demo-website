import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { SectionTitle } from './SectionTitle';
import { ReservationForm } from './ReservationForm';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Get in Touch" 
          subtitle="Reservation" 
        />

        <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-2xl shadow-xl overflow-hidden">
          
          {/* Contact Info */}
          <div className="lg:w-5/12 bg-gray-900 p-10 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-serif font-bold mb-6">Contact Information</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Ready for an unforgettable dining experience? Book your table now or contact us for private events.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-primary mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="text-gray-400 text-sm">123 Culinary Avenue,<br />Foodie District, NY 10012</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="text-primary mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-gray-400 text-sm">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="text-primary mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-gray-400 text-sm">reservations@lumierbistro.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="text-primary mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1">Opening Hours</h4>
                    <p className="text-gray-400 text-sm">Mon - Fri: 11:00 AM - 10:00 PM</p>
                    <p className="text-gray-400 text-sm">Sat - Sun: 10:00 AM - 11:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Circle */}
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl z-0"></div>
          </div>

          {/* Reservation Form */}
          <div className="lg:w-7/12 p-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Make a Reservation</h3>
            <ReservationForm />
          </div>

        </div>
      </div>
    </section>
  );
};