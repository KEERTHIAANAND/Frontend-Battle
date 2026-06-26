/**
 * DataPulse — Tailwind CSS Design Token Reference
 *
 * NOTE: This project uses Tailwind CSS v4 with the @tailwindcss/postcss plugin.
 * In v4, the canonical way to define custom colors/fonts is via `@theme inline`
 * blocks in globals.css (see globals.css). This file exists as a **reference
 * document** so the full design-token palette is searchable in one place.
 *
 * All 6 color tokens are registered as both CSS custom properties (:root)
 * AND Tailwind theme extensions in globals.css → @theme inline { … }.
 * That means you can use them as:
 *   className="bg-forsythia text-nocturnal"
 *   className="border-deep-saffron"
 *   style={{ color: 'var(--forsythia)' }}
 *
 * Font families (via next/font/google CSS variables):
 *   --font-jetbrains  → JetBrains Mono  → headings, display, code, counters
 *   --font-inter      → Inter           → body, UI labels, forms, captions
 */

/** @type {Record<string, string>} */
export const colors = {
  forsythia: "#FFC801",
  nocturnal: "#114C5A",
  arctic: "#F1F6F4",
  "mystic-mint": "#D9E8E2",
  "deep-saffron": "#FF9932",
  "oceanic-noir": "#172B36",
};

/** @type {Record<string, string>} */
export const fontFamily = {
  display: "var(--font-jetbrains)",
  body: "var(--font-inter)",
};
