import React from 'react';

const Collaborations: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-black text-center">
      <div className="max-w-2xl mx-auto border border-zinc-900 p-8 md:p-12">
        <h3 className="text-sm font-light tracking-[0.2em] text-zinc-500 mb-8 uppercase">
          Human X Machine
        </h3>
        
        <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed">
          While algorithms generate the seeds, the soul is cultivated by human hands. 
          Featuring collaborations with vocalists, producers, and visual artists who breathe life into the binary.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-8 text-xs tracking-widest text-zinc-600 uppercase">
          <span>Vocals: [Redacted]</span>
          <span>///</span>
          <span>Production: Uncle B</span>
          <span>///</span>
          <span>Visuals: AI Engine 4</span>
        </div>
      </div>
    </section>
  );
};

export default Collaborations;