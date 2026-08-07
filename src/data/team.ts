export interface TeamMember {
  role: string;
  description: string;
  experienceYears: number;
  expertise: string[];
}

// TODO: Placeholder profiles for development only. Replace with real,
// verified staff profiles (name, photo, credentials) before production launch.
export const teamMembers: TeamMember[] = [
  {
    role: "Senior Registered Nurse",
    description:
      "Leads complex home nursing cases with a calm, detail-oriented approach families can rely on.",
    experienceYears: 8,
    expertise: ["Wound Care", "Medication Management", "Vital Monitoring"],
  },
  {
    role: "ICU Care Specialist",
    description:
      "Brings critical-care expertise home, managing equipment and monitoring with hospital-grade precision.",
    experienceYears: 10,
    expertise: ["Ventilator Support", "Critical Monitoring", "Emergency Response"],
  },
  {
    role: "Elder Care Professional",
    description:
      "Provides patient, dignified daily support that helps seniors stay comfortable and independent at home.",
    experienceYears: 6,
    expertise: ["Mobility Assistance", "Daily Living Support", "Companionship"],
  },
  {
    role: "Physiotherapy Specialist",
    description:
      "Designs and guides recovery-focused exercise plans tailored to each patient's condition and pace.",
    experienceYears: 7,
    expertise: ["Post-Surgery Recovery", "Mobility Training", "Pain Management"],
  },
];
