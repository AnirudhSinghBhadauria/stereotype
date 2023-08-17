import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: { category: string; format: string; color: string; slug: string };
  }
) {
  const { category, color, format, slug } = params;
  return NextResponse.json({
    category,
    color,
    format,
    slug,
  });
}
