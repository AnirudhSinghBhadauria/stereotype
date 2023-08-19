import React from "react";

const ReaderStoryline = ({
  message,
  date,
}: {
  message: string;
  date: string;
}) => {
  return (
    <div>
      <section className="relative pl-[38px] font-poly lg:pl-[50px]">
        <div>
          <h2 className="mb-[10.75px] text-[16.25px] leading-[1.2] tracking-[0.02]  text-white">
            Reader's Streamline
          </h2>
          <p className="uppercase primary-small-gray-11px mb-[1.35px]">
            {`feed as per ${date}`}
          </p>
          <p className="uppercase primary-small-torq-11px pb-[24px]">
            {message}
          </p>
          <div className="w-[20%] h-[1.5px] bg-[#313131]"></div>
        </div>

        <div className="absolute left-[16px] top-[5px] h-[12px] w-[12px] origin-center rounded-full bg-[#313131]"></div>
      </section>
    </div>
  );
};

export default ReaderStoryline;
