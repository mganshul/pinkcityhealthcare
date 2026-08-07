import {
  Activity,
  Baby,
  Bandage,
  Bed,
  ClipboardList,
  FlaskConical,
  Heart,
  Home,
  PersonStanding,
  Stethoscope,
  Syringe,
  UserRound,
} from "lucide-react";
import type { NavDropdown, NavLink, ServiceNavItem } from "@/types/navigation";

export const services: ServiceNavItem[] = [
  {
    label: "Home Nursing",
    href: "/services/home-nursing",
    description: "Skilled nursing care in the comfort of your home",
    icon: Home,
  },
  {
    label: "Elder Care",
    href: "/services/elder-care",
    description: "Compassionate, dignified care for senior citizens",
    icon: Heart,
  },
  {
    label: "ICU Care",
    href: "/services/icu-care",
    description: "Critical care support with certified ICU nurses",
    icon: Activity,
  },
  {
    label: "Doctor Visit",
    href: "/services/doctor-visit",
    description: "On-demand consultations with qualified doctors",
    icon: Stethoscope,
  },
  {
    label: "Physiotherapy",
    href: "/services/physiotherapy",
    description: "Recovery and mobility care from expert therapists",
    icon: PersonStanding,
  },
  {
    label: "Mother & Baby Care",
    href: "/services/mother-baby-care",
    description: "Postnatal support for new mothers and newborns",
    icon: Baby,
  },
  {
    label: "Post Surgery Care",
    href: "/services/post-surgery-care",
    description: "Recovery care and monitoring after surgery",
    icon: Bandage,
  },
  {
    label: "Patient Attendant",
    href: "/services/patient-attendant",
    description: "Trained attendants for daily patient assistance",
    icon: UserRound,
  },
  {
    label: "Medical Equipment",
    href: "/services/medical-equipment",
    description: "Rental & delivery of home medical equipment",
    icon: Bed,
  },
  {
    label: "Lab Test",
    href: "/services/lab-test",
    description: "Sample collection and diagnostics at home",
    icon: FlaskConical,
  },
  {
    label: "Injection Services",
    href: "/services/injection-services",
    description: "Safe, professional injection administration",
    icon: Syringe,
  },
  {
    label: "Nursing Staff",
    href: "/services/nursing-staff",
    description: "Verified nursing staff for short or long term care",
    icon: ClipboardList,
  },
];

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
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Refund Policy", href: "/refund-policy" },
];
