import { NextResponse } from "next/server";
import { prisma } from "../../../../../prisma/prismaClient";

export async function GET(request: Request) {
  try {
    const mainStories = await prisma.mainStory.findMany({
      orderBy: { PostNumber: "desc" },
      skip: 0,
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
