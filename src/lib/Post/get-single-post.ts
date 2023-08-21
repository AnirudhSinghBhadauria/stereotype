export const getSinglePost = async (params: string[]) => {
  const category = params[0];
  const format = params[1];
  const slug = params[2];

  const singlePost = await fetch(
    `${process.env.NEXT_PUBLIC_DOMAIN_URL}/api/Global/Post/${category}/${format}/${slug}`,
    { method: "GET", next: { revalidate: 5 } }
  );

  if (!singlePost.ok) {
    throw new Error("this is an Error message, be aware.");
  }

  const sanitizedPost = await singlePost.json();

  return sanitizedPost;
};

// "http://localhost:3000/api/Global/Post/category/format/slug"
