import Stereotype from "@/misc/logos/Stereotype";
import Link from "next/link";
import React, { Fragment } from "react";

const About = () => {
  return (
    <Fragment>
      <div className="z-40 absolute top-0 md:right-[20px] pb-[30px]">
        <Link
          href="/"
          aria-label="home button for stereotype"
          title="Stereotype Home"
          className="w-fit block"
        >
          <Stereotype className="h-[50px] w-[270px] md:w-[645.6px] lg:w-[700.7px] md:h-[120px] lg:h-[130px] fill-torq-100 opacity-50 pl-[9px]" />
        </Link>
      </div>

      <article className="relative w-full h-screen bg-white">
        <div className="pt-[130px] px-[20px]">
          <section className="mx-auto text-black my-[24px] w-full max-w-[1100px] md:mt-[16px] lg:mt-[35px]">
            <div className="mb-[40px] max-w-[900px] md:ml-[100px]">
              <h1 className="mb-[12px] font-poly text-[40px] font-black leading-[-1] md:text-[55px] lg:block">
                About Stereotype
              </h1>
            </div>
          </section>
        </div>
      </article>
    </Fragment>
  );
};

export default About;
