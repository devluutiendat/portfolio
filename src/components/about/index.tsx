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
    <section id="about">
      <Greeting />
      <div className="gap-16 p-4 md:p-8 lg:p-12 flex flex-col lg:flex-row">
        <BongoCat />
        <Information />
      </div>
    </section>
  );
};

export default About;
