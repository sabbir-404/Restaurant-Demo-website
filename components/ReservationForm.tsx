import React, { useState } from 'react';
import { AlertCircle, Loader2 } from 'lucide-react';
import { Button } from './Button';
import { BookingConfirmationModal } from './BookingConfirmationModal';

interface ReservationFormProps {
  className?: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  date?: string;
}

export const ReservationForm: React.FC<ReservationFormProps> = ({ className = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    guests: '2 People',
    specialRequests: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.length < 2) return 'Name must be at least 2 characters';
        return undefined;
      case 'phone':
        const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
        if (!value.trim()) return 'Phone number is required';
        if (!phoneRegex.test(value)) return 'Please enter a valid phone number';
        return undefined;
      case 'date':
        if (!value) return 'Date is required';
        const selectedDate = new Date(value);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (selectedDate < today) return 'Date cannot be in the past';
        return undefined;
      default:
        return undefined;
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    // Validate all fields
    const nameError = validateField('name', formData.name);
    if (nameError) { newErrors.name = nameError; isValid = false; }

    const phoneError = validateField('phone', formData.phone);
    if (phoneError) { newErrors.phone = phoneError; isValid = false; }

    const dateError = validateField('date', formData.date);
    if (dateError) { newErrors.date = dateError; isValid = false; }

    setErrors(newErrors);
    setTouched({ name: true, phone: true, date: true });
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setShowConfirmation(true);
      }, 1000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Real-time validation if touched
    if (touched[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: validateField(name, value)
      }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(prev => ({
      ...prev,
      [name]: validateField(name, value)
    }));
  };

  const handleCloseConfirmation = () => {
    setShowConfirmation(false);
    // Reset form after closing confirmation
    setFormData({
      name: '',
      phone: '',
      date: '',
      guests: '2 People',
      specialRequests: ''
    });
    setErrors({});
    setTouched({});
  };

  const handleEditReservation = () => {
    // Close confirmation but keep data to allow editing
    setShowConfirmation(false);
  };

  const getInputClassName = (error?: string) => `
    w-full px-4 py-3 rounded-md bg-gray-50 border 
    ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-primary focus:ring-primary'}
    focus:ring-1 outline-none transition-colors
  `;

  const todayStr = new Date().toISOString().split('T')[0];

  return (
    <>
      <form className={`space-y-6 ${className}`} onSubmit={handleSubmit} noValidate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="group">
            <label className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-primary transition-colors">Name</label>
            <div className="relative">
              <input 
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text" 
                className={getInputClassName(errors.name)}
                placeholder="John Doe" 
              />
              {errors.name && (
                <div className="absolute right-3 top-3.5 text-red-500 animate-pulse">
                  <AlertCircle size={18} />
                </div>
              )}
            </div>
            {errors.name && <p className="mt-1 text-sm text-red-500 font-medium animate-fade-in">{errors.name}</p>}
          </div>
          
          <div className="group">
            <label className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-primary transition-colors">Phone</label>
            <div className="relative">
              <input 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                type="tel" 
                className={getInputClassName(errors.phone)}
                placeholder="(555) 000-0000" 
              />
              {errors.phone && (
                <div className="absolute right-3 top-3.5 text-red-500 animate-pulse">
                  <AlertCircle size={18} />
                </div>
              )}
            </div>
            {errors.phone && <p className="mt-1 text-sm text-red-500 font-medium animate-fade-in">{errors.phone}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="group">
            <label className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-primary transition-colors">Date</label>
            <div className="relative">
              <input 
                name="date"
                value={formData.date}
                onChange={handleChange}
                onBlur={handleBlur}
                type="date" 
                min={todayStr}
                className={`${getInputClassName(errors.date)} ${!formData.date ? 'text-gray-400' : 'text-gray-900'}`}
              />
               {errors.date && (
                <div className="absolute right-8 top-3.5 text-red-500 animate-pulse">
                  <AlertCircle size={18} />
                </div>
              )}
            </div>
            {errors.date && <p className="mt-1 text-sm text-red-500 font-medium animate-fade-in">{errors.date}</p>}
          </div>
          
          <div className="group">
            <label className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-primary transition-colors">Guests</label>
            <div className="relative">
              <select 
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full px-4 py-3 rounded-md bg-gray-50 border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors appearance-none"
              >
                <option>1 Person</option>
                <option>2 People</option>
                <option>3 People</option>
                <option>4 People</option>
                <option>5 People</option>
                <option>6+ People</option>
              </select>
              <div className="absolute right-4 top-3.5 pointer-events-none text-gray-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
            </div>
          </div>
        </div>

        <div className="group">
          <label className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-primary transition-colors">Special Requests</label>
          <textarea 
            name="specialRequests"
            value={formData.specialRequests}
            onChange={handleChange}
            onBlur={handleBlur}
            rows={4} 
            className="w-full px-4 py-3 rounded-md bg-gray-50 border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" 
            placeholder="Allergies, special occasion, etc."
          ></textarea>
        </div>

        <Button type="submit" className="w-full flex items-center justify-center gap-2" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="animate-spin" size={20} />
              Processing...
            </>
          ) : (
            'Confirm Reservation'
          )}
        </Button>
      </form>

      <BookingConfirmationModal 
        isOpen={showConfirmation}
        onClose={handleCloseConfirmation}
        onEdit={handleEditReservation}
        bookingDetails={formData}
      />
    </>
  );
};