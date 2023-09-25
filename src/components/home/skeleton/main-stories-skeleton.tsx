import React from "react";

const MainStorySkeleton = ({
  ref,
}: {
  ref?: (node?: Element | null | undefined) => void;
}) => {
  return (
    <li className="pb-[44px] last-of-type:pb-[20px] last-of-type:border-b-[0px] last-of-type:mb-[0px] mb-[11.85px] border-b-[8px] border-[#313131]">
      <div className="full-post relative pb-[16px] pt-[8px] lg:pb-[10px] lg:py-[10px] sm:max-w-[500px] ">
        <div className="ml-auto mt-[24px] sm:ml-[9.88px] w-[320px] sm:w-[480px]">
          {/* Image-one */}
          <div className="overflow-hidden relative aspect-five-four w-full h-[213.86px] sm:h-[319px] rounded-[3px] skeleton-black-loading"></div>
          {/* Image-one */}
        </div>

        <div className="relative z-10 pt-[12px] sm:px-[16px] lg:mb-[8px] mr-[25px] sm:w-[440px] sm:ml-auto sm:mr-[10px] -mt-[30px] pr-[12px]">
          {/* ThumbTitle */}
          <h2 ref={ref} className="mb-[10px] bg-transparent h-[16px]"></h2>
          <h2 className="mb-[8px] skeleton-black-loading h-[25px] rounded-[3px]"></h2>
          <h2 className="mb-[14px] skeleton-black-loading h-[25px] w-[75%] rounded-[3px]"></h2>
          {/* ThumbTitle */}

          {/* ThumbDescription */}
          <p
            ref={ref}
            className="w-[90%] h-[16px] rounded-[3px] mb-[8px] skeleton-black-loading"
          ></p>
          <p className="w-[85%] h-[16px] rounded-[3px] mb-[8px] skeleton-black-loading"></p>
          <p className="w-[85%] h-[16px] rounded-[3px] mb-[14px] skeleton-black-loading"></p>
          {/* ThumbDescription */}

          <p className="w-[60%] h-[15px] rounded-[3px] skeleton-black-loading">
            {/* Author Date Time */}
          </p>
        </div>
      </div>

      <div className="w-full justify-center">
        <div className="w-[90%] h-[2px] skeleton-black-loading center-by-margin" />
      </div>

      <div className="py-[16px] px-[8px] sm:px-[12px] md:px-[20px] lg:px-[20px] lg:py-[24px]  flex flex-row">
        <div className="mt-[5px] w-[38px] space-y-2 relative flex min-w-[40px] flex-col md:ml-[-3px] md:items-start">
          {/* Author's Initials */}
          <div
            className={`w-[24px] h-[24px] rounded-full skeleton-black-loading`}
          ></div>
          {/* Author's Initials */}

          {/* Reads */}
          <div
            className={`w-[24px] h-[24px] rounded-full skeleton-black-loading`}
          ></div>
          {/* Reads */}

          {/* Copy Link */}
          <div
            className={`w-[24px] h-[24px] rounded-full skeleton-black-loading`}
          ></div>
          {/* Copy Link */}
        </div>

        {/* desc-two */}
        <div ref={ref} className="w-full">
          <p className="rounded-[3px] w-[95%] h-[16px] mb-[8px] skeleton-black-loading"></p>
          <p className="rounded-[3px] w-[95%] h-[16px] mb-[8px] skeleton-black-loading"></p>
          <p className="rounded-[3px] w-[90%] h-[16px] mb-[8px] skeleton-black-loading"></p>
          <p className="rounded-[3px] w-[85%] h-[16px] mb-[8px] skeleton-black-loading"></p>
          <p className="rounded-[3px] w-[93%] h-[16px] mb-[8px] skeleton-black-loading"></p>

          <p className="block sm:hidden rounded-[3px] w-[90%] h-[16px] mb-[8px] skeleton-black-loading"></p>
          <p className="block sm:hidden rounded-[3px] w-[85%] h-[16px] mb-[8px] skeleton-black-loading"></p>
          <p className="block sm:hidden rounded-[3px] w-[93%] h-[16px] mb-[8px] skeleton-black-loading"></p>

          <p className="rounded-[3px] w-[88%] h-[16px] mb-[8px] skeleton-black-loading"></p>
          <p className="rounded-[3px] w-[78%] h-[16px] mb-[8px] skeleton-black-loading"></p>
          <p className="rounded-[3px] w-[74%] h-[16px] skeleton-black-loading"></p>
        </div>
        {/* desc-two */}
      </div>

      <div className="w-full flex flex-col justify-center items-center">
        {/* Image-two */}
        <div className="w-[320px] h-[213.86px] sm:w-[443px] sm:h-[296px] overflow-hidden rounded-[3px] skeleton-black-loading"></div>
        {/* Image-two */}

        {/* Image-two-alt */}
        <div className="w-full max-w-[320px] sm:max-w-[443px]">
          <p className="mt-[8px] h-[12px] w-[85%] skeleton-black-loading rounded-[2px]"></p>
          <p className="mt-[8px] h-[12px] w-[65%] skeleton-black-loading rounded-[2px]"></p>
        </div>
        {/* Image-two-alt */}
      </div>
    </li>
  );
};

export default MainStorySkeleton;
