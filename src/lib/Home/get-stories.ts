export const getStories = async () => {
  const stories = await fetch("http://localhost:3000/api/Story/Stories", {
    // next: { revalidate: 5 },
    method: "GET",
  });

  if (!stories.ok) {
    throw new Error("Error ocurred be aware.");
  }

  const storiesInJson = await stories.json();

  return storiesInJson;
};
