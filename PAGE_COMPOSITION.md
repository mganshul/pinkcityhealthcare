# Page Composition Guide

How future internal pages should be assembled from the reusable infrastructure built in Milestone 20. This is an engineering reference, not a design-philosophy document — for tone, color, and content rules, see `DESIGN_SYSTEM.md`, `CREATIVE_DIRECTION.md`, and `VISUAL_GUIDELINES.md`, which still govern every page built from this system.

## The building blocks

| Piece | Location | Responsibility |
|---|---|---|
| `PageHero` | `src/components/layout/PageHero.tsx` | The page's single `<h1>`, subtitle, breadcrumbs, optional badge/CTA/background image |
| `PageLayout` | `src/components/layout/PageLayout.tsx` | Wraps hero + content, optional sidebar grid |
| `buildPageMetadata()` | `src/lib/seo.ts` | `<title>`, description, keywords, canonical, Open Graph, Twitter — export from each page's `metadata` |
| `Breadcrumbs` | `src/components/common/Breadcrumb.tsx` | Trail + auto `BreadcrumbList` JSON-LD (pass `tone="light"` inside a dark `PageHero`) |
| Pattern sections | `src/components/patterns/` | `ContentSection`, `ImageTextSection`, `CTASection`, `QuoteSection`, `StatsSection` — the repeatable content blocks a page is built from |

A typical page file:

```tsx
// src/app/about/page.tsx
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/layout/PageHero";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "About Us",
  path: "/about",
});

export default function AboutPage() {
  return (
    <PageLayout
      hero={
        <PageHero
          title="About Pink City Healthcare"
          breadcrumbs={[{ label: "About Us" }]}
        />
      }
    >
      {/* ContentSection, ImageTextSection, QuoteSection, CTASection... */}
    </PageLayout>
  );
}
```

Vertical rhythm comes from each pattern section's own `<Section>` wrapper (`py-16 sm:py-20 lg:py-24`, identical to the homepage) — `PageLayout` never adds a second layer of spacing around them.

## Page flows

### About Page

```
PageHero
  ↓
Story              → ContentSection
  ↓
Mission            → ImageTextSection (imagePosition="right")
  ↓
Vision             → ImageTextSection (imagePosition="left")
  ↓
Founder            → QuoteSection
  ↓
Why Choose Us       → reuse the homepage's WhyChooseUs section as-is
  ↓
CTA                → CTASection
```

### Service Page (template for all 14 individual `/services/*` pages)

```
PageHero (badge = category, e.g. "Elder Care")
  ↓
Overview            → ContentSection
  ↓
Benefits            → StatsSection or a card grid (reuse FeatureCard)
  ↓
Who Needs This       → reuse PersonaCard in a grid, filtered to relevant personas
  ↓
Process             → reuse the homepage's HowItWorks section as-is
  ↓
FAQ                 → reuse the homepage's FAQSection, with service-specific
                        FAQ data passed in (FAQSection currently reads a fixed
                        import — will need a small prop-driven refactor when
                        the first service page is actually built)
  ↓
Related Services     → ServiceCard grid, filtered from src/data/services.ts
  ↓
CTA                 → CTASection
```

### Contact Page

```
PageHero
  ↓
Contact Information  → ContentSection or a plain info grid (phone/email/
                        address from siteConfig, same fields as the Footer)
  ↓
Contact Form         → not built in Milestone 20 — needs its own component
  ↓
Google Map           → not built in Milestone 20 — embed, keyed by
                        siteConfig.contact.address
  ↓
FAQ                 → reuse FAQSection
  ↓
CTA                 → CTASection
```

### Simple/legal pages (Privacy Policy, Terms, Refund Policy)

No hero decoration needed beyond the basics:

```
PageHero (variant="light", no badge/CTA)
  ↓
ContentSection (single block, long-form body copy)
```

### Blog

Not detailed in the Milestone 16/20 briefs beyond "Blog" being a target page. Expected shape once built:
- **Listing page** (`/blog`): `PageHero` + a `BlogCard` grid (reuse `src/data/blogs.ts`, not homepage's featured-only slice) + pagination (not yet built).
- **Post page** (`/blog/[slug]`): `PageHero` (title = post title, badge = category) + `ContentSection` for the article body + `CTASection` at the end.

## What's intentionally not built yet

- No actual pages under `src/app/` — only the reusable system.
- No contact form or map embed component.
- `FAQSection` and homepage sections reused "as-is" above still read fixed, homepage-specific data — they'll need small prop-driven variants (accepting a `faqs`/`items` prop instead of importing a fixed array) before they can be reused with different content on a Service page. Flagged here rather than done silently, since it's a real (small) follow-up, not a false "fully reusable already" claim.
