import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image - Static */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('/assets/hero-bg.jpg')" }}
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/30 via-black/50 to-black pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 text-center px-6">
        <h1 className="text-4xl md:text-7xl font-light tracking-[0.2em] text-white mb-6 uppercase">
          Uncle B Laced It
        </h1>
        <p className="text-sm md:text-lg text-zinc-400 tracking-widest font-light max-w-xl mx-auto leading-relaxed">
          BETWEEN THE CODE AND THE CHORD.<br />
          A DIGITAL SOUL.
        </p>
      </div>
    </section>
  );
};

export default Hero;