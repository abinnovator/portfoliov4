"use client";
import ProjectCard from "@/components/ProjectCard";
import Header from "@/components/sections/Header";
import { Projects } from "@/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(containerRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="px-4 sm:px-8 md:px-16 lg:px-28 border-dashed border-[#262626] w-screen overflow-x-hidden"
    >
      <div className="border-x border-b border-dashed border-[#262626] px-4 sm:px-8 md:px-12 lg:px-20 py-6 sm:py-8 lg:py-10 space-y-8">
        <Header
          title="Work"
          description="Check out some of my recent projects and case studies."
          titleClassName="font-bold text-3xl sm:text-4xl md:text-[40px] text-white text-center"
          descriptionClassName="text-sm sm:text-base md:text-[16px] text-white max-w-full sm:max-w-md lg:max-w-[380px] text-center"
          containerClassName="flex flex-col gap-3 sm:gap-4 justify-center items-center px-4 sm:px-8 md:px-12 lg:px-20 py-10 sm:py-14 lg:py-20 border border-[#262626] rounded-md"
        />
        <div className="flex flex-col md:flex-row gap-4 py-2">
          {Projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              desc={project.desc}
              image={project.image}
              id={project.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
