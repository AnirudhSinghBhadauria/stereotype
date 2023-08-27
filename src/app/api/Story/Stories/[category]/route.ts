import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../../prisma/prismaClient";
import { Category } from "@prisma/client";

export async function GET(
  request: NextRequest,
  { params }: { params: { category: Category | undefined } }
) {

  const category = params.category;

  let skip: any = request.nextUrl.searchParams.get("skip");

  let skipForSide = parseInt(skip);
  let skipForMain = skipForSide * 2;

  try {
    const mainStories = await prisma.mainStory.findMany({
      where: { Category: { Category: category } },
      orderBy: { PostNumber: "desc" },
      take: 2,
      skip: skipForMain,
      select: {
        Author: { select: { Name: true, Slug: true } },
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
        Tag: true,
        BackgroundColor: true
      },
    });

    const sideStories = await prisma.sideStory.findMany({
      where: { Category: { Category: category } },
      orderBy: { PostNumber: "desc" },
      take: 1,
      skip: skipForSide,
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
        Author: { select: { Name: true, Slug: true } },
        CreatedAt: true,
        Tag: true,
      },
    });

    const feedStatus = await prisma.feedStatus.findFirst({
      take: 1,
      select: {
        LastRefreshed: true,
        Message: true,
      },
    });

    return NextResponse.json({
      mainThumb: mainStories,
      sideThumb: sideStories,
      feedThumb: feedStatus,
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
