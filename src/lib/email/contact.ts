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
import type { ContactMessageRecord } from "@/lib/supabase/queries/contacts";

/**
 * Notifies the business inbox of a new contact message. Never throws — a
 * failed notification email must never surface as a failed submission, the
 * row is already safely in Postgres by the time this is called.
 */
export async function sendContactAdminNotification(
  contactMessage: ContactMessageRecord
): Promise<void> {
  const transporter = getEmailTransporter();
  if (!transporter) return;

  const submittedAt = new Date(contactMessage.created_at).toLocaleString(
    "en-IN",
    { dateStyle: "medium", timeStyle: "short", timeZone: "Asia/Kolkata" }
  );

  const detailRows = [
    { label: "Name", value: contactMessage.full_name },
    { label: "Phone", value: contactMessage.phone, href: `tel:${contactMessage.phone}` },
    contactMessage.email
      ? { label: "Email", value: contactMessage.email, href: `mailto:${contactMessage.email}` }
      : null,
    { label: "Subject", value: contactMessage.subject },
    { label: "Submitted", value: submittedAt },
  ].filter((row) => row !== null);

  const rowsHtml = detailRows
    .map(
      (row, index) => `<tr>
        <td style="padding:10px 0; ${index < detailRows.length - 1 ? "border-bottom:1px solid #e2e8f0;" : ""} font-size:13px; color:#64748b; width:110px; vertical-align:top;">${escapeHtml(row.label)}</td>
        <td style="padding:10px 0; ${index < detailRows.length - 1 ? "border-bottom:1px solid #e2e8f0;" : ""} font-size:14px; color:#1f2937; font-weight:600;">
          ${row.href ? `<a href="${escapeHtml(row.href)}" style="color:#1f2937; text-decoration:none;">${escapeHtml(row.value)}</a>` : escapeHtml(row.value)}
        </td>
      </tr>`
    )
    .join("");

  const replyHref = contactMessage.email
    ? `mailto:${contactMessage.email}`
    : `tel:${contactMessage.phone}`;
  const replyLabel = contactMessage.email ? "Reply by Email" : "Call Back";

  const bodyHtml = `
    <span style="display:inline-block; background-color:#fdf2f8; color:#d6127a; font-size:12px; font-weight:600; letter-spacing:0.03em; text-transform:uppercase; padding:5px 12px; border-radius:999px; margin-bottom:16px;">
      New Contact Message
    </span>
    <h1 style="margin:12px 0 24px; font-size:20px; line-height:1.4; color:#1f2937;">
      ${escapeHtml(contactMessage.subject)}
    </h1>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse; margin-bottom:28px;">
      ${rowsHtml}
    </table>
    <p style="margin:0 0 8px; font-size:12px; text-transform:uppercase; letter-spacing:0.04em; color:#64748b; font-weight:600;">
      Message
    </p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f9fafb; border-radius:8px; margin-bottom:28px;">
      <tr>
        <td style="padding:16px 20px; font-size:14px; line-height:1.7; color:#1f2937;">
          ${escapeHtmlWithBreaks(contactMessage.message)}
        </td>
      </tr>
    </table>
    ${renderButton(replyHref, replyLabel)}
  `;

  try {
    await transporter.sendMail({
      from: getEmailFromAddress(),
      to: adminNotificationRecipients,
      subject: `New contact message — ${contactMessage.subject}`,
      text: [
        "A new message was submitted through the website contact form.",
        "",
        `From: ${contactMessage.full_name}`,
        `Phone: ${contactMessage.phone}`,
        contactMessage.email ? `Email: ${contactMessage.email}` : null,
        `Subject: ${contactMessage.subject}`,
        `Submitted: ${submittedAt}`,
        "",
        contactMessage.message,
      ]
        .filter((line) => line !== null)
        .join("\n"),
      html: renderEmailLayout({
        previewText: `New contact message from ${contactMessage.full_name}: ${contactMessage.subject}`,
        bodyHtml,
      }),
    });
  } catch (error) {
    console.error("Failed to send contact admin notification email:", error);
  }
}

/**
 * Confirms receipt to the visitor, only when they provided an email —
 * never throws, same reasoning as the admin notification above.
 */
export async function sendContactConfirmationEmail(
  contactMessage: ContactMessageRecord
): Promise<void> {
  if (!contactMessage.email) return;

  const transporter = getEmailTransporter();
  if (!transporter) return;

  const bodyHtml = `
    <h1 style="margin:0 0 20px; font-size:22px; line-height:1.4; color:#1f2937;">
      We've received your message
    </h1>
    <p style="margin:0 0 16px; font-size:15px; line-height:1.7; color:#1f2937;">
      Hi ${escapeHtml(contactMessage.full_name)},
    </p>
    <p style="margin:0 0 24px; font-size:15px; line-height:1.7; color:#1f2937;">
      Thank you for reaching out to ${escapeHtml(siteConfig.name)}. We've received your message and our team will get back to you shortly at
      <strong>${escapeHtml(contactMessage.phone)}</strong>.
    </p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#fdf2f8; border-left:3px solid #d6127a; border-radius:0 8px 8px 0; margin-bottom:28px;">
      <tr>
        <td style="padding:16px 20px;">
          <p style="margin:0 0 4px; font-size:12px; text-transform:uppercase; letter-spacing:0.04em; color:#d6127a; font-weight:600;">
            Your subject
          </p>
          <p style="margin:0; font-size:15px; color:#1f2937;">
            ${escapeHtml(contactMessage.subject)}
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
      to: contactMessage.email,
      subject: `We've received your message — ${siteConfig.name}`,
      text: [
        `Hi ${contactMessage.full_name},`,
        "",
        `Thank you for reaching out to ${siteConfig.name}. We've received your message and our team will get back to you shortly at ${contactMessage.phone}.`,
        "",
        `Your subject: ${contactMessage.subject}`,
        "",
        `Need immediate assistance? Call us at ${siteConfig.contact.phone}.`,
        siteConfig.contact.businessHours,
        "",
        siteConfig.name,
      ].join("\n"),
      html: renderEmailLayout({
        previewText: `We've received your message and will get back to you shortly at ${contactMessage.phone}.`,
        bodyHtml,
      }),
    });
  } catch (error) {
    console.error("Failed to send contact confirmation email:", error);
  }
}
