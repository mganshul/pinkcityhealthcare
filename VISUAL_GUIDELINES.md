# Pink City Healthcare — Visual Guidelines

**Status:** Final and binding. The creative direction is approved — this document is no longer exploration, it's law. Every page built from this point forward follows these rules exactly. Where a rule here is more specific than `DESIGN_SYSTEM.md`, this document wins; where it's silent, `DESIGN_SYSTEM.md` still applies. Change requests go through that document's [Governance](./DESIGN_SYSTEM.md#governance) process, not silent deviation on a page-by-page basis.

**The approved direction, in one line:** Concept B's warmth as the emotional foundation, executed with Concept C's restraint and craft discipline, with Concept A's credibility patterns deployed only in the specific sections that need hard clinical trust. Not a blend applied evenly — a deliberate assignment, spelled out concretely in Section 17.

---

## 1. Overall Visual Philosophy

The page should feel like a **considered, warm, competent home** — not a hospital lobby, not a lifestyle blog, not a tech startup's marketing site, though it borrows discipline from the last one. Every section earns its place through restraint (Concept C), every image and word chooses relatability over institutional distance (Concept B), and the specific sections that carry the burden of clinical trust (Trust Bar, Statistics, Doctors, Service Areas) borrow Concept A's structured, credential-visible confidence. Nothing on this site should look decorative for its own sake.

## 2. Emotional Design Principles

The visitor's emotional state changes as they scroll, and the design must track it — this maps directly to the trust-funnel order in `HOMEPAGE_BLUEPRINT.md`:

| Stage | Sections | Visitor should feel |
|---|---|---|
| Arrival | Hero, Urgent Care Strip | *"This is calm and competent — I'm in the right place."* |
| Recognition | Who We Help, Services | *"They understand my specific situation."* |
| Reassurance | How It Works, Why Choose Us | *"This isn't complicated or risky."* |
| Confidence | Stats, Doctors, Testimonials | *"Real people trust this, and I can see why."* |
| Resolution | Service Areas, FAQ | *"My practical doubts are answered."* |
| Commitment | Final CTA | *"I'm ready to act, right now."* |

No section should introduce a NEW anxiety it doesn't also resolve within the same viewport. If a section raises a question (e.g., pricing), the answer must be near it, not several sections away.

## 3. Brand Personality

Quick reference from `DESIGN_SYSTEM.md` Part 1 — ranked deliberately, and the ranking governs every tie-break decision in this document:

**Trustworthy → Warm → Competent → Local → Modern.**

If a design decision pits two traits against each other (e.g., a "modern" minimal treatment vs. a "warm" photo-forward one), the trait higher on this list wins.

## 4. Visual Hierarchy

- **One primary focal point per viewport.** A visitor's eye should never have to choose between two competing "most important" elements on the same screen.
- Hierarchy is established through **size → weight → color → position → whitespace**, in that priority order. Color is the *last* tool reached for, never the first.
- Every section follows the order: **eyebrow → headline → supporting text → visual → CTA.** Never reorder this without a specific reason tied to that section's job.
- Decorative elements (background shapes, icons, dividers) always sit visually *behind* content in the hierarchy — never compete with headline or CTA weight.

## 5. Typography Rules

Full scale lives in `DESIGN_SYSTEM.md` §2. Rules that remove ambiguity in practice:

- Never use more than **three type sizes** in a single section (e.g., H2 + Body Large + Body Small — not five different sizes stacked).
- Body copy is never smaller than 16px, never wider than `max-w-2xl`/`max-w-3xl` per line-block.
- Headings are always Plus Jakarta Sans (`font-heading`), body is always Inter (`font-sans`) — no exceptions, no third typeface, ever.
- Eyebrow labels are always `text-xs`, uppercase, wide tracking, semibold — consistent across every section that uses one (this was inconsistent pre-Milestone-2.2 and was fixed; do not reintroduce the drift).
- Sentence case for UI copy (buttons, labels, nav); Title Case reserved for headings only.

## 6. Color Usage Rules

### Blue usage
Blue (`--primary` and its `-light`/`-dark` gradient stops) is the **dominant, structural** color — CTAs, links, icon fills on hover, section anchoring accents, and the full visual language of the four "credibility" sections (Trust Bar, Statistics, Doctors, Service Areas — see Section 17). It should be the color a visitor associates with the brand's competence.

### Green usage
`--color-brand-green` is reserved **exclusively** for success/verified/available-status signals — a checkmark, a "Verified Staff" badge, an "Available Now" dot. **Never** used as a section background, a decorative fill, or a CTA color. If green appears anywhere that isn't communicating a status, it's a mistake.

### Pink usage
`--color-brand-pink` is a **spotlight, not a fill** — this rule from `DESIGN_SYSTEM.md` is reaffirmed, not loosened, despite Concept B's exploration of a heavier ratio. Concretely:
- Maximum **one** pink element visible per viewport (an eyebrow label, a single accent underline, the logo's accent dot).
- Never a section background, a card fill, or more than a few pixels of stroke/fill weight.
- If a section feels like it "needs more warmth," the fix is photography and copy tone — not more pink.

### White space rules
Whitespace is a design element, not empty space to be filled. Minimum section padding is `py-16 sm:py-20 lg:py-24` (already the `Section` component default) — never compressed to fit more content in. If a section feels sparse, the fix is better content or a size/weight adjustment, never denser packing. Never place more than **4–6 distinct content elements** in a single viewport on desktop, or **2–3** on mobile.

## 7. Image Style

Casting and context rules per subject, building on `DESIGN_SYSTEM.md` §6:

- **Nurses/caregivers:** shown *in action* — assisting mobility, holding a hand, mid-conversation — never a static posed portrait alone. This is a home-care brand; the photography has to show the care happening, not a staff directory.
- **Elderly patients:** dignified, never frail-for-effect or pitiable. Warm expression, engaged posture, shown as an active participant in their own care, not a passive subject being done-to.
- **Families:** multi-generational warmth, genuine (not exaggerated stock-photo) expressions, diverse in age/gender/ethnicity reflecting Jaipur's real demographics. Never a single idealized "perfect family" archetype repeated across the site.
- **Doctors:** professional but approachable — appropriate attire (scrubs/coat, not sterile-surgical unless the context specifically calls for it), consistent crop and background treatment across the entire team grid. Consistency across the set matters more than any single photo's polish.
- **Home environments:** real, lived-in Indian homes — not generic Western stock-photo interiors, not sterile hospital rooms dressed up as a home. This is the detail that most separates an authentic site from a templated one.

## 8. Illustration Rules

- Illustration is used **only** for abstract, non-human content: process-step icons, empty states, the 404 page.
- **Never** illustrate a real person, patient, doctor, or care moment — photography only for anything a real human would recognize as depicting them. An illustrated "cartoon doctor" reads as low-budget and undermines medical trust.
- When illustration is used: flat vector line-art, brand-color fills, consistent stroke weight matching the icon system. Never a generic clip-art library look, never a "healthcare cliché" (syringes, red crosses, stethoscopes as decoration).

## 9. Icon Rules

- Lucide exclusively, everywhere, forever — never mixed with a second icon library, never a custom icon that doesn't match Lucide's 2px-stroke, rounded-cap geometry.
- Default size 20–24px. Monochrome at rest; brand-color fill only on hover/active states (the established `bg-secondary → bg-primary` chip pattern from the mega menu).
- Icon-only interactive elements always carry an `aria-label` — no exceptions.

## 10. Card Design Rules

- Radius: `radius-lg` to `radius-xl` as the default range — rounded enough to feel warm (Concept B), not so round it feels playful/childish. The Doctors, Statistics, and Trust Bar cards may sit at the tighter end of this range (`radius-lg`) to read slightly more structured, per Section 17.
- Padding: generous and consistent — `p-6` standard, `p-8` for trust-critical cards (Testimonials). Never crammed.
- Elevation at rest: `shadow-sm` or none. On hover: one elevation level up + `translateY(-4px)`, 300ms ease-out — identical behavior across every card type so the whole site feels like one system.
- Photo-forward cards (Doctor, Gallery, Blog) let the image dominate the card face; content-forward cards (FAQ, Feature) keep imagery minimal or icon-only. Never mix the two treatments within the same grid.

## 11. Button Rules

- **Exactly one primary button per section.** If a section seems to need two equally-weighted "primary" actions, one of them is actually secondary — restyle it as `outline` or a text link.
- Primary CTA label is always **"Book Appointment"** — never "Get Started," "Book Now," or any other variant. Secondary is always **"Call Now"** where a phone action is relevant. Consistency of label is itself a trust signal (a visitor should never have to wonder if a differently-worded button does something different).
- Minimum `size="lg"` for any conversion CTA (Hero, Final CTA, sticky bar) — the dense `default`/`sm` sizes are reserved for UI chrome (nav, filters), never for an action a visitor is being asked to commit to. Every CTA meets the 44×44px effective touch-target minimum on mobile regardless of visual size.
- Buttons never move on hover (only color/shadow change) — movement reads as unstable on a trust-critical site. This applies to buttons specifically; cards are allowed to lift (Section 10).

## 12. Animation Rules

- `prefers-reduced-motion` compliance is **non-negotiable** on every animation, no exceptions, on every future page — this is a system-wide contract already implemented for Header/Nav/Sheet/Accordion and must be extended identically to every new component.
- Duration/easing scale (from `DESIGN_SYSTEM.md` §2): 150ms micro, 200ms fast, 300ms base, 350–400ms slow/drawers, 500–600ms scroll-reveal. Never invent a new duration outside this scale.
- Animate with purpose, not decoration — an element animates because it's entering the viewport, responding to interaction, or communicating state change. Never animate purely for visual interest.
- Maximum of **one** simultaneously-animating decorative element per viewport (e.g., one counter running, not three animations competing for attention at once). Staggered grid reveals count as one coordinated animation, not many.

## 13. Photography Rules

Distinct from Section 7 (who/what to shoot) — this is how it's shot and treated:

- Natural light, warm color temperature — deliberately warm to balance the cool blue brand palette; this is where the brand's warmth is actually delivered.
- One consistent color grade/preset across **every** photo on the site. This single rule does more for "premium" perception than any individual photo's quality — mismatched photo treatment is the fastest tell of an unpolished site.
- Candid/documentary composition over stiff posed-stock framing. If a photo looks like it was licensed from a generic stock library, it doesn't belong on this site — no fake smiles, no exaggerated expressions, no "shaking hands over a clipboard" clichés.
- Consistent aspect ratios within any given grid (all Doctor Cards use the same crop, all Gallery tiles use the same ratio) — inconsistent cropping is the second-fastest tell of an unpolished site.

## 14. Section Background Rules

This resolves the open question from `CREATIVE_DIRECTION.md` concretely:

- **Default background is flat, near-white** (`--background`) — Concept C's discipline governs by default. No alternating hard-color bands as a rhythm device (that's pure Concept A and it's rejected as the default).
- **No curved/organic SVG section dividers.** Concept B explored these; they're rejected site-wide for cost and consistency reasons (flagged as a maintainability risk in `CREATIVE_DIRECTION.md`, and that risk is why they're out). Section transitions are communicated through **spacing rhythm alone.**
- Gradients and soft blurred-blob accents (Concept B's warmth) are permitted **only** in: the Hero, the Final CTA Banner, and promo panels (e.g. the mega menu's promo panel — already built this way). Everywhere else stays flat.
- A subtle background-tint shift (`background` → `card` or a very light `secondary` tint) is acceptable to separate a small number of sections for rhythm — used sparingly, never as the default pattern between every section.

## 15. Glassmorphism Usage

- Structural glass only, already established in code: `bg-background/95 backdrop-blur-md` for the sticky header and mobile CTA bar. This is the **only** sanctioned use case.
- Content glass (`bg-white/80 backdrop-blur-md`) is permitted only for small floating UI *over imagery or a gradient* — e.g., a stat chip overlaid on a hero photo — never on a primary content card or any text-heavy container, where it would reduce contrast and fight the accessibility bar.
- Never apply glass as a decorative flourish on a flat, non-imagery background — it has no function there.

## 16. Gradient Usage

- Always drawn from the primary family: `primary-light → primary` or `primary → primary-dark` (the tokens already defined in `globals.css`). No other color ever appears in a gradient on this site.
- Diagonal (`to-br`) for energetic hero/CTA treatments, or a soft radial glow for ambient hero lighting. No other gradient directions or shapes.
- Permitted **only** on the surfaces named in Section 14 (Hero, Final CTA, promo panels). Never on buttons (buttons stay flat `bg-primary`), never on body-text backgrounds, never on small UI chrome. A gradient that shows up more than a few times per page has stopped being an accent and started being wallpaper — don't let that happen.

## 17. Trust-building Visual Patterns

This is where the `CREATIVE_DIRECTION.md` hybrid gets assigned concretely, section by section, using the names locked in `HOMEPAGE_BLUEPRINT.md`:

**Concept A treatment (structured, data-forward, credential-visible)** — used *only* here:
- Trust Bar — logos, headline stat, minimal warmth
- Statistics Band — pure numbers, no photography
- Doctors & Caregivers — credentials and verification badges visible directly on the card face, not hidden behind a hover state
- Service Areas — map/list treated functionally, not decoratively

**Concept B treatment (warm, photo-forward, emotionally led)** — dominant everywhere else, especially:
- Hero, Who We Help, Testimonials, Final CTA Banner — these are the emotional core of the page and should never be restyled toward clinical structure

**Concept C discipline (restraint, whitespace, craft)** — governs the *execution quality* of every section regardless of which register it's in. This isn't a fourth zone — it's the baseline quality bar everywhere.

Additional patterns:
- Every testimonial carries a real name and relationship context ("Daughter of patient, Malviya Nagar") — never an anonymous quote.
- Every certification/partner logo links to or names the certifying body in its alt text — a logo with no verifiable identity is worse than no logo.
- "Verified" and "Available Now" indicators use the green status-dot pattern (Section 6) consistently everywhere they appear, never a different treatment per section.

## 18. Healthcare-specific UI Patterns

- **Availability status:** a small green dot + label ("Available Now" / "24/7") — never a large banner, never flashing/blinking.
- **Emergency/urgent messaging:** always primary blue, never `--destructive` red and never an alarming pulse animation — red and urgency-styling are reserved for actual form/system errors, not for marketing "call us now" messaging. This is a firm rule established in `DESIGN_SYSTEM.md` and it does not bend for the Urgent Care Strip.
- **Credential/certification display:** name + issuing body + (if applicable) a verification link — never a bare logo with no textual backup.
- **Booking/appointment flow:** every step shows current progress, never a black-box multi-step form with no sense of how much remains.
- **Sensitive content handling:** testimonials and case-adjacent content default to first-name + relationship ("Priya, Daughter of patient") unless full-name consent is explicitly on file — never publish a patient's specific medical details as marketing copy, even with a positive framing.
- **Legal/medical disclaimer:** present in the footer, plainly worded, never hidden behind a tiny link styled to be missed.

## 19. Responsive Visual Rules

- Every touch target is a minimum 44×44px effective area on mobile, regardless of visual size — flagged as an implementation requirement in `DESIGN_SYSTEM.md` and restated here as binding.
- Decorative gradients and blobs simplify or reduce in intensity on mobile — never a heavier visual load on the smaller, more constrained viewport.
- Maps become lists on mobile (already decided for Service Areas in `HOMEPAGE_BLUEPRINT.md`) — any component with an equivalent "hard to use small" problem follows the same rule.
- Primary CTA sits within natural thumb reach on mobile — bottom-anchored where the pattern already exists (the sticky Call/Book bar), never requiring an awkward top-of-screen reach for the most common action.
- Multi-column grids collapse to single-column or a horizontal swipeable rail on mobile — never a shrunk-down, hard-to-tap version of the desktop grid.

## 20. Things Never Allowed

- Never use stock photography with fake, exaggerated, or clearly-posed smiles.
- Never use bright or saturated red backgrounds — red is reserved for genuine error states only.
- Never overcrowd a section — respect the 4–6 (desktop) / 2–3 (mobile) content-element ceiling from Section 6.
- Never use more than two accent colors in one viewport (blue + one of pink/green — never all three at once).
- Never create more than one primary CTA per section (Section 11).
- Never illustrate a real person, patient, doctor, or care moment (Section 8).
- Never mix icon libraries or icon stroke weights (Section 9).
- Never use a curved/organic SVG section divider (Section 14).
- Never apply a gradient outside the Hero/Final CTA/promo-panel surfaces (Section 16).
- Never apply glassmorphism to a text-heavy or primary content card (Section 15).
- Never use inconsistent photo crops or color grading within the same grid (Section 13).
- Never publish a testimonial or case reference without at least first-name + relationship context (Section 17).
- Never style urgent/emergency messaging in red or with an alarming pulse (Section 18).
- Never ship a touch target smaller than 44×44px on mobile (Section 19).
- Never introduce a type size, color, radius, or shadow value outside the locked scales in `DESIGN_SYSTEM.md`.
- Never let an animation run without checking `prefers-reduced-motion` first.
- Never use a CTA label other than the locked set ("Book Appointment," "Call Now," and their documented section-specific variants).
- Never let pink cover more than a spotlight's worth of any single viewport (Section 6).
- Never place a testimonial, statistic, or trust element *after* the Final CTA Banner — trust-building content always precedes the ask it's supporting.

---

*This document removes visual ambiguity by design — if a future decision isn't covered here, that's a gap to raise and close via `DESIGN_SYSTEM.md`'s governance process, not a license to improvise. No code was generated for this milestone.*
