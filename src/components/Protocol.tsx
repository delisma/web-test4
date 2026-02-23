import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    id: 1,
    title: "Discover",
    desc: "Ingest multi-domain signals across the internet to unearth semantic potentials.",
    Visual: () => (
      <svg viewBox="0 0 100 100" className="w-full h-full custom-spin">
        <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1" fill="none" className="text-moss/20" />
        <path d="M50 10 L50 90 M10 50 L90 50 M21.7 21.7 L78.3 78.3 M21.7 78.3 L78.3 21.7" stroke="currentColor" strokeWidth="0.5" className="text-moss/40" />
        <circle cx="50" cy="10" r="3" className="fill-clay" />
        <circle cx="90" cy="50" r="3" className="fill-clay" />
        <circle cx="50" cy="90" r="3" className="fill-clay" />
        <circle cx="10" cy="50" r="3" className="fill-clay" />
      </svg>
    )
  },
  {
    id: 2,
    title: "Track",
    desc: "Monitor vector changes and sentiment deltas in algorithmic real-time.",
    Visual: () => (
      <div className="relative w-full h-full border border-moss/20 overflow-hidden flex items-center justify-center rounded-xl">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        <div className="absolute left-0 w-full h-[2px] bg-clay shadow-[0_0_15px_rgba(204,88,51,0.8)] custom-scan" />
      </div>
    )
  },
  {
    id: 3,
    title: "Generate",
    desc: "Deploy cross-domain AI generation across registries, social and domains instantly.",
    Visual: () => (
      <svg viewBox="0 0 200 100" className="w-full h-full">
        <path 
          d="M0 50 L80 50 L90 20 L100 80 L110 50 L200 50" 
          stroke="currentColor" 
          strokeWidth="3" 
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none" 
          className="text-clay drop-shadow-md"
          strokeDasharray="300"
          strokeDashoffset="300"
        >
          <animate attributeName="stroke-dashoffset" values="300;0" dur="2.5s" repeatCount="indefinite" />
        </path>
      </svg>
    )
  }
];

export function Protocol() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray<HTMLElement>('.protocol-card');
    
    // We pin the container, and stagger the cards coming from the bottom
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: `+=${cards.length * 100}%`,
      pin: true,
      scrub: 1,
      animation: gsap.timeline()
        .to(cards[0], { scale: 0.9, filter: 'blur(10px)', opacity: 0.4, yPercent: -5 }, 0)
        .from(cards[1], { yPercent: 120, opacity: 0, scale: 0.9, duration: 1 }, 0)
        
        .to(cards[1], { scale: 0.9, filter: 'blur(10px)', opacity: 0.4, yPercent: -5 }, 1)
        .from(cards[2], { yPercent: 120, opacity: 0, scale: 0.9, duration: 1 }, 1)
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full h-screen bg-charcoal overflow-hidden">
      {steps.map((step, i) => (
        <div 
          key={step.id} 
          className="protocol-card absolute inset-0 w-full h-full flex items-center justify-center p-6 md:p-12 bg-charcoal"
          style={{ zIndex: i }}
        >
          <div className="w-full max-w-6xl h-[80vh] md:h-[70vh] bg-cream text-charcoal rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row gap-8 md:gap-16 overflow-hidden relative shadow-2xl border border-moss/10">
            <div className="flex-1 flex flex-col justify-center">
              <span className="font-mono text-clay text-sm md:text-base tracking-widest uppercase mb-4 md:mb-6 opacity-80">
                Step 0{step.id}
              </span>
              <h2 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl mb-4 md:mb-8">
                {step.title}
              </h2>
              <p className="font-sans text-base md:text-xl text-charcoal/70 max-w-md leading-relaxed">
                {step.desc}
              </p>
            </div>
            
            <div className="flex-1 rounded-[1.5rem] md:rounded-[2rem] bg-moss/5 flex items-center justify-center p-8 md:p-16 relative overflow-hidden text-moss">
               <step.Visual />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
