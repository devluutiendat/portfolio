"use client";
import { User, Goal, Phone, Wrench } from "lucide-react";
import Link from "../ui/Link";
import Bio from "./Bio";
import { information } from "@/data/information";

export default function Information() {
  return (
    <div className="flex flex-col space-y-4 flex-1">
      <div className="space-y-4 text-gray-700 dark:text-gray-300">
        <h1 className="text-2xl font-bold text-black dark:text-white">
          I&apos; {information.author} - a dedicated {information.jobTitle}
        </h1>
        <Bio />

        <p>I was born in the beautiful {information.born}.</p>

        <p>I started learning to code in 2019 when I started college.</p>

        <p>
          I &apos m a final-year IT student with hands-on experience in building
          projects using Ts and Js.
        </p>

        <p>
          I have a passion for JavaScript/Typescript and website development.
        </p>
      </div>

      {/* Navigation Links */}
      <div className="grid grid-cols-2 gap-4 pt-4 sm:text-xl text-sm">
        <Link
          href="/#skills"
          className="flex items-center text-orange gap-2 p-3 rounded-md transition-all border border-orange hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-orange"
        >
          <Wrench className="w-5 h-5 " />
          <span>My Tech Stack</span>
        </Link>

        <Link
          href="/#about"
          className="flex items-center gap-2 text-green p-3 rounded-md transition-all border border-green hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-green"
        >
          <User className="w-5 h-5 " />
          <span>More about me and myself</span>
        </Link>

        <Link
          href="/#contact"
          className="flex items-center gap-2 p-3 text-cyan rounded-md transition-all border border-cyan-500  hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-cyan-700"
        >
          <Phone className="w-5 h-5 " />
          <span>Contact me</span>
        </Link>

        <Link
          href="/#projects"
          className="flex items-center gap-2 p-3 text-pink rounded-md transition-all border border-pink hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-pink"
        >
          <Goal className="w-5 h-5  " />
          <span>My projects</span>
        </Link>
      </div>
    </div>
  );
}
