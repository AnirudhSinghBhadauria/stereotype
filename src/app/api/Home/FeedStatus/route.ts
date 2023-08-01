import { prisma } from "../../../../../prisma/prismaClient";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const FeedStatus = await prisma.feedStatus.findFirst({
      take: 1,
      select: {
        LastRefreshed: true,
        Message: true,
      },
    });

    return NextResponse.json(
      { FeedStatus },
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
