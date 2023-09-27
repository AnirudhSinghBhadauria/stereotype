import React, { Fragment } from "react";

const AuthorIntroSkeleton = () => {
  return (
    <Fragment>
      <section className="w-full bg-purple-100 pt-[10px]">
        <div className="mx-auto grid max-w-[1100px] auto-cols-max grid-flow-col grid-cols-4 gap-[20px] sm:grid-rows-1 md:grid-cols-7 md:gap-[32px] lg:px-0 pt-[20px] px-[20px] bg-purple-100">
          <div className="col-start-1 col-end-8 row-start-1 w-full lg:col-start-2 lg:row-start-1 z-10">
            <p className="font-mono uppercase text-torq-100 text-[15px] tracking-[0.1em] font-[700] sm:font-[550] mb-[6px]">
              more Stories by:
            </p>
            {/* Name */}
            <h1 className="h-[38px] sm:h-[28px] lg:h-[34px] mb-[10px] w-[75%] rounded-[6px] skeleton-white-loading"></h1>
            <h1 className="h-[38px] sm:h-[28px] lg:h-[34px] mb-[10px] w-[70%] rounded-[6px] skeleton-white-loading"></h1>
            <h1 className="h-[38px] block sm:hidden md:block sm:h-[28px] lg:h-[34px] w-[45%] rounded-[6px] skeleton-white-loading"></h1>
            {/* Name */}
          </div>
        </div>
      </section>

      <div className="h-[60px] w-full author-gradinet"></div>

      <section className="w-full -mt-[40px]">
        <div className="overflow-hidden w-full grid md:hidden grid-cols-4 gap-[20px] pl-[20px] pr-[80px] pt-[10px]">
          {/* Image */}
          <section className="skeleton-black-loading col-start-1 w-full h-full aspect-square overflow-hidden rounded-full"></section>
          {/* Image */}
          <section className="col-span-3 col-start-2 flex items-end">
            {/* Designation */}
            <p className="w-[90%] sm:w-[50%] h-[18px] rounded-[3px] skeleton-black-loading mb-[22px]"></p>
            {/* Designation */}
          </section>
        </div>

        <div className="mt-[20px] w-[90%] mx-auto h-[1px] bg-[#4a4a4a] md:hidden"></div>

        <div className="mx-auto grid max-w-[1100px] auto-cols-max grid-flow-col grid-cols-4 sm:grid-rows-1 md:grid-cols-7 md:gap-[32px] p-[20px] lg:px-0 md:border-b-[1px] border-[#4a4a4a]">
          {/* Profile Picture */}
          <section className="skeleton-black-loading hidden md:block self-end sm:row-start-1 sm:mt-[20px] md:self-start w-full h-auto aspect-square rounded-full overflow-hidden"></section>
          {/* Profile Picture */}
          <section className="col-start-1 col-end-8 w-full md:col-start-2 md:row-start-1">
            {/* Designation */}
            <p className="hidden md:block w-[25%] h-[18px] rounded-[3px] skeleton-black-loading mb-[22px]"></p>
            {/* Designation */}
            <div className="mb-[20px]">
              {/* DescriptionOne */}
              <p className="mb-[8px] w-[90%] h-[19px] rounded-[3px] skeleton-black-loading"></p>
              <p className="mb-[8px] w-[84%] h-[19px] rounded-[3px] skeleton-black-loading"></p>

              <p className="block sm:hidden mb-[8px] w-[78%] h-[19px] rounded-[3px] skeleton-black-loading"></p>
              <p className="block sm:hidden mb-[8px] w-[88%] h-[19px] rounded-[3px] skeleton-black-loading"></p>

              <p className="block sm:hidden md:block lg:hidden mb-[8px] w-[78%] h-[19px] rounded-[3px] skeleton-black-loading"></p>
              <p className="mb-[23px] w-[50%] h-[19px] rounded-[3px] skeleton-black-loading"></p>
              {/* DescriptionOne */}

              {/* DescriptionTwo */}
              <p className="mb-[8px] w-[90%] h-[19px] rounded-[3px] skeleton-black-loading"></p>
              <p className="mb-[8px] w-[84%] h-[19px] rounded-[3px] skeleton-black-loading"></p>
              <p className="block sm:hidden mb-[8px] w-[78%] h-[19px] rounded-[3px] skeleton-black-loading"></p>
              <p className="block sm:hidden mb-[8px] w-[88%] h-[19px] rounded-[3px] skeleton-black-loading"></p>
              <p className="block sm:hidden md:block lg:hidden mb-[8px] w-[78%] h-[19px] rounded-[3px] skeleton-black-loading"></p>
              <p className="w-[50%] h-[19px] rounded-[3px] skeleton-black-loading"></p>
              {/* DescriptionTwo */}
            </div>

            <section className="flex flex-row space-x-[24px] md:mb-[20px] w-full py-[16px] border-b-[1px] border-t-[1px] border-[#4a4a4a] md:py-0 md:border-t-0 md:border-b-0">
              {/* Social */}
              <p className="w-[18%] h-[18px] rounded-[3px] skeleton-black-loading"></p>
              <p className="w-[18%] h-[18px] rounded-[3px] skeleton-black-loading"></p>
              <p className="w-[18%] h-[18px] rounded-[3px] skeleton-black-loading"></p>
              <p className="w-[18%] h-[18px] rounded-[3px] skeleton-black-loading"></p>
              {/* Social */}
            </section>
          </section>
        </div>
      </section>
    </Fragment>
  );
};

export default AuthorIntroSkeleton;
