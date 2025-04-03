"use client";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { bioStrings } from "@/data/bio";

const Bio = () => {
  const el = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (el.current) {
      const typed = new Typed(el.current, {
        strings: bioStrings,
        typeSpeed: 50,
        backSpeed: 25,
        loop: true,
        backDelay: 1000,
      });

      return () => typed.destroy();
    }
  }, []);

  return (
    <div className="flex">
      <span
        ref={el}
        className="text-neutral-900 dark:text-neutral-500 flex gap-2 items-center h-6"
      ></span>
    </div>
  );
};

export default Bio;
