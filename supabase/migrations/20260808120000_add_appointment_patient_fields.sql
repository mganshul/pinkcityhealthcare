-- The Appointment System (Milestone 28) form collects two fields the
-- original appointments table didn't anticipate: the patient's age (useful
-- triage context for the care coordinator) and explicit consent to be
-- contacted (the form's required checkbox — validated client- and
-- server-side at the Zod layer, and persisted here so there's a durable
-- record that consent was given for each booking).

alter table public.appointments
  add column patient_age smallint,
  add column consent_to_contact boolean not null default false;

alter table public.appointments
  add constraint appointments_patient_age_range
  check (patient_age is null or (patient_age between 0 and 120));

comment on column public.appointments.patient_age is
  'Optional — helps the care coordinator triage the request.';
comment on column public.appointments.consent_to_contact is
  'Must be true to submit via the public form; the Zod schema enforces this before the row is ever written.';
