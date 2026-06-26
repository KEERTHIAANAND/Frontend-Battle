"use client";

import { useEffect, useRef, useState } from "react";
import { CurrencyCode } from "@/lib/pricingMatrix";
import { setBilling, setCurrency } from "./pricingController";

export default function PricingControls() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Keyboard navigation for focus trap
  useEffect(() => {
    const dropdown = dropdownRef.current;
    if (!dropdown || !isDropdownOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const items = Array.from(dropdown.querySelectorAll<HTMLElement>("[role='option']"));
      const currentIndex = items.findIndex(item => document.activeElement === item);

      if (e.key === "ArrowDown") {
        e.preventDefault();
        const nextIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
        items[nextIndex]?.focus();
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        const prevIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
        items[prevIndex]?.focus();
      } else if (e.key === "Escape") {
        e.preventDefault();
        setIsDropdownOpen(false);
        buttonRef.current?.focus();
      }
    };

    dropdown.addEventListener("keydown", handleKeyDown);
    return () => dropdown.removeEventListener("keydown", handleKeyDown);
  }, [isDropdownOpen]);

  const handleCurrencySelect = (currency: CurrencyCode) => {
    setCurrency(currency);
    setIsDropdownOpen(false);
    buttonRef.current?.focus();
  };

  const currencies: { code: CurrencyCode; label: string }[] = [
    { code: "INR", label: "INR (₹)" },
    { code: "USD", label: "USD ($)" },
    { code: "EUR", label: "EUR (€)" },
  ];

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 relative z-20">
      {/* ── Billing Toggle ── */}
      <div 
        className="relative flex items-center p-1 bg-white/50 border border-mystic-mint/50 rounded-full"
        data-active-billing="monthly"
      >
        {/* Sliding Pill Background */}
        <div 
          className="absolute left-1 top-1 bottom-1 w-[100px] bg-white rounded-full shadow-sm transition-transform duration-200"
          style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}
          id="billing-slider"
        />

        <button
          onClick={() => setBilling("monthly")}
          className="relative z-10 w-[100px] py-2 rounded-full font-display font-bold text-sm tracking-wide transition-colors mix-blend-multiply focus:outline-none"
        >
          Monthly
        </button>
        <button
          onClick={() => setBilling("annual")}
          className="relative z-10 w-[100px] py-2 rounded-full font-display font-bold text-sm tracking-wide transition-colors mix-blend-multiply focus:outline-none"
        >
          Annual
        </button>

        {/* CSS logic for sliding pill and active text colors */}
        <style>{`
          [data-active-billing="annual"] #billing-slider {
            transform: translateX(100px);
          }
          [data-active-billing="monthly"] button:nth-of-type(1) {
            color: var(--oceanic-noir);
          }
          [data-active-billing="monthly"] button:nth-of-type(2) {
            color: rgba(17,76,90,0.6);
          }
          [data-active-billing="monthly"] button:nth-of-type(2):hover {
            color: var(--oceanic-noir);
          }
          [data-active-billing="annual"] button:nth-of-type(1) {
            color: rgba(17,76,90,0.6);
          }
          [data-active-billing="annual"] button:nth-of-type(1):hover {
            color: var(--oceanic-noir);
          }
          [data-active-billing="annual"] button:nth-of-type(2) {
            color: var(--oceanic-noir);
          }
        `}</style>

        {/* ── Save 20% Badge ── */}
        <span
          data-savings-badge
          className="absolute -top-3 -right-4 px-2.5 py-0.5 bg-forsythia text-oceanic-noir text-[10px] font-bold font-display uppercase tracking-widest rounded-full shadow-sm pointer-events-none transition-all duration-300 ease-out origin-bottom-left"
          style={{ opacity: 0, transform: "translateY(10px) scale(0.95)" }}
        >
          Save 20%
        </span>
      </div>

      {/* ── Custom Currency Selector ── */}
      <div className="relative" ref={dropdownRef}>
        <button
          ref={buttonRef}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center gap-2 pl-5 pr-4 py-2.5 bg-white border border-mystic-mint rounded-full font-display font-bold text-sm text-oceanic-noir shadow-sm hover:border-forsythia/40 focus:outline-none focus:ring-2 focus:ring-forsythia/50 transition-colors"
          aria-haspopup="listbox"
          aria-expanded={isDropdownOpen}
        >
          <span data-currency-selected-text>INR (₹)</span>
          <svg 
            width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
            strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
            className={`transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>

        <div 
          className="absolute top-full right-0 mt-2 w-full bg-white border border-mystic-mint rounded-xl shadow-lg overflow-hidden z-50 transition-all duration-300 ease-in-out"
          style={{ 
            maxHeight: isDropdownOpen ? "200px" : "0px",
            opacity: isDropdownOpen ? 1 : 0,
            pointerEvents: isDropdownOpen ? "auto" : "none"
          }}
          role="listbox"
          tabIndex={-1}
        >
          <div className="py-1">
            {currencies.map((curr) => (
              <div
                key={curr.code}
                role="option"
                tabIndex={0}
                aria-selected="false"
                className="px-4 py-2 text-sm font-display font-semibold text-nocturnal/70 hover:bg-mystic-mint/30 hover:text-oceanic-noir focus:bg-mystic-mint/30 focus:text-oceanic-noir focus:outline-none cursor-pointer transition-colors"
                onClick={() => handleCurrencySelect(curr.code)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleCurrencySelect(curr.code);
                  }
                }}
              >
                {curr.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
