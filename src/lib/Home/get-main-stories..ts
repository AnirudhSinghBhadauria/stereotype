export const getMainStories = async () => {
  const stories = await fetch(
    `${process.env.NEXT_PUBLIC_DOMAIN_URL}/api/Story/MainStories`,
    {
      method: "GET",
      next: {
        revalidate: 5,
      },
    }
  );

  if (!stories.ok) {
    throw new Error("this is an Error message, be aware.");
  }

  const storiesInJson = await stories.json();

  return storiesInJson.mainStoriesThumbData;
};
