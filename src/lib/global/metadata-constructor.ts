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
    icons: "/favicon.ico",
    openGraph: {
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
    metadataBase: new URL('https://breakingstereotypes.vercel.app'),
  };
};
