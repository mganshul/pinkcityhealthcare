-- Patient/family testimonials for a future database-backed testimonials
-- section. Nothing in the frontend reads from this table yet.

create table public.testimonials (
  id uuid primary key default gen_random_uuid(),
  author_name text not null,
  -- e.g. "Daughter of ICU care patient" — how the author relates to the
  -- patient, shown alongside the quote instead of a job title.
  author_relation text,
  -- Optional link to a service href slug from src/data/services.ts, same
  -- free-text convention as appointments.service_slug.
  service_slug text,
  rating smallint check (rating is null or (rating between 1 and 5)),
  content text not null,
  avatar_url text,
  is_published boolean not null default false,
  display_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint testimonials_author_name_not_blank check (btrim(author_name) <> ''),
  constraint testimonials_content_not_blank check (btrim(content) <> '')
);

comment on table public.testimonials is 'Patient/family testimonials for a future database-backed testimonials section.';

create index testimonials_published_idx on public.testimonials (is_published, display_order);

create trigger testimonials_set_updated_at
  before update on public.testimonials
  for each row
  execute function public.set_updated_at();
