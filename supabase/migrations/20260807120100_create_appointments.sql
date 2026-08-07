-- Appointment / home-visit booking requests submitted from the public site.

create table public.appointments (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  phone text not null,
  email text,
  -- Services are catalogued in code (src/data/services.ts), not the
  -- database, so this is intentionally free text rather than a foreign
  -- key — validated against the real service list at the Zod layer
  -- (src/schemas/appointment.ts) instead.
  service_slug text not null,
  preferred_date date not null,
  preferred_time text,
  address text not null,
  city text not null default 'Jaipur',
  message text,
  status public.appointment_status not null default 'pending',
  -- Where the lead came from (website, phone, whatsapp, referral...) —
  -- for future reporting, defaults to the only source that exists today.
  source text not null default 'website',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint appointments_full_name_not_blank check (btrim(full_name) <> ''),
  constraint appointments_address_not_blank check (btrim(address) <> '')
);

comment on table public.appointments is
  'Home-visit / service booking requests submitted by public visitors.';
comment on column public.appointments.service_slug is
  'Matches a service href slug from src/data/services.ts, e.g. "home-nursing".';
comment on column public.appointments.source is
  'Lead origin for reporting: website, phone, whatsapp, referral, etc.';

create index appointments_status_idx on public.appointments (status);
create index appointments_created_at_idx on public.appointments (created_at desc);
create index appointments_service_slug_idx on public.appointments (service_slug);

create trigger appointments_set_updated_at
  before update on public.appointments
  for each row
  execute function public.set_updated_at();
