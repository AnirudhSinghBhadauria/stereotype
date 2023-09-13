import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getDate } from "@/lib/global/convert-date";
import AuthorReadsDate from "../ui/author-date-reads";
import { AuthorCardInterface } from "@/utils/interfaces";
import { getColors } from "@/lib/global/get-colors";

const StoryCard = async ({
  Author,
  Tag,
  ThumbTitle,
  Reads,
  CreatedAt,
  ThumbImage,
  Alt,
  Slug,
  category,
  BackgroundColor,
  format,
}: AuthorCardInterface) => {
  const connect = `${process.env.NEXT_PUBLIC_DOMAIN_URL}/Story/${
    category.Category
  }/${format}/${Slug}/${getColors(BackgroundColor).colorSlug}`;

  return (
    <li className="border-b-[1px] border-b-[#313131] max-w-[700px] group flex flex-row items-center justify-between py-[16px] last-of-type:border-b-0 max-w-container-md sm:pl-[20px] sm:pr-[60px] lg:py-[40px] md:hover:bg-[#181818]">
      <div className="flex flex-col md:flex-row items-start md:items-center">
        <Link
          href={connect}
          aria-label={`A Post made by ${Author.Name} tagged : ${Tag}`}
          className="h-fit z-10 font-poly text-[10.76px] tracking-[0.15em] uppercase leading-[1.2] relative mr-[20px] hidden md:block -rotate-180 border-l border-l-torq-400 text-[#bdbdbd] pl-[4px] font-[530]"
          style={{
            writingMode: "vertical-rl",
            textOrientation: "sideways",
          }}
        >
          {Tag}
        </Link>

        <Link
          href={connect}
          aria-label={`A Post made by ${Author.Name} tagged : ${Tag}`}
          className="h-fit z-10 font-poly text-[10.76px] tracking-[0.15em] uppercase leading-[1.2] relative mr-[20px] mb-[6px] pb-[4px] block md:hidden border-b border-b-torq-400 text-[#bdbdbd] font-[530]"
        >
          {Tag}
        </Link>

        <div className="max-w-[260px] sm:max-w-[360px]  flex flex-col space-y-4">
          <Link
            href={connect}
            aria-label={`A Post made by ${Author.Name} tagged : ${Tag}`}
            className="group-hover:underline group-hover:underline-on-hover font-poly text-[20px] font-extrabold leading-none tracking-[0.01em] md:text-[24px] text-white text-wrap"
          >
            {ThumbTitle}
          </Link>
          <AuthorReadsDate
            name={Author.Name}
            date={getDate(CreatedAt)}
            reads={Reads}
            slug={Author.Slug}
            ifReads={true}
          />
        </div>
      </div>

      <Link
        href={connect}
        aria-label={`A Post made by ${Author.Name} tagged : ${Tag}`}
        className="relative w-[73.4px] h-[73.4px] sm:w-[198px] sm:h-[132px] rounded-[3px] overflow-hidden border-[1px] border-[#313131]"
      >
        <Image
          src={ThumbImage}
          fill
          alt={Alt}
          className=" rounded-[3px]"
        />
      </Link>
    </li>
  );
};

export default StoryCard;
