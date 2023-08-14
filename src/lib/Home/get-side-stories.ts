export const getSideStories = async () => {
  const stories = await fetch("http://localhost:3000/api/Story/SideStories");

  if (!stories.ok) {
    throw new Error("Error ocurred be aware.");
  }

  const storiesInJson = await stories.json();

  return storiesInJson.sideStoriesThumbData;
};
