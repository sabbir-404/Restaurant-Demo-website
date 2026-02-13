import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  centered = true,
  light = false 
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
      {subtitle && (
        <span className={`block text-sm font-semibold tracking-widest uppercase mb-2 ${light ? 'text-amber-400' : 'text-primary'}`}>
          {subtitle}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl font-serif font-bold ${light ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h2>
      <div className={`h-1 w-20 bg-primary mt-4 ${centered ? 'mx-auto' : ''} rounded-full`}></div>
    </div>
  );
};