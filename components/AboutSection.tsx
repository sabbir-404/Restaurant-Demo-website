import React from 'react';
import { CheckCircle } from 'lucide-react';
import { SectionTitle } from './SectionTitle';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Grid */}
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80" 
              alt="Chef plating food" 
              className="rounded-2xl shadow-lg mt-8 transform hover:scale-105 transition-transform duration-500"
            />
            <img 
              src="https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=800&q=80" 
              alt="Restaurant atmosphere" 
              className="rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Content */}
          <div className="lg:w-1/2">
            <SectionTitle 
              title="Our Story" 
              subtitle="Since 2014" 
              centered={false} 
            />
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              At Lumière, we believe that dining is more than just eating—it's an experience that engages all the senses. 
              Founded by Chef Laurent in 2014, our bistro was born from a passion for bringing authentic, farm-to-table cuisine 
              to our local community.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              We source our ingredients from local farmers and artisans, ensuring that every dish we serve bursts 
              with freshness and flavor. Whether you're here for a romantic dinner or a casual lunch with friends, 
              we promise a warm welcome and an unforgettable meal.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {['Fresh Local Ingredients', 'Expert Master Chefs', 'Cozy Ambiance', 'Sustainable Practices'].map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle className="text-primary flex-shrink-0" size={20} />
                  <span className="text-gray-800 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <div className="flex -space-x-4">
                {[1, 2, 3].map((i) => (
                  <img 
                    key={i}
                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                    alt="Reviewer"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <div>
                <div className="flex text-amber-500 text-sm">★★★★★</div>
                <p className="text-xs text-gray-500">Trusted by 5000+ customers</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};