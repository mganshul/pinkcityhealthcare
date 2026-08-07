-- General contact-form submissions from the public site.

create table public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  phone text,
  subject text,
  message text not null,
  status public.contact_message_status not null default 'new',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint contact_messages_full_name_not_blank check (btrim(full_name) <> ''),
  constraint contact_messages_message_not_blank check (btrim(message) <> '')
);

comment on table public.contact_messages is
  'General inquiries submitted through the public contact form.';

create index contact_messages_status_idx on public.contact_messages (status);
create index contact_messages_created_at_idx on public.contact_messages (created_at desc);

create trigger contact_messages_set_updated_at
  before update on public.contact_messages
  for each row
  execute function public.set_updated_at();
