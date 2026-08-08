import { Section } from "@/components/common/Section";
import { SectionHeader } from "@/components/common/SectionHeader";
import { BlogCard } from "@/components/sections/health-tips/BlogCard";
import type { BlogPost } from "@/data/blogs";

interface RelatedArticlesProps {
  posts: BlogPost[];
}

// Full-width 3-card grid, separate from ArticleSidebar's compact related
// list — this section lives outside the narrower article/sidebar column so
// the cards get proper grid width.
export function RelatedArticles({ posts }: RelatedArticlesProps) {
  if (posts.length === 0) return null;

  return (
    <Section id="related-articles" className="bg-secondary/40">
      <SectionHeader eyebrow="Keep Reading" title="Related Articles" />
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-8">
        {posts.map((post) => (
          <BlogCard key={post.id} {...post} />
        ))}
      </div>
    </Section>
  );
}
