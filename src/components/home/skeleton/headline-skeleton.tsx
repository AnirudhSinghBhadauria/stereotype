import React from "react";
import LoadingSpinner from "../loading-spinner";
import StereotypeInclined from "@/misc/logos/StereotypeInclined";
import Stereotype from "@/misc/logos/Stereotype";

const HeadlineSkeleton = () => {
  return (
    <div className="group mb-[20px] pt-[28px] md:mb-[50px] lg:top-[150px] h-full w-full lg:mb-0 lg:min-h-[750px] lg:pr-[40px] border-b-[#313131] border-b-[1px] lg:border-b-[0px]">
      <div className="ml-[40px] md:ml-0 lg:ml-[20px] lg:mr-[70px] md:h-[432px] md:w-[540px] lg:h-[464px] lg:w-[580px] aspect-five-four rounded-[8px] skeleton-black-loading">
        {/* Headliner Image */}
      </div>

      <div className="relative mr-[15px] md:mr-0 pb-[20px] md:pl-[80px] lg:border-none lg:pl-[165px] sm:-mt-[40px]">
        {/* Heading */}
        <h2 className="mb-[8px] h-[8px] sm:h-[45px] md:h-[50px] w-full bg-transparent rounded-[8px]"></h2>
        <h2 className="mb-[8px] sm:mb-[18px] md:mb-[10px] h-[35px] sm:h-[35px] md:h-[50px] w-full skeleton-black-loading rounded-[5px] md:rounded-[8px]"></h2>
        <h2 className="block sm:hidden md:block mb-[8px] sm:mb-[18px] h-[35px] sm:h-[35px] md:h-[50px] md:mb-[10px] lg:mb-[18px] w-[80%] sm:w-[70%] md:w-[85%] skeleton-black-loading rounded-[5px] md:rounded-[8px]"></h2>

        <h2 className="block sm:hidden md:block lg:hidden mb-[18px] h-[35px] md:h-[50px] w-[50%] sm:w-[75%] skeleton-black-loading rounded-[5px] md:rounded-[8px]"></h2>
        {/* Heading */}

        {/* Description */}
        <p className="mb-[8px] md:mb-[10px] h-[25px] md:h-[35px] w-[85%] md:w-[93%] skeleton-black-loading rounded-[5px] md:rounded-[8px]"></p>
        <p className="mb-[18px] h-[25px] md:h-[35px] w-[60%] md:w-[70%] skeleton-black-loading rounded-[5px] md:rounded-[8px]"></p>
        {/* Description */}

        <p className="w-[50%] lg:w-[60%] h-[20px] md:h-[25px] skeleton-black-loading rounded-[4px] sm:rounded-[6px]">
          {/* Author Date Time */}
        </p>
      </div>
      <StereotypeInclined
        fill="#fff"
        className="hidden md:block absolute h-[481.5px] w-[90px] lg:h-[588.5px] lg:w-[110px] top-[165px] -left-[45px] lg:top-[140px] lg:-left-[40px] z-10 title-shadow"
      />
      <Stereotype
        fill="white"
        className="absolute h-[50px] w-[269.5px] top-[55px] left-[10px] title-shadow md:hidden"
      />
    </div>
  );
};

export default HeadlineSkeleton;
