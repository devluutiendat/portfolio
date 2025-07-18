"use client";
import Loading from "@/app/loading";
import Greeting from "./Greeting";
import dynamic from "next/dynamic";
import Information from "./Information";

const BongoCat = dynamic(() => import("./bongoCat"), {
  ssr: false,
  loading: () => <Loading />,
});
const About = () => {
  return (
    <section id="about" className="p-4 md:p-8 lg:p-12">
      <Greeting />
      <div className="gap-16 flex flex-col lg:flex-row">
        <BongoCat />
        <Information />
      </div>
    </section>
  );
};

export default About;
