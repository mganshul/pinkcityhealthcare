-- Extensions, enum types, and shared helper functions used across the rest
-- of the migrations. Applied first so later files can depend on it.

-- gen_random_uuid() for primary keys.
create extension if not exists "pgcrypto";

-- Enum types shared by more than one table's status/role column.
create type public.appointment_status as enum ('pending', 'confirmed', 'completed', 'cancelled');
create type public.contact_message_status as enum ('new', 'in_progress', 'resolved');
create type public.admin_role as enum ('super_admin', 'editor');

-- Generic "bump updated_at on every UPDATE" trigger function, attached to
-- every table below that has an updated_at column.
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;
