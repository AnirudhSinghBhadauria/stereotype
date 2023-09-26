import StoryHeroSection from "@/components/post/hero-section";
import MoreFromSection from "@/components/post/more-from";
import { getColorForPost } from "@/lib/global/get-colors";
import SiteFooter from "@/components/ui/site-footer";
import React, { Fragment, Suspense } from "react";
import ArticleBody from "@/components/post/article-body";
import LoadingSpinner from "@/components/home/loading-spinner";
import { updateReads } from "@/lib/global/update-reads";
import { Category } from "@prisma/client";
import StorySkeleton from "@/components/post/skeleton/story-skeleton";
import ArticleBodySkeleton from "@/components/post/skeleton/article-body-skeleton";
import MoreFromSkeletonSection from "@/components/post/skeleton/more-from-skeleton";

const Story = async ({ params }: { params: { slug: string[] } }) => {
  const category = params.slug[0];
  const format = params.slug[1];
  const slug = params.slug[2];
  const colorName = params.slug[3];
  const color = getColorForPost(params.slug[3]);

  const incrementReads = updateReads(category, format, slug);

  return (
    <Fragment>
      <section className="w-full">
        <Suspense
          fallback={
            <div
              style={{ backgroundColor: color }}
              className="relative w-full flex flex-row justify-center"
            >
              <StorySkeleton />
            </div>
          }
        >
          <StoryHeroSection
            postLinkData={{
              params: params.slug,
              category,
              format,
              slug,
              colorName,
              color,
            }}
          />
        </Suspense>

        <Suspense fallback={<ArticleBodySkeleton />}>
          <ArticleBody params={params.slug} />
        </Suspense>

        <Suspense fallback={<MoreFromSkeletonSection />}>
          <MoreFromSection params={params.slug} category={category} />
        </Suspense>
      </section>

      <SiteFooter />
    </Fragment>
  );
};

export default Story;

// https://cdn.sanity.io/images/aftdl3p2/production/f46e2e1ec198c28ca925a1c49e41da49c1e20c44-640x640.jpg
