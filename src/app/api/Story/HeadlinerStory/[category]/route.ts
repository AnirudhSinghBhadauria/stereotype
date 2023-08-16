import { NextResponse } from "next/server";
import { prisma } from "../../../../../../prisma/prismaClient";
import { Category } from "@prisma/client";

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: { category: Category };
  }
) {
  try {
    const category = params.category;

    const headlinerStory = await prisma.headlinerStory.findFirst({
      where: {
        Category: { Category: category },
      },
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
      },
      take: 1,
      orderBy: { PostNumber: "desc" },
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
    return NextResponse.json({
      error: error,
      errorMessage: "The server cannot find the requested resource.",
    });
  }
}
