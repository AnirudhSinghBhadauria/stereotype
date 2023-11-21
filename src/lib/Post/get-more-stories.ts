export const getMoreStories = async (category: string) => {
  const stories = await fetch(
    `/api/Story/MoreStories/${category}`,
    { method: "GET", next: { revalidate: 5 } }
  );

  if (!stories.ok) {
    throw new Error("this is an Error message, be aware.");
  }

  const sanitizedPosts = await stories.json();

  return sanitizedPosts.moreStories;
};
