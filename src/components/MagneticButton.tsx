import React, { useRef } from 'react';
import gsap from 'gsap';
import { cn } from '../utils';

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'accent' | 'outline' | 'ghost';
}

export function MagneticButton({ children, className, variant = 'primary', ...props }: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) * 0.25;
    const y = (e.clientY - top - height / 2) * 0.25;

    gsap.to(buttonRef.current, {
      x,
      y,
      duration: 0.6,
      ease: "power3.out"
    });
  };

  const handleMouseLeave = () => {
    if (!buttonRef.current) return;
    gsap.to(buttonRef.current, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: "elastic.out(1, 0.3)"
    });
  };

  const baseStyles = "relative inline-flex items-center justify-center px-8 py-4 overflow-hidden rounded-[2rem] font-heading font-semibold text-sm transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:scale-[1.03] group";
  
  const variants = {
    primary: "bg-moss text-cream",
    accent: "bg-clay text-cream",
    outline: "border border-moss/20 text-charcoal hover:border-moss/50",
    ghost: "text-charcoal hover:bg-moss/5"
  };

  const bgVariants = {
    primary: "bg-charcoal",
    accent: "bg-charcoal",
    outline: "bg-cream", // Subtle fill on hover
    ghost: "bg-moss/10"
  };

  return (
    <button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      <span className={cn("absolute inset-0 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] z-0 rounded-[2rem]", bgVariants[variant])} />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
}
