export const getTopStories = async (StoryCategory: string | null) => {
  const topStories = await fetch(
    `${process.env.NEXT_PUBLIC_DOMAIN_URL}/api/Story/TopStories/${StoryCategory}`,
    {
      method: "GET",
      next: {
        revalidate: 5
      }
    }
  );

  if (!topStories.ok) {
    throw new Error("this is an Error message, be aware.");
  }
  const sanitizedTopStories = await topStories.json();

  return sanitizedTopStories;
};
