export const getStories = async (skip: number, StoryCategory: string | null) => {
  // const storiesForCat = `/${StoryCategory}`;
  const stories = await fetch(
    `${process.env.NEXT_PUBLIC_DOMAIN_URL}/api/Story/Stories/${StoryCategory}?skip=${skip}&take=1`,
    {
      method: "GET",
      next: {
        revalidate: 5,
      },
    }
  );
``
  if (!stories.ok) {
    throw new Error("Error ocurred be aware.");
  }

  const storiesInJson = await stories.json();

  return storiesInJson;
};
