<div align="center">

# NEXORA AI

**Premium AI-Powered Website Builder**

A futuristic SaaS landing page built with React, TypeScript, Tailwind CSS, and Framer Motion.

[Live Demo](https://nexora.vercel.app) &bull; [Report Bug](https://github.com/vijaydevx/nexora/issues) &bull; [Request Feature](https://github.com/vijaydevx/nexora/issues)

</div>

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 + TypeScript |
| Styling | Tailwind CSS 4 |
| Animation | Framer Motion / Motion |
| Build | Vite 6 |
| UI Components | shadcn/ui pattern |
| Smooth Scroll | Lenis |
| Deployment | Vercel |

## Features

- **Hero** — Video background with crossfade loop, AI Core particle system, typing text effect
- **Logo Cloud** — Infinite scrolling logo slider with hover slow-down
- **About** — Split layout with looping video and staggered text animations
- **How It Works** — 3-step cards with icon illustrations and scroll reveals
- **Why NEXORA** — Scrolling glassmorphism card columns (alternating directions)
- **Testimonials** — Multi-column auto-scrolling cards with gradient masks
- **Pricing** — Animated toggle, number transitions, hover glow cards
- **CTA** — Dashboard preview with feathered edges
- **Footer** — 4-column layout with social links

### Effects System

- Lenis smooth scrolling
- Sticky glassmorphism navbar (appears on scroll)
- Page load animation with progress bar
- Typing text with blinking cursor
- Parallax scroll on hero content
- Magnetic hover buttons
- Magic cursor sparkle trail
- Scroll-to-top button
- Animated link underlines
- AI Core neural sphere (cursor-reactive)
- Canvas particle system with connections
- Gradient shift on scroll
- Logo glow pulse

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
git clone https://github.com/vijaydevx/nexora.git
cd nexora
npm install
```

### Development

```bash
npm run dev
```

Opens at [http://localhost:3000](http://localhost:3000)

### Build

```bash
npm run build
```

Output in `dist/`

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
nexora/
├── components/ui/          # Reusable UI components (shadcn pattern)
│   ├── button.tsx
│   ├── card.tsx
│   ├── feature-highlight-card.tsx
│   ├── infinite-slider.tsx
│   ├── liquid-glass-button.tsx
│   ├── logo-cloud-3.tsx
│   ├── magic-cursor.tsx
│   ├── pricing.tsx
│   ├── testimonials-columns-1.tsx
│   ├── timeline-animation.tsx
│   └── vertical-cut-reveal.tsx
├── lib/
│   └── utils.ts            # cn() utility
├── public/                 # Static assets
├── src/
│   ├── components/         # Page sections
│   │   ├── effects/        # Animation & interaction effects
│   │   ├── about-section.tsx
│   │   ├── cta-section.tsx
│   │   ├── footer-section.tsx
│   │   ├── how-it-works-section.tsx
│   │   ├── logo-showcase.tsx
│   │   ├── testimonials-section.tsx
│   │   └── why-nexora-section.tsx
│   ├── App.tsx             # Main application
│   ├── index.css           # Tailwind + custom styles
│   └── main.tsx            # Entry point
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project on [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Vite — deploy with defaults

### Manual

```bash
npm run build
# Serve dist/ with any static host
```

## License

MIT

---

<div align="center">
Built by <a href="https://github.com/vijaydevx">vijaydevx</a>
</div>
