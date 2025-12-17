import React from 'react';
import { VisualItem } from '../types';

const visualItems: VisualItem[] = [
  { id: 10, url: 'https://picsum.photos/600/800?grayscale&random=1', alt: 'Fragment 1' },
  { id: 11, url: 'https://picsum.photos/600/800?grayscale&random=2', alt: 'Fragment 2' },
  { id: 12, url: 'https://picsum.photos/600/800?grayscale&random=3', alt: 'Fragment 3' },
  { id: 13, url: 'https://picsum.photos/600/800?grayscale&random=4', alt: 'Fragment 4' },
];

const Visuals: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center md:text-left">
           <span className="text-xs text-zinc-600 tracking-[0.2em] uppercase">
              Visual Memories
           </span>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {visualItems.map((item) => (
            <div key={item.id} className="relative aspect-[3/4] overflow-hidden group bg-zinc-900">
              <div className="absolute inset-0 bg-zinc-800 animate-pulse" /> {/* Loading state simulation */}
              <img 
                src={item.url} 
                alt={item.alt}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out mix-blend-luminosity hover:mix-blend-normal"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Visuals;