import React from "react";

const MostPopularSkeleton = () => {
  return (
    <ol className="sticky m-auto my-[50px] w-full rounded-[4px] p-[20px] lg:mb-[40px] lg:mt-[0px] bg-white top-[90px] text-black">
      <div
        style={{
          textOrientation: "sideways",
          writingMode: "vertical-lr",
        }}
        className="w-fit h-fit absolute right-[-25px] top-[17px] whitespace-nowrap text-center font-title text-[134px] font-black leading-[1] text-torq-100 opacity-20 rotate-180 -z-10"
      >
        Most Popular
      </div>

      <li className="flex flex-col w-full">
        <div className="flex flex-row justify-start items-start space-x-[18px] w-full">
          <p className="font-poly text-[15px] text-purple-100 font-extrabold -translate-y-[2px]">
            1
          </p>
          <div className="w-full">
            <p className="mb-[8px] w-[85%] h-[12px] rounded-[2px] skeleton-white-loading-bg"></p>
            <p className="mb-[8px] w-[75%] h-[12px] rounded-[2px] skeleton-white-loading-bg"></p>
            <p className="mb-[8px] w-[40%] h-[12px] rounded-[2px] skeleton-white-loading-bg"></p>
          </div>
        </div>
        <hr className=" my-[20px] w-[calc(50%-2px)] border text-black/0 border-b-purple-100" />
      </li>
      <li className="flex flex-col w-full">
        <div className="flex flex-row justify-start items-start space-x-[18px] w-full">
          <p className="font-poly text-[15px] text-purple-100 font-extrabold -translate-y-[2px]">
            2
          </p>
          <div className="w-full">
            <p className="mb-[8px] w-[85%] h-[12px] rounded-[2px] skeleton-white-loading-bg"></p>
            <p className="mb-[8px] w-[75%] h-[12px] rounded-[2px] skeleton-white-loading-bg"></p>
            <p className="mb-[8px] w-[40%] h-[12px] rounded-[2px] skeleton-white-loading-bg"></p>
          </div>
        </div>
        <hr className=" my-[20px] w-[calc(50%-2px)] border text-black/0 border-b-purple-100" />
      </li>
      <li className="flex flex-col w-full">
        <div className="flex flex-row justify-start items-start space-x-[18px] w-full">
          <p className="font-poly text-[15px] text-purple-100 font-extrabold -translate-y-[2px]">
           3
          </p>
          <div className="w-full">
            <p className="mb-[8px] w-[85%] h-[12px] rounded-[2px] skeleton-white-loading-bg"></p>
            <p className="mb-[8px] w-[75%] h-[12px] rounded-[2px] skeleton-white-loading-bg"></p>
            <p className="mb-[8px] w-[40%] h-[12px] rounded-[2px] skeleton-white-loading-bg"></p>
          </div>
        </div>
        <hr className=" my-[20px] w-[calc(50%-2px)] border text-black/0 border-b-purple-100" />
      </li>
      <li className="flex flex-col w-full">
        <div className="flex flex-row justify-start items-start space-x-[18px] w-full">
          <p className="font-poly text-[15px] text-purple-100 font-extrabold -translate-y-[2px]">
            4
          </p>
          <div className="w-full">
            <p className="mb-[8px] w-[85%] h-[12px] rounded-[2px] skeleton-white-loading-bg"></p>
            <p className="mb-[8px] w-[75%] h-[12px] rounded-[2px] skeleton-white-loading-bg"></p>
            <p className="mb-[8px] w-[40%] h-[12px] rounded-[2px] skeleton-white-loading-bg"></p>
          </div>
        </div>
        <hr className=" my-[20px] w-[calc(50%-2px)] border text-black/0 border-b-purple-100" />
      </li>
      <li className="flex flex-col w-full">
        <div className="flex flex-row justify-start items-start space-x-[18px] w-full">
          <p className="font-poly text-[15px] text-purple-100 font-extrabold -translate-y-[2px]">
            5
          </p>
          <div className="w-full">
            <p className="mb-[8px] w-[85%] h-[12px] rounded-[2px] skeleton-white-loading-bg"></p>
            <p className="mb-[8px] w-[75%] h-[12px] rounded-[2px] skeleton-white-loading-bg"></p>
            <p className="mb-[8px] w-[40%] h-[12px] rounded-[2px] skeleton-white-loading-bg"></p>
          </div>
        </div>
        <hr className=" my-[20px] w-[calc(50%-2px)] border text-black/0 border-b-purple-100" />
      </li>
    </ol>
  );
};

export default MostPopularSkeleton;
