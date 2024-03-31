import { Category } from "@/utils/interfaces";
import { NextResponse } from "next/server";
import { prisma } from "../../../../../../prisma/prismaClient";

export async function GET(
  request: Request,
  { params }: { params: { category: Category | undefined } }
) {
  try {
    const category = params.category;

    const sideStories = await prisma.sideStory.findFirst({
      where: {
        Category: { Category: category },
      },
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
      {
        sideStoriesThumbData: sideStories,
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
