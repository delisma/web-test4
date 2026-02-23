import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Philosophy } from './components/Philosophy';
import { Protocol } from './components/Protocol';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="relative w-full min-h-screen bg-background text-foreground antialiased selection:bg-moss/30 selection:text-moss font-sans">
      <div className="noise-overlay" />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Philosophy />
        <Protocol />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

export default App;
