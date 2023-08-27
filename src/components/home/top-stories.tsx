import React from "react";
import StoryCard from "./story-card";
import { TopStoryInterface } from "@/utils/interfaces";
import { getTopStories } from "@/lib/Home/get-top-stories";
import { Category } from "@prisma/client";

const TopStories = async ({ StoryCategory }: { StoryCategory?: Category }) => {
  let ifStoryCategory = StoryCategory ? StoryCategory : null;
  const topStories: TopStoryInterface[] = await getTopStories(ifStoryCategory);
  let number = 0;

  return (
    <ol className="flex flex-col">
      {topStories.map(
        ({
          Author,
          CreatedAt,
          Slug,
          ThumbImage,
          ThumbImageDescription,
          ThumbTitle,
          Tag,
          BackgroundColor,
          Category,
        }) => {
          number++;

          return (
            <StoryCard
              number={number}
              Author={Author}
              CreatedAt={CreatedAt}
              Slug={Slug}
              ThumbImage={ThumbImage}
              ThumbImageDescription={ThumbImageDescription}
              ThumbTitle={ThumbTitle}
              Tag={Tag}
              BackgroundColor={BackgroundColor}
              Category={Category}
            />
          );
        }
      )}
    </ol>
  );
};

export default TopStories;
