import React from "react";

const Footer = () => {
  return (
    <div className="w-full text-center bg-gray-300/50">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center items-center gap-2 ">
        <h1 className="text-xl font-bold text-center pt-4">NeXCap - Studio</h1>
        <div className="flex gap-5 justify-center items-center">
          <p className=" font-medium">
            © 2021 NeXCap Studio. All rights reserved. maintained & built by
            ~Nanashi-101
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
