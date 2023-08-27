import { Category } from "@prisma/client";
import { prisma } from "../../../prisma/prismaClient";
import { cache } from "react";

export const revalidate = 5;

export const getTopStories = cache(async (StoryCategory: Category | null) => {
  try {
    const topStories = !StoryCategory
      ? await prisma.headlinerStory.findMany({
          take: 5,
          orderBy: { PostNumber: "desc" },
          select: {
            Author: { select: { Name: true, Slug: true } },
            CreatedAt: true,
            ThumbImageDescription: true,
            ThumbImage: true,
            ThumbTitle: true,
            Tag: true,
            Slug: true,
            Category: { select: { Category: true } },
            BackgroundColor: true,
          },
        })
      : await prisma.headlinerStory.findMany({
          where: { Category: { Category: StoryCategory } },
          take: 5,
          orderBy: { PostNumber: "desc" },
          select: {
            Author: { select: { Name: true, Slug: true } },
            CreatedAt: true,
            ThumbImageDescription: true,
            ThumbImage: true,
            ThumbTitle: true,
            Tag: true,
            Slug: true,
            Category: { select: { Category: true } },
            BackgroundColor: true,
          },
        });
    return topStories;
  } catch (error) {
    console.error(error);
    throw new Error("this is an Error message, be aware.");
  }
});
