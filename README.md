# Paluda GmbH Landing Page

Marketing landing page for Paluda GmbH. Built with React 19, TypeScript, Vite 7, Tailwind CSS v4, shadcn/ui (new-york style, Radix primitives), GSAP, and i18next.

## Prerequisites

- Node.js 20+ (LTS recommended)
- npm 10+

## Getting started

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Type-check and build for production (outputs to `dist/`) |
| `npm run preview` | Preview the production build locally |
| `npm run typecheck` | Run TypeScript without emitting |

## Environment variables

Copy `.env.example` to `.env` and fill in the values. The landing page itself does not depend on these, but they are wired up for optional Supabase integration.

```
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
```

## Project structure

```
src/
  components/
    sections/     # Page sections (Hero, Values, Services, ...)
    ui/           # shadcn/ui primitives
    Navigation.tsx, Footer.tsx, theme-provider.tsx, mode-toggle.tsx
  i18n/           # i18next setup and translation resources (de, en)
  lib/            # gsap config, utils
  index.css       # Tailwind v4 + design tokens
  main.tsx, App.tsx
public/           # Static assets (logos)
```

## Tech

- React 19 + TypeScript
- Vite 7
- Tailwind CSS v4 (OKLCH tokens)
- shadcn/ui components (Radix UI primitives)
- GSAP with ScrollTrigger
- react-i18next (de, en)
- next-themes for dark mode

## License

Proprietary. All rights reserved.
