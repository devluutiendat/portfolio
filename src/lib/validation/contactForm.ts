import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z
    .string()
    .regex(/^\+?[0-9\s\-()]{7,}$/, { message: "Please enter a valid phone number" })
    .or(z.literal("")),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
  location: z.string(),
});

export type FormValues = z.infer<typeof formSchema>;
