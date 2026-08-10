import "server-only";
import { createSupabaseServiceRoleClient } from "@/lib/supabase/server";
import type { CareerApplicationFormInput } from "@/schemas/career-application";
import type { Tables, TablesInsert } from "@/lib/supabase/types";

export type CareerApplicationRecord = Tables<"career_applications">;

/**
 * Inserts a new career application on behalf of a public applicant. Uses
 * the service-role client rather than the anon client: the
 * `career_applications` INSERT policy (see supabase/migrations) already
 * lets anon write this row, but `.select()` turns the insert into
 * `... RETURNING *`, and Postgres checks RETURNING rows against the table's
 * SELECT policy too — which here is admin-only, so anon can never read the
 * row back even though it just wrote it. `input` is already Zod-validated
 * by the caller (see src/lib/actions/career-application.ts), so this only
 * bypasses that RETURNING/SELECT technicality, not any real access control.
 * The resume file itself must already be uploaded (see
 * src/lib/supabase/storage.ts) — this only persists its URL.
 */
export async function createCareerApplication(
  input: Omit<CareerApplicationFormInput, "resume">,
  resumeUrl: string
): Promise<CareerApplicationRecord> {
  const supabase = createSupabaseServiceRoleClient();

  const payload: TablesInsert<"career_applications"> = {
    full_name: input.fullName,
    phone: input.phone,
    email: input.email,
    position: input.position,
    years_of_experience: input.yearsOfExperience,
    current_organization: input.currentOrganization || null,
    highest_qualification: input.highestQualification,
    preferred_shift: input.preferredShift || null,
    city: input.city,
    state: input.state,
    message: input.message || null,
    resume_url: resumeUrl,
  };

  const { data, error } = await supabase
    .from("career_applications")
    .insert(payload)
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}
