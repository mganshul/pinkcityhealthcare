export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  readingTime: string;
  publishDate: string;
  /** Describes the intended photo for this article — used as future alt text once real imagery replaces the placeholder. */
  imagePlaceholder: string;
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: "elderly-parent-home-care-signs",
    title: "10 Signs Your Elderly Parent May Need Professional Home Care",
    slug: "signs-elderly-parent-needs-home-care",
    category: "Elder Care",
    excerpt:
      "From missed medications to unexplained falls, learn the early signs that indicate it may be time to bring in professional support at home.",
    readingTime: "5 min",
    publishDate: "2026-07-28",
    imagePlaceholder: "A caregiver assisting an elderly parent at home",
    featured: true,
  },
  {
    id: "home-nursing-recovery-after-surgery",
    title: "How Home Nursing Helps Speed Up Recovery After Surgery",
    slug: "home-nursing-speeds-up-recovery-after-surgery",
    category: "Home Nursing",
    excerpt:
      "Post-surgical recovery goes smoother with the right support. Here's how skilled home nursing reduces complications and shortens recovery time.",
    readingTime: "6 min",
    publishDate: "2026-07-15",
    imagePlaceholder: "A home nurse checking on a recovering patient",
    featured: true,
  },
  {
    id: "choosing-the-right-caregiver",
    title: "How to Choose the Right Caregiver for Your Loved One",
    slug: "how-to-choose-the-right-caregiver",
    category: "Caregiver Guide",
    excerpt:
      "Finding the right caregiver is about more than credentials. Here's what to ask and look for before welcoming someone into your home.",
    readingTime: "4 min",
    publishDate: "2026-06-30",
    imagePlaceholder: "A family meeting with a caregiver in their living room",
    featured: true,
  },
];
