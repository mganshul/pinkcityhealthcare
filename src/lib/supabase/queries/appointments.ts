import "server-only";
import { createSupabaseServiceRoleClient } from "@/lib/supabase/server";
import type { AppointmentFormInput } from "@/schemas/appointment";
import type { Tables, TablesInsert } from "@/lib/supabase/types";

export type AppointmentRecord = Tables<"appointments">;

/**
 * Inserts a new appointment request on behalf of a public visitor. Uses the
 * service-role client rather than the anon client: the `appointments`
 * INSERT policy (see supabase/migrations) already lets anon write this row,
 * but `.select()` turns the insert into `... RETURNING *`, and Postgres
 * checks RETURNING rows against the table's SELECT policy too — which here
 * is admin-only, so anon can never read the row back even though it just
 * wrote it. `input` is already Zod-validated by the caller (see
 * src/lib/actions/appointment.ts), so this only bypasses that
 * RETURNING/SELECT technicality, not any real access control.
 */
export async function createAppointment(
  input: AppointmentFormInput
): Promise<AppointmentRecord> {
  const supabase = createSupabaseServiceRoleClient();

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
