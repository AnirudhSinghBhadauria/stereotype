export const getLoadMoreStories = async (
  skip: number,
  StoryCategory: string
) => {
  const stories = await fetch(
    `/api/Story/Stories/${StoryCategory}?skip=${skip}&take=1`,
    {
      method: "GET",
    }
  );
  if (!stories.ok) {
    throw new Error("Error ocurred be aware.");
  }
  const storiesInJson = await stories.json();
  return storiesInJson;
};
