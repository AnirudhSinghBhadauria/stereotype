import Stereotype from "@/misc/logos/Stereotype";
import Tree from "@/misc/logos/author/link";
import LinkTree from "@/misc/logos/author/link-tree";
import In from "@/misc/logos/author/linkedin";
import X from "@/misc/logos/author/twitter";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const StoryHeroSection = ({ color }: { color: string }) => {
  return (
    <div
      style={{ backgroundColor: color }}
      className="relative w-full flex flex-row justify-center"
    >
      <div className="absolute top-0 w-full pb-[30px]">
        <Link
          href="/"
          aria-label="home button for stereotype"
          title="Stereotype Home"
        >
          <Stereotype
            width={781.5}
            height={145}
            className="fill-white/50 z-40 pl-[9px]"
          />
        </Link>
      </div>

      <section className="pt-[174px] primary-container w-full mx-auto flex flex-col md:max-w-container-md md:pb-[80px] lg:flex-row">
        <div className="lg:w-1/2 lg:pr-[40px] h-auto flex flex-col text-black">
          <section className="mb-[18px] md:mb-[24px]">
            <div className="lg:px-0 leading-none mb-[8px]">
              <p className="font-mono uppercase inline text-[14.25px] font-bold tracking-[0.05em]">
                STREAMING
              </p>
            </div>
            <div className="mb-[8px]">
              <h1 className="pb-[8px] font-poly text-[46px] font-bold leading-[1.04] -tracking-[0.02em] lg:text-[66px] bg-repeating-lines-dark">
                It’s time to rethink our relationships with streaming services
              </h1>
            </div>
            <h2 className="font-gen word-spacing-single-post text-[22px] font-[450] leading-[1.1] lg:text-[24.9px]">
              With streaming services across the board raising their prices, you
              owe it to yourself to have a good deep think about what you want
              out of all these subscriptions and what you’re actually getting
              for your money.
            </h2>
          </section>
          <section>
            <p className="mb-[4px] font-gen text-[13px] font-medium leading-[1.25] text-[#131313]">
              By{" "}
              <span className="font-semibold hover:underline underline-offset-[1.5px] text-black">
                <Link href="LINK TO THE AUTHOR" aria-label="">
                  Charles Pulliam-Moore
                </Link>
              </span>
              , a reporter focusing on film, TV, and pop culture. Before The
              Verge, he wrote about comic books, labor, race, and more at io9
              and Gizmodo for almost five years.
            </p>
            <div className="flex flex-row space-x-[10px] mb-[13px]">
              <p className="font-gen text-[12.75px] font-medium leading-[1.3] text-black word-spacing-single-post">
                Aug 16, 2023, 12:30 AM GMT+5:30
              </p>
              <p className="font-gen text-[12.75px] font-medium leading-[1.3] text-black">
                0 Reads
              </p>
            </div>
            <div className="flex flex-row space-x-[8px]">
              <Link href="" aria-label="">
                <div className="group transition-all duration-150 ease-in-out h-[30px] w-[30px] flex flex-row justify-center items-center rounded-full bg-white hover:bg-black">
                  <X
                    className="fill-black group-hover:fill-white"
                    height="12.5px"
                    width="12.5px"
                  />
                </div>
              </Link>
              <Link href="" aria-label="">
                <div className="group transition-all duration-150 ease-in-out h-[30px] w-[30px] flex flex-row justify-center items-center rounded-full bg-white hover:bg-black">
                  <In
                    className="fill-black group-hover:fill-white"
                    height="12.5px"
                    width="12.5px"
                  />
                </div>
              </Link>
              <Link href="" aria-label="">
                <div className="group transition-all duration-150 ease-in-out h-[30px] w-[30px] flex flex-row justify-center items-center rounded-full bg-white hover:bg-black">
                  <LinkTree
                    className="fill-black group-hover:fill-white"
                    height="13.75px"
                    width="11.75px"
                  />
                </div>
              </Link>
              <Link href="" aria-label="">
                <div className="group transition-all duration-150 ease-in-out h-[30px] w-[30px] flex flex-row justify-center items-center rounded-full bg-white hover:bg-black">
                  <Tree
                    className="fill-black group-hover:fill-white"
                    height="12.5px"
                    width="12.5px"
                  />
                </div>
              </Link>
            </div>
          </section>
        </div>
        <div className="lg:w-1/2">
          <div className="w-[550px] h-[550px] overflow-hidden">
            <Image
              src="https://cdn.sanity.io/images/aftdl3p2/production/775c8f6cecafd3d76e79b00efd7f4c5c8b6293dd-640x640.jpg"
              height={640}
              width={640}
              alt=""
              className="object-cover object-center"
            />
          </div>
          <p className="pt-[6px] font-gen text-[14.5px] font-medium leading-[1.28] text-[#131313]/90">
            This is the alt text for the image, include text for the image too.
            This is the alt text for the image, include text for the image too.
          </p>
        </div>
      </section>
    </div>
  );
};

export default StoryHeroSection;
