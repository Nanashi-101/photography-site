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
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  //Basic checking to ensure that the slides are not empty
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div id="gallery" className="max-w-[1240px] mx-auto">
      <h1 className="text-center font-semibold  text-4xl py-4">Gallery</h1>
      <p className="text-center text-sm sm:text-md md:text-xl lg:text-2xl font-medium">Discover moments frozen in time, each frame a window to a world of wonder.</p>
      <div className="relative flex justify-center p-4">
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
              <FaArrowCircleLeft
                size={50}
                className="absolute top-[45%] left-[30px] cursor-pointer text-white/90 select-none z-[2]"
                onClick={prevSlide}
              />
              {index === current && (
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  width={1400}
                  height={600}
                  objectFit="cover"
                  className="rounded-2xl shadow-lg shadow-black"
                />
              )}
              <FaArrowCircleRight
                size={50}
                className="absolute top-[45%] right-[30px] cursor-pointer text-white/90 select-none z-[2]"
                onClick={nextSlide}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
