import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { SectionTitle } from './SectionTitle';
import { GalleryImage } from '../types';

const images: GalleryImage[] = [
  { id: 1, url: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80', alt: 'Cocktail' },
  { id: 2, url: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80', alt: 'Drinks' },
  { id: 3, url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80', alt: 'Food spread' },
  { id: 4, url: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=800&q=80', alt: 'Restaurant Vibe' }, 
  { id: 5, url: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80', alt: 'Cake' },
  { id: 6, url: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=800&q=80', alt: 'Toast' },
];

export const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="gallery" className="py-24 bg-stone-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Moments captured" 
          subtitle="Gallery" 
          light={true}
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, index) => (
            <div 
              key={img.id} 
              className={`relative overflow-hidden rounded-lg group h-64 cursor-pointer ${index === 2 || index === 3 ? 'md:col-span-2' : ''}`}
              onClick={() => openLightbox(img)}
            >
              <img 
                src={img.url} 
                alt={img.alt} 
                width="800"
                height="600"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white border border-white px-4 py-2 uppercase tracking-widest text-sm font-semibold flex items-center gap-2">
                  <ZoomIn size={16} /> View
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={closeLightbox}
        >
          <button 
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors p-2"
          >
            <X size={32} />
          </button>
          
          <div 
            className="relative max-w-5xl max-h-[90vh] w-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage.url} 
              alt={selectedImage.alt} 
              className="max-w-full max-h-[85vh] object-contain rounded-md shadow-2xl animate-scale-in"
            />
            <div className="absolute bottom-[-3rem] left-0 w-full text-center text-white/90 font-serif text-lg">
              {selectedImage.alt}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};