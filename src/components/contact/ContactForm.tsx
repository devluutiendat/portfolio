"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { contact } from "@/lib/send-email";

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

export default function ContactForm() {
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      location: "",
    },
  });

  useEffect(() => {
    const subscription = watch(() => {
      if (isSubmitSuccessful) setIsSubmitSuccessful(false);
      if (submitError) setSubmitError("");
    });
    console.log("this use effect");
    return () => subscription.unsubscribe();
  }, [watch, isSubmitSuccessful, submitError]);

  const onSubmit = async (data: FormValues) => {
    try {
      await contact(data);
      reset();
      setIsSubmitSuccessful(true);
    } catch (error) {
      console.error("Failed to send contact form:", error);
      setSubmitError("Something went wrong. Please try again later.");
    }
  };

  const inputBase =
    "w-full px-4 py-2 border-b border-cyan bg-transparent focus-visible:ring-green focus-visible:ring-2 focus-visible:outline-none transition";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
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
            Phone <span className="text-gray-500">(optional)</span>
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

      {!isSubmitSuccessful ? (
        <button
          type="submit"
          disabled={isSubmitting || isSubmitSuccessful}
          className="w-full bg-cyan text-white font-medium rounded-lg px-4 py-3 mt-4 hover:bg-cyan/80 transition disabled:opacity-50"
        >
          {isSubmitting || isSubmitSuccessful ? "Sending..." : "Send Message"}
        </button>
      ) : (
        <p className="text-green-500 text-center font-medium">
          Message sent successfully!
        </p>
      )}
      {submitError && (
        <p className="text-red-500 text-center font-medium">{submitError}</p>
      )}
    </form>
  );
}
