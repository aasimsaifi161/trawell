"use client";
import { europeData } from "@/data/data";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 5,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1, 
  },
};

const EuropeSlider = () => {
  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={2000}
      keyBoardControl={true}
    >
      {europeData.map((data) => (
        <div key={data.id} className="m-3">
          <div className="relative h-[400px] group">
            <div className="absolute inset-0 opacity-25 rounded-lg"></div>
            <Image
              src={data.image}
              alt="Europe Tourist destinations"
              width={500}
              height={500}
              className="h-full w-full object-cover rounded-lg group-hover:scale-103 transition-all duration-400"
            />
          </div>
          <div className="flex justify-between py-2">
            <p>{data.time}</p>
            <div className="flex justify-center items-center space-x-1.5">
              <FaStar className="w-4 h-4 text-green-700" />
              <p>{data.ratings}</p>
            </div>
          </div>
          <div className="flex md:h-32 h-20 justify-between flex-col">
            <h1 className="text-md">{data.label}</h1>
            <p className="text-md text-gray-600">
              <span className="font-bold">INR </span>
              {data.price}
              <span className="text-black font-semibold">/Adult</span>
            </p>
          </div>
          <div className="flex gap-2 mt-2">
            <IoMdCall className="border w-10 h-10 p-2 rounded-md cursor-pointer bg-orange-400 text-white" />
            <button className="border w-full rounded-md text-sm cursor-pointer bg-orange-400 text-white">Request Callback</button>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default EuropeSlider;
