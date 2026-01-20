import Image from "next/image";
import { Button, buttonVariants } from "../ui/button";
import Seperator from "../Seperator";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center flex-1 px-4 sm:px-8 md:px-16 lg:px-28 bg-[url(/Hero_Background.png)] bg-cover py-20 sm:py-28 md:py-40">
        <div className="flex flex-col gap-4 sm:gap-6 justify-center items-center text-center">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 sm:mb-4 md:mb-6">
            Hey! I&apos;m Aadit
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-center max-w-xs sm:max-w-md md:max-w-2xl mb-6 sm:mb-8 text-white px-4">
            I&apos;m a 13 year old full-stack developer who blends design and
            development to build beautiful, functional websites.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0">
          <Link
            className={buttonVariants({
              variant: "default",
              className:
                "bg-gray-200 text-black px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-base sm:text-lg font-medium hover:bg-gray-300 transition-colors w-full sm:w-auto",
            })}
            href="/work"
          >
            See work
          </Link>
          {/* <Button className="bg-gradient-to-r from-[#1F51FF] to-[#133199] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-base sm:text-lg font-medium hover:opacity-90 transition-opacity cursor-pointer w-full sm:w-auto">
            Hire Now
          </Button> */}
        </div>
      </div>
      <Seperator />
    </>
  );
};

export default Hero;
