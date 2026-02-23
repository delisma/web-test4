import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Philosophy() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    gsap.to('.parallax-img', {
      yPercent: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      }
    });

    gsap.from('.phil-line', {
      y: 50,
      opacity: 0,
      duration: 1.2,
      stagger: 0.25,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 65%',
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full py-40 md:py-56 px-8 md:px-16 bg-moss overflow-hidden text-cream flex items-center justify-center">
      {/* Background Parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2913&auto=format&fit=crop" 
          alt="Organic Texture" 
          className="parallax-img w-full h-[130%] object-cover opacity-[0.15] origin-top scale-105"
        />
        <div className="absolute inset-0 bg-moss/80 mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-5xl flex flex-col items-center text-center gap-8 md:gap-12">
        <div className="phil-line overflow-hidden">
          <p className="font-sans font-medium text-lg md:text-xl text-cream/70 tracking-wide uppercase px-4">
            Most platforms focus on: reactive namestorming.
          </p>
        </div>
        
        <div className="phil-line overflow-hidden">
          <h2 className="font-heading text-5xl md:text-7xl lg:text-[7rem] leading-[1.1] font-bold tracking-tight">
            We focus on:
          </h2>
        </div>
        
        <div className="phil-line overflow-hidden mt-[-1rem] md:mt-[-2rem]">
          <span className="font-drama italic font-normal text-clay text-6xl md:text-8xl lg:text-[8rem] leading-[1]">
            omnipresent discovery.
          </span>
        </div>
      </div>
    </section>
  );
}
