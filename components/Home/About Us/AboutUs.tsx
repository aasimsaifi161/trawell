import Image from "next/image";
import React from "react";
import SectionHeading from "../Helper/SectionHeading";

const AboutUs = () => {
  return (
    <div className=" w-[80%] h-screen mx-auto flex flex-col md:flex-row gap-18">
      <div className="md:w-[50%] h-full hidden md:flex justify-center items-center">
        <Image
          alt="World Image"
          src="/images/world.png"
          width={500}
          height={500}
          className="object-cover rounded-full"
        />
      </div>
      <div className="md:w-[50%] h-full py-5 flex flex-col items-center justify-center">
        <p className="text-center text-xl sm:text-3xl text-sky-800 font-bold mb-5 ">
          About Us
        </p>
        <p className="md:px-10 tracking-wide">
          At Trawell, luxury is not defined by five-star hotels or first-class
          seats — it’s defined by the art of experiencing the world with grace,
          comfort, and authenticity. We are more than a travel agency; we are
          curators of bespoke journeys designed for those who seek the
          extraordinary. <br /> <br />
          With a commitment to discretion, personalization, and perfection,
          Trawell transforms travel into an art form — where every moment feels
          timeless, and every memory feels like it was made just for you.
          <br />
          <br />
          Because when you travel with Trawell, you don’t just see the world —
          you <span className="font-semibold">experience it beautifully</span>.
        </p>
        <div className="w-full md:h-[20vh] flex mt-10 md:flex-row flex-col">
          <div className="p-5 h-full md:w-1/2 w-full">
            <div className="w-full h-full px-3 py-1 border rounded-xl border-zinc-400">
              <Image
                src="/images/tick.avif"
                alt="trusted"
                width={40}
                height={40}
              />
              <p className="capitalise ">100% Transparency</p>
              <p className="text-zinc-600 text-sm">
                Trusted partners, fair policies
              </p>
            </div>
          </div>
          <div className="p-5 h-full md:w-1/2 w-full">
            <div className="w-full h-full px-3 py-1 border rounded-xl border-zinc-400">
              <Image
                src="/images/checklist.avif"
                alt="trusted"
                width={40}
                height={40}
              />
              <p className="capitalise ">Hassle Free Trips</p>
              <p className="text-zinc-600 text-sm">Plan, book, go</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
