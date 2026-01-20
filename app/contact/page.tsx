"use client";
import Header from "@/components/sections/Header";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Github, Mail, Youtube } from "lucide-react";
import Link from "next/link";
import React, { useRef } from "react";
import Contact from "./_components/ContactForm";
import { AccordionDemo } from "./_components/Faqaccordian";

gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const sections = gsap.utils.toArray(
        ".animate-section",
        containerRef.current
      );
      sections.forEach((section: any) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef}>
      <div className="animate-section flex md:flex-row flex-col px-28 border-x border-b border-dashed border-[#262626] w-screen overflow-x-hidden">
        <div className="w-1/2 py-10 px-7 gap-9 flex flex-col border-r border-l border-dashed border-[#262626]">
          <Header
            title="Contact Me"
            description="Have a question or want to connect? Send a message and expect a response within 3 days."
            titleClassName="font-bold text-3xl sm:text-4xl md:text-[40px] text-white"
            descriptionClassName="text-sm sm:text-base md:text-[16px] text-white max-w-[380px]"
            containerClassName="flex flex-col gap-4"
          />
          <div className="px-4 py-2 flex flex-row gap-8 bg-purple-950 rounded-2xl w-min ">
            <Link
              href="https://www.youtube.com/@ReactMastery-p3f"
              className="text-2xl text-[#424242]"
            >
              <Youtube className="size-6 text-white " />
            </Link>
            <Link
              href="https://github.com/abinnovator"
              className="text-2xl text-[#424242]"
            >
              <Github className="size-6 text-white " />
            </Link>
            <Link
              href="mailto:abtheinnovator@gmail.com"
              className="text-2xl text-[#424242]"
            >
              <Mail className="size-6 text-white " />
            </Link>
          </div>
        </div>
        {/* Contact form */}
        <div className="w-1/2 py-10 px-20  border-r border-dashed border-[#262626]">
          <Contact />
        </div>
      </div>
      <div className="animate-section flex md:flex-row flex-col px-28 border-x border-b border-dashed border-[#262626] w-screen overflow-x-hidden">
        <div className="w-1/2 py-10 px-7 gap-9 flex flex-col border-r border-l border-dashed border-[#262626]">
          <Header
            title="Frequently Asked Questions"
            description="Still have questions? Contact Me"
            titleClassName="font-bold text-3xl sm:text-4xl md:text-[40px] text-white"
            descriptionClassName="text-sm sm:text-base md:text-[16px] text-white max-w-[380px]"
            containerClassName="flex flex-col gap-4"
          />
        </div>
        <div className="w-1/2 py-10 px-20  border-r border-dashed border-[#262626] ">
          <AccordionDemo />
        </div>
      </div>
    </div>
  );
};

export default Page;
