"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { FilterPills } from "@/components/common/FilterPills";
import { BlogCard } from "@/components/sections/health-tips/BlogCard";
import { blogCategoryFilters, type BlogCategory, type BlogPost } from "@/data/blogs";

interface BlogListingSectionProps {
  posts: BlogPost[];
}

function matchesQuery(post: BlogPost, query: string) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return true;
  return (
    post.title.toLowerCase().includes(normalized) ||
    post.category.toLowerCase().includes(normalized) ||
    post.tags.some((tag) => tag.toLowerCase().includes(normalized))
  );
}

// Client-side search + category filter over the already-loaded post list —
// the page itself stays statically generated; only this island is
// interactive, matching the pattern GallerySection/TestimonialsGrid use.
export function BlogListingSection({ posts }: BlogListingSectionProps) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<BlogCategory | "all">("all");

  const filteredPosts = useMemo(() => {
    return posts.filter(
      (post) =>
        (activeCategory === "all" || post.category === activeCategory) &&
        matchesQuery(post, query),
    );
  }, [posts, activeCategory, query]);

  return (
    <div>
      <div className="mx-auto max-w-md">
        <label htmlFor="blog-search" className="sr-only">
          Search articles by title, category, or tag
        </label>
        <div className="relative">
          <Search
            className="text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2"
            aria-hidden="true"
          />
          <Input
            id="blog-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search articles by title, category, or tag..."
            className="h-11 rounded-full pl-9"
          />
        </div>
      </div>

      <FilterPills
        options={blogCategoryFilters}
        value={activeCategory}
        onChange={setActiveCategory}
        ariaLabel="Filter articles by category"
        className="mt-8"
      />

      {filteredPosts.length > 0 ? (
        <div
          aria-live="polite"
          className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-8"
        >
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      ) : (
        <p aria-live="polite" className="text-muted-foreground mt-10 text-center">
          No articles match your search — try a different keyword or category.
        </p>
      )}
    </div>
  );
}
