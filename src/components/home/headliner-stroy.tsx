import Image from "next/image";
import React from "react";
import Link from "next/link";
import AuthorReadsDate from "../ui/author-date-reads";
import StereotypeInclined from "@/misc/logos/StereotypeInclined";
import { HeadlineInterface } from "@/utils/interfaces";
import { getHeadlineForCategory, getHeadlines } from "@/lib/Home/get-headline";
import { getColors } from "@/lib/global/get-colors";
import { getDateTimeZone } from "@/lib/global/convert-date";
import { Category } from "@prisma/client";
import Stereotype from "@/misc/logos/Stereotype";

const Headliner = async ({
  StoryCategory,
}: {
  StoryCategory?: Category;
  // StoryCategory?: Category | null;
}) => {
  // const ifStoryCategory = StoryCategory ? StoryCategory : null;

  let headline: HeadlineInterface | null = !StoryCategory
    ? await getHeadlines()
    : await getHeadlineForCategory(StoryCategory);

  const {
    Author,
    Reads,
    Slug,
    ThumbDescription,
    ThumbImage,
    ThumbImageDescription,
    ThumbTitle,
    CreatedAt,
    Tag,
    Category,
    BackgroundColor,
  } = headline!;

  const color = getColors(BackgroundColor).colorSlug;

  return (
    <div className="group mb-[20px] pt-[28px] md:mb-[50px] lg:top-[150px] lg:mb-0 lg:min-h-[750px] lg:pr-[40px] border-b-[#313131] border-b-[1px] lg:border-b-[0px]">
      <div className="overflow-hidden relative ml-[40px] md:ml-0 lg:ml-[20px] lg:mr-[70px] h-auto lg:h-[464px] aspect-five-four">
        <Link
          href={`/Story/${Category.Category}/Headline/${Slug}/${color}`}
          aria-label={`A post written by ${Author.Name} taggeed: ${Tag}`}
        >
          <Image
            priority
            width={750}
            height={500}
            src={ThumbImage}
            alt={ThumbImageDescription}
            className="object-cover object-center rounded-[3px]"
          />
        </Link>
      </div>
      <div className="relative pb-[20px] md:pl-[80px] lg:border-none lg:pl-[165px] -mt-[20px] sm:-mt-[40px]">
        <h2
          style={{ textShadow: "0 0 5px rgba(0, 0, 0, 0.3)" }}
          className="mb-[14px] font-title text-[65px] md:text-[91px] lg:text-[88px] font-[750] leading-[0.78] tracking-[-0.013em] text-white md:mb-[18px]"
        >
          <Link
            className="sm:group-hover:shadow-highlight-blurple"
            aria-label={`A post written by ${Author.Name} taggeed: ${Tag}`}
            href={`/Story/${Category.Category}/Headline/${Slug}/${color}`}
          >
            {ThumbTitle}
          </Link>
        </h2>
        <p className="font-sans text-[#efefef] mb-[6px] text-[20.25px] leading-[1.2] md:text-[24px] md:leading-[1.1] tracking-[-0.025em] ">
          {ThumbDescription}
        </p>
        <AuthorReadsDate
          name={Author.Name}
          reads={Reads}
          slug={Author.Slug}
          date={getDateTimeZone(CreatedAt.toString())}
          className="pt-[10px]"
          ifReads={true}
        />
      </div>
      <StereotypeInclined
        fill="#fff"
        className="hidden md:block absolute h-[481.5px] w-[90px] lg:h-[588.5px] lg:w-[110px] top-[165px] -left-[45px] lg:top-[140px] lg:-left-[40px] z-10 title-shadow"
      />
      <Stereotype height={50} width={269.5} fill="white" className="absolute top-[55px] left-[10px] title-shadow md:hidden"/>
    </div>
  );
};

export default Headliner;
