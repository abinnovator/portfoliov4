import React from "react";
import Header from "./Header";
import { buttonVariants } from "../ui/button";
import Link from "next/link";
import Seperator from "../Seperator";

const Contacts = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-8 py-20">
      <Header
        title="Let's Work Together"
        titleClassName="text-4xl text-white font-bold text-center"
        description="I'm always open to new opportunities and collaborations. Whether you have a project in mind or just want to say hi, feel free to reach out!"
        descriptionClassName="text-[#9B9B9B] font-light text-center max-w-[606px]"
        containerClassName=" flex flex-col gap-4"
      />
      <div className="flex flex-row gap-2 justify-center items-center">
        <Link
          href={"/contact"}
          className={buttonVariants({
            variant: "default",
            className:
              "bg-white text-black hover:bg-white hover:cursor-pointer hover:shadow-2xl",
          })}
        >
          <p className="text-black"> Contact Me</p>
        </Link>
        {/* <Link
          href={"/projects"}
          className={buttonVariants({
            variant: "default",
            className:
              "bg-linear-to-r from-[#1F51FF] to-[#133199] hover:bg-white hover:cursor-pointer hover:shadow-2xl text-white",
          })}
        >
          <p className="text-white"> Hire Me</p>
        </Link> */}
      </div>
      <Seperator />
    </div>
  );
};

export default Contacts;
