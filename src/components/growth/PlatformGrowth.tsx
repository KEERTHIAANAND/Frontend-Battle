"use client";

import React, { useEffect, useRef } from "react";

export default function PlatformGrowth() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-draw");
          }
        });
      },
      { threshold: 0.3 }
    );

    const paths = container.querySelectorAll(".growth-path");
    paths.forEach((path) => observer.observe(path));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 px-6 bg-nocturnal border-t border-mystic-mint/10 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT: Copy */}
        <div className="reveal-up">
          <h2 className="text-[length:var(--text-section)] font-bold font-display text-arctic mb-6 tracking-tight">
            Scale without the growing pains.
          </h2>
          <p className="font-body text-arctic/60 text-lg mb-8 leading-relaxed">
            As your AI models demand exponentially more data, your infrastructure shouldn't break a sweat. DataPulse auto-scales your ingestion and processing layers to handle massive spikes instantly. From gigabytes to petabytes, your pipelines stay green.
          </p>
          
          <ul className="space-y-4 font-display font-medium text-arctic/80">
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-forsythia/20 flex items-center justify-center text-forsythia">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              Zero-downtime cluster scaling
            </li>
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-mystic-mint/20 flex items-center justify-center text-mystic-mint">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              Intelligent backpressure management
            </li>
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-forsythia/20 flex items-center justify-center text-forsythia">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              Predictable flat-rate compute costs
            </li>
          </ul>
        </div>

        {/* RIGHT: Animated Growth Graph */}
        <div className="relative h-[400px] w-full rounded-2xl border border-mystic-mint/20 bg-oceanic-noir p-6 flex flex-col justify-end overflow-hidden" ref={containerRef}>
          {/* Grid lines */}
          <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(217,232,226,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(217,232,226,0.05) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          
          {/* Graph labels */}
          <div className="absolute top-6 left-6 text-xs font-display text-mystic-mint/50">Events / Sec</div>
          <div className="absolute bottom-6 right-6 text-xs font-display text-mystic-mint/50">Time</div>

          {/* Animated Graph SVG */}
          <svg className="absolute bottom-0 left-0 w-full h-[80%] overflow-visible" preserveAspectRatio="none" viewBox="0 0 500 250">
            <defs>
              <linearGradient id="line-gradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="rgba(217,232,226,0.4)" />
                <stop offset="50%" stopColor="#114C5A" />
                <stop offset="100%" stopColor="#FFC801" />
              </linearGradient>
              <linearGradient id="area-gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(255,200,1,0.2)" />
                <stop offset="100%" stopColor="rgba(17,76,90,0)" />
              </linearGradient>
            </defs>

            {/* Area Fill */}
            <path 
              className="growth-path opacity-0 transition-opacity duration-1000 delay-500"
              d="M0,250 L0,220 C100,220 150,180 200,160 C250,140 300,170 350,100 C400,30 450,40 500,20 L500,250 Z" 
              fill="url(#area-gradient)" 
            />

            {/* Stroke Line */}
            <path 
              className="growth-path"
              d="M0,220 C100,220 150,180 200,160 C250,140 300,170 350,100 C400,30 450,40 500,20" 
              fill="none" 
              stroke="url(#line-gradient)" 
              strokeWidth="4" 
              strokeLinecap="round"
              style={{ strokeDasharray: "1000", strokeDashoffset: "1000" }}
            />
            
            {/* Pulsing Nodes on the line */}
            <g className="growth-path opacity-0 transition-opacity duration-500 delay-[1200ms]">
              <circle cx="200" cy="160" r="4" fill="#114C5A" stroke="#FFC801" strokeWidth="2" className="node-pulse" style={{ "--pulse-delay": "0ms" } as React.CSSProperties} />
              <circle cx="350" cy="100" r="5" fill="#FFC801" className="node-pulse" style={{ "--pulse-delay": "400ms" } as React.CSSProperties} />
              <circle cx="500" cy="20" r="6" fill="#FFC801" filter="url(#soft-glow)" className="node-pulse" style={{ "--pulse-delay": "800ms" } as React.CSSProperties} />
            </g>
          </svg>
        </div>
      </div>

      <style jsx>{`
        .growth-path.animate-draw {
          animation: draw-line 2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        .growth-path.animate-draw.opacity-0 {
          opacity: 1;
          animation: none;
        }
        @keyframes draw-line {
          to { stroke-dashoffset: 0; }
        }
      `}</style>
    </section>
  );
}
