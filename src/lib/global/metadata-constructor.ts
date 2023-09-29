import { Metadata } from "@/utils/interfaces";

export const constructMetadata = ({
  title,
  description,
  imgTitle,
  imgDesc,
  imgUrl,
  site,
  theme,
}: Metadata) => {
  return {
    title: title,
    description: description,
    openGraph: {
      url: site,
      title: imgTitle,
      description: imgDesc,
      images: [
        {
          url: imgUrl,
        },
      ],
    },
    twitter: {
      title: imgTitle,
      description: imgDesc,
      card: "summary_large_image",
      images: [imgUrl],
      creator: "@LieCheatSteal_",
      site: site,
    },
    themeColor: theme,
  };
};
