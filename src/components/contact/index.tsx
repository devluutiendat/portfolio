"use client";

import dynamic from "next/dynamic";
import Loading from "@/app/loading";

const ContactForm = dynamic(() => import("./ContactForm"), {
  loading: () => <Loading />,
  ssr: false,
});

const ThankYou = dynamic(() => import("./ThankYou"), {
  loading: () => <Loading />,
  ssr: false,
});

export default function Contact() {
  return (
    <section id="contact">
      <h2 className="text-3xl font-bold mb-6 text-black dark:text-orange text-center">
        Contact Me
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 border dark:border-cyan rounded-lg shadow-lg overflow-hidden">
        <ContactForm />
        <ThankYou />
      </div>
    </section>
  );
}
