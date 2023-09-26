import Stereotype from "@/misc/logos/Stereotype";
import Link from "next/link";
import React, { Fragment } from "react";

const StorySkeleton = () => {
  return (
    <Fragment>
      <div className="absolute top-0 w-full pb-[30px]">
        <Link
          href="/"
          aria-label="home button for stereotype"
          title="Stereotype Home"
          className="z-[100] w-fit block"
        >
          <Stereotype className="h-[50px] w-[270px] md:w-[645.6px] lg:w-[781.5px] md:h-[120px] lg:h-[145px] fill-white md:fill-white/50 pl-[9px]" />
        </Link>
      </div>

      <section className="pt-[70px] md:pt-[159px] lg:pt-[174px] px-[20px] md:px-0 max-w-[700px] lg:max-w-[1100px] w-full mx-auto flex flex-col pb-[30px] md:pb-[60px] lg:pb-[80px] lg:flex-row">
        <div className="lg:w-1/2 mb-[24px] lg:mb-0 lg:pr-[40px] h-auto flex flex-col text-black">
          <section className="mb-[18px] md:mb-[24px]">
            <div className="lg:px-0 leading-none mb-[16px]">
              {/* Tag */}
              <p className="w-[90px] h-[16px] rounded-[2px] skeleton-white-loading"></p>
              {/* Tag */}
            </div>
            <div className="mb-[16px]">
              {/* Title */}
              <h1 className="mb-[10px] w-[90%] h-[35px] lg:h-[58px] rounded-[3px] skeleton-white-loading"></h1>
              <h1 className="block sm:hidden lg:block mb-[10px] w-[75%] h-[35px] lg:h-[58px] rounded-[3px] skeleton-white-loading"></h1>
              <h1 className="mb-[10px] w-[85%] h-[35px] lg:h-[58px] rounded-[3px] skeleton-white-loading"></h1>
              <h1 className="block sm:hidden lg:block mb-[10px] w-[80%] h-[35px] lg:h-[58px] rounded-[3px] skeleton-white-loading"></h1>
              <h1 className="w-[60%] h-[35px] lg:h-[58px] rounded-[3px] skeleton-white-loading"></h1>
              {/* Title */}
            </div>
            {/* Description */}
            <h2 className="mb-[8px] w-[90%] h-[18px] lg:h-[20px] rounded-[3px] skeleton-white-loading"></h2>
            <h2 className="mb-[8px] w-[83%] h-[18px] lg:h-[20px] rounded-[3px] skeleton-white-loading"></h2>
            <h2 className="mb-[8px] w-[75%] h-[18px] lg:h-[20px] rounded-[3px] skeleton-white-loading"></h2>
            <h2 className="block sm:hidden lg:block mb-[8px] w-[85%] h-[18px] lg:h-[20px] rounded-[3px] skeleton-white-loading"></h2>
            <h2 className="mb-[8px] w-[80%] h-[18px] lg:h-[20px] rounded-[3px] skeleton-white-loading"></h2>
            <h2 className="block sm:hidden lg:block mb-[8px] w-[85%] h-[18px] lg:h-[20px] rounded-[3px] skeleton-white-loading"></h2>
            {/* Description */}
          </section>
          <section>
            {/* About Author */}
            <p className="h-[12px] w-[90%] rounded-[2px] mb-[8px] skeleton-white-loading"></p>
            <p className="block sm:hidden lg:block h-[12px] w-[98%] rounded-[2px] mb-[8px] skeleton-white-loading"></p>
            <p className="block sm:hidden h-[12px] w-[65%] rounded-[2px] mb-[8px] skeleton-white-loading"></p>
            <p className="h-[12px] w-[40%] rounded-[2px] mb-[12px] skeleton-white-loading"></p>
            {/* About Author */}
            <div className="flex flex-row space-x-[10px] mb-[13px]">
              {/* Date Time */}
              <p className="h-[12px] w-[30%] rounded-[2px] skeleton-white-loading"></p>
              {/* Date Time */}
              {/* Reads */}
              <p className="h-[12px] w-[20%] rounded-[2px] skeleton-white-loading"></p>
              {/* Reads */}
            </div>
            <div className="flex flex-row space-x-[8px]">
              {/* Social */}
              <div className="h-[30px] w-[30px] rounded-full skeleton-white-loading"></div>
              <div className="h-[30px] w-[30px] rounded-full skeleton-white-loading"></div>
              <div className="h-[30px] w-[30px] rounded-full skeleton-white-loading"></div>
              <div className="h-[30px] w-[30px] rounded-full skeleton-white-loading"></div>
              {/* Social */}
            </div>
          </section>
        </div>
        <div className="lg:w-1/2">
          {/* Image */}
          <div className="w-full h-auto aspect-square md:h-[700px] md:w-[700px] lg:w-[550px] lg:h-[550px] overflow-hidden rounded-[3px] skeleton-white-loading"></div>
          {/* Image */}
          {/* Image Desc */}
          <p className="h-[12px] w-[98%] rounded-[2px] my-[8px] skeleton-white-loading"></p>
          <p className="block sm:hidden h-[12px] w-[85%] rounded-[2px] my-[8px] skeleton-white-loading"></p>
          <p className="h-[12px] w-[60%] rounded-[2px] skeleton-white-loading"></p>
          {/* Image Desc */}
        </div>
      </section>
    </Fragment>
  );
};

export default StorySkeleton;
