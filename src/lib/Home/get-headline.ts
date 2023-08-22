export const getHeadlines = async (StoryCategory: string | null) => {
  const headlines = await fetch(
    `${process.env.NEXT_PUBLIC_DOMAIN_URL}/api/Story/HeadlinerStory/${StoryCategory}`,
    {
      method: "GET",
      next: {
        revalidate: 5,
      },
    }
  );

  if (!headlines.ok) {
    throw new Error("this is an Error message, be aware.");
  }

  const sanitizedHeadline = headlines.json();

  return sanitizedHeadline;
};
