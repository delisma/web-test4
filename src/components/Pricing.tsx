import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check } from 'lucide-react';
import { MagneticButton } from './MagneticButton';
import { cn } from '../utils';

gsap.registerPlugin(ScrollTrigger);

const tiers = [
  {
    name: "Essential",
    price: "$299",
    desc: "Foundational brand discovery and vector tracking.",
    features: ["Daily semantic scanning", "Basic trademark checks", "10 generation credits/mo", "Standard analytics"],
    isPopular: false
  },
  {
    name: "Performance",
    price: "$899",
    desc: "Omnipresent monitoring with automated generation.",
    features: ["Real-time vector tracking", "Deep trademark sink analysis", "Unlimited generations", "Automated domain registry", "Priority support"],
    isPopular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "Dedicated structural AI deployment spanning all networks.",
    features: ["Dedicated AI model", "Custom vector models", "Full API access", "SLA guarantee", "White-glove onboarding"],
    isPopular: false
  }
];

export function Pricing() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.pricing-card', {
      y: 60,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%',
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-32 md:py-48 px-8 md:px-16 bg-cream text-charcoal">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center max-w-2xl mb-20 md:mb-28">
          <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-7xl mb-6 tracking-tight">Access the <span className="text-moss">Network</span></h2>
          <p className="font-sans text-lg md:text-xl text-charcoal/70">Deploy omnipresent tools to secure and generate your cognitive footprint.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 w-full items-center">
          {tiers.map((tier) => (
            <div 
              key={tier.name}
              className={cn(
                "pricing-card relative flex flex-col p-10 md:p-12 rounded-[2.5rem] md:rounded-[3rem] transition-all duration-500",
                tier.isPopular 
                  ? "bg-moss text-cream lg:scale-105 shadow-[0_20px_60px_-15px_rgba(46,64,54,0.4)] z-10 py-12 md:py-16" 
                  : "bg-white border border-moss/10 shadow-sm"
              )}
            >
              {tier.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-clay text-cream px-5 py-2 rounded-full text-[10px] md:text-xs font-mono font-bold uppercase tracking-widest shadow-lg">
                  Most Deployed
                </div>
              )}
              
              <h3 className="font-heading font-semibold text-2xl md:text-3xl mb-3">{tier.name}</h3>
              <p className={cn("text-sm md:text-base mb-8 min-h-[48px]", tier.isPopular ? "text-cream/90" : "text-charcoal/80")}>{tier.desc}</p>
              
              <div className="mb-10 flex items-baseline gap-2">
                <span className="font-heading font-bold text-5xl md:text-6xl tracking-tighter">{tier.price}</span>
                {tier.price !== "Custom" && <span className={cn("font-mono text-sm", tier.isPopular ? "text-cream/70" : "text-charcoal/60")}>/mo</span>}
              </div>

              <div className="flex-1 flex flex-col gap-5 mb-12">
                {tier.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <Check className={cn("w-5 h-5 shrink-0 mt-0.5", tier.isPopular ? "text-clay" : "text-moss")} />
                    <span className={cn("font-sans text-sm md:text-base", tier.isPopular ? "text-cream/90" : "text-charcoal/80")}>{feature}</span>
                  </div>
                ))}
              </div>

              <MagneticButton variant={tier.isPopular ? "accent" : "outline"} className="w-full py-5">
                {tier.price === "Custom" ? "Contact Architecture" : "Initialize Protocol"}
              </MagneticButton>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
