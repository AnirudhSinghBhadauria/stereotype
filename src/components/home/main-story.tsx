import Image from "next/image";
import Link from "next/link";
import React from "react";
import AuthorReadsDate from "../ui/author-date-reads";
import CopyPostLink from "./post-link-copy";
import { MainStoriesThumb } from "@/utils/interfaces";
import { getDate, getDateTimeZone } from "@/lib/global/convert-date";
import { getColors } from "@/lib/global/get-colors";
import LinkSvg from "@/misc/svg/link-svg";

const MainStory = ({ postProps }: { postProps: MainStoriesThumb }) => {
  const {
    Author,
    Reads,
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
    Slug,
    Category,
    BackgroundColor,
  } = postProps;

  const color = getColors(BackgroundColor).colorSlug;

  return (
    <li
      key={Slug}
      className="pb-[44px] last-of-type:pb-[20px] last-of-type:border-b-[0px] last-of-type:mb-[0px] mb-[11.85px] border-b-[8px] border-[#313131] sm:hover:bg-[#181818cf]"
    >
      <div className="full-post relative pb-[16px] pt-[8px] lg:pb-[10px] lg:py-[10px] sm:max-w-[500px] ">
        <div className="ml-auto mt-[24px] sm:ml-[9.88px] w-[320px] sm:w-[480px]">
          <div className="overflow-hidden relative aspect-five-four w-full h-[213.86px] sm:h-[319px] rounded-[2px] border border-solid border-[#313131]">
            <Link
              href={`/Story/${Category.Category}/Main/${Slug}/${color}`}
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
            href={`/Story/${Category.Category}/Main/${Slug}/${color}`}
            aria-label={`Link to the post tagged : ${Tag}`}
          >
            <h2
              style={{ textShadow: "0 0 40px rgb(0, 0, 0)" }}
              className="mb-[8px] font-poly text-[31px] font-extrabold leading-none sm:text-[36px]"
            >
              {ThumbTitle}
            </h2>
            <p className="sm:text-[19.5px] font-sans text-[20px] font-normal leading-[1.2] tracking-[0.005em] mb-[10px]">
              {ThumbDescription}
            </p>
          </Link>
          <AuthorReadsDate
            date={getDateTimeZone(CreatedAt.toString())}
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

      <div className="py-[16px] px-[8px] sm:px-[12px] md:px-[20px] lg:px-[20px] lg:py-[24px]  flex flex-row">
        <div className="mt-[5px] w-[38px] space-y-2 relative flex min-w-[40px] flex-col md:ml-[-3px] md:items-start">
          <Link
            style={{ backgroundColor: getColors(BackgroundColor).primary }}
            href={`/Author/${Author.Slug}`}
            aria-label={`Link to the Profile Page of Author : ${Author.Name}`}
            className="transition-all duration-75 ease-linear font-poly font-semibold text-[12px] flex flex-row justify-center items-center w-[24px] h-[24px] rounded-full text-black hover:bg-mustard-100 hover:text-[#000] uppercase"
          >
            {Author.Name.slice(0, 1)}
          </Link>
          <div className="font-poly font-extrabold text-[11px] flex flex-row justify-center items-center w-[24px] h-[24px] rounded-full bg-white text-black uppercase">
            {Reads}
          </div>
          <CopyPostLink
            height="24px"
            width="24px"
            buttonClasses="group flex flex-row justify-center items-center transition-all ease-linear duration-100 rounded-full text-black bg-white"
            text={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/Story/${Category.Category}/Main/${Slug}/${color}`}
          />
        </div>
        <Link
          href={`/Story/${Category.Category}/Main/${Slug}/${color}`}
          aria-label={`Link to the post tagged : ${Tag}`}
          className="w-full flex flex-col"
        >
          <p className="font-poly text-[17px] font-[450] leading-[1.3] text-[#efefef]">
            <span className="font-extrabold text-[#fff]">
              {SummaryHighlighted}
            </span>
            &nbsp; {Summary}
          </p>
        </Link>
      </div>

      <div className="w-full flex flex-row justify-center items-center">
        <Link
          href={`/Story/${Category.Category}/Main/${Slug}/${color}`}
          aria-label={`Link to the post tagged : ${Tag}`}
        >
          <div className="w-[320px] h-[213.86px] sm:w-[443px] sm:h-[296px] overflow-hidden rounded-[2px] border border-solid border-[#313131]">
            <Image
              src={ThumbImageTwo}
              alt={ThumbImageTwoDescription}
              width={750}
              height={500}
              className="object-cover object-center"
            />
          </div>
          <p className="max-w-[320px] sm:max-w-[443px] mt-[6px] font-gen text-[14px] font-medium leading-[1.3]  text-[#949494]">
            {ThumbImageTwoDescription}
          </p>
        </Link>
      </div>
    </li>
  );
};

export default MainStory;
