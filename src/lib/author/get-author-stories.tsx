export const getAuthorStories = async (slug: string) => {
  const authorData = await fetch(
    `https://breakingstereotypes.vercel.app/api/Author/Stories/${slug}`,
    {
      method: "GET",
    }
  );

  if (!authorData.ok) {
    throw new Error("this is an Error message, be aware.");
  }

  const sanitizedAuthor = await authorData.json();

  return sanitizedAuthor;
};
