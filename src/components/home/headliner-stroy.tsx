import Image from "next/image";
import React from "react";
import Link from "next/link";
import AuthorReadsDate from "../ui/author-date-reads";
import StereotypeInclined from "@/misc/logos/StereotypeInclined";
import { HeadlineInterface } from "@/utils/interfaces";
import { getHeadlines } from "@/lib/Home/get-headline";
import { getColors } from "@/lib/global/get-colors";
import { getDateTimeZone } from "@/lib/global/convert-date";
import { Category } from "@prisma/client";

const Headliner = async ({
  StoryCategory,
}: {
  StoryCategory?: Category | null;
}) => {
  const ifStoryCategory = StoryCategory ? StoryCategory : null;

  const headline: HeadlineInterface | null = await getHeadlines(
    ifStoryCategory
  );

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
    <div className="group mb-[20px] pt-[28px] md:mb-[50px] lg:top-[150px] lg:mb-0 lg:min-h-[750px] lg:pr-[40px]">
      <div className="overflow-hidden relative ml-[40px] md:ml-0 lg:ml-[20px] lg:mr-[70px] h-[464px] aspect-five-four">
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
      <div className="relative pb-[20px] md:pl-[80px] lg:border-none lg:pl-[165px] -mt-[20px] sm:-mt-[45px]">
        <h2
          style={{ textShadow: "0 0 5px rgba(0, 0, 0, 0.3)" }}
          className="mb-[14px] font-title text-[65px] font-[750] leading-[0.79] tracking-[-0.013em] text-white md:mb-[18px] md:text-[88px]"
        >
          <Link
            className="group-hover:shadow-highlight-blurple"
            aria-label={`A post written by ${Author.Name} taggeed: ${Tag}`}
            href={`/Story/${Category.Category}/Headline/${Slug}/${color}`}
          >
            {ThumbTitle}
          </Link>
        </h2>
        <p className="font-sans text-[#efefef] mb-[6px] text-[20px] leading-[1.2] tracking-[-0.025em] text-gray-ef md:text-[24px] md:leading-[1.1]">
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
        height="588.5"
        width="110"
        className="absolute top-[140px] -left-[40px] z-10 title-shadow"
      />
    </div>
  );
};

export default Headliner;
