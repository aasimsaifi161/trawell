import React from "react";
import { hotelsData } from "@/data/data";
import HotelCard from "./HotelCard";

const Hotel = () => {
  return (
    <div className="pt-20 pb-20">
      <p className="text-center text-xl sm:text-3xl text-sky-800 font-bold mb-5 ">
        Recommended Hotels
      </p>
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-center mt-16">
        {/* HotelCard */}
        {hotelsData.map((data) => (
          <div key={data.id}>
            <HotelCard hotel={data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hotel;
