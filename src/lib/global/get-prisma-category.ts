import { Category } from "@prisma/client";

export const getPrismaCategory = async (category: string | string[]) => {
  switch (category) {
    case "Tech":
      return Category;
    case "Entertainment":
      return Category.Entertainment;
    case "Review":
      return Category.Review;
    case "News":
      return Category.News;
    default:
      return null;
  }
};
