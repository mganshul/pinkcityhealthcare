"use server";

import {
  careerApplicationFormSchema,
  type CareerApplicationFormInput,
} from "@/schemas/career-application";
import { uploadResumeFile } from "@/lib/supabase/storage";
import { createCareerApplication } from "@/lib/supabase/queries/career-applications";
import {
  sendCareerApplicationAdminNotification,
  sendCareerApplicationConfirmationEmail,
} from "@/lib/email/career";

export interface CareerApplicationActionState {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: Partial<Record<keyof CareerApplicationFormInput, string>>;
}

function readFormValue(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === "string" ? value : "";
}

function readFormNumber(formData: FormData, key: string): number | undefined {
  const raw = readFormValue(formData, key).trim();
  if (!raw) return undefined;
  const parsed = Number(raw);
  return Number.isNaN(parsed) ? undefined : parsed;
}

/**
 * Matches the (prevState, formData) => State shape React's useActionState
 * (or a manual startTransition + call, as CareerApplicationForm does)
 * expects. A "use server" file may only export async functions — the
 * initial/idle CareerApplicationActionState value lives with its caller
 * instead (see CareerApplicationForm.tsx), same pattern as
 * appointment.ts/contact.ts.
 */
export async function submitCareerApplicationAction(
  _prevState: CareerApplicationActionState,
  formData: FormData
): Promise<CareerApplicationActionState> {
  const resumeValue = formData.get("resume");

  const raw = {
    fullName: readFormValue(formData, "fullName"),
    phone: readFormValue(formData, "phone"),
    email: readFormValue(formData, "email"),
    position: readFormValue(formData, "position"),
    yearsOfExperience: readFormNumber(formData, "yearsOfExperience"),
    currentOrganization: readFormValue(formData, "currentOrganization"),
    highestQualification: readFormValue(formData, "highestQualification"),
    preferredShift: readFormValue(formData, "preferredShift") || undefined,
    city: readFormValue(formData, "city"),
    state: readFormValue(formData, "state"),
    message: readFormValue(formData, "message"),
    resume: resumeValue instanceof File ? resumeValue : new File([], ""),
    consentToContact: readFormValue(formData, "consentToContact") === "true",
  };

  const parsed = careerApplicationFormSchema.safeParse(raw);

  if (!parsed.success) {
    const fieldErrors: Partial<Record<keyof CareerApplicationFormInput, string>> =
      {};
    for (const issue of parsed.error.issues) {
      const field = issue.path[0];
      if (typeof field === "string" && !(field in fieldErrors)) {
        fieldErrors[field as keyof CareerApplicationFormInput] = issue.message;
      }
    }
    return {
      status: "error",
      message: "Please correct the highlighted fields and try again.",
      fieldErrors,
    };
  }

  const { resume, ...applicationInput } = parsed.data;

  let resumeUrl: string;
  try {
    resumeUrl = await uploadResumeFile(resume);
  } catch (error) {
    console.error("Failed to upload resume:", error);
    return {
      status: "error",
      message:
        "Something went wrong while uploading your resume. Please try again.",
    };
  }

  let application;
  try {
    application = await createCareerApplication(applicationInput, resumeUrl);
  } catch (error) {
    console.error("Failed to create career application:", error);
    return {
      status: "error",
      message:
        "Something went wrong while submitting your application. Please call us directly or try again.",
    };
  }

  // Never blocks or fails the submission response — see src/lib/email/career.ts.
  await Promise.all([
    sendCareerApplicationAdminNotification(application),
    sendCareerApplicationConfirmationEmail(application),
  ]);

  return {
    status: "success",
    message:
      "Our HR team will review your application and contact you if your profile matches our current requirements.",
  };
}
