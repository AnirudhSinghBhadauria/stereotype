import { MetadataRoute } from "next";
import { getAllAuthors } from "@/lib/author/get-all-authors";
import { getAllPosts } from "@/lib/Post/get-all-post";
import { getColors } from "@/lib/global/get-colors";

export default async function sitemap() {
  const allAuthors = await getAllAuthors();
  const allPosts = await getAllPosts();

  const posts =
    allPosts.map(({ BackgroundColor, Category, CreatedAt, Slug, format }) => {
      return {
        url: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/Story/${
          Category.Category
        }/${format}/${Slug}/${getColors(BackgroundColor).colorSlug}`,
        lastModified: CreatedAt,
        priority: 0.8,
      };
    }) ?? [];

  const authors =
    allAuthors.map(({ Slug, JoinedAt }: {Slug: string, JoinedAt: Date}) => {
      return {
        url: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/Author/${Slug}`,
        lastModified: JoinedAt,
        priority: 0.8,
      };
    }) ?? [];

  return [
    {
      url: `${process.env.NEXT_PUBLIC_DOMAIN_URL}`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/Category/Tech`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/Category/Entertainment`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/Category/Review`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/Category/News`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/About`,
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/Ethics-Statement`,
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/Tip-us`,
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/Feedback`,
      lastModified: new Date(),
      priority: 0.5,
    },
    ...authors,
    ...posts,
  ];
}
