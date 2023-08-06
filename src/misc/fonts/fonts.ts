import localFont from "next/font/local";

export const titleFont = localFont({
  src: "./Pramukh-Variable.woff2",
  display: "swap",
  variable: "--font-title",
});

export const generalFont = localFont({
  src: "./GeneralSans-Variable.woff2",
  display: "swap",
  variable: "--font-general",
});

export const sansFont = localFont({
  src: "./Zodiak-Variable.woff2",
  display: "swap",
  variable: "--font-sans",
});
