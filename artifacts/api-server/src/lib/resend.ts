import { Resend } from "resend";

// Settings come from Render's Environment:
//   RESEND_API_KEY     – required, the API key from resend.com
//   RESEND_FROM_EMAIL  – optional, e.g. "Hampstead Wellbeing <hello@hampsteadwellbeing.com>"
//                        once hampsteadwellbeing.com is verified in Resend.
//   CONTACT_TO_EMAIL   – optional, where enquiries are delivered.
export function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not set");
  }

  return {
    client: new Resend(apiKey),
    fromEmail:
      process.env.RESEND_FROM_EMAIL ||
      "Hampstead Wellbeing Website <onboarding@resend.dev>",
  };
}
