-- Job applications submitted through the public Careers page (Milestone 33).

create type public.career_application_status as enum (
  'new',
  'reviewed',
  'shortlisted',
  'rejected',
  'hired'
);

create table public.career_applications (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  phone text not null,
  email text not null,
  position text not null,
  years_of_experience smallint not null,
  current_organization text,
  highest_qualification text not null,
  preferred_shift text,
  city text not null,
  state text not null,
  message text,
  resume_url text not null,
  status public.career_application_status not null default 'new',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint career_applications_full_name_not_blank check (btrim(full_name) <> ''),
  constraint career_applications_position_not_blank check (btrim(position) <> ''),
  constraint career_applications_resume_url_not_blank check (btrim(resume_url) <> ''),
  constraint career_applications_years_of_experience_range
    check (years_of_experience between 0 and 60)
);

comment on table public.career_applications is
  'Job applications submitted through the public Careers page. resume_url points at a file in the career-resumes Storage bucket — the file itself is never stored in Postgres.';

create index career_applications_status_idx on public.career_applications (status);
create index career_applications_created_at_idx on public.career_applications (created_at desc);

create trigger career_applications_set_updated_at
  before update on public.career_applications
  for each row
  execute function public.set_updated_at();
