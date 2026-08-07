"use client";

import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/lib/supabase/types";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

let browserClient: ReturnType<typeof createClient<Database>> | undefined;

/**
 * Browser-safe Supabase client — public anon key only, every request is
 * subject to Row Level Security. Lazily created so importing this module
 * never throws during a server-side build; the error only surfaces if a
 * Client Component actually calls this without the env vars configured.
 */
export function getSupabaseBrowserClient() {
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      "Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY. " +
        "Set both in your environment before using the Supabase browser client."
    );
  }

  browserClient ??= createClient<Database>(supabaseUrl, supabaseAnonKey);
  return browserClient;
}
