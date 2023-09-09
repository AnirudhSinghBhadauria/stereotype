import StereotypeStroked from "@/misc/logos/stereotype-stroked";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SideStoryThumb } from "@/utils/interfaces";
import { getDate } from "@/lib/global/convert-date";
import { getColors } from "@/lib/global/get-colors";

const SideStory = ({ postProps }: { postProps: SideStoryThumb }) => {
  const {
    Author,
    Category,
    Reads,
    Slug,
    Tag,
    ThumbDescriptionOne,
    ThumbDescriptionTwo,
    ThumbImage,
    ThumbImageDescription,
    CreatedAt,
    BackgroundColor,
    ThumbTitle,
  } = postProps;

  const { primary, secondary, tertiary, quadrple, colorSlug } =
    getColors(BackgroundColor);

  const textHoverColor = `${
    BackgroundColor === "ORANGE"
      ? "hover:text-[#ffc2e7]"
      : BackgroundColor === "LEAF"
      ? "hover:text-[#309875]"
      : "hover:text-[#5200ff]"
  }`;

  return (
    <div className="full-side-post w-full h-full flex lg:block justify-center">
      <div
        style={{ backgroundColor: secondary }}
        className="flex flex-col w-[300px] sm:w-[410px] lg:w-full lg:h-[667.5px] rounded-[4px] lg:rounded-[20px] sticky top-[40px] mr-0 mt-[80px] ml-[65px] lg:mt-0 lg:mr-0 lg:ml-0 lg:mb-[20px] lg:min-h-[500px] pb-[25px] lg:pb-[20px] p-[20px]"
      >
        <p className="pb-[20px] font-poly font-semibold tracking-[0.15em] uppercase text-black text-[10px]">
          <Link
            href={`/${Category.Category}`}
            aria-label={`Category of the post : ${Category.Category}`}
          >
            {Category.Category}
          </Link>
        </p>
        <div className="ml-[20px] lg:ml-[35px]">
          <div
            style={{ borderLeftColor: tertiary }}
            className="flex flex-col border-l-[1px] pl-[10px] mb-[8px]"
          >
            <h2
              className={`font-title text-[38px] lg:text-[58px] font-[800] text-black leading-[0.85] mb-[10px] ${textHoverColor} `}
            >
              <Link
                href={`/Story/${Category.Category}/Side/${Slug}/${colorSlug}`}
                aria-label={`Link to the post tagged : ${Tag}`}
              >
                {ThumbTitle}
              </Link>
            </h2>
            <div className="flex flex-row space-x-[8px] items-center justify-start">
              <Link
                href={`/Author/${Author.Slug}`}
                aria-label={`Link to the Profile Page of Author : ${Author.Name}`}
                className="uppercase font-poly font-[500] leading-[1.4] tracking-[0.15em] text-[10.78px] text-black"
              >
                {Author.Name}
              </Link>
              <p className="uppercase font-poly font-[500] leading-[1.4] tracking-[0.15em] text-[10.78px] text-black">
                {getDate(CreatedAt.toString())}
              </p>
            </div>
          </div>

          <section className="relative -ml-[20px] mb-[28px] h-[182px] w-[275px] sm:h-[230px] sm:w-[345px] md:h-[244px] md:w-[370px] lg:ml-[-45px] lg:h-[235px] lg:w-[352px] overflow-hidden rounded-[4px]">
            <Link
              aria-label={`Link to the post tagged : ${Tag}`}
              href={`/Story/${Category.Category}/Side/${Slug}/${colorSlug}`}
            >
              <Image
                src={ThumbImage}
                alt={ThumbImageDescription}
                width={480}
                height={320}
              />
            </Link>
          </section>
        </div>
        <ul className="space-y-3">
          <li>
            <Link
              aria-label={`Link to the post tagged : ${Tag}`}
              href={`/Story/${Category.Category}/Side/${Slug}/${colorSlug}`}
              className="flex flex-row items-start gap-[30px]"
            >
              <div
                style={{ backgroundColor: tertiary }}
                className="sm:h-[7.25px] sm:w-[7.25px] md:h-[7px] md:w-[7.25px] lg:h-[7.25px] lg:w-[7px] rounded-full ml-[7px] mt-[8px]"
              ></div>
              <section className="flex flex-col">
                <p
                  className={`text-[15px] leading-[1.2] max-w-[290px] font-[550] text-black font-gen ${textHoverColor}`}
                >
                  {ThumbDescriptionOne}
                </p>
                <div
                  style={{ backgroundColor: tertiary }}
                  className="w-full h-[1px] mt-[13.5px]"
                ></div>
              </section>
            </Link>
          </li>
          <li>
            <Link
              aria-label={`Link to the post tagged : ${Tag}`}
              href={`/Story/${Category.Category}/Side/${Slug}/${colorSlug}`}
              className="flex flex-row items-start gap-[30px]"
            >
              <div
                style={{ backgroundColor: tertiary }}
                className="sm:h-[7px] sm:w-[7.25px] md:h-[7px] md:w-[7.25px] lg:h-[7.25px] lg:w-[7px] rounded-full ml-[7px] mt-[8px]"
              ></div>
              <p
                className={`text-[15px] leading-[1.2] max-w-[290px] font-[550] text-black font-gen ${textHoverColor}`}
              >
                {ThumbDescriptionTwo}
              </p>
            </Link>
          </li>
        </ul>
        <p className="z-20 absolute lg:bottom-0 right-[20px] pb-[20px] font-poly font-semibold tracking-[0.15em] uppercase text-black text-[10px]">
          {`${Reads} reads`}
        </p>
        <Link
          title="Top of the Page"
          href="/"
          aria-label="Go to Home / Top of the page"
        >
          <StereotypeStroked
            height="428"
            width="80"
            className="z-10 absolute bottom-[6px] right-[6px] hidden lg:block"
            fill={quadrple}
          />
          <StereotypeStroked
            height="347.75"
            width="65"
            className="absolute sm:-left-[75px] sm:-top-[30px]  hidden sm:block lg:hidden"
            fill={'#fff'}
          />
        </Link>
      </div>
      <StereotypeStroked
        height="347.75"
        width="65"
        className="-z-[50] absolute top-[50px] left-[17px] block sm:hidden"
        fill={"#fff"}
      />
    </div>
  );
};

export default SideStory;
