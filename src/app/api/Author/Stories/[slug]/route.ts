import { NextResponse } from "next/server";
import { prisma } from "../../../../../../prisma/prismaClient";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params;

    const AuthorStories = await prisma.author.findUnique({
      where: {
        Slug: slug,
      },
      select: {
        MainStory: {
          select: {
            ThumbTitle: true,
            ThumbImageOne: true,
            ThumbImageOneDescription: true,
            Tag: true,
            Slug: true,
            CreatedAt: true,
            Category: { select: { Category: true } },
            Author: { select: { Name: true, Slug: true } },
            Reads: true,
          },
          orderBy: {
            PostNumber: "desc",
          },
          take: 3,
        },
        SideStory: {
          select: {
            Author: { select: { Name: true, Slug: true } },
            Category: { select: { Category: true } },
            ThumbTitle: true,
            Tag: true,
            ThumbImage: true,
            ThumbImageDescription: true,
            Slug: true,
            CreatedAt: true,
            Reads: true,
          },
          orderBy: {
            PostNumber: "desc",
          },
          take: 2,
        },
      },
    });

    return NextResponse.json(
      { AuthorStories },
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
