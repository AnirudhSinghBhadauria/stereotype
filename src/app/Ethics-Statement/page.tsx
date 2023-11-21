import SiteFooter from "@/components/ui/site-footer";
import { constructMetadata } from "@/lib/global/metadata-constructor";
import Stereotype from "@/misc/logos/Stereotype";
import { Metadata } from "next";
import Link from "next/link";
import React, { Fragment } from "react";

export async function generateMetadata(): Promise<Metadata> {
  const metadata = constructMetadata({
    title: "Ethics Statement - Stereotype",
    description:
      "Explore Stereotype's ethical principles, our commitment to integrity, inclusivity, and trust. Learn how we uphold the highest standards in tech, reviews, entertainment, and news content.",
    imgTitle: "Our Ethics: Commitment to Integrity and Inclusivity",
    imgDesc:
      "Explore Stereotype's ethical principles, our commitment to integrity, inclusivity, and trust. Learn how we uphold the highest standards in tech, reviews, entertainment, and news content.",
    imgUrl:
      "https://cdn.sanity.io/images/aftdl3p2/production/6be92cc3f60e23a4f023a03b92adeb53cd2243c1-1200x630.jpg",
    site: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/Ethics-Statement`,
    theme: '#FFF'
  });

  return metadata;
}

const EthicsStatement = () => {
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
            <div className="mb-[30px] max-w-[900px] md:ml-[100px]">
              <h1
                style={{ textShadow: "0.25px 0.25px 0px black" }}
                className="mb-[12px] font-poly text-[40px] font-black leading-[-1] md:text-[55px] lg:block"
              >
                Ethics Statement
              </h1>
            </div>

            <div className="relative md:mx-auto md:flex md:max-w-[700px] lg:max-w-none">
              <div className="sm:ml-auto md:ml-[100px] md:max-w-[600px] lg:mx-[100px] text-black">
                <p className="font-poly mb-[20px] text-[17.5px] leading-[1.6] -tracking-[0.01em] selection:bg-[#3cffd033] text-wrap">
                  At&nbsp; <em>Stereotype, &nbsp;</em>
                  our commitment is to provide genuinely valuable and authentic
                  content. We take pride in our rigorous research and dedication
                  to accuracy. Every piece undergoes meticulous review to meet
                  the highest quality standards. We serve content that reflects
                  real interests.
                </p>
                <p className="font-poly mb-[20px] text-[17.5px] leading-[1.6] -tracking-[0.01em] selection:bg-[#3cffd033] text-wrap">
                  We prioritize transparency and forthrightness. If we make
                  errors or discover new information impacting past content,
                  we'll promptly acknowledge and correct it. Viewer trust is our
                  top priority. When engaging with Stereotype, expect candid,
                  trustworthy content, built on a foundation of honesty.
                </p>
                <p className="font-poly mb-[20px] text-[17.5px] leading-[1.6] -tracking-[0.01em] selection:bg-[#3cffd033] text-wrap">
                  We believe in showcasing diverse perspectives to empower
                  informed choices. Stereotype is your platform for a wide range
                  of voices, ensuring you have access to multifaceted
                  viewpoints. Our commitment to inclusivity means you'll find
                  content that resonates with your unique interests and helps
                  you make well-rounded decisions. Trust Stereotype as your
                  source for varied, informed content.
                </p>
                <p className="font-poly mb-[20px] text-[17.5px] leading-[1.6] -tracking-[0.01em] selection:bg-[#3cffd033] text-wrap">
                  Stereotype is more than content; it's a community of
                  knowledge, entertainment, and enthusiasts. We encourage open
                  dialogue and value feedback. Our commitment to honesty extends
                  to interactions with our community. We aim to foster a
                  respectful environment where trust and authenticity reign,
                  ensuring every member feels valued and heard.
                </p>
                <p className="font-poly mb-[20px] text-[17.5px] leading-[1.6] -tracking-[0.01em] selection:bg-[#3cffd033] text-wrap">
                  Want to give us feedback? &nbsp;
                  <span>
                    <Link
                      className="underline underline-offset-4 hover:underline-about-on-hover"
                      href="/Feedback"
                      aria-label="Send us feedback"
                    >
                      Here's how to send it.
                    </Link>
                  </span>
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

export default EthicsStatement;
