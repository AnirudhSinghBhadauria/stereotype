import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { Category } from "@/utils/interfaces";
// import { prisma } from "../../../../../prisma/prismaClient";

export async function PUT(request: Request) {
  const prisma = new PrismaClient();
  try {
    let reads;
    const post = await request.json();

    const format: string = post.format;
    const slug: string = post.slug;
    const category: Category = post.category;

    format === "Headline"
      ? (reads = await prisma.headlinerStory.update({
          where: { Slug: slug, Category: { Category: category } },
          data: {
            Reads: { increment: 1 },
          },
        }))
      : format === "Main"
      ? (reads = await prisma.mainStory.update({
          where: { Slug: slug, Category: { Category: category } },
          data: {
            Reads: { increment: 1 },
          },
        }))
      : (reads = await prisma.sideStory.update({
          where: { Slug: slug, Category: { Category: category } },
          data: {
            Reads: { increment: 1 },
          },
        }));
    return NextResponse.json({ message: "Succesfully Updated Reads" });
  } catch (error) {
    return NextResponse.json(
      {
        error: error,
        errorMessage: "The server cannot update the requested resource.",
      },
      {
        status: 404,
        statusText: "The server cannot update the requested resource.",
      }
    );
  }
}
