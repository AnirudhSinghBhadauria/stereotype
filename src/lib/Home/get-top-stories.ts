export const getTopStories = async (Category: string | null) => {
  const topStories = await fetch(
    `http://localhost:3000/api/Story/TopStories/${Category}`,
    {
      method: "GET",
    }
  );

  if (!topStories.ok) {
    throw new Error("this is an Error message, be aware.");
  }
  const sanitizedTopStories = await topStories.json();

  return sanitizedTopStories;
};
