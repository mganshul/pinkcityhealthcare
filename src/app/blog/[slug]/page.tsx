import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Calendar, Clock, ImageIcon } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/common/Section";
import { CTASection } from "@/components/patterns/CTASection";
import { ArticleContent } from "@/components/blog/ArticleContent";
import { ArticleSidebar } from "@/components/blog/ArticleSidebar";
import { ArticleFooterNav } from "@/components/blog/ArticleFooterNav";
import { ShareButtons } from "@/components/blog/ShareButtons";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import {
  getAdjacentPosts,
  getAllPosts,
  getPostBySlug,
  getRelatedPosts,
} from "@/data/blogs";
import { formatDate } from "@/lib/utils";
import { phoneHref, siteConfig } from "@/constants/site";
import { buildPageMetadata } from "@/lib/seo";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

// Every post is known at build time, so the whole /blog/[slug] tree is
// statically generated — no runtime data fetching for any post page.
export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return buildPageMetadata({
    title: post.seo?.title ?? post.title,
    description: post.seo?.description ?? post.excerpt,
    path: `/blog/${post.slug}`,
    keywords: post.seo?.keywords,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const relatedPosts = getRelatedPosts(post, 3);
  const { previous, next } = getAdjacentPosts(post.slug);
  const url = `${siteConfig.url}/blog/${post.slug}`;

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishDate,
    dateModified: post.publishDate,
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    articleSection: post.category,
    keywords: post.tags.join(", "),
  };

  return (
    <PageLayout
      hero={
        <PageHero
          title={post.title}
          subtitle={post.excerpt}
          badge={post.category}
          breadcrumbs={[{ label: "Blog", href: "/blog" }, { label: post.title }]}
        />
      }
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />

      <Section id="article">
        <div className="grid gap-10 lg:grid-cols-[1fr_320px] lg:items-start lg:gap-16">
          <article className="flex flex-col gap-8 lg:order-1">
            <div className="text-muted-foreground flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
              <span className="text-foreground font-medium">{post.author.role}</span>
              <span aria-hidden="true">•</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="size-4" aria-hidden="true" />
                <time dateTime={post.publishDate}>{formatDate(post.publishDate)}</time>
              </span>
              <span aria-hidden="true">•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="size-4" aria-hidden="true" />
                {post.readingTime} read
              </span>
            </div>

            <div className="bg-muted flex aspect-video items-center justify-center overflow-hidden rounded-xl">
              <div className="flex flex-col items-center gap-2">
                <ImageIcon
                  className="text-muted-foreground/50 size-12"
                  aria-hidden="true"
                />
                <span className="text-muted-foreground/70 text-sm font-medium">
                  Photo coming soon
                </span>
              </div>
            </div>

            <ArticleContent blocks={post.content} />
          </article>

          <ArticleSidebar
            relatedPosts={relatedPosts}
            className="lg:sticky lg:top-28 lg:order-2"
          />
        </div>
      </Section>

      <Section id="article-footer" className="bg-secondary/40">
        <div className="flex flex-col gap-8">
          <ArticleFooterNav previous={previous} next={next} />
          <div className="border-border flex justify-center border-t pt-6">
            <ShareButtons url={url} title={post.title} />
          </div>
        </div>
      </Section>

      <RelatedArticles posts={relatedPosts} />

      <CTASection
        title="Ready to Book Professional Home Care?"
        description="Speak with a care coordinator today and we'll help you get started."
        primaryCta={{ label: "Book Appointment", href: "/appointment" }}
        secondaryCta={{ label: "Call Now", href: phoneHref }}
      />
    </PageLayout>
  );
}
