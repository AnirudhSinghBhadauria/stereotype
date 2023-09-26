import React from "react";

const MoreFromSkeletonSection = () => {
  return (
    <div className="bg-torq-100 flex flex-row justify-center items-center px-[20px] pb-[16px] pt-[30px] lg:pb-[36px] lg:pt-[50px]">
      <div className="max-w-[700px] lg:max-w-[1100px] w-full">
        <p className="w-[200px] h-[20px] rounded-[2px] skeleton-white-loading mb-[30px]"></p>

        <section className="w-full">
          <ul>
            <li className="group last-of-type:border-b-0 flex flex-row items-start lg:items-center py-[16px] border-b-[1px] border-[#000]/30">
              <div className="ml-[10px] mr-[20px] aspect-square">
                {/* Image */}
                <div className="w-[60px] h-[60px] rounded-[2px] overflow-hidden skeleton-white-loading"></div>
                {/* Image */}
              </div>

              <div className="w-full flex flex-col">
                {/* Title */}
                <h3 className="w-[90%] h-[20px] lg:h-[30px] rounded-[2px] lg:rounded-[3px] skeleton-white-loading mb-[10px]"></h3>
                <h3 className="w-[40%] h-[20px] lg:h-[30px] rounded-[2px] lg:rounded-[3px] skeleton-white-loading"></h3>
                {/* Title */}
              </div>
            </li>
            <li className="group last-of-type:border-b-0 flex flex-row items-start lg:items-center py-[16px] border-b-[1px] border-[#000]/30">
              <div className="ml-[10px] mr-[20px] aspect-square">
                {/* Image */}
                <div className="w-[60px] h-[60px] rounded-[2px] overflow-hidden skeleton-white-loading"></div>
                {/* Image */}
              </div>

              <div className="w-full flex flex-col">
                {/* Title */}
                <h3 className="w-[90%] h-[20px] lg:h-[30px] rounded-[2px] lg:rounded-[3px] skeleton-white-loading mb-[10px]"></h3>
                <h3 className="w-[40%] h-[20px] lg:h-[30px] rounded-[2px] lg:rounded-[3px] skeleton-white-loading"></h3>
                {/* Title */}
              </div>
            </li>
            <li className="group last-of-type:border-b-0 flex flex-row items-start lg:items-center py-[16px] border-b-[1px] border-[#000]/30">
              <div className="ml-[10px] mr-[20px] aspect-square">
                {/* Image */}
                <div className="w-[60px] h-[60px] rounded-[2px] overflow-hidden skeleton-white-loading"></div>
                {/* Image */}
              </div>

              <div className="w-full flex flex-col">
                {/* Title */}
                <h3 className="w-[90%] h-[20px] lg:h-[30px] rounded-[2px] lg:rounded-[3px] skeleton-white-loading mb-[10px]"></h3>
                <h3 className="w-[40%] h-[20px] lg:h-[30px] rounded-[2px] lg:rounded-[3px] skeleton-white-loading"></h3>
                {/* Title */}
              </div>
            </li>
            <li className="group last-of-type:border-b-0 flex flex-row items-start lg:items-center py-[16px] border-b-[1px] border-[#000]/30">
              <div className="ml-[10px] mr-[20px] aspect-square">
                {/* Image */}
                <div className="w-[60px] h-[60px] rounded-[2px] overflow-hidden skeleton-white-loading"></div>
                {/* Image */}
              </div>

              <div className="w-full flex flex-col">
                {/* Title */}
                <h3 className="w-[90%] h-[20px] lg:h-[30px] rounded-[2px] lg:rounded-[3px] skeleton-white-loading mb-[10px]"></h3>
                <h3 className="w-[40%] h-[20px] lg:h-[30px] rounded-[2px] lg:rounded-[3px] skeleton-white-loading"></h3>
                {/* Title */}
              </div>
            </li>
          </ul>
          {/* Author Intro */}
          <p className="w-[90%] sm:w-[70%] h-[20px] rounded-[2px] skeleton-white-loading mt-[30px] mb-[8px] sm:mb-[12px]"></p>
          <p className="block sm:hidden w-[40%] h-[20px] rounded-[2px] skeleton-white-loading mb-[12px]"></p>
          {/* Author Intro */}
        </section>
      </div>
    </div>
  );
};

export default MoreFromSkeletonSection;
