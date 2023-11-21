export const updateReads = async (
  category: string,
  format: string,
  slug: string
) => {
  const incReads = await fetch(
    `/api/Global/Reads`,
    {
      method: "PUT",
      body: JSON.stringify({ format, slug, category }),
      next: {
        revalidate: 5,
      },
    }
  );
};
