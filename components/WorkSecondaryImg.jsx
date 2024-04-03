import React from "react";
import Image from "next/image";

const workSecondaryImg = ({ source }) => {
  return (
    <div className="w-full h-full">
      <Image
        src={source}
        alt="/"
        fill="responsive"
        objectFit="cover"
      />
    </div>
  );
};

export default workSecondaryImg;
