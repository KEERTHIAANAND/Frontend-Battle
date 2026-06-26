import PricingSection from "@/components/pricing/PricingSection";
import FeaturesSection from "@/components/features/FeaturesSection";
import Testimonials from "@/components/social-proof/Testimonials";

/* ── Deterministic particles (no Math.random — SSR safe) ── */
const PARTICLES = Array.from({ length: 50 }, (_, i) => ({
  left: `${(i * 73 + 17) % 97}%`,
  top: `${(i * 41 + 29) % 93}%`,
  r: 1 + (i % 3),
  opacity: 0.08 + ((i * 7) % 5) * 0.015,
}));

/* ── Feature cards data ───────────────────────────────── */
// Features moved to FeaturesSection component

/* ── Testimonials data ────────────────────────────────── */
// Testimonials moved to Testimonials component

/* ── Page ──────────────────────────────────────────────── */

export default function Home() {
  return (
    <main id="main-content">
      {/* ═══════════════════════════════════════════════════
          HERO SECTION
          ═══════════════════════════════════════════════════ */}
      <section
        id="hero"
        aria-labelledby="hero-heading"
        className="relative min-h-screen overflow-hidden bg-oceanic-noir"
      >
        {/* ── Particle background ── */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          aria-hidden="true"
          preserveAspectRatio="none"
        >
          {PARTICLES.map((p, i) => (
            <circle
              key={i}
              cx={p.left}
              cy={p.top}
              r={p.r}
              fill="#F1F6F4"
              opacity={p.opacity}
            />
          ))}
        </svg>

        {/* ── Ambient glow blobs & Background Graphic ── */}
        <img 
          src="/assets/hero-graphic.svg" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none mix-blend-screen"
          aria-hidden="true" 
        />
        <div className="absolute top-[-10%] left-[20%] w-[40rem] h-[40rem] bg-nocturnal/30 rounded-full blur-[140px] pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-[-15%] right-[10%] w-[30rem] h-[30rem] bg-forsythia/5 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />


        {/* ── Hero content grid ── */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-28 md:pt-28 md:pb-36 grid grid-cols-1 lg:grid-cols-[45%_55%] gap-12 lg:gap-8 items-center">

          {/* LEFT — Text content */}
          <div>
            {/* Badge */}
            <p
              className="hero-entry inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8 text-sm font-body"
              style={{
                "--delay": "60ms",
                background: "#172B36",
                borderColor: "rgba(217,232,226,0.25)",
              } as React.CSSProperties}
            >
              <span className="font-bold text-forsythia tracking-wider text-xs uppercase">New</span>
              <span className="text-arctic/80">Latest integration just arrived</span>
            </p>

            {/* Headline */}
            <h1 id="hero-heading" className="font-display font-bold tracking-tighter leading-[1.05]">
              <span
                className="hero-entry block text-[length:var(--text-hero)] text-arctic"
                style={{ "--delay": "120ms" } as React.CSSProperties}
              >
                Automate Every
              </span>
              <span
                className="hero-entry block text-[length:var(--text-hero)]"
                style={{ "--delay": "180ms" } as React.CSSProperties}
              >
                <span className="text-mystic-mint/55">Data </span>
                <span className="text-arctic">Pipeline.</span>
                <span className="cursor-blink text-forsythia ml-0.5 font-light">|</span>
              </span>
            </h1>

            {/* Subheading */}
            <p
              className="hero-entry mt-6 text-mystic-mint text-base md:text-lg leading-relaxed font-body max-w-[420px]"
              style={{ "--delay": "260ms" } as React.CSSProperties}
            >
              The AI automation engine that connects, transforms, and ships your
              data at machine speed. From raw ingestion to production-ready
              insights — in minutes, not months.
            </p>

            {/* CTA */}
            <div className="hero-entry mt-8" style={{ "--delay": "340ms" } as React.CSSProperties}>
              <a
                href="#pricing"
                className="inline-flex px-8 py-4 rounded-full bg-forsythia text-oceanic-noir font-bold font-display tracking-wide hover:bg-deep-saffron transition-colors active:scale-[0.97]"
                aria-label="Start using DataPulse for free"
              >
                Get started free
              </a>
            </div>
          </div>

          {/* RIGHT — Animated SVG data flow / Terminal graphic */}
          <div
            className="hero-entry svg-float hidden sm:flex items-center justify-center lg:justify-end"
            style={{ "--delay": "150ms", "--float-delay": "0ms" } as React.CSSProperties}
          >
            <svg
              viewBox="0 0 500 450"
              className="w-full max-w-md lg:max-w-lg h-auto"
              aria-label="Abstract data flow network visualization"
              role="img"
            >
              <defs>
                <filter id="node-glow">
                  <feGaussianBlur stdDeviation="8" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter id="soft-glow">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* ── Connection lines ── */}
              <g stroke="rgba(217,232,226,0.12)" strokeWidth="1.5" fill="none">
                <path d="M130 95 Q190 170 255 215" className="line-flow" />
                <path d="M385 75 Q320 145 255 215" className="line-flow" style={{ animationDelay: "1s" }} />
                <path d="M85 255 Q170 235 255 215" className="line-flow" style={{ animationDelay: "2s" }} />
                <path d="M255 215 Q340 225 420 205" className="line-flow" style={{ animationDelay: "0.5s" }} />
                <path d="M255 215 Q200 305 145 370" className="line-flow" style={{ animationDelay: "1.5s" }} />
                <path d="M255 215 Q310 305 365 370" className="line-flow" style={{ animationDelay: "2.5s" }} />
                <path d="M420 205 Q395 290 365 370" stroke="rgba(255,200,1,0.12)" className="line-flow" style={{ animationDelay: "3s" }} />
                <path d="M145 370 Q250 410 255 415" className="line-flow" style={{ animationDelay: "3.5s" }} />
                <path d="M365 370 Q310 400 255 415" className="line-flow" style={{ animationDelay: "4s" }} />
              </g>

              {/* ── Source nodes (top) ── */}
              {/* Database */}
              <g className="node-pulse" style={{ "--pulse-delay": "0ms" } as React.CSSProperties}>
                <circle cx="130" cy="95" r="22" fill="#114C5A" stroke="rgba(217,232,226,0.25)" strokeWidth="1" />
                <rect x="121" y="86" width="18" height="14" rx="2" fill="none" stroke="#D9E8E2" strokeWidth="1.2" opacity="0.6" />
                <line x1="123" y1="92" x2="137" y2="92" stroke="#D9E8E2" strokeWidth="0.8" opacity="0.4" />
                <line x1="123" y1="96" x2="137" y2="96" stroke="#D9E8E2" strokeWidth="0.8" opacity="0.4" />
              </g>

              {/* Cloud API */}
              <g className="node-pulse" style={{ "--pulse-delay": "400ms" } as React.CSSProperties}>
                <circle cx="385" cy="75" r="20" fill="#114C5A" stroke="rgba(217,232,226,0.25)" strokeWidth="1" />
                <text x="385" y="80" textAnchor="middle" fill="#D9E8E2" fontSize="14" fontFamily="var(--font-display)" opacity="0.6">{ "{}" }</text>
              </g>

              {/* File source */}
              <g className="node-pulse" style={{ "--pulse-delay": "800ms" } as React.CSSProperties}>
                <circle cx="85" cy="255" r="18" fill="#114C5A" stroke="rgba(217,232,226,0.25)" strokeWidth="1" />
                <path d="M77 249 L77 263 L93 263 L93 253 L89 249 Z" fill="none" stroke="#D9E8E2" strokeWidth="1" opacity="0.6" />
              </g>

              {/* ── Central DataPulse hub ── */}
              <circle cx="255" cy="215" r="38" fill="rgba(255,200,1,0.08)" filter="url(#node-glow)" />
              <circle cx="255" cy="215" r="28" fill="#FFC801" className="node-pulse" style={{ "--pulse-delay": "200ms" } as React.CSSProperties} />
              <circle cx="255" cy="215" r="20" fill="#172B36" />
              <text x="255" y="220" textAnchor="middle" fill="#FFC801" fontSize="13" fontWeight="700" fontFamily="var(--font-display)">DP</text>

              {/* ── Transform node (right) ── */}
              <g className="node-pulse" style={{ "--pulse-delay": "600ms" } as React.CSSProperties}>
                <circle cx="420" cy="205" r="18" fill="#114C5A" stroke="#FFC801" strokeWidth="1" strokeDasharray="4 3" />
                <path d="M413 205 L418 200 L423 205 L418 210 Z" fill="none" stroke="#FFC801" strokeWidth="1.2" opacity="0.7" />
                <path d="M418 200 L418 210" stroke="#FFC801" strokeWidth="0.8" opacity="0.5" />
              </g>

              {/* ── Output nodes (bottom) ── */}
              {/* Dashboard */}
              <g className="node-pulse" style={{ "--pulse-delay": "1000ms" } as React.CSSProperties}>
                <circle cx="145" cy="370" r="20" fill="#114C5A" stroke="rgba(217,232,226,0.25)" strokeWidth="1" />
                <rect x="136" y="362" width="18" height="12" rx="1.5" fill="none" stroke="#D9E8E2" strokeWidth="1" opacity="0.6" />
                <line x1="145" y1="374" x2="145" y2="378" stroke="#D9E8E2" strokeWidth="1" opacity="0.4" />
              </g>

              {/* Webhook */}
              <g className="node-pulse" style={{ "--pulse-delay": "1200ms" } as React.CSSProperties}>
                <circle cx="365" cy="370" r="20" fill="#114C5A" stroke="rgba(255,200,1,0.3)" strokeWidth="1" />
                <path d="M358 370 L365 363 L372 370 L365 377 Z" fill="none" stroke="#FFC801" strokeWidth="1" opacity="0.5" />
              </g>

              {/* Final output */}
              <g className="node-pulse" style={{ "--pulse-delay": "1400ms" } as React.CSSProperties}>
                <circle cx="255" cy="415" r="15" fill="#114C5A" stroke="rgba(255,200,1,0.2)" strokeWidth="1" filter="url(#soft-glow)" />
                <circle cx="255" cy="415" r="5" fill="#FFC801" opacity="0.5" />
              </g>

              {/* ── Decorative orbit dots ── */}
              <circle cx="190" cy="150" r="2" fill="#FFC801" opacity="0.3" className="node-pulse" style={{ "--pulse-delay": "300ms" } as React.CSSProperties} />
              <circle cx="330" cy="140" r="2.5" fill="#D9E8E2" opacity="0.2" className="node-pulse" style={{ "--pulse-delay": "700ms" } as React.CSSProperties} />
              <circle cx="170" cy="310" r="2" fill="#FFC801" opacity="0.25" className="node-pulse" style={{ "--pulse-delay": "1100ms" } as React.CSSProperties} />
              <circle cx="340" cy="290" r="2" fill="#D9E8E2" opacity="0.2" className="node-pulse" style={{ "--pulse-delay": "500ms" } as React.CSSProperties} />
              <circle cx="460" cy="150" r="1.5" fill="#FFC801" opacity="0.2" className="node-pulse" style={{ "--pulse-delay": "900ms" } as React.CSSProperties} />
            </svg>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FEATURES
          ═══════════════════════════════════════════════════ */}
      <FeaturesSection />

      {/* ═══════════════════════════════════════════════════
          PRICING
          ═══════════════════════════════════════════════════ */}
      <PricingSection />

      {/* ═══════════════════════════════════════════════════
          TESTIMONIALS & STATS
          ═══════════════════════════════════════════════════ */}
      <Testimonials />

    </main>
  );
}
