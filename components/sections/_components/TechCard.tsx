import Image from "next/image";
import React from "react";

const TechCard = ({ imageUrl, name }: { imageUrl: string; name: string }) => {
  return (
    <div className="px-3 py-2.5 flex flex-row justify-center items-center gap-2 border-[#666666]/20 border h-7 rounded-[6px] text-white w-fit">
      <Image src={imageUrl} alt={name} width={12} height={12} />
      <p className="text-sm">{name}</p>
    </div>
  );
};

export default TechCard;
