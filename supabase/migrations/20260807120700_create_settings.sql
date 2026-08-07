-- Internal operational key/value settings for the future admin dashboard
-- (e.g. a "pause new bookings" toggle, an internal ops note). This is NOT
-- where public-facing business info lives — name, phone, address, hours,
-- tagline, social links, and the service catalog all stay in
-- src/constants/site.ts and src/data/services.ts as the established single
-- source of truth (Milestone 18). Keeping that content in code (not this
-- table) means public pages never take on a database dependency just to
-- render. This table is for admin-only operational toggles.

create table public.settings (
  key text primary key,
  value jsonb not null,
  description text,
  updated_at timestamptz not null default now(),
  constraint settings_key_not_blank check (btrim(key) <> '')
);

comment on table public.settings is
  'Admin-only operational key/value settings. Public business info stays in src/constants/site.ts, not here.';

create trigger settings_set_updated_at
  before update on public.settings
  for each row
  execute function public.set_updated_at();
