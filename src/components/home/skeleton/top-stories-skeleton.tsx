import React from "react";
import LoadingSpinner from "../loading-spinner";

const TopStoriesSkeleton = ({ number }: { number: number }) => {
  return (
    <li className="group relative mx-auto flex flex-row border-b border-[#313131] text-white last-of-type:border-b-0 md:mx-0 w-full max-w-[500px] md:max-w-full md:border-b-0 [&>div>div]:first-of-type:mt-0 [&>div>div]:first-of-type:pt-0 [&>div>div]:last-of-type:pb-0 [&>div>div]:last-of-type:md:border-b-0 ">
      <div className="flex flex-row w-full items-start">
        <div className="my-[16px] ml-[20px] mr-[40px] hidden justify-center h-full items-start self-stretch md:flex lg:ml-0 lg:mr-[20px]">
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#313131E6] font-poly text-[10px] text-torq-100">
            {number}
          </div>
        </div>

        <div className="flex grow flex-row border-[#313131] py-[16px] md:flex-row-reverse md:justify-between md:border-b">
          <div className="relative overflow-hidden min-w-[75px] h-[75px] md:w-[100px] md:h-[100px] lg:h-[80px] aspect-square lg:aspect-five-four rounded-[2px] md:rounded-[2px] mr-[16px] md:mr-0 skeleton-black-loading">
            {/* Image */}
            <div className="absolute top-[3px] left-[3px] z-10 flex md:hidden h-5 w-5 items-center justify-center rounded-full bg-[#313131E6] font-poly text-[10px] text-torq-100">
              {number}
            </div>
          </div>
          <div className="w-full md:w-auto flex">
            <div className="pr-[10px] sm:pr-0 w-full max-w-[360px] md:w-[320px] md:max-w-[320px] lg:w-[240px] lg:max-w-[240px] lg:pr-[10px]">
              {/* Headline */}
              <p className="w-[100%] lg:w-[95%] h-[14.5px] sm:h-[16px] lg:h-[15px] rounded-[3px] lg:rounded-[2px] skeleton-black-loading mb-[7px]"></p>
              <p className="block sm:hidden md:block w-[90%] lg:w-[85%] h-[14.5px] sm:h-[16px] lg:h-[15px] rounded-[3px] lg:rounded-[2px] skeleton-black-loading mb-[7px]"></p>
              <p className="w-[80%] lg:w-[80%] h-[14.5px] sm:h-[16px] lg:h-[15px] rounded-[3px] lg:rounded-[2px] skeleton-black-loading mb-[12px]"></p>
              {/* Headline */}

              <p className="w-[60%] h-[14.5px] sm:h-[16px] lg:h-[15px] skeleton-black-loading rounded-[3px] lg:rounded-[2px]">
                {/* Author Date Time */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default TopStoriesSkeleton;
