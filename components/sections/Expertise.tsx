import React from "react";
import Header from "./Header";
import { Code } from "lucide-react";
import Image from "next/image";
import TechCard from "./_components/TechCard";
import { TechStack } from "@/constants";
import Seperator from "../Seperator";

const Expertise = () => {
  return (
    <>
      <div className="flex flex-col px-4 sm:px-8 md:px-16 lg:px-28 pt-8 sm:pt-10 md:pt-12 pb-16 sm:pb-24 md:pb-32 gap-6 sm:gap-8 md:gap-10">
        <Header
          title="My Expertise"
          titleClassName="text-3xl sm:text-4xl md:text-[48px] text-white text-center md:text-start"
          description="Focused on building practical projects with modern tools"
          descriptionClassName="text-sm sm:text-base md:text-[18px] text-[#B3B3B3] text-center md:text-start"
        />
        <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-10 border-y border-dashed border-[#262626]">
          <div className="px-4 sm:px-6 py-4 sm:py-6 flex flex-col justify-between min-h-64 sm:min-h-80 md:min-h-96 border-dashed md:border-r border-b md:border-b-0 border-[#262626]">
            <Code className="text-white size-6 sm:size-7 md:size-8" />
            <Header
              title="Web Development"
              description="Building modern web apps with Next.js, React, TypeScript, and UI frameworks"
              titleClassName="text-lg sm:text-xl md:text-[20px] text-white"
              descriptionClassName="text-[#B3B3B3] text-sm sm:text-base md:text-[16px]"
            />
          </div>
          <div className="flex min-h-64 sm:min-h-80 md:min-h-96 justify-center items-center">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-3 max-h-none sm:max-h-64 md:max-h-52">
              {TechStack.map((tech) => (
                <TechCard
                  key={tech.name}
                  name={tech.name}
                  imageUrl={tech.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Seperator />
    </>
  );
};

export default Expertise;
