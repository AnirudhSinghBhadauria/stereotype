import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getDate } from "@/lib/global/convert-date";

const StoryCard = async ({
  Author,
  Tag,
  ThumbTitle,
  Reads,
  CreatedAt,
  Slug,
  ThumbImage,
  Alt,
}: {
  Author: { Name: string; Slug: string };
  Tag: string;
  ThumbTitle: string;
  Reads: number;
  CreatedAt: string;
  Slug: string;
  ThumbImage: string;
  Alt: string;
}) => {
  return (
    <li className="border-b-[1px] border-b-[#313131] max-w-[700px] group flex flex-row items-center justify-between py-[16px] last-of-type:border-b-0 max-w-container-md sm:pl-[20px] sm:pr-[60px] lg:py-[40px] hover:bg-[#181818]">
      <div className="flex flex-row items-center">
        <Link
          href="LINK TO THE POST"
          aria-label={`A Post made by ${Author.Name} tagged : ${Tag}`}
          className="h-fit z-10 font-poly text-[10.76px] tracking-[0.15em] uppercase leading-[1.2] relative mr-[20px] hidden md:block -rotate-180 border-l border-l-torq-400 text-[#bdbdbd] pl-[4px] font-[530]"
          style={{
            writingMode: "vertical-rl",
            textOrientation: "sideways",
          }}
        >
          {Tag}
        </Link>

        <div className="max-w-[360px] w-[360px] flex flex-col space-y-4">
          <Link
            href="LINK TO THE POST"
            aria-label={`A Post made by ${Author.Name} tagged : ${Tag}`}
            className="group-hover:underline group-hover:underline-on-hover font-poly text-[20px] font-extrabold leading-none tracking-[0.01em] md:text-[24px] text-white text-wrap"
          >
            {ThumbTitle}
          </Link>
          <div className="flex flex-row">
            <Link
              href={`/Author/${Author.Slug}`}
              aria-label={`See ${Author.Name}'s Profile.`}
              className="uppercase mr-[8px] leading-[1.2] font-medium font-poly text-[10.79px] tracking-[0.175em] text-torq-100 hover:underline-on-hover-author"
            >
              {Author.Name}
            </Link>
            <p className="uppercase mr-[8px] leading-[1.2] font-medium font-poly text-[10.78px] tracking-[0.175em] text-[#949494]">
              {`${Reads} READS`}
            </p>
            <p className="uppercase mr-[8px] leading-[1.2] font-medium font-poly text-[10.78px] tracking-[0.175em] text-[#949494]">
              {getDate(CreatedAt)}
            </p>
          </div>
        </div>
      </div>

      <Link
        href="LINK TO THE POST"
        aria-label={`A Post made by ${Author.Name} tagged : ${Tag}`}
        className="w-[198px] h-[132] rounded-[3px] overflow-hidden border-[1px] border-[#313131]"
      >
        <Image
          src={ThumbImage}
          width={480}
          height={320}
          alt={Alt}
          className="bg-cover object-fill rounded-[3px]"
        />
      </Link>
    </li>
  );
};

export default StoryCard;
