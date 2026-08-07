# Pink City Healthcare — Design System

**Status:** Locked. This document is the single source of truth for every page built after Milestone 3. If a future decision conflicts with this document, this document wins — raise a change proposal (see [Governance](#governance)) rather than deviating silently.

**Relationship to existing code:** Milestones 1–2 already implemented the foundational tokens (colors, radius scale, fonts, spacing, Button/Card/Nav primitives) in `src/app/globals.css` and `src/components/ui/`. This document *formalizes and extends* those decisions — it does not replace them. Where a token already exists in code, this doc references its actual name so design and implementation never drift apart.

---

## Table of Contents

1. [Design Philosophy](#1-design-philosophy)
2. [Design Tokens](#2-design-tokens)
3. [Component Inventory](#3-component-inventory)
4. [Homepage UX Blueprint](#4-homepage-ux-blueprint)
5. [Content Strategy](#5-content-strategy)
6. [Image Strategy](#6-image-strategy)
7. [Micro-interactions](#7-micro-interactions)
8. [Accessibility](#8-accessibility)
9. [Governance](#governance)

---

## 1. Design Philosophy

### Brand personality
Pink City Healthcare sits at the intersection of two things people rarely associate: **clinical competence** and **domestic warmth**. Most healthcare brands default to cold blue-and-white sterility because it signals "trustworthy." We keep the trust (blue stays our dominant color) but refuse the coldness — the brand's own name gives us permission to use pink as a deliberate, human accent against clinical blue. Five traits, in priority order:

1. **Trustworthy** — first and non-negotiable. Every design decision is filtered through "does this make a stranger comfortable letting us into their home to care for someone they love?"
2. **Warm** — human, not institutional. We are visiting someone's home, not running a hospital ward.
3. **Competent** — modern, precise, unfussy. Confidence expressed through restraint, not decoration.
4. **Local & personal** — Jaipur roots, not a faceless national chain. Real people, real names, real neighborhoods.
5. **Modern** — closer to a well-built SaaS product than a laminated hospital brochure.

### Emotional tone
Visitors arrive anxious, tired, or in crisis — a parent aging, a family member post-surgery, a newborn at home. The tone must be **calm and competent, never hyped**. No countdown timers, no "Act now!" urgency tactics, no stock-photo grins. We reassure by being clear, specific, and unhurried — the same way a good nurse speaks to a worried family.

### Trust strategy
Home healthcare has the highest trust bar in the healthcare vertical: a stranger enters your home to care for someone vulnerable. Trust is built through **specificity**, not adjectives:
- Verified/background-checked staff — stated plainly, not just implied
- Named, photographed caregivers (never anonymous "our team")
- Real testimonials with relationship context ("Daughter of patient," "Son, Jaipur")
- Transparent pricing and response-time promises ("caregiver matched within 24 hours")
- Certifications and insurance-partner logos shown, not just claimed
- 24/7 availability messaging repeated at decision points, not just in the footer

### Conversion strategy
This is a service business — conversion is a phone call, a WhatsApp message, or a form submit, not a cart checkout. Strategy:
- **Multiple low-friction entry points** repeated at natural decision points down the page (not only header/footer)
- **Progressive commitment** — "Call Now" for undecided visitors, "Book Appointment" for ready ones, shown side-by-side everywhere (already the pattern in the built Header/NavCTA)
- **Trust before ask** — credentials, team, and testimonials appear *before* the final conversion push, never the reverse
- **Urgency paired with reassurance, never urgency alone** ("Available 24/7" reassures; a countdown timer would pressure — we only ever do the former)

### Visual identity
Spacious, editorial-modern healthcare aesthetic — closer to Linear or Practo's newer product surfaces than a traditional hospital site. Confident whitespace, large friendly headline type, soft depth (gentle shadows and gradients, never flat Material-style flatness, never skeuomorphism), rounded-but-professional corners (the existing `0.75rem` base radius — soft enough to feel human, not so round it reads as a children's app). The signature visual move is the **blue-to-pink interplay**: blue carries structure and trust, pink is used sparingly as a spotlight — eyebrow labels, a single accent dot in the logo, a highlight on the one thing per section that most needs attention.

### Image style
Real photography of real people, warm natural light, candid rather than stiffly posed, diverse in age and ethnicity reflecting Jaipur's actual population, shot in **home settings** — because this is home healthcare, imagery must show care happening in lived-in domestic spaces, not sterile hospital corridors.

### Illustration style
Used sparingly, only for abstract concepts that photography can't represent well (process steps, empty states, 404). When used: flat vector line-art in brand colors, consistent stroke weight, never generic "healthcare clip-art" (syringes, red crosses, cartoon stethoscopes). Illustrations never stand in for real people — an illustrated "cartoon doctor" undermines the authenticity a healthcare brand needs.

### Icon style
Lucide (already the established set across Header/Footer/MegaMenu) exclusively — never mix icon libraries. 2px stroke, rounded caps, 20–24px default. Monochrome by default; brand-color fill reserved for active/hover states, matching the existing service-icon-chip pattern (`bg-secondary` at rest → `bg-primary` on hover).

---

## 2. Design Tokens

Everything below either already exists in `globals.css` (referenced by its real token name) or is a new rule this milestone locks in.

### Color

| Token | Value | Usage |
|---|---|---|
| `--primary` | `#1E5EFF` | Primary actions, links, brand structure |
| `--primary-light` | `#3D74FF` | Gradient stops only |
| `--primary-dark` | `#0B3FC4` | Gradient stops only |
| `--color-brand-pink` | `#E91E63` | Sparing accent — eyebrows, single highlights, never large fills |
| `--color-brand-green` | `#39B54A` | Success states, "verified/available" indicators only |
| `--destructive` | `#EF4444` | Errors and destructive actions **only** — not for urgency/emergency messaging (see [Emergency Banner](#emergency-banner)) |
| `--background` | `#F8FBFF` | Page background |
| `--foreground` | `#1F2937` | Body text |
| `--card` | `#FFFFFF` | Card surfaces |
| `--muted-foreground` | `#64748B` | Secondary text |
| `--border` | `#E2E8F0` | Structural dividers |

**Rule:** pink is a spotlight, not a fill. If more than ~5% of a section's visible area is pink, that's a mistake — dial it back to an eyebrow label, an icon accent, or a single underline.

### Typography scale

Font families are locked: **Plus Jakarta Sans** (`font-heading`) for all headings, **Inter** (`font-sans`) for body — already wired globally so every `h1`–`h6` gets the heading font automatically.

| Role | Mobile | Desktop | Weight | Leading | Tracking |
|---|---|---|---|---|---|
| Display (hero only) | `text-4xl` | `text-6xl` | Bold | 1.1 | Tight |
| H1 (page title) | `text-3xl` | `text-5xl` | Bold | 1.15 | Tight |
| H2 (section title) | `text-2xl` | `text-4xl` | Bold | 1.2 | Tight |
| H3 (card/subsection) | `text-xl` | `text-2xl` | Semibold | 1.25 | Tight |
| H4 (minor heading) | `text-lg` | `text-lg` | Semibold | 1.3 | Normal |
| Body Large (intros) | `text-base` | `text-lg` | Regular | 1.6 | Normal |
| Body (default) | `text-base` | `text-base` | Regular | 1.6 | Normal |
| Body Small (captions) | `text-sm` | `text-sm` | Regular | 1.5 | Normal |
| Eyebrow/Label | `text-xs` | `text-xs` | Semibold | 1.4 | Wide, uppercase |

**Rules:** body text never smaller than 16px (`text-base`) for primary reading content. Max line length ~65–75 characters — wrap body copy in `max-w-2xl`/`max-w-3xl`, never let a paragraph stretch full-container-width on desktop. Never convey hierarchy with size alone — pair with weight and/or color.

### Container & grid

| Token | Value |
|---|---|
| Max container width | `max-w-7xl` (1280px) — matches `Container` component |
| Container padding | `px-4 sm:px-6 lg:px-8` |
| Section vertical rhythm | `py-16 sm:py-20 lg:py-24` — matches `Section` component |
| Grid gutters | `gap-6` default, `gap-4` for dense card grids, `gap-10`+ for generous marketing grids |
| Grid columns | Mobile: 1 · Tablet (`sm`): 2 · Desktop (`lg`): 3–4 depending on component |

### Border radius

Already implemented as a multiplier scale off `--radius: 0.75rem`:

| Token | Value | Usage |
|---|---|---|
| `radius-sm` | 0.45rem | Inputs, small chips |
| `radius-md` | 0.6rem | Buttons |
| `radius-lg` | 0.75rem | Cards, dropdowns (default) |
| `radius-xl` | 1.05rem | Large cards, image frames |
| `radius-2xl` | 1.35rem | Hero panels, feature banners |
| `radius-3xl` | 1.65rem | Full-bleed marketing sections |

Never introduce a one-off radius value outside this scale.

### Shadow scale

New semantic elevation levels (map to existing Tailwind utilities already used in the codebase):

| Level | Utility | Usage |
|---|---|---|
| 0 — Flat | none | Inline elements, flush surfaces |
| 1 — Resting | `shadow-sm` | Cards at rest |
| 2 — Raised | `shadow-md` | Cards on hover, solid header state |
| 3 — Floating | `shadow-lg` | Dropdowns, mega menu, floating CTAs |
| 4 — Overlay | `shadow-xl` / `shadow-2xl` | Dialogs, sheets, lightbox |

Default shadows stay neutral gray-black. Reserve a subtle **primary-tinted** shadow (e.g. `shadow-[0_8px_24px_-4px_rgba(30,94,255,0.25)]`) for primary CTA buttons only — it should feel like a deliberate accent, not a site-wide habit.

### Animation durations & easing

| Speed | Duration | Usage |
|---|---|---|
| Micro | 150ms | Color/hover feedback |
| Fast | 200ms | Button press, small state changes |
| Base | 300ms | Dropdown open, card hover lift — matches Header/MegaMenu already built |
| Slow | 350–400ms | Page transitions, drawers — matches `template.tsx`/Sheet already built |
| Reveal | 500–600ms | Scroll-triggered entrance animations |

**Easing:** `ease-out` (fast start, gentle stop) for anything entering; `ease-in` for anything exiting. A soft spring/bounce is reserved for rare delight moments only (counter finishing, form-success checkmark) — never used for structural UI motion.

**Non-negotiable:** every animation above must respect `prefers-reduced-motion`, exactly as already implemented for Header/Nav/Sheet/Accordion in Milestone 2.2. This is not optional per-component — it's a system-wide contract.

### Glass effects

Used sparingly, only for floating UI over imagery or gradients:
- Structural glass (nav bars, sticky bars): `bg-background/95 backdrop-blur-md` — already the Header/MobileStickyCta pattern
- Content glass (a stat card over a hero photo): `bg-white/80 backdrop-blur-md border border-white/40`

Never apply glass to primary content cards or body-text containers — it reduces contrast, which conflicts with our accessibility bar.

### Gradient rules

Gradients are reserved for **large marketing surfaces only** — hero backgrounds, CTA banners, mega-menu promo panels (already built). Always drawn from the primary family: `primary-light → primary` or `primary → primary-dark`, diagonal (`to-br`) for energy or a soft radial glow for hero accent lighting. **Never** apply a gradient to body text backgrounds, buttons (buttons stay flat `bg-primary`), or small UI chrome — gradients lose their impact and start to look decorative rather than intentional if overused.

### Border styles

1px solid, `--border` token on light surfaces, `white/10` on dark surfaces (already the Footer pattern). No heavy/thick borders anywhere — thin borders keep the "premium light" feel. Focus rings are the one exception to "thin": `ring-3 ring-ring/50`, always visible, never suppressed.

### Hover elevation

The standard "lift" for any clickable card (Service, Doctor, Testimonial, Blog, Gallery, Pricing): `translateY(-4px)` + one shadow level up + optional `scale-[1.02]` on the inner image only, 300ms ease-out. Applied consistently — a Service Card and a Blog Card should feel like they belong to the same family when hovered.

### Focus states

Universal, no exceptions: `focus-visible:ring-3 focus-visible:ring-ring/50`, primary-blue ring. Every interactive element gets this — links, buttons, cards, form fields, custom components. Never remove focus outlines without replacing them with something equally visible.

### Loading skeleton style

`bg-muted` block matching the shape of the content it replaces (rounded-full for avatars, `radius-md` for text lines, `radius-lg` for card frames) with a gentle pulse (`animate-pulse`). Under reduced motion: static muted block, no pulse.

---

## 3. Component Inventory

Every component below builds on the existing primitives in `src/components/ui/` (shadcn) and follows the tokens in Part 2. Purpose → Visual hierarchy → Variants → Spacing → Responsive → Accessibility for each.

### Buttons

#### Primary Button
- **Purpose:** main conversion actions — Book Appointment, Call Now, form submit
- **Visual hierarchy:** highest emphasis, solid `bg-primary` fill (existing `default` variant)
- **Variants:** default, with leading/trailing icon, loading (spinner replaces label), disabled
- **Spacing:** use `size="lg"` as the *minimum* for any primary CTA — the existing dense `default`/`sm` sizes are correct for dense UI chrome (nav, cards) but too small for a conversion-critical action on a healthcare site
- **Responsive:** full-width in stacked mobile contexts (forms, sticky bar — already the MobileStickyCta pattern), auto-width inline on desktop
- **Accessibility:** visible focus ring, `aria-busy` + disabled interaction while loading, disabled state via `aria-disabled`, minimum 44×44px effective tap area on touch devices even where the visual box is smaller

#### Secondary Button
- **Purpose:** paired lower-emphasis action next to a primary ("Our Services" beside "Book Appointment")
- **Visual hierarchy:** existing `outline` or `secondary` variant
- **Variants, spacing, responsive, accessibility:** identical rules to Primary Button

#### Ghost Button
- **Purpose:** tertiary actions, icon-only utilities (close, menu toggle), low-weight in-card links
- **Visual hierarchy:** no fill/border at rest, `hover:bg-muted`
- **Variants:** text-only, icon-only
- **Accessibility:** icon-only ghost buttons **require** `aria-label` — already the established pattern (Menu, Close, ScrollToTop)

### Cards

#### Service Card
- **Purpose:** represent one of the 12 services on Home/Services pages
- **Visual hierarchy:** icon chip → title → 1–2 line description → arrow affordance that nudges right on hover
- **Variants:** default grid card, compact (related-services rail), featured (larger, photo instead of icon — for flagship services like ICU Care)
- **Spacing:** `p-6` card padding, `gap-4` internal stack, `gap-6` grid gutter
- **Responsive:** 1 col mobile → 2 col tablet → 3–4 col desktop
- **Accessibility:** entire card wrapped in one `<Link>`, not just a small text affordance; visible focus ring on the card itself

#### Doctor Card
- **Purpose:** humanize the caregiver team, address "who is coming into my home"
- **Visual hierarchy:** photo (large, top) → name → specialization/role → credential line → optional experience badge → CTA
- **Variants:** grid (photo top), horizontal (photo left, list views), compact (avatar + name, used in mega-menu-style contexts)
- **Spacing:** consistent portrait aspect ratio (4:5) across every card in a grid — mismatched crops are the fastest way to look unpolished
- **Responsive:** 1 col mobile → 2 col tablet → 3–4 col desktop; horizontal variant stacks vertical on mobile
- **Accessibility:** photo alt text is meaningful content — `"Dr. [Name], [Specialization]"`, never empty/decorative

#### Testimonial Card
- **Purpose:** social proof via patient/family stories
- **Visual hierarchy:** quote accent → testimonial text (relaxed leading) → reviewer name/photo/relationship → star rating → optional service tag
- **Variants:** standalone grid card, Swiper carousel slide, featured/large (single prominent story)
- **Spacing:** generous `p-8` — this is a trust-building "breathing room" component, don't cram it
- **Responsive:** swipeable carousel on mobile, grid on desktop
- **Accessibility:** star rating needs a text equivalent ("4.5 out of 5"), never icon-only; carousel needs keyboard arrows, pause-on-hover/focus, and must not rely on autoplay alone under reduced motion

#### Statistic Card / Counter
- **Purpose:** quantify trust ("500+ Families Cared For," "24/7 Availability")
- **Visual hierarchy:** large bold number (`font-heading`, brand color) over a short label
- **Variants:** inline stat row (band of 4), card-wrapped with icon
- **Spacing/Responsive:** 2×2 mobile grid, 1×4 desktop row
- **Accessibility:** the final value must exist in the accessible name immediately — never depend on the count-up animation completing for screen reader users

#### Feature Card
- **Purpose:** "Why Choose Us" differentiators
- **Visual hierarchy:** icon → title → short description, minimal chrome
- **Variants:** icon-top (vertical), icon-left (dense horizontal list)
- **Spacing/Responsive:** same grid rules as Service Card

#### Gallery Card
- **Purpose:** facility/team/care-moment photography
- **Visual hierarchy:** image-forward, optional caption on hover, `radius-lg` corners
- **Variants:** uniform-ratio grid tile, lightbox trigger
- **Responsive:** 2 col mobile → 3–4 col desktop; masonry acceptable on the dedicated Gallery page only
- **Accessibility:** meaningful per-image alt text; lightbox is keyboard-operable (Escape closes, arrows navigate) and traps focus while open

#### Pricing Card
- **Purpose:** service package pricing (Pricing page)
- **Visual hierarchy:** plan name → large price + billing unit → feature checklist → CTA; optional "Most Popular" ribbon
- **Variants:** standard, featured (elevated shadow, primary-color border, slightly larger)
- **Accessibility:** any dynamic price change (e.g. a billing toggle) must be announced via `aria-live`

#### Blog Card
- **Purpose:** blog listing teaser
- **Visual hierarchy:** 16:9 featured image → category tag → title → excerpt → meta (date, read time)
- **Variants:** grid card, featured/hero card (top post), horizontal list card
- **Accessibility:** entire card clickable, descriptive image alt text, category also stated in visible text (not color/tag alone)

#### Appointment Card
- **Purpose:** booking summary/confirmation, or an embedded quick-book widget on service pages
- **Visual hierarchy:** service → date/time → patient name → status badge → edit/cancel
- **Variants:** read-only summary, inline quick-book mini-form

#### Contact Card
- **Purpose:** individual contact-method tiles (Phone / WhatsApp / Email / Address) on the Contact page
- **Visual hierarchy:** colored icon chip → label → value → action
- **Variants:** 4-up grid (Contact page), compact inline row

### Content components

#### FAQ Accordion
- **Purpose:** pre-empt objections, FAQPage schema SEO value
- **Visual hierarchy:** bold question + chevron, muted-foreground answer — built on the existing `Accordion` primitive
- **Variants:** single-open (default — avoids overwhelming), multi-open for short FAQ sets
- **Spacing:** generous `py-4` per row for touch comfort, divider between items (already `not-last:border-b`)
- **Accessibility:** already Radix-accessible; add `FAQPage` JSON-LD at the page level

#### Timeline
- **Purpose:** "How It Works" process, or company milestones on the About page
- **Visual hierarchy:** numbered nodes in brand color, connecting line
- **Variants:** process timeline (icon nodes), history timeline (date + description)
- **Responsive:** always vertical on mobile regardless of desktop orientation
- **Accessibility:** ordered-list semantics (`<ol>`), not purely visual positioning

#### Process Step
- **Purpose:** one step within a Timeline or a standalone "3 simple steps" band
- **Visual hierarchy:** number badge/icon → title → description, connecting arrow to next step (desktop only)
- **Responsive:** vertical stack on mobile, connecting element becomes vertical or is dropped

### Marketing components

#### Emergency Banner
- **Purpose:** urgent contextual messaging ("Need immediate care? Call our 24/7 line")
- **Visual hierarchy:** **deliberately not `--destructive` red** — red implies error/danger and would alarm rather than reassure. Use a bold primary-blue treatment with a phone icon and a subtle glow instead.
- **Variants:** dismissible top banner, inline section banner
- **Accessibility:** dismissal is keyboard-operable and persists (session/localStorage) so it doesn't reappear every page load; any glow/pulse respects reduced motion

#### CTA Banner
- **Purpose:** mid-page or end-of-page conversion push
- **Visual hierarchy:** full-width gradient or image-with-overlay band, centered headline + subcopy + CTA(s) — an intentional break from the page's light rhythm
- **Variants:** gradient background, image background with dark overlay, split layout (text + image/illustration)
- **Responsive:** stacks vertically on mobile; supporting image/illustration may be dropped on mobile if it adds no value at small size

#### Section Header
- **Purpose:** the reusable eyebrow + headline + subheading pattern opening nearly every homepage section — the single most-repeated component in the system
- **Visual hierarchy:** eyebrow (`text-xs uppercase tracking-wide`, brand-pink or primary) → H2 headline → optional subheading (Body Large, muted-foreground)
- **Variants:** centered (marketing sections — Hero, Why Choose Us, Testimonials), left-aligned (content-dense sections — Services intro, Blog listing)
- **Spacing:** subheading capped at `max-w-2xl` to prevent overlong lines, `mb-12`/`mb-16` before section content

#### Trust Badge
- **Purpose:** small inline credibility markers ("Verified Staff," "Background Checked") near CTAs or in the footer
- **Visual hierarchy:** icon + short label, small footprint
- **Variants:** icon-only compact row, icon+label standard

#### Certification Badge
- **Purpose:** actual third-party certification/insurance-partner logos, distinct from Trust Badge's text-based markers
- **Visual hierarchy:** grayscale at rest, color on hover, consistent sizing/whitespace regardless of each logo's native proportions
- **Accessibility:** descriptive alt text naming the certifying body, never `"logo.png"`

---

## 4. Homepage UX Blueprint

**Section order and the reasoning behind it:** the homepage follows a trust-funnel, not a features-dump. Attention (Hero) → confirm fit (Services) → reduce friction (How It Works) → differentiate (Why Choose Us) → prove it (Stats → Doctors → Testimonials) → handle remaining objections (FAQ) → demonstrate expertise (Blog) → final ask (CTA). Trust-building sections are placed *before* the final conversion push, never after — asking for commitment before earning trust is the single most common mistake in healthcare marketing sites.

Header (sticky, transparent-on-hero) and Footer are already built in Milestone 2 and frame every section below.

### 1. Hero
- **Purpose:** communicate the core value proposition instantly, set the premium/trustworthy tone, primary conversion entry point
- **Headline (example):** "Compassionate Home Healthcare, Delivered With Trust"
- **Subheading (example):** "From nursing care to physiotherapy, our verified professionals bring hospital-quality care to your home — available 24/7 across Jaipur."
- **CTA:** Primary "Book Appointment" + Secondary "Call Now" — dual CTA for different visitor readiness levels
- **Imagery:** real, candid photography of a caregiver with a patient at home — not a stock "doctor with stethoscope" cliché; gradient (already built) as fallback/background treatment behind or beside the photo
- **Animation:** staggered fade-up on headline/subhead/CTA on load; very subtle image parallax/ken-burns, disabled under reduced motion
- **Responsive:** image stacks below text on mobile, or full-bleed background with a gradient overlay for text legibility
- **SEO:** the page's only `<h1>` lives here — include the primary keyword phrase ("home healthcare services" + "Jaipur")

### 2. Trust Bar
- **Purpose:** immediate credibility before the visitor commits to scrolling
- **Headline:** minimal or none — shouldn't compete with the hero
- **CTA:** none — this is a passive trust section
- **Imagery:** certification/partner logos, or a compact 3–4 item stat row
- **Animation:** subtle fade-in; logos grayscale → color on hover
- **Responsive:** horizontal scroll or two-row wrap on mobile if too many logos
- **SEO:** low direct value, but alt text on every logo still matters

### 3. Services Overview
- **Purpose:** confirm service-market fit, primary internal navigation aid
- **Headline:** "Our Home Healthcare Services"
- **Subheading:** "Comprehensive care tailored to your family's needs — delivered by verified professionals"
- **CTA:** each Service Card links to its detail page; section-level "View All Services"
- **Imagery:** icon-based cards (matches the mega-menu icon system already built) — photography reserved for Hero/Doctors/Testimonials to avoid visual monotony
- **Animation:** staggered fade-up as the grid enters view, hover lift on cards
- **Responsive:** 1 → 2 → 3/4 column grid
- **SEO:** **high** — internal links to every service page using the service name as link text, directly supports crawlability and site architecture

### 4. How It Works
- **Purpose:** reduce the perceived complexity of getting started
- **Headline:** "Getting Care Started Is Simple"
- **Subheading:** "Three steps between you and professional care at home"
- **CTA:** optional secondary CTA after the steps
- **Imagery:** numbered icon nodes (Process Step), no photography needed
- **Animation:** sequential stagger reveal, connecting line draws in on scroll (subtle, skipped under reduced motion)
- **Responsive:** vertical stack on mobile
- **SEO:** moderate — natural home for "how to book home nursing care" long-tail phrasing

### 5. Why Choose Us
- **Purpose:** competitive differentiation, now that the visitor understands the offering
- **Headline:** "Why Families Choose Pink City Healthcare"
- **Subheading:** reinforce differentiators — verified staff, 24/7 availability, affordability, local expertise
- **CTA:** none, or a soft link to the About page
- **Imagery:** Feature Cards with icons, optionally one supporting photo
- **Animation:** staggered fade-up grid
- **Responsive:** 2-col tablet, 4-col (or 2×2) desktop
- **SEO:** good placement for E-E-A-T signals (Experience, Expertise, Authority, Trust) — important for health-content (YMYL) ranking

### 6. Statistics Band
- **Purpose:** bold, scannable proof-by-numbers; a visual rhythm break via a full-width colored band
- **Headline:** minimal eyebrow only ("Our Impact")
- **CTA:** none
- **Imagery:** none — pure typography + icons
- **Animation:** count-up on scroll-into-view, once only
- **Responsive:** 2×2 mobile, 1×4 desktop row
- **SEO:** low direct value, but specific real numbers support credibility

### 7. Doctors & Caregivers
- **Purpose:** humanize the service, directly address "who exactly is coming into my home"
- **Headline:** "Meet Our Care Team"
- **Subheading:** emphasize vetting and verification
- **CTA:** "View Full Team" → Our Team page
- **Imagery:** real photography, Doctor Card grid
- **Animation:** staggered fade-up, hover lift + shadow
- **Responsive:** Swiper carousel on mobile, grid on desktop
- **SEO:** `Person` schema markup opportunity for named staff — strong E-E-A-T signal for YMYL healthcare content

### 8. Testimonials
- **Purpose:** peer social proof, most persuasive immediately before the final conversion ask
- **Headline:** "What Families Are Saying"
- **CTA:** none, or "Read More Reviews"
- **Imagery:** reviewer photos (where consented) + star ratings
- **Animation:** Swiper carousel, autoplay with pause-on-hover/focus, disabled or greatly slowed under reduced motion
- **Responsive:** 1 slide mobile, 2–3 desktop
- **SEO:** `Review`/`AggregateRating` schema — valuable for rich snippets

### 9. Gallery Teaser *(optional — first candidate to cut if the page runs long)*
- **Purpose:** lighter emotional beat, breaks up text-heavy sections
- **Headline:** "A Glimpse Into Our Care"
- **CTA:** "View Full Gallery"
- **Imagery:** curated 4–6 image grid linking to the full Gallery page
- **Animation:** simple fade-in, lightbox on click
- **Responsive:** 2-col mobile, 3–4 desktop
- **SEO:** low direct value, decent engagement/dwell-time driver

### 10. FAQ
- **Purpose:** resolve remaining objections immediately before the final CTA
- **Headline:** "Frequently Asked Questions"
- **CTA:** "Still have questions? Contact us"
- **Animation:** accordion expand/collapse only
- **Responsive:** single column always
- **SEO:** **high** — `FAQPage` schema enables rich snippets and directly targets question-based long-tail search

### 11. Latest Blogs
- **Purpose:** demonstrate expertise, support long-term SEO content strategy
- **Headline:** "Health Tips & Resources"
- **CTA:** "View All Articles"
- **Imagery:** Blog Card grid with featured images
- **Animation:** staggered fade-up
- **Responsive:** 1-col mobile, 3-col desktop
- **SEO:** **high long-term value** (fresh content, internal linking, topical authority) — placed late since it doesn't drive immediate conversion

### 12. Final CTA Banner
- **Purpose:** last, unambiguous conversion push after all trust has been established
- **Headline:** "Ready to Get Started?"
- **Subheading:** "Speak with our care coordinator today — no obligation."
- **CTA:** dual — primary "Book Appointment," secondary "Call [phone]"
- **Imagery:** gradient band (`primary-light → primary-dark`, matching the established system) or photo-with-overlay
- **Animation:** minimal — perhaps a subtle glow/pulse on the primary button, reduced-motion aware
- **Responsive:** stacked and centered on mobile
- **SEO:** natural final placement for a location/service keyword mention

### 13. Footer
Already built (Milestone 2). Sitemap, legal pages, secondary contact/trust signals, last-resort navigation.

---

## 5. Content Strategy

### Tone of voice
Warm, competent, plain-language. Avoid excessive medical jargon. Second-person ("you," "your family") to feel personal, never corporate. Active voice. Reassuring without being saccharine — never fear-mongering, never a hard sell.

### Writing style rules
- Short sentences over long ones
- Sentence case for UI copy; Title Case reserved for headings/proper nouns
- Lead with benefit, not feature — *"Recover comfortably at home"*, not *"We offer post-surgery care services"*
- Avoid unearned superlatives ("best," "#1") unless substantiated with a specific, checkable fact
- Avoid institutional coldness — *"we care for your loved ones"*, not *"healthcare service delivery"*

### Headline rules
Benefit-first. Hero headlines target 6–10 words. Include emotional *and* functional benefit where possible. Avoid question-headlines in the hero (they read as weaker) — save questions for FAQ. Prefer real specificity over vague claims ("500+ families served" beats "many happy families").

### CTA rules
Verb-first: "Book Appointment," never "Appointment Booking." Avoid generic "Submit"/"Click Here." **The primary CTA label is consistent site-wide** — always "Book Appointment," never sometimes "Get Started" and sometimes "Book Now" (consistency drives recognition). Secondary CTAs use lower-commitment language: "Call Now," "Learn More," "View Services."

### Trust messaging
Lead with verifiable specifics — certifications, years of operation, real numbers — over vague adjectives. Name actual credentials and partnerships where they exist. Testimonials should carry realistic detail (relationship to patient, specific service used), never a bare "Great service!"

### Healthcare messaging
Stay in the *care/support/assistance* register — this is a home-care service, not a diagnostic or clinical-outcomes service, and messaging must never imply medical guarantees or diagnoses (a compliance concern as much as a tone one). Be sensitive to the emotional weight of the subject matter (post-surgery, elder care, ICU) — never lean on fear or urgency around a family member's health.

### Conversion messaging
Reduce-risk framing where true ("free consultation," "no long-term contract"). Availability/responsiveness framing (24/7, "caregiver matched within 24 hours"). Urgency is always paired with reassurance — urgency alone reads as pressure, which directly contradicts the brand's trust strategy.

---

## 6. Image Strategy

### Photography style
Natural light, documentary/candid over posed-studio, warm color temperature (deliberately warm to balance the cool blue brand palette — this is where the brand's warmth actually comes through), real home locations rather than generic clinical rooms.

### Doctor photography
Professional but approachable — soft expression, appropriate attire (scrubs/coat, not overly sterile), consistent background treatment and crop/aspect-ratio across the entire team grid. Consistency across photos matters more than any single photo's polish.

### Nurse/caregiver photography
Shown in action wherever possible — assisting mobility, holding a hand, mid-conversation with a patient — rather than static posed portraits. This is more persuasive for a *home care* service specifically: it shows the actual care experience, not a staff directory.

### Family photography
Multi-generational warmth (patient with family member), genuine rather than exaggerated stock-photo expressions, diverse representation reflecting Jaipur's actual demographics.

### Color grading
One consistent preset/LUT across all site photography — slightly warm, moderate contrast, never oversaturated. This consistency is worth more to the "premium" feel than any individual photo's quality; mismatched photo treatment is the fastest tell of an unpolished site.

### Iconography
Lucide only, 2px stroke, never mixed with another icon set.

### Illustration usage
Minimal — abstract/process content only (How It Works nodes, empty states, 404). Never used to represent actual patients, doctors, or caregivers.

### Background patterns
Subtle only: soft blurred gradient blobs (already used in the hero), or a faint (<5% opacity) dot-grid/line texture in otherwise-empty sections. Never a busy pattern behind body text.

---

## 7. Micro-interactions

| Element | Interaction |
|---|---|
| **Hover (cards)** | `translateY(-4px)` + shadow level +1, 300ms ease-out; inner image may scale to 1.05 (contained via `overflow-hidden`) |
| **Hover (buttons)** | Color shift only (~10–20% per existing `hover:bg-primary/80` pattern) — no movement, movement reads as unstable on a trust-critical site |
| **Hover (links/icons)** | Underline or color shift, not both; directional icons (arrows) nudge in their pointing direction — already used in the mega-menu "View all services" link |
| **Scroll reveal** | Fade-up entrance, staggered for grids, triggers once at ~15–20% visibility, never re-triggers on scroll-back |
| **Counters** | Count from 0 on first scroll-into-view only, ease-out, ~1.5–2s |
| **Buttons (active/pressed)** | Slight scale-down (0.98) or further darken for tactile feedback; loading state swaps label for a spinner and sets `aria-busy` |
| **Forms** | Focus = ring + border color shift to primary; validate on blur, not every keystroke (reduces anxiety); errors always pair an icon + message with color, never color alone |
| **Navigation** | Already locked in Milestone 2 — sticky transparent→solid header, active pill states, mega menu, mobile drawer. Reference, don't redefine. |
| **Accordion** | Chevron rotates 180° on expand, height animates — already built; respects reduced motion |
| **Gallery/Lightbox** | Fade+scale-in on open, crossfade between images, keyboard arrow navigation, swipe on touch |
| **Testimonial carousel** | `translateX` slide, ease-out; autoplay pauses on hover/focus/touch; autoplay disabled (manual controls only) under reduced motion |

---

## 8. Accessibility

### Typography rules
16px minimum for body copy. Line-height 1.5+ for body text. Max line length ~65–75 characters via `max-w-2xl`/`max-w-3xl` wrappers. Hierarchy is never conveyed by size alone.

### Color usage
Never convey meaning by color alone — error states pair a red border with an icon and a text message, not red alone. Known-safe combinations already verified in Milestone 2.2:
- White text on the primary-blue gradient must be **≥90% opacity** (measured ~4.58:1; 80% measured 3.84:1 and fails AA)
- `muted-foreground` on `background`/`card` passes comfortably
- Footer's `background/70` on `foreground` measured ~7.7:1

Any *new* color combination introduced in Home-page components must be computed, not assumed — follow the same verification process used to catch and fix the hero/mega-menu contrast issue.

### Motion rules
Every scroll-reveal, counter, carousel autoplay, and hover-transform must respect `prefers-reduced-motion` — this is a system-wide contract carried forward from Milestone 2.2, not a per-component decision.

### Contrast
Minimum 4.5:1 for body text, 3:1 for large text (24px+, or 19px+ bold). Any text overlaid on a photograph requires a scrim/gradient overlay behind it — minimum 40–50% dark overlay for white text — verified, not eyeballed.

### Touch targets
Minimum 44×44px effective tap area on mobile for every interactive element. **Flag for implementation:** the current dense Button sizing (`h-8`/`h-9`) sits below this — primary/mobile CTAs should use `size="lg"` or larger, and small icon buttons need adequate hit-slop padding on touch devices even where the visual box stays compact.

### Keyboard behavior
Every interactive component — cards, accordions, carousels, lightbox, forms — must be fully operable by keyboard alone. Focus order follows visual/logical order. No keyboard traps. Escape closes any overlay (modal, lightbox, drawer). This matches the standard already set by the Header/Nav work in Milestone 2.

---

## Governance

This document is locked for Milestone 4 onward. If a page's real content genuinely doesn't fit a rule here (a token, a component spec, a section in the homepage blueprint), the fix is to **propose an amendment to this document first**, get it approved, then build — not to quietly diverge in page code. Treat drift between this document and the live site as a bug.
