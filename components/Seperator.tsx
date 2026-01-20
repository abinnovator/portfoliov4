"use client";
import React from "react";
import Image from "next/image";
import { useWindowWidth } from "@/hooks/use-width";

const Seperator = () => {
  const width = useWindowWidth();
  return <Image src="/Spacer.png" alt="" width={width} height={100} />;
};

export default Seperator;
