import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Trigger entrance animation
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Abstract Background Energy */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-[100px] animate-drift" />
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-indigo-900/10 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-b from-transparent via-black/80 to-black z-10" />
      </div>

      <div className={`relative z-20 text-center px-6 transition-opacity duration-1000 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h1 className="text-4xl md:text-7xl font-light tracking-[0.2em] text-white mix-blend-difference mb-6 uppercase">
          Uncle B Laced It
        </h1>
        <p className="text-sm md:text-lg text-zinc-400 tracking-widest font-light max-w-xl mx-auto leading-relaxed">
          BETWEEN THE CODE AND THE CHORD.<br />
          A DIGITAL SOUL.
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 animate-bounce opacity-50">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M7 13L12 18L17 13M7 6L12 11L17 6" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;