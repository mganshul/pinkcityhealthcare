export type EmploymentType = "Full Time" | "Part Time";

export interface Job {
  slug: string;
  title: string;
  employmentType: EmploymentType;
  location: string;
  experience: string;
  description: string;
  isActive: boolean;
  /** ISO date (YYYY-MM-DD) — feeds the JobPosting datePosted field on the Careers page. */
  datePosted: string;
}

// Single source of truth for open positions — the Careers page reads this
// list directly rather than hardcoding cards, so postings can change here
// without touching page code. Set isActive: false to retire a posting
// without deleting its history from this file.
export const jobs: Job[] = [
  {
    slug: "registered-nurse",
    title: "Registered Nurse",
    employmentType: "Full Time",
    location: "Jaipur",
    experience: "2+ Years",
    description:
      "Provide professional nursing care to patients at home while maintaining the highest standards of compassion and safety.",
    isActive: true,
    datePosted: "2026-08-01",
  },
  {
    slug: "elder-care-attendant",
    title: "Elder Care Attendant",
    employmentType: "Full Time",
    location: "Jaipur",
    experience: "1+ Years",
    description:
      "Support elderly patients with daily living activities, mobility, and companionship in a home care setting.",
    isActive: true,
    datePosted: "2026-08-01",
  },
  {
    slug: "physiotherapist",
    title: "Physiotherapist",
    employmentType: "Part Time",
    location: "Jaipur",
    experience: "3+ Years",
    description:
      "Deliver guided rehabilitation and mobility sessions to patients recovering at home, working closely with our care coordinators.",
    isActive: true,
    datePosted: "2026-08-01",
  },
  {
    slug: "icu-care-nurse",
    title: "ICU Care Nurse",
    employmentType: "Full Time",
    location: "Jaipur",
    experience: "3+ Years",
    description:
      "Manage critical care equipment, monitoring, and clinical routines for ICU-level patients receiving care at home.",
    isActive: true,
    datePosted: "2026-08-01",
  },
  {
    slug: "patient-care-coordinator",
    title: "Patient Care Coordinator",
    employmentType: "Full Time",
    location: "Jaipur",
    experience: "1+ Years",
    description:
      "Be the first point of contact for families, matching patients with the right caregiver and keeping every care plan on track.",
    isActive: true,
    datePosted: "2026-08-01",
  },
];
