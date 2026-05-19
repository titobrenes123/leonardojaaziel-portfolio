# CLAUDE.md — instructions for AI coding assistants working in this repo

This is **Leonardo Gonzalez's portfolio site** — a Next.js 14 static site
deployed to Firebase Hosting at https://leonardojaaziel.com.

If you are an AI assistant editing this codebase, follow the rules below
**without exception**. They keep the bilingual site, the design system,
and the deploy pipeline consistent.

---

## 🌐 Bilingual sync — the most important rule

The site is shipped in **English and Spanish**. Every visible string lives
in:

- `lib/i18n/en.ts` — English dictionary
- `lib/i18n/es.ts` — Spanish dictionary
- `lib/i18n/types.ts` — shared `Dict` type (TypeScript ground truth)

**Both dictionaries MUST always satisfy the same `Dict` type.** TypeScript
will fail to compile if keys diverge.

### When you add, remove, or edit any user-facing string:

1. Update **`lib/i18n/types.ts` first** if you're adding a new key
2. Update **both** `en.ts` AND `es.ts` in the same edit pass
3. Run `npm run build` to confirm TypeScript still compiles
4. Never commit a change that updates only one locale

### When the user asks for content changes in one language:

Translate to the other and update both files. If unsure of terminology,
delegate to the **portfolio-translator** subagent in `.claude/agents/`.

### When you create a new section component:

Wire it up to read its strings from `useI18n()`, not hardcoded. Add the
new keys to both dictionaries.

---

## 🎨 Design tokens — keep the brand consistent

The visual system is locked. Do not introduce new colors, fonts, or
spacing scales without explicit user approval.

### Color tokens (defined in `tailwind.config.ts`)

| Token | Hex | Use |
|---|---|---|
| `bg0` | `#0a0f1c` | Page base (deepest navy) |
| `bg1`–`bg4` | navy gradient | Card surfaces, hover states |
| `sky-400` | `#38bdf8` | **Primary accent** — heading highlights, buttons, hover |
| `sky-300` | `#7dd3fc` | Lighter accent (hover states, secondary highlights) |
| `mint-400` | `#34d399` | Live/operational status only |
| `violet-400` | `#a78bfa` | Reserved for Foundational cert tier |
| `rose-400` | `#fb7185` | Code-block syntax accent |
| `amber-300` | `#fcd34d` | Code-block syntax accent |
| `ink-100`–`ink-600` | slate text scale | All neutral text |

### Fonts (loaded in `app/layout.tsx`)

| Family | Use |
|---|---|
| **Inter** | Body text (default `font-sans`) |
| **Sora** | Display headings, stat values (`font-display`) |
| **JetBrains Mono** | Eyebrows, code blocks, tags, chips (`font-mono`) |

### Component patterns

- **Cards** use the `.card .card-accent` classes (left-edge accent on hover)
- **Buttons** use `.btn-primary` (sky-cyan) or `.btn-ghost` (outlined)
- **Eyebrows** use the `.eyebrow` class with `<span class="dot" />` prefix
- **IDE-window chrome** (traffic-light dots + tab) for code/profile snippets
- **Section labels** follow the pattern `NN // section-name` (e.g. `01 // about`)

If you need a new visual pattern, delegate to the
**portfolio-frontend** subagent in `.claude/agents/`.

---

## 🏗️ Architecture overview

```
app/
  layout.tsx         Root layout, fonts, Analytics + Clarity
  page.tsx           English route ("/")
  es/page.tsx        Spanish route ("/es")
  globals.css        Tailwind + custom utilities
components/
  HomeContent.tsx    Wraps every section in <I18nProvider>
  Nav.tsx            Includes language switcher
  Hero.tsx, About.tsx, Skills.tsx, Experience.tsx,
  Certifications.tsx, Projects.tsx, Contact.tsx, Footer.tsx
  Analytics.tsx      Loads gtag.js (G-TJFVLD6BN1)
  Clarity.tsx        Loads Microsoft Clarity (wtesx240gs)
  HeroBackground.tsx Interactive canvas constellation
  RotatingTech.tsx   Rotating Google Cloud / GKE / Cloud Run / ... word
  CountUp.tsx        Animated number ticker
lib/
  i18n/              en.ts, es.ts, types.ts, context.tsx
  data.ts            Non-translated data (badge URLs, Credly URLs, tags, periods)
  analytics.ts       trackEvent() helper
  site-config.ts     GA + Clarity IDs
public/
  favicon.svg, leonardo-portrait.png, resume.html, resume.pdf
```

### Section IDs are **language-agnostic**

Anchor IDs (`#about`, `#stack`, `#experience`, `#certifications`,
`#projects`, `#contact`) stay in English in both locales. Only nav
**labels** are translated. This keeps deep links (`/#projects`,
`/es/#projects`) consistent across languages.

---

## 🚢 Deploy workflow

```bash
npm run build                                         # static export to ./out
firebase deploy --only hosting --project leonardojaaziel-portfolio
git add -A && git commit -m "..." && git push origin main
```

**Always do all three** when shipping a change. The live site, the GitHub
repo, and your local main should never diverge.

The Firebase project ID is `leonardojaaziel-portfolio` (active account:
`titobrenes123@gmail.com`). GitHub repo: `titobrenes123/leonardojaaziel-portfolio`
(public).

---

## ✅ Pre-commit checklist

Before committing any change:

1. **TypeScript compiles**: `npm run build` succeeds
2. **Both locales updated** if user-facing strings changed
3. **Section IDs unchanged** (or updated everywhere they're referenced)
4. **Design tokens respected** — no new colors/fonts introduced
5. **Mobile tested** — site is mobile-first; check responsive behavior
6. **No secrets committed** — `.env*`, service account JSONs are gitignored

---

## 🤖 Subagent index

Located in `.claude/agents/`. Use these when their domain comes up:

- **portfolio-translator** — for any string translation between EN and ES
- **portfolio-frontend** — for visual/UI changes that need design-system consistency

Invoke via the Agent tool with `subagent_type` matching the agent name.

---

## 📞 Out-of-scope reminders

- **Never mention Google iPSE or Google as an employer** anywhere public.
  Leonardo is a contractor. See `~/.claude/projects/.../memory/feedback_no_google_employer.md`.
- **Never mention Guanacos Tech's gold/serif aesthetic.** That's a separate
  brand (`guanacostech.com`). This portfolio is its own thing — sky-cyan
  on navy, Inter + Sora + JetBrains Mono.
