import React, { Fragment, Suspense } from "react";
import Headliner from "@/components/home/headliner-stroy";
import TopStories from "@/components/home/top-stories";
import HeadlineSkeleton from "@/components/home/skeleton/headline-skeleton";
import TopStoriesSkeleton from "@/components/home/skeleton/top-stories-skeleton";
import ReaderStoryline from "@/components/home/readers-storyline";
import MainStory from "@/components/home/main-story";
import SideStory from "@/components/home/side-story";

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

      <div className="pt-[28px] lg:pt-[40px] w-full flex flex-col justify-center items-center">
        <div className="flex flex-col primary-container w-full">
          <section className="flex flex-row mb-[80px]">
            <div className="flex-1 flex max-w-[560px] flex-col lg:mr-[100px] mx-auto sm:max-w-[500px]">
              <ReaderStoryline />
              <ul>
                <MainStory />
                <MainStory />
              </ul>
            </div>

            <div className="flex-1 relative">
              <SideStory />
            </div>
          </section>
        </div>
      </div>

    </section>
  );
};

export default Home;
