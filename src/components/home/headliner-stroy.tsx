import Image from "next/image";
import React, { Fragment } from "react";
import Link from "next/link";
import AuthorReadsDate from "../ui/author-date-reads";
import StereotypeInclined from "@/misc/logos/StereotypeInclined";

const Headliner = async () => {
  return (
    <div className="group mb-[20px] pt-[28px] md:mb-[50px] lg:top-[150px] lg:mb-0 lg:min-h-[750px] lg:pr-[40px] pb-48">
      <div className="overflow-hidden relative ml-[40px] md:ml-0 lg:ml-[20px] lg:mr-[70px] h-[464px] aspect-five-four">
        <Link href="" aria-label="">
          <Image
            width={750}
            height={500}
            alt=""
            src="https://cdn.sanity.io/images/aftdl3p2/production/74d2d18244ccaae01920cfd3c5de0b4debe4cba8-580x464.jpg"
            className="object-cover object-center rounded-[3px]"
          />
        </Link>
      </div>
      <div className="relative pb-[20px] md:pl-[80px] lg:border-none lg:pl-[165px] -mt-[20px] sm:-mt-[45px]">
        <h2
          style={{ textShadow: "0 0 5px rgba(0, 0, 0, 0.3)" }}
          className="mb-[14px] font-title text-[65px] font-[750] leading-[0.79] tracking-[-0.013em] text-white md:mb-[18px] md:text-[88px]"
        >
          <Link
            className="group-hover:shadow-highlight-blurple"
            aria-label=""
            href=""
          >
            For this startup, Nvidia GPUs are currency
          </Link>
        </h2>
        <p className="font-sans text-[#efefef] mb-[6px] text-[20px] leading-[1.2] tracking-[-0.025em] text-gray-ef md:text-[24px] md:leading-[1.1]">
          The chip shortage reaches its final form: GPU-backed startup loans.
        </p>
        <AuthorReadsDate
          name="Anirudh Bhadauria"
          reads={0}
          slug="AnirudhBhadauria"
          date="2023-08-01T16:41:06.003Z"
          className="pt-[10px]"
          ifReads={true}
        />
      </div>
      <StereotypeInclined
        fill="#fff"
        height="615.25"
        width="115"
        className="absolute top-[138px] -left-[45px] z-10"
      />
    </div>
  );
};

export default Headliner;
