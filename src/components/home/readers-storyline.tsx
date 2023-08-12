import React from "react";

const ReaderStoryline = () => {
  return (
    <div>
      <section className="border-b border-b-[#313131]  relative pl-[38px] font-poly lg:pl-[50px]">
        <div className="pb-[24px]">
          <h2 className="mb-[10.75px] text-[16.25px] leading-[1.2] tracking-[0.02]  text-white">
            Reader's Streamline
          </h2>
          <p className="primary-small-torq-11px mb-[1.35px] text-[#949494] tracking-[0.15em]">
            FEED REFRESHED 36 SECONDS AGO
          </p>
          <p className="primary-small-torq-11px leading-[1.4] tracking-[0.15em]">
            Don't live up to your stereotypes.
          </p>
        </div>

        <div className="absolute left-[16px] top-[5px] h-[12px] w-[12px] origin-center rounded-full bg-torq-100"></div>
      </section>
    </div>
  );
};

export default ReaderStoryline;
