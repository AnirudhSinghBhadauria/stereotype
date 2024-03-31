export const getStoriesLength = async (StoryCategory: string | null) => {
  const length = await fetch(`/api/Global/Length/${StoryCategory}`, {
    method: "GET",
    next: {
      revalidate: 5,
    },
  });

  if (!length.ok) {
    throw new Error("its an Error be aware");
  }

  const sanitizedLength = await length.json();

  return sanitizedLength;
};
