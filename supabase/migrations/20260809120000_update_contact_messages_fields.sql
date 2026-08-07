-- The Contact System (Milestone 29) form changes the contact_messages
-- field requirements from the original schema: phone becomes required
-- (a coordinator always needs a number to call back), email becomes
-- optional (a visitor may prefer to only leave a phone number), subject
-- becomes required, and a consent checkbox — mirroring the appointment
-- form's consent_to_contact column — is added and persisted.

alter table public.contact_messages
  alter column email drop not null,
  alter column phone set not null,
  alter column subject set not null;

alter table public.contact_messages
  add column consent_to_contact boolean not null default false;

alter table public.contact_messages
  add constraint contact_messages_phone_not_blank check (btrim(phone) <> ''),
  add constraint contact_messages_subject_not_blank check (btrim(subject) <> '');

comment on column public.contact_messages.consent_to_contact is
  'Must be true to submit via the public form; the Zod schema enforces this before the row is ever written.';
