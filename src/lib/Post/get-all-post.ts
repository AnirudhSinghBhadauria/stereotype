import { prisma } from "../../../prisma/prismaClient";

export const getAllPosts = async () => {
  const headlineStories = await prisma.headlinerStory.findMany({
    select: {
      Category: true,
      BackgroundColor: true,
      format: true,
      Slug: true,
      CreatedAt: true,
    },
  });

  const mainStories = await prisma.mainStory.findMany({
    select: {
      Category: true,
      BackgroundColor: true,
      format: true,
      Slug: true,
      CreatedAt: true,
    },
  });

  const sideStories = await prisma.sideStory.findMany({
    select: {
      Category: true,
      BackgroundColor: true,
      format: true,
      Slug: true,
      CreatedAt: true,
    },
  });

  return [...headlineStories, ...mainStories, ...sideStories];
};
