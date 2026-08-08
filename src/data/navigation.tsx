import type { NavDropdown, NavLink } from "@/types/navigation";

// Re-exported from the canonical catalog so existing imports
// (`import { services } from "@/data/navigation"`) keep working unchanged.
export { services } from "@/data/services";

export const aboutDropdown: NavDropdown = {
  label: "About",
  items: [
    { label: "About Us", href: "/about" },
    { label: "Why Choose Us", href: "/why-choose-us" },
    { label: "Our Team", href: "/our-team" },
    { label: "Gallery", href: "/gallery" },
    { label: "Careers", href: "/careers" },
  ],
};

export const primaryNavLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const footerQuickLinks: NavLink[] = [
  { label: "About Us", href: "/about" },
  { label: "Why Choose Us", href: "/why-choose-us" },
  { label: "Our Team", href: "/our-team" },
  { label: "Gallery", href: "/gallery" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "FAQ", href: "/faq" },
  { label: "Careers", href: "/careers" },
  { label: "Pricing", href: "/pricing" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Insurance Support", href: "/insurance-support" },
  { label: "Blog", href: "/blog" },
];

export const legalLinks: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Refund Policy", href: "/refund-policy" },
];
