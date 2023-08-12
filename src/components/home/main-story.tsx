import Image from "next/image";
import Link from "next/link";
import React from "react";
import AuthorReadsDate from "../ui/author-date-reads";
import LinkSvg from "@/misc/svg/link-svg";
import CopyPostLink from "./post-link-copy";

const MainStory = () => {
  return (
    <li className="pb-[44px] last-of-type:pb-[20px] last-of-type:border-b-[0px] border-b-[8px] border-[#313131] hover:bg-[#181818cf]">
      <div className="full-post relative pb-[16px] lg:py-[20px] sm:max-w-[500px] ">
        <div className="ml-auto mt-[24px] sm:ml-[9.88px] w-[320px] sm:w-[480px]">
          <div className="overflow-hidden relative aspect-five-four w-full h-[319px] rounded-[2px] border border-solid border-[#313131]">
            <Link href="LINK TO THE POST" aria-label="">
              <Image
                src="https://cdn.sanity.io/images/aftdl3p2/production/74d2d18244ccaae01920cfd3c5de0b4debe4cba8-580x464.jpg"
                alt=""
                width={750}
                height={500}
                className="object-cover object-center"
              />
            </Link>
          </div>
        </div>
        <div className="relative z-10 pt-[12px] sm:px-[16px] lg:mb-[8px] mr-[25px] sm:w-[440px] sm:ml-auto sm:mr-[10px] -mt-[30px] pr-[12px]">
          <Link href="LINK TO THE POST" aria-label="">
            <h2
              style={{ textShadow: "0 0 40px rgb(0, 0, 0)" }}
              className="mb-[8px] font-poly text-[30px] font-extrabold leading-none sm:text-[36px]"
            >
              Lorem ipsum dolor sit amet consectetu?
            </h2>
            <p className="sm:text-[19.5px] font-sans text-[20px] font-normal leading-[1.2] tracking-[0.005em] mb-[10px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit Mollitia
              iure perferendis alias blanditiis molestiae voluptatum, quisquam
              deserunt obcaecati
            </p>
          </Link>
          <AuthorReadsDate
            date="AUG 6"
            ifReads={true}
            name="Anirudh bhadauria"
            reads={0}
            slug="AnirudhBhadauria"
          />
        </div>
      </div>

      <div className="w-full justify-center">
        <div className="w-[90%] h-[2px] bg-[#313131] center-by-margin" />
      </div>

      <div className="py-[16px] px-0 lg:py-[24px] md:px-[10px] flex flex-row">
        <div className="mt-[5px] w-[38px] space-y-2 relative flex min-w-[40px] flex-col md:ml-[-3px] md:items-start">
          <Link
            href="/Author/AnirudhBhadauria"
            aria-label=""
            className="transition-all duration-75 ease-linear font-poly font-semibold text-[12px] flex flex-row justify-center items-center w-[24px] h-[24px] rounded-full bg-mustard-100 text-black hover:bg-mustard-100 hover:text-[#000] uppercase"
          >
            A
          </Link>
          <div className="font-poly font-extrabold text-[11px] flex flex-row justify-center items-center w-[24px] h-[24px] rounded-full bg-white text-black uppercase">
            0
          </div>
          {/* click to copy the link of the post */}
          <CopyPostLink text="http://localhost:3000/Author/AnirudhBhadauria" />
        </div>
        <Link
          href="LINK TO THE POST"
          aria-label=""
          className="w-full flex flex-col"
        >
          <p className="font-gen text-[17px] font-[450]  leading-[1.3] text-[#efefef]">
            <span className="font-semibold text-[#fff]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit, Veniam
              deserunt.
            </span>
            &nbsp; Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
            quia dolorem excepturi iure ea explicabo dolore eligendi
            praesentium, doloribus placeat, suscipit tempora voluptatibus ut aut
            ipsa esse error labore minus! A quia dolorem excepturi iure ea
            explicabo dolore eligendi praesentium, Lorem ipsum dolor sit amet,
            consectetur adipisicing elit, lorem ipsum dolor sit amet,
            consectetur adipisicing elit.
          </p>
        </Link>
      </div>

      <div className="w-full flex flex-row justify-center items-center">
        <Link href="LINK TO THE POST" aria-label="">
          <div className="w-[443px] h-[296px] overflow-hidden rounded-[2px] border border-solid border-[#313131]">
            <Image
              src="https://cdn.sanity.io/images/aftdl3p2/production/74d2d18244ccaae01920cfd3c5de0b4debe4cba8-580x464.jpg"
              alt=""
              width={750}
              height={500}
              className="object-cover object-center"
            />
          </div>
          <p className="max-w-[443px] mt-[6px] font-gen text-[14px] font-medium leading-[1.3]  text-[#949494]">
            This is the alt text for the image, include text for the image too.
          </p>
        </Link>
      </div>
    </li>
  );
};

export default MainStory;
