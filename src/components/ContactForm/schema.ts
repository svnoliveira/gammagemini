"use client";

import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().optional(),
  email: z.string().email().optional(),
  phone: z.string().optional(),
  message: z.string().optional(),
});

export type TContactForm = z.infer<typeof contactFormSchema>;
