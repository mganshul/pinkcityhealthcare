import "server-only";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import type { CareerApplicationFormInput } from "@/schemas/career-application";
import type { Tables, TablesInsert } from "@/lib/supabase/types";

export type CareerApplicationRecord = Tables<"career_applications">;

/**
 * Inserts a new career application on behalf of a public applicant. Runs
 * under the anon-key client — the `career_applications` INSERT RLS policy
 * (see supabase/migrations) is what actually authorizes this write. The
 * resume file itself must already be uploaded (see
 * src/lib/supabase/storage.ts) — this only persists its URL.
 */
export async function createCareerApplication(
  input: Omit<CareerApplicationFormInput, "resume">,
  resumeUrl: string
): Promise<CareerApplicationRecord> {
  const supabase = createSupabaseServerClient();

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
