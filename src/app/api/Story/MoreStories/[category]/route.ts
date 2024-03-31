import { NextResponse } from "next/server";
import { prisma } from "../../../../../../prisma/prismaClient";
import { Category } from "@/utils/interfaces";

export async function GET(
  request: Request,
  { params }: { params: { category: Category } }
) {
  try {
    const { category } = params;
    const mainStories = await prisma.mainStory.findMany({
      orderBy: { PostNumber: "desc" },
      where: {
        Category: { Category: category },
      },
      take: 2,
      select: {
        Image: true,
        ImageDescription: true,
        Title: true,
        Slug: true,
        BackgroundColor: true,
        Tag: true,
      },
    });
    const sideStories = await prisma.sideStory.findMany({
      orderBy: { PostNumber: "desc" },
      where: {
        Category: { Category: category },
      },
      take: 2,
      select: {
        Image: true,
        ImageDescription: true,
        Title: true,
        Slug: true,
        BackgroundColor: true,
        Tag: true,
      },
    });

    const moreStories = [...mainStories, ...sideStories];

    return NextResponse.json({ moreStories });
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

// http://localhost:3000/Story/Tech/Headline/Lorem/Zephyr
