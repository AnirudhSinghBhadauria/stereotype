import { NextResponse } from "next/server";
import { prisma } from "../../../../../../../../prisma/prismaClient";
import { Category } from "@/utils/interfaces";
// import { Category } from "@/utils/interfaces";
export async function GET(
  request: Request,
  {
    params,
  }: {
    params: {
      category: Category;
      format: string;
      slug: string;
    };
  }
) {
  try {
    const { category, format, slug } = params;
    let post;

    format === "Main"
      ? (post = await prisma.mainStory.findUnique({
          where: { Slug: slug, Category: { Category: category } },
          select: {
            Author: {
              select: {
                DescriptionOne: true,
                Name: true,
                Slug: true,
                Instagram: true,
                Linktree: true,
                Linkedin: true,
                Twitter: true,
              },
            },
            CreatedAt: true,
            Tag: true,

            Image: true,
            ImageDescription: true,

            Title: true,
            Description: true,
            Reads: true,

            AsideText: true,
            IntroPara: true,
            ParaTwo: true,
            ParaThree: true,
            ParaFour: true,
            ParaFive: true,
            ParaSix: true,
            ParaSeven: true,
            ParaEight: true,
          },
        }))
      : format === "Side"
      ? (post = await prisma.sideStory.findUnique({
          where: { Slug: slug, Category: { Category: category } },
          select: {
            Author: {
              select: {
                DescriptionOne: true,
                Name: true,
                Slug: true,
                Instagram: true,
                Linktree: true,
                Linkedin: true,
                Twitter: true,
              },
            },
            CreatedAt: true,
            Tag: true,

            Image: true,
            ImageDescription: true,

            Title: true,
            Description: true,
            Reads: true,

            AsideText: true,
            IntroPara: true,
            ParaTwo: true,
            ParaThree: true,
            ParaFour: true,
            ParaFive: true,
            ParaSix: true,
            ParaSeven: true,
            ParaEight: true,
          },
        }))
      : (post = await prisma.headlinerStory.findUnique({
          where: { Slug: slug, Category: { Category: category } },
          select: {
            Author: {
              select: {
                DescriptionOne: true,
                Name: true,
                Slug: true,
                Instagram: true,
                Linktree: true,
                Linkedin: true,
                Twitter: true,
              },
            },
            CreatedAt: true,
            Tag: true,

            Image: true,
            ImageDescription: true,

            Title: true,
            Description: true,
            Reads: true,

            AsideText: true,
            IntroPara: true,
            ParaTwo: true,
            ParaThree: true,
            ParaFour: true,
            ParaFive: true,
            ParaSix: true,
            ParaSeven: true,
            ParaEight: true,
          },
        }));

    return NextResponse.json({ postData: post });
  } catch (error) {
    return NextResponse.json(
      {
        error: error,
        errorMessage: "The server cannot find the requested resource.",
      },
      {
        status: 404,
        statusText: "The server cannot find the requested resource.",
      }
    );
  }
}
