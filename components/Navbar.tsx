"use client";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Github, Youtube } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import MobileSidebar from "./MobileSidebar";

const Navbar = () => {
  const pathname = usePathname();
  const containerRef = React.useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(containerRef.current?.children || [], {
        y: -20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="border-dashed border-b border-[#262626] flex flex-row justify-between items-center w-full px-8 md:px-28 py-4 sticky top-0 bg-[#131313] z-50"
    >
      <Link
        href="/"
        className="text-[16px] font-bold text-white text-center flex-start md:text-start"
      >
        Aadit Bhambri
      </Link>
      <nav className="md:flex md:flex-row md:gap-10 hidden justify-center items-center">
        <Link
          href="/contact"
          className={cn(
            "text-[20px]",
            pathname === "/contact" ? "text-blue-700" : "text-[#424242]"
          )}
        >
          Contact
        </Link>
        <Link
          href="/work"
          className={cn(
            "text-[20px]",
            pathname === "/work" ? "text-blue-700" : "text-[#424242]"
          )}
        >
          Work
        </Link>
      </nav>
      <div className="md:flex md:flex-row md:gap-4 hidden">
        <Link
          href="https://www.youtube.com/@ReactMastery-p3f"
          className={"text-2xl text-[#424242]"}
        >
          <Youtube className="size-6 text-white " />
        </Link>
        <Link
          href="https://github.com/abinnovator"
          className="text-2xl text-[#424242]"
        >
          <Github className="size-6 text-white " />
        </Link>
      </div>
      <div className="flex md:hidden">
        <MobileSidebar />
      </div>
    </div>
  );
};

export default Navbar;
