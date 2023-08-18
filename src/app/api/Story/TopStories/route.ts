import { NextResponse } from "next/server";
import { prisma } from "../../../../../prisma/prismaClient";

export async function GET(request: Request) {
  try {
    const topStories = await prisma.headlinerStory.findMany({
      take: 5,
      orderBy: { PostNumber: "desc" },
      select: {
        Author: { select: { Name: true, Slug: true } },
        CreatedAt: true,
        ThumbImageDescription: true,
        ThumbImage: true,
        ThumbTitle: true,
        Tag: true,
        Slug: true,
        Category: { select: { Category: true } },
        BackgroundColor: true
      },
    });

    return NextResponse.json(
      { topStoriesThumbData: topStories },
      {
        status: 200,
        statusText:
          "The resource has been fetched and transmitted to the client",
      }
    );
  } catch (error) {
    return NextResponse.json({
      error: error,
      errorMessage: "The server cannot find the requested resource.",
    });
  }
}
