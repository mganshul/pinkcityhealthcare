# Backend Architecture

The backend foundation for Pink City Healthcare, built in Milestone 27. This is infrastructure only — no page, form, or frontend component reads from or writes to any of this yet. It exists so every future data-backed feature (appointment booking, contact form, an eventual CMS-backed blog/testimonials/gallery, and an admin dashboard) reuses the same client setup, validation, query, and Server Action patterns instead of each reinventing them.

Stack: Next.js 15 App Router, TypeScript, Supabase (Postgres + Auth), Hostinger (hosting/domain), GitHub (source control/CI), React Hook Form, Zod.

## Folder structure

```
src/
  lib/
    supabase/
      client.ts        Browser-safe Supabase client (anon key)
      server.ts         Server-only Supabase clients (anon key + service role key)
      types.ts           Hand-authored Database type, mirrors supabase/migrations/
      queries/
        appointments.ts  createAppointment()
        contacts.ts       createContactMessage()
        blogs.ts            getPublishedBlogPosts(), getBlogPostBySlug(), getBlogCategories()
    actions/
      appointment.ts    submitAppointmentAction() — Server Action
      contact.ts          submitContactAction() — Server Action
  schemas/
    appointment.ts      appointmentFormSchema (Zod)
    contact.ts            contactFormSchema (Zod)
supabase/
  migrations/             SQL schema + RLS, not yet applied to any project
.env.example              Required Supabase env vars, documented but unset
```

**Layering, and why:** `schemas/` (validate) → `lib/supabase/queries/` (talk to Postgres) → `lib/actions/` (glue: validate, call a query, shape a UI-friendly result). A page or form component will only ever import from `lib/actions/`; it never touches `queries/` or the Supabase client directly. This keeps validation and data access reusable outside of Server Actions too (e.g. a future admin dashboard route reading `queries/blogs.ts` directly, with no form involved).

## Database

Eight tables, all under the `public` schema. SQL lives in `supabase/migrations/` as plain, numbered `.sql` files — nothing has been executed against a real project. Apply them in order once a Supabase project exists:

```bash
npx supabase link --project-ref <project-ref>
npx supabase db push
```

| #   | Table              | Purpose                                                |
| --- | ------------------ | ------------------------------------------------------ |
| 1   | `appointments`     | Home-visit booking requests from the public site       |
| 2   | `contact_messages` | General contact-form inquiries                         |
| 3   | `blog_categories`  | Categories for a future database-backed blog           |
| 4   | `blog_posts`       | Future database-backed blog content                    |
| 5   | `testimonials`     | Patient/family testimonials for a future section       |
| 6   | `gallery`          | Photo gallery items for a future section               |
| 7   | `admins`           | Admin dashboard accounts, keyed to Supabase Auth users |
| 8   | `settings`         | Admin-only operational key/value toggles               |

Migration files, in apply order:

1. `20260807120000_extensions_and_helpers.sql` — `pgcrypto`, enum types (`appointment_status`, `contact_message_status`, `admin_role`), the shared `set_updated_at()` trigger function.
2. `20260807120100_create_appointments.sql`
3. `20260807120200_create_contact_messages.sql`
4. `20260807120300_create_blog_categories_and_posts.sql`
5. `20260807120400_create_testimonials.sql`
6. `20260807120500_create_gallery.sql`
7. `20260807120600_create_admins.sql`
8. `20260807120700_create_settings.sql`
9. `20260807120800_row_level_security.sql` — enables RLS and defines every policy, kept as its own file so the security model can be reviewed independently of the schema.

**Deliberate design decisions:**

- **Services are not a database table.** `src/data/services.ts` (Milestone 18) is already the single source of truth for the 14 services — duplicating that into a `services` table would create two places that can drift. `appointments.service_slug` and `testimonials.service_slug` are free-text columns instead, validated against the real service list at the Zod layer (`src/schemas/appointment.ts` builds a `Set` from `services.map(s => s.href)`).
- **Public business info is not a database table either.** `settings` is explicitly documented (in its own migration file and below) as admin-only _operational_ toggles — not a place for the business name, phone, address, or hours, which stay in `src/constants/site.ts` per Milestone 18. This keeps every public page free of a database dependency just to render contact info.
- **`admins.id` is a foreign key to `auth.users.id`**, not an independent login system. An admin account is provisioned in two steps — create the Supabase Auth user, then insert the matching `admins` row with the service role key — never through a public sign-up flow.
- **Every status column is a Postgres enum**, not a free-text string, so an invalid status is impossible at the database level regardless of what the application layer does.

## Server Actions

`src/lib/actions/appointment.ts` and `contact.ts` each export a Server Action shaped as `(prevState, formData) => Promise<State>` — the exact signature React's `useActionState` expects. A future form component wires up as:

```tsx
"use client";
import { useActionState } from "react";
import {
  submitAppointmentAction,
  initialAppointmentActionState,
} from "@/lib/actions/appointment";

const [state, formAction, isPending] = useActionState(
  submitAppointmentAction,
  initialAppointmentActionState
);
```

with zero changes required in `lib/actions/`. Each action:

1. Reads raw values off `FormData` (all values are strings/`File`; `readFormValue()` coerces safely).
2. Validates with the matching Zod schema via `safeParse`.
3. On failure, returns `{ status: "error", fieldErrors }` — one message per invalid field, keyed by field name, ready to render next to the relevant input.
4. On success, calls the matching `queries/` function to insert the row, then returns `{ status: "success", message }`.
5. Wraps the insert in `try/catch` — a Supabase/network failure returns a friendly `status: "error"` result instead of throwing past the action boundary.

## Validation

Zod schemas in `src/schemas/` are the single point where "is this submission acceptable" is decided — both `lib/actions/` (server-side, authoritative) and any future client-side form (via `@hookform/resolvers/zod` + React Hook Form, already in the dependency tree) will import the _same_ schema, so client-side and server-side validation can never disagree.

- `appointmentFormSchema` — name, Indian mobile number (regex), optional email, `serviceSlug` checked against the real service catalog, `preferredDate` (must be today or later, `YYYY-MM-DD`), optional `preferredTime`/`message`, required `address`/`city`.
- `contactFormSchema` — name, required email, optional phone, optional subject, message (10–2000 chars).

Both intentionally validate with hand-written regexes (`emailRegex`, `phoneRegex`) rather than Zod v4's newer `z.email()` top-level helper, to sidestep that API's ongoing churn in this Zod version and keep the schemas dependency-light and stable.

## Email flow (planned, not implemented)

`nodemailer` is already a project dependency but nothing calls it yet — sending email is explicitly out of scope for this milestone. The intended flow, for when it's built:

1. A Server Action (`submitAppointmentAction` / `submitContactAction`) successfully inserts the row.
2. Before returning the success state, it calls a new `sendAppointmentNotification()` / `sendContactNotification()` helper (would live in `src/lib/email/`) that sends a notification email to `siteConfig.contact.email` via `nodemailer`, using Hostinger's SMTP credentials.
3. Optionally, a second email confirms receipt to the visitor's submitted address.
4. Email failures must never fail the booking/message itself — the row is already safely in Postgres; email is a notification convenience layered on top, not a dependency of the write path.

`SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, and `SMTP_PASS` are already reserved in `.env.example` for this; nothing reads them yet, and an `EMAIL_FROM` var will be added alongside the actual implementation.

## Security

- **Two Supabase clients, two trust levels.** `createSupabaseServerClient()` (anon key) is what every Server Action and public-facing query uses — it is _subject to_ RLS, so the database itself is the enforcement point, not application code discipline. `createSupabaseServiceRoleClient()` (service role key) bypasses RLS entirely and is reserved for the future admin dashboard's trusted server-side code; nothing in this milestone calls it.
- **`server-only`** is imported at the top of `server.ts` and every `queries/*.ts` file. This is a build-time guard (from the `server-only` package) that throws a bundler error if any of this code is ever imported into a Client Component — the service role key, and even the anon-key server client, can never end up in a browser bundle by accident.
- **RLS is enabled on all 8 tables**, with no exceptions:
  - `appointments`, `contact_messages`: public can `INSERT` only. `SELECT`/`UPDATE`/`DELETE` require `is_admin()`.
  - `blog_categories`, `blog_posts`, `testimonials`, `gallery`: public can `SELECT` published rows only (`blog_categories` has no publish flag, so it's fully public-readable — it's just category names). Every write requires `is_admin()`.
  - `admins`: no `INSERT`/`DELETE` policy exists at all — provisioning or removing an admin is a service-role-only operation, never reachable through anon/authenticated RLS. `SELECT` is limited to your own row unless you're a `super_admin`. `UPDATE` requires `is_super_admin()` (including updating your own row) — deliberately stricter than "any admin can edit any admin," since self-service profile editing isn't being built yet.
  - `settings`: fully admin-only in every direction, no anon policy at all.
- **`is_admin()` / `is_super_admin()`** are `security definer` SQL functions with a pinned `search_path`, so they can check `public.admins` regardless of the calling role's own RLS on that table — without this, checking "is the caller an admin" would recursively depend on `admins`' own `SELECT` policy, which itself depends on the check.
- **Service slugs are validated at the application layer** (Zod, against `src/data/services.ts`), not with a database foreign key, since the service catalog lives in code. This is a conscious trade-off: it means a booking's `service_slug` isn't _database-guaranteed_ to reference a real service, only _application-guaranteed_.

## Deployment

- Supabase: create a project, run the migrations (`supabase db push`, see above), then copy Project Settings → API values into the three env vars in `.env.example`.
- Hostinger: set `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, and `SUPABASE_SERVICE_ROLE_KEY` in the hosting environment's env var / secrets panel — never commit `.env.local` (already covered by the repo's `.env*` gitignore rule).
- Recommended split: separate Supabase projects for local/staging vs. production, so migrations can be tested against staging before `db push` touches production data.
- A leaked `NEXT_PUBLIC_SUPABASE_ANON_KEY` is expected to be public (it ships in the browser bundle by design) — RLS is what keeps that safe. A leaked `SUPABASE_SERVICE_ROLE_KEY` is a full database compromise; it must only ever exist as a server-side env var.

## Future Admin Dashboard

Not built in this milestone. What this foundation sets up for it:

- `admins` + `is_admin()`/`is_super_admin()` already model "who's allowed to manage content" — the dashboard's authorization checks are just RLS doing its job, not new logic.
- Admin login will need `@supabase/ssr` (cookie-based session handling for the App Router) and Next.js middleware protecting an `/admin` route group — deliberately not installed in this milestone, since Task 1 only asked for `@supabase/supabase-js` and there's no login UI yet to use it.
- Once auth exists, admin screens can use either the authenticated user's own session (relying on the `is_admin()` RLS policies already in place) or `createSupabaseServiceRoleClient()` from trusted server code — both are already viable with today's schema.
- `queries/blogs.ts`'s read functions (`getPublishedBlogPosts`, `getBlogPostBySlug`, `getBlogCategories`) are ready to be joined by `create`/`update`/`delete` counterparts and reused by both the future public blog pages and the admin dashboard's content editor.
- `settings` is ready to back dashboard-controlled operational toggles without a redeploy, once there's a UI to write to it.
