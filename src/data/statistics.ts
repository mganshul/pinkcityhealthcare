import type { LucideIcon } from "lucide-react";
import { Clock, ShieldCheck, ThumbsUp, Users } from "lucide-react";

export interface Statistic {
  value: number;
  suffix: string;
  label: string;
  description: string;
  icon: LucideIcon;
}

// TODO: Placeholder figures for development only. Replace with verified,
// up-to-date business numbers before production launch.
export const statistics: Statistic[] = [
  {
    value: 1000,
    suffix: "+",
    label: "Families Served",
    description: "Homes across Jaipur we've supported with dedicated care.",
    icon: Users,
  },
  {
    value: 40,
    suffix: "+",
    label: "Qualified Nurses",
    description: "Verified, background-checked professionals on our team.",
    icon: ShieldCheck,
  },
  {
    value: 24,
    suffix: "×7",
    label: "Support Availability",
    description: "Care coordinators reachable any time, day or night.",
    icon: Clock,
  },
  {
    value: 98,
    suffix: "%",
    label: "Patient Satisfaction",
    description: "Families who rate their care experience as excellent.",
    icon: ThumbsUp,
  },
];
