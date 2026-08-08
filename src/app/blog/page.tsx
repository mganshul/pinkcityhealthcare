import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/common/Section";
import { SectionHeader } from "@/components/common/SectionHeader";
import { CTASection } from "@/components/patterns/CTASection";
import { SocialIcon } from "@/components/common/SocialIcon";
import { FeaturedArticleCard } from "@/components/blog/FeaturedArticleCard";
import { BlogListingSection } from "@/components/blog/BlogListingSection";
import { buttonVariants } from "@/components/ui/button";
import { getAllPosts, getFeaturedPost } from "@/data/blogs";
import { phoneHref, siteConfig } from "@/constants/site";
import { buildPageMetadata } from "@/lib/seo";
import type { SocialPlatform } from "@/types/navigation";

export const metadata: Metadata = buildPageMetadata({
  title: "Health Tips & Resources",
  description:
    "Expert healthcare advice, home care guidance, wellness tips, and updates from Pink City Healthcare.",
  path: "/blog",
});

const socialPlatforms: SocialPlatform[] = [
  "facebook",
  "instagram",
  "twitter",
  "linkedin",
  "youtube",
];

export default function BlogPage() {
  const featuredPost = getFeaturedPost();
  const allPosts = getAllPosts();

  return (
    <PageLayout
      hero={
        <PageHero
          title="Health Tips & Resources"
          subtitle="Expert healthcare advice, home care guidance, wellness tips, and updates from Pink City Healthcare."
          breadcrumbs={[{ label: "Blog" }]}
        />
      }
    >
      <Section id="featured-article">
        <FeaturedArticleCard post={featuredPost} />
      </Section>

      <Section id="all-articles" className="bg-secondary/40">
        <SectionHeader
          eyebrow="Browse Articles"
          title="All Health Tips & Resources"
          description="Search or filter by category to find the guidance you're looking for."
        />
        <div className="mt-10 lg:mt-14">
          <BlogListingSection posts={allPosts} />
        </div>
      </Section>

      <Section id="newsletter">
        <div className="border-border bg-card mx-auto flex max-w-2xl flex-col items-center gap-5 rounded-2xl border p-8 text-center shadow-sm sm:p-10">
          <h2 className="font-heading text-foreground text-2xl font-bold text-balance">
            Stay Updated on Health & Wellness
          </h2>
          <p className="text-muted-foreground text-balance">
            We don&apos;t have a newsletter yet — but you can always reach out directly, or
            follow us on social media for healthcare tips and updates from Pink City Healthcare.
          </p>
          <Link href="/contact" className={buttonVariants({ size: "lg" })}>
            Contact Us
          </Link>
          <ul className="flex items-center gap-3">
            {socialPlatforms.map((platform) => (
              <li key={platform}>
                <a
                  href={siteConfig.social[platform] || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${platform}`}
                  className="border-border bg-background text-muted-foreground hover:bg-primary hover:text-primary-foreground focus-visible:ring-ring flex size-9 items-center justify-center rounded-full border outline-none transition-colors focus-visible:ring-3 focus-visible:ring-offset-2"
                >
                  <SocialIcon platform={platform} className="size-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <CTASection
        title="Ready to Get Professional Care at Home?"
        description="Speak with a care coordinator today and we'll help you get started."
        primaryCta={{ label: "Book Appointment", href: "/appointment" }}
        secondaryCta={{ label: "Call Now", href: phoneHref }}
      />
    </PageLayout>
  );
}
