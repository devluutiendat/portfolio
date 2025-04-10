"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { contact } from "@/lib/send-email";
import { useFormStatus } from "react-dom";
import { useActionState } from "react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z
    .string()
    .regex(/^\+?[0-9\s\-()]{7,}$/, {
      message: "Please enter a valid phone number",
    })
    .or(z.literal("")),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" }),
  location: z.string(),
});

type FormValues = z.infer<typeof formSchema>;

async function formAction(prevState: any, formData: FormData) {
  try {
    const data = Object.fromEntries(formData) as FormValues;
    await contact(data);
    return { success: true, error: null };
  } catch (error) {
    console.error("Failed to send contact form:", error);
    return {
      success: false,
      error: "Something went wrong. Please try again later.",
    };
  }
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full bg-cyan text-white font-medium rounded-lg px-4 py-3 mt-4 hover:bg-cyan/80 transition disabled:opacity-50"
    >
      {pending ? "Sending..." : "Send Message"}
    </button>
  );
}

export default function ContactForm() {
  const [state, formActionDispatch] = useActionState(formAction, {
    success: false,
    error: null,
  });

  const {
    register,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const inputBase =
    "w-full px-4 py-2 border-b border-cyan bg-transparent focus-visible:ring-green focus-visible:ring-2 focus-visible:outline-none transition";

  return (
    <form
      action={formActionDispatch}
      className="p-6 sm:p-8 space-y-6 max-w-2xl w-full shadow-lg rounded-lg dark:bg-backgroundCat border dark:border-cyan mx-auto"
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-black dark:text-orange text-center">
        Leave your information
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Name */}
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="block font-semibold text-sm dark:text-cyan text-black"
          >
            Name
          </label>
          <input
            id="name"
            aria-invalid={!!errors.name}
            aria-describedby="name-error"
            {...register("name")}
            className={`${inputBase} ${errors.name ? "border-b-red-500" : ""}`}
          />
          {errors.name && (
            <p id="name-error" className="text-sm text-red-500">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block font-semibold text-sm dark:text-cyan text-black"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            aria-invalid={!!errors.email}
            aria-describedby="email-error"
            {...register("email")}
            className={`${inputBase} ${errors.email ? "border-b-red-500" : ""}`}
          />
          {errors.email && (
            <p id="email-error" className="text-sm text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Phone */}
        <div className="space-y-2">
          <label
            htmlFor="phone"
            className="block font-semibold text-sm dark:text-cyan text-black"
          >
            Phone
          </label>
          <input
            id="phone"
            placeholder="+1234567890"
            aria-invalid={!!errors.phone}
            aria-describedby="phone-error"
            {...register("phone")}
            className={`${inputBase} ${errors.phone ? "border-b-red-500" : ""}`}
          />
          {errors.phone && (
            <p id="phone-error" className="text-sm text-red-500">
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* Location */}
        <div className="space-y-2">
          <label
            htmlFor="location"
            className="block font-semibold text-sm dark:text-cyan text-black"
          >
            Location
          </label>
          <input
            id="location"
            placeholder="City, Country"
            {...register("location")}
            className={inputBase}
          />
        </div>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <label
          htmlFor="message"
          className="block font-semibold text-sm dark:text-cyan text-black"
        >
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="Your message here..."
          aria-invalid={!!errors.message}
          aria-describedby="message-error"
          {...register("message")}
          className={`${inputBase} ${errors.message ? "border-b-red-500" : ""}`}
        />
        {errors.message && (
          <p id="message-error" className="text-sm text-red-500">
            {errors.message.message}
          </p>
        )}
      </div>

      <SubmitButton />

      {state.success && (
        <p className="text-green-500 text-center font-medium">
          Message sent successfully!
        </p>
      )}
      {state.error && (
        <p className="text-red-500 text-center font-medium">{state.error}</p>
      )}
    </form>
  );
}
