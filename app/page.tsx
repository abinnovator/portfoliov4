"use client";
import About from "@/components/sections/About";
import Contacts from "@/components/sections/Contacts";
import Expertise from "@/components/sections/Expertise";
import Hero from "@/components/sections/Hero";
import Work from "@/components/sections/Work";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const sections = gsap.utils.toArray(containerRef.current?.children || []);
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
    <main ref={containerRef} className="flex-1 flex flex-col ">
      <Hero />
      <About />
      <Expertise />
      <Work />
      <Contacts />
    </main>
  );
}
