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
  generator: "Next.js",
  applicationName: "Stereotype",
  keywords: ["Stereotype", "stereotype", "blog", "tech blog"],
  authors: [
    { name: "Anirudh Singh Bhadauria" },
    {
      name: "Anirudh Singh Bhadauria",
      url: "https://breakingstereotypes.vercel.app/",
    },
  ],
  creator: "Anirudh Singh Bhadauria",
  publisher: "Anirudh Singh Bhadauria",
  metadataBase: new URL("https://breakingstereotypes.vercel.app/"),
  icons: {
    icon: [{ url: "/favicon.ico" }],
    apple: [{ url: "/apple-icon.png" }],
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
