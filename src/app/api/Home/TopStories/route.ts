import { prisma } from "../../../../../prisma/prismaClient";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const topStories = await prisma.topStories.findMany({
      orderBy: {
        PostNumber: "desc",
      },
      select: {
        Title: true,
        Author: { select: { Name: true } },
        CreatedAt: true,
        Image: true,
        ImageDescription: true,
        Slug: true,
      },
      take: 5,
    });

    return NextResponse.json(
      { topStories },
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
