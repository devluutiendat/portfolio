import React from "react";
import Greeting from "./Greeting";
import Information from "./Information";
import BongoCat from "./bongoCat";

const About = () => {
  return (
    <section id="about">
      <Greeting />
      <div className="gap-16 p-4 md:p-8 lg:p-12 flex flex-col md:flex-row">
        <BongoCat />
        <Information />
      </div>
    </section>
  );
};

export default About;
