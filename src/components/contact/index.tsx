"use client";

import dynamic from "next/dynamic";
import Loading from "@/app/loading";
import { useEffect, useState } from "react";
import { api } from "@/lib/api";

const ContactForm = dynamic(() => import("./ContactForm"), {
  loading: () => <Loading />,
  ssr: false,
});

const ThankYou = dynamic(() => import("./ThankYou"), {
  loading: () => <Loading />,
});

export default function Contact() {
  const [lastSent, setLastSent] = useState<number>(0);

  // Fetch lastSent from API
  useEffect(() => {
    const checkLastSent = async () => {
      try {
        const res = await api.get("/user");
        const x = new Date(res.data.data.lastSent);
        const now = Date.now();
        const diffInMs = now - x.getTime();
        const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
        setLastSent(diffInDays);
        console.log(process.env.AUTH_URL);
      } catch (err) {
        console.error("Failed to fetch last sent:", err);
      }
    };
    checkLastSent();
  }, []);

  return (
    <section id="contact">
      <h2 className="text-3xl font-bold mb-6 text-black dark:text-orange text-center">
        Contact Me
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 border dark:border-cyan rounded-lg shadow-lg overflow-hidden">
        {lastSent > 7 ? (
          <ContactForm />
        ) : (
          <div
            className=" text-center flex items-center to-slate-400 bg-gradient-to-l from-blue-800 to-primary-600
            mb-8 bg-clip-text text-4xl font-extrabold leading-[60px] tracking-tight text-transparent md:text-7xl md:leading-[86px]
          "
          >
            Thank for comming
          </div>
        )}
        <ThankYou />
      </div>
    </section>
  );
}
