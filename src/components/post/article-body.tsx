import React from "react";
import MostPopular from "./most-popular";
import { ArticleBodyInterface, SinglePostInterface } from "@/utils/interfaces";
import { getSinglePost } from "@/lib/Post/get-single-post";

const ArticleBody = async ({ params }: { params: string[] }) => {
  const postData: ArticleBodyInterface = await getSinglePost(params);

  const {
    AsideText,
    IntroPara,
    ParaTwo,
    ParaThree,
    ParaFour,
    ParaFive,
    ParaSix,
    ParaSeven,
    ParaEight,
  } = postData;

  return (
    <div className="w-full bg-white flex flex-row">
      <div className="flex flex-row primary-container w-full mx-auto my-[28px] lg:mb-[40px] lg:mt-[36px]">
        <section className="w-full">
          <div className="sm:ml-auto md:ml-[100px] w-full md:max-w-[600px] lg:mx-[100px] text-black">
            <div>
              <p className="intro-story-para">{IntroPara}</p>
            </div>
            <div>
              <p className="body-story-para">{ParaTwo}</p>
            </div>
            <div>
              <p className="body-story-para">{ParaThree}</p>
            </div>
            <div>
              <p className="body-story-para">{ParaFour}</p>
            </div>
            {ParaFive && (
              <div>
                <p className="body-story-para">{ParaFive}</p>
              </div>
            )}
            {ParaSix && (
              <div>
                <p className="body-story-para">{ParaSix}</p>
              </div>
            )}

            <div className="relative flex flex-row justify-end">
              <div className="w-[320px] absolute -left-[120px] top-[10px]">
                <div className="mb-[10px] h-[22px] w-[65px] bg-torq-100"></div>
                <p className="font-poly text-[#131313] pb-[8px] text-[28px] font-semibold leading-[1.2] tracking-[0.01em] selection:bg-[#d8fff6] bg-repeating-lines-dark-post">
                  {AsideText}
                </p>
              </div>
              <div className="w-3/5">
                <p className="body-story-para">{ParaSeven}</p>
              </div>
            </div>

            <div>
              <p className="body-story-para">{ParaEight}</p>
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
