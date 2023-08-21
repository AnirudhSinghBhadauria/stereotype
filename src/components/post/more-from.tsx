import { getMoreStories } from "@/lib/Post/get-more-stories";
import { getColors } from "@/lib/global/get-colors";
import { MoreStoriesInterface } from "@/utils/interfaces";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MoreFromSection = async ({
  category,
  Author,
}: {
  category: string;
  Author: {
    Name: string;
    Slug: string;
  };
}) => {
  let index: number = -1;
  let format: string;

  const moreStories: MoreStoriesInterface[] = await getMoreStories(category);

  return (
    <div className="bg-torq-100 flex flex-row justify-center items-center px-[20px] pb-[16px] pt-[30px] lg:pb-[36px] lg:pt-[50px]">
      <div className="primary-container w-full">
        <p className="font-poly text-[18px] font-medium text-black mb-[16px]">
          More stories from{" "}
          <span>
            <Link
              href={`/${category}`}
              aria-label={`View more stories of category : ${category}`}
              className="font-semibold hover:underline underline-offset-[2.5px] hover:text-purple-100"
            >
              {category}
            </Link>
          </span>
        </p>

        <section className="w-full">
          <ul>
            {moreStories.map((post) => {
              index++;

              let connect = `${
                process.env.NEXT_PUBLIC_DOMAIN_URL
              }/Story/${category}/${index <= 1 ? "Main" : "Side"}/${
                post.Slug
              }/${getColors(post.BackgroundColor).colorSlug}`;

              return (
                <li className="group last-of-type:border-b-0 flex flex-row items-center py-[16px] border-b-[1px] border-[#000]/30">
                  <div className="ml-[10px] mr-[20px] aspect-square">
                    <div className="w-[60px] h-[60px] rounded-[2px] overflow-hidden">
                      <Link
                        href={connect}
                        aria-label={`Link to the post tagged : ${post.Tag}`}
                      >
                        <Image
                          src={post.Image}
                          alt={post.ImageDescription}
                          width={640}
                          height={640}
                          className="object-cover object-center"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="group-hover:underline underline-offset-[6px] story-more-underline font-poly text-[22px] font-semibold leading-[1.08] text-black -tracking-[0.01em] lg:text-[34px]">
                      <Link
                        href={connect}
                        aria-label={`Link to the post tagged : ${post.Tag}`}
                      >
                        {post.Title}
                        {index}
                      </Link>
                    </h3>
                  </div>
                </li>
              );
            })}
          </ul>
          <p className="font-poly text-[18px] font-medium text-black mt-[16px] mb-[8px]">
            Liked the writing style or content of this author? View more content
            from{" "}
            <span>
              <Link
                href={`/Author/${Author.Slug}`}
                aria-label={`Link to the Profile Page of Author : ${Author.Name}`}
                className="font-semibold hover:underline underline-offset-[2.5px] hover:text-purple-100"
              >
                {Author.Name}
              </Link>
            </span>
          </p>
        </section>
      </div>
    </div>
  );
};

export default MoreFromSection;
