export interface TeamMember {
  role: string;
  description: string;
  experienceYears: number;
  expertise: string[];
  /** Real photo path in /public, e.g. "/images/staff/staff1.png". Omit to keep the "Photo coming soon" placeholder box. */
  image?: string;
}

// TODO: Placeholder profiles for development only. Photos are real; names
// and credentials still need to be replaced with verified staff details
// before production launch.
export const teamMembers: TeamMember[] = [
  {
    role: "Senior Registered Nurse",
    description:
      "Leads complex home nursing cases with a calm, detail-oriented approach families can rely on.",
    experienceYears: 8,
    expertise: ["Wound Care", "Medication Management", "Vital Monitoring"],
    image: "/images/staff/staff1.png",
  },
  {
    role: "ICU Care Specialist",
    description:
      "Brings critical-care expertise home, managing equipment and monitoring with hospital-grade precision.",
    experienceYears: 10,
    expertise: ["Ventilator Support", "Critical Monitoring", "Emergency Response"],
    image: "/images/staff/staff2.png",
  },
  {
    role: "Elder Care Professional",
    description:
      "Provides patient, dignified daily support that helps seniors stay comfortable and independent at home.",
    experienceYears: 6,
    expertise: ["Mobility Assistance", "Daily Living Support", "Companionship"],
    image: "/images/staff/staff3.png",
  },
  {
    role: "Physiotherapy Specialist",
    description:
      "Designs and guides recovery-focused exercise plans tailored to each patient's condition and pace.",
    experienceYears: 7,
    expertise: ["Post-Surgery Recovery", "Mobility Training", "Pain Management"],
    image: "/images/staff/staff4.png",
  },
];
