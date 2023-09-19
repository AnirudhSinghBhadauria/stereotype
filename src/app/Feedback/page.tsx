import FeedbackForm from "@/components/feedback/feedback-form";
import SiteFooter from "@/components/ui/site-footer";
import Stereotype from "@/misc/logos/Stereotype";
import Link from "next/link";
import React, { Fragment } from "react";

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
          <Stereotype className="h-[50px] w-[270px] md:w-[645.6px] lg:w-[700.7px] md:h-[120px] lg:h-[130px] fill-torq-100 opcatiy-100 md:opacity-50 pl-[9px]" />
        </Link>
      </div>

      <article className="relative w-full bg-white">
        <div className="pt-[40px] md:pt-[130px] pb-[40px] px-[20px]">
          <section className="mx-auto text-black my-[24px] w-full max-w-[1100px] md:mt-[16px] lg:mt-[15px]">
            <div className="max-w-[900px] ml-[15px]">
              <h1
                style={{ textShadow: "0.25px 0.25px 0px black" }}
                className="font-poly text-[40px] text-[#424242] font-black leading-[-1] md:text-[44px] lg:block selection:bg-[#B4D5FF]"
              >
                Feedback
              </h1>
            </div>

            <div className="w-full">
              <h2 className="text-[#424242] font-[900] text-[28px] font-poly tracking-[0.02em] mt-[54px] mb-[16px] ml-[15px] selection:bg-[#B4D5FF]">
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
