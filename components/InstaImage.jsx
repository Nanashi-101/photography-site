import React from "react";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
const instaImage = ({ socialImage }) => {
  return (
    <div className="relative">
      <Image
        src={socialImage}
        alt="/"
        style={{ minWidth: "100%", height: "100%" }}
      />
      {/* Overlay */}
      <div className="flex justify-center items-center absolute top-0 bottom-0 left-0 right-0 hover:bg-black/50 group">
        <p className="text-gray-300 hidden group-hover:block">
          <FaInstagram size={30} className="z-10" />
        </p>
      </div>
    </div>
  );
};

export default instaImage;
