import { NextResponse } from "next/server";
import { prisma } from "../../../../../prisma/prismaClient";

export async function GET(request: Request) {
  try {
    const headlinerStory = await prisma.headlinerStory.findFirst({
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
        BackgroundColor: true
      },
    });

    return NextResponse.json(
      { headlineThumbData: headlinerStory },
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
