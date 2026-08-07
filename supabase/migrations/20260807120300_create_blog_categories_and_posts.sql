-- Future CMS-backed blog. The homepage "Health Tips" section and any blog
-- listing page currently read from the static src/data/blogs.ts catalog
-- (Milestone 16) — these tables exist so that content can move to the
-- database later without a schema change, not because anything reads from
-- them yet.

create table public.blog_categories (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  slug text not null unique,
  created_at timestamptz not null default now(),
  constraint blog_categories_name_not_blank check (btrim(name) <> ''),
  constraint blog_categories_slug_not_blank check (btrim(slug) <> '')
);

comment on table public.blog_categories is 'Blog post categories (e.g. Elder Care, Home Nursing).';

create table public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  excerpt text,
  content text,
  category_id uuid references public.blog_categories (id) on delete set null,
  author_name text not null default 'Pink City Healthcare Team',
  cover_image_url text,
  reading_time_minutes integer check (reading_time_minutes is null or reading_time_minutes > 0),
  is_featured boolean not null default false,
  is_published boolean not null default false,
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint blog_posts_title_not_blank check (btrim(title) <> ''),
  constraint blog_posts_slug_not_blank check (btrim(slug) <> '')
);

comment on table public.blog_posts is 'Health tips / article content for a future database-backed blog.';

create index blog_posts_category_id_idx on public.blog_posts (category_id);
create index blog_posts_published_idx on public.blog_posts (is_published, published_at desc);
create index blog_posts_slug_idx on public.blog_posts (slug);

create trigger blog_posts_set_updated_at
  before update on public.blog_posts
  for each row
  execute function public.set_updated_at();
