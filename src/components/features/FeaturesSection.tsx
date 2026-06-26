"use client";

import React, { useRef, useEffect, useState } from "react";

const bentoFeatures = [
  {
    id: 0,
    title: "Real-Time Stream Processing",
    description:
      "Ingest and process millions of events per second with sub-millisecond latency. Built on a distributed rust core for maximum throughput.",
    icon: (
      <img src="/assets/icon-stream.svg" alt="Real-Time Stream Processing" width="32" height="32" className="w-8 h-8 mb-4" />
    ),
    className: "lg:col-span-2 lg:row-span-1 flex flex-col justify-between",
    isHero: true,
  },
  {
    id: 1,
    title: "AI Schema Detection",
    description: "Automatically infers and maps nested JSON structures across multiple endpoints.",
    icon: (
      <img src="/assets/icon-ai.svg" alt="AI Schema Detection" width="32" height="32" className="w-8 h-8 mb-4" />
    ),
    className: "lg:col-span-1 lg:row-span-1",
  },
  {
    id: 2,
    title: "Multi-Cloud Sync",
    description: "Keep AWS, GCP, and Azure databases in perfect real-time synchronization.",
    icon: (
      <img src="/assets/icon-cloud.svg" alt="Multi-Cloud Sync" width="32" height="32" className="w-8 h-8 mb-4" />
    ),
    className: "lg:col-span-1 lg:row-span-1",
  },
  {
    id: 3,
    title: "No-Code Pipelines",
    description: "Drag-and-drop workflow builder designed for analysts, engineered for scale.",
    icon: (
      <img src="/assets/icon-pipeline.svg" alt="No-Code Pipelines" width="32" height="32" className="w-8 h-8 mb-4" />
    ),
    className: "lg:col-span-1 lg:row-span-1",
  },
  {
    id: 4,
    title: "Compliance Engine",
    description: "Automated PII masking, SOC 2 audit logs, and HIPAA compliant data residency controls out of the box.",
    icon: (
      <img src="/assets/icon-shield.svg" alt="Compliance Engine" width="32" height="32" className="w-8 h-8 mb-4" />
    ),
    className: "lg:col-span-2 lg:row-span-1",
  },
  {
    id: 5,
    title: "99.97% SLA",
    description: "Enterprise-grade reliability with guaranteed uptime and dedicated support.",
    icon: (
      <div className="flex items-center gap-2 mb-4">
        <img src="/assets/icon-sla.svg" alt="99.97% SLA" width="32" height="32" className="w-8 h-8" />
        <span className="text-3xl font-bold font-display text-forsythia block">99.97%</span>
      </div>
    ),
    className: "lg:col-span-1 lg:row-span-1 flex flex-col justify-center",
  },
];

const AnimatedDataFlow = () => (
  <svg viewBox="0 0 300 60" className="w-full h-auto mt-8 opacity-90" aria-hidden="true">
    <path d="M 20 30 Q 85 5 150 30 T 280 30" fill="none" stroke="rgba(217,232,226,0.15)" strokeWidth="2" />
    <path 
      d="M 20 30 Q 85 5 150 30 T 280 30" 
      fill="none" 
      stroke="var(--forsythia)" 
      strokeWidth="2" 
      strokeDasharray="60 180" 
      className="line-flow" 
    />
    <circle cx="20" cy="30" r="5" fill="var(--oceanic-noir)" stroke="var(--mystic-mint)" strokeWidth="1.5" />
    <circle cx="150" cy="30" r="5" fill="var(--oceanic-noir)" stroke="var(--mystic-mint)" strokeWidth="1.5" />
    <circle cx="280" cy="30" r="5" fill="var(--oceanic-noir)" stroke="var(--mystic-mint)" strokeWidth="1.5" />
  </svg>
);

const AccordionItem = ({
  feature,
  isOpen,
  onToggle,
}: {
  feature: typeof bentoFeatures[0];
  isOpen: boolean;
  onToggle: () => void;
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || !contentRef.current) return;
    const observer = new ResizeObserver(() => {
      if (contentRef.current) {
        setHeight(contentRef.current.scrollHeight);
      }
    });
    observer.observe(contentRef.current);
    return () => observer.disconnect();
  }, [isOpen]);

  return (
    <div className="accordion-item border border-mystic-mint/30 rounded-2xl bg-oceanic-noir mb-4 overflow-hidden">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus:ring-2 focus:ring-forsythia/50 transition-colors hover:bg-mystic-mint/5"
      >
        <div className="flex items-center gap-4">
          <div className="text-forsythia shrink-0 flex items-center justify-center [&>svg]:w-6 [&>svg]:h-6 [&>svg]:mb-0 [&>span]:mb-0 [&>span]:text-xl">
            {feature.icon}
          </div>
          <span className="font-display font-bold text-lg text-arctic">{feature.title}</span>
        </div>
        <svg
          className={`w-5 h-5 text-mystic-mint/50 transition-transform duration-200 ease-out shrink-0 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className="accordion-collapse overflow-hidden"
        style={{ maxHeight: `${height}px` }}
      >
        <div
          ref={contentRef}
          className="p-6 pt-0 text-mystic-mint/70 font-body text-sm leading-relaxed border-t border-mystic-mint/10"
        >
          <p className="pt-4">{feature.description}</p>
          {feature.isHero && <AnimatedDataFlow />}
        </div>
      </div>
    </div>
  );
};

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const activeIndexRef = useRef<number | null>(null);
  const isMobileRef = useRef<boolean>(false);
  const [accordionOpen, setAccordionOpen] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      isMobileRef.current = window.innerWidth < 1024;
    }

    const observer = new ResizeObserver((entries) => {
      const width = entries[0].contentRect.width;
      const wasMobile = isMobileRef.current;
      const isMobile = width < 1024;
      isMobileRef.current = isMobile;

      if (!wasMobile && isMobile) {
        // Context Lock: Switched TO mobile — transfer active index
        const lastActive = activeIndexRef.current;
        if (lastActive !== null) {
          setAccordionOpen(lastActive);
        }
      }
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseEnter = (index: number) => {
    activeIndexRef.current = index;
    if (gridRef.current) {
      gridRef.current.setAttribute("data-active-index", index.toString());
    }
    window.dispatchEvent(new CustomEvent("bento:active", { detail: { index } }));
  };

  const toggleAccordion = (index: number) => {
    setAccordionOpen(prev => prev === index ? null : index);
    activeIndexRef.current = index;
  };

  return (
    <section 
      ref={sectionRef} 
      id="features" 
      aria-labelledby="features-heading" 
      className="reveal-up bg-arctic py-24 px-6 overflow-hidden"
    >
      <style>{`
        .bento-card {
          position: relative;
          background-color: var(--oceanic-noir);
          border-radius: 1.5rem; /* 24px */
          z-index: 1;
          will-change: transform;
          transition: transform 200ms ease-out;
        }
        
        .bento-card::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 1.5rem;
          padding: 1px; /* border width */
          background: linear-gradient(to bottom right, rgba(217,232,226,0.2), rgba(217,232,226,0.02));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          z-index: -1;
          pointer-events: none;
          transition: background 200ms ease-out;
        }
        
        .bento-card:hover {
          transform: translateY(-4px);
        }
        
        .bento-card:hover::before {
          background: var(--forsythia);
        }

        .accordion-collapse {
          transition: max-height 350ms cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>

      <div className="max-w-6xl mx-auto">
        <h2 id="features-heading" className="text-[length:var(--text-section)] font-bold font-display text-oceanic-noir text-center mb-4 tracking-tight">
          Built for modern data teams
        </h2>
        <p className="text-center text-nocturnal/60 font-body max-w-xl mx-auto mb-16 text-lg">
          Everything you need to automate, transform, and deliver data at scale — without the infrastructure headache.
        </p>

        {/* ── DESKTOP BENTO GRID (≥1024px) ── */}
        <div 
          ref={gridRef}
          className="bento-grid hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr"
          data-active-index="-1"
        >
          {bentoFeatures.map((feature) => (
            <article
              key={feature.id}
              className={`bento-card p-8 flex flex-col ${feature.className}`}
              onMouseEnter={() => handleMouseEnter(feature.id)}
            >
              <div>
                {feature.icon}
                <h3 className="text-xl font-bold font-display text-arctic mb-2">
                  {feature.title}
                </h3>
                <p className="text-mystic-mint/70 font-body leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
              
              {feature.isHero && <AnimatedDataFlow />}
            </article>
          ))}
        </div>

        {/* ── MOBILE ACCORDION LIST (<1024px) ── */}
        <div className="accordion-list lg:hidden flex flex-col">
          {bentoFeatures.map((feature) => (
            <AccordionItem 
              key={feature.id} 
              feature={feature} 
              isOpen={accordionOpen === feature.id} 
              onToggle={() => toggleAccordion(feature.id)} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
