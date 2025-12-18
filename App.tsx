import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Music from './components/Music';
import AISection from './components/AISection';
import Visuals from './components/Visuals';
import Collaborations from './components/Collaborations';
import Footer from './components/Footer';

function App() {
  return (
    <main className="w-full min-h-screen bg-black text-zinc-200 relative">
      {/* Cinematic Noise Overlay */}
      <div className="bg-noise" />

      {/* 
        Vertical Soundspace Structure
      */}
      
      <div id="hero">
        <Hero />
      </div>
      
      {/* Breath spacer */}
      <div className="h-24 w-full bg-gradient-to-b from-black to-transparent" />
      
      <div id="about">
        <About />
      </div>
      
      <div id="music">
        <Music />
      </div>
      
      <div id="ai-section">
        <AISection />
      </div>
      
      <div id="visuals">
        <Visuals />
      </div>
      
      <div id="collaborations">
        <Collaborations />
      </div>
      
      <div id="footer">
        <Footer />
      </div>
    </main>
  );
}

export default App;