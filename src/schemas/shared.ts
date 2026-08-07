import { z } from "zod";

// Validation primitives shared by more than one schema in this folder.
// Kept as plain regexes (rather than Zod v4's newer z.email()) so the
// schemas stay dependency-light and stable — see BACKEND_ARCHITECTURE.md.
export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const phoneRegex = /^(?:\+91[\s-]?)?[6-9]\d{9}$/;

// Optional email: appointment and contact forms both accept either "no
// email" or a well-formed one — never a malformed non-empty value.
export const optionalEmailField = z
  .string()
  .trim()
  .max(254, "Email is too long.")
  .optional()
  .refine(
    (value) => !value || emailRegex.test(value),
    "Enter a valid email address."
  );

// Required Indian mobile number — the one phone number every public form
// on this site collects, since a coordinator always needs to call back.
export const requiredPhoneField = z
  .string()
  .trim()
  .regex(phoneRegex, "Enter a valid 10-digit Indian mobile number.");

// Required email — used where a reply address is mandatory (e.g. career
// applications), unlike optionalEmailField above.
export const requiredEmailField = z
  .string()
  .trim()
  .min(1, "Email is required.")
  .max(254, "Email is too long.")
  .regex(emailRegex, "Enter a valid email address.");
