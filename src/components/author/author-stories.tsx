import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";

const AuthorStories = ({ author }: { author: string }) => {
  return (
    <Fragment>
      <ul>
        <li className="border-b-[1px] border-b-[#313131] max-w-[700px]">
          <Link
            href=""
            aria-label=""
            className="group flex flex-row items-center justify-between py-[16px] last-of-type:border-b-0 max-w-container-md sm:pl-[20px] sm:pr-[60px] lg:py-[40px] hover:bg-[#181818af]"
          >
            <div className="flex flex-row items-center">
              <span
                className="h-fit z-10 font-gen text-[10px] tracking-[0.15em]  uppercase leading-[1.2] relative mr-[20px] hidden md:block -rotate-180 border-l border-l-torq-400 text-[#bdbdbd] pl-[4px] font-[530]"
                style={{
                  writingMode: "vertical-rl",
                  textOrientation: "sideways",
                }}
              >
                Tech
              </span>

              <div className="max-w-[360px] w-[360px] flex flex-col space-y-4">
                <h2 className="group-hover:underline group-hover:underline-on-hover font-gen text-[20px] font-[650] leading-none tracking-[0.005em] md:text-[24px]">
                  Twitch streamer Kai Cenat charged with inciting a riot after
                  chaotic giveaway in Union Square
                </h2>
                <div className="flex flex-row">
                  <Link
                    href=""
                    aria-label=""
                    className="uppercase mr-[8px] leading-[1.2] font-[530] font-gen text-[11px] tracking-[0.15em] text-torq-100 hover:underline-on-hover"
                  >
                    anirudh bhadauria
                  </Link>
                  {/* <p></p> */}
                </div>
              </div>
            </div>

            <div>
              <Image
                src="https://cdn.sanity.io/images/aftdl3p2/production/7415cf6750015aa78f6b538b626a0359d18e5eaa-478x319.jpg"
                width={198.4}
                height={132.26}
                alt=""
                className="bg-cover object-fill"
              />
            </div>
          </Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default AuthorStories;
