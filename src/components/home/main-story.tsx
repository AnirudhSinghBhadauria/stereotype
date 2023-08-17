import Image from "next/image";
import Link from "next/link";
import React from "react";
import AuthorReadsDate from "../ui/author-date-reads";
import CopyPostLink from "./post-link-copy";
import { MainStoriesThumb } from "@/utils/interfaces";
import { getDate } from "@/lib/global/convert-date";

const MainStory = ({ postProps }: { postProps: MainStoriesThumb }) => {
  const {
    Author,
    Reads,
    Slug,
    CreatedAt,
    Summary,
    SummaryHighlighted,
    ThumbDescription,
    ThumbImageOne,
    ThumbImageOneDescription,
    ThumbImageTwo,
    ThumbImageTwoDescription,
    ThumbTitle,
    Tag,
  } = postProps;

  return (
    <li className="pb-[44px] last-of-type:pb-[20px] last-of-type:border-b-[0px] last-of-type:mb-[0px] mb-[11.85px] border-b-[8px] border-[#313131] hover:bg-[#181818cf]">
      <div className="full-post relative pb-[10px] lg:py-[10px] sm:max-w-[500px] ">
        <div className="ml-auto mt-[24px] sm:ml-[9.88px] w-[320px] sm:w-[480px]">
          <div className="overflow-hidden relative aspect-five-four w-full h-[319px] rounded-[2px] border border-solid border-[#313131]">
            <Link
              href="LINK TO THE POST"
              aria-label={`Link to the post tagged : ${Tag}`}
            >
              <Image
                src={ThumbImageOne}
                alt={ThumbImageOneDescription}
                width={750}
                height={500}
                className="object-cover object-center"
              />
            </Link>
          </div>
        </div>
        <div className="relative z-10 pt-[12px] sm:px-[16px] lg:mb-[8px] mr-[25px] sm:w-[440px] sm:ml-auto sm:mr-[10px] -mt-[30px] pr-[12px]">
          <Link
            href="LINK TO THE POST"
            aria-label={`Link to the post tagged : ${Tag}`}
          >
            <h2
              style={{ textShadow: "0 0 40px rgb(0, 0, 0)" }}
              className="mb-[8px] font-poly text-[30px] font-extrabold leading-none sm:text-[36px]"
            >
              {ThumbTitle}
            </h2>
            <p className="sm:text-[19.5px] font-sans text-[20px] font-normal leading-[1.2] tracking-[0.005em] mb-[10px]">
              {ThumbDescription}
            </p>
          </Link>
          <AuthorReadsDate
            date={getDate(CreatedAt)}
            ifReads={true}
            name={Author.Name}
            reads={Reads}
            slug={Author.Slug}
          />
        </div>
      </div>

      <div className="w-full justify-center">
        <div className="w-[90%] h-[2px] bg-[#313131] center-by-margin" />
      </div>

      <div className="py-[16px] px-0 lg:py-[24px] md:px-[10px] flex flex-row">
        <div className="mt-[5px] w-[38px] space-y-2 relative flex min-w-[40px] flex-col md:ml-[-3px] md:items-start">
          <Link
            href={`/Author/${Author.Slug}`}
            aria-label={`Link to the Profile Page of Author : ${Author.Name}`}
            className="transition-all duration-75 ease-linear font-poly font-semibold text-[12px] flex flex-row justify-center items-center w-[24px] h-[24px] rounded-full bg-mustard-100 text-black hover:bg-mustard-100 hover:text-[#000] uppercase"
          >
            {Author.Name.slice(0, 1)}
          </Link>
          <div className="font-poly font-extrabold text-[11px] flex flex-row justify-center items-center w-[24px] h-[24px] rounded-full bg-white text-black uppercase">
            {Reads}
          </div>
          <CopyPostLink text={`http://localhost:3000/Author/${Author.Slug}`} />
        </div>
        <Link
          href="LINK TO THE POST"
          aria-label={`Link to the post tagged : ${Tag}`}
          className="w-full flex flex-col"
        >
          <p className="font-gen text-[17px] font-[450]  leading-[1.3] text-[#efefef]">
            <span className="font-semibold text-[#fff]">
              {SummaryHighlighted}
            </span>
            &nbsp; {Summary}
          </p>
        </Link>
      </div>

      <div className="w-full flex flex-row justify-center items-center">
        <Link
          href="LINK TO THE POST"
          aria-label={`Link to the post tagged : ${Tag}`}
        >
          <div className="w-[443px] h-[296px] overflow-hidden rounded-[2px] border border-solid border-[#313131]">
            <Image
              src={ThumbImageTwo}
              alt={ThumbImageTwoDescription}
              width={750}
              height={500}
              className="object-cover object-center"
            />
          </div>
          <p className="max-w-[443px] mt-[6px] font-gen text-[14px] font-medium leading-[1.3]  text-[#949494]">
            {ThumbImageTwoDescription}
          </p>
        </Link>
      </div>
    </li>
  );
};

export default MainStory;
