"use client";

import React, { useEffect, useRef } from "react";

const stats = [
  { id: 1, target: 50, prefix: "", suffix: "M+", label: "Events Processed / Day", decimals: 0 },
  { id: 2, target: 10, prefix: "", suffix: "K+", label: "Active Pipelines", decimals: 0 },
  { id: 3, target: 99.97, prefix: "", suffix: "%", label: "Guaranteed Uptime", decimals: 2 },
  { id: 4, target: 2, prefix: "< ", suffix: "ms", label: "P99 Latency", decimals: 0 },
];

export default function StatsBar() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          observer.disconnect();
          
          const counters = container.querySelectorAll<HTMLElement>("[data-counter-target]");
          const duration = 2000; // 2 seconds animation
          
          counters.forEach((el) => {
            const target = parseFloat(el.getAttribute("data-counter-target") || "0");
            const decimals = parseInt(el.getAttribute("data-decimals") || "0");
            const prefix = el.getAttribute("data-prefix") || "";
            const suffix = el.getAttribute("data-suffix") || "";
            let startTime: number | null = null;
            
            const animate = (timestamp: number) => {
              if (!startTime) startTime = timestamp;
              const progress = Math.min((timestamp - startTime) / duration, 1);
              
              // Easing out: 1 - (1 - t)^3
              const easeProgress = 1 - Math.pow(1 - progress, 3);
              const current = easeProgress * target;
              
              el.textContent = `${prefix}${current.toFixed(decimals)}${suffix}`;
              
              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                el.textContent = `${prefix}${target.toFixed(decimals)}${suffix}`;
              }
            };
            requestAnimationFrame(animate);
          });
        }
      },
      { threshold: 0.1 } // trigger when 10% visible
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="bg-nocturnal py-16 border-y border-mystic-mint/10 shadow-inner">
      <dl className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
        {stats.map((stat) => (
          <div key={stat.id} className="flex flex-col items-center">
            <dt className="order-2 font-body text-mystic-mint/60 text-sm md:text-base mt-2">
              {stat.label}
            </dt>
            <dd
              data-counter-target={stat.target}
              data-decimals={stat.decimals}
              data-prefix={stat.prefix}
              data-suffix={stat.suffix}
              className="order-1 text-4xl md:text-5xl font-display font-bold text-arctic tracking-tight"
            >
              0{stat.suffix}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
