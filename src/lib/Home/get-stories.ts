export const getStories = async (skip: number, category: string | null) => {
  const storiesForCat = `/${category}`;
  const stories = await fetch(
    `http://localhost:3000/api/Story/Stories${storiesForCat}?skip=${skip}&take=1`,
    {
      next: {
        revalidate: 5,
      },
      method: "GET",
    }
  );

  if (!stories.ok) {
    throw new Error("Error ocurred be aware.");
  }

  const storiesInJson = await stories.json();

  return storiesInJson;
};
