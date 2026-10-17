import { Router, type IRouter } from "express";
import { getResendClient } from "../lib/resend";

const router: IRouter = Router();

const HW_EMAIL = process.env.CONTACT_TO_EMAIL || "hampsteadwellbeing@gmail.com";

const escapeHtml = (value: unknown) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

router.post("/contact", async (req, res) => {
  const body = req.body ?? {};
  const { email } = body;
  const name = escapeHtml(body.name ?? "");
  const subject = escapeHtml(body.subject ?? "");
  const message = escapeHtml(body.message ?? "");
  const safeEmail = escapeHtml(email ?? "");
  const plainSubject = String(body.subject ?? "").replace(/[\r\n]+/g, " ");
  const plainName = String(body.name ?? "").replace(/[\r\n]+/g, " ");

  if (!name || !email || !subject || !message) {
    res.status(400).json({ success: false, error: "All fields are required" });
    return;
  }

  if (typeof email !== "string" || !email.includes("@")) {
    res.status(400).json({ success: false, error: "Invalid email address" });
    return;
  }

  try {
    const { client, fromEmail } = getResendClient();

    const { error } = await client.emails.send({
      from: fromEmail,
      to: HW_EMAIL,
      replyTo: email,
      subject: `[Hampstead Wellbeing] ${plainSubject} — from ${plainName}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #2C1F14;">
          <div style="background: #FAF8F4; border-bottom: 3px solid #C8A951; padding: 28px 32px 20px;">
            <p style="margin:0; font-size:11px; letter-spacing:0.18em; text-transform:uppercase; color:#8B7355;">Hampstead Wellbeing</p>
            <h1 style="margin: 8px 0 0; font-size: 22px; font-weight: 500;">New Enquiry: ${subject}</h1>
          </div>
          <div style="padding: 28px 32px;">
            <table style="width:100%; border-collapse:collapse; margin-bottom:24px;">
              <tr>
                <td style="padding:8px 0; font-size:12px; letter-spacing:0.1em; text-transform:uppercase; color:#8B7355; width:80px;">Name</td>
                <td style="padding:8px 0; font-size:15px;">${name}</td>
              </tr>
              <tr>
                <td style="padding:8px 0; font-size:12px; letter-spacing:0.1em; text-transform:uppercase; color:#8B7355;">Email</td>
                <td style="padding:8px 0; font-size:15px;"><a href="mailto:${safeEmail}" style="color:#8B7355;">${safeEmail}</a></td>
              </tr>
              <tr>
                <td style="padding:8px 0; font-size:12px; letter-spacing:0.1em; text-transform:uppercase; color:#8B7355;">Subject</td>
                <td style="padding:8px 0; font-size:15px;">${subject}</td>
              </tr>
            </table>
            <div style="background:#F5EFE6; border-left:3px solid #C8A951; padding:16px 20px; border-radius:4px;">
              <p style="margin:0 0 6px; font-size:11px; letter-spacing:0.1em; text-transform:uppercase; color:#8B7355;">Message</p>
              <p style="margin:0; font-size:15px; line-height:1.7; white-space:pre-wrap;">${message}</p>
            </div>
            <p style="margin-top:24px; font-size:12px; color:#8B7355;">
              Reply directly to this email to respond to ${name}.
            </p>
          </div>
          <div style="background:#FAF8F4; padding:16px 32px; border-top:1px solid #e8e0d4;">
            <p style="margin:0; font-size:11px; color:#8B7355; letter-spacing:0.08em;">Hampstead Wellbeing Ltd · Reg. 15583591 · hampsteadwellbeing.com</p>
          </div>
        </div>
      `,
    });

    if (error) {
      throw new Error(error.message);
    }

    req.log.info({ subject }, "Contact email sent via Resend");
    res.json({ success: true, message: "Thank you for your message. We'll be in touch soon." });

  } catch (err: any) {
    req.log.error({ err: err.message }, "Failed to send contact email");
    res.status(500).json({ success: false, error: "Failed to send message. Please try again." });
  }
});

export default router;
