"use client";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import SearchBox from "../Helper/SearchBox";

const upperImages = [
  {
    id: 1,
    src: "/images/1.jpg",
    alt: "Hawa Mahal",
  },
  {
    id: 2,
    src: "/images/2.jpg",
    alt: "Great wall of china",
  },
  {
    id: 3,
    src: "/images/3.jpg",
    alt: "Taj Mahal",
  },
];

const lowerImages = [
  {
    id: 1,
    src: "/images/4.jpg",
    alt: "Mountains",
  },
  {
    id: 2,
    src: "/images/5.jpg",
    alt: "Himalayas",
  },
  {
    id: 3,
    src: "/images/6.jpg",
    alt: "Beach",
  },
];

const Hero = () => {
  return (
    <div className="relative w-full h-screen flex justify-center items-center flex-col md:flex-wrap">
      <div className="relative md:w-[50%] w-full md:h-full h-[30%] flex justify-center items-center flex-col">

        <div className="md:hidden flex w-fit">
          <SearchBox />
        </div>
        {/* Upper Images */}
        <motion.div
        className="w-full h-[50%] md:w-[70%] md:h-[20%] flex items-center justify-center md:gap-20 gap-10 mb-10">
          {upperImages.map((image, index) => (
            
            <Image
              key={image.id}
              alt={image.alt}
              src={image.src}
              width={200}
              height={200}
              className={`object-cover h-30 w-30 rounded-2xl transition-all duration-600 hover:rotate-y-180 ${
                index === 1 ? "translate-y-8" : "-translate-y-8"
              }`}
            />
          ))}
        </motion.div>
        <div className="text-center text-4xl font-semibold space-y-2 my-10 md:my-0">
          <h1>Your Next Adventure</h1>
          <span className=" bg-gradient-to-r from-sky-500 to-sky-800 bg-clip-text text-transparent uppercase">
            Starts Here !
          </span>
          <p className="md:text-[18px] text-[16px] mt-5 text-zinc-600">
            Explore Expert-led, AI-powered multi-day tours.
          </p>
        </div>
        {/* Lower Images */}
        <div className="w-full h-[50%] md:w-[70%] md:h-[20%] flex items-center justify-center md:gap-20 gap-10 mt-10">
          {lowerImages.map((image, index) => (
            <Image
              key={image.id}
              alt={image.alt}
              src={image.src}
              width={200}
              height={200}
              className={`object-cover h-30 w-30 rounded-2xl transition-all duration-600 hover:rotate-y-180  ${
                index === 1 ? "-translate-y-8" : "translate-y-8"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="md:w-[50%] w-full h-[50%] hidden md:flex justify-center items-center">
        <div className="relative">
          <Image
            alt="Indian monuments"
            src="/images/hero1.png"
            width={500}
            height={500}
            className="object-cover"
          />

          {/* Overlay */}
          {/* <div
            className="pointer-events-none absolute inset-0 "
            style={{
              backgroundImage: `
        linear-gradient(to right, rgba(240,240,240,1), rgba(240,240,240,0) 35%),
        linear-gradient(to left,  rgba(240,240,240,1), rgba(240,240,240,0) 35%),
        linear-gradient(to bottom, rgba(240,240,240,1), rgba(240,240,240,0) 35%),
        linear-gradient(to top,    rgba(240,240,240,1), rgba(240,240,240,0) 35%)
      `,
              backgroundRepeat: "no-repeat",
              backgroundPosition:
                "left center, right center, top center, bottom center",
              backgroundSize: "60px 100%, 60px 100%, 100% 60px, 100% 60%",
            }}
          ></div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
