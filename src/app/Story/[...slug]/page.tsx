import StoryHeroSection from "@/components/story/hero-section";
import MoreFromSection from "@/components/story/more-from";
import { getColorForPost } from "@/lib/global/get-colors";
import { getSinglePost } from "@/lib/global/get-single-post";
import SiteFooter from "@/components/ui/site-footer";
import React, { Fragment } from "react";
import ArticleBody from "@/components/story/article-body";

const Story = async ({ params }: { params: { slug: string[] } }) => {
  const category = params.slug[0];
  const format = params.slug[1];
  const slug = params.slug[2];
  const colorName = params.slug[3];
  const color = getColorForPost(params.slug[3]);
  const post = await getSinglePost(params.slug);

  // console.log(post.postData);

  // console.log(params);

  const {
    Author,
    CreatedAt,
    Tag,
    Image,
    ImageDescription,
    Title,
    Description,
    Reads,

    IntroPara,
    ParaTwo,
    ParaThree,
    ParaFour,
    ParaFive,
    ParaSix,
    ParaSeven,
    ParaEight,
    AsideText,
  } = post?.postData;

  return (
    <Fragment>
      <section className="w-full">
        <StoryHeroSection
          titleData={{
            Author,
            Tag,
            Image,
            ImageDescription,
            Title,
            Description,
            Reads,
            CreatedAt,
            category,
            format,
            slug,
            colorName,
          }}
          color={color}
        />

        <ArticleBody
          bodyData={{
            IntroPara,
            ParaTwo,
            ParaThree,
            ParaFour,
            ParaFive,
            ParaSix,
            ParaSeven,
            ParaEight,
            AsideText,
          }}
        />

        <MoreFromSection />
      </section>
      <SiteFooter />
    </Fragment>
  );
};

export default Story;

// https://cdn.sanity.io/images/aftdl3p2/production/f46e2e1ec198c28ca925a1c49e41da49c1e20c44-640x640.jpg
