import "server-only";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import type { Tables } from "@/lib/supabase/types";

export type BlogPostRecord = Tables<"blog_posts">;
export type BlogCategoryRecord = Tables<"blog_categories">;

// These read from the `blog_posts` / `blog_categories` tables introduced in
// this milestone for a future CMS-backed blog. The homepage "Health Tips"
// section and any blog listing page today still read from the static
// src/data/blogs.ts catalog (per Milestone 16) — nothing calls these yet.

/**
 * Published posts only, newest first — the `blog_posts` SELECT RLS policy
 * already restricts anon reads to `is_published = true`, this query just
 * mirrors that intent explicitly.
 */
export async function getPublishedBlogPosts(
  limit?: number
): Promise<BlogPostRecord[]> {
  const supabase = createSupabaseServerClient();

  let query = supabase
    .from("blog_posts")
    .select("*")
    .eq("is_published", true)
    .order("published_at", { ascending: false });

  if (limit) {
    query = query.limit(limit);
  }

  const { data, error } = await query;

  if (error) {
    throw error;
  }

  return data ?? [];
}

export async function getBlogPostBySlug(
  slug: string
): Promise<BlogPostRecord | null> {
  const supabase = createSupabaseServerClient();

  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .eq("is_published", true)
    .maybeSingle();

  if (error) {
    throw error;
  }

  return data;
}

export async function getBlogCategories(): Promise<BlogCategoryRecord[]> {
  const supabase = createSupabaseServerClient();

  const { data, error } = await supabase
    .from("blog_categories")
    .select("*")
    .order("name", { ascending: true });

  if (error) {
    throw error;
  }

  return data ?? [];
}
