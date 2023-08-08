import React, { Fragment, Suspense } from "react";
import Headliner from "@/components/home/headliner-stroy";
import TopStories from "@/components/home/top-stories";

const Home = () => {
  return (
    <section className="w-full flex flex-row justify-center">
      <div className="primary-cotnainer relative flex flex-row">
        <div className="w-full lg:w-[710px] lg:pt-[150px]">
          <Headliner />
        </div>
        <div className="h-full w-full lg:max-h-full lg:w-[380px] lg:pt-[174px]">
          <h2 className="mx-auto max-w-[500px] pb-[20px] font-poly text-[15.75px] leading-[1.2] tracking-[0.005em] 
          text-torq-100 md:pl-[60px] lg:pl-[40px]">
            Top Stories
          </h2>
          <TopStories />
        </div>
      </div>
    </section>
  );
};

export default Home;
