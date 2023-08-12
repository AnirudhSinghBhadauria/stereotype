import React, { Fragment, Suspense } from "react";
import Headliner from "@/components/home/headliner-stroy";
import TopStories from "@/components/home/top-stories";
import HeadlineSkeleton from "@/components/home/skeleton/headline-skeleton";
import TopStoriesSkeleton from "@/components/home/skeleton/top-stories-skeleton";
import Image from "next/image";
import AuthorReadsDate from "@/components/ui/author-date-reads";
import Link from "next/link";
import LinkSvg from "@/misc/svg/link-svg";
import StereotypeInclined from "@/misc/logos/StereotypeInclined";

const Home = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center">
      <div className="primary-cotnainer relative flex flex-row mb-[60px] pl-[10px]">
        <div className="w-full lg:w-[710px] lg:pt-[150px]">
          <Suspense fallback={<HeadlineSkeleton />}>
            <Headliner />
          </Suspense>
        </div>
        <div className="h-full w-full lg:max-h-full lg:w-[380px] lg:pt-[174px]">
          <h2
            className="mx-auto max-w-[500px] pb-[20px] font-poly text-[15.75px] leading-[1.2] tracking-[0.005em] 
          text-torq-100 md:pl-[60px] lg:pl-[40px]"
          >
            Top Stories
          </h2>
          <Suspense fallback={<TopStoriesSkeleton />}>
            <TopStories />
          </Suspense>
        </div>
      </div>

      <div className="pt-[28px] lg:pt-[40px] w-full flex flex-row justify-center">
        <div className="primary-container w-full flex flex-row mb-60">
          <div className="flex-1 flex max-w-[560px] flex-col lg:mr-[100px] mx-auto sm:max-w-[500px]">
            <div>
              <section className="border-b border-b-[#313131]  relative pl-[38px] font-poly lg:pl-[50px]">
                <div className="pb-[24px]">
                  <h2 className="mb-[10.75px] text-[16.25px] leading-[1.2] tracking-[0.02]  text-white">
                    Reader's Streamline
                  </h2>
                  <p className="primary-small-torq-11px mb-[1.35px] text-[#949494] tracking-[0.15em]">
                    FEED REFRESHED 36 SECONDS AGO
                  </p>
                  <p className="primary-small-torq-11px leading-[1.4]">
                    Don't live up to your stereotypes.
                  </p>
                </div>

                <div className="absolute left-[16px] top-[5px] h-[12px] w-[12px] origin-center rounded-full bg-torq-100"></div>
              </section>
            </div>

            <section className="pb-[44px] border-b-[8px] border-[#313131] hover:bg-[#181818cf]">
              <div className="full-post relative pb-[16px] lg:py-[20px] sm:max-w-[500px] ">
                <div className="ml-auto mt-[24px] sm:ml-[9.88px] w-[320px] sm:w-[480px]">
                  <div className="overflow-hidden relative aspect-five-four w-full h-[319px] rounded-[2px] border border-solid border-[#313131]">
                    <Link href="" aria-label="">
                      <Image
                        src="https://cdn.sanity.io/images/aftdl3p2/production/74d2d18244ccaae01920cfd3c5de0b4debe4cba8-580x464.jpg"
                        alt=""
                        width={750}
                        height={500}
                        className="object-cover object-center"
                      />
                    </Link>
                  </div>
                </div>
                <div className="relative z-10 pt-[12px] sm:px-[16px] lg:mb-[8px] mr-[25px] sm:w-[440px] sm:ml-auto sm:mr-[10px] -mt-[30px] pr-[12px]">
                  <Link href="" aria-label="">
                    <h2
                      style={{ textShadow: "0 0 40px rgb(0, 0, 0)" }}
                      className="mb-[8px] font-poly text-[30px] font-extrabold leading-none sm:text-[36px]"
                    >
                      Where have all the fitness bands gone?
                    </h2>
                    <p className="sm:text-[19.5px] font-sans text-[20px] font-normal leading-[1.2] tracking-[0.005em] mb-[10px]">
                      Smartwatches are the default wearable option these days,
                      but why is it so hard to find simple yet affordable
                      alternatives like the fitness bands of yesteryear?
                    </p>
                  </Link>
                  <AuthorReadsDate
                    date="AUG 6"
                    ifReads={true}
                    name="Anirudh bhadauria"
                    reads={0}
                    slug="AnirudhBhadauria"
                  />
                </div>
              </div>

              <div className="w-full justify-center">
                <div className="w-[90%] h-[2px] bg-[#313131] center-by-margin" />
              </div>

              <div className="py-[16px] px-0 lg:py-[24px] md:px-[10px] flex flex-row">
                <div className="mt-[5px] w-[38px] space-y-2 relative flex min-w-[40px] flex-col md:ml-[-3px] md:items-start">
                  <Link
                    href=""
                    aria-label=""
                    className="transition-all duration-75 ease-linear font-poly font-semibold text-[12px] flex flex-row justify-center items-center w-[24px] h-[24px] rounded-full bg-mustard-100 text-black hover:bg-mustard-100 hover:text-[#000] uppercase"
                  >
                    A
                  </Link>
                  <div className="font-poly font-extrabold text-[11px] flex flex-row justify-center items-center w-[24px] h-[24px] rounded-full bg-white text-black uppercase">
                    0
                  </div>
                  <Link
                    href=""
                    aria-label=""
                    className="flex flex-row justify-center items-center w-[24px] h-[24px] rounded-full bg-white text-black"
                  >
                    <LinkSvg />
                  </Link>
                </div>
                <Link href="" aria-label="" className="w-full flex flex-col">
                  <p className="font-gen text-[17px] font-[450]  leading-[1.3] text-[#efefef]">
                    <span className="font-semibold text-[#fff]">
                      Oneplus would like to remind everyone its also doing a
                      foldable.
                    </span>
                    &nbsp; With all eyes on Samsung’s new foldables yesterday,
                    Oppo sub-brand OnePlus couldn’t help itself. “We open when
                    others fold,” the brand tweeted, in reference to the rumored
                    name of its foldable. It confirmed its foldable plans. It
                    confirmed its foldable plans in February, when it said it
                    will be releasing the foldable in second half of the year.
                  </p>
                </Link>
              </div>

              <div className="w-full flex flex-row justify-center items-center">
                <Link href="" aria-label="">
                  <div className="w-[443px] h-[296px] overflow-hidden rounded-[2px] border border-solid border-[#313131]">
                    <Image
                      src="https://cdn.sanity.io/images/aftdl3p2/production/74d2d18244ccaae01920cfd3c5de0b4debe4cba8-580x464.jpg"
                      alt=""
                      width={750}
                      height={500}
                      className="object-cover object-center"
                    />
                  </div>
                  <p className="max-w-[443px] mt-[6px] font-gen text-[14px] font-medium leading-[1.3]  text-[#949494]">
                    This is the alt text for the image, include text for the
                    image too.
                  </p>
                </Link>
              </div>
            </section>
          </div>

          <div className="flex-1 relative">
            <div className="full-side-post w-full h-full">
              <div className="flex flex-col w-full bg-mustard-100 h-[667.5px] rounded-[20px] sticky top-[40px] mb-20px] lg:min-h-[500px] p-[20px]">
                <p className="pb-[20px] font-poly font-semibold tracking-[0.15em] uppercase text-black text-[10px]">
                  <Link href="/Tech" aria-label="Category of the post : Tech">
                    tech
                  </Link>
                </p>
                <div className="ml-[20px] lg:ml-[35px]">
                  <div className="flex flex-col border-l-[black] border-l-[1px] pl-[10px] mb-[8px]">
                    <h2 className="font-title text-[60px] text-[black] font-[750] leading-[0.85] mb-[10px]">
                      <Link href="LINK TO THE POST" aria-label="">
                        Microsoft shuts down Cortana app on Windows 11 and 12
                        and 13
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
                      <div className="h-[7.25px] w-[7px] rounded-full bg-purple-100 ml-[7px] mt-[8px]"></div>
                      <p className="text-[15px] leading-[1.2] max-w-[290px] font-medium text-black font-gen">
                        There are many Twitter alternatives if you want to use
                        it that way then it then it will be better and good and
                        good.
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      aria-label=""
                      href="LINK TO THE POST"
                      className="flex flex-row items-start gap-[30px]"
                    >
                      <div className="h-[7.25px] w-[7px] rounded-full bg-purple-100 ml-[7px] mt-[8px]"></div>
                      <p className="text-[15px] leading-[1.2] max-w-[290px] font-medium text-black font-gen">
                        There are many Twitter alternatives if you want to use
                        it that way then it then it will be better and good and
                        good.
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
                  <StereotypeInclined
                    fill="#b2cb13"
                    height="428"
                    width="80"
                    className="z-10 absolute bottom-[5px] right-[5px]"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
