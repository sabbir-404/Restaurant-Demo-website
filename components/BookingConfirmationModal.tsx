import React from 'react';
import { CheckCircle, Calendar, Users, Phone, X, Edit2 } from 'lucide-react';
import { Button } from './Button';

interface BookingDetails {
  name: string;
  phone: string;
  date: string;
  guests: string;
}

interface BookingConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onEdit: () => void;
  bookingDetails: BookingDetails;
}

export const BookingConfirmationModal: React.FC<BookingConfirmationModalProps> = ({ 
  isOpen, 
  onClose, 
  onEdit,
  bookingDetails 
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative overflow-hidden transform transition-all scale-100 animate-fade-in-up">
        <div className="absolute top-0 left-0 w-full h-2 bg-green-500"></div>
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X size={20} />
        </button>

        <div className="p-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="text-green-600 w-10 h-10" />
          </div>

          <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">
            Reservation Confirmed!
          </h3>
          <p className="text-gray-500 mb-8">
            We've saved a table for you, <span className="font-semibold text-gray-900">{bookingDetails.name}</span>.
          </p>

          <div className="bg-stone-50 rounded-xl p-6 border border-stone-100 mb-8 text-left space-y-4 shadow-inner">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-white rounded-lg shadow-sm text-primary">
                <Calendar size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Date</p>
                <p className="text-gray-900 font-medium">{bookingDetails.date ? new Date(bookingDetails.date).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : 'Date TBD'}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-2 bg-white rounded-lg shadow-sm text-primary">
                <Users size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Guests</p>
                <p className="text-gray-900 font-medium">{bookingDetails.guests}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-2 bg-white rounded-lg shadow-sm text-primary">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Phone</p>
                <p className="text-gray-900 font-medium">{bookingDetails.phone}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <Button onClick={onClose} className="w-full">
              Done
            </Button>
            <Button onClick={onEdit} variant="outline" className="w-full flex items-center justify-center gap-2">
              <Edit2 size={16} /> Edit Reservation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};