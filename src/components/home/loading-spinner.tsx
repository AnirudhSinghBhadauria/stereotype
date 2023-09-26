import Stere from "@/misc/svg/stre";
import Type from "@/misc/svg/type";
import React from "react";

const LoadingSpinner = () => {
  return (
    <section className="flex flex-row items-center justify-center space-x-[6px]">
      {/* <Stere className="fill-[#313131] h-[28px] w-[62.16px]" /> */}
      <div
        className="h-[26px] w-[26px] inline-block border-[#31313180] border-r-blue-500 rounded-full border-[3.25px] border-solid animate-spin"
        role="status"
      ></div>
      {/* <Type className="fill-[#313131] h-[28px] w-[58.1px] translate-x-[-3px]" /> */}
    </section>
  );
};

export default LoadingSpinner;

// 2.22
// 2.075
// border-[#31313180] border-r-[#353535]