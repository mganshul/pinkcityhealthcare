import type { LucideIcon } from "lucide-react";
import { ProcessStep } from "@/components/sections/how-it-works/ProcessStep";
import { cn } from "@/lib/utils";

export interface ProcessStepData {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ProcessTimelineProps {
  steps: ProcessStepData[];
  className?: string;
}

// Shared horizontal/vertical timeline — reuses the homepage's ProcessStep
// component (connectors, numbered badges, reduced-motion handling) so the
// treatment stays identical wherever a step-by-step process appears.
export function ProcessTimeline({ steps, className }: ProcessTimelineProps) {
  return (
    <ol
      className={cn(
        "mt-12 flex list-none flex-col lg:mt-16 lg:flex-row",
        className,
      )}
    >
      {steps.map((step, index) => {
        const Icon = step.icon;
        return (
          <ProcessStep
            key={step.title}
            index={index}
            icon={
              <Icon
                className="text-primary size-6 transition-colors duration-300 motion-reduce:transition-none group-hover:text-white"
                aria-hidden="true"
              />
            }
            title={step.title}
            description={step.description}
            isLast={index === steps.length - 1}
          />
        );
      })}
    </ol>
  );
}
