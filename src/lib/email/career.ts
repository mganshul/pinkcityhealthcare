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
import { adminNotificationRecipients, phoneHref, siteConfig } from "@/constants/site";
import type { CareerApplicationRecord } from "@/lib/supabase/queries/career-applications";

/**
 * Notifies the business inbox of a new job application, including a link
 * to the uploaded resume. Never throws — a failed notification email must
 * never surface as a failed application, the row (and resume) are already
 * safely stored by the time this is called.
 */
export async function sendCareerApplicationAdminNotification(
  application: CareerApplicationRecord
): Promise<void> {
  const transporter = getEmailTransporter();
  if (!transporter) return;

  const submittedAt = new Date(application.created_at).toLocaleString(
    "en-IN",
    { dateStyle: "medium", timeStyle: "short", timeZone: "Asia/Kolkata" }
  );

  const detailRows = [
    { label: "Applicant", value: application.full_name },
    { label: "Phone", value: application.phone, href: `tel:${application.phone}` },
    { label: "Email", value: application.email, href: `mailto:${application.email}` },
    { label: "Position", value: application.position },
    { label: "Experience", value: `${application.years_of_experience} years` },
    { label: "Qualification", value: application.highest_qualification },
    application.current_organization
      ? { label: "Current organization", value: application.current_organization }
      : null,
    application.preferred_shift
      ? { label: "Preferred shift", value: application.preferred_shift }
      : null,
    { label: "Location", value: `${application.city}, ${application.state}` },
    { label: "Submitted", value: submittedAt },
  ].filter((row) => row !== null);

  const rowsHtml = detailRows
    .map(
      (row, index) => `<tr>
        <td style="padding:10px 0; ${index < detailRows.length - 1 ? "border-bottom:1px solid #e2e8f0;" : ""} font-size:13px; color:#64748b; width:140px; vertical-align:top;">${escapeHtml(row.label)}</td>
        <td style="padding:10px 0; ${index < detailRows.length - 1 ? "border-bottom:1px solid #e2e8f0;" : ""} font-size:14px; color:#1f2937; font-weight:600;">
          ${row.href ? `<a href="${escapeHtml(row.href)}" style="color:#1f2937; text-decoration:none;">${escapeHtml(row.value)}</a>` : escapeHtml(row.value)}
        </td>
      </tr>`
    )
    .join("");

  const bodyHtml = `
    <span style="display:inline-block; background-color:#fdf2f8; color:#d6127a; font-size:12px; font-weight:600; letter-spacing:0.03em; text-transform:uppercase; padding:5px 12px; border-radius:999px; margin-bottom:16px;">
      New Job Application
    </span>
    <h1 style="margin:12px 0 24px; font-size:20px; line-height:1.4; color:#1f2937;">
      ${escapeHtml(application.position)} — ${escapeHtml(application.full_name)}
    </h1>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse; margin-bottom:28px;">
      ${rowsHtml}
    </table>
    ${
      application.message
        ? `<p style="margin:0 0 8px; font-size:12px; text-transform:uppercase; letter-spacing:0.04em; color:#64748b; font-weight:600;">
      Message
    </p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f9fafb; border-radius:8px; margin-bottom:28px;">
      <tr>
        <td style="padding:16px 20px; font-size:14px; line-height:1.7; color:#1f2937;">
          ${escapeHtmlWithBreaks(application.message)}
        </td>
      </tr>
    </table>`
        : ""
    }
    ${renderButton(application.resume_url, "View Resume")}
  `;

  try {
    await transporter.sendMail({
      from: getEmailFromAddress(),
      to: adminNotificationRecipients,
      subject: `New job application — ${application.position} (${application.full_name})`,
      text: [
        "A new job application was submitted through the website.",
        "",
        `Position: ${application.position}`,
        `Applicant: ${application.full_name}`,
        `Phone: ${application.phone}`,
        `Email: ${application.email}`,
        `Experience: ${application.years_of_experience} years`,
        `Highest qualification: ${application.highest_qualification}`,
        application.current_organization
          ? `Current organization: ${application.current_organization}`
          : null,
        application.preferred_shift
          ? `Preferred shift: ${application.preferred_shift}`
          : null,
        `Location: ${application.city}, ${application.state}`,
        `Submitted: ${submittedAt}`,
        application.message ? `Message: ${application.message}` : null,
        "",
        `Resume: ${application.resume_url}`,
      ]
        .filter((line) => line !== null)
        .join("\n"),
      html: renderEmailLayout({
        previewText: `New application for ${application.position} from ${application.full_name}`,
        bodyHtml,
      }),
    });
  } catch (error) {
    console.error(
      "Failed to send career application admin notification email:",
      error
    );
  }
}

/**
 * Confirms receipt to the applicant — never throws, same reasoning as the
 * admin notification above.
 */
export async function sendCareerApplicationConfirmationEmail(
  application: CareerApplicationRecord
): Promise<void> {
  const transporter = getEmailTransporter();
  if (!transporter) return;

  const bodyHtml = `
    <h1 style="margin:0 0 20px; font-size:22px; line-height:1.4; color:#1f2937;">
      We've received your application
    </h1>
    <p style="margin:0 0 16px; font-size:15px; line-height:1.7; color:#1f2937;">
      Hi ${escapeHtml(application.full_name)},
    </p>
    <p style="margin:0 0 24px; font-size:15px; line-height:1.7; color:#1f2937;">
      Thank you for applying for the <strong>${escapeHtml(application.position)}</strong> position at ${escapeHtml(siteConfig.name)}. Our HR team will review your application and contact you if your profile matches our current requirements.
    </p>
    <p style="margin:0 0 24px; font-size:15px; line-height:1.7; color:#1f2937;">
      Questions in the meantime? We're available ${escapeHtml(siteConfig.contact.businessHours)}.
    </p>
    ${renderButton(phoneHref, `Call ${siteConfig.contact.phone}`)}
  `;

  try {
    await transporter.sendMail({
      from: getEmailFromAddress(),
      to: application.email,
      subject: `We've received your application — ${siteConfig.name}`,
      text: [
        `Hi ${application.full_name},`,
        "",
        `Thank you for applying for the ${application.position} position at ${siteConfig.name}. Our HR team will review your application and contact you if your profile matches our current requirements.`,
        "",
        `Questions in the meantime? Call us at ${siteConfig.contact.phone}.`,
        siteConfig.contact.businessHours,
        "",
        siteConfig.name,
      ].join("\n"),
      html: renderEmailLayout({
        previewText: `Thank you for applying for the ${application.position} position. Our HR team will be in touch if your profile matches.`,
        bodyHtml,
      }),
    });
  } catch (error) {
    console.error(
      "Failed to send career application confirmation email:",
      error
    );
  }
}
