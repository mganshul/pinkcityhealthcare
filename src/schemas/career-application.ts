import { z } from "zod";
import { jobs } from "@/data/careers";
import { requiredEmailField, requiredPhoneField } from "@/schemas/shared";

// Positions live in code (src/data/careers.ts), not the database, so this
// Set — not a DB foreign key — is the actual guardrail against an
// application being submitted for a position that doesn't exist on the
// site. Mirrors how appointmentFormSchema validates serviceSlug.
const validPositionTitles = new Set(jobs.map((job) => job.title));

export const MAX_RESUME_SIZE_BYTES = 5 * 1024 * 1024;
export const allowedResumeMimeTypes = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

export const preferredShifts = ["morning", "evening", "night", "flexible"] as const;

// Used identically client- and server-side: on the client the resume
// <input type="file"> is wired through a Controller (not register()) so
// its RHF value is a single File — the same type FormData.get("resume")
// hands back inside the Server Action — so this one definition validates
// both without needing separate FileList/File variants.
const resumeField = z
  .instanceof(File, { message: "Please attach your resume." })
  .refine((file) => file.size > 0, "Please attach your resume.")
  .refine(
    (file) => file.size <= MAX_RESUME_SIZE_BYTES,
    "Resume must be 5 MB or smaller."
  )
  .refine(
    (file) => allowedResumeMimeTypes.includes(file.type),
    "Resume must be a PDF, DOC, or DOCX file."
  );

export const careerApplicationFormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(120, "Full name is too long."),
  phone: requiredPhoneField,
  email: requiredEmailField,
  position: z
    .string()
    .trim()
    .min(1, "Please select a position.")
    .refine(
      (value) => validPositionTitles.has(value),
      "Please select a valid position."
    ),
  yearsOfExperience: z
    .number()
    .int("Years of experience must be a whole number.")
    .min(0, "Years of experience cannot be negative.")
    .max(60, "Enter a valid number of years."),
  currentOrganization: z
    .string()
    .trim()
    .max(150, "Current organization is too long.")
    .optional(),
  highestQualification: z
    .string()
    .trim()
    .min(2, "Please enter your highest qualification.")
    .max(150, "Qualification is too long."),
  preferredShift: z.enum(preferredShifts).optional(),
  city: z.string().trim().min(2, "City is required.").max(100, "City is too long."),
  state: z
    .string()
    .trim()
    .min(2, "State is required.")
    .max(100, "State is too long."),
  message: z.string().trim().max(1000, "Message is too long.").optional(),
  resume: resumeField,
  consentToContact: z.boolean().refine((value) => value === true, {
    message:
      "Please confirm you agree to be contacted regarding your application.",
  }),
});

export type CareerApplicationFormInput = z.infer<
  typeof careerApplicationFormSchema
>;
