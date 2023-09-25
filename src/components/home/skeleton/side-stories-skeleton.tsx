import StereotypeStroked from "@/misc/logos/stereotype-stroked";
import React from "react";

const SideStoriesSkeleton = () => {
  return (
    <div className="full-side-post w-full h-full flex lg:block justify-center mb-[20px] mb:mb-0">
      <div
        className="bg-[rgba(32,32,32,0.2)] lg:bg-transparent flex flex-col w-[300px] sm:w-[410px] lg:w-full lg:h-[667.5px] rounded-[4px] lg:rounded-[20px] sticky top-[40px] mr-0 mt-[80px] ml-[65px] lg:mt-0 lg:mr-0 lg:ml-0 lg:mb-[20px] lg:min-h-[500px] pb-[25px] lg:pb-[20px] p-[20px]"
      >
        {/* Category */}
        <p className="mb-[20px] w-[100px] h-[13px] skeleton-black-loading rounded-[2px]"></p>
        {/* Category */}

        <div className="ml-[20px] lg:ml-[35px]">
          <div
            style={{ borderLeftColor: "rgba(32, 32, 32, 0.85)" }}
            className="flex flex-col border-l-[1px] pl-[10px] mb-[8px]"
          >
            {/* Heading */}
            <h2 className="mb-[10px] w-full h-[30px] lg:h-[40px] skeleton-black-loading rounded-[4px]"></h2>
            <h2 className="mb-[10px] w-[75%] h-[30px] lg:h-[40px] skeleton-black-loading rounded-[4px]"></h2>
            <h2 className="mb-[18px] w-[50%] h-[30px] lg:h-[40px] skeleton-black-loading rounded-[4px]"></h2>
            {/* Heading */}

            <div className="flex flex-row space-x-[8px] items-center justify-start mb-[5px]">
              <p className="w-[140px] h-[15px] skeleton-black-loading rounded-[3px]">
                {/* Author Name */}
              </p>
              <p className="w-[60px] h-[15px] skeleton-black-loading rounded-[3px]">
                {/* Date Added */}
              </p>
            </div>
          </div>

          {/* Image */}
          <section className="relative -ml-[20px] mb-[28px] h-[182px] w-[275px] sm:h-[230px] sm:w-[345px] md:h-[244px] md:w-[370px] lg:ml-[-45px] lg:h-[235px] lg:w-[352px] overflow-hidden rounded-[4px] skeleton-black-loading"></section>
          {/* Image */}
        </div>
        <ul className="space-y-3">
          <li>
            <div className="flex flex-row items-start gap-[30px]">
              {/* bullet */}
              <div className="sm:h-[7.25px] sm:w-[7.25px] md:h-[7px] md:w-[7.25px] lg:h-[7.25px] lg:w-[7px] rounded-full ml-[7px] mt-[8px] skeleton-black-loading"></div>
              {/* bullet */}
              <section className="w-full max-w-[290px] flex flex-col">
                {/* ThumbDescriptionOne */}
                <div className="w-full">
                  <p className="mb-[8px] w-full h-[17px] skeleton-black-loading rounded-[3px]"></p>
                  <p className="mb-[8px] w-[60%] h-[17px] skeleton-black-loading rounded-[3px]"></p>
                </div>
                {/* ThumbDescriptionOne */}
                <div className="w-full h-[1px] my-[7px] skeleton-black-loading"></div>
              </section>
            </div>
          </li>
          <li>
            <div className="flex flex-row items-start gap-[30px]">
              {/* bullet */}
              <div className="sm:h-[7px] sm:w-[7.25px] md:h-[7px] md:w-[7.25px] lg:h-[7.25px] lg:w-[7px] rounded-full ml-[7px] mt-[8px] skeleton-black-loading"></div>
              {/* bullet */}

              {/* ThumbDescriptionTwo */}
              <div className="w-full max-w-[290px]">
                <p className="mb-[8px] w-full h-[17px] skeleton-black-loading rounded-[3px]"></p>
                <p className="mb-[8px] w-[60%] h-[17px] skeleton-black-loading rounded-[3px]"></p>
              </div>
              {/* ThumbDescriptionTwo */}
            </div>
          </li>
        </ul>
        {/* Reads */}
        <p className="z-20 absolute lg:bottom-0 right-[20px] pb-[20px] font-poly font-semibold tracking-[0.15em] uppercase text-black text-[10px]"></p>
        {/* Reads */}

        <StereotypeStroked
          height="428"
          width="80"
          className="z-10 absolute bottom-[6px] right-[6px] hidden lg:block skeleton-black-fill-loading"
        />
        <StereotypeStroked
          height="347.75"
          width="65"
          className="absolute sm:-left-[75px] sm:-top-[30px]  hidden sm:block lg:hidden skeleton-black-fill-loading"
          // fill={"#fff"}
        />
      </div>
      <StereotypeStroked
        height="347.75"
        width="65"
        className="-z-[50] absolute top-[50px] left-[17px] block sm:hidden skeleton-black-fill-loading"
        //    fill={"#fff"}
      />
    </div>
  );
};

export default SideStoriesSkeleton;
