import FeedbackForm from "@/components/feedback/feedback-form";
import SiteFooter from "@/components/ui/site-footer";
import { constructMetadata } from "@/lib/global/metadata-constructor";
import Stereotype from "@/misc/logos/Stereotype";
import { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import React, { Fragment } from "react";

export async function generateMetadata(
  parent: ResolvingMetadata
): Promise<Metadata> {
  const metadata = constructMetadata({
    title: "Feedback - Stereotype",
    description:
      "Share your valuable feedback with Stereotype. Help us enhance your content experience in tech, reviews, entertainment, and news.",
    imgTitle: "Give us your Feedback: Your Voice Matters!",
    imgDesc:
      "Share your valuable feedback with Stereotype. Help us enhance your content experience in tech, reviews, entertainment, and news.",
    imgUrl:
      "https://cdn.sanity.io/images/aftdl3p2/production/6be92cc3f60e23a4f023a03b92adeb53cd2243c1-1200x630.jpg",
    site: "https://breakingstereotypes.vercel.app/Feedback",
    theme: "#FFF",
  });

  return metadata;
}

const Feedback = () => {
  return (
    <Fragment>
      <div className="z-40 absolute top-0 md:right-[0px] pb-[30px]">
        <Link
          href="/"
          aria-label="home button for stereotype"
          title="Stereotype Home"
          className="w-fit block"
        >
          <Stereotype className="h-[50px] w-[270px] md:w-[645.6px] lg:w-[700.7px] md:h-[120px] lg:h-[130px] fill-torq-100 opacity-50 md:opacity-50 pl-[9px]" />
        </Link>
      </div>

      <article className="relative w-full bg-white">
        <div className="pt-[40px] md:pt-[130px] pb-[40px] px-[16px]">
          <section className="mx-auto text-black my-[24px] w-full max-w-[1100px] md:mt-[16px] lg:mt-[15px]">
            <div className="max-w-[900px] lg:ml-[15px]">
              <h1
                style={{ textShadow: "0.25px 0.25px 0px black" }}
                className="font-poly text-[40px] text-[#424242] font-black leading-[-1] md:text-[44px] lg:block selection:bg-[#B4D5FF]"
              >
                Feedback
              </h1>
            </div>
            <div className="w-full lg:ml-[15px]">
              <h2 className="text-[#424242] font-[900] text-[29.35px] font-poly tracking-[0.02em] mt-[54px] mb-[16px] selection:bg-[#B4D5FF] leading-[1.35] sm:leading-normal">
                Inviting your valuable feedback
              </h2>
            </div>
            <FeedbackForm />
          </section>
        </div>
      </article>

      <SiteFooter />
    </Fragment>
  );
};

export default Feedback;
