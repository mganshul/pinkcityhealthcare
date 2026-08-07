import "server-only";
import { randomUUID } from "node:crypto";
import { createSupabaseServerClient } from "@/lib/supabase/server";

const RESUME_BUCKET = "career-resumes";

const extensionByMimeType: Record<string, string> = {
  "application/pdf": "pdf",
  "application/msword": "doc",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
    "docx",
};

function resolveExtension(file: File): string {
  const fromName = file.name.split(".").pop();
  if (fromName && fromName.length <= 5 && fromName !== file.name) {
    return fromName.toLowerCase();
  }
  return extensionByMimeType[file.type] ?? "bin";
}

/**
 * Uploads a resume to the public `career-resumes` Storage bucket (see
 * supabase/migrations/..._career_applications_rls_and_storage.sql) and
 * returns its public URL. The filename is a random UUID, not the
 * applicant's original filename — the bucket is public, so an
 * unguessable path is what actually keeps a resume from being
 * enumerable, not the RLS policy. The file itself is never persisted in
 * Postgres — only this URL is, in career_applications.resume_url.
 */
export async function uploadResumeFile(file: File): Promise<string> {
  const supabase = createSupabaseServerClient();
  const path = `${randomUUID()}.${resolveExtension(file)}`;

  const { error } = await supabase.storage
    .from(RESUME_BUCKET)
    .upload(path, file, {
      contentType: file.type,
      upsert: false,
    });

  if (error) {
    throw error;
  }

  const { data } = supabase.storage.from(RESUME_BUCKET).getPublicUrl(path);
  return data.publicUrl;
}
