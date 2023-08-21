import Link from "next/link";
import React from "react";
import MostPopular from "./most-popular";

const ArticleBody = () => {
  return (
    <div className="w-full bg-white flex flex-row">
      <div className="flex flex-row primary-container w-full mx-auto my-[28px] lg:mb-[40px] lg:mt-[36px]">
        <section className="w-full">
          <div className="sm:ml-auto md:ml-[100px] w-full md:max-w-[600px] lg:mx-[100px] text-black">
            <div>
              <p className="intro-story-para">
                Worem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                iure debitis expedita fugit eligendi explicabo neque impedit
                error voluptatum, assumenda quisquam cupiditate deserunt sunt
                nam facere dolores aspernatur obcaecati dolorem. Officia,
                laboriosam minima quam explicabo, harum accusantium atque
                voluptate quasi ab aut eum amet. Quod numquam explicabo dolore
                quis omnis maiores possimus officiis architecto, ab voluptatem
                sit modi molestias.
              </p>
            </div>
            <div>
              <p className="body-story-para">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                iure debitis expedita fugit eligendi explicabo neque impedit
                error voluptatum, assumenda quisquam cupiditate deserunt sunt
                nam facere dolores aspernatur obcaecati dolorem. Officia,
                laboriosam minima quam explicabo, harum accusantium atque
                voluptate quasi ab aut eum amet. Quod numquam explicabo dolore
                quis omnis maiores possimus officiis architecto, ab voluptatem
                sit modi molestias.
              </p>
            </div>
            <div>
              <p className="body-story-para">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                iure debitis expedita fugit eligendi explicabo neque impedit
                error voluptatum, assumenda quisquam cupiditate deserunt sunt
                nam facere dolores aspernatur obcaecati dolorem. Officia,
                laboriosam minima quam explicabo, harum accusantium atque
                voluptate quasi ab aut eum amet. Quod numquam explicabo dolore
                quis omnis maiores possimus officiis architecto, ab voluptatem
                sit modi molestias.
              </p>
            </div>
            <div>
              <p className="body-story-para">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                iure debitis expedita fugit eligendi explicabo neque impedit
                error voluptatum, assumenda quisquam cupiditate deserunt sunt
                nam facere dolores aspernatur obcaecati dolorem. Officia,
                laboriosam minima quam explicabo, harum accusantium atque
                voluptate quasi ab aut eum amet. Quod numquam explicabo dolore
                quis omnis maiores possimus officiis architecto, ab voluptatem
                sit modi molestias.
              </p>
            </div>

            <div className="relative flex flex-row justify-end">
              <div className="w-[320px] absolute -left-[120px] top-[10px]">
                <div className="mb-[10px] h-[22px] w-[65px] bg-torq-100"></div>
                <p className="font-poly text-[#131313] pb-[8px] text-[28px] font-semibold leading-[1.2] tracking-[0.01em] selection:bg-[#d8fff6] bg-repeating-lines-dark-post">
                  Porem ipsum dolor, sit amet consectetur adipisicing elit. Odio
                  consequatur quibusdam quiaal
                </p>
              </div>
              <div className="w-3/5">
                <p className="body-story-para">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Omnis iure debitis expedita fugit eligendi explicabo neque
                  impedit error voluptatum, assumenda quisquam cupiditate
                  deserunt sunt nam facere dolores aspernatur obcaecati dolorem.
                  Officia, laboriosam minima quam explicabo, harum accusantium
                  atque voluptate.
                </p>
              </div>
            </div>

            <div>
              <p className="body-story-para">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                iure debitis expedita fugit eligendi explicabo neque impedit
                error voluptatum, assumenda quisquam cupiditate deserunt sunt
                nam facere dolores aspernatur obcaecati dolorem. Officia,
                laboriosam minima quam explicabo, harum accusantium atque
                voluptate quasi ab aut eum amet. Quod numquam explicabo dolore
                quis omnis maiores possimus officiis architecto, ab voluptatem
                sit modi molestias.
              </p>
            </div>
          </div>
        </section>
        <section className="flex flex-row items-end w-full max-w-[300px]">
          <div className="h-4/5 w-full relative">
            <MostPopular />
          </div>
        </section>
      </div>
    </div>
  );
};

export default ArticleBody;
