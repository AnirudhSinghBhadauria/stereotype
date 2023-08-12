import StereotypeStroked from "@/misc/logos/stereotype-stroked";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SideStory = () => {
  return (
    <div className="full-side-post w-full h-full">
      <div className="flex flex-col w-full bg-mustard-200 h-[667.5px] rounded-[20px] sticky top-[40px] mb-20px] lg:min-h-[500px] p-[20px]">
        <p className="pb-[20px] font-poly font-semibold tracking-[0.15em] uppercase text-black text-[10px]">
          <Link href="/Tech" aria-label="Category of the post : Tech">
            tech
          </Link>
        </p>
        <div className="ml-[20px] lg:ml-[35px]">
          <div className="flex flex-col border-l-mustard-300 border-l-[1px] pl-[10px] mb-[8px]">
            <h2 className="font-title text-[58px] text-[black] font-[800] leading-[0.85] mb-[10px] hover:text-mustard-300">
              <Link href="LINK TO THE POST" aria-label="">
                Lorem, ipsum dolor sitsfgsf amet consectetur its adipisicing
                elit.
              </Link>
            </h2>
            <div className="flex flex-row space-x-[8px] items-center justify-start">
              <Link
                href="/Author/AnirudhBhadauria"
                aria-label=""
                className="uppercase font-poly font-[500] leading-[1.4] tracking-[0.15em] text-[10.78px] text-black"
              >
                anirudh bhadauria
              </Link>
              <p className="uppercase font-poly font-[500] leading-[1.4] tracking-[0.15em] text-[10.78px] text-black">
                AUG 6
              </p>
            </div>
          </div>

          <section className="relative -ml-[20px] mb-[28px] h-[182px] w-[275px] md:h-[244px] md:w-[370px] lg:ml-[-45px] lg:h-[235px] lg:w-[352px] overflow-hidden rounded-[4px]">
            <Link aria-label="" href="LINK TO THE POST">
              <Image
                src="https://cdn.sanity.io/images/aftdl3p2/production/74d2d18244ccaae01920cfd3c5de0b4debe4cba8-580x464.jpg"
                alt=""
                width={480}
                height={320}
              />
            </Link>
          </section>
        </div>
        <ul className="space-y-3">
          <li>
            <Link
              aria-label=""
              href="LINK TO THE POST"
              className="flex flex-row items-start gap-[30px]"
            >
              <div className="h-[7.25px] w-[7px] rounded-full bg-mustard-300 ml-[7px] mt-[8px]"></div>
              <p className="text-[15px] leading-[1.2] max-w-[290px] font-medium text-black font-gen">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                magni quos aliquam qui ratione ducimus um.
              </p>
            </Link>
          </li>
          <li>
            <Link
              aria-label=""
              href="LINK TO THE POST"
              className="flex flex-row items-start gap-[30px]"
            >
              <div className="h-[7.25px] w-[7px] rounded-full bg-mustard-300 ml-[7px] mt-[8px]"></div>
              <p className="text-[15px] leading-[1.2] max-w-[290px] font-medium text-black font-gen">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                magni quos aliquam qui ratione.
              </p>
            </Link>
          </li>
        </ul>
        <p className="z-20 absolute bottom-0 right-[20px] pb-[20px] font-poly font-semibold tracking-[0.15em] uppercase text-black text-[10px]">
          0 reads
        </p>
        <Link
          title="Top of the Page"
          href="/"
          aria-label="Go to Home / Top of the page"
        >
          <StereotypeStroked
            height="428"
            width="80"
            className="z-10 absolute bottom-[6px] right-[6px] fill-mustard-400"
          />
        </Link>
      </div>
    </div>
  );
};

export default SideStory;
