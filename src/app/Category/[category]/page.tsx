import Headliner from "@/components/home/headliner-stroy";
import HeadlineSkeleton from "@/components/home/skeleton/headline-skeleton";
import StoriesWrapperSkeleton from "@/components/home/skeleton/stories-wrapper-skeleton";
import TopStoriesSkellyWrapper from "@/components/home/skeleton/top-stories-skeleton-wraper";
import StoriesWrapper from "@/components/home/stories-wrapper";
import TopStories from "@/components/home/top-stories";
import { Category } from "@prisma/client";
import { Metadata, ResolvingMetadata } from "next";
import React, { Suspense } from "react";

export async function generateStaticParams() {
  return [
    { category: "Tech" },
    { category: "Review" },
    { category: "Entertainment" },
    { category: "News" },
  ];
}

export async function generateMetadata(
  { params }: { params: { category: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  return {
    title: `${params.category} - Stereotype`,
    description: `Discover captivating and engaging ${params.category} stories beyond the stereotypes.`,
    icons: "/favicon.ico",
    openGraph: {
      title: `${params.category}`,
      description: `Discover captivating and engaging ${params.category} stories beyond the stereotypes.`,
      images: [
        {
          url: "https://cdn.sanity.io/images/aftdl3p2/production/edfeb55e27f61212b819954868f4816a8f0e6a9b-1920x1010.jpg",
        },
      ],
    },
    twitter: {
      title: `${params.category}`,
      description: `Discover captivating and engaging ${params.category} stories beyond the stereotypes.`,
      card: "summary_large_image",
      images: [
        "https://cdn.sanity.io/images/aftdl3p2/production/edfeb55e27f61212b819954868f4816a8f0e6a9b-1920x1010.jpg",
      ],
      creator: "@LieCheatSteal_",
      site: "https://breakingstereotypes.vercel.app/",
    },
    themeColor: "#131313cc",
    metadataBase: new URL("https://breakingstereotypes.vercel.app/"),
  };
}

const HomeWithCategory = ({ params }: { params: { category: Category } }) => {
  const category = params.category;

  return (
    <section className="w-full flex flex-col justify-center items-center">
      <div className="w-full primary-container relative flex flex-col lg:flex-row mb-[60px] px-[10px] lg:pl-[10px]">
        <div className="w-full lg:w-[710px] pt-[63px] md:pt-[160px] lg:pt-[150px]">
          <Suspense fallback={<HeadlineSkeleton />}>
            <Headliner StoryCategory={category} />
          </Suspense>
        </div>
        <div className="h-full w-full lg:max-h-full lg:w-[380px] lg:pt-[174px]">
          <h2 className="mx-auto max-w-[500px] pb-[20px] font-poly text-[15.75px] leading-[1.2] tracking-[0.005em] text-torq-100 md:pl-[60px] lg:pl-[40px]">
            Top Stories
          </h2>
          <Suspense fallback={<TopStoriesSkellyWrapper />}>
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
