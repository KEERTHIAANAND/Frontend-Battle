"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

const navLinks = [
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "Testimonials", href: "#social-proof" },
  { name: "Docs", href: "#" },
];

export default function Navbar() {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(!entry.isIntersecting);
      },
      { rootMargin: "0px" } // Triggers exactly when the 80px sentinel leaves the viewport
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Sentinel element to track scroll past 80px */}
      <div ref={sentinelRef} className="absolute top-0 w-full h-[80px] pointer-events-none -z-50" aria-hidden="true" />
      
      <header
        className={`sticky top-0 z-50 transition-[border-color] duration-300`}
        style={{
          backgroundColor: "rgba(17, 76, 90, 0.85)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: isScrolled ? "0.5px solid rgba(217, 232, 226, 0.2)" : "0.5px solid transparent"
        }}
      >
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-forsythia/50 rounded">
            <img src="/assets/logo-mark.svg" alt="DataPulse Logo" width="24" height="24" className="transition-transform duration-300 group-hover:scale-110" />
            <span className="font-display font-bold text-2xl tracking-tight text-arctic">
              Data<span className="text-mystic-mint">Pulse</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:block" aria-label="Main navigation">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="nav-link font-body text-sm font-medium text-arctic/80 hover:text-forsythia transition-colors focus:outline-none focus:ring-2 focus:ring-forsythia/50 rounded px-2 py-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Desktop */}
          <div className="hidden md:block">
            <Link 
              href="#pricing"
              className="btn-cta inline-block px-6 py-2.5 bg-forsythia text-oceanic-noir font-display font-bold text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-forsythia focus:ring-offset-2 focus:ring-offset-nocturnal"
            >
              Get Started Free
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle mobile menu"
            className="md:hidden relative w-10 h-10 flex flex-col justify-center items-center gap-[5px] focus:outline-none focus:ring-2 focus:ring-forsythia/50 rounded min-h-[44px] min-w-[44px]"
          >
            <span className={`block w-6 h-[2px] bg-arctic transition-all duration-300 origin-center ${isMobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-6 h-[2px] bg-arctic transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-[2px] bg-arctic transition-all duration-300 origin-center ${isMobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div 
          id="mobile-menu"
          className="md:hidden overflow-hidden transition-[max-height] duration-350 ease-in-out"
          style={{ 
            maxHeight: isMobileMenuOpen ? "400px" : "0px",
            backgroundColor: "rgba(17, 76, 90, 0.95)"
          }}
        >
          <nav aria-label="Mobile navigation" className="px-6 py-4 border-t border-mystic-mint/10">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block font-display font-bold text-lg text-arctic hover:text-forsythia transition-colors py-2 focus:outline-none focus:text-forsythia min-h-[44px] flex items-center"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="pt-4 mt-2 border-t border-mystic-mint/10">
                <Link 
                  href="#pricing"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn-cta inline-block w-full text-center px-6 py-3 bg-forsythia text-oceanic-noir font-display font-bold rounded-full focus:outline-none focus:ring-2 focus:ring-forsythia focus:ring-offset-2 focus:ring-offset-nocturnal"
                >
                  Get Started Free
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
