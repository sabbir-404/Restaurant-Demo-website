import React from 'react';
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
              className={`relative overflow-hidden rounded-lg group h-64 ${index === 2 || index === 3 ? 'md:col-span-2' : ''}`}
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
                <span className="text-white border border-white px-4 py-2 uppercase tracking-widest text-sm font-semibold">
                  View
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};