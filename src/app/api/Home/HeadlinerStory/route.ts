import { prisma } from "../../../../../prisma/prismaClient";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const headlinerStory = await prisma.headlinerStory.findFirst({
      orderBy: { PostNumber: "desc" },
      select: {
        Author: { select: { Name: true } },
        CreatedAt: true,
        ThumbTitle: true,
        ThumbDescription: true,
        ThumbImage: true,
        ThumbImageDescription: true,
        Reads: true,
        Slug: true,
      },
    });

    return NextResponse.json(
      { headlinerStory },
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
