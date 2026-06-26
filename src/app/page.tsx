import FeaturesSection from "@/components/features/FeaturesSection";
import PlatformGrowth from "@/components/growth/PlatformGrowth";
import PricingSection from "@/components/pricing/PricingSection";
import FaqSection from "@/components/faq/FaqSection";
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
        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-28 md:pt-28 md:pb-36 grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-8 items-center">

          {/* LEFT — Text content */}
          <div className="pr-0 md:pr-4">
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

          {/* RIGHT — Creative Glassmorphism Pipeline Visualizer */}
          <div
            className="hero-entry hidden sm:flex flex-col items-center justify-center lg:items-end relative w-full h-[450px]"
            style={{ "--delay": "150ms" } as React.CSSProperties}
          >
            {/* Background ambient glow specific to the visualizer */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-mystic-mint/10 blur-[80px] rounded-full pointer-events-none" />

            <div className="relative w-full max-w-md flex flex-col gap-8">
              
              {/* Card 1: Data Source */}
              <div className="relative z-10 self-start w-[280px] bg-oceanic-noir/80 backdrop-blur-md border border-mystic-mint/20 rounded-2xl p-4 shadow-2xl flex items-center gap-4 transform transition-transform hover:-translate-y-1" style={{ animation: "float-subtle 6s ease-in-out infinite" }}>
                <div className="w-10 h-10 rounded-lg bg-arctic/5 flex items-center justify-center text-arctic">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" /></svg>
                </div>
                <div>
                  <div className="text-xs font-display text-mystic-mint font-semibold mb-1">DATA SOURCE</div>
                  <div className="text-sm font-body text-arctic/90">PostgreSQL Cluster</div>
                </div>
                {/* Active Indicator */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-mystic-mint animate-pulse" />
              </div>

              {/* Connecting Line 1 */}
              <svg className="absolute left-[140px] top-[72px] w-[120px] h-[72px] pointer-events-none" preserveAspectRatio="none" style={{ zIndex: 0 }}>
                <path d="M0,0 C0,36 120,36 120,72" fill="none" stroke="rgba(255,200,1,0.2)" strokeWidth="2" strokeDasharray="4 4" className="line-flow" />
                <circle cx="0" cy="0" r="4" fill="#FFC801">
                  <animateMotion dur="2s" repeatCount="indefinite" path="M0,0 C0,36 120,36 120,72" />
                </circle>
              </svg>

              {/* Card 2: AI Engine */}
              <div className="relative z-10 self-end w-[280px] bg-forsythia/10 backdrop-blur-md border border-forsythia/30 rounded-2xl p-4 shadow-[0_0_40px_-10px_rgba(255,200,1,0.3)] flex items-center gap-4 transform transition-transform hover:-translate-y-1" style={{ animation: "float-subtle 6s ease-in-out infinite 1s" }}>
                <div className="w-10 h-10 rounded-lg bg-forsythia/20 flex items-center justify-center text-forsythia">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <div>
                  <div className="text-xs font-display text-forsythia font-semibold mb-1">AI ENGINE</div>
                  <div className="text-sm font-body text-arctic/90">Schema Auto-Map</div>
                </div>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-1">
                  <div className="w-1 h-3 bg-forsythia rounded-full animate-pulse" style={{ animationDelay: "0ms" }} />
                  <div className="w-1 h-3 bg-forsythia rounded-full animate-pulse" style={{ animationDelay: "150ms" }} />
                  <div className="w-1 h-3 bg-forsythia rounded-full animate-pulse" style={{ animationDelay: "300ms" }} />
                </div>
              </div>

              {/* Connecting Line 2 */}
              <svg className="absolute right-[140px] top-[188px] w-[120px] h-[72px] pointer-events-none" preserveAspectRatio="none" style={{ zIndex: 0 }}>
                <path d="M120,0 C120,36 0,36 0,72" fill="none" stroke="rgba(217,232,226,0.2)" strokeWidth="2" strokeDasharray="4 4" className="line-flow" />
                <circle cx="0" cy="0" r="4" fill="#D9E8E2">
                  <animateMotion dur="2s" repeatCount="indefinite" path="M120,0 C120,36 0,36 0,72" />
                </circle>
              </svg>

              {/* Card 3: Destination */}
              <div className="relative z-10 self-start w-[280px] bg-oceanic-noir/80 backdrop-blur-md border border-mystic-mint/20 rounded-2xl p-4 shadow-2xl flex items-center gap-4 transform transition-transform hover:-translate-y-1" style={{ animation: "float-subtle 6s ease-in-out infinite 2s" }}>
                <div className="w-10 h-10 rounded-lg bg-arctic/5 flex items-center justify-center text-arctic">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                </div>
                <div>
                  <div className="text-xs font-display text-mystic-mint font-semibold mb-1">DESTINATION</div>
                  <div className="text-sm font-body text-arctic/90">Snowflake Data Warehouse</div>
                </div>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-mystic-mint/30 border-t-mystic-mint animate-spin" />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FEATURES
          ═══════════════════════════════════════════════════ */}
      <FeaturesSection />

      {/* ═══════════════════════════════════════════════════
          PLATFORM GROWTH
          ═══════════════════════════════════════════════════ */}
      <PlatformGrowth />

      {/* ═══════════════════════════════════════════════════
          PRICING
          ═══════════════════════════════════════════════════ */}
      <PricingSection />

      {/* ═══════════════════════════════════════════════════
          FAQ
          ═══════════════════════════════════════════════════ */}
      <FaqSection />

      {/* ═══════════════════════════════════════════════════
          TESTIMONIALS & STATS
          ═══════════════════════════════════════════════════ */}
      <Testimonials />

    </main>
  );
}
