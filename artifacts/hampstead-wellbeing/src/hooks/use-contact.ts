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
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      if (!res.ok) {
        throw new Error("Failed to submit form. Please try again later.");
      }
      
      return res.json();
    },
  });
}
