import { prisma } from "../../../../prisma/prismaClient";
import { NextResponse } from "next/server";

export async function POST(paramsRaw: Request) {
  try {
    const params = await paramsRaw.json();
    const slug = params.author;

    const AuthorProfile = await prisma.author.findUnique({
      where: {
        Slug: slug,
      },
      select: {
        Name: true,
        DescriptionOne: true,
        DescriptionTwo: true,
        Email: true,
        Linkedin: true,
        Linktree: true,
        Instagram: true,
        Twitter: true,
        Designation: true,
        ProfilePicture: true,
        MainStory: {
          select: {
            ThumbTitle: true,
            ThumbImageOne: true,
            ThumbImageOneDescription: true,
            Tag: true,
            Slug: true,
            CreatedAt: true,
            Category: { select: { Category: true } },
            Author: { select: { Name: true } },
          },
          orderBy: {
            PostNumber: "desc",
          },
          take: 3,
        },
        SideStory: {
          select: {
            Author: { select: { Name: true } },
            Category: { select: { Category: true } },
            ThumbTitle: true,
            Tag: true,
            ThumbImage: true,
            ThumbImageDescription: true,
            Slug: true,
            CreatedAt: true,
          },
          orderBy: {
            PostNumber: "desc",
          },
          take: 2,
        },
      },
    });

    return NextResponse.json(
      { AuthorProfile },
      {
        status: 200,
        statusText:
          "The resource has been fetched and transmitted to the client.",
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: error,
        errorMessage:
          "The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded. ",
      },
      {
        status: 503,
        statusText:
          "The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded. ",
      }
    );
  }
}
