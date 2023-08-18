import Link from "next/link";
import React from "react";
import AuthorReadsDate from "../ui/author-date-reads";
import Image from "next/image";
import { TopStoryCardInterface } from "@/utils/interfaces";
import { getColors } from "@/lib/global/get-colors";

const StoryCard = ({
  Author,
  CreatedAt,
  Slug,
  ThumbImage,
  ThumbImageDescription,
  ThumbTitle,
  Tag,
  number,
  BackgroundColor,
  Category,
}: TopStoryCardInterface) => {
  const color = getColors(BackgroundColor).colorSlug;

  return (
    <li className="group relative mx-auto flex flex-row border-b border-[#313131] text-white last-of-type:border-b-0 md:mx-0 md:max-w-full md:border-b-0 [&>div>div]:first-of-type:mt-0 [&>div>div]:first-of-type:pt-0 [&>div>div]:last-of-type:pb-0 [&>div>div]:last-of-type:md:border-b-0 ">
      <div className="flex flex-row w-full items-start">
        <div className="my-[16px] ml-[20px] mr-[40px] hidden justify-center h-full items-start self-stretch md:flex lg:ml-0 lg:mr-[20px]">
          <div className=" z-10 flex h-5 w-5 items-center justify-center rounded-full bg-[#313131E6] font-poly text-[10px] text-torq-100">
            {number}
          </div>
        </div>

        <div className="flex grow flex-row border-[#313131] py-[16px] md:flex-row-reverse md:justify-between md:border-b">
          <div className="overflow-hidden w-[100px] h-[80px] aspect-five-four rounded-[3px]">
            <Link
              href={`/Story/${Category.Category}/Headline/${Slug}/${color}`}
              aria-label={`A post written by ${Author.Name} taggeed: ${Tag}`}
            >
              <Image
                src={ThumbImage}
                alt={ThumbImageDescription}
                width={128}
                height={102}
                className="object-cover object-center"
              />
            </Link>
          </div>
          <div className="flex">
            <div className="md:w-[320px] md:max-w-[320px] lg:w-[240px] lg:max-w-[240px] lg:pr-[10px]">
              <h2 className="font-poly text-[20px] font-bold leading-[1] tracking-[0.01em] md:text-[24px] lg:text-[20.75px]">
                <Link
                  href={`/Story/${Category.Category}/Headline/${Slug}/${color}`}
                  aria-label={`A post written by ${Author.Name} taggeed: ${Tag}`}
                  className="group-hover:underline-on-hover"
                >
                  {ThumbTitle}
                </Link>
              </h2>
              <AuthorReadsDate
                date={CreatedAt}
                name={Author.Name}
                slug={Author.Slug}
                className="pt-[10px]"
                ifReads={false}
              />
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default StoryCard;
