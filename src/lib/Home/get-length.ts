export const getStoriesLength = async () => {
  const length = await fetch("http://localhost:3000/api/Global/Length", {
    method: "GET",
    next: {
      revalidate: 1800,
    },
  });

  if (!length.ok) {
    throw new Error("its an Error be aware");
  }

  const sanitizedLength = await length.json();

  return sanitizedLength;
};
