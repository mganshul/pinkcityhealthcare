import "server-only";
import {
  getEmailFromAddress,
  getEmailTransporter,
} from "@/lib/email/transporter";
import {
  escapeHtml,
  escapeHtmlWithBreaks,
  renderButton,
  renderEmailLayout,
} from "@/lib/email/layout";
import { phoneHref, siteConfig } from "@/constants/site";
import { services } from "@/data/services";
import type { AppointmentRecord } from "@/lib/supabase/queries/appointments";

function getServiceLabel(serviceSlug: string): string {
  const service = services.find(
    (item) => item.href === `/services/${serviceSlug}`
  );
  return service?.label ?? serviceSlug;
}

/**
 * Notifies the business inbox of a new appointment request. Never throws —
 * a failed notification email must never surface as a failed booking, the
 * row is already safely in Postgres by the time this is called.
 */
export async function sendAppointmentAdminNotification(
  appointment: AppointmentRecord
): Promise<void> {
  const transporter = getEmailTransporter();
  if (!transporter) return;

  const submittedAt = new Date(appointment.created_at).toLocaleString(
    "en-IN",
    { dateStyle: "medium", timeStyle: "short", timeZone: "Asia/Kolkata" }
  );
  const serviceLabel = getServiceLabel(appointment.service_slug);

  const detailRows = [
    { label: "Patient", value: appointment.full_name },
    { label: "Phone", value: appointment.phone, href: `tel:${appointment.phone}` },
    appointment.email
      ? { label: "Email", value: appointment.email, href: `mailto:${appointment.email}` }
      : null,
    appointment.patient_age
      ? { label: "Patient age", value: String(appointment.patient_age) }
      : null,
    { label: "Service", value: serviceLabel },
    { label: "Preferred date", value: appointment.preferred_date },
    appointment.preferred_time
      ? { label: "Preferred time", value: appointment.preferred_time }
      : null,
    { label: "City", value: appointment.city },
    { label: "Address", value: appointment.address },
    { label: "Submitted", value: submittedAt },
  ].filter((row) => row !== null);

  const rowsHtml = detailRows
    .map(
      (row, index) => `<tr>
        <td style="padding:10px 0; ${index < detailRows.length - 1 ? "border-bottom:1px solid #e2e8f0;" : ""} font-size:13px; color:#64748b; width:120px; vertical-align:top;">${escapeHtml(row.label)}</td>
        <td style="padding:10px 0; ${index < detailRows.length - 1 ? "border-bottom:1px solid #e2e8f0;" : ""} font-size:14px; color:#1f2937; font-weight:600;">
          ${row.href ? `<a href="${escapeHtml(row.href)}" style="color:#1f2937; text-decoration:none;">${escapeHtml(row.value)}</a>` : escapeHtml(row.value)}
        </td>
      </tr>`
    )
    .join("");

  const replyHref = appointment.email
    ? `mailto:${appointment.email}`
    : `tel:${appointment.phone}`;
  const replyLabel = appointment.email ? "Reply by Email" : "Call Back";

  const bodyHtml = `
    <span style="display:inline-block; background-color:#fdf2f8; color:#d6127a; font-size:12px; font-weight:600; letter-spacing:0.03em; text-transform:uppercase; padding:5px 12px; border-radius:999px; margin-bottom:16px;">
      New Appointment Request
    </span>
    <h1 style="margin:12px 0 24px; font-size:20px; line-height:1.4; color:#1f2937;">
      ${escapeHtml(serviceLabel)} — ${escapeHtml(appointment.full_name)}
    </h1>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse; margin-bottom:28px;">
      ${rowsHtml}
    </table>
    ${
      appointment.message
        ? `<p style="margin:0 0 8px; font-size:12px; text-transform:uppercase; letter-spacing:0.04em; color:#64748b; font-weight:600;">
      Additional notes
    </p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f9fafb; border-radius:8px; margin-bottom:28px;">
      <tr>
        <td style="padding:16px 20px; font-size:14px; line-height:1.7; color:#1f2937;">
          ${escapeHtmlWithBreaks(appointment.message)}
        </td>
      </tr>
    </table>`
        : ""
    }
    ${renderButton(replyHref, replyLabel)}
  `;

  try {
    await transporter.sendMail({
      from: getEmailFromAddress(),
      to: siteConfig.contact.email,
      subject: `New appointment request — ${appointment.full_name}`,
      text: [
        "A new appointment request was submitted on the website.",
        "",
        `Patient: ${appointment.full_name}`,
        `Phone: ${appointment.phone}`,
        appointment.email ? `Email: ${appointment.email}` : null,
        appointment.patient_age
          ? `Patient age: ${appointment.patient_age}`
          : null,
        `Service: ${serviceLabel}`,
        `Preferred date: ${appointment.preferred_date}`,
        `Preferred time: ${appointment.preferred_time}`,
        `City: ${appointment.city}`,
        `Address: ${appointment.address}`,
        `Submitted: ${submittedAt}`,
        appointment.message ? `Additional notes: ${appointment.message}` : null,
      ]
        .filter((line) => line !== null)
        .join("\n"),
      html: renderEmailLayout({
        previewText: `New appointment request from ${appointment.full_name} for ${serviceLabel}`,
        bodyHtml,
      }),
    });
  } catch (error) {
    console.error(
      "Failed to send appointment admin notification email:",
      error
    );
  }
}

/**
 * Confirms receipt to the visitor, only when they provided an email —
 * never throws, same reasoning as the admin notification above.
 */
export async function sendAppointmentConfirmationEmail(
  appointment: AppointmentRecord
): Promise<void> {
  if (!appointment.email) return;

  const transporter = getEmailTransporter();
  if (!transporter) return;

  const serviceLabel = getServiceLabel(appointment.service_slug);

  const bodyHtml = `
    <h1 style="margin:0 0 20px; font-size:22px; line-height:1.4; color:#1f2937;">
      We've received your appointment request
    </h1>
    <p style="margin:0 0 16px; font-size:15px; line-height:1.7; color:#1f2937;">
      Hi ${escapeHtml(appointment.full_name)},
    </p>
    <p style="margin:0 0 24px; font-size:15px; line-height:1.7; color:#1f2937;">
      Thank you for requesting <strong>${escapeHtml(serviceLabel)}</strong> with ${escapeHtml(siteConfig.name)}. Our care coordinator will call you shortly at
      <strong>${escapeHtml(appointment.phone)}</strong> to confirm the details.
    </p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#fdf2f8; border-left:3px solid #d6127a; border-radius:0 8px 8px 0; margin-bottom:28px;">
      <tr>
        <td style="padding:16px 20px;">
          <p style="margin:0 0 4px; font-size:12px; text-transform:uppercase; letter-spacing:0.04em; color:#d6127a; font-weight:600;">
            Requested date &amp; time
          </p>
          <p style="margin:0; font-size:15px; color:#1f2937;">
            ${escapeHtml(appointment.preferred_date)}${appointment.preferred_time ? ` at ${escapeHtml(appointment.preferred_time)}` : ""}
          </p>
        </td>
      </tr>
    </table>
    <p style="margin:0 0 24px; font-size:15px; line-height:1.7; color:#1f2937;">
      Need immediate assistance? We're available ${escapeHtml(siteConfig.contact.businessHours)}.
    </p>
    ${renderButton(phoneHref, `Call ${siteConfig.contact.phone}`)}
  `;

  try {
    await transporter.sendMail({
      from: getEmailFromAddress(),
      to: appointment.email,
      subject: `We've received your appointment request — ${siteConfig.name}`,
      text: [
        `Hi ${appointment.full_name},`,
        "",
        `Thank you for requesting ${serviceLabel} with ${siteConfig.name}. Our care coordinator will call you shortly at ${appointment.phone} to confirm the details.`,
        "",
        `Requested date: ${appointment.preferred_date}`,
        `Requested time: ${appointment.preferred_time}`,
        "",
        `Need immediate assistance? Call us at ${siteConfig.contact.phone}.`,
        siteConfig.contact.businessHours,
        "",
        siteConfig.name,
      ].join("\n"),
      html: renderEmailLayout({
        previewText: `Thank you for requesting ${serviceLabel}. Our care coordinator will call you shortly at ${appointment.phone}.`,
        bodyHtml,
      }),
    });
  } catch (error) {
    console.error("Failed to send appointment confirmation email:", error);
  }
}
