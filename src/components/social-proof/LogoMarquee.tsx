import React from "react";

export default function LogoMarquee() {
  const logos = [
    { name: "FinStack" },
    { name: "Lumos Health" },
    { name: "NovaTrade" },
    { name: "Quantum Data" },
    { name: "AeroDynamics" },
    { name: "Nexus Systems" },
  ];

  return (
    <div className="py-10 overflow-hidden bg-arctic relative group border-b border-mystic-mint/20">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-arctic to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-arctic to-transparent z-10 pointer-events-none" />
      
      <div className="flex w-max animate-[marquee_30s_linear_infinite] group-hover:[animation-play-state:paused]">
        {/* Triplicate for seamless infinite looping */}
        {[...logos, ...logos, ...logos].map((logo, i) => (
          <div key={i} className="flex items-center gap-3 px-12">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-oceanic-noir/40">
              <rect x="2" y="2" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="2" />
              <circle cx="12" cy="12" r="4" fill="currentColor" />
            </svg>
            <span className="font-display font-bold text-oceanic-noir/50 text-xl tracking-wider uppercase">
              {logo.name}
            </span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-33.3333%, 0, 0); }
        }
      `}</style>
    </div>
  );
}
