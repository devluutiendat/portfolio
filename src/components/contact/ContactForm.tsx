"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z
    .string()
    .regex(/^\+?[0-9\s\-()]{7,}$/, {
      message: "Please enter a valid phone number",
    })
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" }),
  location: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
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

  const onSubmit = async (data: FormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form submitted:", data);
    reset();
    setIsSubmitSuccessful(true);
  };

  const inputBase =
    "w-full px-4 py-2 border-b border-cyan bg-transparent focus-visible:ring-green focus-visible:ring-2 focus-visible:outline-none transition";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-6 sm:p-8 space-y-6 max-w-2xl w-full shadow-lg rounded-lg bg-backgroundCat border border-cyan mx-auto"
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-orange text-center">
        Leave your information
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Name */}
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="block font-semibold text-sm text-cyan"
          >
            Name
          </label>
          <input
            id="name"
            {...register("name")}
            className={`${inputBase} ${errors.name ? "border-b-red-500" : ""}`}
          />
          {errors.name && (
            <p className="text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block font-semibold text-sm text-cyan"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className={`${inputBase} ${errors.email ? "border-b-red-500" : ""}`}
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Phone */}
        <div className="space-y-2">
          <label
            htmlFor="phone"
            className="block font-semibold text-sm text-cyan"
          >
            Phone
          </label>
          <input
            id="phone"
            placeholder="+1234567890"
            {...register("phone")}
            className={`${inputBase} ${errors.phone ? "border-b-red-500" : ""}`}
          />
          {errors.phone && (
            <p className="text-sm text-red-500">{errors.phone.message}</p>
          )}
        </div>

        {/* Location */}
        <div className="space-y-2">
          <label
            htmlFor="location"
            className="block font-semibold text-sm text-cyan"
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
          className="block font-semibold text-sm text-cyan"
        >
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="Your message here..."
          {...register("message")}
          className={`${inputBase} ${errors.message ? "border-b-red-500" : ""}`}
        />
        {errors.message && (
          <p className="text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-cyan text-white font-medium rounded-lg px-4 py-3 mt-4 hover:bg-cyan/80 transition disabled:opacity-50"
      >
        {isSubmitting || isSubmitSuccessful ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
