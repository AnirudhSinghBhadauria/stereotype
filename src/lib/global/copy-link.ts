export const copyText = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    throw new Error("Error copying link, try again.");
  }
};
