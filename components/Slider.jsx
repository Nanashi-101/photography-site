"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  // Moving on to the next slide
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  // Moving on to the previous slide
  const prevSlide = () => {
    setCurrent(current === length - 1 ? length - 1 : current - 1);
  };

  //Basic checking to ensure that the slides are not empty
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div id="gallery">
      <h1 className="text-center font-semibold  text-4xl py-4">Gallery</h1>
      <div className="">
        {slides.map((slide, index) => {
          return (
            <div
              key={index}
              className={
                index === current
                  ? "opacity-[1] ease-in duration-1000"
                  : "opacity-0"
              }
            >
              <div className="relative flex justify-center p-4">
                <FaArrowCircleLeft
                  size={50}
                  className="absolute top-[50%] left-[30px] cursor-pointer text-white/70 select-none z-[2]"
                />
                {index === current && (
                  <Image
                    src={slide.image}
                    alt={slide.alt}
                    width={1440}
                    height={600}
                    objectFit="cover"
                  />
                )}
                <FaArrowCircleRight
                  size={50}
                  className="absolute top-[50%] right-[30px] cursor-pointer text-white/70 select-none z-[2]"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
