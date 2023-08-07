export const getDate = (date: string) => {
  const formatedDate = new Date(date).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
  });

  return formatedDate;
};
