-- Row Level Security for every table. Two helper functions do the actual
-- "is this caller an admin" checks so policies stay short and consistent.
--
-- security definer + a pinned search_path lets these functions read
-- public.admins regardless of the calling role's own RLS on that table
-- (otherwise checking "is the caller an admin" would recursively depend on
-- admins' own SELECT policy, which itself depends on this function).

create or replace function public.is_admin()
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select exists (
    select 1 from public.admins where id = auth.uid()
  );
$$;

create or replace function public.is_super_admin()
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select exists (
    select 1 from public.admins where id = auth.uid() and role = 'super_admin'
  );
$$;

-- ---------------------------------------------------------------------
-- appointments — public can submit, only admins can read/manage.
-- ---------------------------------------------------------------------
alter table public.appointments enable row level security;

create policy "Anyone can submit an appointment"
  on public.appointments for insert
  to anon, authenticated
  with check (true);

create policy "Admins can view appointments"
  on public.appointments for select
  to authenticated
  using (public.is_admin());

create policy "Admins can update appointments"
  on public.appointments for update
  to authenticated
  using (public.is_admin())
  with check (public.is_admin());

create policy "Admins can delete appointments"
  on public.appointments for delete
  to authenticated
  using (public.is_admin());

-- ---------------------------------------------------------------------
-- contact_messages — same shape as appointments.
-- ---------------------------------------------------------------------
alter table public.contact_messages enable row level security;

create policy "Anyone can submit a contact message"
  on public.contact_messages for insert
  to anon, authenticated
  with check (true);

create policy "Admins can view contact messages"
  on public.contact_messages for select
  to authenticated
  using (public.is_admin());

create policy "Admins can update contact messages"
  on public.contact_messages for update
  to authenticated
  using (public.is_admin())
  with check (public.is_admin());

create policy "Admins can delete contact messages"
  on public.contact_messages for delete
  to authenticated
  using (public.is_admin());

-- ---------------------------------------------------------------------
-- blog_categories — public content, readable by everyone.
-- ---------------------------------------------------------------------
alter table public.blog_categories enable row level security;

create policy "Anyone can view blog categories"
  on public.blog_categories for select
  to anon, authenticated
  using (true);

create policy "Admins can manage blog categories"
  on public.blog_categories for all
  to authenticated
  using (public.is_admin())
  with check (public.is_admin());

-- ---------------------------------------------------------------------
-- blog_posts — public can read published posts, admins can read/manage all.
-- ---------------------------------------------------------------------
alter table public.blog_posts enable row level security;

create policy "Anyone can view published blog posts"
  on public.blog_posts for select
  to anon, authenticated
  using (is_published = true or public.is_admin());

create policy "Admins can manage blog posts"
  on public.blog_posts for all
  to authenticated
  using (public.is_admin())
  with check (public.is_admin());

-- ---------------------------------------------------------------------
-- testimonials — same read/manage shape as blog_posts.
-- ---------------------------------------------------------------------
alter table public.testimonials enable row level security;

create policy "Anyone can view published testimonials"
  on public.testimonials for select
  to anon, authenticated
  using (is_published = true or public.is_admin());

create policy "Admins can manage testimonials"
  on public.testimonials for all
  to authenticated
  using (public.is_admin())
  with check (public.is_admin());

-- ---------------------------------------------------------------------
-- gallery — same read/manage shape as blog_posts.
-- ---------------------------------------------------------------------
alter table public.gallery enable row level security;

create policy "Anyone can view published gallery items"
  on public.gallery for select
  to anon, authenticated
  using (is_published = true or public.is_admin());

create policy "Admins can manage gallery items"
  on public.gallery for all
  to authenticated
  using (public.is_admin())
  with check (public.is_admin());

-- ---------------------------------------------------------------------
-- admins — no public access at all. No INSERT/DELETE policy is defined
-- here on purpose: provisioning or removing an admin account is a
-- service-role-only operation (see supabase/migrations/..._create_admins,
-- and "Security" in BACKEND_ARCHITECTURE.md), never something reachable
-- through the anon/authenticated RLS surface.
-- ---------------------------------------------------------------------
alter table public.admins enable row level security;

create policy "Admins can view their own row or all rows as super admin"
  on public.admins for select
  to authenticated
  using (id = auth.uid() or public.is_super_admin());

create policy "Only super admins can update admin rows"
  on public.admins for update
  to authenticated
  using (public.is_super_admin())
  with check (public.is_super_admin());

-- ---------------------------------------------------------------------
-- settings — admin-only in every direction. No anon policy exists.
-- ---------------------------------------------------------------------
alter table public.settings enable row level security;

create policy "Admins can view settings"
  on public.settings for select
  to authenticated
  using (public.is_admin());

create policy "Admins can manage settings"
  on public.settings for all
  to authenticated
  using (public.is_admin())
  with check (public.is_admin());
