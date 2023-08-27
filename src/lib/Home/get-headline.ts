import { Category } from "@prisma/client";
import { prisma } from "../../../prisma/prismaClient";

// export const getHeadlines = async (StoryCategory: Category | null) => {
//   try {
//     const headline = !StoryCategory
//       ? await prisma.headlinerStory.findFirst({
//           orderBy: { PostNumber: "desc" },
//           take: 1,
//           select: {
//             Author: { select: { Name: true, Slug: true } },
//             CreatedAt: true,
//             ThumbTitle: true,
//             ThumbDescription: true,
//             ThumbImage: true,
//             ThumbImageDescription: true,
//             Reads: true,
//             Slug: true,
//             Category: { select: { Category: true } },
//             Tag: true,
//             BackgroundColor: true,
//           },
//         })
//       : await prisma.headlinerStory.findFirst({
//           where: {
//             Category: { Category: StoryCategory },
//           },
//           select: {
//             Author: { select: { Name: true, Slug: true } },
//             CreatedAt: true,
//             ThumbTitle: true,
//             ThumbDescription: true,
//             ThumbImage: true,
//             ThumbImageDescription: true,
//             Reads: true,
//             Slug: true,
//             Category: { select: { Category: true } },
//             Tag: true,
//             BackgroundColor: true,
//           },
//           take: 1,
//           orderBy: { PostNumber: "desc" },
//         });

//     return headline;
//   } catch (error) {
//     console.error(error);
//     throw new Error("this is an Error message, be aware.");
//   }
// };

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

    // console.log("this is home");

    return headline;
  } catch (error) {
    console.error(error);
    throw new Error("this is an Error message, be aware.");
  }
};

// for Category

export const getHeadlineForCategory = async (StoryCategory: Category) => {
  const headlines = await fetch(
    `${process.env.NEXT_PUBLIC_DOMAIN_URL}/api/Story/HeadlinerStory/${StoryCategory}`,
    {
      method: "GET",
      next: {
        revalidate: 5,
      },
    }
  );

  // console.log(`this is ${StoryCategory}`);

  if (!headlines.ok) {
    throw new Error("this is an Error message, be aware.");
  }
  const sanitizedHeadline = headlines.json();
  return sanitizedHeadline;
};
