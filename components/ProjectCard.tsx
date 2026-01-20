import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowUpRight } from "lucide-react"; // Optional: for a nicer arrow

const ProjectCard = ({
  title,
  desc,
  image,
  id,
}: {
  title: string;
  desc: string;
  image: string;
  id: string;
}) => {
  return (
    <div className="group flex flex-col gap-5 bg-transparent transition-all duration-300">
      {/* Image Container with Hover Effect */}
      <div className="relative overflow-hidden rounded-xl bg-[#1a1a1a] aspect-video">
        <Image
          src={image}
          alt={title}
          width={591}
          height={332}
          className="object-cover  transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white tracking-tight">
          {title}
        </h2>
        <p className="text-[#a1a1a1] leading-relaxed text-sm lg:text-base max-w-[500px]">
          {desc}
        </p>

        {/* Link Styled like the image */}
        <Link
          href={`/work/${id}`}
          className="flex items-center gap-1 text-sm font-medium text-[#a1a1a1] transition-colors hover:text-white mt-2"
        >
          View case study
          <span className="text-lg leading-none">→</span>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
