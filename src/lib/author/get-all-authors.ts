import { prisma } from "../../../prisma/prismaClient";

export const getAllAuthors = async () => {
  const authors = await prisma.author.findMany({
    select: {
      Slug: true,
    },
  });

  return authors;
};
