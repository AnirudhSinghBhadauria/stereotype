export const getAuthorProfile = async (slug: string) => {
  const authorData = await fetch(
    `http://localhost:3000/api/Author/Profile/${slug}`,
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
