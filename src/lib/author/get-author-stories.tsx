
export const getAuthorStories = async (slug: string) => {
  const authorData = await fetch(
    `/api/Author/Stories/${slug}`,
    {
      method: "GET",
      next: { revalidate: 5 },
    }
  );

  if (!authorData.ok) {
    throw new Error("this is an Error message, be aware.");
  }

  const sanitizedAuthor = await authorData.json();

  return sanitizedAuthor;
};
