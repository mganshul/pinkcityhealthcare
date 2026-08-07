-- Admin accounts for the future admin dashboard. Deliberately keyed to
-- Supabase Auth (auth.users) rather than having its own password/login
-- logic — an admin is created by (1) creating a Supabase Auth user, then
-- (2) inserting a matching row here with that user's id. Step 2 can only be
-- done with the service role key (see RLS policies migration) — there is no
-- self-signup path, by design.

create table public.admins (
  id uuid primary key references auth.users (id) on delete cascade,
  full_name text not null,
  email text not null unique,
  role public.admin_role not null default 'editor',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint admins_full_name_not_blank check (btrim(full_name) <> '')
);

comment on table public.admins is
  'Admin dashboard accounts. id must match an existing auth.users.id; rows are provisioned with the service role key, not through public RLS.';

create trigger admins_set_updated_at
  before update on public.admins
  for each row
  execute function public.set_updated_at();
