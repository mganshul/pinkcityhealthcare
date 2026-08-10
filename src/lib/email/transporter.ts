import "server-only";
import nodemailer from "nodemailer";
import { siteConfig } from "@/constants/site";

const smtpHost = process.env.SMTP_HOST;
const smtpPort = process.env.SMTP_PORT;
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;

// `undefined` (not yet resolved) vs `null` (resolved, but not configured) —
// lets a genuinely-missing config short-circuit every call after the first
// without re-checking env vars, while still being distinguishable from "not
// checked yet" during module init.
let cachedTransporter: nodemailer.Transporter | null | undefined;

/**
 * Returns null if SMTP isn't configured, rather than throwing — email is a
 * notification convenience layered on top of a booking that's already
 * safely in Postgres by the time this is called, never a dependency of the
 * write path. See "Email flow" in BACKEND_ARCHITECTURE.md.
 */
export function getEmailTransporter(): nodemailer.Transporter | null {
  if (cachedTransporter !== undefined) {
    return cachedTransporter;
  }

  if (!smtpHost || !smtpPort || !smtpUser || !smtpPass) {
    console.warn(
      "Email not sent: SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASS must all be set."
    );
    cachedTransporter = null;
    return cachedTransporter;
  }

  const port = Number(smtpPort);
  cachedTransporter = nodemailer.createTransport({
    host: smtpHost,
    port,
    secure: port === 465,
    auth: { user: smtpUser, pass: smtpPass },
  });

  return cachedTransporter;
}

/**
 * Formatted for the `from:` header specifically — a bare address makes
 * inbox previews (Gmail, Outlook, ...) fall back to showing the mailbox's
 * local part ("help") instead of the business name, since there's no
 * display name to read.
 */
export function getEmailFromAddress(): string {
  const address = process.env.EMAIL_FROM || smtpUser || "";
  return address ? `"${siteConfig.name}" <${address}>` : "";
}
