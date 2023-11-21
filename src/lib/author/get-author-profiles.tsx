
export const getAuthorProfile = async (slug: string) => {
  const authorData = await fetch(
    `/api/Author/Profile/${slug}`,
    {
      method: "GET",
      next: {
        revalidate: 5,
      }
    }
  );

  if (!authorData.ok) {
    throw new Error("this is an Error message, be aware.");
  }

  const sanitizedAuthor = await authorData.json();

  return sanitizedAuthor;
};
