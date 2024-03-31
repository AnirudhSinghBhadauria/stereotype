import { Category } from "@/utils/interfaces";
import { NextResponse } from "next/server";
import { prisma } from "../../../../../../prisma/prismaClient";

export async function GET(
  request: Request,
  { params }: { params: { category: Category | undefined } }
) {
  try {
    const { category } = params;

    const mainStories = await prisma.mainStory.findMany({
      where: {
        Category: { Category: category },
      },
      orderBy: { PostNumber: "desc" },
      take: 2,
      select: {
        Author: { select: { Name: true } },
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
      },
    });

    return NextResponse.json(
      {
        mainStoriesThumbData: mainStories,
      },
      {
        status: 200,
        statusText:
          "The resource has been fetched and transmitted to the client",
      }
    );
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
