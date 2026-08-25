# SEO Implementation — PinkCity Healthcare (Jaipur)

Date: 2026-08-25
Scope: Basic + standard local SEO for Jaipur, Rajasthan, India.

## 1. Audit findings

The codebase already had a mature, well-architected SEO foundation in place before this pass — most of the checklist in the brief was already implemented correctly:

- `src/lib/seo.ts` — a shared `buildPageMetadata()` helper used by every page for title/description/canonical/OG/Twitter, keeping metadata consistent.
- `src/app/sitemap.ts` and `src/app/robots.ts` — dynamic, generated from `siteConfig.url` and the real route list (services + blog posts), pointing at the production domain.
- `src/app/layout.tsx` — sitewide `MedicalBusiness` JSON-LD with real NAP (name/address/phone) data from `src/constants/site.ts`.
- `FAQAccordion` — renders visible FAQ content and emits matching `FAQPage` JSON-LD (used on the homepage, every service page, `/contact`, `/service-areas`).
- `Breadcrumbs` — renders visible breadcrumbs and emits matching `BreadcrumbList` JSON-LD on every inner page.
- `blog/[slug]/page.tsx` — `BlogPosting` JSON-LD per article.
- `careers/page.tsx` — `JobPosting` JSON-LD per active listing.
- Every page has exactly one `<h1>` (via the shared `PageHero`/`Hero` components) and a proper `<h2>` hierarchy (via `SectionHeader`).
- All 14 service pages already have unique, Jaipur-specific SEO titles/descriptions/keywords (`src/data/service-pages/*.ts`), FAQs, and related-service internal links.
- Image alt text throughout (`gallery.ts`, `team.ts`, blog posts) is descriptive and not keyword-stuffed.
- Footer already links every service page + all main nav pages with descriptive anchor text — solid internal linking.
- `/service-areas` covers Jaipur neighborhoods as cards on one page (no doorway pages).
- `not-found.tsx` correctly sets `robots: { index: false, follow: false }`.

**Gaps found and fixed in this pass** (see §2):

1. The homepage `<title>` did not mention "Jaipur" or "home healthcare" — it used a generic tagline instead of the primary local keyword.
2. No Open Graph / Twitter share image was set anywhere, so links shared on WhatsApp/Facebook/Twitter showed no preview image.
3. Service pages had no `Service` structured data (only inherited the sitewide `MedicalBusiness` schema).

**Gaps found and intentionally left alone** (not code issues — see §10 for what to do about them):

- No Google Search Console verification code exists yet (nothing to preserve, nothing fabricated).
- No Google Business Profile linkage (external, not a code change).
- `sitemap.ts` stamps `lastModified` as "now" for static pages on every build rather than real per-page change dates — harmless (Google doesn't penalize this) but not maximally accurate.

## 2. Changes made

| File | Change | Why |
|---|---|---|
| `src/lib/seo.ts` | `defaultTitle` changed from `"PinkCity Healthcare \| Compassionate Healthcare at Home"` to `"PinkCity Healthcare \| Home Healthcare Services in Jaipur"` | This is the homepage `<title>` — the single highest-value on-page SEO signal, and it wasn't targeting the primary keyword. The old tagline text isn't rendered anywhere else in the UI, so this only affects the `<title>`/OG title. |
| `src/lib/seo.ts` | Added `defaultOgImage` (real photo at `/images/about/about-final.png`, 1536×1024) and wired it into `baseMetadata` and `buildPageMetadata()` as the default `openGraph.images` / `twitter.images` | Previously no page set a share image, so links shared on social/WhatsApp/messaging apps showed a blank preview. `buildPageMetadata()` accepts an optional `image` override per page if a more specific photo is ever added. |
| `src/components/templates/ServicePageTemplate.tsx` | Added a `Service` JSON-LD block (serviceType, name, description, url, provider, areaServed: Jaipur) — pulled entirely from existing page data, nothing fabricated | Applies automatically to all 14 service pages from one shared component, consistent with how `FAQPage`/`BreadcrumbList` schema is already colocated with the components that render that visible content. No prices, ratings, or credentials included. |

No other files were changed. Design, layout, navigation, forms, Supabase config, and business content are untouched.

## 3. Pages optimized

All public pages already had unique metadata; the homepage title and the sitewide OG image fix apply to every page via the shared `baseMetadata`/`buildPageMetadata` helpers:

- `/` (homepage) — title fixed directly
- `/about`, `/contact`, `/services`, `/service-areas`, `/gallery`, `/testimonials`, `/our-team`, `/careers`, `/appointment`, `/blog`, `/blog/[slug]` (11 posts), all 14 `/services/[slug]` pages, legal pages — inherit the new default OG image; service pages additionally gained `Service` schema.

## 4. Keywords targeted

Primary (sitewide): Home Healthcare Jaipur, Home Nursing Jaipur, Elder Care Jaipur, ICU Care at Home Jaipur, Physiotherapy at Home Jaipur.

Already mapped 1:1 to existing pages (`src/data/service-pages/*.ts`, confirmed already in place):

| Page | Primary keyword |
|---|---|
| Home Nursing | Home Nursing Jaipur / Home Nurse Jaipur |
| Elder Care | Elder Care Jaipur / Senior Care at Home Jaipur |
| ICU Care | ICU Care at Home Jaipur / Critical Care at Home Jaipur |
| Physiotherapy | Physiotherapy at Home Jaipur |
| Medical Equipment | Medical Equipment Rental Jaipur |
| Patient Attendant | Patient Attendant Jaipur / Caretaker Jaipur |
| Post-Surgery Care, Mother & Baby Care, Bedridden Patient Care, Dementia Care, Palliative Care, Doctor Visit, Lab Test, Injection at Home | each has its own Jaipur-qualified title/description/keyword set already |

No keyword stuffing was introduced; no new pages were created for near-duplicate keywords.

## 5. Schema implemented (JSON-LD)

Already present (unchanged): `MedicalBusiness` (layout, sitewide), `FAQPage` (homepage + service pages + contact + service-areas), `BreadcrumbList` (every inner page), `BlogPosting` (every blog post), `JobPosting` (every active career listing).

Added in this pass: `Service` (every service page — serviceType, name, description, provider, areaServed: Jaipur, url).

No fake reviews, ratings, prices, opening-hours claims, employee counts, or credentials were added anywhere, per the brief's constraints.

## 6. Sitemap status

`src/app/sitemap.ts` was already correct: production domain (`https://pinkcityhealthcare.com`), includes every static page, all 14 service pages, and all blog posts, with sensible `priority`/`changeFrequency`. No admin/API/private routes exist to exclude. No change made.

## 7. Robots.txt status

`src/app/robots.ts` was already correct: allows all crawlers, points to the production sitemap URL, and doesn't block CSS/JS/images. No change made.

## 8. Canonical status

`buildPageMetadata()` already builds a correct absolute canonical (`https://pinkcityhealthcare.com/...`) for every page from `siteConfig.url`, with no trailing-slash inconsistency (Next.js default, unchanged) and no query-string variants. No change made.

## 9. Internal linking improvements

No structural changes were needed — linking was already solid: footer links to all services and main pages, service pages cross-link related services, blog posts link to popular services in the sidebar plus a booking CTA, and every inner page carries breadcrumbs back to its parent section. The `Service` schema addition reinforces the same service ↔ business relationship machine-readably.

## 10. Remaining recommendations (manual action required)

1. **Google Search Console** — see §11 below.
2. **Google Business Profile** — see §12 below.
3. **www vs non-www / http vs https** — confirm at the hosting/DNS level that only `https://pinkcityhealthcare.com` resolves without redirect loops, and that any `www.` variant 301-redirects to the canonical non-www domain (this is infrastructure, not app code).
4. **OG image** — `about-final.png` is a reasonable real photo for link previews, but consider commissioning one properly cropped to 1200×630 for a cleaner social-card crop.
5. **Sitemap `lastModified` accuracy** — currently stamps "now" for static pages on every deploy; could be swapped for real per-page last-edited dates later if precision matters (low priority).
6. **Team/staff names** — several `src/data/team.ts` entries are marked as placeholder photos with role-only titles pending real verified names — update when available (also improves E-E-A-T signals for a healthcare site).

## 11. Google Search Console steps

1. Sign in at search.google.com/search-console with the business Google account.
2. Add property → "URL prefix" → `https://pinkcityhealthcare.com`.
3. Verify ownership — the HTML tag method is easiest here: GSC will give you a `<meta name="google-site-verification" content="...">` tag or a `google...html` file. Send that value and I (or your developer) can add it as `verification: { google: "..." }` in the `metadata` export of `src/app/layout.tsx` (Next.js supports this natively) — no fake/placeholder code was added in this pass since no real code exists yet.
4. Submit the sitemap: `https://pinkcityhealthcare.com/sitemap.xml`.
5. Use "URL Inspection" on a few key pages (`/`, `/services/home-nursing`, `/contact`) to request indexing.
6. Check the "Enhancements" reports after a few days for FAQ / Breadcrumb / JobPosting rich-result validity.

## 12. Google Business Profile recommendations

1. Claim/verify a Google Business Profile for PinkCity Healthcare at the address in `src/constants/site.ts` (317, Sanjay Nagar D, Jhotwara, Jaipur, Rajasthan 302012).
2. Category: Home health care service (primary), with relevant secondary categories (Nursing agency, Elder care, Physical therapist, etc. as applicable).
3. Use the same phone number and business name exactly as they appear on the website (NAP consistency).
4. Add real photos (team, office, equipment — reuse existing site photography where suitable).
5. Encourage genuine patient/family reviews through normal channels — do not purchase or fabricate reviews.
6. Keep hours accurate — the site states 24/7 availability; mirror that on the profile only if genuinely accurate.
7. Post regular updates (new services, blog articles) via GBP posts to keep the profile active.

## 13. Recommended next 30-day SEO plan

- **Week 1**: Complete Google Search Console verification and sitemap submission (§11). Set up Google Business Profile if not already live (§12).
- **Week 2**: Monitor GSC Coverage report for indexing issues; fix any crawl errors reported. Request indexing for all 14 service pages individually if not picked up automatically.
- **Week 3**: Publish 1–2 new blog posts from the topic list below, each linking back to the relevant service page.
- **Week 4**: Review GSC Performance report for actual query data — use it to refine which keywords each service page's title/description should lean into (the current keyword map is an informed starting point, not final).
- **Ongoing**: Collect genuine Google reviews via GBP; keep NAP data in `src/constants/site.ts` as the single source of truth if anything changes (phone, address, hours).

### Suggested future blog topics (not yet published — content recommendations only, per the brief's instruction not to auto-publish AI content)

Existing 11 posts already cover: elderly-parent care signs, home nursing & recovery, choosing a caregiver, ICU care at home, physiotherapy exercises, summer wellness for seniors, medication management, post-surgery recovery, bedridden patient care, palliative care, and choosing medical equipment.

Topics not yet covered, worth considering next (medically responsible, factual, no unsupported claims):

1. How to Choose a Home Nursing Service in Jaipur — What to Ask Before You Book
2. Dementia Care at Home: A Practical Guide for Jaipur Families
3. Mother & Baby Postnatal Care at Home: What New Parents Should Expect
4. Doctor Visits at Home vs. Hospital OPD: When Each Makes Sense
5. Preparing Your Home for a Patient Attendant or Live-In Caregiver
6. Lab Tests at Home in Jaipur: What Can and Can't Be Done Without a Lab Visit

## 14. Validation performed

- `npm run typecheck` — passed, no errors.
- `npm run lint` — passed, no errors.
- `npm run build` — succeeded; all 46 routes generated (static + SSG), including `/robots.txt`, `/sitemap.xml`, `/icon.png`, all 14 service pages, all 11 blog posts.
- Production server smoke test (`next start`) confirmed:
  - Homepage `<title>` renders as `PinkCity Healthcare | Home Healthcare Services in Jaipur`.
  - `og:image` / `twitter:image` render with correct absolute production URLs.
  - `/services/home-nursing` includes the new `Service` JSON-LD with correct data.
  - `/services/elder-care` canonical and title render correctly.
  - `/sitemap.xml` and `/robots.txt` both use the production domain, no localhost URLs.
