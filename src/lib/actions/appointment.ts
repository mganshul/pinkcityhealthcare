"use server";

import {
  appointmentFormSchema,
  type AppointmentFormInput,
} from "@/schemas/appointment";
import { createAppointment } from "@/lib/supabase/queries/appointments";

export interface AppointmentActionState {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: Partial<Record<keyof AppointmentFormInput, string>>;
}

export const initialAppointmentActionState: AppointmentActionState = {
  status: "idle",
  message: "",
};

function readFormValue(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === "string" ? value : "";
}

/**
 * Matches the (prevState, formData) => State shape React's useActionState
 * expects, so a future <AppointmentForm> can wire this up directly via
 * `useActionState(submitAppointmentAction, initialAppointmentActionState)`
 * with no changes here.
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
    address: readFormValue(formData, "address"),
    city: readFormValue(formData, "city").trim() || "Jaipur",
    message: readFormValue(formData, "message"),
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

  try {
    await createAppointment(parsed.data);
  } catch (error) {
    console.error("Failed to create appointment:", error);
    return {
      status: "error",
      message:
        "Something went wrong while booking your appointment. Please call us directly or try again.",
    };
  }

  return {
    status: "success",
    message:
      "Your appointment request has been received. Our care coordinator will call you shortly.",
  };
}
