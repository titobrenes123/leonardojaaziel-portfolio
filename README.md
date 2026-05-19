<div align="center">

<img src="public/favicon.svg" width="72" alt="leonardojaaziel.com favicon" />

# leonardojaaziel.com

Personal portfolio for **Leonardo Jaaziel** — Google Cloud Architect & Workspace Specialist.

[**Live site →**](https://leonardojaaziel-portfolio.web.app) &nbsp;·&nbsp;
[Custom domain (planned)](https://leonardojaaziel.com)

[![Next.js](https://img.shields.io/badge/Next.js-14-000?style=flat-square&logo=next.js)](https://nextjs.org)
[![Tailwind](https://img.shields.io/badge/Tailwind-3-38bdf8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-7c5cff?style=flat-square&logo=framer)](https://www.framer.com/motion/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Firebase Hosting](https://img.shields.io/badge/Hosted_on-Firebase-FFA000?style=flat-square&logo=firebase&logoColor=white)](https://firebase.google.com/docs/hosting)
[![License: MIT](https://img.shields.io/badge/License-MIT-cbd5e1?style=flat-square)](LICENSE)

</div>

---

## ✦ Highlights

- **Interactive constellation hero** — a Canvas 2D particle network that drifts ambiently and gently pulls toward your cursor. Pauses when offscreen, respects `prefers-reduced-motion`, and skips pointer interactivity on touch devices.
- **Rotating tech word** — the hero cycles through `Google Cloud → GKE → Cloud Run → BigQuery → Vertex AI → Cloud Functions → Workspace` every 2.4&nbsp;s. When `Google Cloud` lands, the letters render in the classic Google logo colors (blue / red / yellow / blue / green / red).
- **Animated count-up stats** — `5+` years · `4` Google Cloud certifications · `80+` projects shipped. Each counter starts at 0 and counts up on `easeOutCubic` only when scrolled into view.
- **Credly-verified certification cards** — live badge images served from `images.credly.com`, each card click-through to the public Credly verification page.
- **Active section indicator** — `IntersectionObserver` highlights the nav link of whichever section is currently in view. The active pill slides smoothly between items using Framer Motion `layoutId`.
- **Mobile-first** — hamburger menu, responsive type scale, particle count and link distance scale down on small viewports for performance.
- **Editorial dev aesthetic** — sky-cyan on deep navy, JetBrains Mono for code-flavored details, IDE-window chrome around the portrait, syntax-highlighted `profile.yaml` colophon card.

## ✦ Stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js 14 (App Router, static export) |
| Styling | Tailwind CSS 3 |
| Motion | Framer Motion 11 |
| Icons | lucide-react |
| Typography | Inter · Sora · JetBrains Mono (Google Fonts) |
| Hosting | Firebase Hosting (static, served from `out/`) |

## ✦ Quick start

```bash
npm install
npm run dev
```

Open <http://localhost:3000>. Hot-reload via Next's Fast Refresh.

## ✦ Build & deploy

```bash
# Produce a static export in ./out
npm run build

# Deploy that to Firebase Hosting
firebase deploy --only hosting
```

`next.config.mjs` is configured with `output: 'export'` and `images.unoptimized = true` so the entire site renders as static HTML+JS — no Next.js server runtime needed. `firebase.json` points `hosting.public` at `out/` and applies long-lived caching to immutable assets (`.js`, `.css`, `.svg`, `.woff2`).

## ✦ Customizing the content

All editable content lives in [`lib/data.ts`](lib/data.ts) — one file. Update:

- `profile` — name, title, location, languages, taglines, email, social links
- `certifications` — Credly badge URLs and verification links
- `experience` — timeline entries
- `skillGroups` — technical skill clusters
- `projects` — case cards
- `approach` — the four "How I work" principles

Brand tokens (colors, fonts, shadows) live in [`tailwind.config.ts`](tailwind.config.ts) and the keyframes / utility classes are in [`app/globals.css`](app/globals.css).

## ✦ Worth a read

A few files where the implementation is more than declarative JSX:

- [`components/HeroBackground.tsx`](components/HeroBackground.tsx) — pointer-aware Canvas particle network with `IntersectionObserver` pause/resume, `prefers-reduced-motion` short-circuit, and pointer interactivity gated on `(hover: hover)`.
- [`components/RotatingTech.tsx`](components/RotatingTech.tsx) — `AnimatePresence` cross-fade rotator. The `Google Cloud` entry renders the wordmark colors per-letter.
- [`components/CountUp.tsx`](components/CountUp.tsx) — viewport-triggered counter using `useInView`, `requestAnimationFrame`, and `easeOutCubic`. Falls through to the final value when reduced motion is requested.
- [`components/Nav.tsx`](components/Nav.tsx) — active-section detection via `IntersectionObserver` with weighted `rootMargin` so the active link reflects whichever section dominates the viewport.

## ✦ Project layout

```
.
├── app/
│   ├── globals.css         # Tailwind + custom utilities (.window, .card, .cursor, ...)
│   ├── layout.tsx          # Root layout, fonts, metadata
│   └── page.tsx            # Section composition
├── components/             # Each section is its own client component
├── lib/
│   └── data.ts             # Single source of truth for site content
├── public/
│   ├── favicon.svg         # Hand-drawn constellation mark
│   └── leonardo-portrait.png
├── firebase.json           # Hosting config (cache headers, public dir)
├── next.config.mjs         # output: 'export', remotePatterns for Credly
└── tailwind.config.ts      # Brand palette + type scale
```

## ✦ License

[MIT](LICENSE) — feel free to fork this as a starting point for your own portfolio. Just swap the content in `lib/data.ts`, replace the portrait, and re-deploy.

---

<div align="center">

Crafted with care in El Salvador · Deployed wherever the cloud happens to live.

</div>
