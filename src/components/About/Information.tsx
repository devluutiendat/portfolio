import siteMetadata from "@/data/siteMetadata";
import { User, Goal, Phone, Wrench } from "lucide-react";
import Link from "../ui/Link";
import Bio from "./Bio";
import BongoCat from "./bongoCat";

export default function Information() {
  return (
    <main className="gap-16 p-4 md:p-8 lg:p-12 flex flex-col md:flex-row">
      <BongoCat />

      <div className="flex flex-col space-y-4 flex-1">
        <div className="space-y-4 text-gray-700 dark:text-gray-300">
          <h1 className="text-2xl font-bold text-black dark:text-white">
            I&apos; {siteMetadata.author} - a dedicated {siteMetadata.jobTitle}
          </h1>
          <Bio />

          <p>I was born in the beautiful {siteMetadata.born}.</p>

          <p>I started learning to code in 2019 when I started college.</p>

          <p>I landed my first job as a Back-end Developer in 2021.</p>

          <p>
            I have a passion for JavaScript/Typescript and website development.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-4">
          <Link
            href="/writings"
            className="flex items-center text-orange gap-2 p-3 rounded-md transition-all border border-orange hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-orange"
          >
            <Wrench className="w-5 h-5 " />
            <span>My Tech Stack</span>
          </Link>

          <Link
            href="/about"
            className="flex items-center gap-2 text-green p-3 rounded-md transition-all border border-green hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-green"
          >
            <User className="w-5 h-5 " />
            <span>More about me and myself</span>
          </Link>

          <Link
            href="/projects"
            className="flex items-center gap-2 p-3 text-cyan rounded-md transition-all border border-cyan-500  hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-cyan-700"
          >
            <Phone className="w-5 h-5 " />
            <span>Contact me</span>
          </Link>

          <Link
            href="/career"
            className="flex items-center gap-2 p-3 text-pink rounded-md transition-all border border-pink hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-pink"
          >
            <Goal className="w-5 h-5  " />
            <span>Goals and Roadmap</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
