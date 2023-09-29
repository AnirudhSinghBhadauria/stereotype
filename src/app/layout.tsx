import "./globals.css";
import { Metadata } from "next";
import SiteHeader from "@/components/ui/site-header";
import {
  titleFont,
  generalFont,
  sansFont,
  polyFont,
} from "../misc/fonts/fonts";
import { constructMetadata } from "@/lib/global/metadata-constructor";

export async function generateMetadata(): Promise<Metadata> {
  const metadata = constructMetadata({
    title: "Stereotype",
    description:
      "Discover a world of diverse content in tech, reviews, entertainment, and news. Stereotype - Where Insights, Authenticity, and Inclusivity Meet. Explore now!",
    imgTitle: "Don't live upto your Stereotypes.",
    imgDesc:
      "Discover a world of diverse content in tech, reviews, entertainment, and news. Stereotype - Where Insights, Authenticity, and Inclusivity Meet. Explore now!",
    imgUrl:
      "https://cdn.sanity.io/images/aftdl3p2/production/6be92cc3f60e23a4f023a03b92adeb53cd2243c1-1200x630.jpg",
    site: "https://breakingstereotypes.vercel.app",
    theme: "#131313cc",
  });

  return metadata;
}

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
