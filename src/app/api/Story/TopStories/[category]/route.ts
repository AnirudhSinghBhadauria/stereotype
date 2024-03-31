import { Category } from "@/utils/interfaces";
import { prisma } from "../../../../../../prisma/prismaClient";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { category: Category } }
) {
  try {
    const category = params.category;

    const topStories = await prisma.headlinerStory.findMany({
      where: {
        Category: { Category: category },
      },
      orderBy: { PostNumber: "desc" },
      skip: 1,
      take: 5,
      select: {
        Author: { select: { Name: true, Slug: true } },
        CreatedAt: true,
        ThumbImageDescription: true,
        ThumbImage: true,
        ThumbTitle: true,
        Tag: true,
        Slug: true,
        Category: { select: { Category: true } },
        BackgroundColor: true,
      },
    });

    return NextResponse.json(topStories, {
      status: 200,
      statusText: "The resource has been fetched and transmitted to the client",
    });
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
