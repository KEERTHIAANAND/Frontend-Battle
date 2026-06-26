# DataPulse

DataPulse is a high-performance, modern AI data automation platform landing page built with Next.js 15, React 19, and Tailwind CSS v4.

## Features Implemented

*   **Zero-Render Pricing Engine**: Uses a decoupled vanilla JS controller (`pricingController.ts`) communicating via DOM mutation (`data-price-node`) to ensure ultra-fast billing and currency toggling without React state re-renders.
*   **Bento Grid to Accordion**: Context-locked responsive design transitions elegantly from a complex Bento grid on desktop to a touch-friendly Accordion on mobile, maintaining state across breakpoints via `ResizeObserver`.
*   **Performance First**: Completely free of heavy animation libraries like Framer Motion. Uses native CSS custom properties, `@keyframes`, and `IntersectionObserver` for seamless entry and interaction motion.
*   **Accessible Motion**: Respects `prefers-reduced-motion: no-preference` globally and enforces high-contrast WCAG AA standards (`--forsythia` on `--nocturnal`).
*   **Fluid Typography**: Scalable font sizes utilizing CSS `clamp()` dynamically mapped via Tailwind v4's new `@theme` arbitrary value hints (`text-[length:var(--text-section)]`).
*   **SEO Optimized**: Fully semantic HTML5, pre-configured `robots.txt`, `sitemap.xml`, and strict metadata standards with preconnected fonts (`font-display: swap`).

## Tech Stack

*   **Framework**: Next.js 15 (App Router)
*   **Library**: React 19
*   **Styling**: Tailwind CSS v4 (Alpha)
*   **Typography**: JetBrains Mono (Display), Inter (Body)
*   **Architecture**: Context-isolated Client Components, React.memo guards, DOM-direct manipulation for micro-interactions.

## Architecture Notes (State Isolation)

The pricing section utilizes a unique state isolation approach to maximize performance. Instead of storing the selected billing cycle and currency in a React `useState` hook at the parent level (which would cause a re-render of the entire Pricing section every time a user toggles the switch), we isolated the state into a vanilla TypeScript module (`pricingController.ts`). 

This controller queries the DOM directly for elements with the `data-price-node` attribute and patches their `.textContent` in real-time based on a predefined pricing matrix. Communication between the React UI controls (`PricingControls.tsx`) and the controller is handled via a `CustomEvent` bus. Finally, `PricingSection.tsx` is wrapped in `React.memo` with a custom comparison function `() => true` to guarantee structural immutability during these micro-interactions.

## Local Development Instructions

1.  Ensure you have Node.js 20+ installed.
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Run the development server:
    ```bash
    npm run dev
    ```
4.  Open [http://localhost:3000](http://localhost:3000) in your browser.

## Live Deployment

The project is securely deployed on Vercel utilizing strict HTTP headers for enhanced security.
**Live URL**: [https://datapulse.io](https://datapulse.io) (Placeholder)