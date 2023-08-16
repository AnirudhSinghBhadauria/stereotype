export const getStories = async (skip: number) => {
  const stories = await fetch(
    `http://localhost:3000/api/Story/Stories?skip=${skip}&take=1`,
    {
      // next: { revalidate: 30 },
      method: "GET",
    }
  );

  if (!stories.ok) {
    throw new Error("Error ocurred be aware.");
  }

  const storiesInJson = await stories.json();

  return storiesInJson;
};
