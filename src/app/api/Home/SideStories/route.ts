import { prisma } from "../../../../../prisma/prismaClient";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const sideStories = await prisma.sideStory.findMany({
      orderBy: { PostNumber: "desc" },
      take: 1,
      select: {
        ThumbTitle: true,
        ThumbDescriptionOne: true,
        ThumbDescriptionTwo: true,
        ThumbImage: true,
        ThumbImageDescription: true,
        BackgroundColor: true,
        Reads: true,
        Slug: true,
        Category: { select: { Category: true } },
        Author: { select: { Name: true } },
        CreatedAt: true,
      },
    });

    return NextResponse.json(
      { sideStories },
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
