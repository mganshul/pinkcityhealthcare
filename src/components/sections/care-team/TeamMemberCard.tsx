import Image from "next/image";
import { BadgeCheck, UserRound } from "lucide-react";
import { cn } from "@/lib/utils";

interface TeamMemberCardProps {
  name?: string;
  role: string;
  description: string;
  experienceYears: number;
  expertise: string[];
  image?: string;
  className?: string;
}

export function TeamMemberCard({
  name,
  role,
  description,
  experienceYears,
  expertise,
  image,
  className,
}: TeamMemberCardProps) {
  return (
    <article
      className={cn(
        "group border-border bg-card flex h-full flex-col overflow-hidden rounded-lg border shadow-sm transition-all duration-300 ease-out motion-reduce:transition-none hover:-translate-y-1 hover:shadow-md",
        className,
      )}
    >
      {image ? (
        <div className="bg-muted relative aspect-square overflow-hidden">
          <Image
            src={image}
            alt={name ? `${name}, ${role} at PinkCity Healthcare` : role}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover object-top"
          />
        </div>
      ) : (
        <div className="bg-muted flex aspect-square items-center justify-center">
          <div className="flex flex-col items-center gap-2">
            <UserRound
              className="text-muted-foreground/50 size-10"
              aria-hidden="true"
            />
            <span className="text-muted-foreground/70 text-xs font-medium">
              Photo coming soon
            </span>
          </div>
        </div>
      )}

      <div className="flex flex-1 flex-col items-center gap-3 p-6 text-center">
        <div className="flex flex-col gap-1.5">
          <h3 className="font-heading text-foreground text-lg font-semibold">
            {name ?? role}
          </h3>
          {name && (
            <p className="text-primary text-sm font-medium">{role}</p>
          )}
          <p className="text-muted-foreground flex items-center justify-center gap-1 text-xs font-semibold">
            <BadgeCheck
              className="text-brand-green size-3.5"
              aria-hidden="true"
            />
            Background-Verified
          </p>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>

        <p className="text-foreground text-sm font-medium">
          {experienceYears}+ Years Experience
        </p>

        <ul className="border-border flex flex-wrap items-center justify-center gap-2 border-t pt-4">
          {expertise.map((skill) => (
            <li
              key={skill}
              className="bg-secondary text-primary rounded-full px-2.5 py-1 text-xs font-medium"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
