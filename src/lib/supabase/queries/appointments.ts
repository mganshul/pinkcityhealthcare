import "server-only";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import type { AppointmentFormInput } from "@/schemas/appointment";
import type { Tables, TablesInsert } from "@/lib/supabase/types";

export type AppointmentRecord = Tables<"appointments">;

/**
 * Inserts a new appointment request on behalf of a public visitor. Runs
 * under the anon-key client, so the `appointments` INSERT RLS policy (see
 * supabase/migrations) is the actual security boundary — this function adds
 * no privileges of its own.
 */
export async function createAppointment(
  input: AppointmentFormInput
): Promise<AppointmentRecord> {
  const supabase = createSupabaseServerClient();

  const payload: TablesInsert<"appointments"> = {
    full_name: input.fullName,
    phone: input.phone,
    email: input.email || null,
    service_slug: input.serviceSlug,
    preferred_date: input.preferredDate,
    preferred_time: input.preferredTime,
    patient_age: input.patientAge ?? null,
    address: input.address,
    city: input.city,
    message: input.message || null,
    consent_to_contact: input.consentToContact,
  };

  const { data, error } = await supabase
    .from("appointments")
    .insert(payload)
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}
