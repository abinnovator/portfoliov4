import Image from "next/image";
import React from "react";
import Seperator from "../Seperator";
import Header from "./Header";

const About = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col gap-1.5 text-white px-4 sm:px-8 md:px-16 lg:px-28 pt-8 sm:pt-10 md:pt-12 pb-16 sm:pb-24 md:pb-32 border border-y border-dashed border-[#262626]">
          <Header
            title="About Me"
            description="Focused on building practical projects with modern tools"
            titleClassName="font-bold text-3xl sm:text-4xl md:text-[40px]"
            descriptionClassName="text-sm sm:text-base md:text-[16px]"
          />
        </div>
        <div className="flex justify-center items-center w-full lg:max-w-[720px] px-4 sm:px-8 md:px-16 lg:px-0 py-8 sm:py-12 lg:py-0">
          <p className="text-white text-sm sm:text-base md:text-[16px] max-w-full sm:max-w-lg lg:max-w-[481px]">
            I am a versatile Developer working at the intersection of Web
            Development and Hardware Engineering. With a technical foundation
            spanning Python, Godot 4, and Full-Stack web technologies, I
            specialize in building systems that bridge the gap between digital
            software and physical devices.
          </p>
        </div>
      </div>
      <Seperator />
    </>
  );
};

export default About;
