export const getStoriesLength = async (Category: string | null) => {
  const length = await fetch(
    `http://localhost:3000/api/Global/Length/${Category}`,
    {
      method: "GET",
      next: {
        revalidate: 5,
      },
    }
  );

  if (!length.ok) {
    throw new Error("its an Error be aware");
  }

  const sanitizedLength = await length.json();

  return sanitizedLength;
};
