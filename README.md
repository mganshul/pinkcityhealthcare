# Pink City Healthcare

The marketing website for Pink City Healthcare — a home healthcare provider in Jaipur offering nursing, elder care, ICU-level care, physiotherapy, and related services delivered directly to patients' homes.

## Overview

A production-grade Next.js 15 site: a fully built marketing homepage, an About page, a services hub with 14 individually built service detail pages generated from one shared template, and a Supabase-backed foundation for appointment booking and contact submissions (schema and server-side plumbing are in place; the public-facing forms are the next phase of work).

## Features

- **Homepage** — hero, trust signals, featured services, "How It Works", statistics, care team, FAQ, health tips, and a final call-to-action, all built around a locked design system.
- **About page** (`/about`) — story, mission, vision, core values, founder message.
- **Services hub** (`/services`) — reads live from the single service catalog; no duplicated data.
- **14 service detail pages** (`/services/<slug>`) — one shared, frozen template (`ServicePageTemplate`) driving unique, non-duplicated content per service, with deliberate internal cross-linking between related services.
- **Backend foundation** — typed Supabase clients, Zod-validated Server Actions, and a documented SQL schema + Row Level Security policy set for appointments, contact messages, blog content, testimonials, gallery, and a future admin dashboard. See [`BACKEND_ARCHITECTURE.md`](./BACKEND_ARCHITECTURE.md).

## Tech stack

| Layer              | Choice                                                                    |
| ------------------ | ------------------------------------------------------------------------- |
| Framework          | Next.js 15 (App Router), React 19, TypeScript (strict)                    |
| Styling            | Tailwind CSS v4, shadcn/ui (`radix-nova` style)                           |
| Motion             | Framer Motion, with `useReducedMotion` respected throughout               |
| Forms & validation | React Hook Form + Zod (schemas built, forms not yet wired up)             |
| Backend            | Supabase (Postgres, Row Level Security, Auth)                             |
| Email (planned)    | Nodemailer over SMTP — not yet implemented, see `BACKEND_ARCHITECTURE.md` |
| Hosting            | Hostinger                                                                 |
| Tooling            | ESLint, Prettier (with `prettier-plugin-tailwindcss`)                     |

## Folder structure

```
src/
  app/                    Next.js App Router pages (/, /about, /services, /services/<slug>)
  components/
    layout/                PageHero, PageLayout, header/footer
    patterns/               Reusable page-section building blocks (Content, ImageText, CTA, Quote, Stats, FAQAccordion, ProcessTimeline)
    sections/                Homepage-specific sections
    templates/              ServicePageTemplate — the single template behind all 14 service pages
    ui/                        shadcn/ui primitives
  data/                    Static content: services, service-pages/, blogs, faqs, team, statistics
  constants/               site.ts — single source of truth for business info (name, contact, hours, socials)
  lib/
    supabase/                Supabase clients (client.ts, server.ts), generated types, queries/
    actions/                  Server Actions (appointment.ts, contact.ts)
    seo.ts, motion.ts, utils.ts
  schemas/                 Zod validation schemas (appointment, contact, shared)
  types/                   Shared TypeScript types
supabase/
  migrations/              SQL schema + Row Level Security policies (not yet applied to a live project)
```

## Installation

```bash
git clone https://github.com/mganshul/pinkcityhealthcare.git
cd pinkcityhealthcare
npm install
```

## Environment variables

Copy `.env.example` to `.env.local` and fill in the values from your Supabase project (Project Settings → API):

```bash
cp .env.example .env.local
```

| Variable                                           | Required for                | Notes                                                                   |
| -------------------------------------------------- | --------------------------- | ----------------------------------------------------------------------- |
| `NEXT_PUBLIC_SUPABASE_URL`                         | Any Supabase read/write     | Public — safe in the browser bundle                                     |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY`                    | Any Supabase read/write     | Public — every request is still subject to Row Level Security           |
| `SUPABASE_SERVICE_ROLE_KEY`                        | Future admin dashboard only | **Secret.** Bypasses Row Level Security — server-only, never used today |
| `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` | Future email notifications  | Reserved, not yet consumed by any code                                  |

Never commit `.env.local` — it's covered by `.gitignore`.

## Development

```bash
npm run dev
```

Runs the app at [http://localhost:3000](http://localhost:3000) with hot reload.

## Build

```bash
npm run build
npm run start   # serve the production build locally
```

Other useful scripts:

```bash
npm run lint          # ESLint
npm run typecheck     # tsc --noEmit
npm run format        # Prettier — write
npm run format:check  # Prettier — check only
```

## Deployment

Deployed to Hostinger. Before deploying:

1. Set the environment variables listed above in Hostinger's hosting environment panel.
2. Run the Supabase migrations in `supabase/migrations/` against your project (`npx supabase db push`) — see [`BACKEND_ARCHITECTURE.md`](./BACKEND_ARCHITECTURE.md) for the full sequence and the Row Level Security model behind it.
3. `npm run build` and deploy the output per Hostinger's Node.js hosting instructions.

## Documentation

- [`BACKEND_ARCHITECTURE.md`](./BACKEND_ARCHITECTURE.md) — Supabase schema, Server Actions, validation, security model, future admin dashboard.
- [`PAGE_COMPOSITION.md`](./PAGE_COMPOSITION.md) — how internal pages (About, Services, Contact) are assembled from reusable layout/pattern components.
- [`DESIGN_SYSTEM.md`](./DESIGN_SYSTEM.md), [`VISUAL_GUIDELINES.md`](./VISUAL_GUIDELINES.md), [`CREATIVE_DIRECTION.md`](./CREATIVE_DIRECTION.md), [`HOMEPAGE_BLUEPRINT.md`](./HOMEPAGE_BLUEPRINT.md) — the locked design system and homepage spec every page is built against.

## License

Proprietary — all rights reserved. This code is not licensed for reuse, redistribution, or modification outside of Pink City Healthcare's own deployment.
