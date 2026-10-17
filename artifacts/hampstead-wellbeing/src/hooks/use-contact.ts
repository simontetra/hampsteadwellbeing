import { useMutation } from "@tanstack/react-query";
import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name is required (at least 2 characters)"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.enum([
    "General Enquiry",
    "Education",
    "Wellbeing",
    "Partnerships",
    "Other"
  ], {
    errorMap: () => ({ message: "Please select a valid subject" })
  }),
  message: z.string().min(10, "Please provide a more detailed message (at least 10 characters)")
});

export type ContactFormData = z.infer<typeof contactSchema>;

export function useContact() {
  return useMutation({
    mutationFn: async (data: ContactFormData) => {
      // Sent via Web3Forms (free form-to-email service) so the site needs no server,
      // the same as annameka.com. The access key is set as VITE_WEB3FORMS_ACCESS_KEY
      // in Render; it is safe to be public.
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          subject: `[Hampstead Wellbeing] ${data.subject} — from ${data.name}`,
          from_name: "Hampstead Wellbeing Website",
          name: data.name,
          email: data.email,
          enquiry_subject: data.subject,
          message: data.message,
        }),
      });

      const result = await res.json().catch(() => ({}));

      if (!res.ok || !result.success) {
        throw new Error("Failed to submit form. Please try again later.");
      }

      return result;
    },
  });
}
