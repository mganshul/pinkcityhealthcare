"use server";

import {
  appointmentFormSchema,
  type AppointmentFormInput,
} from "@/schemas/appointment";
import { createAppointment } from "@/lib/supabase/queries/appointments";
import {
  sendAppointmentAdminNotification,
  sendAppointmentConfirmationEmail,
} from "@/lib/email/appointment";

export interface AppointmentActionState {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: Partial<Record<keyof AppointmentFormInput, string>>;
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
 * (or a manual startTransition + call, as AppointmentForm does) expects.
 * A "use server" file may only export async functions — the initial/idle
 * AppointmentActionState value lives with each caller instead (see
 * AppointmentForm.tsx) rather than as a const export here.
 */
export async function submitAppointmentAction(
  _prevState: AppointmentActionState,
  formData: FormData
): Promise<AppointmentActionState> {
  const raw = {
    fullName: readFormValue(formData, "fullName"),
    phone: readFormValue(formData, "phone"),
    email: readFormValue(formData, "email"),
    serviceSlug: readFormValue(formData, "serviceSlug"),
    preferredDate: readFormValue(formData, "preferredDate"),
    preferredTime: readFormValue(formData, "preferredTime"),
    patientAge: readFormNumber(formData, "patientAge"),
    address: readFormValue(formData, "address"),
    city: readFormValue(formData, "city").trim() || "Jaipur",
    message: readFormValue(formData, "message"),
    consentToContact: readFormValue(formData, "consentToContact") === "true",
  };

  const parsed = appointmentFormSchema.safeParse(raw);

  if (!parsed.success) {
    const fieldErrors: Partial<Record<keyof AppointmentFormInput, string>> = {};
    for (const issue of parsed.error.issues) {
      const field = issue.path[0];
      if (typeof field === "string" && !(field in fieldErrors)) {
        fieldErrors[field as keyof AppointmentFormInput] = issue.message;
      }
    }
    return {
      status: "error",
      message: "Please correct the highlighted fields and try again.",
      fieldErrors,
    };
  }

  let appointment;
  try {
    appointment = await createAppointment(parsed.data);
  } catch (error) {
    console.error("Failed to create appointment:", error);
    return {
      status: "error",
      message:
        "Something went wrong while booking your appointment. Please call us directly or try again.",
    };
  }

  // Never blocks or fails the booking response — see src/lib/email/appointment.ts.
  await Promise.all([
    sendAppointmentAdminNotification(appointment),
    sendAppointmentConfirmationEmail(appointment),
  ]);

  return {
    status: "success",
    message:
      "Your appointment request has been received. Our care coordinator will call you shortly.",
  };
}
