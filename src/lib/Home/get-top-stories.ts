import { Category } from "@prisma/client";
import { prisma } from "../../../prisma/prismaClient";
import { cache } from "react";

export const revalidate = 5;

export const getTopStories = cache(async () => {
  try {
    const topStories = await prisma.headlinerStory.findMany({
      orderBy: { PostNumber: "desc" },
      skip: 1,
      take: 5,
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

// for Category

export const getTopStoriesForCategory = async (StoryCategory: Category) => {
  const topStories = await fetch(
    `${process.env.NEXT_PUBLIC_DOMAIN_URL}/api/Story/TopStories/${StoryCategory}`,
    {
      method: "GET",
      next: {
        revalidate: 5,
      },
    }
  );
  if (!topStories.ok) {
    throw new Error("Error ocurred be aware.");
  }
  const storiesInJson = await topStories.json();
  return storiesInJson;
};
