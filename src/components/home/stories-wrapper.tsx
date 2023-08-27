import React from "react";
import StroriesContainer from "./stories-container";
import { getStories } from "@/lib/Home/get-stories";
import { StoriesInterface } from "@/utils/interfaces";
import LoadMore from "./load-more";
import { Category } from "@prisma/client";

const StoriesWrapper = async ({
  StoryCategory,
}: {
  StoryCategory?: Category | null;
}) => {
  let storyData: StoriesInterface[] = [];

  const ifCategory = StoryCategory ? StoryCategory : null;
  const stories: StoriesInterface = await getStories(0, ifCategory);

  storyData.unshift(stories);

  return (
    <ul className="flex flex-col primary-container w-full">
      {storyData.map(({ mainThumb, sideThumb, feedThumb }) => (
        <StroriesContainer
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
