import { Briefcase, Clock, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Job } from "@/data/careers";

interface JobCardProps {
  job: Job;
  onApply: (job: Job) => void;
}

export function JobCard({ job, onApply }: JobCardProps) {
  return (
    <div className="border-border bg-card flex h-full flex-col gap-4 rounded-xl border p-6 shadow-sm">
      <div className="flex flex-col gap-2">
        <h3 className="font-heading text-foreground text-lg font-semibold">
          {job.title}
        </h3>
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="secondary" className="gap-1">
            <Clock className="size-3" aria-hidden="true" />
            {job.employmentType}
          </Badge>
          <Badge variant="outline" className="gap-1">
            <MapPin className="size-3" aria-hidden="true" />
            {job.location}
          </Badge>
          <Badge variant="outline" className="gap-1">
            <Briefcase className="size-3" aria-hidden="true" />
            Experience: {job.experience}
          </Badge>
        </div>
      </div>

      <p className="text-muted-foreground flex-1 text-sm leading-relaxed">
        {job.description}
      </p>

      <Button className="h-10 self-start" onClick={() => onApply(job)}>
        Apply Now
      </Button>
    </div>
  );
}
