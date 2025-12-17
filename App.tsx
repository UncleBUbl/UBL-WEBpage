import React from 'react';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Music from './components/Music';
import GeminiOracle from './components/GeminiOracle';
import Visuals from './components/Visuals';
import Collaborations from './components/Collaborations';
import Footer from './components/Footer';

function App() {
  return (
    <main className="w-full min-h-screen bg-black text-zinc-200">
      {/* 
        Structure:
        1. Hero (Immersive Entry)
        2. Philosophy (Conscious State)
        3. Music (Late-night/Sensual State)
        4. Gemini Oracle (Futuristic/Experimental State)
        5. Visuals & Collab (Closing)
      */}
      
      <Hero />
      
      {/* Add a subtle breath/spacer */}
      <div className="h-24 w-full bg-gradient-to-b from-black to-transparent" />
      
      <Philosophy />
      
      <Music />
      
      {/* 
        The Oracle section acts as a bridge to the futuristic state.
        We ensure it feels distinct but connected.
      */}
      <GeminiOracle />
      
      <Visuals />
      
      <Collaborations />
      
      <Footer />
    </main>
  );
}

export default App;