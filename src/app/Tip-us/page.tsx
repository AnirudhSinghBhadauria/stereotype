import React, { Fragment } from "react";
import Link from "next/link";
import Stereotype from "@/misc/logos/Stereotype";
import SiteFooter from "@/components/ui/site-footer";
import TipUsForm from "@/components/tip-us/tip-form";
import { Metadata } from "next";
import { constructMetadata } from "@/lib/global/metadata-constructor";

export async function generateMetadata(): Promise<Metadata> {
  const metadata = constructMetadata({
    title: "Tip us - Stereotype",
    description:
      "Have a tip or story to share? Connect with Stereotype's tip line and contribute to our coverage of tech, reviews, entertainment, and news.",
    imgTitle: "Stereotype Tip Line: Share Your Stories with Us!",
    imgDesc:
      "Have a tip or story to share? Connect with Stereotype's tip line and contribute to our coverage of tech, reviews, entertainment, and news.",
    imgUrl:
      "https://cdn.sanity.io/images/aftdl3p2/production/91dafaea31fc738aa6006b2579bd50517aed906c-1200x627.jpg",
    site: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/Tip-us`,
  });

  return metadata;
}

export const viewport = {
  themeColor: '#FFF',
}

const TipUs = () => {
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
                Give us a tip
              </h1>
            </div>
            <TipUsForm />
          </section>
        </div>
      </article>

      <SiteFooter />
    </Fragment>
  );
};

export default TipUs;
