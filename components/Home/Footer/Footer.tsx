import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import { IoPlanetOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="relative w-full md:h-[80vh] h-[100vh] bg-blue-950 mt-40">
      <div className="absolute grid md:grid-cols-4 grid-cols-1 md:w-[70%] w-[90%] md:h-[40vh] h-[80vh] p-5 left-[50%] -translate-x-[50%] -translate-y-[50%] bg-white md:top-16 top-72 z-10 border-t border-zinc-400 rounded-2xl">
        <div className="h-full">
          <p className="text-sm font-semibold tracking-widest mb-3">
            ABOUT TRAWELL
          </p>
          <ul className="space-y-3 tracking-widest text-zinc-600 text-[12px]">
            {[
              "ABOUT US",
              "WE ARE HIRING",
              "TRAWELL REVIEWS",
              "TERMS AND CONDITIONS",
              "PRIVACY POLICIES",
              "COPYRIGHT POLICIES",
              "SUPPORT",
            ].map((item, index) => (
              <li
                key={index}
                className="hover:text-orange-500 transition-all duration-200 w-fit cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="h-full">
          <p className="text-sm font-semibold tracking-widest mb-3">
            FOR BRANDS
          </p>
          <ul className="space-y-3 tracking-widest text-zinc-600 text-[12px]">
            {["PARTNER WITH US", "DESTINATION MARKETING"].map((item, index) => (
              <li
                key={index}
                className="hover:text-orange-500 transition-all duration-200 w-fit cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="h-full">
          <p className="text-sm font-semibold tracking-widest mb-3">
            FOR TRAVELLERS
          </p>
          <ul className="space-y-3 tracking-widest text-zinc-600 text-[12px]">
            {["GIFT AN EXPERIENCE"].map((item, index) => (
              <li
                key={index}
                className="hover:text-orange-500 transition-all duration-200 w-fit cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="h-full flex flex-col items-center justify-center gap-3">
          <div className="w-30 h-30 bg-sky-500 rounded-full flex items-center justify-center flex-col">
            <IoPlanetOutline className="text-white w-[80%] h-[80%]" />
          </div>
          <p className="tracking-wider text-2xl font-light">TRAWELL</p>
        </div>
      </div>

      <div className="absolute left-[50%] -translate-x-[50%] bottom-0 flex justify-center items-center flex-col md:w-[70%] w-[90%] md:h-[40vh]">
        <div className="flex text-white items-center justify-center gap-10 text-2xl">
          <BsInstagram />
          <BsFacebook />
          <BsLinkedin />
          <BsYoutube />
        </div>

        <div className="text-center md:mt-10 mt-5 text-sm">
         <p className="font-bold text-zinc-300">© 2025 Thrillophilia.com All rights reserved.</p>
         <p className="mt-5 text-zinc-100">The content and images used on this site are copyright protected and copyrights vests with the respective owners. The usage of the content and images on this website is intended to promote the works and no endorsement of the artist shall be implied. Unauthorized use is prohibited and punishable by law.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
