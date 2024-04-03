//! This line is important in Next.js-13+ to avoid importing the component on the server side
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");
  const handleNav = () => {
    setMobileNav(!mobileNav);
  };

  useEffect(() => {
    const changeColor = () => {
      if(window.scrollY > 90){
        setColor("white");
        setTextColor("black");
      }
      else{
        setColor("transparent");
        setTextColor("white");
      }
    }
    window.addEventListener("scroll", changeColor);

    window.addEventListener("resize", () => {
      const mobile_Nav = document.getElementById('mobile-nav');
      mobile_Nav.classList.add('hidden');
    });

    const bodyStyle = document.body.style;
    bodyStyle.overflow = mobileNav ? 'hidden' : 'auto';
  },[]);


  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link style={{ color: `${textColor}` }} href="/" className="flex">
          <h1 className="text-4xl font-bold ">NeXCap</h1>
        </Link>
        <ul
          style={{ color: `${textColor}` }}
          className="hidden sm:flex uppercase"
        >
          <li className="p-4 font-medium hover:tracking-wider ease-in duration-150">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4 font-medium hover:tracking-wider ease-in duration-150">
            <Link href="/gallery">Gallery</Link>
          </li>
          <li className="p-4 font-medium hover:tracking-wider ease-in duration-150">
            <Link href="/work">Work</Link>
          </li>
          <li className="p-4 font-medium hover:tracking-wider ease-in duration-150">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        {/* Mobile Button */}
        <div
          onClick={handleNav}
          className="block sm:hidden z-10 cursor-pointer"
        >
          {!mobileNav ? (
            <AiOutlineMenu
              size={30}
              className="mt-2"
              style={{color: `${textColor}`}}
            />
          ) : (
            <AiOutlineClose size={30}/>
          )}
        </div>
        {/* Mobile Navbar */}
        <div
          className={
            mobileNav
              ? "sm:hidden absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center w-full h-screen overflow-hidden bg-black/70 text-center ease-in duration-300 backdrop-blur-md"
              : "sm:hidden absolute top-0 bottom-0 left-[-100%] right-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
          id="mobile-nav"
        >
          <Link href="/" className="absolute top-[1.2rem] font-bold text-4xl">
            NeXCap
          </Link>
          <div>
            <ul className="uppercase">
              <li className="p-4 text-xl hover:text-gray-400 hover:tracking-wider hover:scale-105 duration-300">
                <Link href="/">Home</Link>
              </li>
              <li className="p-4 text-xl hover:text-gray-400 hover:tracking-wider hover:scale-105 duration-300">
                <Link href="/gallery">Gallery</Link>
              </li>
              <li className="p-4 text-xl hover:text-gray-400 hover:tracking-wider hover:scale-105 duration-300">
                <Link href="/work">Work</Link>
              </li>
              <li className="p-4 text-xl hover:text-gray-400 hover:tracking-wider hover:scale-105 duration-300">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
