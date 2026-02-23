import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MagneticButton } from './MagneticButton';
import { cn } from '../utils';

gsap.registerPlugin(ScrollTrigger);

export function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useGSAP(() => {
    ScrollTrigger.create({
      start: 'top -50',
      onUpdate: (self) => {
        setIsScrolled(self.direction === 1 || self.scroll() > 50);
      }
    });
  }, []);

  return (
    <nav
      ref={navRef}
      className={cn(
        "fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] rounded-[2rem] px-8 py-4 flex items-center justify-between gap-16",
        isScrolled 
          ? "bg-cream/70 backdrop-blur-xl border border-moss/10 shadow-lg text-moss"
          : "bg-transparent text-cream"
      )}
    >
      <div className="font-heading font-extrabold tracking-tighter text-2xl uppercase relative top-[-1px]">
        Brand<span className="text-clay ml-1">+1</span>
      </div>

      <div className="hidden md:flex items-center gap-8 font-sans font-medium text-sm tracking-wide uppercase">
        <a href="#discovery" className="hover:-translate-y-[1px] transition-transform">Discovery</a>
        <a href="#monitoring" className="hover:-translate-y-[1px] transition-transform">Monitoring</a>
        <a href="#generation" className="hover:-translate-y-[1px] transition-transform">Generation</a>
      </div>

      <MagneticButton variant={isScrolled ? "primary" : "accent"} className="px-6 py-2">
        <span className={cn(
          "transition-colors duration-300",
          isScrolled ? "text-cream" : "text-cream"
        )}>Sign Up</span>
      </MagneticButton>
    </nav>
  );
}
