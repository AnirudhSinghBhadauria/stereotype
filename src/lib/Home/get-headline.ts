export const getHeadlines = async (Category: string | null) => {
  const headlines = await fetch(
    `http://localhost:3000/api/Story/HeadlinerStory/${Category}`,
    {
      method: "GET",
    }
  );

  if (!headlines.ok) {
    throw new Error("this is an Error message, be aware.");
  }

  const sanitizedHeadline = headlines.json();

  return sanitizedHeadline;
};
