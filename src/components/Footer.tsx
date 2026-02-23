import React from 'react';

export function Footer() {
  return (
    <footer className="bg-charcoal text-cream rounded-t-[3rem] md:rounded-t-[4rem] px-8 md:px-16 pt-24 md:pt-32 pb-12 mt-[-4rem] relative z-20 overflow-hidden shadow-[0_-20px_50px_-20px_rgba(0,0,0,0.5)]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-8 justify-between">
        <div className="max-w-md">
          <div className="font-heading font-extrabold tracking-tighter text-3xl md:text-4xl uppercase mb-6">
            Brand<span className="text-clay ml-1">+1</span>
          </div>
          <p className="font-sans text-cream/70 text-sm md:text-base leading-relaxed mb-10 pr-4 md:pr-12">
            Omnipresent brand discovery, structural monitoring, and systemic generative deployment across domains.
          </p>
          
          <div className="inline-flex items-center gap-4 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md group cursor-default">
            <div className="w-2.5 h-2.5 rounded-full bg-[#22c55e] animate-[pulse_2s_ease-in-out_infinite] shadow-[0_0_12px_rgba(34,197,94,0.6)] motion-reduce:animate-none group-hover:animate-none group-hover:opacity-80 transition-opacity" />
            <span className="font-mono text-xs uppercase tracking-widest text-cream/80 font-semibold mt-[2px]">System Operational</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-16 md:gap-24">
          <div className="flex flex-col gap-5">
            <h4 className="font-mono text-[10px] md:text-xs text-clay uppercase tracking-widest mb-2 font-bold opacity-80">Network</h4>
            <a href="#discovery" className="font-sans text-sm md:text-base text-cream/70 hover:text-cream transition-colors duration-200">Discovery</a>
            <a href="#monitoring" className="font-sans text-sm md:text-base text-cream/70 hover:text-cream transition-colors duration-200">Monitoring</a>
            <a href="#generation" className="font-sans text-sm md:text-base text-cream/70 hover:text-cream transition-colors duration-200">Generation</a>
            <a href="#" className="font-sans text-sm md:text-base text-cream/70 hover:text-cream transition-colors duration-200">Architecture</a>
          </div>
          <div className="flex flex-col gap-5">
            <h4 className="font-mono text-[10px] md:text-xs text-clay uppercase tracking-widest mb-2 font-bold opacity-80">Legal Protocol</h4>
            <a href="#" className="font-sans text-sm md:text-base text-cream/70 hover:text-cream transition-colors duration-200">Terms of Matrix</a>
            <a href="#" className="font-sans text-sm md:text-base text-cream/70 hover:text-cream transition-colors duration-200">Data Privacy</a>
            <a href="#" className="font-sans text-sm md:text-base text-cream/70 hover:text-cream transition-colors duration-200">Cookie Schema</a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-24 md:mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-[10px] md:text-xs text-cream/40 font-mono">
        <p>© 2026 Brand+1 Analytics Core. All vectors reserved.</p>
        <p className="mt-4 md:mt-0 uppercase tracking-widest">Identity is the Catalyst.</p>
      </div>
    </footer>
  );
}
