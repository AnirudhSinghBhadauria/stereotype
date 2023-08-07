import { NextResponse } from "next/server";
import { prisma } from "../../../../../../prisma/prismaClient";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
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
      },
    });

    return NextResponse.json(
      { AuthorProfile },
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
