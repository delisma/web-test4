import { useState, useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MousePointer2, Activity } from 'lucide-react';
import { cn } from '../utils';

gsap.registerPlugin(ScrollTrigger);

function DiagnosticShuffler() {
  const [items, setItems] = useState([
    { id: 1, title: 'Semantic Resonance', status: 'Optimal' },
    { id: 2, title: 'Vector Space Clustering', status: 'Scanning' },
    { id: 3, title: 'Identity Availability', status: 'Clear' },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setItems(prev => {
        const newArr = [...prev];
        const last = newArr.pop();
        if (last) newArr.unshift(last);
        return newArr;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-cream border border-moss/10 rounded-[2rem] p-8 shadow-sm flex flex-col h-[400px]">
      <div className="mb-8">
        <h3 className="font-heading font-semibold text-xl text-charcoal">Diagnostic Shuffler</h3>
        <p className="font-sans text-charcoal/60 text-sm mt-2">Continuous brand discovery and vector analysis.</p>
      </div>
      <div className="relative flex-1 flex items-center justify-center">
        {items.map((item, index) => {
          const yOffset = index * 16;
          const scale = 1 - index * 0.05;
          const zIndex = 10 - index;
          const opacity = 1 - index * 0.25;

          return (
            <div 
              key={item.id}
              className="absolute w-full max-w-[260px] bg-white border border-moss/10 rounded-2xl p-5 shadow-sm cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:border-moss/30 hover:shadow-md"
              style={{
                transform: `translateY(${yOffset}px) scale(${scale})`,
                zIndex,
                opacity
              }}
            >
              <div className="font-mono text-[10px] text-clay uppercase tracking-widest mb-3">Process Protocol {item.id}.0</div>
              <div className="font-heading font-medium text-base text-charcoal">{item.title}</div>
              <div className="mt-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-moss/80 animate-pulse" />
                <span className="font-sans text-xs text-charcoal/60 tracking-wide">{item.status}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function TelemetryTypewriter() {
  const fullText = "> system.monitor('Brand+1')\n\n[OK] Listening across 42 channels...\n[WARN] Competitor anomaly detected\n[INFO] Tracking sentiment delta: +2.4%\n[OK] Telemetry stream stable.\n\n> awaiting input_";
  const [text, setText] = useState("");
  
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setText("");
          // We could recursively restart but a gentle reset is fine
        }, 3000);
      }
    }, 45);
    return () => clearInterval(interval);
  }, [fullText, text === ""]); // restarts when text is cleared

  return (
    <div className="bg-charcoal text-cream rounded-[2rem] p-8 shadow-xl flex flex-col h-[400px]">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-heading font-semibold text-xl">Telemetry Feed</h3>
          <p className="font-sans text-cream/60 text-sm mt-1">Real-time platform monitoring.</p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-moss/20 rounded-full border border-moss/30">
          <Activity className="w-3 h-3 text-moss animate-pulse" />
          <span className="font-mono text-[10px] text-moss uppercase tracking-widest font-bold">Live</span>
        </div>
      </div>
      <div className="flex-1 bg-[#111] rounded-xl p-5 border border-moss/20 font-mono text-xs md:text-sm text-cream/90 whitespace-pre-line leading-relaxed overflow-hidden shadow-inner relative cursor-text group">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#111] pointer-events-none z-10" />
        {text}<span className="inline-block w-2.5 h-4 bg-clay animate-pulse ml-1 align-middle group-hover:animate-none group-hover:bg-clay/80" />
      </div>
    </div>
  );
}

function CursorScheduler() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const [activeDay, setActiveDay] = useState<number | null>(null);
  const [saved, setSaved] = useState(false);

  useGSAP(() => {
    if (!cursorRef.current) return;
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });
    
    tl.set(cursorRef.current, { x: 250, y: 250, opacity: 0 })
      .to(cursorRef.current, { opacity: 1, duration: 0.3 })
      // Move to 'W' cell
      .to(cursorRef.current, { x: 145, y: 70, duration: 1.2, ease: 'power3.inOut' })
      // click
      .to(cursorRef.current, { scale: 0.8, duration: 0.1, onComplete: () => setActiveDay(3) })
      .to(cursorRef.current, { scale: 1, duration: 0.15 })
      // delay
      .to(cursorRef.current, { x: 145, y: 70, duration: 0.6 })
      // move to button
      .to(cursorRef.current, { x: 130, y: 150, duration: 0.9, ease: 'power2.inOut' })
      // click
      .to(cursorRef.current, { scale: 0.8, duration: 0.1, onComplete: () => setSaved(true) })
      .to(cursorRef.current, { scale: 1, duration: 0.15 })
      // hover
      .to(cursorRef.current, { x: 130, y: 150, duration: 1 })
      // out
      .to(cursorRef.current, { opacity: 0, duration: 0.4, onComplete: () => {
         setActiveDay(null);
         setSaved(false);
      } });
      
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="bg-cream border border-moss/10 rounded-[2rem] p-8 shadow-sm flex flex-col h-[400px] relative overflow-hidden group cursor-pointer hover:border-moss/30 transition-colors duration-300">
      <div className="mb-8 z-10 relative">
        <h3 className="font-heading font-semibold text-xl text-charcoal">Cursor Protocol</h3>
        <p className="font-sans text-charcoal/60 text-sm mt-2">Automated generative AI execution.</p>
      </div>
      
      <div className="relative flex-1 flex flex-col items-center justify-center gap-10 mt-4 z-10 w-full">
        <div className="flex gap-2 w-full justify-center">
          {days.map((d, i) => (
            <div key={i} className={cn(
              "w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center font-mono text-xs md:text-sm transition-all duration-300",
              activeDay === i ? "bg-moss text-cream scale-110 shadow-lg" : "bg-white border border-moss/10 text-charcoal/40"
            )}>
              {d}
            </div>
          ))}
        </div>
        
        <div className={cn(
          "px-6 py-3 rounded-full text-xs font-mono font-medium transition-colors duration-500 min-w-[160px] text-center cursor-pointer",
          saved ? "bg-clay text-cream shadow-md" : "bg-white border border-moss/10 text-moss hover:bg-moss/5"
        )}>
          {saved ? "Generated" : "Run Generation"}
        </div>
      </div>
      
      <div 
        ref={cursorRef} 
        className="absolute z-20 pointer-events-none drop-shadow-xl"
        style={{ top: '100px', left: '0' }}
      >
        <MousePointer2 className="w-7 h-7 text-charcoal fill-white" />
      </div>
    </div>
  );
}

export function Features() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.from('.feature-card', {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out'
    });
  }, { scope: sectionRef });

  return (
    <section id="features" ref={sectionRef} className="py-32 px-8 md:px-16 bg-cream text-charcoal relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl max-w-3xl leading-tight">
          Precision instrumentation for <span className="text-moss italic font-drama font-normal">omnipresent brand dominance.</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="feature-card"><DiagnosticShuffler /></div>
          <div className="feature-card"><TelemetryTypewriter /></div>
          <div className="feature-card"><CursorScheduler /></div>
        </div>
      </div>
    </section>
  );
}
