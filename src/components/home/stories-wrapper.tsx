import React from "react";
import StroriesContainer from "./stories-container";
import { getMainStories } from "@/lib/Home/get-main-stories.";
import { getSideStories } from "@/lib/Home/get-side-stories";
import { getStories } from "@/lib/Home/get-stories";
import {
  FeedStatus,
  MainStoriesThumb,
  SideStoryThumb,
} from "@/utils/interfaces";

const StoriesWrapper = async () => {
  let storyData = [];

  const stories: {
    mainThumb: MainStoriesThumb[];
    sideThumb: SideStoryThumb[];
    feedThumb: FeedStatus;
  } = await getStories();
  
  stories && storyData.unshift(stories);

  //   console.log(storyData);

  return (
    <div className="flex flex-col primary-container w-full">
      {storyData.map(({ mainThumb, sideThumb, feedThumb }) => (
        <StroriesContainer
          mainThumb={mainThumb}
          sideThumb={sideThumb}
          feedThumb={feedThumb}
        />
      ))}
    </div>
  );
};

export default StoriesWrapper;

// [{ main: mainStories, side: getSideStories, status: getFeedStatus }];
