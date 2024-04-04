import React from "react";
import Image from "next/image";

const workSecondaryImg = ({ source }) => {
  return (
    <div className="w-full h-full">
      <Image
        src={source}
        alt="/"
        width={215}
        height={217}
        style={{
          minWidth: "100%",
          height: "100%",
        }}
        objectFit="cover"
      />
    </div>
  );
};

export default workSecondaryImg;
