import { Category } from "@prisma/client";
import { prisma } from "../../../../../../prisma/prismaClient";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { category: Category | undefined } }
) {
  try {
    const category = params.category;

    const topStories = await prisma.topStories.findMany({
      where: {
        Category: { Category: category },
      },
      take: 5,
      orderBy: { PostNumber: "desc" },
      select: {
        Title: true,
        Author: { select: { Name: true } },
        CreatedAt: true,
        Image: true,
        ImageDescription: true,
        Slug: true,
        Category: { select: { Category: true } },
      },
    });

    return NextResponse.json(
      {
        topStoriesThumbData: topStories,
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
