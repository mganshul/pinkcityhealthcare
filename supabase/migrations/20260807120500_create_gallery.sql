-- Photo gallery (facility, care team, events) for a future database-backed
-- gallery section. Nothing in the frontend reads from this table yet.

create table public.gallery (
  id uuid primary key default gen_random_uuid(),
  title text,
  description text,
  image_url text not null,
  category text,
  display_order integer not null default 0,
  is_published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint gallery_image_url_not_blank check (btrim(image_url) <> '')
);

comment on table public.gallery is 'Photo gallery items for a future database-backed gallery section.';

create index gallery_published_idx on public.gallery (is_published, display_order);

create trigger gallery_set_updated_at
  before update on public.gallery
  for each row
  execute function public.set_updated_at();
