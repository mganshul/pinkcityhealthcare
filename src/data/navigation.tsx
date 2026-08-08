import type { NavDropdown, NavLink } from "@/types/navigation";

// Re-exported from the canonical catalog so existing imports
// (`import { services } from "@/data/navigation"`) keep working unchanged.
export { services } from "@/data/services";

// Every href below must point at a route that actually exists — this list
// was audited in Milestone 37 and pruned of links to pages that were never
// built (why-choose-us, our-team, blog, faq, pricing, insurance-support).
// Milestone 38 built the Blog and re-added it below. If one of the other
// pruned pages gets built later, add its link back too.
export const aboutDropdown: NavDropdown = {
  label: "About",
  items: [
    { label: "About Us", href: "/about" },
    { label: "Gallery", href: "/gallery" },
    { label: "Careers", href: "/careers" },
  ],
};

export const primaryNavLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

export const footerQuickLinks: NavLink[] = [
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Gallery", href: "/gallery" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Careers", href: "/careers" },
  { label: "Service Areas", href: "/service-areas" },
];

export const legalLinks: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Refund Policy", href: "/refund-policy" },
];
