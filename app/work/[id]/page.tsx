import Header from "@/components/sections/Header";
import { Button, buttonVariants } from "@/components/ui/button";
import { Projects } from "@/constants";
import { GithubIcon, Globe, Network } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const project = Projects.find((project) => project.id === id);
  console.log(project);

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-28 py-6 sm:py-8 lg:py-10 border-x border-[#262626] w-screen overflow-x-hidden">
      <div className="p-3 sm:p-4 lg:p-5 border border-[#262626] border-dashed">
        <div className="px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8 lg:py-10 border-2 rounded-md border-gray-500 flex flex-col bg-[#191919] gap-4 sm:gap-6 lg:gap-8 justify-center items-center">
          <Image
            src={project?.image || ""}
            alt={project?.title || ""}
            width={500}
            height={300}
            className="object-cover w-full h-full rounded-md transition-transform duration-500 group-hover:scale-105"
          />
          <Header
            title={project?.title || ""}
            description={project?.desc || ""}
            titleClassName="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center"
            descriptionClassName="text-[#a1a1a1] leading-relaxed text-sm lg:text-base text-center max-w-full sm:max-w-md lg:max-w-[450px] px-4 sm:px-0"
            containerClassName="flex flex-col gap-2 items-center justify-center"
          />
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 w-full sm:w-auto px-4 sm:px-0">
            <Link
              href={project?.website || ""}
              className={buttonVariants({
                variant: "default",
                className: "bg-[#262626] w-full sm:w-auto",
              })}
            >
              <Globe className="size-4" /> Visit Website
            </Link>
            <Link
              href={project?.github || ""}
              className={buttonVariants({
                variant: "default",
                className: "bg-[#262626] w-full sm:w-auto",
              })}
            >
              <GithubIcon className="size-4" /> Visit Source
            </Link>
          </div>
        </div>
      </div>
      <div className="p-3 sm:p-4 lg:p-5 border border-[#262626] border-dashed">
        <p className="text-white text-sm sm:text-base leading-relaxed">
          {project?.caseStudy}
        </p>
      </div>
    </div>
  );
};

export default page;
