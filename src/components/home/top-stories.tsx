import React from "react";
import StoryCard from "./story-card";
import { TopStoryInterface } from "@/utils/interfaces";
import { getTopStories } from "@/lib/Home/get-top-stories";

const TopStories = async ({ Category }: { Category: string | null }) => {
  const topStories = await getTopStories(Category);

  const topStoriesCollection: TopStoryInterface[] =
    topStories.topStoriesThumbData;

  let number = 0;

  return (
    <ol className="flex flex-col">
      {topStoriesCollection.map(
        ({
          Author,
          CreatedAt,
          Slug,
          ThumbImage,
          ThumbImageDescription,
          ThumbTitle,
          Tag,
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
            />
          );
        }
      )}
    </ol>
  );
};

export default TopStories;
