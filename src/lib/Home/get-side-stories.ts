export const getSideStories = async () => {
  const stories = await fetch(
    `/api/Story/SideStories`,
    {
      method: "GET",
      next: {
        revalidate: 5,
      },
    }
  );

  if (!stories.ok) {
    throw new Error("Error ocurred be aware.");
  }

  const storiesInJson = await stories.json();

  return storiesInJson.sideStoriesThumbData;
};
