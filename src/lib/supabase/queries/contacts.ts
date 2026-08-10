import "server-only";
import { createSupabaseServiceRoleClient } from "@/lib/supabase/server";
import type { ContactFormInput } from "@/schemas/contact";
import type { Tables, TablesInsert } from "@/lib/supabase/types";

export type ContactMessageRecord = Tables<"contact_messages">;

/**
 * Inserts a new contact message on behalf of a public visitor. Uses the
 * service-role client rather than the anon client: the `contact_messages`
 * INSERT policy (see supabase/migrations) already lets anon write this row,
 * but `.select()` turns the insert into `... RETURNING *`, and Postgres
 * checks RETURNING rows against the table's SELECT policy too — which here
 * is admin-only, so anon can never read the row back even though it just
 * wrote it. `input` is already Zod-validated by the caller (see
 * src/lib/actions/contact.ts), so this only bypasses that RETURNING/SELECT
 * technicality, not any real access control.
 */
export async function createContactMessage(
  input: ContactFormInput
): Promise<ContactMessageRecord> {
  const supabase = createSupabaseServiceRoleClient();

  const payload: TablesInsert<"contact_messages"> = {
    full_name: input.fullName,
    email: input.email || null,
    phone: input.phone,
    subject: input.subject,
    message: input.message,
    consent_to_contact: input.consentToContact,
  };

  const { data, error } = await supabase
    .from("contact_messages")
    .insert(payload)
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}
