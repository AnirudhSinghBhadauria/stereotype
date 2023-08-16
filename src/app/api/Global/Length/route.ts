import { NextResponse } from "next/server";
import { prisma } from "../../../../../prisma/prismaClient";

export async function GET(request: NextResponse) {
  try {
    const main = await prisma.mainStory.findMany({
      select: { id: true },
    });
    const side = await prisma.sideStory.findMany({
      select: { id: true },
    });

    const mainStoriesLength = main.length;
    const sideStoriesLength = side.length;

    return NextResponse.json({ mainStoriesLength, sideStoriesLength });
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
