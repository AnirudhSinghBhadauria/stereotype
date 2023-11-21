export const updateReads = async (
  category: string,
  format: string,
  slug: string
) => {
  const incReads = await fetch(
    `${process.env.NEXT_PUBLIC_DOMAIN_URL}/api/Global/Reads`,
    {
      method: "PUT",
      body: JSON.stringify({ format, slug, category }),
      next: {
        revalidate: 5,
      },
    }
  );
};
