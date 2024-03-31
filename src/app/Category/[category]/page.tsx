import Headliner from "@/components/home/headliner-stroy";
import HeadlineSkeleton from "@/components/home/skeleton/headline-skeleton";
import StoriesWrapperSkeleton from "@/components/home/skeleton/stories-wrapper-skeleton";
import TopStoriesSkellyWrapper from "@/components/home/skeleton/top-stories-skeleton-wraper";
import StoriesWrapper from "@/components/home/stories-wrapper";
import TopStories from "@/components/home/top-stories";
import { constructMetadata } from "@/lib/global/metadata-constructor";
import { Metadata, ResolvingMetadata, Viewport } from "next";
import React, { Suspense } from "react";
import { Category } from "@/utils/interfaces";
// import { Category } from "@/utils/interfaces";

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
  let imgUrl: string;

  if (params.category === "Tech") {
    imgUrl =
      "https://cdn.sanity.io/images/aftdl3p2/production/2628431bcbe783aca493977595217b30949eaf01-1200x630.png";
  } else if (params.category === "Entertainment") {
    imgUrl =
      "https://cdn.sanity.io/images/aftdl3p2/production/49ed43f169d797b3877876bd429df7341e8aa20d-1208x632.jpg";
  } else if (params.category === "News") {
    imgUrl =
      "https://cdn.sanity.io/images/aftdl3p2/production/86154b271cd334398748cb90c48729450c2c18d9-1200x630.jpg";
  } else {
    imgUrl =
      "https://cdn.sanity.io/images/aftdl3p2/production/907347e42d4d6e78efe8600c6f6b3617324fd7bd-1200x630.jpg";
  }

  const metadata = constructMetadata({
    title: `${params.category} - Stereotype`,
    description: `Discover captivating and engaging ${params.category} stories beyond the stereotypes.`,
    imgTitle: `Get ${params.category} updates from Stereotype.`,
    imgDesc: `Discover captivating and engaging ${params.category} stories beyond the stereotypes.`,
    imgUrl: imgUrl,
    site: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/Category/${params.category}`,
  });

  return metadata;
}

export const viewport: Viewport = {
  themeColor: "#131313cc",
};

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
