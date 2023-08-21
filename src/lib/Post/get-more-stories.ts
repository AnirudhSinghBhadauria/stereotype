export const getMoreStories = async (category: string) => {
  const stories = await fetch(
    `${process.env.NEXT_PUBLIC_DOMAIN_URL}/api/Story/MoreStories/${category}`,
    { method: "GET", next: { revalidate: 5 } }
  );

  if (!stories.ok) {
    throw new Error("this is an Error message, be aware.");
  }

  const sanitizedPosts = await stories.json();

  return sanitizedPosts.moreStories;
};
