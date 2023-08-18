import { getColorForPost } from "@/lib/global/get-colors";
import { getSinglePost } from "@/lib/global/get-single-post";
import Stereotype from "@/misc/logos/Stereotype";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Story = async ({ params }: { params: { slug: string[] } }) => {
  const color = getColorForPost(params.slug[3]);
  const post = await getSinglePost(params.slug);

  console.log(post.postData);

  return (
    <section className="w-full">
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

        <section className="pt-[174px] primary-container w-full mx-auto flex flex-col md:max-w-container-md md:pb-[60px] lg:flex-row">
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
                With streaming services across the board raising their prices,
                you owe it to yourself to have a good deep think about what you
                want out of all these subscriptions and what you’re actually
                getting for your money.
              </h2>
            </section>
            <section>
              <p className="mb-[4px] font-gen text-[13.5px] font-medium leading-[1.25] text-black">
                By{" "}
                <span className="font-semibold hover:underline underline-offset-[1.5px]">
                  <Link href="LINK TO THE AUTHOR" aria-label="">
                    Charles Pulliam-Moore
                  </Link>
                </span>
                , a reporter focusing on film, TV, and pop culture. Before The
                Verge, he wrote about comic books, labor, race, and more at io9
                and Gizmodo for almost five years.
              </p>
              <div className="flex flex-row space-x-[10px] mb-[12px]">
                <p className="font-gen text-[12.75px] font-medium leading-[1.3] text-black word-spacing-single-post">
                  Aug 16, 2023, 12:30 AM GMT+5:30
                </p>
                <p className="font-gen text-[12.75px] font-medium leading-[1.3] text-black">
                  0 Reads
                </p>
              </div>
            </section>
          </div>
          <div className="lg:w-1/2">
            <div className="w-[550px] h-[550px] overflow-hidden">
              <Image
                src="https://cdn.sanity.io/images/aftdl3p2/production/775c8f6cecafd3d76e79b00efd7f4c5c8b6293dd-640x640.jpg"
                height={748}
                width={680}
                alt=""
                className="object-cover object-center"
              />
            </div>
            <p className="pt-[6px] font-gen text-[14.5px] font-medium leading-[1.25] text-black/80">
              This is the alt text for the image, include text for the image
              too. This is the alt text for the image, include text for the
              image too. This is the alt text for the image, include text for
              the image too.
            </p>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Story;

// https://cdn.sanity.io/images/aftdl3p2/production/f46e2e1ec198c28ca925a1c49e41da49c1e20c44-640x640.jpg
