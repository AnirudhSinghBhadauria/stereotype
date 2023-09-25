import React from "react";

const ReaderStorylineSkeleton = () => {
  return (
    <div className="w-full">
      <section className="w-full relative pl-[38px] font-poly lg:pl-[50px]">
        <div>
          <h2 className="w-full mb-[8px] text-[16.25px] leading-[1.2] tracking-[0.02]  text-white">
            Reader's Streamline
          </h2>

          {/* Feed Refreshed */}
          <p className="mb-[8px] w-[86%] max-w-[280px] sm:max-w-full h-[14.5px] sm:h-[15px] skeleton-black-loading rounded-[2px]"></p>
          <p className="block sm:hidden mb-[8px] w-[50%] max-w-[280px] sm:max-w-full h-[14.5px] sm:h-[15px] skeleton-black-loading rounded-[2px]"></p>
          {/* Feed Refreshed */}

          {/* Feed Message */}
          <p className="h-[14.5px] sm:h-[15px] mb-[24px] w-[58%] skeleton-black-loading rounded-[2px]"></p>
          {/* Feed Message */}

          <div className="w-[20%] h-[1.5px] skeleton-black-loading"></div>
        </div>

        <div className="absolute left-[12px] sm:left-[7px] lg:left-[16px] top-[4.4px] h-[12px] w-[12px] origin-center rounded-full bg-torq-100"></div>
      </section>
    </div>
  );
};

export default ReaderStorylineSkeleton;
