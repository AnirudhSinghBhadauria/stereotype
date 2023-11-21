import React, { Suspense } from "react";
import Headliner from "@/components/home/headliner-stroy";
import TopStories from "@/components/home/top-stories";
import HeadlineSkeleton from "@/components/home/skeleton/headline-skeleton";
import StoriesWrapper from "@/components/home/stories-wrapper";
import StoriesWrapperSkeleton from "@/components/home/skeleton/stories-wrapper-skeleton";
import TopStoriesSkellyWrapper from "@/components/home/skeleton/top-stories-skeleton-wraper";
import { Metadata } from "next";
import { constructMetadata } from "@/lib/global/metadata-constructor";
// import { seed } from "@/utils/seeding";

export const dynamicParams = false;

export async function generateMetadata(): Promise<Metadata> {
  const metadata = constructMetadata({
    title: "Stereotype",
    description:
      "Discover a world of diverse content in tech, reviews, entertainment, and news. Stereotype - Where Insights, Authenticity, and Inclusivity Meet. Explore now!!",
    imgTitle: "Don't live upto your Stereotypes.",
    imgDesc:
      "Discover a world of diverse content in tech, reviews, entertainment, and news. Stereotype - Where Insights, Authenticity, and Inclusivity Meet. Explore now!",
    imgUrl:
      "https://cdn.sanity.io/images/aftdl3p2/production/6be92cc3f60e23a4f023a03b92adeb53cd2243c1-1200x630.jpg",
    site: `${process.env.NEXT_PUBLIC_DOMAIN_URL}`
  });

  return metadata;
}

const Home = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center">
      <div className="w-full primary-container relative flex flex-col lg:flex-row mb-[60px] px-[10px] lg:pl-[10px]">
        <div className="w-full lg:w-[710px] pt-[63px] md:pt-[160px] lg:pt-[150px]">
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
          <Suspense fallback={<TopStoriesSkellyWrapper />}>
            <TopStories />
          </Suspense>
        </div>
      </div>

      <div className="pt-[28px] lg:pt-[40px] w-full flex flex-col justify-center items-center">
        <Suspense fallback={<StoriesWrapperSkeleton />}>
          <StoriesWrapper />
        </Suspense>
      </div>
    </section>
  );
};

export default Home;
