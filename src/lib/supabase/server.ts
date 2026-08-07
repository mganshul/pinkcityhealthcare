import "server-only";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/lib/supabase/types";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

/**
 * Server-only Supabase client using the public anon key. Every query still
 * goes through Row Level Security — use this from Server Components and
 * Server Actions for anything a public visitor is allowed to do directly
 * (submitting an appointment or contact message, reading published blog
 * posts/testimonials/gallery items).
 *
 * A fresh client is created per call rather than cached as a module
 * singleton, since this project has no per-request session/cookie state to
 * reuse yet — cheap to construct, and safest under serverless/edge runtimes.
 */
export function createSupabaseServerClient() {
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      "Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY. " +
        "Set both in your environment before using the Supabase server client."
    );
  }

  return createClient<Database>(supabaseUrl, supabaseAnonKey, {
    auth: { persistSession: false },
  });
}

/**
 * Server-only Supabase client using the service role key. This BYPASSES Row
 * Level Security entirely — never call it from anything that isn't a
 * verified-admin code path. Reserved for the future admin dashboard
 * (reading/managing appointments, contact messages, blog content, gallery,
 * testimonials, admins, settings). Nothing in this codebase calls it yet.
 *
 * The `server-only` import at the top of this file already prevents this
 * module from being bundled into client code; this function adds a second,
 * explicit guard so a missing env var fails loudly instead of silently
 * falling back to a client with no credentials.
 */
export function createSupabaseServiceRoleClient() {
  if (!supabaseUrl || !supabaseServiceRoleKey) {
    throw new Error(
      "Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY. " +
        "Set both in your environment before using the Supabase service role client."
    );
  }

  return createClient<Database>(supabaseUrl, supabaseServiceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
