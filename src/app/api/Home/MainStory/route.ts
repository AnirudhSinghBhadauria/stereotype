import { prisma } from "../../../../../prisma/prismaClient";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const MainStories = await prisma.mainStory.findMany({
      take: 2,
      orderBy: { PostNumber: "desc" },
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
      { MainStories },
      {
        status: 200,
        statusText: "The resource has been fetched and transmitted to client.",
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: error,
        errorMessage:
          "The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded.",
      },
      {
        status: 503,
        statusText:
          "The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded.",
      }
    );
  }
}
