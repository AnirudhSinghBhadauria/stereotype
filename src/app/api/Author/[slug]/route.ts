import { prisma } from "../../../../../prisma/prismaClient";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;

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

  // console.log(AuthorProfile);

  return NextResponse.json({ AuthorProfile });
}
