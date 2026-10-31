"use server";

import nodemailer from "nodemailer";
import { EMAIL } from "@/lib/constants";

export async function handleContact(
  _prevState: { success: boolean; error?: string } | null,
  formData: FormData
): Promise<{ success: boolean; error?: string }> {
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  const business = String(formData.get("business") || "").trim();
  const service = String(formData.get("service") || "").trim();
  const budget = String(formData.get("budget") || "").trim();
  const message = String(formData.get("message") || "").trim();

  const submission = { name, email, phone, business, service, budget, message };
  console.log("=== [New Contact Form Submission] ===", submission);

  // Email credentials from environment
  const authUser = process.env.EMAIL_USER || process.env.GMAIL_USER || EMAIL;
  const authPass = process.env.EMAIL_PASS || process.env.GMAIL_APP_PASSWORD || process.env.SMTP_PASSWORD;

  if (authPass) {
    try {
      const transporter = process.env.SMTP_HOST
        ? nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT || 587),
            secure: process.env.SMTP_SECURE === "true",
            auth: {
              user: authUser,
              pass: authPass,
            },
          })
        : nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: authUser,
              pass: authPass,
            },
          });

      const formattedDate = new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        dateStyle: "full",
        timeStyle: "medium",
      });

      const textBody = `New Project Inquiry from S Solutions Website:

--------------------------------------------------
LEAD DETAILS
--------------------------------------------------
Name:            ${name}
Email:           ${email || "Not provided"}
Phone / WhatsApp: ${phone || "Not provided"}
Business / Brand: ${business || "Not provided"}
Service Needed:  ${service || "Not specified"}
Budget Range:    ${budget || "Not specified"}

--------------------------------------------------
MESSAGE
--------------------------------------------------
${message}

--------------------------------------------------
Submitted on: ${formattedDate} IST
Notification sent to: ${EMAIL}
`;

      const htmlBody = `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 620px; margin: 0 auto; padding: 28px; border: 1px solid #E2DDD6; border-radius: 16px; background-color: #FDFBF7;">
          <div style="border-bottom: 3px solid #2E6B4E; padding-bottom: 16px; margin-bottom: 24px;">
            <span style="display: inline-block; background-color: rgba(46,107,78,0.1); color: #2E6B4E; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; padding: 4px 10px; border-radius: 12px; margin-bottom: 8px;">
              New Project Inquiry
            </span>
            <h2 style="color: #1C2826; margin: 0; font-size: 24px; font-weight: 700;">
              Lead: ${name}
            </h2>
            <p style="color: #5A6B65; margin: 4px 0 0; font-size: 14px;">
              Submitted through the S Solutions contact form
            </p>
          </div>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #E2DDD6; color: #5A6B65; width: 35%; font-size: 14px; font-weight: 600;">Client Name:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #E2DDD6; color: #1C2826; font-size: 15px; font-weight: 700;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #E2DDD6; color: #5A6B65; font-size: 14px; font-weight: 600;">Email Address:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #E2DDD6; font-size: 14px;">
                <a href="mailto:${email}" style="color: #2E6B4E; text-decoration: none; font-weight: 600;">${email || "Not provided"}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #E2DDD6; color: #5A6B65; font-size: 14px; font-weight: 600;">Phone / WhatsApp:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #E2DDD6; color: #1C2826; font-size: 14px; font-weight: 500;">
                ${phone ? `<a href="tel:${phone}" style="color: #1C2826; text-decoration: none;">${phone}</a>` : "Not provided"}
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #E2DDD6; color: #5A6B65; font-size: 14px; font-weight: 600;">Business / Brand:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #E2DDD6; color: #1C2826; font-size: 14px;">${business || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #E2DDD6; color: #5A6B65; font-size: 14px; font-weight: 600;">Service Interested In:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #E2DDD6; color: #2E6B4E; font-size: 14px; font-weight: 600;">${service || "Not specified"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #E2DDD6; color: #5A6B65; font-size: 14px; font-weight: 600;">Budget Range:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #E2DDD6; color: #1C2826; font-size: 14px; font-weight: 600;">${budget || "Not specified"}</td>
            </tr>
          </table>

          <div style="background-color: #F4F0EA; border-radius: 12px; padding: 18px; margin-bottom: 24px;">
            <p style="margin: 0 0 8px; color: #5A6B65; font-size: 12px; text-transform: uppercase; font-weight: 700; letter-spacing: 0.5px;">
              Project Message:
            </p>
            <p style="margin: 0; color: #1C2826; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message || "No message provided."}</p>
          </div>

          <div style="text-align: center; color: #5A6B65; font-size: 12px; border-top: 1px solid #E2DDD6; padding-top: 16px;">
            Inquiry delivered to <strong>${EMAIL}</strong><br />
            Received on ${formattedDate} IST
          </div>
        </div>
      `;

      await transporter.sendMail({
        from: `"S Solutions Inquiries" <${authUser}>`,
        to: EMAIL,
        replyTo: email || undefined,
        subject: `[New Inquiry] ${name} - ${service || "Project Lead"}`,
        text: textBody,
        html: htmlBody,
      });

      console.log(`[Success] Inquiry email delivered to ${EMAIL} from ${name} (${email})`);
    } catch (err) {
      console.error("[Email Error] Failed to send email via nodemailer:", err);
    }
  } else {
    console.warn(
      `[Email Config Notice] GMAIL_APP_PASSWORD or EMAIL_PASS environment variable is not set. Submission logged to console. To enable direct email delivery to ${EMAIL}, add GMAIL_APP_PASSWORD to .env.local`
    );
  }

  // Small delay for smooth UX transition
  await new Promise((r) => setTimeout(r, 400));
  return { success: true };
}
