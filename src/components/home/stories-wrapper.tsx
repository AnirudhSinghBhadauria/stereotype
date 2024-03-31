import React from "react";
import StroriesContainer from "./stories-container";
import { getStories, getStoriesForCategory } from "@/lib/Home/get-stories";
import { StoriesInterface } from "@/utils/interfaces";
import LoadMore from "./load-more";
import { Category } from "@/utils/interfaces";

const StoriesWrapper = async ({
  StoryCategory,
}: {
  StoryCategory?: Category | null;
}) => {
  let storyData: StoriesInterface[] = [];

  const stories: StoriesInterface = !StoryCategory
    ? await getStories(0)
    : await getStoriesForCategory(0, StoryCategory);

  storyData.unshift(stories);

  return (
    <ul className="flex flex-col primary-container w-full">
      {storyData.map(({ mainThumb, sideThumb, feedThumb }) => (
        <StroriesContainer
          key={mainThumb[0].Slug}
          mainThumb={mainThumb}
          sideThumb={sideThumb}
          feedThumb={feedThumb!}
        />
      ))}
      <LoadMore />
    </ul>
  );
};

export default StoriesWrapper;

// const storyData = [{ main: mainStories, side: getSideStories, status: getFeedStatus }];
