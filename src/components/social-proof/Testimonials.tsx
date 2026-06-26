"use client";

import React, { useEffect, useRef } from "react";
import StatsBar from "./StatsBar";
import LogoMarquee from "./LogoMarquee";

const testimonials = [
  { 
    quote: "DataPulse cut our pipeline setup time from 2 weeks to 20 minutes. The AI schema detection is genuinely magical.", 
    author: "Priya Sharma", 
    role: "Head of Data Engineering", 
    company: "FinStack" 
  },
  { 
    quote: "We migrated 14 legacy ETL jobs to DataPulse in a single sprint. The real-time sync across our Postgres and BigQuery instances just works.", 
    author: "Marcus Chen", 
    role: "CTO", 
    company: "Lumos Health" 
  },
  { 
    quote: "The analytics dashboards caught a revenue-leaking anomaly our own BI tools missed for months. Paid for itself in week one.", 
    author: "Aisha Patel", 
    role: "VP of Operations", 
    company: "NovaTrade" 
  },
];

export default function Testimonials() {
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          observer.disconnect();
          const items = list.querySelectorAll("li");
          items.forEach((item, index) => {
            // CSS transition delays
            (item as HTMLElement).style.animationDelay = `${index * 150}ms`;
            item.classList.add("animate-[fade-in-up_0.6s_ease-out_forwards]");
          });
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(list);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="social-proof" aria-labelledby="social-proof-heading" className="reveal-up bg-arctic">

      {/* ── TESTIMONIALS GRID ── */}
      <div className="py-24 px-6 max-w-6xl mx-auto overflow-hidden">
        <h2 id="social-proof-heading" className="text-[length:var(--text-section)] font-bold font-display text-oceanic-noir text-center mb-16 tracking-tight">
          Trusted by engineering teams
        </h2>

        <ul 
          ref={listRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((t, i) => (
            <li 
              key={i} 
              className="opacity-0 bg-oceanic-noir rounded-2xl p-8 border border-mystic-mint/30 border-l-4 border-l-forsythia flex flex-col justify-between shadow-lg hover:-translate-y-1 transition-transform duration-300"
            >
              <blockquote className="mb-8">
                {/* Custom Quote SVG */}
                <svg className="w-8 h-8 text-forsythia/40 mb-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="font-body text-arctic/90 italic leading-relaxed text-lg">
                  "{t.quote}"
                </p>
              </blockquote>
              
              <cite className="not-italic flex items-center gap-4">
                <div className="w-12 h-12 bg-mystic-mint/10 rounded-full flex items-center justify-center shrink-0 border border-mystic-mint/20">
                  <span className="font-display font-bold text-forsythia text-xl">
                    {t.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-display font-bold text-arctic">{t.author}</div>
                  <div className="font-display text-sm text-mystic-mint/60">{t.role}, {t.company}</div>
                </div>
              </cite>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
