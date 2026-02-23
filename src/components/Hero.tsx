import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { MagneticButton } from './MagneticButton';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    
    tl.from('.hero-element', {
      y: 60,
      opacity: 0,
      duration: 1.2,
      stagger: 0.1,
      ease: 'power3.out',
      delay: 0.3
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative h-[100dvh] w-full flex items-end pb-24 md:pb-32 px-8 md:px-16 overflow-hidden bg-charcoal">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1448375240586-882707db885b?q=80&w=2070&auto=format&fit=crop" 
          alt="Dark mossy forest" 
          className="w-full h-full object-cover scale-[1.02]"
        />
        {/* Primary-to-black gradient overlay (bg-gradient-to-t) as requested by the prompt */}
        <div className="absolute inset-0 bg-gradient-to-t from-moss via-moss/80 to-charcoal/40" />
      </div>

      {/* Content placed bottom-left */}
      <div className="relative z-10 max-w-4xl text-cream flex flex-col items-start gap-8 w-full">
        <div className="flex flex-col">
          <h1 className="hero-element font-heading font-bold tracking-tight text-4xl md:text-6xl lg:text-[4.5rem] uppercase text-cream/90">
            Identity is the
          </h1>
          <h2 className="hero-element font-drama italic text-7xl md:text-[8rem] lg:text-[10rem] leading-[0.75] tracking-tight mt-1 md:mt-4 text-clay">
            Catalyst.
          </h2>
        </div>

        <p className="hero-element max-w-xl font-sans text-lg md:text-xl text-cream/70 font-light mt-4">
          Omnipresent brand discovery, structural monitoring, and systemic cross-domain generation.
        </p>

        <div className="hero-element mt-4">
          <MagneticButton variant="accent">
            Begin the Process
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
