import { Category } from "@prisma/client";
import { prisma } from "../../../prisma/prismaClient";
import { cache } from "react";

export const revalidate = 5;

export const getStories = cache(
  async (skip: number, StoryCategory: Category | null) => {
    try {
      let skipForSide = skip;
      let skipForMain = skipForSide * 2;

      const mainStories = !StoryCategory
        ? await prisma.mainStory.findMany({
            orderBy: { PostNumber: "desc" },
            take: 2,
            skip: skipForMain,
            select: {
              Author: { select: { Name: true, Slug: true } },
              Category: { select: { Category: true } },
              Slug: true,
              CreatedAt: true,
              ThumbTitle: true,
              ThumbDescription: true,
              ThumbImageOne: true,
              ThumbImageTwo: true,
              ThumbImageOneDescription: true,
              ThumbImageTwoDescription: true,
              Summary: true,
              SummaryHighlighted: true,
              Reads: true,
              Tag: true,
              BackgroundColor: true,
            },
          })
        : await prisma.mainStory.findMany({
            where: { Category: { Category: StoryCategory } },
            orderBy: { PostNumber: "desc" },
            take: 2,
            skip: skipForMain,
            select: {
              Author: { select: { Name: true, Slug: true } },
              Category: { select: { Category: true } },
              Slug: true,
              CreatedAt: true,
              ThumbTitle: true,
              ThumbDescription: true,
              ThumbImageOne: true,
              ThumbImageTwo: true,
              ThumbImageOneDescription: true,
              ThumbImageTwoDescription: true,
              Summary: true,
              SummaryHighlighted: true,
              Reads: true,
              Tag: true,
              BackgroundColor: true,
            },
          });

      const sideStories = !StoryCategory
        ? await prisma.sideStory.findMany({
            orderBy: { PostNumber: "desc" },
            take: 1,
            skip: skipForSide,
            select: {
              ThumbTitle: true,
              ThumbDescriptionOne: true,
              ThumbDescriptionTwo: true,
              ThumbImage: true,
              ThumbImageDescription: true,
              BackgroundColor: true,
              Reads: true,
              Slug: true,
              Category: { select: { Category: true } },
              Author: { select: { Name: true, Slug: true } },
              CreatedAt: true,
              Tag: true,
            },
          })
        : await prisma.sideStory.findMany({
            where: { Category: { Category: StoryCategory } },
            orderBy: { PostNumber: "desc" },
            take: 1,
            skip: skipForSide,
            select: {
              ThumbTitle: true,
              ThumbDescriptionOne: true,
              ThumbDescriptionTwo: true,
              ThumbImage: true,
              ThumbImageDescription: true,
              BackgroundColor: true,
              Reads: true,
              Slug: true,
              Category: { select: { Category: true } },
              Author: { select: { Name: true, Slug: true } },
              CreatedAt: true,
              Tag: true,
            },
          });

      const feedStatus = await prisma.feedStatus.findFirst({
        take: 1,
        select: {
          LastRefreshed: true,
          Message: true,
        },
      });

      return {
        mainThumb: mainStories,
        sideThumb: sideStories,
        feedThumb: feedStatus,
      };
    } catch (error) {
      console.error(error);
      throw new Error("this is an Error message, be aware.");
    }
  }
);

// const stories = await fetch(
//   `${process.env.NEXT_PUBLIC_DOMAIN_URL}/api/Story/Stories/${StoryCategory}?skip=${skip}&take=1`,
//   {
//     method: "GET",
//     next: {
//       revalidate: 5,
//     },
//   }
// );

// if (!stories.ok) {
//   throw new Error("Error ocurred be aware.");
// }

// const storiesInJson = await stories.json();

// return storiesInJson;
