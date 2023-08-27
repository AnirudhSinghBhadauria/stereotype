import Headliner from "@/components/home/headliner-stroy";
import HeadlineSkeleton from "@/components/home/skeleton/headline-skeleton";
import StoriesWrapperSkeleton from "@/components/home/skeleton/stories-wrapper-skeleton";
import TopStoriesSkeleton from "@/components/home/skeleton/top-stories-skeleton";
import StoriesWrapper from "@/components/home/stories-wrapper";
import TopStories from "@/components/home/top-stories";
import { Category } from "@prisma/client";
import React, { Suspense } from "react";

const HomeWithCategory = ({ params }: { params: { category: Category } }) => {
  const category = params.category;

  return (
    <section className="w-full flex flex-col justify-center items-center">
      <div className="primary-cotnainer relative flex flex-row mb-[60px] pl-[10px]">
        <div className="w-full lg:w-[710px] lg:pt-[150px]">
          <Suspense fallback={<HeadlineSkeleton />}>
            <Headliner StoryCategory={category} />
          </Suspense>
        </div>
        <div className="h-full w-full lg:max-h-full lg:w-[380px] lg:pt-[174px]">
          <h2 className="mx-auto max-w-[500px] pb-[20px] font-poly text-[15.75px] leading-[1.2] tracking-[0.005em] text-torq-100 md:pl-[60px] lg:pl-[40px]">
            Top Stories
          </h2>
          <Suspense fallback={<TopStoriesSkeleton />}>
            <TopStories StoryCategory={category} />
          </Suspense>
        </div>
      </div>
      <div className="pt-[28px] lg:pt-[40px] w-full flex flex-col justify-center items-center">
        <Suspense fallback={<StoriesWrapperSkeleton />}>
          <StoriesWrapper StoryCategory={category} />
        </Suspense>
      </div>
    </section>
  );
};

export default HomeWithCategory;
