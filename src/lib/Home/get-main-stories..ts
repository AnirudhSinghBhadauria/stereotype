export const getMainStories = async () => {
  const stories = await fetch(
    "http://localhost:3000/api/Story/MainStories",
    {
      method: "GET",
    }
  );

  if (!stories.ok) {
    throw new Error("this is an Error message, be aware.");
  }

  const storiesInJson = await stories.json();

  return storiesInJson.mainStoriesThumbData;
};
