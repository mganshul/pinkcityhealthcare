-- Row Level Security for career_applications, and the Supabase Storage
-- bucket + policies backing resume uploads. Kept as its own file for the
-- same reason as 20260807120800_row_level_security.sql — the security
-- model should be reviewable independently of the schema.

-- ---------------------------------------------------------------------
-- career_applications — same shape as appointments/contact_messages:
-- public can submit, only admins can read/manage.
-- ---------------------------------------------------------------------
alter table public.career_applications enable row level security;

create policy "Anyone can submit a career application"
  on public.career_applications for insert
  to anon, authenticated
  with check (true);

create policy "Admins can view career applications"
  on public.career_applications for select
  to authenticated
  using (public.is_admin());

create policy "Admins can update career applications"
  on public.career_applications for update
  to authenticated
  using (public.is_admin())
  with check (public.is_admin());

create policy "Admins can delete career applications"
  on public.career_applications for delete
  to authenticated
  using (public.is_admin());

-- ---------------------------------------------------------------------
-- career-resumes Storage bucket — public so uploaded resumes are reachable
-- by their public URL (there's no admin dashboard yet to mint signed URLs
-- on demand). Uploaded paths are randomly generated (see
-- src/lib/supabase/storage.ts), not derived from applicant names, so a
-- resume's URL isn't guessable or enumerable in practice even though the
-- bucket itself is public. file_size_limit/allowed_mime_types enforce the
-- same 5MB/PDF-DOC-DOCX rules as the Zod schema, server-side, in Storage
-- itself — defense in depth beyond application-layer validation.
-- ---------------------------------------------------------------------
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'career-resumes',
  'career-resumes',
  true,
  5242880,
  array[
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  ]
)
on conflict (id) do nothing;

create policy "Anyone can upload a resume"
  on storage.objects for insert
  to anon, authenticated
  with check (bucket_id = 'career-resumes');

create policy "Admins can manage uploaded resumes"
  on storage.objects for all
  to authenticated
  using (bucket_id = 'career-resumes' and public.is_admin())
  with check (bucket_id = 'career-resumes' and public.is_admin());
