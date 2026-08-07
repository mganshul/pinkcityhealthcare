"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { JobCard } from "@/components/careers/JobCard";
import { CareerApplicationForm } from "@/components/careers/CareerApplicationForm";
import { siteConfig } from "@/constants/site";
import type { Job } from "@/data/careers";

interface CareerOpeningsSectionProps {
  jobs: Job[];
}

export function CareerOpeningsSection({ jobs }: CareerOpeningsSectionProps) {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [open, setOpen] = useState(false);

  function handleApply(job: Job) {
    setSelectedJob(job);
    setOpen(true);
  }

  if (jobs.length === 0) {
    return (
      <div className="border-border bg-card mx-auto flex max-w-xl flex-col items-center gap-3 rounded-2xl border p-10 text-center shadow-sm">
        <h3 className="font-heading text-foreground text-xl font-semibold">
          No Open Positions Currently
        </h3>
        <p className="text-muted-foreground">
          We are always looking for dedicated healthcare professionals. You
          may send your resume to{" "}
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="text-primary font-medium hover:underline"
          >
            {siteConfig.contact.email}
          </a>{" "}
          and we will contact you when a suitable opportunity becomes
          available.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job) => (
          <JobCard key={job.slug} job={job} onApply={handleApply} />
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-xl">
          <DialogHeader>
            <DialogTitle>Apply for {selectedJob?.title}</DialogTitle>
            <DialogDescription>
              Fill out the form below and our HR team will review your
              application.
            </DialogDescription>
          </DialogHeader>
          {selectedJob && (
            <CareerApplicationForm
              key={selectedJob.slug}
              position={selectedJob.title}
              onReturnToCareers={() => setOpen(false)}
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
