import StoryHeroSection from "@/components/post/hero-section";
import MoreFromSection from "@/components/post/more-from";
import { getColorForPost, getColors } from "@/lib/global/get-colors";
import SiteFooter from "@/components/ui/site-footer";
import React, { Fragment, Suspense } from "react";
import ArticleBody from "@/components/post/article-body";
import { updateReads } from "@/lib/global/update-reads";
import StorySkeleton from "@/components/post/skeleton/story-skeleton";
import ArticleBodySkeleton from "@/components/post/skeleton/article-body-skeleton";
import MoreFromSkeletonSection from "@/components/post/skeleton/more-from-skeleton";
import { constructMetadata } from "@/lib/global/metadata-constructor";
import { Metadata } from "next";
import { getSinglePost } from "@/lib/Post/get-single-post";
import { SinglePostInterface } from "@/utils/interfaces";
import { getAllPosts } from "@/lib/Post/get-all-post";

export async function generateStaticParams() {
  const allPosts = await getAllPosts();

  return allPosts.map(({ BackgroundColor, Category, Slug, format }) => ({
    slug: [
      Category.Category,
      format,
      Slug,
      getColors(BackgroundColor).colorSlug,
    ],
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string[] };
}): Promise<Metadata> {
  const { Image, Title, Description, Author, CreatedAt }: SinglePostInterface =
    await getSinglePost(params.slug);

  const metadata = constructMetadata({
    title: `${Title} - Stereotype`,
    description: Description,
    imgTitle: Title,
    imgDesc: "Delve into the comprehensive narrative on Stereotype.",
    imgUrl: Image,
    site: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/Story/${params.slug[0]}/${params.slug[1]}/${params.slug[2]}/${params.slug[3]}`,
    authorData: [{ name: Author.Name, url: Author.Linkedin }],
  });

  return {
    ...metadata,
    other: {
      story_published_time: CreatedAt,
    },
  };
}

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
