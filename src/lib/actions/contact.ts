"use server";

import { contactFormSchema, type ContactFormInput } from "@/schemas/contact";
import { createContactMessage } from "@/lib/supabase/queries/contacts";

export interface ContactActionState {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: Partial<Record<keyof ContactFormInput, string>>;
}

function readFormValue(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === "string" ? value : "";
}

/**
 * Matches the (prevState, formData) => State shape React's useActionState
 * expects. A "use server" file may only export async functions — define
 * the idle initial ContactActionState in the calling Client Component
 * instead of as a const export here (see AppointmentForm.tsx/
 * AppointmentActionState for the same pattern and why it's necessary).
 */
export async function submitContactAction(
  _prevState: ContactActionState,
  formData: FormData
): Promise<ContactActionState> {
  const raw = {
    fullName: readFormValue(formData, "fullName"),
    email: readFormValue(formData, "email"),
    phone: readFormValue(formData, "phone"),
    subject: readFormValue(formData, "subject"),
    message: readFormValue(formData, "message"),
  };

  const parsed = contactFormSchema.safeParse(raw);

  if (!parsed.success) {
    const fieldErrors: Partial<Record<keyof ContactFormInput, string>> = {};
    for (const issue of parsed.error.issues) {
      const field = issue.path[0];
      if (typeof field === "string" && !(field in fieldErrors)) {
        fieldErrors[field as keyof ContactFormInput] = issue.message;
      }
    }
    return {
      status: "error",
      message: "Please correct the highlighted fields and try again.",
      fieldErrors,
    };
  }

  try {
    await createContactMessage(parsed.data);
  } catch (error) {
    console.error("Failed to create contact message:", error);
    return {
      status: "error",
      message:
        "Something went wrong while sending your message. Please call us directly or try again.",
    };
  }

  return {
    status: "success",
    message:
      "Thank you for reaching out. Our team will get back to you shortly.",
  };
}
