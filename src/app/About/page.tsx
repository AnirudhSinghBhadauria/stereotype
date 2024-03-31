import SiteFooter from "@/components/ui/site-footer";
import { constructMetadata } from "@/lib/global/metadata-constructor";
import Stereotype from "@/misc/logos/Stereotype";
import { Metadata } from "next";
import Link from "next/link";
import React, { Fragment } from "react"; 

export async function generateMetadata(): Promise<Metadata> {
  const metadata = constructMetadata({
    title: "About Stereotype",
    description:
      "Explore the vision, founder, and commitment of Stereotype, where diversity meets innovation in tech, reviews, entertainment, and news.",
    imgTitle: "Don't live upto your Stereotypes.",
    imgDesc:
      "Explore the vision, founder, and commitment of Stereotype, where diversity meets innovation in tech, reviews, entertainment, and news.",
    imgUrl:
      "https://cdn.sanity.io/images/aftdl3p2/production/6be92cc3f60e23a4f023a03b92adeb53cd2243c1-1200x630.jpg",
    site: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/About`,
  });

  return metadata;
}

export const viewport = {
  themeColor: "#fff",
};

const About = () => {
  return (
    <Fragment>
      <div className="z-40 absolute top-0 md:right-[0px] pb-[30px]">
        <Link
          href="/"
          aria-label="home button for stereotype"
          title="Stereotype Home"
          className="w-fit block"
        >
          <Stereotype className="h-[50px] w-[270px] md:w-[645.6px] lg:w-[700.7px] md:h-[120px] lg:h-[130px] fill-torq-100 opcatiy-100 md:opacity-50 pl-[9px]" />
        </Link>
      </div>

      <article className="relative w-full bg-white">
        <div className="pt-[40px] md:pt-[130px] pb-[40px] px-[20px]">
          <section className="mx-auto text-black my-[24px] w-full max-w-[1100px] md:mt-[16px] lg:mt-[15px]">
            <div className="mb-[30px] md:mb-[60px] max-w-[900px] md:ml-[100px]">
              <h1
                style={{ textShadow: "0.25px 0.25px 0px black" }}
                className="mb-[12px] font-poly text-[40px] font-black leading-[-1] md:text-[55px] lg:block"
              >
                About Stereotype
              </h1>
            </div>

            <div className="relative md:mx-auto md:flex md:max-w-[700px] lg:max-w-none">
              <div className="sm:ml-auto md:ml-[100px] md:max-w-[600px] lg:mx-[100px] text-black">
                <p className="font-poly mb-[20px] text-[17.5px] leading-[1.6] -tracking-[0.01em] selection:bg-[#3cffd033] text-wrap">
                  <em>Stereotype, &nbsp;</em>
                  we're on a mission to challenge stereotypes and break down
                  barriers, especially in the ever-evolving realms of tech,
                  entertainment, and news. We believe that by providing a
                  platform for diverse voices, we can offer fresh perspectives
                  and uncover hidden gems in these fields.
                </p>
                <p className="font-poly mb-[20px] text-[17.5px] leading-[1.6] -tracking-[0.01em] selection:bg-[#3cffd033]">
                  Here at Stereotype, founded in 2023, We believe that a
                  tapestry of perspectives enriches our content and fosters a
                  more inclusive online community. We're committed to providing
                  a platform where voices from all walks of life can be heard,
                  where stereotypes are challenged.
                </p>
                <p className="font-poly mb-[20px] text-[17.5px] leading-[1.6] -tracking-[0.01em] selection:bg-[#3cffd033]">
                  We invite you to explore and engage with our content. Whether
                  you're looking for tech advice, entertainment recommendations,
                  in-depth reviews, or a fresh take on the news and stories,
                  Stereotype has something for everyone. Welcome to Stereotype.
                </p>
                <p className="font-poly mb-[20px] text-[17.5px] leading-[1.6] -tracking-[0.01em] selection:bg-[#3cffd033]">
                  Got a tip for us? &nbsp;
                  <Link
                    className="underline underline-offset-4 hover:underline-about-on-hover"
                    href="/Tip-us"
                    aria-label="Got a Tip"
                  >
                    Here's how to send it securely.
                  </Link>
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>

      <SiteFooter />
    </Fragment>
  );
};

export default About;
