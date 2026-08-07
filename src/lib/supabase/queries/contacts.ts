import "server-only";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import type { ContactFormInput } from "@/schemas/contact";
import type { Tables, TablesInsert } from "@/lib/supabase/types";

export type ContactMessageRecord = Tables<"contact_messages">;

/**
 * Inserts a new contact message on behalf of a public visitor. Runs under
 * the anon-key client — the `contact_messages` INSERT RLS policy (see
 * supabase/migrations) is what actually authorizes this write.
 */
export async function createContactMessage(
  input: ContactFormInput
): Promise<ContactMessageRecord> {
  const supabase = createSupabaseServerClient();

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
