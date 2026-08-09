import type { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface ServiceNavItem extends NavLink {
  description: string;
  icon: LucideIcon;
}

export interface NavDropdown {
  label: string;
  items: NavLink[];
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export type SocialPlatform =
  "facebook" | "instagram" | "twitter" | "google" | "whatsapp";
