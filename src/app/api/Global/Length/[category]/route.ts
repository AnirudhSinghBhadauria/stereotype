import { NextResponse } from "next/server";
import { prisma } from "../../../../../../prisma/prismaClient";
import { Category } from "@/utils/interfaces";
// import { Category } from "@/utils/interfaces";

export async function GET(
  request: Request,
  { params }: { params: { category: Category | undefined } }
) {
  try {
    const category = params.category;
    const main = await prisma.mainStory.findMany({
      where: { Category: { Category: category } },
      select: { id: true },
    });
    const side = await prisma.sideStory.findMany({
      where: { Category: { Category: category } },
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
