import Link from "next/link";
import React from "react";

const MostPopular = () => {
  return (
    <ol className="sticky m-auto my-[50px] w-full rounded-[4px] p-[20px] lg:mb-[40px] lg:mt-[0px] bg-white top-[90px] text-black">
      <div
        style={{
          textOrientation: "sideways",
          writingMode: "vertical-lr",
        }}
        className="w-fit h-fit absolute right-[-25px] top-[17px] whitespace-nowrap text-center font-title text-[134px] font-black leading-[1] text-torq-100 rotate-180 -z-10"
      >
        Most Popular
      </div>

      <li className="flex flex-col w-full">
        <div className="flex flex-row justify-start items-start space-x-[18px] w-full">
          <p className="font-poly text-[15px] text-purple-100 font-extrabold -translate-y-[2px]">
            1
          </p>
          <p className="hover:text-purple-100 inline w-full leading-[1.2] font-poly text-[16px] font-[650] tracking-[0.01em]">
            <Link href="" aria-label="">
              X glitch wipes out most pictures and links tweeted before December
              2014
            </Link>
          </p>
        </div>
        <hr className=" my-[20px] w-[calc(50%-2px)] border text-black/0 border-b-purple-100" />
      </li>
      <li className="flex flex-col w-full">
        <div className="flex flex-row justify-start items-start space-x-[18px] w-full">
          <p className="font-poly text-[15px] text-purple-100 font-extrabold -translate-y-[2px]">
            2
          </p>
          <p className="hover:text-purple-100 inline w-full leading-[1.2] font-poly text-[16px] font-[650] tracking-[0.01em]">
            <Link href="" aria-label="">
              X glitch wipes out most pictures and links tweeted before December
              2014
            </Link>
          </p>
        </div>
        <hr className=" my-[20px] w-[calc(50%-2px)] border text-black/0 border-b-purple-100" />
      </li>
      <li className="flex flex-col w-full">
        <div className="flex flex-row justify-start items-start space-x-[18px] w-full">
          <p className="font-poly text-[15px] text-purple-100 font-extrabold -translate-y-[2px]">
            3
          </p>
          <p className="hover:text-purple-100 inline w-full leading-[1.2] font-poly text-[16px] font-[650] tracking-[0.01em]">
            <Link href="" aria-label="">
              X glitch wipes out most pictures and links tweeted before December
              2014
            </Link>
          </p>
        </div>
        <hr className=" my-[20px] w-[calc(50%-2px)] border text-black/0 border-b-purple-100" />
      </li>
      <li className="flex flex-col w-full">
        <div className="flex flex-row justify-start items-start space-x-[18px] w-full">
          <p className="font-poly text-[15px] text-purple-100 font-extrabold -translate-y-[2px]">
            4
          </p>
          <p className="hover:text-purple-100 inline w-full leading-[1.2] font-poly text-[16px] font-[650] tracking-[0.01em]">
            <Link href="" aria-label="">
              X glitch wipes out most pictures and links tweeted before December
              2014
            </Link>
          </p>
        </div>
        <hr className=" my-[20px] w-[calc(50%-2px)] border text-black/0 border-b-purple-100" />
      </li>
      <li className="flex flex-col w-full">
        <div className="flex flex-row justify-start items-start space-x-[18px] w-full">
          <p className="font-poly text-[15px] text-purple-100 font-extrabold -translate-y-[2px]">
            5
          </p>
          <p className="hover:text-purple-100 inline w-full leading-[1.2] font-poly text-[16px] font-[650] tracking-[0.01em]">
            <Link href="" aria-label="">
              X glitch wipes out most pictures and links tweeted before December
              2014
            </Link>
          </p>
        </div>
        <hr className=" my-[20px] w-[calc(50%-2px)] border text-black/0 border-b-purple-100" />
      </li>
    </ol>
  );
};

export default MostPopular;
