import "./globals.css";
import { Metadata } from "next";
import SiteHeader from "@/components/ui/site-header";
import {
  titleFont,
  generalFont,
  sansFont,
  polyFont,
} from "../misc/fonts/fonts";

export const metadata = {
  applicationName: "Stereotype",
  keywords: ["Stereotype", "stereotype", "blog", "tech blog"],
  creator: "Anirudh Bhadauria",
  publisher: "Anirudh Bhadauria",
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_DOMAIN_URL}`),
  icons: {
    icon: [{ url: "/favicon.ico" }],
    apple: [{ url: "/apple-icon.png" }],
  },
  openGraph: {
    url: `${process.env.NEXT_PUBLIC_DOMAIN_URL}`,
    title: "Stereotype",
    description:
      "Discover a world of diverse content in tech, reviews, entertainment, and news. Stereotype - Where Insights, Authenticity, and Inclusivity Meet. Explore now!",
    images: [
      {
        url: "https://cdn.sanity.io/images/aftdl3p2/production/6be92cc3f60e23a4f023a03b92adeb53cd2243c1-1200x630.jpg",
      },
    ],
  },
  twitter: {
    title: "Don't live upto your Stereotypes.",
    description:
      "Discover a world of diverse content in tech, reviews, entertainment, and news. Stereotype - Where Insights, Authenticity, and Inclusivity Meet. Explore now!",
    card: "summary_large_image",
    images: [
      "https://cdn.sanity.io/images/aftdl3p2/production/6be92cc3f60e23a4f023a03b92adeb53cd2243c1-1200x630.jpg",
    ],
    creator: "@LieCheatSteal_",
    site: `${process.env.NEXT_PUBLIC_DOMAIN_URL}`,
  },
  other: {
    "google-site-verification": `${process.env.NEXT_PUBLIC_GOOGLE_VER}`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${titleFont.variable} ${generalFont.variable} ${sansFont.variable} ${polyFont.variable} relative overflow-x-hidden`}
      >
        <SiteHeader />
        <aside
          className="fixed w-full h-screen"
          id="sidebar-portal-root"
        ></aside>
        <main>{children}</main>
      </body>
    </html>
  );
}
