import { Category } from "@prisma/client";
import { prisma } from "../../../prisma/prismaClient";

export const getHeadlines = async () => {
  try {
    const headline = await prisma.headlinerStory.findFirst({
      orderBy: { PostNumber: "desc" },
      take: 1,
      select: {
        Author: { select: { Name: true, Slug: true } },
        CreatedAt: true,
        ThumbTitle: true,
        ThumbDescription: true,
        ThumbImage: true,
        ThumbImageDescription: true,
        Reads: true,
        Slug: true,
        Category: { select: { Category: true } },
        Tag: true,
        BackgroundColor: true,
      },
    });

    return headline;
  } catch (error) {
    console.error(error);
    throw new Error("this is an Error message, be aware.");
  }
};

// for Category

export const getHeadlineForCategory = async (StoryCategory: Category) => {
  const headlines = await fetch(
    `/api/Story/HeadlinerStory/${StoryCategory}`,
    {
      method: "GET",
      next: {
        revalidate: 5,
      },
    }
  );

  if (!headlines.ok) {
    throw new Error("this is an Error message, be aware.");
  }
  const sanitizedHeadline = headlines.json();
  return sanitizedHeadline;
};
