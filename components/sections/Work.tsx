import React from "react";
import Header from "./Header";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";
import Seperator from "../Seperator";

const Work = () => {
  return (
    <>
      <div className="flex flex-col md:px-28 pt-12 pb-32 gap-10">
        <div className=" pb-10">
          <Header
            title="My Work"
            titleClassName="text-[48px] text-white"
            description="A snapshot of recent projects and collaborations"
            descriptionClassName="text-[#B3B3B3] text-[18px]"
          />
        </div>
        {/* Project Bento Grid */}
        <div className="border-dashed border-[#666666]/20 border">
          {/* Main Project Card */}
          <div className="bg-[#191919]/50 flex md:flex-row flex-col items-center flex-between justify-center md:gap-42 py-3">
            <Image
              src={"/Background.png"}
              alt="Background"
              width={591}
              height={332}
            />
            <div className="flex flex-col">
              <Header
                title="LMS Platform"
                description="I built ReactMastery to be the resource I wish I had when I started: fast, structured, and focused on the modern stack. Leveraging the power of Next.js 15 and Stripe, this platform bridges the gap between watching a video and actually shipping code. Every lesson is designed to help you master the React ecosystem with zero fluff. Welcome to the proper way to learn web development."
                titleClassName="text-[20px] text-white"
                descriptionClassName="text-[#B3B3B3] text-white text-[14px] max-w-[481px]"
              />
              <p className="text-[#B3B3B3] text-[14px] flex flex-row items-center gap-2">
                View Case Study <ArrowRight />
              </p>
            </div>
          </div>
          {/* Project Cards */}
          <div className="flex flex-row justify-between">
            <div className="flex flex-row items-center justify-between px-6 py-11">
              <div className="flex flex-col gap-4">
                <Image
                  src={"/CareerPath.png"}
                  alt="career path"
                  className=""
                  width={590}
                  height={332}
                />
                <Header
                  title="Career Path"
                  description="An ai platform for students to plan tasks, take mock inteviews and take notes. Made with NEXT.JS, REACT, FIREBASE, Vapi"
                  titleClassName="text-[20px] text-white"
                  descriptionClassName="text-[#B3B3B3] text-white text-[14px] max-w-[481px]"
                />
                <p className="text-[#B3B3B3] text-[14px] flex flex-row items-center gap-2">
                  View Case Study <ArrowRight />
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between px-6 py-11">
              <div className="flex flex-col gap-4">
                <Image
                  src={"/image.png"}
                  alt="career path"
                  className=""
                  width={590}
                  height={332}
                />
                <Header
                  title="ScoutHub"
                  description="No hidden fees or subscription required. Upload your videos and get feedback from our AI powered feedback system"
                  titleClassName="text-[20px] text-white"
                  descriptionClassName="text-[#B3B3B3] text-white text-[14px] max-w-[481px]"
                />
                <p className="text-[#B3B3B3] text-[14px] flex flex-row items-center gap-2">
                  View Case Study <ArrowRight />
                </p>
              </div>
            </div>
          </div>
        </div>
        <Link
          href={"/projects"}
          className={buttonVariants({
            variant: "default",
            className:
              "w-full bg-white text-black hover:bg-white hover:cursor-pointer hover:shadow-2xl",
          })}
        >
          <p className="text-black"> All Projects</p>
          <ArrowRight className="text-black" />
        </Link>
      </div>
      <Seperator />
    </>
  );
};

export default Work;
