"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { handleContact } from "@/actions/contact";
import { formSchema, type FormValues } from "@/lib/validation/contactForm";
import { useState } from "react";

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [submitResult, setSubmitResult] = useState<{
    success: boolean;
    message: string | null;
  }>({ success: false, message: null });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    setIsLoading(true);
    setSubmitResult({ success: false, message: null });

    try {
      const result = await handleContact(data);
      setSubmitResult({
        success: result.success,
        message: result.success
          ? "Message sent successfully!"
          : result.error || "Failed to send message",
      });
      if (result.success) reset();
    } catch {
      setSubmitResult({
        success: false,
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setIsLoading(false);
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
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="block font-semibold text-sm dark:text-cyan text-black"
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
            {...register("email")}
            className={`${inputBase} ${errors.email ? "border-b-red-500" : ""}`}
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
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
            {...register("phone")}
            className={`${inputBase} ${errors.phone ? "border-b-red-500" : ""}`}
          />
          {errors.phone && (
            <p className="text-sm text-red-500">{errors.phone.message}</p>
          )}
        </div>

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
          {...register("message")}
          className={`${inputBase} ${errors.message ? "border-b-red-500" : ""}`}
        />
        {errors.message && (
          <p className="text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-cyan text-white font-medium rounded-lg px-4 py-3 mt-4 hover:bg-cyan/80 transition disabled:opacity-50"
      >
        {isLoading ? "Sending..." : "Send Message"}
      </button>

      {submitResult.message && (
        <p
          className={`text-center font-medium ${
            submitResult.success ? "text-green-500" : "text-red-500"
          }`}
        >
          {submitResult.message}
        </p>
      )}
    </form>
  );
}
